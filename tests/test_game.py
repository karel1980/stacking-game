"""Tests for StackingGame core logic."""
import numpy as np
import pytest
from stacking_env.game import (
    NUM_CELLS, LEVEL_OFFSET, LEVEL_SIZE, SUPPORT_MAP, RESTING_ON,
    SQUARES_PER_LEVEL, cell_level, StackingGame,
)


# --- Data structure tests ---

class TestBoardStructure:
    def test_total_cells(self):
        assert NUM_CELLS == 30

    def test_level_sizes(self):
        assert sum(s * s for s in LEVEL_SIZE) == NUM_CELLS

    def test_support_map_covers_upper_levels(self):
        upper_cells = set(range(16, 30))
        assert set(SUPPORT_MAP.keys()) == upper_cells

    def test_support_map_points_to_level_below(self):
        for idx, supports in SUPPORT_MAP.items():
            lv = cell_level(idx)
            for s in supports:
                assert cell_level(s) == lv - 1

    def test_resting_on_inverse_of_support_map(self):
        for upper, lowers in SUPPORT_MAP.items():
            for lo in lowers:
                assert upper in RESTING_ON[lo]

    def test_squares_per_level_counts(self):
        # (n-1)^2 squares per level
        for lv in range(4):
            s = LEVEL_SIZE[lv]
            expected = (s - 1) ** 2 if s > 1 else 0
            assert len(SQUARES_PER_LEVEL[lv]) == expected

    def test_cell_level(self):
        for i in range(16):
            assert cell_level(i) == 0
        for i in range(16, 25):
            assert cell_level(i) == 1
        for i in range(25, 29):
            assert cell_level(i) == 2
        assert cell_level(29) == 3


# --- Game logic tests ---

class TestGameInit:
    def test_initial_state(self):
        g = StackingGame()
        assert np.all(g.board == 0)
        assert g.reserves == [15, 15]
        assert g.current_player == 0
        assert g.phase == "place"
        assert not g.done

    def test_reset(self):
        g = StackingGame()
        g.board[0] = 1
        g.reserves[0] = 10
        g.reset()
        assert np.all(g.board == 0)
        assert g.reserves == [15, 15]


class TestPlacement:
    def test_place_on_empty_base(self):
        g = StackingGame()
        g.apply_place(0)  # place at position 0
        assert g.board[0] == 1  # player_0 = value 1
        assert g.reserves[0] == 14
        assert g.current_player == 1  # turn switched

    def test_cannot_place_on_unsupported(self):
        g = StackingGame()
        legal = g.legal_place_actions()
        # Level 1+ positions should not be legal when base is empty
        for a in legal:
            if a < 30:
                assert a < 16  # only base positions

    def test_place_on_supported_upper_level(self):
        g = StackingGame()
        # Fill a 2x2 on base with alternating players to avoid square bonus
        # positions 0,1,4,5 support position 16
        g.board[0] = 1
        g.board[1] = 2
        g.board[4] = 2
        g.board[5] = 1
        g.reserves = [13, 13]
        g.current_player = 0
        legal = g.legal_place_actions()
        assert 16 in legal  # can place on level 1
        g.apply_place(16)
        assert g.board[16] == 1

    def test_all_base_positions_legal_initially(self):
        g = StackingGame()
        legal = g.legal_place_actions()
        base_placements = [a for a in legal if a < 16]
        assert len(base_placements) == 16


