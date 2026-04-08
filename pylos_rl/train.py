"""Training script: PPO self-play for Pylos with ELO tracking and tensorboard."""

import argparse
import copy
import math
import random
import time
from pathlib import Path

import numpy as np
import torch
from torch.utils.tensorboard import SummaryWriter

from pylos_env.env import OBS_DIM
from pylos_rl.network import PylosNet
from pylos_rl.self_play_env import SelfPlayEnv
from pylos_rl.ppo import RolloutBuffer, ppo_update


# ---------------------------------------------------------------------------
# Helpers
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
    ea = 1 / (1 + 10 ** ((rating_b - rating_a) / 400))
    return rating_a + k * (score_a - ea)


def collect_rollout(env, net, buffer, steps=4096):
    """Collect `steps` transitions into buffer. Returns episode stats."""
    buffer.clear()
    obs, _ = env.reset()
    ep_rewards, ep_lengths = [], []
    ep_reward, ep_len = 0.0, 0

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
            ep_reward, ep_len = 0.0, 0
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
# Training loop
# ---------------------------------------------------------------------------

def train(args):
    out_dir = Path(args.out_dir)
    ckpt_dir = out_dir / "checkpoints"
    ckpt_dir.mkdir(parents=True, exist_ok=True)
    writer = SummaryWriter(log_dir=str(out_dir / "tb"))

    net = PylosNet(obs_dim=OBS_DIM, hidden=args.hidden)
    optimizer = torch.optim.Adam(net.parameters(), lr=args.lr)

    # Cosine annealing LR schedule
    scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
        optimizer, T_max=args.iterations, eta_min=args.lr * 0.05,
    )

    buffer = RolloutBuffer()

    # Opponent pool: start with random, add checkpoints over time
    opponent_pool = [None]  # None = random opponent
    elo_ratings = {0: 1000.0}
    current_elo = 1000.0

    # Entropy coefficient annealing: start high, decay to encourage exploitation
    ent_start, ent_end = args.ent_coef, args.ent_coef * 0.1

    print(f"Training Pylos RL agent | {args.iterations} iters | "
          f"obs_dim={OBS_DIM} hidden={args.hidden} steps={args.steps}")
    train_start = time.time()

    for iteration in range(1, args.iterations + 1):
        t0 = time.time()

        # Entropy annealing
        progress = iteration / args.iterations
        ent_coef = ent_start + (ent_end - ent_start) * progress

        # Opponent selection: curriculum
        # Early: mostly random. Late: mostly strong checkpoints.
        pool_prob = min(0.9, 0.3 + 0.6 * progress)
        if len(opponent_pool) > 1 and random.random() < pool_prob:
            # Weighted toward recent checkpoints
            weights = [1.0] + [1.0 + i for i in range(len(opponent_pool) - 1)]
            opp_idx = random.choices(range(len(opponent_pool)), weights=weights, k=1)[0]
            opp_net = opponent_pool[opp_idx]
        else:
            opp_net = None
            opp_idx = -1

        opponent_fn = make_opponent_fn(opp_net) if opp_net is not None else None
        env = SelfPlayEnv(opponent_fn=opponent_fn)

        ep_stats = collect_rollout(env, net, buffer, steps=args.steps)

        loss_stats = ppo_update(net, optimizer, buffer, epochs=args.ppo_epochs,
                                batch_size=args.batch_size, ent_coef=ent_coef)

        scheduler.step()

        # ELO update
        score = ep_stats["win_rate"]
        opp_elo = 1000.0 if opp_idx < 0 else elo_ratings.get(opp_idx, 1000.0)
        current_elo = elo_update(current_elo, opp_elo, score)

        # Tensorboard logging
        writer.add_scalar("train/mean_reward", ep_stats["mean_reward"], iteration)
        writer.add_scalar("train/win_rate", ep_stats["win_rate"], iteration)
        writer.add_scalar("train/mean_ep_length", ep_stats["mean_length"], iteration)
        writer.add_scalar("train/n_episodes", ep_stats["n_episodes"], iteration)
        writer.add_scalar("loss/policy", loss_stats["pg_loss"], iteration)
        writer.add_scalar("loss/value", loss_stats["vf_loss"], iteration)
        writer.add_scalar("loss/entropy", loss_stats["entropy"], iteration)
        writer.add_scalar("elo/current", current_elo, iteration)
        writer.add_scalar("schedule/lr", scheduler.get_last_lr()[0], iteration)
        writer.add_scalar("schedule/ent_coef", ent_coef, iteration)

        # Periodic evaluation
        if iteration % args.eval_interval == 0:
            wr_random = evaluate(net, SelfPlayEnv._random_opponent, n_games=args.eval_games)
            writer.add_scalar("eval/win_rate_vs_random", wr_random, iteration)

            if len(opponent_pool) > 1 and opponent_pool[1] is not None:
                wr_first = evaluate(net, make_opponent_fn(opponent_pool[1]),
                                    n_games=args.eval_games)
                writer.add_scalar("eval/win_rate_vs_first_ckpt", wr_first, iteration)

            if len(opponent_pool) > 1 and opponent_pool[-1] is not None:
                wr_latest = evaluate(net, make_opponent_fn(opponent_pool[-1]),
                                     n_games=args.eval_games)
                writer.add_scalar("eval/win_rate_vs_latest_ckpt", wr_latest, iteration)
            else:
                wr_latest = None

            elapsed = time.time() - t0
            avg_iter = (time.time() - train_start) / iteration
            eta_min = avg_iter * (args.iterations - iteration) / 60
            latest_str = f" vs_latest={wr_latest:.0%}" if wr_latest is not None else ""
            print(f"[{iteration:>5}/{args.iterations}] "
                  f"elo={current_elo:.0f} "
                  f"vs_random={wr_random:.0%}{latest_str} "
                  f"pg={loss_stats['pg_loss']:.4f} vf={loss_stats['vf_loss']:.4f} "
                  f"ent={loss_stats['entropy']:.3f} lr={scheduler.get_last_lr()[0]:.1e} "
                  f"({elapsed:.1f}s) ETA {eta_min:.0f}min")

        # Save checkpoint
        if iteration % args.ckpt_interval == 0:
            ckpt_path = ckpt_dir / f"ckpt_{iteration:06d}.pt"
            torch.save({
                "iteration": iteration,
                "model_state": net.state_dict(),
                "optimizer_state": optimizer.state_dict(),
                "elo": current_elo,
            }, ckpt_path)

            frozen = PylosNet(obs_dim=OBS_DIM, hidden=args.hidden)
            frozen.load_state_dict(copy.deepcopy(net.state_dict()))
            frozen.eval()
            opponent_pool.append(frozen)
            elo_ratings[len(opponent_pool) - 1] = current_elo

            # Keep pool manageable
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

    wr = evaluate(net, SelfPlayEnv._random_opponent, n_games=200)
    writer.add_scalar("eval/final_win_rate_vs_random", wr, args.iterations)
    print(f"\nTraining complete. Final ELO: {current_elo:.0f}, "
          f"Win rate vs random: {wr:.1%}")
    print(f"Model saved to {final_path}")
    writer.close()


def main():
    p = argparse.ArgumentParser(description="Train Pylos RL agent with PPO self-play")
    p.add_argument("--iterations", type=int, default=1000, help="Training iterations")
    p.add_argument("--steps", type=int, default=4096, help="Rollout steps per iteration")
    p.add_argument("--ppo-epochs", type=int, default=6, help="PPO epochs per update")
    p.add_argument("--batch-size", type=int, default=512, help="Mini-batch size")
    p.add_argument("--lr", type=float, default=3e-4, help="Initial learning rate")
    p.add_argument("--hidden", type=int, default=256, help="Hidden layer size")
    p.add_argument("--ent-coef", type=float, default=0.02, help="Initial entropy coefficient")
    p.add_argument("--eval-interval", type=int, default=10, help="Evaluate every N iterations")
    p.add_argument("--eval-games", type=int, default=50, help="Games per evaluation")
    p.add_argument("--ckpt-interval", type=int, default=25, help="Checkpoint every N iterations")
    p.add_argument("--out-dir", type=str, default="runs/pylos", help="Output directory")
    args = p.parse_args()
    train(args)


if __name__ == "__main__":
    main()
