"""3D Pylos – interactive two-player game with Ursina.

Controls:
  Right-drag / scroll to orbit/zoom the board.
  Left-click a highlighted cell to place or move a sphere.
  During take-back phase, click your own spheres to reclaim them,
  or click PASS to end take-backs.

Run:  .venv/bin/python play_pylos_3d.py
"""

from __future__ import annotations

import sys
from math import sqrt

from ursina import (
    Ursina, Entity, EditorCamera, Text, color, Vec3, camera,
    destroy, invoke, window, Button, curve,
)

sys.path.insert(0, ".")
from pylos_env.game import (
    PylosGame, NUM_CELLS, LEVEL_OFFSET, LEVEL_SIZE, cell_level,
)

# ── constants ────────────────────────────────────────────────────────
SPHERE_R = 0.45
SPACING = 1.0
Y_STEP = SPACING * sqrt(2) / 2
ANIM_DUR = 0.35

COLORS = [color.rgba(0.86, 0.24, 0.24, 1), color.rgba(0.24, 0.47, 0.86, 1)]
GHOST_COLORS = [color.rgba(0.86, 0.24, 0.24, 0.35), color.rgba(0.24, 0.47, 0.86, 0.35)]
TAKE_BACK_COLOR = color.rgba(1, 0.86, 0.24, 0.6)
BOARD_COLOR = color.rgba(0.24, 0.20, 0.16, 1)

# ── 3D positions for each cell ──────────────────────────────────────
CELL_POS: list[Vec3] = []
for lv in range(4):
    s = LEVEL_SIZE[lv]
    half = (s - 1) * SPACING / 2
    y = lv * Y_STEP
    for r in range(s):
        for c in range(s):
            CELL_POS.append(Vec3(c * SPACING - half, y, r * SPACING - half))

RESERVE_POS = [Vec3(-3.5, 0, 0), Vec3(3.5, 0, 0)]

# ── app ──────────────────────────────────────────────────────────────
app = Ursina(borderless=False, title="Pylos 3D", size=(1100, 800))
window.color = color.rgba(0.12, 0.12, 0.14, 1)

cam = EditorCamera(rotation_smoothing=4, zoom_speed=1.5)
camera.position = Vec3(0, 6, -8)
camera.look_at(Vec3(0, 1, 0))

Entity(model="cube", color=BOARD_COLOR, scale=(5.5, 0.15, 5.5),
       position=Vec3(0, -0.15, 0))

# ── game state ───────────────────────────────────────────────────────
game = PylosGame()
spheres: list[Entity | None] = [None] * NUM_CELLS
ghosts: list[Entity] = []
selected_src: int | None = None
animating = False

# ── UI ───────────────────────────────────────────────────────────────
turn_text = Text(text="", position=(-0.85, 0.47), scale=1.4, color=color.white)
info_text = Text(text="", position=(-0.85, 0.42), scale=1.1, color=color.light_gray)
reserve_text = Text(text="", position=(-0.85, -0.45), scale=1.2, color=color.white)
winner_text = Text(text="", position=(0, 0.05), origin=(0, 0), scale=3,
                   color=color.yellow, enabled=False)

pass_btn = Button(text="PASS", color=color.dark_gray, scale=(0.15, 0.05),
                  position=(0, -0.4), enabled=False)
pass_btn.text_entity.scale = 0.7


def player_name(p: int) -> str:
    return f"Player {p + 1} ({'Red' if p == 0 else 'Blue'})"


def refresh_ui():
    p = game.current_player
    c = "dd3c3c" if p == 0 else "3c78dc"
    turn_text.text = f"<{c}>{player_name(p)}</{c}>"
    if game.phase == "take_back":
        info_text.text = f"Take back up to {game.take_backs_remaining} sphere(s) or PASS"
    elif selected_src is not None:
        info_text.text = "Select destination to raise (or click source to cancel)"
    else:
        info_text.text = "Click a ghost to place, or click your sphere to raise it"
    reserve_text.text = (
        f"<dd3c3c>Red: {game.reserves[0]}</dd3c3c>   "
        f"<3c78dc>Blue: {game.reserves[1]}</3c78dc>"
    )


def clear_ghosts():
    for g in ghosts:
        destroy(g)
    ghosts.clear()


def _ghost(pos, clr, on_click, scale=SPHERE_R * 2):
    g = Entity(model="sphere", color=clr, scale=scale,
               position=pos, collider="sphere")
    g.on_click = on_click
    ghosts.append(g)
    return g


# ── ghost display ────────────────────────────────────────────────────

def show_place_ghosts():
    clear_ghosts()
    pv = game.current_player
    for a in game.legal_place_actions():
        if a < 30:
            _ghost(CELL_POS[a], GHOST_COLORS[pv], lambda act=a: do_place(act))


def show_raise_ghosts(src: int):
    clear_ghosts()
    pv = game.current_player
    for a in game.legal_place_actions():
        if a >= 30:
            s, d = divmod(a - 30, 30)
            if s == src:
                _ghost(CELL_POS[d], GHOST_COLORS[pv],
                       lambda act=a: do_raise(act, src))
    _ghost(CELL_POS[src], color.rgba(0.8, 0.8, 0.8, 0.4), lambda: cancel_raise())


