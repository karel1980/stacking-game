import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import {
  PylosGame, GameSnapshot, BOARD_POS, reservePositions, NUM_CELLS,
  cellLevel, SUPPORT_MAP, RESTING_ON, describeAction, Phase,
} from './game';

// ── Constants ──────────────────────────────────────────────────────────
const BALL_RADIUS = 1;
const RESERVE_P0 = reservePositions(-1);
const RESERVE_P1 = reservePositions(1);

// ── Three.js setup ─────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.4;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a2a32);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 200);
camera.position.set(18, -18, 18);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 2);
controls.enableDamping = true;
controls.dampingFactor = 0.12;
controls.minDistance = 10;
controls.maxDistance = 60;
controls.maxPolarAngle = Math.PI * 0.48;
controls.minPolarAngle = 0.1;
controls.enabled = false; // enabled after start

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Lights ─────────────────────────────────────────────────────────────
const key = new THREE.DirectionalLight(0xfff5e0, 1.6);
key.position.set(15, 25, -10); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.left = -15; key.shadow.camera.right = 15;
key.shadow.camera.top = 15; key.shadow.camera.bottom = -15;
key.shadow.camera.near = 1; key.shadow.camera.far = 60;
key.shadow.bias = -0.001;
scene.add(key); scene.add(key.target); key.target.position.set(0, 0, 2);

const fill = new THREE.DirectionalLight(0xd0d8f0, 1.0);
fill.position.set(-14, 12, 10); scene.add(fill);

const rim = new THREE.DirectionalLight(0xc8c8e0, 0.7);
rim.position.set(5, 18, -15); scene.add(rim);

const bottom = new THREE.DirectionalLight(0xe8e0d0, 0.4);
bottom.position.set(0, 3, 0); scene.add(bottom);

scene.add(new THREE.AmbientLight(0x606068, 1.2));

