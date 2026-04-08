"""Core Stacking Game game logic.

Board layout:
  Level 0: 4x4 = 16 positions (indices 0-15)
  Level 1: 3x3 = 9  positions (indices 16-24)
  Level 2: 2x2 = 4  positions (indices 25-28)
  Level 3: 1x1 = 1  position  (index 29)

Cell values: 0=empty, 1=player_0 (light), 2=player_1 (dark)
"""

import numpy as np

# Level offsets and sizes
LEVEL_OFFSET = [0, 16, 25, 29]
LEVEL_SIZE = [4, 3, 2, 1]
NUM_CELLS = 30

# Precompute: for each cell on levels 1-3, which 4 cells below support it
SUPPORT_MAP: dict[int, tuple[int, int, int, int]] = {}
for level in range(1, 4):
    s = LEVEL_SIZE[level]
    s_below = LEVEL_SIZE[level - 1]
    off = LEVEL_OFFSET[level]
    off_below = LEVEL_OFFSET[level - 1]
    for r in range(s):
        for c in range(s):
            idx = off + r * s + c
            SUPPORT_MAP[idx] = (
                off_below + r * s_below + c,
                off_below + r * s_below + (c + 1),
                off_below + (r + 1) * s_below + c,
                off_below + (r + 1) * s_below + (c + 1),
            )

# Precompute: for each cell, which cells above rest on it
RESTING_ON: dict[int, list[int]] = {i: [] for i in range(NUM_CELLS)}
for upper, lowers in SUPPORT_MAP.items():
    for lo in lowers:
        RESTING_ON[lo].append(upper)

# Precompute: all 2x2 squares per level (for square detection)
SQUARES_PER_LEVEL: list[list[tuple[int, ...]]] = []
for level in range(4):
    s = LEVEL_SIZE[level]
    off = LEVEL_OFFSET[level]
    squares = []
    for r in range(s - 1):
        for c in range(s - 1):
            squares.append((
                off + r * s + c,
                off + r * s + (c + 1),
                off + (r + 1) * s + c,
                off + (r + 1) * s + (c + 1),
            ))
    SQUARES_PER_LEVEL.append(squares)


def cell_level(idx: int) -> int:
    for lv in range(3, -1, -1):
        if idx >= LEVEL_OFFSET[lv]:
            return lv
    return 0


class StackingGame:
    def __init__(self):
        self.reset()

    def reset(self):
        self.board = np.zeros(NUM_CELLS, dtype=np.int8)
        self.reserves = [15, 15]  # player 0, player 1
        self.current_player = 0  # 0=light, 1=dark
        self.phase = "place"  # "place" or "take_back"
        self.take_backs_remaining = 0
        self.done = False
        self.winner = -1  # -1=none, 0 or 1

    def _player_val(self, player: int) -> int:
        return player + 1

    def is_supported(self, idx: int) -> bool:
        """A cell is supported if it's on level 0 or all 4 cells below are occupied."""
        if idx < 16:
            return True
        return all(self.board[s] != 0 for s in SUPPORT_MAP[idx])

    def is_uncovered(self, idx: int) -> bool:
        """A sphere is uncovered if no sphere above rests on it."""
        return all(self.board[upper] == 0 for upper in RESTING_ON[idx])

    def _formed_square(self, idx: int, player_val: int) -> bool:
        """Check if placing at idx completed any 2x2 square of player_val."""
        lv = cell_level(idx)
        for sq in SQUARES_PER_LEVEL[lv]:
            if idx in sq and all(self.board[c] == player_val for c in sq):
                return True
        return False

    def legal_place_actions(self) -> list[int]:
        """Return list of legal PLACE action indices.
        Actions 0-29: place from reserve at position i.
        Actions 30+: raise from src to dst, encoded as 30 + src*30 + dst.
        """
        pv = self._player_val(self.current_player)
        actions = []

        # Place from reserve
        if self.reserves[self.current_player] > 0:
            for i in range(NUM_CELLS):
                if self.board[i] == 0 and self.is_supported(i):
                    actions.append(i)

        # Raise: move own uncovered sphere to a higher supported empty cell
        for src in range(NUM_CELLS):
            if self.board[src] != pv or not self.is_uncovered(src):
                continue
            src_level = cell_level(src)
            # Temporarily remove to check support
            self.board[src] = 0
            for dst in range(NUM_CELLS):
                if self.board[dst] != 0:
                    continue
                if cell_level(dst) <= src_level:
                    continue
                if self.is_supported(dst):
                    actions.append(30 + src * 30 + dst)
            self.board[src] = pv

        return actions

    def legal_take_back_actions(self) -> list[int]:
        """Return list of legal TAKE_BACK action indices.
        Action 0: pass (done taking back).
        Actions 1-30: take back sphere at position (action-1).
        """
        actions = [0]  # can always pass
        pv = self._player_val(self.current_player)
        for i in range(NUM_CELLS):
            if self.board[i] == pv and self.is_uncovered(i):
                actions.append(i + 1)
        return actions

    def apply_place(self, action: int):
        """Apply a PLACE action. Returns True if a same-color square was formed."""
        pv = self._player_val(self.current_player)
        if action < 30:
            # Place from reserve
            pos = action
            self.board[pos] = pv
            self.reserves[self.current_player] -= 1
        else:
            # Raise
            code = action - 30
            src, dst = divmod(code, 30)
            self.board[src] = 0
            self.board[dst] = pv
            pos = dst

        # Check win: placed at top
        if pos == 29:
            self.done = True
            self.winner = self.current_player
            self.phase = "place"
            return False

        # Check if square formed
        if self._formed_square(pos, pv):
            self.phase = "take_back"
            self.take_backs_remaining = 2
            return True

        # End turn
        self._end_turn()
        return False

    def apply_take_back(self, action: int):
        """Apply a TAKE_BACK action."""
        if action == 0:
            # Pass — done taking back
            self.take_backs_remaining = 0
        else:
            pos = action - 1
            self.board[pos] = 0
            self.reserves[self.current_player] += 1
            self.take_backs_remaining -= 1

        if self.take_backs_remaining <= 0:
            self.phase = "place"
            self._end_turn()

    def _end_turn(self):
        self.phase = "place"
        self.current_player = 1 - self.current_player
        # Check if next player can move
        if not self.legal_place_actions():
            self.done = True
            self.winner = 1 - self.current_player  # current player loses

    def step(self, action: int):
        """Execute one action. The action space depends on self.phase."""
        if self.phase == "place":
            self.apply_place(action)
        else:
            self.apply_take_back(action)
