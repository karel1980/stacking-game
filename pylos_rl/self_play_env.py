"""Wraps the PettingZoo Pylos env into a single-agent Gymnasium env for training.

The opponent is controlled by a policy function passed at construction time.
"""

import gymnasium as gym
import numpy as np
from gymnasium import spaces

from pylos_env.env import raw_env as PylosRawEnv, TOTAL_ACTIONS


class SelfPlayEnv(gym.Env):
    """Single-agent wrapper: agent is always player_0, opponent uses given policy."""

    metadata = {"render_modes": []}

    def __init__(self, opponent_fn=None):
        super().__init__()
        self.aec = PylosRawEnv()
        self.opponent_fn = opponent_fn or self._random_opponent
        self.observation_space = spaces.Dict({
            "observation": spaces.Box(0, 15, shape=(32,), dtype=np.int8),
            "action_mask": spaces.Box(0, 1, shape=(TOTAL_ACTIONS,), dtype=np.int8),
        })
        self.action_space = spaces.Discrete(TOTAL_ACTIONS)
        self._agent = "player_0"
        self._rng = np.random.default_rng()

    @staticmethod
    def _random_opponent(obs, mask):
        legal = np.where(mask == 1)[0]
        return int(np.random.choice(legal))

    def reset(self, seed=None, options=None):
        if seed is not None:
            self._rng = np.random.default_rng(seed)
        self.aec.reset()
        # If opponent goes first (shouldn't happen, player_0 starts), handle it
        self._play_opponent_turns()
        obs = self.aec.observe(self._agent)
        return obs, {}

    def step(self, action):
        self.aec.step(action)

        # Check if game ended after our move
        if all(self.aec.terminations.values()):
            return self._terminal_result()

        # Play opponent turns (and our take-back if still our turn in take-back phase)
        # After our place action, if we formed a square, it's still our turn for take-back
        # The AEC env handles this: agent_selection stays on us for take-back
        # But from the RL perspective, we handle take-back as separate steps
        if self.aec.agent_selection == self._agent:
            # Still our turn (take-back phase) — return obs for next action
            obs = self.aec.observe(self._agent)
            return obs, 0.0, False, False, {}

        # Opponent's turn(s)
        self._play_opponent_turns()

        if all(self.aec.terminations.values()):
            return self._terminal_result()

        obs = self.aec.observe(self._agent)
        return obs, 0.0, False, False, {}

    def _play_opponent_turns(self):
        """Let opponent play until it's our turn or game ends."""
        opp = "player_1"
        while (
            self.aec.agent_selection == opp
            and not all(self.aec.terminations.values())
        ):
            obs = self.aec.observe(opp)
            mask = obs["action_mask"]
            legal = np.where(mask == 1)[0]
            if len(legal) == 0:
                break
            action = self.opponent_fn(obs["observation"], mask)
            self.aec.step(action)

    def _terminal_result(self):
        reward = self.aec.rewards.get(self._agent, 0.0)
        obs = self.aec.observe(self._agent)
        return obs, float(reward), True, False, {}
