// Pylos game logic — direct port from Python pylos_env/game.py

export const LEVEL_OFFSET = [0, 16, 25, 29];
export const LEVEL_SIZE = [4, 3, 2, 1];
export const NUM_CELLS = 30;

// Support map: for each cell on levels 1-3, which 4 cells below support it
export const SUPPORT_MAP: Map<number, [number, number, number, number]> = new Map();
for (let level = 1; level < 4; level++) {
  const s = LEVEL_SIZE[level], sb = LEVEL_SIZE[level - 1];
  const off = LEVEL_OFFSET[level], offb = LEVEL_OFFSET[level - 1];
  for (let r = 0; r < s; r++)
    for (let c = 0; c < s; c++)
      SUPPORT_MAP.set(off + r * s + c, [
        offb + r * sb + c, offb + r * sb + c + 1,
        offb + (r + 1) * sb + c, offb + (r + 1) * sb + c + 1,
      ]);
}

// Resting on: for each cell, which cells above rest on it
export const RESTING_ON: number[][] = Array.from({ length: NUM_CELLS }, () => []);
for (const [upper, lowers] of SUPPORT_MAP) for (const lo of lowers) RESTING_ON[lo].push(upper);

// All 2x2 squares per level
export const SQUARES_PER_LEVEL: number[][][] = [];
for (let level = 0; level < 4; level++) {
  const s = LEVEL_SIZE[level], off = LEVEL_OFFSET[level], squares: number[][] = [];
  for (let r = 0; r < s - 1; r++)
    for (let c = 0; c < s - 1; c++)
      squares.push([off + r * s + c, off + r * s + c + 1, off + (r + 1) * s + c, off + (r + 1) * s + c + 1]);
  SQUARES_PER_LEVEL.push(squares);
}

export function cellLevel(idx: number): number {
  for (let lv = 3; lv >= 0; lv--) if (idx >= LEVEL_OFFSET[lv]) return lv;
  return 0;
}

// Board positions: (x, y, z) for each cell
const SQRT2 = Math.sqrt(2);
export const BOARD_POS: [number, number, number][] = [];
{
  let idx = 0;
  for (let level = 0; level < 4; level++) {
    const s = LEVEL_SIZE[level], z = 1 + level * SQRT2, half = s - 1;
    for (let r = 0; r < s; r++)
      for (let c = 0; c < s; c++) {
        BOARD_POS[idx] = [-half + c * 2, -half + r * 2, z];
        idx++;
      }
  }
}

// Reserve positions
export function reservePositions(side: -1 | 1): [number, number, number][] {
  const yBase = side * 8, pos: [number, number, number][] = [];
  for (let i = 0; i < 15; i++) {
    const row = Math.floor(i / 8), col = i % 8;
    pos.push([-7 + col * 2, yBase + side * row * 2, 1]);
  }
  return pos;
}

export type Phase = 'place' | 'take_back';

export interface GameSnapshot {
  board: number[];
  reserves: [number, number];
  currentPlayer: number;
  phase: Phase;
  takeBacksRemaining: number;
  done: boolean;
  winner: number;
}

export class PylosGame {
  board: number[];       // 0=empty, 1=player0(light), 2=player1(dark)
  reserves: [number, number];
  currentPlayer: number; // 0 or 1
  phase: Phase;
  takeBacksRemaining: number;
  done: boolean;
  winner: number;        // -1=none

  constructor() { this.board = []; this.reserves = [15, 15]; this.currentPlayer = 0; this.phase = 'place'; this.takeBacksRemaining = 0; this.done = false; this.winner = -1; this.reset(); }

  reset() {
    this.board = new Array(NUM_CELLS).fill(0);
    this.reserves = [15, 15];
    this.currentPlayer = 0;
    this.phase = 'place';
    this.takeBacksRemaining = 0;
    this.done = false;
    this.winner = -1;
  }

