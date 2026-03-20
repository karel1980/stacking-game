#!/usr/bin/env python3
"""Play Pylos interactively against the trained RL agent."""

import sys
import numpy as np
import torch

from pylos_env.env import raw_env as PylosRawEnv, TOTAL_ACTIONS, ACTION_PASS
from pylos_env.game import LEVEL_OFFSET, LEVEL_SIZE, cell_level, NUM_CELLS
from pylos_rl.network import PylosNet

DEFAULT_MODEL = "runs/pylos_200/checkpoints/final.pt"

# ── helpers ──────────────────────────────────────────────────────────────

def cell_coord(idx: int) -> str:
    for lv in range(3, -1, -1):
        if idx >= LEVEL_OFFSET[lv]:
            r, c = divmod(idx - LEVEL_OFFSET[lv], LEVEL_SIZE[lv])
            return f"L{lv}({r},{c})"
    return f"?{idx}"


def idx_from_layer_rc(layer: int, r: int, c: int) -> int:
    return LEVEL_OFFSET[layer] + r * LEVEL_SIZE[layer] + c


def describe_action(action: int) -> str:
    if action < 30:
        return f"Place at {cell_coord(action)}"
    if action < 930:
        src, dst = divmod(action - 30, 30)
        return f"Raise {cell_coord(src)} → {cell_coord(dst)}"
    if action == 930:
        return "Pass (end take-back)"
    return f"Take back from {cell_coord(action - 931)}"


def pick_int(prompt: str, lo: int, hi: int) -> int:
    while True:
        raw = input(prompt).strip()
        if raw.lower() in ("q", "quit"):
            print("Bye!")
            sys.exit(0)
        try:
            v = int(raw)
            if lo <= v <= hi:
                return v
        except ValueError:
            pass
        print(f"  Enter a number between {lo} and {hi} (or 'q' to quit).")


def pick_cell(prompt_prefix: str, candidates: list[int]) -> int:
    """Two-step selection: layer → position on that layer."""
    layers: dict[int, list[int]] = {}
    for idx in candidates:
        lv = cell_level(idx)
        layers.setdefault(lv, []).append(idx)

    available_layers = sorted(layers)
    if len(available_layers) == 1:
        lv = available_layers[0]
    else:
        print(f"  {prompt_prefix} – available layers: {', '.join(f'L{l}' for l in available_layers)}")
        lv = pick_int("  Layer number: ", min(available_layers), max(available_layers))
        while lv not in available_layers:
            print(f"  Layer {lv} has no options. Choose from: {available_layers}")
            lv = pick_int("  Layer number: ", min(available_layers), max(available_layers))

    cells = layers[lv]
    s = LEVEL_SIZE[lv]
    off = LEVEL_OFFSET[lv]
    print(f"  L{lv} grid ({s}×{s}) – available positions marked with *:")
    for r in range(s):
        row = []
        for c in range(s):
            idx = off + r * s + c
            if idx in cells:
                row.append(f"({r},{c})*")
            else:
                row.append(f"({r},{c}) ")
        print("    " + "  ".join(row))

    if len(cells) == 1:
        r, c = divmod(cells[0] - off, s)
        print(f"  Only one option: ({r},{c})")
        return cells[0]

    while True:
        r = pick_int("  Row: ", 0, s - 1)
        c = pick_int("  Col: ", 0, s - 1)
        idx = idx_from_layer_rc(lv, r, c)
        if idx in cells:
            return idx
        print(f"  ({r},{c}) is not available. Try again.")


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

def human_place(legal_actions: list[int]) -> int:
    place_cells = [a for a in legal_actions if a < 30]
    raise_actions = [a for a in legal_actions if 30 <= a < 930]

    has_place = len(place_cells) > 0
    has_raise = len(raise_actions) > 0

    if has_place and has_raise:
        print("\n  [1] Place from reserve")
        print("  [2] Raise a sphere")
        choice = pick_int("  Choice: ", 1, 2)
    elif has_place:
        choice = 1
    else:
        choice = 2

    if choice == 1:
        print("\n  Place from reserve:")
        idx = pick_cell("Select destination", place_cells)
        return idx
    else:
        # Group raises by source
        sources: dict[int, list[int]] = {}
        for a in raise_actions:
            src, dst = divmod(a - 30, 30)
            sources.setdefault(src, []).append(dst)
        src_cells = sorted(sources)
        print("\n  Raise – pick sphere to raise:")
        src = pick_cell("Select sphere to raise", src_cells)
        dsts = sorted(sources[src])
        print("  Now pick destination:")
        dst = pick_cell("Select destination", dsts)
        return 30 + src * 30 + dst


def human_take_back(legal_actions: list[int]) -> int:
    tb_cells = [a - 931 for a in legal_actions if a > ACTION_PASS]
    can_pass = ACTION_PASS in legal_actions

    print("\n  Take-back phase:")
    if can_pass and tb_cells:
        print("  [1] Take back a sphere")
        print("  [2] Pass (end take-back)")
        choice = pick_int("  Choice: ", 1, 2)
    elif can_pass:
        print("  No spheres to take back. Passing.")
        return ACTION_PASS
    else:
        choice = 1

    if choice == 2:
        return ACTION_PASS

    idx = pick_cell("Select sphere to take back", tb_cells)
    return 931 + idx


# ── main loop ────────────────────────────────────────────────────────────

def main():
    model_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_MODEL
    print(f"\n  Loading agent from {model_path}")
    net = load_agent(model_path)

    print("\n  Play as:")
    print("  [1] Player 0 (● red, goes first)")
    print("  [2] Player 1 (○ blue, goes second)")
    human_idx = pick_int("  Choice: ", 1, 2) - 1
    human_agent = f"player_{human_idx}"
    ai_agent = f"player_{1 - human_idx}"

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
                action = human_place(legal.tolist())
            else:
                action = human_take_back(legal.tolist())
            print(f"\n  You: {describe_action(action)}")
        else:
            # Flip observation for AI (AI always sees itself as player 1 in obs)
            action = agent_act(net, obs["observation"], mask)
            print(f"\n  AI: {describe_action(action)}")

        env.step(action)
        env.render()

    if env.game.winner == human_idx:
        print("\n  🎉 You win!")
    elif env.game.winner == 1 - human_idx:
        print("\n  🤖 AI wins!")
    else:
        print("\n  Draw!")


if __name__ == "__main__":
    main()
