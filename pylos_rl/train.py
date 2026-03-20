"""Training script: PPO self-play for Pylos with ELO tracking and tensorboard."""

import argparse
import copy
import math
import os
import random
import time
from pathlib import Path

import numpy as np
import torch
from torch.utils.tensorboard import SummaryWriter

from pylos_rl.network import PylosNet
from pylos_rl.self_play_env import SelfPlayEnv
from pylos_rl.ppo import RolloutBuffer, ppo_update


# ---------------------------------------------------------------------------
# Evaluation helpers
# ---------------------------------------------------------------------------

def make_opponent_fn(net, deterministic=False):
    """Create an opponent function from a PylosNet."""
    def opponent(obs, mask):
        with torch.no_grad():
            obs_t = torch.FloatTensor(obs).unsqueeze(0)
            mask_t = torch.FloatTensor(mask).unsqueeze(0)
            lp, _ = net(obs_t, mask_t)
            probs = lp.exp().squeeze(0)
            if deterministic:
                return probs.argmax().item()
            return torch.multinomial(probs, 1).item()
    return opponent


def evaluate(net, opponent_fn, n_games=100):
    """Play n_games as player_0 vs opponent_fn. Returns win rate."""
    env = SelfPlayEnv(opponent_fn=opponent_fn)
    wins = 0
    for _ in range(n_games):
        obs, _ = env.reset()
        done = False
        while not done:
            action, _, _ = net.get_action(obs["observation"], obs["action_mask"],
                                          deterministic=True)
            obs, reward, done, _, _ = env.step(action)
        if reward > 0:
            wins += 1
    return wins / n_games


def elo_update(rating_a, rating_b, score_a, k=32):
    """Update ELO rating. score_a: 1=win, 0=loss, 0.5=draw."""
    ea = 1 / (1 + 10 ** ((rating_b - rating_a) / 400))
    return rating_a + k * (score_a - ea)


# ---------------------------------------------------------------------------
# Rollout collection
# ---------------------------------------------------------------------------

def collect_rollout(env, net, buffer, steps=2048):
    """Collect `steps` transitions into buffer. Returns episode stats."""
    buffer.clear()
    obs, _ = env.reset()
    ep_rewards = []
    ep_reward = 0.0
    ep_lengths = []
    ep_len = 0

    for _ in range(steps):
        o = obs["observation"].astype(np.float32)
        m = obs["action_mask"].astype(np.float32)
        action, log_prob, value = net.get_action(o, m)

        next_obs, reward, done, truncated, _ = env.step(action)

        buffer.obs.append(o)
        buffer.masks.append(m)
        buffer.actions.append(action)
        buffer.log_probs.append(log_prob)
        buffer.values.append(value)
        buffer.rewards.append(reward)
        buffer.dones.append(float(done or truncated))

        ep_reward += reward
        ep_len += 1

        if done or truncated:
            ep_rewards.append(ep_reward)
            ep_lengths.append(ep_len)
            ep_reward = 0.0
            ep_len = 0
            obs, _ = env.reset()
        else:
            obs = next_obs

    return {
        "mean_reward": np.mean(ep_rewards) if ep_rewards else 0.0,
        "mean_length": np.mean(ep_lengths) if ep_lengths else 0.0,
        "n_episodes": len(ep_rewards),
        "win_rate": sum(1 for r in ep_rewards if r > 0) / max(len(ep_rewards), 1),
    }


# ---------------------------------------------------------------------------
# Main training loop
# ---------------------------------------------------------------------------

