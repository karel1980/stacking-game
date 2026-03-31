"""PettingZoo AEC environment for Pylos.

Action space (Discrete(961)):
  0-29:    place from reserve at board position i
  30-929:  raise sphere from src to dst, encoded as 30 + src*30 + dst
  930:     pass (done taking back spheres)
  931-960: take back sphere at board position (action - 931)

Observation space (Dict):
  "observation": Box(0, 2, shape=(32,), int8)
    - [0:30]  board cells (0=empty, 1=self, 2=opponent)
    - [30]    own reserve count
    - [31]    opponent reserve count
  "action_mask": Box(0, 1, shape=(961,), int8)
"""

from __future__ import annotations

import gymnasium
import numpy as np
from gymnasium import spaces
from gymnasium.utils import EzPickle

from pettingzoo import AECEnv
from pettingzoo.utils import wrappers
from pettingzoo.utils.agent_selector import agent_selector

from pylos_env.game import (
    NUM_CELLS, PylosGame, SUPPORT_MAP, RESTING_ON,
    SQUARES_PER_LEVEL, LEVEL_OFFSET, LEVEL_SIZE, cell_level,
)

NUM_PLACE_ACTIONS = 30 + 30 * 30  # 930
ACTION_PASS = 930
NUM_TAKE_BACK_ACTIONS = 31  # pass + 30 positions
TOTAL_ACTIONS = NUM_PLACE_ACTIONS + NUM_TAKE_BACK_ACTIONS  # 961

# Precompute static per-cell features
_CELL_LEVEL = np.array([cell_level(i) / 3.0 for i in range(NUM_CELLS)], dtype=np.float32)
_CELL_SQUARES = [[] for _ in range(NUM_CELLS)]  # squares each cell belongs to
for _lv_sqs in SQUARES_PER_LEVEL:
    for _sq in _lv_sqs:
        for _c in _sq:
            _CELL_SQUARES[_c].append(_sq)

OBS_DIM = NUM_CELLS * 5 + 4  # 154


def env(**kwargs):
    e = raw_env(**kwargs)
    e = wrappers.TerminateIllegalWrapper(e, illegal_reward=-1)
    e = wrappers.AssertOutOfBoundsWrapper(e)
    e = wrappers.OrderEnforcingWrapper(e)
    return e


