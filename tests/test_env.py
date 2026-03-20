"""Tests for PettingZoo AEC environment."""
import numpy as np
import pytest
from pettingzoo.test import api_test, seed_test

from pylos_env import env, raw_env
from pylos_env.env import TOTAL_ACTIONS, ACTION_PASS, NUM_PLACE_ACTIONS
from pylos_env.game import PylosGame, SUPPORT_MAP, RESTING_ON, cell_level


class TestPettingZooAPI:
    def test_api_test(self):
        e = env()
        api_test(e, num_cycles=50)

    def test_seed_test(self):
        seed_test(env)


class TestEnvBasics:
    def test_reset(self):
        e = raw_env()
        e.reset()
        assert e.agent_selection == "player_0"
        assert len(e.agents) == 2
        assert not any(e.terminations.values())

    def test_action_space_size(self):
        e = raw_env()
        e.reset()
        for a in e.agents:
            assert e.action_space(a).n == TOTAL_ACTIONS

    def test_observation_shape(self):
        e = raw_env()
        e.reset()
        obs = e.observe("player_0")
        assert obs["observation"].shape == (32,)
        assert obs["action_mask"].shape == (TOTAL_ACTIONS,)

    def test_initial_observation_values(self):
        e = raw_env()
        e.reset()
        obs = e.observe("player_0")
        # Board should be empty
        assert np.all(obs["observation"][:30] == 0)
        # Reserves should be 15 each
        assert obs["observation"][30] == 15
        assert obs["observation"][31] == 15

    def test_initial_mask_only_base_placements(self):
        e = raw_env()
        e.reset()
        obs = e.observe("player_0")
        mask = obs["action_mask"]
        # Only actions 0-15 (base placements) should be legal
        assert np.sum(mask[:16]) == 16
        assert np.sum(mask[16:30]) == 0  # upper level placements
        assert np.sum(mask[30:]) == 0  # no raises, no take-back


class TestObservationRelative:
    def test_own_spheres_are_1(self):
        e = raw_env()
        e.reset()
        # Player 0 places at pos 0
        e.step(0)
        # From player_1's perspective, pos 0 should be opponent (2)
        obs1 = e.observe("player_1")
        assert obs1["observation"][0] == 2
        # From player_0's perspective, pos 0 should be own (1)
        obs0 = e.observe("player_0")
        assert obs0["observation"][0] == 1


class TestTurnFlow:
    def test_turns_alternate(self):
        e = raw_env()
        e.reset()
        assert e.agent_selection == "player_0"
        e.step(0)  # player_0 places at 0
        assert e.agent_selection == "player_1"
        e.step(1)  # player_1 places at 1
        assert e.agent_selection == "player_0"

    def test_non_active_agent_has_empty_mask(self):
        e = raw_env()
        e.reset()
        # player_1 is not active
        obs = e.observe("player_1")
        assert np.sum(obs["action_mask"]) == 0


class TestTakeBackPhase:
    def test_square_triggers_take_back(self):
        e = raw_env()
        e.reset()
        # Manually set up board for player_0 to complete a square
        e.game.board[0] = 1
        e.game.board[1] = 1
        e.game.board[4] = 1
        e.game.reserves[0] = 12
        e.game.current_player = 0
        e.agent_selection = "player_0"
        # Place at 5 to complete square (0,1,4,5)
        e.step(5)
        # Should still be player_0's turn (take_back phase)
        assert e.agent_selection == "player_0"
        assert e.game.phase == "take_back"
        # Mask should only have take_back actions
        obs = e.observe("player_0")
        mask = obs["action_mask"]
        assert np.sum(mask[:NUM_PLACE_ACTIONS]) == 0  # no place actions
        assert mask[ACTION_PASS] == 1  # can pass

    def test_pass_ends_take_back(self):
        e = raw_env()
        e.reset()
        e.game.board[0] = 1
        e.game.board[1] = 1
        e.game.board[4] = 1
        e.game.reserves[0] = 12
        e.game.current_player = 0
        e.agent_selection = "player_0"
        e.step(5)  # complete square
        assert e.agent_selection == "player_0"
        e.step(ACTION_PASS)  # pass take_back
        assert e.agent_selection == "player_1"


