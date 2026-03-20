#!/usr/bin/env python3
"""Play Pylos interactively against the trained RL agent.

Uses arrow-key navigation for selecting layers and positions.
"""

import sys
import tty
import termios
import numpy as np
import torch

from pylos_env.env import raw_env as PylosRawEnv, TOTAL_ACTIONS, ACTION_PASS
from pylos_env.game import LEVEL_OFFSET, LEVEL_SIZE, cell_level, NUM_CELLS
from pylos_rl.network import PylosNet

DEFAULT_MODEL = "runs/pylos_200/checkpoints/final.pt"

# ANSI helpers
RST = "\033[0m"
BOLD = "\033[1m"
DIM = "\033[2m"
RED = "\033[91m"
BLUE = "\033[94m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
INVERT = "\033[7m"
CLEAR_LINE = "\033[2K"
UP = "\033[A"


# ── key reading ──────────────────────────────────────────────────────────

def read_key() -> str:
    """Read a single keypress. Returns 'up','down','left','right','enter','esc', or the char."""
    fd = sys.stdin.fileno()
    old = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        ch = sys.stdin.read(1)
        if ch == "\x1b":
            ch2 = sys.stdin.read(1)
            if ch2 == "[":
                ch3 = sys.stdin.read(1)
                return {"A": "up", "B": "down", "C": "right", "D": "left"}.get(ch3, "esc")
            return "esc"
        if ch in ("\r", "\n"):
            return "enter"
        if ch == "\x03":  # Ctrl-C
            return "esc"
        if ch == "q":
            return "esc"
        return ch
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old)


def _erase_lines(n: int):
    """Move cursor up n lines and clear them."""
    for _ in range(n):
        sys.stdout.write(f"{UP}{CLEAR_LINE}\r")
    sys.stdout.flush()


# ── arrow-key selectors ─────────────────────────────────────────────────

def pick_from_list(prompt: str, options: list[str]) -> int | None:
    """Arrow up/down to pick from a list. Returns index or None on Esc."""
    cur = 0
    n_lines = 0

    def draw():
        nonlocal n_lines
        if n_lines:
            _erase_lines(n_lines)
        lines = [f"  {BOLD}{prompt}{RST}  {DIM}(↑↓ select, Enter confirm, q quit){RST}"]
        for i, opt in enumerate(options):
            marker = f"{GREEN}▸{RST} {BOLD}{opt}{RST}" if i == cur else f"  {DIM}{opt}{RST}"
            lines.append(f"  {marker}")
        text = "\n".join(lines)
        print(text)
        n_lines = len(lines)

    draw()
    while True:
        key = read_key()
        if key == "up":
            cur = (cur - 1) % len(options)
        elif key == "down":
            cur = (cur + 1) % len(options)
        elif key == "enter":
            _erase_lines(n_lines)
            print(f"  {prompt} {GREEN}{BOLD}{options[cur]}{RST}")
            return cur
        elif key == "esc":
            _erase_lines(n_lines)
            return None
        else:
            continue
        draw()


def pick_grid(layer: int, candidates: set[int], board: np.ndarray) -> int | None:
    """Arrow keys to navigate a layer grid. Returns cell index or None on Esc."""
    s = LEVEL_SIZE[layer]
    off = LEVEL_OFFSET[layer]
    # Start cursor at first candidate
    first = min(candidates)
    cr, cc = divmod(first - off, s)
    n_lines = 0

    SYMBOLS = {0: f"{DIM}·{RST}", 1: f"{RED}{BOLD}●{RST}", 2: f"{BLUE}{BOLD}○{RST}"}

    def draw():
        nonlocal n_lines
        if n_lines:
            _erase_lines(n_lines)
        lines = [f"  {BOLD}L{layer}{RST} {DIM}(arrows move, Enter select, q quit){RST}"]
        for r in range(s):
            row_parts = []
            for c in range(s):
                idx = off + r * s + c
                is_cursor = (r == cr and c == cc)
                if idx in candidates:
                    sym = f"{GREEN}{BOLD}◆{RST}" if not is_cursor else f"{INVERT}{GREEN}{BOLD}◆{RST}"
                else:
                    sym = SYMBOLS.get(board[idx], "?")
                    if is_cursor:
                        sym = f"{INVERT}{sym}{RST}"
                row_parts.append(sym)
            lines.append("    " + "   ".join(row_parts))
        text = "\n".join(lines)
        print(text)
        n_lines = len(lines)

    draw()
    while True:
        key = read_key()
        if key == "up":
            cr = (cr - 1) % s
        elif key == "down":
            cr = (cr + 1) % s
        elif key == "left":
            cc = (cc - 1) % s
        elif key == "right":
            cc = (cc + 1) % s
        elif key == "enter":
            idx = off + cr * s + cc
            if idx in candidates:
                _erase_lines(n_lines)
                r, c = cr, cc
                print(f"  Selected L{layer}({r},{c})")
                return idx
            # Not a valid cell — flash or ignore
            continue
        elif key == "esc":
            _erase_lines(n_lines)
            return None
        else:
            continue
        draw()


# ── cell selection combining layer + grid ────────────────────────────────