def train(args):
    out_dir = Path(args.out_dir)
    ckpt_dir = out_dir / "checkpoints"
    ckpt_dir.mkdir(parents=True, exist_ok=True)
    writer = SummaryWriter(log_dir=str(out_dir / "tb"))

    net = PylosNet(hidden=args.hidden)
    optimizer = torch.optim.Adam(net.parameters(), lr=args.lr)
    buffer = RolloutBuffer()

    # Opponent pool: start with random, add checkpoints over time
    opponent_pool = [None]  # None = random opponent
    elo_ratings = {0: 1000.0}  # checkpoint_id -> ELO
    current_elo = 1000.0

    print(f"Training Pylos RL agent | {args.iterations} iterations | output: {out_dir}")

    for iteration in range(1, args.iterations + 1):
        t0 = time.time()

        # Pick opponent: 80% latest checkpoint, 20% random from pool
        if len(opponent_pool) > 1 and random.random() < 0.8:
            opp_idx = random.randint(0, len(opponent_pool) - 1)
            opp_net = opponent_pool[opp_idx]
        else:
            opp_net = None
            opp_idx = -1

        if opp_net is not None:
            opponent_fn = make_opponent_fn(opp_net)
        else:
            opponent_fn = None  # random

        env = SelfPlayEnv(opponent_fn=opponent_fn)

        # Collect rollout
        ep_stats = collect_rollout(env, net, buffer, steps=args.steps)

        # PPO update
        loss_stats = ppo_update(net, optimizer, buffer, epochs=args.ppo_epochs,
                                batch_size=args.batch_size, ent_coef=args.ent_coef)

        # Update ELO based on training win rate
        score = ep_stats["win_rate"]
        opp_elo = 1000.0 if opp_idx < 0 else elo_ratings.get(opp_idx, 1000.0)
        current_elo = elo_update(current_elo, opp_elo, score)

        # Log to tensorboard
        writer.add_scalar("train/mean_reward", ep_stats["mean_reward"], iteration)
        writer.add_scalar("train/win_rate", ep_stats["win_rate"], iteration)
        writer.add_scalar("train/mean_ep_length", ep_stats["mean_length"], iteration)
        writer.add_scalar("train/n_episodes", ep_stats["n_episodes"], iteration)
        writer.add_scalar("loss/policy", loss_stats["pg_loss"], iteration)
        writer.add_scalar("loss/value", loss_stats["vf_loss"], iteration)
        writer.add_scalar("loss/entropy", loss_stats["entropy"], iteration)
        writer.add_scalar("elo/current", current_elo, iteration)

        # Periodic evaluation vs random
        if iteration % args.eval_interval == 0:
            wr_random = evaluate(net, SelfPlayEnv._random_opponent, n_games=args.eval_games)
            writer.add_scalar("eval/win_rate_vs_random", wr_random, iteration)

            # Evaluate vs oldest checkpoint if available
            if len(opponent_pool) > 1 and opponent_pool[1] is not None:
                wr_first = evaluate(net, make_opponent_fn(opponent_pool[1]),
                                    n_games=args.eval_games)
                writer.add_scalar("eval/win_rate_vs_first_ckpt", wr_first, iteration)

            # Evaluate vs latest checkpoint
            if len(opponent_pool) > 1 and opponent_pool[-1] is not None:
                wr_latest = evaluate(net, make_opponent_fn(opponent_pool[-1]),
                                     n_games=args.eval_games)
                writer.add_scalar("eval/win_rate_vs_latest_ckpt", wr_latest, iteration)
            else:
                wr_latest = None

            elapsed = time.time() - t0
            latest_str = f" vs_latest={wr_latest:.0%}" if wr_latest is not None else ""
            print(f"[{iteration:>5}/{args.iterations}] "
                  f"elo={current_elo:.0f} "
                  f"vs_random={wr_random:.0%}{latest_str} "
                  f"pg={loss_stats['pg_loss']:.4f} vf={loss_stats['vf_loss']:.4f} "
                  f"ent={loss_stats['entropy']:.3f} "
                  f"({elapsed:.1f}s)")

        # Save checkpoint periodically
        if iteration % args.ckpt_interval == 0:
            ckpt_path = ckpt_dir / f"ckpt_{iteration:06d}.pt"
            torch.save({
                "iteration": iteration,
                "model_state": net.state_dict(),
                "optimizer_state": optimizer.state_dict(),
                "elo": current_elo,
            }, ckpt_path)

            # Add frozen copy to opponent pool
            frozen = PylosNet(hidden=args.hidden)
            frozen.load_state_dict(copy.deepcopy(net.state_dict()))
            frozen.eval()
            opponent_pool.append(frozen)
            elo_ratings[len(opponent_pool) - 1] = current_elo

            # Keep pool manageable: keep first, last 5, and random samples
            if len(opponent_pool) > 20:
                keep = [0, 1] + list(range(len(opponent_pool) - 5, len(opponent_pool)))
                sampled = random.sample(range(2, len(opponent_pool) - 5),
                                        min(5, len(opponent_pool) - 7))
                keep = sorted(set(keep + sampled))
                opponent_pool = [opponent_pool[i] for i in keep]

    # Final save
    final_path = ckpt_dir / "final.pt"
    torch.save({
        "iteration": args.iterations,
        "model_state": net.state_dict(),
        "optimizer_state": optimizer.state_dict(),
        "elo": current_elo,
    }, final_path)

    # Final evaluation
    wr = evaluate(net, SelfPlayEnv._random_opponent, n_games=200)
    writer.add_scalar("eval/final_win_rate_vs_random", wr, args.iterations)
    print(f"\nTraining complete. Final ELO: {current_elo:.0f}, "
          f"Win rate vs random: {wr:.1%}")
    print(f"Model saved to {final_path}")

    writer.close()


def main():
    p = argparse.ArgumentParser(description="Train Pylos RL agent with PPO self-play")
    p.add_argument("--iterations", type=int, default=500, help="Training iterations")
    p.add_argument("--steps", type=int, default=2048, help="Rollout steps per iteration")
    p.add_argument("--ppo-epochs", type=int, default=4, help="PPO epochs per update")
    p.add_argument("--batch-size", type=int, default=256, help="Mini-batch size")
    p.add_argument("--lr", type=float, default=3e-4, help="Learning rate")
    p.add_argument("--hidden", type=int, default=256, help="Hidden layer size")
    p.add_argument("--ent-coef", type=float, default=0.01, help="Entropy coefficient")
    p.add_argument("--eval-interval", type=int, default=10, help="Evaluate every N iterations")
    p.add_argument("--eval-games", type=int, default=50, help="Games per evaluation")
    p.add_argument("--ckpt-interval", type=int, default=25, help="Checkpoint every N iterations")
    p.add_argument("--out-dir", type=str, default="runs/pylos", help="Output directory")
    args = p.parse_args()
    train(args)


if __name__ == "__main__":
    main()