  snapshot(): GameSnapshot {
    return { board: [...this.board], reserves: [...this.reserves] as [number, number], currentPlayer: this.currentPlayer, phase: this.phase, takeBacksRemaining: this.takeBacksRemaining, done: this.done, winner: this.winner };
  }

  restore(s: GameSnapshot) {
    this.board = [...s.board]; this.reserves = [...s.reserves] as [number, number];
    this.currentPlayer = s.currentPlayer; this.phase = s.phase;
    this.takeBacksRemaining = s.takeBacksRemaining; this.done = s.done; this.winner = s.winner;
  }

  playerVal(p: number) { return p + 1; }

  isSupported(idx: number): boolean {
    if (idx < 16) return true;
    const sup = SUPPORT_MAP.get(idx)!;
    return sup.every(s => this.board[s] !== 0);
  }

  isUncovered(idx: number): boolean {
    return RESTING_ON[idx].every(u => this.board[u] === 0);
  }

  private formedSquare(idx: number, pv: number): boolean {
    const lv = cellLevel(idx);
    for (const sq of SQUARES_PER_LEVEL[lv])
      if (sq.includes(idx) && sq.every(c => this.board[c] === pv)) return true;
    return false;
  }

  legalPlaceActions(): number[] {
    const pv = this.playerVal(this.currentPlayer), actions: number[] = [];
    if (this.reserves[this.currentPlayer] > 0)
      for (let i = 0; i < NUM_CELLS; i++)
        if (this.board[i] === 0 && this.isSupported(i)) actions.push(i);
    for (let src = 0; src < NUM_CELLS; src++) {
      if (this.board[src] !== pv || !this.isUncovered(src)) continue;
      const srcLv = cellLevel(src);
      this.board[src] = 0;
      for (let dst = 0; dst < NUM_CELLS; dst++)
        if (this.board[dst] === 0 && cellLevel(dst) > srcLv && this.isSupported(dst))
          actions.push(30 + src * 30 + dst);
      this.board[src] = pv;
    }
    return actions;
  }

  legalTakeBackActions(): number[] {
    const actions = [0], pv = this.playerVal(this.currentPlayer);
    for (let i = 0; i < NUM_CELLS; i++)
      if (this.board[i] === pv && this.isUncovered(i)) actions.push(i + 1);
    return actions;
  }

  applyPlace(action: number): boolean {
    const pv = this.playerVal(this.currentPlayer);
    let pos: number;
    if (action < 30) {
      pos = action; this.board[pos] = pv; this.reserves[this.currentPlayer]--;
    } else {
      const code = action - 30, src = Math.floor(code / 30), dst = code % 30;
      this.board[src] = 0; this.board[dst] = pv; pos = dst;
    }
    if (pos === 29) { this.done = true; this.winner = this.currentPlayer; return false; }
    if (this.formedSquare(pos, pv)) { this.phase = 'take_back'; this.takeBacksRemaining = 2; return true; }
    this.endTurn(); return false;
  }

  applyTakeBack(action: number) {
    if (action === 0) { this.takeBacksRemaining = 0; }
    else { const pos = action - 1; this.board[pos] = 0; this.reserves[this.currentPlayer]++; this.takeBacksRemaining--; }
    if (this.takeBacksRemaining <= 0) { this.phase = 'place'; this.endTurn(); }
  }

  private endTurn() {
    this.phase = 'place';
    this.currentPlayer = 1 - this.currentPlayer;
    if (this.legalPlaceActions().length === 0) { this.done = true; this.winner = 1 - this.currentPlayer; }
  }
}

export function describeAction(action: number, phase: Phase, player: number): string {
  const name = player === 0 ? 'Light' : 'Dark';
  if (phase === 'place') {
    if (action < 30) return `${name} places at ${action} (L${cellLevel(action)})`;
    const code = action - 30, src = Math.floor(code / 30), dst = code % 30;
    return `${name} raises ${src} to ${dst}`;
  }
  return action === 0 ? `${name} passes take-back` : `${name} takes back ${action - 1}`;
}