def pick_cell(prompt: str, candidates: list[int], board: np.ndarray) -> int | None:
    """Select a cell: first pick layer (if multiple), then pick position on grid."""
    layers: dict[int, list[int]] = {}
    for idx in candidates:
        layers.setdefault(cell_level(idx), []).append(idx)

    available = sorted(layers)
    if len(available) == 1:
        lv = available[0]
    else:
        print(f"\n  {BOLD}{prompt}{RST}")
        idx = pick_from_list("Layer:", [f"L{l} ({len(layers[l])} positions)" for l in available])
        if idx is None:
            return None
        lv = available[idx]

    cells = set(layers[lv])
    if len(cells) == 1:
        only = next(iter(cells))
        r, c = divmod(only - LEVEL_OFFSET[lv], LEVEL_SIZE[lv])
        print(f"  Only option: L{lv}({r},{c})")
        return only

    return pick_grid(lv, cells, board)


# ── helpers ──────────────────────────────────────────────────────────────

def cell_coord(idx: int) -> str:
    for lv in range(3, -1, -1):
        if idx >= LEVEL_OFFSET[lv]:
            r, c = divmod(idx - LEVEL_OFFSET[lv], LEVEL_SIZE[lv])
            return f"L{lv}({r},{c})"
    return f"?{idx}"


def describe_action(action: int) -> str:
    if action < 30:
        return f"Place at {cell_coord(action)}"
    if action < 930:
        src, dst = divmod(action - 30, 30)
        return f"Raise {cell_coord(src)} → {cell_coord(dst)}"
    if action == 930:
        return "Pass (end take-back)"
    return f"Take back from {cell_coord(action - 931)}"


# ── agent ────────────────────────────────────────────────────────────────

def load_agent(path: str) -> PylosNet:
    net = PylosNet()
    ckpt = torch.load(path, map_location="cpu", weights_only=True)
    state = ckpt.get("model_state") or ckpt.get("model_state_dict") or ckpt
    net.load_state_dict(state)
    net.eval()
    return net


def agent_act(net: PylosNet, obs: np.ndarray, mask: np.ndarray) -> int:
    action, _, _ = net.get_action(obs, mask, deterministic=True)
    return action


# ── human turn ───────────────────────────────────────────────────────────

def human_place(legal_actions: list[int], board: np.ndarray) -> int | None:
    place_cells = [a for a in legal_actions if a < 30]
    raise_actions = [a for a in legal_actions if 30 <= a < 930]

    has_place = len(place_cells) > 0
    has_raise = len(raise_actions) > 0

    if has_place and has_raise:
        opts = ["Place from reserve", "Raise a sphere"]
        choice = pick_from_list("Move type:", opts)
        if choice is None:
            return None
        choice += 1
    elif has_place:
        choice = 1
    else:
        choice = 2

    if choice == 1:
        idx = pick_cell("Place from reserve", place_cells, board)
        return idx  # idx is the action for place
    else:
        sources: dict[int, list[int]] = {}
        for a in raise_actions:
            src, dst = divmod(a - 30, 30)
            sources.setdefault(src, []).append(dst)
        src_cells = sorted(sources)
        print(f"\n  {BOLD}Raise – pick sphere to move up{RST}")
        src = pick_cell("Source", src_cells, board)
        if src is None:
            return None
        dsts = sorted(sources[src])
        dst = pick_cell("Destination", dsts, board)
        if dst is None:
            return None
        return 30 + src * 30 + dst


def human_take_back(legal_actions: list[int], board: np.ndarray) -> int | None:
    tb_cells = [a - 931 for a in legal_actions if a > ACTION_PASS]
    can_pass = ACTION_PASS in legal_actions

    if can_pass and tb_cells:
        opts = ["Take back a sphere", "Pass (end take-back)"]
        choice = pick_from_list("Take-back:", opts)
        if choice is None:
            return None
        if choice == 1:
            return ACTION_PASS
        idx = pick_cell("Take back", tb_cells, board)
        if idx is None:
            return None
        return 931 + idx
    elif can_pass:
        print(f"  {DIM}No spheres to take back. Passing.{RST}")
        return ACTION_PASS
    else:
        idx = pick_cell("Take back", tb_cells, board)
        if idx is None:
            return None
        return 931 + idx


# ── main loop ────────────────────────────────────────────────────────────

def main():
    model_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_MODEL
    print(f"\n  Loading agent from {model_path}")
    net = load_agent(model_path)

    print()
    idx = pick_from_list("Play as:", ["Player 0 (● red, goes first)", "Player 1 (○ blue, goes second)"])
    if idx is None:
        print("Bye!")
        return
    human_idx = idx
    human_agent = f"player_{human_idx}"

    env = PylosRawEnv(render_mode="ansi")
    env.reset()
    env.render()

    while not all(env.terminations.values()):
        agent = env.agent_selection
        obs = env.observe(agent)
        mask = obs["action_mask"]
        legal = np.where(mask == 1)[0]

        if agent == human_agent:
            phase = env.game.phase
            if phase == "place":
                action = human_place(legal.tolist(), env.game.board)
            else:
                action = human_take_back(legal.tolist(), env.game.board)
            if action is None:
                print("Bye!")
                return
            print(f"\n  You: {describe_action(action)}")
        else:
            action = agent_act(net, obs["observation"], mask)
            print(f"\n  AI: {describe_action(action)}")

        env.step(action)
        env.render()

    if env.game.winner == human_idx:
        print(f"\n  🎉 {GREEN}{BOLD}You win!{RST}")
    elif env.game.winner == 1 - human_idx:
        print(f"\n  🤖 {RED}{BOLD}AI wins!{RST}")
    else:
        print(f"\n  {YELLOW}Draw!{RST}")


if __name__ == "__main__":
    main()