class TestGameEnd:
    def test_rewards_on_win(self):
        e = raw_env()
        e.reset()
        # Set up board so player_0 can place on top
        for i in range(29):
            e.game.board[i] = 1 if i % 2 == 0 else 2
        e.game.reserves = [1, 1]
        e.game.current_player = 0
        e.agent_selection = "player_0"
        e.step(29)  # place on top
        assert e.terminations["player_0"]
        assert e.terminations["player_1"]
        assert e.rewards["player_0"] == 1
        assert e.rewards["player_1"] == -1


class TestRender:
    def test_ansi_render(self):
        e = raw_env(render_mode="ansi")
        e.reset()
        result = e.render()
        assert isinstance(result, str)
        assert "Reserves" in result


class TestRandomPlaythrough:
    def test_random_games_via_env(self):
        """Play random games through the PettingZoo interface."""
        rng = np.random.default_rng(123)
        for _ in range(10):
            e = raw_env()
            e.reset()
            steps = 0
            while not all(e.terminations.values()) and steps < 1000:
                agent = e.agent_selection
                obs = e.observe(agent)
                mask = obs["action_mask"]
                legal = np.where(mask == 1)[0]
                assert len(legal) > 0
                action = legal[rng.integers(len(legal))]
                e.step(action)
                steps += 1
            assert all(e.terminations.values()), "Game didn't end"


class TestAdversarial:
    """Edge cases and adversarial inputs."""

    def test_raise_frees_support_correctly(self):
        """Raising a sphere should make positions above it unsupported."""
        e = raw_env()
        e.reset()
        g = e.game
        # Fill 2x2 at (0,1,4,5) with mixed colors, place at 16
        g.board[0] = 1
        g.board[1] = 2
        g.board[4] = 2
        g.board[5] = 1
        g.board[16] = 2  # on top of 0,1,4,5
        g.reserves = [13, 12]
        g.current_player = 0
        # Sphere at 0 is covered by 16, cannot be raised
        legal = g.legal_place_actions()
        raise_from_0 = [a for a in legal if a >= 30 and (a - 30) // 30 == 0]
        assert len(raise_from_0) == 0

    def test_raise_removes_support_for_destination_check(self):
        """When checking raise destinations, the source is temporarily removed."""
        g = PylosGame()
        # pos 3 is NOT in SUPPORT_MAP[16]=(0,1,4,5), so removing it won't break support
        g.board[0] = 2
        g.board[1] = 2
        g.board[4] = 2
        g.board[5] = 2
        g.board[3] = 1  # uncovered, not supporting 16
        g.reserves = [14, 11]
        g.current_player = 0
        legal = g.legal_place_actions()
        raise_3_to_16 = 30 + 3 * 30 + 16
        assert raise_3_to_16 in legal

    def test_take_back_after_raise_square(self):
        """Completing a square via raise should also trigger take-back."""
        g = PylosGame()
        # Fill base fully
        for i in range(16):
            g.board[i] = 1 if i % 2 == 0 else 2
        # Level 1: put 3 of player_0's spheres, leave one spot for raise
        # positions 16,17,19 are player_0, 20 is empty
        g.board[16] = 1
        g.board[17] = 1
        g.board[19] = 1
        g.board[20] = 0
        g.reserves = [7, 7]
        g.current_player = 0
        # Find an uncovered player_0 sphere on level 0 that can raise to 20
        # pos 20 = level 1, row 1, col 1 → supported by base 5,6,9,10 (all filled)
        # We need a level-0 sphere that's uncovered (no level-1 sphere resting on it)
        # and that is player_0's
        # pos 14 = row 3, col 2 → RESTING_ON[14] includes level-1 cells that use it
        # level 1 (r,c) uses base (r,c),(r,c+1),(r+1,c),(r+1,c+1)
        # pos 14 = base row 3, col 2 → used by level1 (2,1)=23 and (2,2)=24
        # If 23 and 24 are empty, pos 14 is uncovered
        g.board[23] = 0
        g.board[24] = 0
        g.board[14] = 1  # ensure it's player_0
        action = 30 + 14 * 30 + 20
        legal = g.legal_place_actions()
        if action in legal:
            result = g.apply_place(action)
            # 16,17,19,20 form a 2x2 square of player_0 → take_back
            if result:
                assert g.phase == "take_back"
