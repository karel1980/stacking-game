/**
 * AI opponent using ONNX model exported from PylosNet.
 *
 * Observation layout (154 floats) — must match pylos_env/env.py:
 *   [0:30]    own sphere (binary)
 *   [30:60]   opponent sphere (binary)
 *   [60:90]   level (normalized 0-1)
 *   [90:120]  support fill ratio
 *   [120:150] square proximity (best own fraction)
 *   [150]     own reserves / 15
 *   [151]     opponent reserves / 15
 *   [152]     phase (0=place, 1=take_back)
 *   [153]     take_backs_remaining / 2
 *
 * Action space (961):
 *   0-29:     place from reserve at cell i
 *   30-929:   raise src→dst  (30 + src*30 + dst)
 *   930:      pass (done taking back)
 *   931-960:  take back cell (action - 931)
 */

import * as ort from 'onnxruntime-web';
import {
  PylosGame, NUM_CELLS, SUPPORT_MAP, SQUARES_PER_LEVEL,
  cellLevel,
} from './game';

const OBS_DIM = 154;
const TOTAL_ACTIONS = 961;
const ACTION_PASS = 930;

// Static per-cell level feature
const CELL_LEVEL = new Float32Array(NUM_CELLS);
for (let i = 0; i < NUM_CELLS; i++) CELL_LEVEL[i] = cellLevel(i) / 3;

// Precompute which squares each cell belongs to
const CELL_SQUARES: number[][][] = Array.from({ length: NUM_CELLS }, () => []);
for (const lvSqs of SQUARES_PER_LEVEL)
  for (const sq of lvSqs)
    for (const c of sq) CELL_SQUARES[c].push(sq);

let session: ort.InferenceSession | null = null;

export async function initAI(url = 'pylos.onnx') {
  ort.env.wasm.numThreads = 1;
  ort.env.wasm.wasmPaths = './';
  session = await ort.InferenceSession.create(url, {
    executionProviders: ['wasm'],
  });
}

/** Build the 154-dim observation vector from the game state, from the perspective of the current player. */
function buildObs(game: PylosGame): Float32Array {
  const obs = new Float32Array(OBS_DIM);
  const cp = game.currentPlayer, pv = cp + 1, ov = 2 - cp;
  const board = game.board;

  for (let i = 0; i < NUM_CELLS; i++) {
    const v = board[i];
    obs[i] = v === pv ? 1 : 0;
    obs[NUM_CELLS + i] = v === ov ? 1 : 0;
    obs[NUM_CELLS * 2 + i] = CELL_LEVEL[i];
    // Support fill ratio
    const sup = SUPPORT_MAP.get(i);
    if (sup) {
      let filled = 0;
      for (const s of sup) if (board[s] !== 0) filled++;
      obs[NUM_CELLS * 3 + i] = filled / 4;
    } else {
      obs[NUM_CELLS * 3 + i] = 1; // level 0
    }
    // Square proximity
    let best = 0;
    for (const sq of CELL_SQUARES[i]) {
      let own = 0;
      for (const c of sq) if (board[c] === pv) own++;
      if (own / 4 > best) best = own / 4;
    }
    obs[NUM_CELLS * 4 + i] = best;
  }

  const base = NUM_CELLS * 5;
  obs[base] = game.reserves[cp] / 15;
  obs[base + 1] = game.reserves[1 - cp] / 15;
  obs[base + 2] = game.phase === 'take_back' ? 1 : 0;
  obs[base + 3] = game.takeBacksRemaining / 2;
  return obs;
}

/** Build the 961-dim action mask. */
function buildMask(game: PylosGame): Float32Array {
  const mask = new Float32Array(TOTAL_ACTIONS);
  if (game.phase === 'place') {
    for (const a of game.legalPlaceActions()) mask[a] = 1;
  } else {
    for (const a of game.legalTakeBackActions()) {
      if (a === 0) mask[ACTION_PASS] = 1;
      else mask[930 + a] = 1; // a is pos+1, so 930 + (pos+1) = 931..960
    }
  }
  return mask;
}

/** Convert env action (961-space) to web game action. */
function envToGameAction(action: number, phase: string): number {
  if (phase === 'place') return action; // 0-929 identical
  if (action === ACTION_PASS) return 0; // pass
  return action - 930; // 931..960 → 1..30 (pos+1)
}

/** Run the model and return the best legal game action. */
export async function getAIAction(game: PylosGame): Promise<number> {
  if (!session) throw new Error('AI not initialized — call initAI() first');

  const obs = buildObs(game);
  const mask = buildMask(game);

  const obsTensor = new ort.Tensor('float32', obs, [1, OBS_DIM]);
  const maskTensor = new ort.Tensor('float32', mask, [1, TOTAL_ACTIONS]);

  const results = await session.run({ obs: obsTensor, action_mask: maskTensor });
  const logProbs = results['log_probs'].data as Float32Array;

  // Pick the action with highest probability (deterministic / greedy)
  let bestIdx = -1, bestVal = -Infinity;
  for (let i = 0; i < TOTAL_ACTIONS; i++) {
    if (mask[i] === 1 && logProbs[i] > bestVal) {
      bestVal = logProbs[i];
      bestIdx = i;
    }
  }

  return envToGameAction(bestIdx, game.phase);
}
