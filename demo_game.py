"""Demo: play random Stacking Game games and display the board."""
import numpy as np
from stacking_env import raw_env
from stacking_env.game import LEVEL_OFFSET, LEVEL_SIZE


def _cell_coord(idx: int) -> str:
    """Map cell index to 'L<level>(<row>,<col>)'."""
    for lv in range(3, -1, -1):
        if idx >= LEVEL_OFFSET[lv]:
            r, c = divmod(idx - LEVEL_OFFSET[lv], LEVEL_SIZE[lv])
            return f"L{lv}({r},{c})"
    return f"?{idx}"


def describe_action(action: int, agent: str) -> str:
    """Return a human-readable description of an action."""
    who = "●" if agent == "player_0" else "○"
    if action < 30:
        return f"{who} place at {_cell_coord(action)}"
    if action < 930:
        src, dst = divmod(action - 30, 30)
        return f"{who} raise {_cell_coord(src)} → {_cell_coord(dst)}"
    if action == 930:
        return f"{who} pass (end take-back)"
    pos = action - 931
    return f"{who} take back from {_cell_coord(pos)}"


def play_game(seed: int, show_every: int = 4):
    """Play one random game, printing the board periodically."""
    e = raw_env(render_mode="ansi")
    e.reset()
    rng = np.random.default_rng(seed)
    step = 0

    print(f"\n\033[1m{'═' * 34}\033[0m")
    print(f"\033[1m  STACKING GAME GAME  (seed={seed})\033[0m")
    print(f"\033[1m{'═' * 34}\033[0m")

    while not all(e.terminations.values()):
        agent = e.agent_selection
        obs = e.observe(agent)
        legal = np.where(obs["action_mask"] == 1)[0]
        action = int(legal[rng.integers(len(legal))])
        move_desc = describe_action(action, agent)
        e.step(action)
        step += 1
        if step % show_every == 0:
            print(f"\n  Move {step}: {move_desc}")
            e.render()

    # Final state
    print(f"\n  \033[1mFinal state (move {step}):\033[0m")
    e.render()
    winner = "player_0 (●)" if e.game.winner == 0 else "player_1 (○)"
    print(f"\n  🏆 Winner: \033[1m{winner}\033[0m in {step} moves\n")


if __name__ == "__main__":
    for seed in [42, 99, 7]:
        play_game(seed, show_every=1)