class raw_env(AECEnv, EzPickle):
    metadata = {
        "render_modes": ["ansi"],
        "name": "pylos_v0",
        "is_parallelizable": False,
    }

    def __init__(self, render_mode: str | None = None):
        EzPickle.__init__(self, render_mode)
        super().__init__()
        self.render_mode = render_mode
        self.game = PylosGame()

        self.agents = ["player_0", "player_1"]
        self.possible_agents = self.agents[:]

        self.action_spaces = {a: spaces.Discrete(TOTAL_ACTIONS) for a in self.agents}
        self.observation_spaces = {
            a: spaces.Dict({
                "observation": spaces.Box(0.0, 1.0, shape=(OBS_DIM,), dtype=np.float32),
                "action_mask": spaces.Box(0, 1, shape=(TOTAL_ACTIONS,), dtype=np.int8),
            })
            for a in self.agents
        }

    def observation_space(self, agent):
        return self.observation_spaces[agent]

    def action_space(self, agent):
        return self.action_spaces[agent]

    def observe(self, agent):
        player_idx = self.possible_agents.index(agent)
        opp_idx = 1 - player_idx
        pv = player_idx + 1
        ov = opp_idx + 1
        board = self.game.board

        obs = np.zeros(OBS_DIM, dtype=np.float32)

        # Per-cell features (5 channels × 30 cells)
        for i in range(NUM_CELLS):
            v = board[i]
            # Channel 0: own sphere
            obs[i] = 1.0 if v == pv else 0.0
            # Channel 1: opponent sphere
            obs[NUM_CELLS + i] = 1.0 if v == ov else 0.0
            # Channel 2: level (static, precomputed)
            obs[NUM_CELLS * 2 + i] = _CELL_LEVEL[i]
            # Channel 3: support fill ratio
            if i in SUPPORT_MAP:
                obs[NUM_CELLS * 3 + i] = sum(1 for s in SUPPORT_MAP[i] if board[s] != 0) / 4.0
            else:
                obs[NUM_CELLS * 3 + i] = 1.0  # level 0 always supported
            # Channel 4: square proximity (best own fraction in any square containing cell)
            best = 0.0
            for sq in _CELL_SQUARES[i]:
                own_count = sum(1 for c in sq if board[c] == pv)
                best = max(best, own_count / 4.0)
            obs[NUM_CELLS * 4 + i] = best

        # Global features
        base = NUM_CELLS * 5
        obs[base] = self.game.reserves[player_idx] / 15.0
        obs[base + 1] = self.game.reserves[opp_idx] / 15.0
        obs[base + 2] = 1.0 if self.game.phase == "take_back" else 0.0
        obs[base + 3] = self.game.take_backs_remaining / 2.0

        mask = np.zeros(TOTAL_ACTIONS, dtype=np.int8)
        if agent == self.agent_selection:
            if self.game.phase == "place":
                for a in self.game.legal_place_actions():
                    mask[a] = 1
            else:
                for a in self.game.legal_take_back_actions():
                    if a == 0:
                        mask[ACTION_PASS] = 1
                    else:
                        mask[930 + a] = 1

        return {"observation": obs, "action_mask": mask}

    def step(self, action):
        if (
            self.truncations[self.agent_selection]
            or self.terminations[self.agent_selection]
        ):
            return self._was_dead_step(action)

        current_agent = self.agent_selection

        if self.game.phase == "place":
            assert action < NUM_PLACE_ACTIONS, "Expected a place/raise action"
            square_formed = self.game.apply_place(action)

            if self.game.done:
                winner = self.game.winner
                loser = 1 - winner
                self.rewards[self.possible_agents[winner]] = 1
                self.rewards[self.possible_agents[loser]] = -1
                self.terminations = {a: True for a in self.agents}
                self.agent_selection = self._agent_selector.next()
            elif square_formed:
                # Same agent continues for take_back phase — don't advance selector
                pass
            else:
                # Turn ended, game advanced current_player already
                self.agent_selection = self._agent_selector.next()
        else:
            # take_back phase
            assert action >= ACTION_PASS, "Expected a take_back or pass action"
            if action == ACTION_PASS:
                game_action = 0
            else:
                game_action = action - 930  # maps 931..960 to 1..30

            self.game.apply_take_back(game_action)

            if self.game.done:
                winner = self.game.winner
                loser = 1 - winner
                self.rewards[self.possible_agents[winner]] = 1
                self.rewards[self.possible_agents[loser]] = -1
                self.terminations = {a: True for a in self.agents}
                self.agent_selection = self._agent_selector.next()
            elif self.game.phase == "place":
                # Take-back phase ended, turn passed to opponent
                self.agent_selection = self._agent_selector.next()
            # else: still in take_back phase, same agent continues

        self._accumulate_rewards()

    def reset(self, seed=None, options=None):
        self.game.reset()
        self.agents = self.possible_agents[:]
        self.rewards = {a: 0 for a in self.agents}
        self._cumulative_rewards = {a: 0 for a in self.agents}
        self.terminations = {a: False for a in self.agents}
        self.truncations = {a: False for a in self.agents}
        self.infos = {a: {} for a in self.agents}
        self._agent_selector = agent_selector(self.agents)
        self.agent_selection = self._agent_selector.reset()

    def render(self):
        if self.render_mode != "ansi":
            return None
        from pylos_env.game import LEVEL_OFFSET, LEVEL_SIZE

        # ANSI color codes
        RST = "\033[0m"
        DIM = "\033[2m"
        BOLD = "\033[1m"
        RED = "\033[91m"      # player_0 (light)
        BLUE = "\033[94m"     # player_1 (dark)
        YELLOW = "\033[93m"

        SYMBOLS = {0: f"{DIM}·{RST}", 1: f"{RED}{BOLD}●{RST}", 2: f"{BLUE}{BOLD}○{RST}"}

        lines = [f"{DIM}{'─' * 30}{RST}"]
        for lv in range(3, -1, -1):
            s = LEVEL_SIZE[lv]
            off = LEVEL_OFFSET[lv]
            # Center each level: max width is level 0 (4 cells, "X   X   X   X" = 13 chars)
            # Use 4-char spacing between cells for readability
            pad = "    " * (3 - lv)
            label = f"{DIM}L{lv}{RST} "
            for r in range(s):
                row = []
                for c in range(s):
                    v = self.game.board[off + r * s + c]
                    row.append(SYMBOLS[v])
                prefix = label if r == 0 else "   "
                lines.append(prefix + pad + "   ".join(row))
            if lv > 0:
                lines.append("")

        lines.append(f"{DIM}{'─' * 30}{RST}")
        p0 = self.game.reserves[0]
        p1 = self.game.reserves[1]
        lines.append(f"  Reserves: {RED}{BOLD}●{RST} P0={BOLD}{p0}{RST}  {BLUE}{BOLD}○{RST} P1={BOLD}{p1}{RST}")
        phase_str = f"{YELLOW}{self.game.phase}{RST}" if self.game.phase == "take_back" else self.game.phase
        turn_color = RED if self.agent_selection == "player_0" else BLUE
        lines.append(f"  Phase: {phase_str}  Turn: {turn_color}{BOLD}{self.agent_selection}{RST}")
        lines.append(f"{DIM}{'─' * 30}{RST}")

        result = "\n".join(lines)
        print(result)
        return result

    def close(self):
        pass