// ── Materials ──────────────────────────────────────────────────────────
// ── Procedural wood texture ─────────────────────────────────────────────
function makeWoodTexture(
  baseR: number, baseG: number, baseB: number,
  grainR: number, grainG: number, grainB: number,
  size = 512
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Base color
  ctx.fillStyle = `rgb(${baseR},${baseG},${baseB})`;
  ctx.fillRect(0, 0, size, size);

  // Wood grain lines
  ctx.globalAlpha = 0.35;
  for (let i = 0; i < 120; i++) {
    const y = Math.random() * size;
    const thickness = 0.5 + Math.random() * 2.5;
    const waviness = 0.3 + Math.random() * 1.5;
    const freq = 0.005 + Math.random() * 0.015;
    const shade = 0.7 + Math.random() * 0.3;
    ctx.strokeStyle = `rgb(${grainR * shade | 0},${grainG * shade | 0},${grainB * shade | 0})`;
    ctx.lineWidth = thickness;
    ctx.beginPath();
    for (let x = 0; x < size; x += 2) {
      const yy = y + Math.sin(x * freq) * waviness * 20 + Math.sin(x * freq * 3.7) * waviness * 5;
      x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  // Subtle noise overlay
  ctx.globalAlpha = 0.06;
  for (let i = 0; i < 15000; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    const v = Math.random() > 0.5 ? 255 : 0;
    ctx.fillStyle = `rgb(${v},${v},${v})`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

// Light wood: maple/birch tones — darker
const lightWoodTex = makeWoodTexture(180, 155, 120, 120, 90, 55);
const matLight = new THREE.MeshStandardMaterial({ map: lightWoodTex, roughness: 0.55, metalness: 0 });

// Dark wood: walnut tones — darker
const darkWoodTex = makeWoodTexture(70, 38, 22, 35, 15, 5);
const matDark = new THREE.MeshStandardMaterial({ map: darkWoodTex, roughness: 0.5, metalness: 0 });
const matGhost = new THREE.MeshStandardMaterial({ color: 0xaaccff, roughness: 0.1, transparent: true, opacity: 0.3, depthWrite: false });

// ── Board material ─────────────────────────────────────────────────────
const boardWoodTex = makeWoodTexture(160, 120, 75, 100, 65, 30);
boardWoodTex.repeat.set(2, 2);
const matBoard = new THREE.MeshStandardMaterial({ map: boardWoodTex, roughness: 0.45, metalness: 0 });

// ── Geometry ───────────────────────────────────────────────────────────
const sphereGeo = new THREE.SphereGeometry(BALL_RADIUS, 48, 32);

// ── Build board with CSG ───────────────────────────────────────────────
const BOARD_THICKNESS = 2.5;
const FILLET = 0.4;
const BOARD_W = 18;   // x extent
const BOARD_D = 24;   // z extent
// Board surface will be at y = RECESS_DEPTH so cutter centers align with ball centers at y=BALL_RADIUS
const BOARD_SURFACE_Y = BALL_RADIUS * 0.3; // matches RECESS_DEPTH inside buildBoard

// Storage area dimensions (each side has 8+7 balls in 2 rows)
const STORAGE_W = 16.5;
const STORAGE_D = 5;
const STORAGE_DEPTH = BALL_RADIUS * 0.3; // shallow recess matching playing area
const STORAGE_FILLET = 0.5;

function buildBoard(): THREE.Mesh {
  const evaluator = new Evaluator();

  // Main body: rounded box, top surface at y=0 in local space
  const bodyGeo = new RoundedBoxGeometry(BOARD_W, BOARD_THICKNESS, BOARD_D, 4, FILLET);
  let board = new Brush(bodyGeo, matBoard);
  board.position.set(0, -BOARD_THICKNESS / 2, 0);
  board.updateMatrixWorld();

  // Subtract ball recesses for 4x4 grid (level 0, cells 0-15)
  // Raise cutter sphere so only a shallow cup is carved
  const RECESS_DEPTH = BALL_RADIUS * 0.3;
  const recessGeo = new THREE.SphereGeometry(BALL_RADIUS, 24, 16);
  for (let i = 0; i < 16; i++) {
    const [gx, gy] = BOARD_POS[i];
    const cutter = new Brush(recessGeo);
    cutter.position.set(gx, BALL_RADIUS - RECESS_DEPTH, -gy);
    cutter.updateMatrixWorld();
    board = evaluator.evaluate(board, cutter, SUBTRACTION);
  }

  // Subtract storage recesses — rounded box protruding above surface
  // so the fillet creates a smooth lip transition
  const storageH = STORAGE_DEPTH + STORAGE_FILLET;
  const storageGeo = new RoundedBoxGeometry(STORAGE_W, storageH, STORAGE_D, 4, STORAGE_FILLET);
  for (const zCenter of [9, -9]) {
    const cutter = new Brush(storageGeo);
    cutter.position.set(0, -STORAGE_DEPTH / 2 + STORAGE_FILLET / 2, zCenter);
    cutter.updateMatrixWorld();
    board = evaluator.evaluate(board, cutter, SUBTRACTION);
  }

  const result = new THREE.Mesh(board.geometry, matBoard);
  // CSG geometry is in brush-A local space; the brush position places the board top at y=0.
  // Re-apply brush position + offset so board surface sits at y = BOARD_SURFACE_Y.
  result.position.set(0, -BOARD_THICKNESS / 2 + BOARD_SURFACE_Y, 0);
  result.castShadow = true;
  result.receiveShadow = true;
  return result;
}

const boardMesh = buildBoard();
scene.add(boardMesh);

// Ghost ball
const ghost = new THREE.Mesh(sphereGeo, matGhost);
ghost.visible = false; scene.add(ghost);

// ── Ball management ────────────────────────────────────────────────────
interface BallInfo { mesh: THREE.Mesh; player: number; }
const balls: Map<number, BallInfo> = new Map();
let nextBallId = 0;

// Note: Three.js uses Y-up. Our game uses Z-up. Convert: game(x,y,z) → three(x,z,-y)
function g2t(gx: number, gy: number, gz: number): THREE.Vector3 {
  return new THREE.Vector3(gx, gz, -gy);
}

function spawnBall(gpos: [number, number, number], player: number): number {
  const mesh = new THREE.Mesh(sphereGeo, player === 0 ? matLight : matDark);
  const p = g2t(...gpos);
  mesh.position.copy(p); mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
  scene.add(mesh);
  const id = nextBallId++;
  balls.set(id, { mesh, player });
  return id;
}

// ── Reserves & board slots (visual) ────────────────────────────────────
let reserveP0: number[] = [];
let reserveP1: number[] = [];
let boardSlots: (number | null)[] = new Array(NUM_CELLS).fill(null);

function initBalls() {
  reserveP0 = RESERVE_P0.map(p => spawnBall(p, 0));
  reserveP1 = RESERVE_P1.map(p => spawnBall(p, 1));
}
initBalls();

// ── Animation system ───────────────────────────────────────────────────
interface Anim { mesh: THREE.Mesh; start: THREE.Vector3; mid: THREE.Vector3; end: THREE.Vector3; t: number; dur: number; resolve: () => void; }
const anims: Anim[] = [];

function animateBall(id: number, target: [number, number, number], dur = 0.8): Promise<void> {
  const b = balls.get(id)!;
  const start = b.mesh.position.clone();
  const end = g2t(...target);
  const mid = new THREE.Vector3((start.x + end.x) / 2, Math.max(start.y, end.y) + 4, (start.z + end.z) / 2);
  return new Promise(resolve => { anims.push({ mesh: b.mesh, start, mid, end, t: 0, dur, resolve }); });
}

function updateAnims(dt: number) {
  for (let i = anims.length - 1; i >= 0; i--) {
    const a = anims[i];
    a.t = Math.min(a.t + dt / a.dur, 1);
    const t = a.t, ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    if (ease < 0.5) {
      const s = ease * 2;
      a.mesh.position.lerpVectors(a.start, a.mid, s);
    } else {
      const s = (ease - 0.5) * 2;
      a.mesh.position.lerpVectors(a.mid, a.end, s);
    }
    if (a.t >= 1) { a.mesh.position.copy(a.end); anims.splice(i, 1); a.resolve(); }
  }
}

// ── Raycasting (mouse → ground plane → nearest valid cell) ─────────────
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -BOARD_SURFACE_Y); // board surface at y=BALL_RADIUS
let hoveredCell: number | null = null;

function updateHover(event: MouseEvent) {
  if (!awaitingHuman || animating) { ghost.visible = false; hoveredCell = null; return; }
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  const hit = new THREE.Vector3();
  raycaster.ray.intersectPlane(groundPlane, hit);
  if (!hit) { ghost.visible = false; hoveredCell = null; return; }

  // hit is in Three.js coords (x, y=0, z). Convert back to game coords: gx=hit.x, gy=-hit.z
  const gx = hit.x, gy = -hit.z;
  const valid = getValidCells();
  let best: number | null = null, bestDist = 1.8;
  for (const idx of valid) {
    const [bx, by] = BOARD_POS[idx];
    const d = Math.hypot(bx - gx, by - gy);
    if (d < bestDist) { bestDist = d; best = idx; }
  }
  if (best !== null) {
    const [bx, by, bz] = BOARD_POS[best];
    ghost.position.copy(g2t(bx, by, bz));
    ghost.visible = true;
    ghost.material.opacity = 0.25 + 0.08 * Math.sin(performance.now() * 0.003);
    hoveredCell = best;
  } else {
    ghost.visible = false; hoveredCell = null;
  }
}

function getValidCells(): Set<number> {
  const g = game, valid = new Set<number>();
  if (g.phase === 'place') {
    const actions = g.legalPlaceActions();
    for (const a of actions) {
      if (a < 30) valid.add(a);
      else { const code = a - 30; valid.add(Math.floor(code / 30)); if (awaitingRaiseDst && raiseSrc === Math.floor(code / 30)) valid.add(code % 30); }
    }
    const pv = g.playerVal(humanPlayer);
    for (let i = 0; i < NUM_CELLS; i++) if (g.board[i] === pv && g.isUncovered(i)) valid.add(i);
  } else {
    for (const a of g.legalTakeBackActions()) if (a > 0) valid.add(a - 1);
  }
  return valid;
}

renderer.domElement.addEventListener('mousemove', updateHover);
renderer.domElement.addEventListener('click', onClick);

// ── Game state ─────────────────────────────────────────────────────────
const game = new PylosGame();
let humanPlayer = 0;
let computerPlayer = 1;
let awaitingHuman = false;
let animating = false;
let awaitingRaiseDst = false;
let raiseSrc = -1;
let computerTimeout: number | null = null;

interface VisSnapshot {
  boardSlots: (number | null)[];
  reserveP0: number[];
  reserveP1: number[];
  ballPositions: Map<number, [number, number, number]>;
  moveLog: string[];
}

const history: { game: GameSnapshot; vis: VisSnapshot }[] = [];
const redoStack: { game: GameSnapshot; vis: VisSnapshot }[] = [];
const moveLog: string[] = [];

function saveSnapshot() {
  const bp = new Map<number, [number, number, number]>();
  for (const [id, b] of balls) bp.set(id, [b.mesh.position.x, b.mesh.position.y, b.mesh.position.z]);
  history.push({ game: game.snapshot(), vis: { boardSlots: [...boardSlots], reserveP0: [...reserveP0], reserveP1: [...reserveP1], ballPositions: bp, moveLog: [...moveLog] } });
  redoStack.length = 0;
}

async function restoreSnapshot(snap: { game: GameSnapshot; vis: VisSnapshot }, animate: boolean) {
  game.restore(snap.game);
  boardSlots = [...snap.vis.boardSlots];
  reserveP0 = [...snap.vis.reserveP0];
  reserveP1 = [...snap.vis.reserveP1];
  moveLog.length = 0; moveLog.push(...snap.vis.moveLog);
  refreshLog();

  const promises: Promise<void>[] = [];
  for (const [id, pos] of snap.vis.ballPositions) {
    const b = balls.get(id)!;
    const cur: [number, number, number] = [b.mesh.position.x, b.mesh.position.y, b.mesh.position.z];
    if (animate && (Math.abs(cur[0] - pos[0]) > 0.01 || Math.abs(cur[1] - pos[1]) > 0.01 || Math.abs(cur[2] - pos[2]) > 0.01)) {
      // Convert Three.js pos back to game coords for animateBall: gx=x, gy=-z, gz=y
      promises.push(animateBallRaw(id, new THREE.Vector3(pos[0], pos[1], pos[2]), 0.5));
    } else {
      b.mesh.position.set(pos[0], pos[1], pos[2]);
    }
  }
  if (promises.length) { animating = true; await Promise.all(promises); animating = false; }
}

function animateBallRaw(id: number, target: THREE.Vector3, dur: number): Promise<void> {
  const b = balls.get(id)!;
  const start = b.mesh.position.clone();
  const mid = new THREE.Vector3((start.x + target.x) / 2, Math.max(start.y, target.y) + 4, (start.z + target.z) / 2);
  return new Promise(resolve => { anims.push({ mesh: b.mesh, start, mid, end: target, t: 0, dur, resolve }); });
}

// ── HUD ────────────────────────────────────────────────────────────────
const statusEl = document.getElementById('statusText')!;
const undoBtn = document.getElementById('undoBtn') as HTMLButtonElement;
const redoBtn = document.getElementById('redoBtn') as HTMLButtonElement;
const passBtn = document.getElementById('passBtn') as HTMLButtonElement;
const logEntries = document.getElementById('logEntries')!;
const logToggle = document.getElementById('logToggle')!;

function setStatus(msg: string) { statusEl.textContent = msg; }

function refreshLog() {
  logEntries.innerHTML = '';
  for (const entry of moveLog.slice(-20)) {
    const d = document.createElement('div'); d.textContent = entry; logEntries.appendChild(d);
  }
  logEntries.scrollTop = logEntries.scrollHeight;
}

let logOpen = true;
logToggle.addEventListener('click', () => {
  logOpen = !logOpen;
  logEntries.style.display = logOpen ? '' : 'none';
  logToggle.textContent = logOpen ? '[-]' : '[+]';
});

undoBtn.addEventListener('click', doUndo);
redoBtn.addEventListener('click', doRedo);
passBtn.addEventListener('click', () => { if (awaitingHuman && game.phase === 'take_back') executeAction(0); });

async function doUndo() {
  if (history.length <= 1 || animating) return;
  cancelComputer();
  const cur = history.pop()!;
  redoStack.push(cur);
  await restoreSnapshot(history[history.length - 1], true);
  beginTurn();
}

async function doRedo() {
  if (!redoStack.length || animating) return;
  cancelComputer();
  const snap = redoStack.pop()!;
  history.push(snap);
  await restoreSnapshot(snap, true);
  beginTurn();
}

function cancelComputer() {
  if (computerTimeout !== null) { clearTimeout(computerTimeout); computerTimeout = null; }
}

// ── Turn logic ─────────────────────────────────────────────────────────
function beginTurn() {
  animating = false;
  awaitingRaiseDst = false;
  if (game.done) {
    const w = game.winner === 0 ? 'Light' : 'Dark';
    setStatus(`Game over! ${w} wins!`);
    awaitingHuman = false; passBtn.style.display = 'none'; return;
  }
  const cp = game.currentPlayer;
  const pname = cp === 0 ? 'Light' : 'Dark';
  passBtn.style.display = game.phase === 'take_back' && cp === humanPlayer ? '' : 'none';

  if (cp === humanPlayer) {
    setStatus(game.phase === 'take_back' ? 'Your turn: take back (or pass)' : 'Your turn: click a position');
    awaitingHuman = true;
  } else {
    setStatus(`${pname} thinking...`);
    awaitingHuman = false;
    computerTimeout = window.setTimeout(computerMove, 3000);
  }
}

function computerMove() {
  computerTimeout = null;
  if (game.done) return;
  const actions = game.phase === 'place' ? game.legalPlaceActions() : game.legalTakeBackActions();
  if (!actions.length) return;
  executeAction(actions[Math.floor(Math.random() * actions.length)]);
}

// ── Human click ────────────────────────────────────────────────────────
function onClick(event: MouseEvent) {
  // Ignore clicks on HUD
  if ((event.target as HTMLElement) !== renderer.domElement) return;
  if (!awaitingHuman || animating || hoveredCell === null) return;
  handleHumanClick(hoveredCell);
}

function handleHumanClick(cellIdx: number) {
  const g = game;
  if (g.phase === 'place') {
    const actions = g.legalPlaceActions();
    if (actions.includes(cellIdx)) { executeAction(cellIdx); return; }
    const pv = g.playerVal(humanPlayer);
    if (g.board[cellIdx] === pv && g.isUncovered(cellIdx)) {
      raiseSrc = cellIdx; awaitingRaiseDst = true;
      setStatus(`Raise from ${cellIdx}: click destination`); return;
    }
    if (awaitingRaiseDst) {
      const action = 30 + raiseSrc * 30 + cellIdx;
      if (actions.includes(action)) { awaitingRaiseDst = false; executeAction(action); return; }
      setStatus('Invalid raise destination'); awaitingRaiseDst = false; return;
    }
  } else {
    const action = cellIdx + 1;
    if (g.legalTakeBackActions().includes(action)) { executeAction(action); return; }
  }
  setStatus('Invalid move');
}

// ── Execute action (animate + apply) ───────────────────────────────────
async function executeAction(action: number) {
  awaitingHuman = false; animating = true;
  const player = game.currentPlayer;
  const phase = game.phase;
  moveLog.push(describeAction(action, phase, player));
  refreshLog();

  if (phase === 'place') {
    if (action < 30) {
      const reserve = player === 0 ? reserveP0 : reserveP1;
      const bid = reserve.pop()!;
      boardSlots[action] = bid;
      await animateBall(bid, BOARD_POS[action]);
      game.applyPlace(action);
    } else {
      const code = action - 30, src = Math.floor(code / 30), dst = code % 30;
      const bid = boardSlots[src]!;
      boardSlots[src] = null; boardSlots[dst] = bid;
      game.applyPlace(action);
      await animateBall(bid, BOARD_POS[dst]);
    }
  } else {
    if (action === 0) {
      game.applyTakeBack(action);
    } else {
      const pos = action - 1, bid = boardSlots[pos]!;
      boardSlots[pos] = null;
      const reserve = player === 0 ? reserveP0 : reserveP1;
      const rpos = player === 0 ? RESERVE_P0 : RESERVE_P1;
      reserve.push(bid);
      const idx = Math.min(reserve.length - 1, rpos.length - 1);
      game.applyTakeBack(action);
      await animateBall(bid, rpos[idx]);
    }
  }
  saveSnapshot();
  animating = false;
  beginTurn();
}

// ── Setup screen ───────────────────────────────────────────────────────
const setupEl = document.getElementById('setup')!;
const pickLightBtn = document.getElementById('pickLight')!;
const pickDarkBtn = document.getElementById('pickDark')!;
const startBtn = document.getElementById('startBtn')!;

pickLightBtn.addEventListener('click', () => { humanPlayer = 0; computerPlayer = 1; pickLightBtn.classList.add('selected'); pickDarkBtn.classList.remove('selected'); });
pickDarkBtn.addEventListener('click', () => { humanPlayer = 1; computerPlayer = 0; pickDarkBtn.classList.add('selected'); pickLightBtn.classList.remove('selected'); });

startBtn.addEventListener('click', () => {
  setupEl.style.display = 'none';
  document.getElementById('gamePanel')!.style.display = '';
  document.getElementById('logPanel')!.style.display = '';
  controls.enabled = true;

  // Fly-in animation
  const startPos = camera.position.clone();
  const endPos = new THREE.Vector3(18, 18, 14);
  const dur = 2000, t0 = performance.now();
  function flyIn() {
    const t = Math.min((performance.now() - t0) / dur, 1);
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    camera.position.lerpVectors(startPos, endPos, ease);
    controls.update();
    if (t < 1) requestAnimationFrame(flyIn);
    else { saveSnapshot(); beginTurn(); }
  }
  flyIn();
});

// ── Render loop ────────────────────────────────────────────────────────
let lastTime = performance.now();
function animate() {
  requestAnimationFrame(animate);
  const now = performance.now(), dt = (now - lastTime) / 1000;
  lastTime = now;
  updateAnims(dt);
  controls.update();
  renderer.render(scene, camera);
}
animate();
