"""3D Stacking Game board visualisation using Panda3D + simplepbr.

Coordinate system:
  - Balls have radius 1, so diameter = 2.
  - Level 0 (4x4): centers at z=1, x/y in {-3, -1, 1, 3}
  - Level k: x/y shifted inward by 1 per level, z = 1 + k*sqrt(2)
  - Reserve balls: two rows of 15, placed on either side of the board.
"""

import copy
import math
import random

from direct.showbase.ShowBase import ShowBase
from direct.gui.DirectGui import (
    DirectButton, DirectFrame, DirectLabel, DirectSlider,
    DirectScrolledFrame, DGG,
)
from direct.interval.LerpInterval import LerpPosInterval, LerpFunc
from direct.interval.IntervalGlobal import Sequence, Func, Wait, Parallel
from panda3d.core import (
    AmbientLight, DirectionalLight, LVector4,
    AntialiasAttrib, Point3, Vec4,
    Material, GeomNode, Geom, GeomTriangles, GeomVertexFormat,
    GeomVertexData, GeomVertexWriter, loadPrcFileData,
    TransparencyAttrib,
    ClockObject, TextNode,
)
import simplepbr
from stacking_env.game import StackingGame, cell_level, SUPPORT_MAP, RESTING_ON, NUM_CELLS

loadPrcFileData("", "framebuffer-multisample 1")
loadPrcFileData("", "multisamples 4")
loadPrcFileData("", "win-size 1400 900")
loadPrcFileData("", "window-title Stacking Game 3D")

SQRT2 = math.sqrt(2.0)
BALL_RADIUS = 1.0
BALL_SPACING = 2.0


# --- Position tables ---

def board_positions():
    sizes = [4, 3, 2, 1]
    pos = {}
    idx = 0
    for level, s in enumerate(sizes):
        z = BALL_RADIUS + level * SQRT2
        half = (s - 1)
        for r in range(s):
            for c in range(s):
                x = -half + c * BALL_SPACING
                y = -half + r * BALL_SPACING
                pos[idx] = (x, y, z)
                idx += 1
    return pos

BOARD_POS = board_positions()


def reserve_positions(side):
    y_base = side * 8.0
    positions = []
    for i in range(15):
        row = i // 8
        col = i % 8
        x = -7.0 + col * BALL_SPACING
        y = y_base + side * row * BALL_SPACING
        positions.append((x, y, BALL_RADIUS))
    return positions

RESERVE_P0 = reserve_positions(-1)
RESERVE_P1 = reserve_positions(1)


def make_uv_sphere(rings=32, sectors=64):
    fmt = GeomVertexFormat.getV3n3()
    vdata = GeomVertexData("sphere", fmt, Geom.UHStatic)
    vertex = GeomVertexWriter(vdata, "vertex")
    normal = GeomVertexWriter(vdata, "normal")
    for i in range(rings + 1):
        phi = math.pi * i / rings
        for j in range(sectors + 1):
            theta = 2.0 * math.pi * j / sectors
            x = math.sin(phi) * math.cos(theta)
            y = math.sin(phi) * math.sin(theta)
            z = math.cos(phi)
            vertex.addData3(x, y, z)
            normal.addData3(x, y, z)
    tris = GeomTriangles(Geom.UHStatic)
    for i in range(rings):
        for j in range(sectors):
            a = i * (sectors + 1) + j
            b = a + sectors + 1
            tris.addVertices(a, b, a + 1)
            tris.addVertices(a + 1, b, b + 1)
    geom = Geom(vdata)
    geom.addPrimitive(tris)
    node = GeomNode("sphere_hq")
    node.addGeom(geom)
    return node


def make_material(r, g, b, roughness=0.35, metallic=0.0):
    mat = Material()
    mat.setBaseColor(Vec4(r, g, b, 1))
    mat.setRoughness(roughness)
    mat.setMetallic(metallic)
    return mat


MAT_LIGHT = make_material(0.92, 0.87, 0.75, roughness=0.3)
MAT_DARK = make_material(0.18, 0.10, 0.06, roughness=0.25)
MAT_GROUND = make_material(0.20, 0.18, 0.16, roughness=0.8)
MAT_MARKER = make_material(0.30, 0.28, 0.25, roughness=0.6)
MAT_GHOST = make_material(0.7, 0.85, 1.0, roughness=0.1)

