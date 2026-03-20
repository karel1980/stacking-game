"""Demo: play random Pylos games and display the board."""
import numpy as np
from pylos_env import raw_env


def play_game(seed: int, show_every: int = 4):
    """Play one random game, printing the board periodically."""
    e = raw_env(render_mode="ansi")
    e.reset()
    rng = np.random.default_rng(seed)
    step = 0

    print(f"\n\033[1m{'═' * 34}\033[0m")
    print(f"\033[1m  PYLOS GAME  (seed={seed})\033[0m")
    print(f"\033[1m{'═' * 34}\033[0m")

    while not all(e.terminations.values()):
        agent = e.agent_selection
        obs = e.observe(agent)
        legal = np.where(obs["action_mask"] == 1)[0]
        action = int(legal[rng.integers(len(legal))])
        e.step(action)
        step += 1
        if step % show_every == 0:
            print(f"\n  Move {step}:")
            e.render()

    # Final state
    print(f"\n  \033[1mFinal state (move {step}):\033[0m")
    e.render()
    winner = "player_0 (●)" if e.game.winner == 0 else "player_1 (○)"
    print(f"\n  🏆 Winner: \033[1m{winner}\033[0m in {step} moves\n")


if __name__ == "__main__":
    for seed in [42, 99, 7]:
        play_game(seed)
