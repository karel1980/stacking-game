"""PPO training with GAE for the Pylos agent."""

import torch
import torch.nn as nn
import numpy as np
from dataclasses import dataclass, field


@dataclass
class RolloutBuffer:
    """Stores one epoch of rollout data."""
    obs: list = field(default_factory=list)
    masks: list = field(default_factory=list)
    actions: list = field(default_factory=list)
    log_probs: list = field(default_factory=list)
    values: list = field(default_factory=list)
    rewards: list = field(default_factory=list)
    dones: list = field(default_factory=list)

    def clear(self):
        for lst in [self.obs, self.masks, self.actions, self.log_probs,
                     self.values, self.rewards, self.dones]:
            lst.clear()


def compute_gae(rewards, values, dones, gamma=0.99, lam=0.95):
    """Compute generalized advantage estimation."""
    advantages = []
    gae = 0.0
    next_value = 0.0
    for t in reversed(range(len(rewards))):
        mask = 1.0 - dones[t]
        delta = rewards[t] + gamma * next_value * mask - values[t]
        gae = delta + gamma * lam * mask * gae
        advantages.insert(0, gae)
        next_value = values[t]
    returns = [a + v for a, v in zip(advantages, values)]
    return advantages, returns


def ppo_update(net, optimizer, buffer, epochs=4, clip_eps=0.2, vf_coef=0.5,
               ent_coef=0.01, max_grad_norm=0.5, batch_size=256):
    """Run PPO update on collected rollout data. Returns dict of loss stats."""
    advantages, returns = compute_gae(buffer.rewards, buffer.values, buffer.dones)

    obs_t = torch.FloatTensor(np.array(buffer.obs))
    mask_t = torch.FloatTensor(np.array(buffer.masks))
    act_t = torch.LongTensor(buffer.actions)
    old_lp_t = torch.FloatTensor(buffer.log_probs)
    adv_t = torch.FloatTensor(advantages)
    ret_t = torch.FloatTensor(returns)

    # Normalize advantages
    if len(adv_t) > 1:
        adv_t = (adv_t - adv_t.mean()) / (adv_t.std() + 1e-8)

    n = len(obs_t)
    total_pg_loss = total_vf_loss = total_ent = 0.0
    num_updates = 0

    for _ in range(epochs):
        indices = torch.randperm(n)
        for start in range(0, n, batch_size):
            idx = indices[start:start + batch_size]
            log_probs, values = net(obs_t[idx], mask_t[idx])
            new_lp = log_probs.gather(1, act_t[idx].unsqueeze(1)).squeeze(1)

            # Policy loss (clipped)
            ratio = (new_lp - old_lp_t[idx]).exp()
            surr1 = ratio * adv_t[idx]
            surr2 = ratio.clamp(1 - clip_eps, 1 + clip_eps) * adv_t[idx]
            pg_loss = -torch.min(surr1, surr2).mean()

            # Value loss
            vf_loss = nn.functional.mse_loss(values, ret_t[idx])

            # Entropy bonus (encourage exploration)
            entropy = -(log_probs.exp() * log_probs).sum(dim=-1).mean()

            loss = pg_loss + vf_coef * vf_loss - ent_coef * entropy

            optimizer.zero_grad()
            loss.backward()
            nn.utils.clip_grad_norm_(net.parameters(), max_grad_norm)
            optimizer.step()

            total_pg_loss += pg_loss.item()
            total_vf_loss += vf_loss.item()
            total_ent += entropy.item()
            num_updates += 1

    k = max(num_updates, 1)
    return {
        "pg_loss": total_pg_loss / k,
        "vf_loss": total_vf_loss / k,
        "entropy": total_ent / k,
    }