def show_take_back_ghosts():
    clear_ghosts()
    for a in game.legal_take_back_actions():
        if a > 0:
            _ghost(CELL_POS[a - 1], TAKE_BACK_COLOR,
                   lambda act=a: do_take_back(act), scale=SPHERE_R * 2.15)


# ── sphere management ────────────────────────────────────────────────

def create_sphere(idx: int, player: int, pos: Vec3 | None = None):
    e = Entity(model="sphere", color=COLORS[player], scale=SPHERE_R * 2,
               position=pos or CELL_POS[idx], collider="sphere")
    e.cell_idx = idx
    e.player = player
    e.on_click = lambda ent=e: handle_sphere_click(ent)
    spheres[idx] = e
    return e


def handle_sphere_click(ent):
    global selected_src
    if animating or game.done or game.phase != "place":
        return
    if ent.player != game.current_player or not game.is_uncovered(ent.cell_idx):
        return
    has_raise = any(a >= 30 and (a - 30) // 30 == ent.cell_idx
                    for a in game.legal_place_actions())
    if has_raise:
        selected_src = ent.cell_idx
        show_raise_ghosts(ent.cell_idx)
        refresh_ui()


def cancel_raise():
    global selected_src
    selected_src = None
    show_place_ghosts()
    refresh_ui()


# ── animation helpers ────────────────────────────────────────────────

def _anim(entity, target, dur, crv, cb=None):
    global animating
    animating = True
    entity.animate_position(target, duration=dur, curve=crv)
    invoke(_anim_done, cb, delay=dur + 0.05)


def _anim_done(cb):
    global animating
    animating = False
    if cb:
        cb()


def _after_place(action):
    sq = game.apply_place(action)
    if game.done:
        _show_winner()
    elif sq:
        _enter_take_back()
    else:
        show_place_ghosts()
    refresh_ui()


# ── move execution ───────────────────────────────────────────────────

def do_place(action: int):
    global selected_src
    if animating or game.done:
        return
    clear_ghosts()
    selected_src = None
    pv = game.current_player
    ent = create_sphere(action, pv, pos=RESERVE_POS[pv])
    _anim(ent, CELL_POS[action], ANIM_DUR, curve.in_out_quad,
          lambda: _after_place(action))


def do_raise(action: int, src: int):
    global selected_src, animating
    if animating or game.done:
        return
    clear_ghosts()
    selected_src = None
    s, d = divmod(action - 30, 30)
    ent = spheres[s]
    if not ent:
        return
    spheres[s] = None
    spheres[d] = ent
    ent.cell_idx = d
    target = CELL_POS[d]
    lift_y = target.y + 2
    lift = Vec3(ent.position.x, lift_y, ent.position.z)
    over = Vec3(target.x, lift_y, target.z)
    animating = True
    dur = ANIM_DUR * 0.5

    def s1():
        ent.animate_position(over, duration=dur * 1.2, curve=curve.in_out_quad)
        invoke(s2, delay=dur * 1.2 + 0.02)

    def s2():
        ent.animate_position(target, duration=dur, curve=curve.in_quad)
        invoke(s3, delay=dur + 0.02)

    def s3():
        global animating
        animating = False
        _after_place(action)

    ent.animate_position(lift, duration=dur, curve=curve.out_quad)
    invoke(s1, delay=dur + 0.02)


def do_take_back(action: int):
    if animating or game.done:
        return
    clear_ghosts()
    idx = action - 1
    ent = spheres[idx]
    if not ent:
        return
    spheres[idx] = None
    pv = game.current_player

    def after():
        destroy(ent)
        game.apply_take_back(action)
        if game.done:
            _show_winner()
        elif game.phase == "take_back":
            _enter_take_back()
        else:
            show_place_ghosts()
            pass_btn.enabled = False
        refresh_ui()

    _anim(ent, RESERVE_POS[pv], ANIM_DUR, curve.in_out_quad, after)


def do_pass():
    if animating or game.done:
        return
    clear_ghosts()
    pass_btn.enabled = False
    game.apply_take_back(0)
    if game.done:
        _show_winner()
    else:
        show_place_ghosts()
    refresh_ui()


pass_btn.on_click = do_pass


def _enter_take_back():
    show_take_back_ghosts()
    pass_btn.enabled = True


def _show_winner():
    clear_ghosts()
    pass_btn.enabled = False
    w = game.winner
    winner_text.text = f"{player_name(w)} wins!"
    winner_text.color = COLORS[w]
    winner_text.enabled = True


# ── board decorations ────────────────────────────────────────────────
for i in range(NUM_CELLS):
    if cell_level(i) == 0:
        Entity(model="sphere", color=color.rgba(0.35, 0.31, 0.27, 1), scale=0.12,
               position=CELL_POS[i] + Vec3(0, -0.02, 0))

Entity(model="sphere", color=COLORS[0], scale=0.5,
       position=RESERVE_POS[0] + Vec3(0, 0.5, 0))
Text(text="Red\nReserve", position=(-0.62, -0.35), scale=0.9, color=COLORS[0])
Entity(model="sphere", color=COLORS[1], scale=0.5,
       position=RESERVE_POS[1] + Vec3(0, 0.5, 0))
Text(text="Blue\nReserve", position=(0.48, -0.35), scale=0.9, color=COLORS[1])

# ── start ────────────────────────────────────────────────────────────
refresh_ui()
show_place_ghosts()
app.run()
