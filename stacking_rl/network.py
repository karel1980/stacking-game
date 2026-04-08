"""Neural network for Stacking Game RL agent: residual backbone, policy + value heads."""

import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np

from stacking_env.env import TOTAL_ACTIONS, OBS_DIM


class ResBlock(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.fc1 = nn.Linear(dim, dim)
        self.fc2 = nn.Linear(dim, dim)

    def forward(self, x):
        return F.relu(x + self.fc2(F.relu(self.fc1(x))))


class StackingNet(nn.Module):
    """Residual MLP with action-masked policy head and value head."""

    def __init__(self, obs_dim: int = OBS_DIM, hidden: int = 256, n_blocks: int = 4):
        super().__init__()
        self.input_proj = nn.Sequential(nn.Linear(obs_dim, hidden), nn.ReLU())
        self.blocks = nn.Sequential(*(ResBlock(hidden) for _ in range(n_blocks)))
        self.policy_head = nn.Sequential(
            nn.Linear(hidden, hidden // 2), nn.ReLU(),
            nn.Linear(hidden // 2, TOTAL_ACTIONS),
        )
        self.value_head = nn.Sequential(
            nn.Linear(hidden, hidden // 2), nn.ReLU(),
            nn.Linear(hidden // 2, 1),
        )

    def forward(self, obs: torch.Tensor, action_mask: torch.Tensor):
        """Returns (log_probs, value) with illegal actions masked out."""
        h = self.blocks(self.input_proj(obs))
        logits = self.policy_head(h)
        logits = logits + (1 - action_mask) * (-1e8)
        log_probs = F.log_softmax(logits, dim=-1)
        value = self.value_head(h).squeeze(-1)
        return log_probs, value

    def get_action(self, obs: np.ndarray, action_mask: np.ndarray, deterministic: bool = False):
        """Sample an action. Returns (action, log_prob, value)."""
        with torch.no_grad():
            obs_t = torch.FloatTensor(obs).unsqueeze(0)
            mask_t = torch.FloatTensor(action_mask).unsqueeze(0)
            log_probs, value = self(obs_t, mask_t)
            probs = log_probs.exp().squeeze(0)
            if deterministic:
                action = probs.argmax().item()
            else:
                action = torch.multinomial(probs, 1).item()
            return action, log_probs[0, action].item(), value.item()
