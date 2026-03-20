"""Neural network for Pylos RL agent: shared backbone, policy + value heads."""

import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np

from pylos_env.env import TOTAL_ACTIONS


class PylosNet(nn.Module):
    """MLP with action-masked policy head and value head."""

    def __init__(self, obs_dim: int = 32, hidden: int = 256):
        super().__init__()
        self.backbone = nn.Sequential(
            nn.Linear(obs_dim, hidden),
            nn.ReLU(),
            nn.Linear(hidden, hidden),
            nn.ReLU(),
        )
        self.policy_head = nn.Linear(hidden, TOTAL_ACTIONS)
        self.value_head = nn.Linear(hidden, 1)

    def forward(self, obs: torch.Tensor, action_mask: torch.Tensor):
        """Returns (log_probs, value) with illegal actions masked out."""
        h = self.backbone(obs)
        logits = self.policy_head(h)
        # Mask illegal actions to -inf before softmax
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