class TestRaise:
    def test_raise_to_higher_level(self):
        g = StackingGame()
        # pos 16 is supported by 0,1,4,5. We can't raise from any of those 4
        # because removing them breaks support. Use a sphere NOT in 16's support.
        # pos 3 (row 0, col 3) is not in SUPPORT_MAP[16]=(0,1,4,5)
        # Fill 0,1,4,5 with opponent, put our sphere at 3
        g.board[0] = 2
        g.board[1] = 2
        g.board[4] = 2
        g.board[5] = 2
        g.board[3] = 1  # our sphere, not supporting 16
        g.reserves = [14, 11]
        g.current_player = 0
        # Raise from 3 to 16
        action = 30 + 3 * 30 + 16
        legal = g.legal_place_actions()
        assert action in legal
        g.apply_place(action)
        assert g.board[3] == 0  # source cleared
        assert g.board[16] == 1  # destination filled
        assert g.reserves[0] == 14  # reserve unchanged (raise doesn't use reserve)

    def test_cannot_raise_covered_sphere(self):
        g = StackingGame()
        # pos 0 is covered by pos 16
        g.board[0] = 1
        g.board[1] = 2
        g.board[4] = 2
        g.board[5] = 2
        g.board[16] = 2  # covers pos 0
        g.reserves = [14, 11]
        g.current_player = 0
        legal = g.legal_place_actions()
        raise_from_0 = [a for a in legal if a >= 30 and (a - 30) // 30 == 0]
        assert len(raise_from_0) == 0

    def test_cannot_raise_to_same_or_lower_level(self):
        g = StackingGame()
        g.board[0] = 1
        g.reserves = [14, 15]
        g.current_player = 0
        legal = g.legal_place_actions()
        raise_actions = [a for a in legal if a >= 30]
        for a in raise_actions:
            src = (a - 30) // 30
            dst = (a - 30) % 30
            assert cell_level(dst) > cell_level(src)


class TestSquareDetection:
    def test_completing_square_triggers_take_back(self):
        g = StackingGame()
        # Player 0 has 0,1,4 — placing at 5 completes a square
        g.board[0] = 1
        g.board[1] = 1
        g.board[4] = 1
        g.reserves = [12, 15]
        g.current_player = 0
        result = g.apply_place(5)
        assert result is True
        assert g.phase == "take_back"
        assert g.take_backs_remaining == 2

    def test_no_square_no_take_back(self):
        g = StackingGame()
        g.board[0] = 1
        g.board[1] = 1
        g.reserves = [13, 15]
        g.current_player = 0
        result = g.apply_place(2)  # row 0, col 2 — no square
        assert result is False
        assert g.phase == "place"


class TestTakeBack:
    def _setup_take_back(self):
        """Set up a game in take_back phase."""
        g = StackingGame()
        g.board[0] = 1
        g.board[1] = 1
        g.board[4] = 1
        g.board[5] = 1
        g.reserves = [11, 15]
        g.current_player = 0
        g.phase = "take_back"
        g.take_backs_remaining = 2
        return g

    def test_pass_ends_take_back(self):
        g = self._setup_take_back()
        g.apply_take_back(0)  # pass
        assert g.phase == "place"
        assert g.current_player == 1  # turn switched

    def test_take_back_one_sphere(self):
        g = self._setup_take_back()
        g.apply_take_back(1)  # take back pos 0
        assert g.board[0] == 0
        assert g.reserves[0] == 12
        assert g.take_backs_remaining == 1

    def test_take_back_two_spheres(self):
        g = self._setup_take_back()
        g.apply_take_back(1)  # take back pos 0
        g.apply_take_back(2)  # take back pos 1
        assert g.board[0] == 0
        assert g.board[1] == 0
        assert g.reserves[0] == 13
        assert g.phase == "place"
        assert g.current_player == 1

    def test_cannot_take_back_covered_sphere(self):
        g = self._setup_take_back()
        # Cover pos 0 by placing something at level 1
        g.board[16] = 2  # opponent sphere covers 0
        legal = g.legal_take_back_actions()
        assert 1 not in legal  # pos 0 is covered, action 1 = take back pos 0

    def test_cannot_take_back_opponent_sphere(self):
        g = self._setup_take_back()
        g.board[2] = 2  # opponent sphere
        legal = g.legal_take_back_actions()
        assert 3 not in legal  # action 3 = take back pos 2


class TestWinConditions:
    def test_win_by_placing_on_top(self):
        g = StackingGame()
        # Fill everything up to level 3
        g.board[25] = 1
        g.board[26] = 2
        g.board[27] = 1
        g.board[28] = 2
        # Support for level 2 must exist
        for i in range(16, 25):
            g.board[i] = 1 if i % 2 == 0 else 2
        for i in range(16):
            g.board[i] = 1 if i % 2 == 0 else 2
        g.reserves = [1, 1]
        g.current_player = 0
        g.apply_place(29)  # place on top
        assert g.done
        assert g.winner == 0

    def test_lose_by_no_moves(self):
        g = StackingGame()
        g.reserves = [0, 0]
        # Fill entire board except top, no raises possible
        for i in range(29):
            g.board[i] = 1 if i % 2 == 0 else 2
        g.current_player = 0
        # Player 0 places on top
        g.apply_place(29)
        assert g.done
        assert g.winner == 0


class TestRandomPlaythrough:
    def test_random_games_complete(self):
        """Run several random games to ensure no crashes."""
        rng = np.random.default_rng(42)
        for _ in range(20):
            g = StackingGame()
            moves = 0
            while not g.done and moves < 500:
                if g.phase == "place":
                    legal = g.legal_place_actions()
                else:
                    legal = g.legal_take_back_actions()
                assert len(legal) > 0, "No legal actions but game not done"
                action = legal[rng.integers(len(legal))]
                g.step(action)
                moves += 1
            assert g.done, f"Game didn't finish in 500 moves"
            assert g.winner in (0, 1)