# HUD styling constants
HUD_BG = (0.08, 0.08, 0.10, 0.88)
HUD_BTN = (0.30, 0.30, 0.35, 1)
HUD_TXT = (1, 1, 1, 1)
HUD_DIM = (0.5, 0.5, 0.5, 1)


def _desc_action(action, phase, player):
    """Human-readable description of a game action."""
    pname = "Light" if player == 0 else "Dark"
    if phase == "place":
        if action < 30:
            lv = cell_level(action)
            return f"{pname} places at cell {action} (L{lv})"
        code = action - 30
        src, dst = divmod(code, 30)
        return f"{pname} raises {src} to {dst}"
    else:
        if action == 0:
            return f"{pname} passes take-back"
        return f"{pname} takes back cell {action - 1}"


class StackingVis(ShowBase):
    def __init__(self):
        super().__init__()
        simplepbr.init(msaa_samples=4, enable_shadows=True)
        self.setBackgroundColor(0.12, 0.12, 0.15, 1)
        self.render.setAntialias(AntialiasAttrib.MAuto)
        self.disableMouse()

        self._sphere_geom = make_uv_sphere()
        self._setup_lights()
        self._make_ground()
        self._make_board_markers()

        # Ball storage
        self.balls = {}       # bid -> NodePath
        self.ball_player = {} # bid -> player (0 or 1)
        self._next_id = 0

        # Create reserve balls (visual only)
        self.reserve_p0 = []
        self.reserve_p1 = []
        for p in RESERVE_P0:
            self.reserve_p0.append(self._spawn_ball(p, MAT_LIGHT))
        for p in RESERVE_P1:
            self.reserve_p1.append(self._spawn_ball(p, MAT_DARK))
        self.board_slots = {i: None for i in range(30)}

        # Game state
        self.game = StackingGame()
        self.human_player = 0   # set by setup screen
        self.computer_player = 1
        self._history = []      # list of (game_snapshot, vis_snapshot) for undo
        self._redo_stack = []
        self._move_log = []     # list of description strings
        self._awaiting_human = False
        self._animating = False

        # Camera defaults
        self._cam_heading = 30.0
        self._cam_pitch = 30.0
        self._cam_dist = 28.0

        # Show setup screen first; hide 3D scene
        self._scene_root = self.render
        self._show_setup_screen()

    # ------------------------------------------------------------------ lights / ground / markers
    def _setup_lights(self):
        dlight = DirectionalLight("key")
        dlight.setColor(LVector4(1.2, 1.15, 1.05, 1))
        dlight.setShadowCaster(True, 2048, 2048)
        dlight.getLens().setFilmSize(30, 30)
        dlight.getLens().setNearFar(1, 60)
        dlnp = self.render.attachNewNode(dlight)
        dlnp.setPos(15, -15, 25)
        dlnp.lookAt(0, 0, 2)
        self.render.setLight(dlnp)

        dlight2 = DirectionalLight("fill")
        dlight2.setColor(LVector4(0.35, 0.35, 0.4, 1))
        dlnp2 = self.render.attachNewNode(dlight2)
        dlnp2.setHpr(-135, -25, 0)
        self.render.setLight(dlnp2)

        dlight3 = DirectionalLight("rim")
        dlight3.setColor(LVector4(0.25, 0.25, 0.3, 1))
        dlnp3 = self.render.attachNewNode(dlight3)
        dlnp3.setHpr(10, -70, 0)
        self.render.setLight(dlnp3)

        alight = AmbientLight("ambient")
        alight.setColor(LVector4(0.15, 0.15, 0.17, 1))
        self.render.setLight(self.render.attachNewNode(alight))

    def _make_ground(self):
        from panda3d.core import CardMaker
        cm = CardMaker("ground")
        cm.setFrame(-25, 25, -25, 25)
        gnd = self.render.attachNewNode(cm.generate())
        gnd.setP(-90); gnd.setZ(0); gnd.setMaterial(MAT_GROUND, 1)

    def _make_board_markers(self):
        from panda3d.core import CardMaker
        cm = CardMaker("marker")
        s = 0.45; cm.setFrame(-s, s, -s, s)
        for idx, (x, y, z) in BOARD_POS.items():
            m = self.render.attachNewNode(cm.generate())
            m.setPos(x, y, 0.02); m.setP(-90); m.setMaterial(MAT_MARKER, 1)

    # ------------------------------------------------------------------ ball helpers
    def _spawn_ball(self, pos, material):
        np = self.render.attachNewNode(GeomNode("ball"))
        np.node().addGeom(self._sphere_geom.getGeom(0).makeCopy())
        np.setScale(BALL_RADIUS); np.setPos(*pos); np.setMaterial(material, 1)
        bid = self._next_id; self._next_id += 1
        self.balls[bid] = np
        return bid

    def _animate_ball(self, bid, target, duration=0.8, callback=None):
        np = self.balls[bid]
        start = np.getPos()
        tx, ty, tz = target
        mid = Point3((start.x + tx) / 2, (start.y + ty) / 2, max(start.z, tz) + 4.0)
        half = duration / 2
        seq = Sequence(
            LerpPosInterval(np, half, mid, blendType="easeInOut"),
            LerpPosInterval(np, half, Point3(tx, ty, tz), blendType="easeInOut"),
        )
        if callback:
            seq.append(Func(callback))
        seq.start()
        return seq

    def _mat_for_player(self, player):
        return MAT_LIGHT if player == 0 else MAT_DARK

    # ------------------------------------------------------------------ camera
    def _update_camera(self):
        rad_h = math.radians(self._cam_heading)
        rad_p = math.radians(self._cam_pitch)
        cos_p = math.cos(rad_p)
        self.camera.setPos(
            self._cam_dist * cos_p * math.sin(rad_h),
            -self._cam_dist * cos_p * math.cos(rad_h),
            self._cam_dist * math.sin(rad_p),
        )
        self.camera.lookAt(0, 0, 2)

    def _cam_rotate(self, delta):
        self._cam_heading = (self._cam_heading + delta) % 360
        self._update_camera()
        if hasattr(self, '_sl_rot'):
            self._sl_rot["value"] = self._cam_heading

    def _cam_tilt(self, delta):
        self._cam_pitch = max(5, min(85, self._cam_pitch + delta))
        self._update_camera()
        if hasattr(self, '_sl_pitch'):
            self._sl_pitch["value"] = self._cam_pitch

    def _cam_zoom(self, delta):
        self._cam_dist = max(10, min(60, self._cam_dist + delta))
        self._update_camera()
        if hasattr(self, '_sl_zoom'):
            self._sl_zoom["value"] = self._cam_dist

    # ------------------------------------------------------------------ setup screen
    def _show_setup_screen(self):
        self._cam_heading = 0; self._cam_pitch = 10; self._cam_dist = 55
        self._update_camera()

        self._setup_frame = DirectFrame(
            frameColor=(0.05, 0.05, 0.07, 0.95),
            frameSize=(-0.6, 0.6, -0.45, 0.45),
            pos=(0, 0, 0),
        )
        DirectLabel(text="STACKING GAME", scale=0.12, pos=(0, 0, 0.28),
                    parent=self._setup_frame, text_fg=HUD_TXT, frameColor=(0,0,0,0))
        DirectLabel(text="Choose your color:", scale=0.05, pos=(0, 0, 0.12),
                    parent=self._setup_frame, text_fg=HUD_DIM, frameColor=(0,0,0,0))

        self._color_choice = 0  # 0=light, 1=dark
        self._btn_light = DirectButton(
            text="Light (first)", scale=0.05, pos=(-0.22, 0, 0.0),
            parent=self._setup_frame, command=self._choose_color, extraArgs=[0],
            frameSize=(-3.5, 3.5, -0.8, 1.2), text_fg=HUD_TXT,
            frameColor=(0.5, 0.45, 0.35, 1),
        )
        self._btn_dark = DirectButton(
            text="Dark (second)", scale=0.05, pos=(0.22, 0, 0.0),
            parent=self._setup_frame, command=self._choose_color, extraArgs=[1],
            frameSize=(-3.5, 3.5, -0.8, 1.2), text_fg=HUD_TXT,
            frameColor=(0.3, 0.3, 0.35, 1),
        )
        DirectButton(
            text="START", scale=0.065, pos=(0, 0, -0.2),
            parent=self._setup_frame, command=self._start_game,
            frameSize=(-3, 3, -0.8, 1.2), text_fg=(0.7, 1, 0.7, 1),
            frameColor=(0.2, 0.45, 0.2, 1),
        )

    def _choose_color(self, c):
        self._color_choice = c
        if c == 0:
            self._btn_light["frameColor"] = (0.5, 0.45, 0.35, 1)
            self._btn_dark["frameColor"] = (0.3, 0.3, 0.35, 1)
        else:
            self._btn_light["frameColor"] = (0.3, 0.3, 0.35, 1)
            self._btn_dark["frameColor"] = (0.35, 0.2, 0.15, 1)

    # ------------------------------------------------------------------ start game + fly-in
    def _start_game(self):
        self.human_player = self._color_choice
        self.computer_player = 1 - self._color_choice
        self._setup_frame.destroy()

        # Fly-in animation
        start_h, start_p, start_d = self._cam_heading, self._cam_pitch, self._cam_dist
        target_h, target_p, target_d = 30.0, 30.0, 28.0

        def lerp_cam(t):
            self._cam_heading = start_h + (target_h - start_h) * t
            self._cam_pitch = start_p + (target_p - start_p) * t
            self._cam_dist = start_d + (target_d - start_d) * t
            self._update_camera()

        seq = Sequence(
            LerpFunc(lerp_cam, duration=2.0, fromData=0, toData=1, blendType="easeInOut"),
            Func(self._on_fly_in_done),
        )
        seq.start()

    def _on_fly_in_done(self):
        self._setup_picking()
        self._build_hud()
        self._save_snapshot()
        self._begin_turn()

    # ------------------------------------------------------------------ picking
    def _setup_picking(self):
        # No collision-based picking — we use mouse-to-ground-plane projection

        # No collision spheres needed — we project mouse onto ground plane

        # Ghost ball
        self._ghost = self.render.attachNewNode(GeomNode("ghost"))
        self._ghost.node().addGeom(self._sphere_geom.getGeom(0).makeCopy())
        self._ghost.setScale(BALL_RADIUS * 1.02)
        self._ghost.setMaterial(MAT_GHOST, 1)
        self._ghost.setTransparency(TransparencyAttrib.MAlpha)
        self._ghost.setAlphaScale(0.35)
        self._ghost.setBin("transparent", 10)
        self._ghost.hide()
        self._hovered_cell = None
        self._ghost_time = 0.0

        self.taskMgr.add(self._hover_task, "hoverTask")
        self.accept("mouse1", self._on_click)

        # Keyboard camera
        for key, fn, arg in [
            ("arrow_left", self._cam_rotate, -3), ("arrow_right", self._cam_rotate, 3),
            ("arrow_up", self._cam_tilt, 3), ("arrow_down", self._cam_tilt, -3),
            ("wheel_up", self._cam_tilt, 3), ("wheel_down", self._cam_tilt, -3),
            ("+", self._cam_zoom, -1), ("-", self._cam_zoom, 1),
        ]:
            self.accept(key, fn, [arg])
            self.accept(key + "-repeat", fn, [arg])

        # Two-finger trackpad: vertical scroll = pitch, horizontal scroll = rotation
        # macOS sends wheel_left / wheel_right for horizontal swipe
        self.accept("wheel_left", self._cam_rotate, [-5])
        self.accept("wheel_right", self._cam_rotate, [5])

        # Shift + scroll = zoom (workaround for pinch-to-zoom on macOS trackpad)
        self.accept("shift-wheel_up", self._cam_zoom, [-2])
        self.accept("shift-wheel_down", self._cam_zoom, [2])

        # Right-click drag for rotation/pitch (trackpad two-finger + click, or right-click)
        self._rmb_down = False
        self._last_mouse = None
        self.accept("mouse3", self._rmb_press)
        self.accept("mouse3-up", self._rmb_release)
        self.taskMgr.add(self._drag_orbit_task, "dragOrbit")

    def _rmb_press(self):
        self._rmb_down = True
        if self.mouseWatcherNode.hasMouse():
            m = self.mouseWatcherNode.getMouse()
            self._last_mouse = (m.x, m.y)

    def _rmb_release(self):
        self._rmb_down = False
        self._last_mouse = None

    def _drag_orbit_task(self, task):
        if not self._rmb_down or not self.mouseWatcherNode.hasMouse():
            return task.cont
        m = self.mouseWatcherNode.getMouse()
        cur = (m.x, m.y)
        if self._last_mouse:
            dx = cur[0] - self._last_mouse[0]
            dy = cur[1] - self._last_mouse[1]
            self._cam_heading = (self._cam_heading + dx * 150) % 360
            self._cam_pitch = max(5, min(85, self._cam_pitch + dy * 80))
            self._update_camera()
            if hasattr(self, '_sl_rot'):
                self._sl_rot["value"] = self._cam_heading
            if hasattr(self, '_sl_pitch'):
                self._sl_pitch["value"] = self._cam_pitch
        self._last_mouse = cur
        return task.cont

    def _mouse_to_ground_xy(self):
        """Project mouse ray onto z=1 plane, return (x, y) or None."""
        if not self.mouseWatcherNode.hasMouse():
            return None
        mpos = self.mouseWatcherNode.getMouse()
        # Get near and far points on the mouse ray in world space
        from panda3d.core import Point3 as P3
        near = P3()
        far = P3()
        self.camLens.extrude(mpos, near, far)
        near = self.render.getRelativePoint(self.camera, near)
        far = self.render.getRelativePoint(self.camera, far)
        # Intersect with z=1 plane (ball center height on level 0)
        dz = far.z - near.z
        if abs(dz) < 1e-6:
            return None
        t = (1.0 - near.z) / dz
        x = near.x + t * (far.x - near.x)
        y = near.y + t * (far.y - near.y)
        return (x, y)

    def _find_nearest_valid_cell(self, mx, my):
        """Find the valid board cell closest to (mx, my) in x,y, within a threshold."""
        g = self.game
        valid = self._get_valid_cells()
        best, best_dist = None, 1.8  # max snap distance
        for idx in valid:
            bx, by, bz = BOARD_POS[idx]
            dist = math.hypot(bx - mx, by - my)
            if dist < best_dist:
                best_dist = dist
                best = idx
        return best

    def _get_valid_cells(self):
        """Return set of cell indices that are valid interaction targets."""
        g = self.game
        valid = set()
        if g.phase == "place":
            actions = g.legal_place_actions()
            for a in actions:
                if a < 30:
                    valid.add(a)
                else:
                    code = a - 30
                    src, dst = divmod(code, 30)
                    valid.add(src)  # raise source
                    if getattr(self, '_awaiting_raise_dst', False) and src == getattr(self, '_raise_src', -1):
                        valid.add(dst)  # raise destination
            # Also add raise sources (own uncovered balls)
            pv = g._player_val(self.human_player)
            for i in range(NUM_CELLS):
                if g.board[i] == pv and g.is_uncovered(i):
                    valid.add(i)
        else:
            for a in g.legal_take_back_actions():
                if a > 0:
                    valid.add(a - 1)
        return valid

    def _hover_task(self, task):
        if not self._awaiting_human or self._animating:
            self._ghost.hide(); self._hovered_cell = None
            return task.cont

        xy = self._mouse_to_ground_xy()
        if xy is None:
            self._ghost.hide(); self._hovered_cell = None
            return task.cont

        cell_idx = self._find_nearest_valid_cell(*xy)
        if cell_idx is None:
            self._ghost.hide(); self._hovered_cell = None
            return task.cont

        self._hovered_cell = cell_idx
        x, y, z = BOARD_POS[cell_idx]
        self._ghost.setPos(x, y, z)
        self._ghost.show()
        self._ghost_time += ClockObject.getGlobalClock().getDt()
        self._ghost.setAlphaScale(0.28 + 0.1 * math.sin(self._ghost_time * 3.0))
        return task.cont

    def _on_click(self):
        if not self._awaiting_human or self._animating or self._hovered_cell is None:
            return
        self._handle_human_click(self._hovered_cell)

    # ------------------------------------------------------------------ HUD panels
    def _build_hud(self):
        # --- View panel (left) ---
        vf = DirectFrame(frameColor=HUD_BG, frameSize=(-0.28, 0.28, -0.38, 0.22), pos=(-1.2, 0, -0.55))
        DirectLabel(text="View", scale=0.045, pos=(0, 0, 0.15), parent=vf,
                    text_fg=HUD_TXT, frameColor=(0,0,0,0))

        DirectLabel(text="Rotation", scale=0.032, pos=(-0.18, 0, 0.06), parent=vf,
                    text_fg=HUD_DIM, frameColor=(0,0,0,0), text_align=TextNode.ALeft)
        self._sl_rot = DirectSlider(range=(0, 360), value=self._cam_heading, pageSize=5,
                                    scale=0.2, pos=(0.02, 0, 0.02), parent=vf,
                                    command=self._on_sl_rot)

        DirectLabel(text="Pitch", scale=0.032, pos=(-0.18, 0, -0.08), parent=vf,
                    text_fg=HUD_DIM, frameColor=(0,0,0,0), text_align=TextNode.ALeft)
        self._sl_pitch = DirectSlider(range=(5, 85), value=self._cam_pitch, pageSize=2,
                                      scale=0.2, pos=(0.02, 0, -0.12), parent=vf,
                                      command=self._on_sl_pitch)

        DirectLabel(text="Zoom", scale=0.032, pos=(-0.18, 0, -0.22), parent=vf,
                    text_fg=HUD_DIM, frameColor=(0,0,0,0), text_align=TextNode.ALeft)
        self._sl_zoom = DirectSlider(range=(10, 60), value=self._cam_dist, pageSize=2,
                                     scale=0.2, pos=(0.02, 0, -0.26), parent=vf,
                                     command=self._on_sl_zoom)

        # --- Game panel (right-top) ---
        gf = DirectFrame(frameColor=HUD_BG, frameSize=(-0.28, 0.28, -0.28, 0.22), pos=(1.2, 0, 0.7))
        DirectLabel(text="Game", scale=0.045, pos=(0, 0, 0.15), parent=gf,
                    text_fg=HUD_TXT, frameColor=(0,0,0,0))

        self._status_label = DirectLabel(
            text="", scale=0.035, pos=(0, 0, 0.06), parent=gf,
            text_fg=(0.7, 1, 0.7, 1), frameColor=(0,0,0,0), text_wordwrap=14,
        )
        self._btn_undo = DirectButton(
            text="Undo", scale=0.04, pos=(-0.12, 0, -0.08), parent=gf,
            command=self._do_undo, frameSize=(-2.5, 2.5, -0.8, 1.2),
            text_fg=HUD_TXT, frameColor=HUD_BTN,
        )
        self._btn_redo = DirectButton(
            text="Redo", scale=0.04, pos=(0.12, 0, -0.08), parent=gf,
            command=self._do_redo, frameSize=(-2.5, 2.5, -0.8, 1.2),
            text_fg=HUD_TXT, frameColor=HUD_BTN,
        )
        self._btn_pass = DirectButton(
            text="Pass take-back", scale=0.04, pos=(0, 0, -0.2), parent=gf,
            command=self._do_pass_takeback, frameSize=(-4, 4, -0.8, 1.2),
            text_fg=HUD_TXT, frameColor=HUD_BTN,
        )
        self._btn_pass.hide()

        # --- Move log panel (right-bottom, collapsible) ---
        self._log_open = True
        self._log_frame = DirectFrame(frameColor=HUD_BG, frameSize=(-0.28, 0.28, -0.52, 0.22),
                                      pos=(1.2, 0, -0.15))
        self._log_toggle_btn = DirectButton(
            text="Log [-]", scale=0.04, pos=(0, 0, 0.15), parent=self._log_frame,
            command=self._toggle_log, frameSize=(-3, 3, -0.8, 1.2),
            text_fg=HUD_TXT, frameColor=(0,0,0,0),
        )
        self._log_content = DirectFrame(
            frameColor=(0,0,0,0), frameSize=(-0.26, 0.26, -0.60, 0.0),
            pos=(0, 0, 0.08), parent=self._log_frame,
        )
        self._log_labels = []

    def _on_sl_rot(self):
        self._cam_heading = self._sl_rot["value"]
        self._update_camera()

    def _on_sl_pitch(self):
        self._cam_pitch = self._sl_pitch["value"]
        self._update_camera()

    def _on_sl_zoom(self):
        self._cam_dist = self._sl_zoom["value"]
        self._update_camera()

    def _toggle_log(self):
        self._log_open = not self._log_open
        if self._log_open:
            self._log_content.show()
            self._log_toggle_btn["text"] = "Log [-]"
            self._log_frame["frameSize"] = (-0.28, 0.28, -0.52, 0.22)
        else:
            self._log_content.hide()
            self._log_toggle_btn["text"] = "Log [+]"
            self._log_frame["frameSize"] = (-0.28, 0.28, -0.02, 0.22)

    def _append_log(self, text):
        self._move_log.append(text)
        self._refresh_log()

    def _refresh_log(self):
        for lbl in self._log_labels:
            lbl.destroy()
        self._log_labels.clear()
        # Show last 12 entries
        visible = self._move_log[-12:]
        for i, txt in enumerate(visible):
            lbl = DirectLabel(
                text=txt, scale=0.028, pos=(-0.24, 0, -0.04 - i * 0.045),
                parent=self._log_content, text_fg=HUD_DIM, frameColor=(0,0,0,0),
                text_align=TextNode.ALeft, text_wordwrap=18,
            )
            self._log_labels.append(lbl)

    def _set_status(self, msg):
        self._status_label["text"] = msg

    # ------------------------------------------------------------------ snapshot / undo / redo
    def _save_snapshot(self):
        """Save game + visual state for undo."""
        game_snap = copy.deepcopy(self.game)
        vis_snap = {
            "board_slots": dict(self.board_slots),
            "reserve_p0": list(self.reserve_p0),
            "reserve_p1": list(self.reserve_p1),
            "ball_positions": {bid: tuple(np.getPos()) for bid, np in self.balls.items()},
            "ball_player": dict(self.ball_player),
            "move_log": list(self._move_log),
        }
        self._history.append((game_snap, vis_snap))
        self._redo_stack.clear()

    def _restore_snapshot(self, game_snap, vis_snap, animate=False):
        """Restore game + visual state. If animate=True, arc-animate moved balls."""
        self.game = copy.deepcopy(game_snap)
        self.board_slots = dict(vis_snap["board_slots"])
        self.reserve_p0 = list(vis_snap["reserve_p0"])
        self.reserve_p1 = list(vis_snap["reserve_p1"])
        self.ball_player = dict(vis_snap["ball_player"])
        self._move_log = list(vis_snap["move_log"])

        anims = []
        for bid, target_pos in vis_snap["ball_positions"].items():
            cur = tuple(self.balls[bid].getPos())
            if animate and cur != target_pos:
                anims.append((bid, target_pos))
            else:
                self.balls[bid].setPos(*target_pos)
        self._refresh_log()

        if anims:
            self._animating = True
            remaining = [len(anims)]
            def on_done():
                remaining[0] -= 1
                if remaining[0] <= 0:
                    self._animating = False
                    self._begin_turn()
            for bid, tpos in anims:
                self._animate_ball(bid, tpos, duration=0.5, callback=on_done)
            return True  # signal: don't call _begin_turn yet
        return False

    def _cancel_computer(self):
        """Cancel any pending computer move task."""
        self.taskMgr.remove("compMove")

    def _do_undo(self):
        if len(self._history) <= 1 or self._animating:
            return
        self._cancel_computer()
        cur = self._history.pop()
        self._redo_stack.append(cur)
        game_snap, vis_snap = self._history[-1]
        animated = self._restore_snapshot(game_snap, vis_snap, animate=True)
        if not animated:
            self._begin_turn()

    def _do_redo(self):
        if not self._redo_stack or self._animating:
            return
        self._cancel_computer()
        snap = self._redo_stack.pop()
        self._history.append(snap)
        game_snap, vis_snap = snap
        animated = self._restore_snapshot(game_snap, vis_snap, animate=True)
        if not animated:
            self._begin_turn()

    def _do_pass_takeback(self):
        if not self._awaiting_human or self._animating:
            return
        if self.game.phase != "take_back":
            return
        self._execute_action(0)

    # ------------------------------------------------------------------ game turn logic
    def _begin_turn(self):
        self._animating = False
        if self.game.done:
            w = "Light" if self.game.winner == 0 else "Dark"
            self._set_status(f"Game over! {w} wins!")
            self._awaiting_human = False
            self._btn_pass.hide()
            return

        cp = self.game.current_player
        phase = self.game.phase
        pname = "Light" if cp == 0 else "Dark"

        if phase == "take_back":
            self._btn_pass.show()
            if cp == self.human_player:
                self._set_status(f"Your turn: take back (or pass)")
                self._awaiting_human = True
            else:
                self._set_status(f"{pname} thinking (take-back)...")
                self._awaiting_human = False
                self.taskMgr.doMethodLater(3.0, self._computer_move, "compMove")
        else:
            self._btn_pass.hide()
            if cp == self.human_player:
                self._set_status("Your turn: click a position")
                self._awaiting_human = True
            else:
                self._set_status(f"{pname} thinking...")
                self._awaiting_human = False
                self.taskMgr.doMethodLater(3.0, self._computer_move, "compMove")

    # ------------------------------------------------------------------ computer move
    def _computer_move(self, task):
        if self.game.done:
            return
        if self.game.phase == "place":
            actions = self.game.legal_place_actions()
        else:
            actions = self.game.legal_take_back_actions()
        if not actions:
            return
        action = random.choice(actions)
        self._execute_action(action)

    # ------------------------------------------------------------------ human click
    def _handle_human_click(self, cell_idx):
        g = self.game
        if g.phase == "place":
            actions = g.legal_place_actions()
            # Check if clicking an empty cell = place from reserve
            if cell_idx in actions and cell_idx < 30:
                self._execute_action(cell_idx)
                return
            # Check if clicking own uncovered ball = start of raise
            pv = g._player_val(self.human_player)
            if g.board[cell_idx] == pv and g.is_uncovered(cell_idx):
                # Enter raise-source selection mode
                self._raise_src = cell_idx
                self._set_status(f"Raise from {cell_idx}: click destination")
                self._awaiting_raise_dst = True
                return
            # If in raise-dst mode
            if getattr(self, '_awaiting_raise_dst', False):
                src = self._raise_src
                action = 30 + src * 30 + cell_idx
                if action in actions:
                    self._awaiting_raise_dst = False
                    self._execute_action(action)
                    return
                else:
                    self._set_status("Invalid raise destination")
                    self._awaiting_raise_dst = False
                    return
        elif g.phase == "take_back":
            action = cell_idx + 1  # take_back action encoding
            if action in g.legal_take_back_actions():
                self._execute_action(action)
                return
        self._set_status("Invalid move")

    # ------------------------------------------------------------------ execute action (animate + apply)
    def _execute_action(self, action):
        self._awaiting_human = False
        self._animating = True
        g = self.game
        player = g.current_player
        phase = g.phase
        desc = _desc_action(action, phase, player)
        self._append_log(desc)

        if phase == "place":
            if action < 30:
                # Place from reserve
                pos = action
                reserve = self.reserve_p0 if player == 0 else self.reserve_p1
                bid = reserve.pop()
                self.board_slots[pos] = bid
                self.ball_player[bid] = player
                formed = g.apply_place(action)
                self._animate_ball(bid, BOARD_POS[pos], callback=lambda: self._after_action())
            else:
                # Raise
                code = action - 30
                src, dst = divmod(code, 30)
                bid = self.board_slots[src]
                self.board_slots[src] = None
                self.board_slots[dst] = bid
                formed = g.apply_place(action)
                self._animate_ball(bid, BOARD_POS[dst], callback=lambda: self._after_action())
        else:
            # Take back
            if action == 0:
                g.apply_take_back(action)
                self._after_action()
            else:
                pos = action - 1
                bid = self.board_slots[pos]
                self.board_slots[pos] = None
                reserve = self.reserve_p0 if player == 0 else self.reserve_p1
                rpos = RESERVE_P0 if player == 0 else RESERVE_P1
                reserve.append(bid)
                idx = min(len(reserve) - 1, len(rpos) - 1)
                g.apply_take_back(action)
                self._animate_ball(bid, rpos[idx], callback=lambda: self._after_action())

    def _after_action(self):
        self._save_snapshot()
        self._begin_turn()


if __name__ == "__main__":
    app = StackingVis()
    app.run()
