"""Wraps the PettingZoo Pylos env into a single-agent Gymnasium env for training.

The opponent is controlled by a policy function passed at construction time.
Includes reward shaping for intermediate signals.
"""

import gymnasium as gym
import numpy as np
from gymnasium import spaces

from pylos_env.env import raw_env as PylosRawEnv, TOTAL_ACTIONS, OBS_DIM, ACTION_PASS
from pylos_env.game import cell_level

# Shaping reward magnitudes (small relative to terminal ±1)
REWARD_SQUARE = 0.05       # formed a square (take-back opportunity)
REWARD_TAKE_BACK = 0.04    # successfully took back a sphere
REWARD_LEVEL_PLACE = 0.02  # per-level bonus for placing higher


class SelfPlayEnv(gym.Env):
    """Single-agent wrapper: agent is always player_0, opponent uses given policy."""

    metadata = {"render_modes": []}

    def __init__(self, opponent_fn=None):
        super().__init__()
        self.aec = PylosRawEnv()
        self.opponent_fn = opponent_fn or self._random_opponent
        self.observation_space = spaces.Dict({
            "observation": spaces.Box(0.0, 1.0, shape=(OBS_DIM,), dtype=np.float32),
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
        self._play_opponent_turns()
        obs = self.aec.observe(self._agent)
        return obs, {}

    def _shape_reward(self, action):
        """Compute shaping reward based on the action about to be taken."""
        game = self.aec.game
        r = 0.0
        if game.phase == "place":
            if action < 30:
                # Place from reserve — bonus for higher levels
                r += REWARD_LEVEL_PLACE * cell_level(action)
            elif action < 930:
                # Raise — bonus for destination level
                dst = (action - 30) % 30
                r += REWARD_LEVEL_PLACE * cell_level(dst)
        else:
            # Take-back phase
            if action != ACTION_PASS and action >= 931:
                r += REWARD_TAKE_BACK
        return r

    def step(self, action):
        phase_before = self.aec.game.phase
        shaping = self._shape_reward(action)

        self.aec.step(action)

        if all(self.aec.terminations.values()):
            return self._terminal_result()

        # Detect square formation: was in place phase, now in take_back
        if phase_before == "place" and self.aec.game.phase == "take_back":
            shaping += REWARD_SQUARE

        if self.aec.agent_selection == self._agent:
            obs = self.aec.observe(self._agent)
            return obs, shaping, False, False, {}

        # Opponent's turn(s)
        self._play_opponent_turns()

        if all(self.aec.terminations.values()):
            return self._terminal_result(shaping)

        obs = self.aec.observe(self._agent)
        return obs, shaping, False, False, {}

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

    def _terminal_result(self, bonus=0.0):
        reward = self.aec.rewards.get(self._agent, 0.0)
        obs = self.aec.observe(self._agent)
        return obs, float(reward) + bonus, True, False, {}
