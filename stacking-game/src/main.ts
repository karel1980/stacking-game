import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';
import {
  PylosGame, GameSnapshot, BOARD_POS, reservePositions, NUM_CELLS,
  cellLevel, SUPPORT_MAP, RESTING_ON, describeAction, Phase,
} from './game';
import { initAI, getAIAction } from './ai';

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
): { color: THREE.CanvasTexture; roughness: THREE.CanvasTexture } {
  const colorData = new Uint8ClampedArray(size * size * 4);
  const roughData = new Uint8ClampedArray(size * size * 4);

  // Precompute grain offsets — slow drift that tiles seamlessly
  // Each grain band has a fixed Y position + gentle per-X offset
  const bandY: number[] = [];
  const bandWidth: number[] = [];
  const bandShade: number[] = [];
  const bandStrength: number[] = [];
  let by = Math.random() * 10;
  while (by < size) {
    bandY.push(by);
    const isAccent = Math.random() < 0.15;
    bandWidth.push(isAccent ? 10 + Math.random() * 18 : 2 + Math.random() * 8);
    bandShade.push(isAccent ? 0.4 + Math.random() * 0.3 : 0.6 + Math.random() * 0.4);
    bandStrength.push(isAccent ? 0.4 + Math.random() * 0.15 : 0.15 + Math.random() * 0.25);
    by += 8 + Math.random() * 30;
  }
  const NUM_BANDS = bandY.length;

  // Low-frequency tileable noise for subtle color variation
  // Use a few sine components that tile over `size`
  const freqs = [1, 2, 3, 5, 7];
  const phasesX = freqs.map(() => Math.random() * Math.PI * 2);
  const phasesY = freqs.map(() => Math.random() * Math.PI * 2);

  function tileNoise(x: number, y: number): number {
    let v = 0;
    for (let i = 0; i < freqs.length; i++) {
      const f = freqs[i] * Math.PI * 2 / size;
      v += Math.sin(x * f + phasesX[i]) * Math.cos(y * f * 0.3 + phasesY[i]);
    }
    return v / freqs.length; // -1..1
  }

  // Grain drift: very gentle tileable horizontal wobble
  const driftFreqs = [1, 2, 4];
  const driftPhases = driftFreqs.map(() => Math.random() * Math.PI * 2);
  const driftAmps = [3, 1.5, 0.5];
  function grainDrift(x: number): number {
    let d = 0;
    for (let i = 0; i < driftFreqs.length; i++) {
      d += driftAmps[i] * Math.sin(x * driftFreqs[i] * Math.PI * 2 / size + driftPhases[i]);
    }
    return d;
  }

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const idx = (py * size + px) * 4;
      const drift = grainDrift(px);

      // Base color with subtle variation
      const nv = tileNoise(px, py);
      let r = baseR + nv * 10;
      let g = baseG + nv * 8;
      let b = baseB + nv * 6;
      let rough = 140;

      // Grain: darken pixels near band centers
      const y = py;
      for (let i = 0; i < NUM_BANDS; i++) {
        const by = bandY[i];
        // Distance to band center, wrapping for seamless tiling
        let dy = Math.abs(((y + drift - by) % size + size) % size);
        if (dy > size / 2) dy = size - dy;
        const hw = bandWidth[i] / 2;
        if (dy < hw) {
          const t = 1 - dy / hw;
          const strength = t * t * bandStrength[i];
          const s = bandShade[i];
          r = r * (1 - strength) + grainR * s * strength;
          g = g * (1 - strength) + grainG * s * strength;
          b = b * (1 - strength) + grainB * s * strength;
          rough += t * 15; // grain is slightly rougher
        }
      }

      // Fine grain noise — very subtle, high frequency
      const fine = Math.sin(py * 0.8) * Math.sin(py * 2.1 + px * 0.01) * 4;
      r += fine; g += fine * 0.8; b += fine * 0.6;

      colorData[idx] = Math.max(0, Math.min(255, r));
      colorData[idx + 1] = Math.max(0, Math.min(255, g));
      colorData[idx + 2] = Math.max(0, Math.min(255, b));
      colorData[idx + 3] = 255;

      roughData[idx] = roughData[idx + 1] = roughData[idx + 2] = Math.max(0, Math.min(255, rough));
      roughData[idx + 3] = 255;
    }
  }

  function toTexture(data: Uint8ClampedArray): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    const ctx2 = c.getContext('2d')!;
    const img = ctx2.createImageData(size, size);
    img.data.set(data);
    ctx2.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  return { color: toTexture(colorData), roughness: toTexture(roughData) };
}

// Light wood: maple/birch tones
const lightWood = makeWoodTexture(180, 155, 120, 120, 90, 55);
const BALL_TEX_SCALE = (2 * Math.PI * BALL_RADIUS) / (18 / 2); // match board texel density
lightWood.color.repeat.set(BALL_TEX_SCALE, BALL_TEX_SCALE);
lightWood.roughness.repeat.set(BALL_TEX_SCALE, BALL_TEX_SCALE);
const matLight = new THREE.MeshStandardMaterial({ map: lightWood.color, roughnessMap: lightWood.roughness, roughness: 0.75, metalness: 0 });

// Dark wood: walnut tones
const darkWood = makeWoodTexture(70, 38, 22, 35, 15, 5);
darkWood.color.repeat.set(BALL_TEX_SCALE, BALL_TEX_SCALE);
darkWood.roughness.repeat.set(BALL_TEX_SCALE, BALL_TEX_SCALE);
const matDark = new THREE.MeshStandardMaterial({ map: darkWood.color, roughnessMap: darkWood.roughness, roughness: 0.7, metalness: 0 });
const matGhost = new THREE.MeshStandardMaterial({ color: 0xaaccff, roughness: 0.1, transparent: true, opacity: 0.3, depthWrite: false });

// ── Board material ─────────────────────────────────────────────────────
const boardWood = makeWoodTexture(160, 120, 75, 100, 65, 30);
boardWood.color.repeat.set(2, 2);
boardWood.roughness.repeat.set(2, 2);
boardWood.color.rotation = Math.PI / 2;
boardWood.roughness.rotation = Math.PI / 2;
boardWood.color.center.set(0.5, 0.5);
boardWood.roughness.center.set(0.5, 0.5);
const matBoard = new THREE.MeshStandardMaterial({ map: boardWood.color, roughnessMap: boardWood.roughness, roughness: 0.85, metalness: 0 });

// ── Geometry ───────────────────────────────────────────────────────────
// Icosahedron sphere with position-based UVs — no seam
function makeSeamlessSphere(radius: number, detail: number): THREE.BufferGeometry {
  const geo = new THREE.IcosahedronGeometry(radius, detail);
  const pos = geo.attributes.position;
  const uvs = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    // Project position onto sphere surface for UV (cube-style projection)
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    uvs[i * 2] = 0.5 + Math.atan2(z, x) / (Math.PI * 2);
    uvs[i * 2 + 1] = 0.5 + Math.asin(Math.max(-1, Math.min(1, y / radius))) / Math.PI;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  return geo;
}
const sphereGeo = makeSeamlessSphere(BALL_RADIUS, 4);

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

  // Reproject UVs from top-down so recesses share the board's texture
  const geo = result.geometry;
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, pos.getX(i) / BOARD_W + 0.5, pos.getZ(i) / BOARD_D + 0.5);
  }
  uv.needsUpdate = true;

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
    const pv = g.playerVal(g.currentPlayer);
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
let isHuman: [boolean, boolean] = [true, false]; // [light, dark]
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
const pauseBtn = document.getElementById('pauseBtn') as HTMLButtonElement;
let paused = false;
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
pauseBtn.addEventListener('click', () => {
  paused = !paused;
  pauseBtn.textContent = paused ? 'Resume' : 'Pause';
  if (paused) { cancelComputer(); setStatus('Paused'); }
  else beginTurn();
});

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
  if (paused) { setStatus('Paused'); return; }
  if (game.done) {
    const w = game.winner;
    const wname = w === 0 ? 'Light' : 'Dark';
    if (isHuman[0] === isHuman[1]) {
      // PvP or CvC — just say who won
      setStatus(`${wname} wins!`);
      showVictory(true, `${wname} wins!`);
    } else {
      const humanWon = isHuman[w];
      setStatus(humanWon ? 'You win!' : 'You lose!');
      showVictory(humanWon);
    }
    awaitingHuman = false; passBtn.style.display = 'none';
    return;
  }
  const cp = game.currentPlayer;
  const pname = cp === 0 ? 'Light' : 'Dark';
  passBtn.style.display = game.phase === 'take_back' && isHuman[cp] ? '' : 'none';

  if (isHuman[cp]) {
    setStatus(game.phase === 'take_back' ? `${pname}: take back (or pass)` : `${pname}: click a position`);
    awaitingHuman = true;
  } else {
    setStatus(`${pname} thinking...`);
    awaitingHuman = false;
    computerTimeout = window.setTimeout(computerMove, 500);
  }
}

function computerMove() {
  computerTimeout = null;
  if (game.done) return;
  getAIAction(game).then(action => {
    if (!game.done) executeAction(action);
  });
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
    if (awaitingRaiseDst) {
      const action = 30 + raiseSrc * 30 + cellIdx;
      if (actions.includes(action)) { awaitingRaiseDst = false; executeAction(action); return; }
      setStatus('Invalid raise destination'); awaitingRaiseDst = false; return;
    }
    if (actions.includes(cellIdx)) { executeAction(cellIdx); return; }
    const pv = g.playerVal(g.currentPlayer);
    if (g.board[cellIdx] === pv && g.isUncovered(cellIdx)) {
      raiseSrc = cellIdx; awaitingRaiseDst = true;
      setStatus(`Raise from ${cellIdx}: click destination`); return;
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
const startBtn = document.getElementById('startBtn')!;
const resumeBtn = document.getElementById('resumeBtn')!;
const menuBtn = document.getElementById('menuBtn') as HTMLButtonElement;
let gameStarted = false;

// Toggle group logic
for (const groupId of ['lightToggle', 'darkToggle']) {
  const group = document.getElementById(groupId)!;
  for (const btn of group.querySelectorAll('button')) {
    btn.addEventListener('click', () => {
      group.querySelector('.selected')?.classList.remove('selected');
      btn.classList.add('selected');
    });
  }
}

// Load AI model lazily — only when needed
let aiReady: Promise<void> | null = null;
function ensureAI() {
  if (!aiReady) aiReady = initAI();
  return aiReady;
}

startBtn.addEventListener('click', async () => {
  // Read config
  const lightVal = document.querySelector('#lightToggle .selected')!.getAttribute('data-val');
  const darkVal = document.querySelector('#darkToggle .selected')!.getAttribute('data-val');
  isHuman = [lightVal === 'human', darkVal === 'human'];

  // Only wait for AI if at least one side is AI
  if (!isHuman[0] || !isHuman[1]) {
    startBtn.textContent = 'Loading AI…';
    startBtn.setAttribute('disabled', '');
    await ensureAI();
    startBtn.textContent = 'START';
    startBtn.removeAttribute('disabled');
  }

  const firstGame = !gameStarted;

  // Reset game if one is already running
  if (gameStarted) {
    victoryOverlay.classList.remove('show');
    game.reset();
    for (const [, b] of balls) scene.remove(b.mesh);
    balls.clear(); nextBallId = 0;
    boardSlots.fill(null);
    moveLog.length = 0; refreshLog();
    initBalls();
  }

  gameStarted = true;
  paused = false;
  pauseBtn.textContent = 'Pause';
  showGame();
  pauseBtn.style.display = (!isHuman[0] || !isHuman[1]) ? '' : 'none';
  controls.enabled = true;

  if (firstGame) {
    // First time: fly-in animation
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
  } else {
    saveSnapshot(); beginTurn();
  }
});

function showGame() {
  setupEl.style.display = 'none';
  document.getElementById('gamePanel')!.style.display = '';
  document.getElementById('logPanel')!.style.display = '';
}

function showMenu() {
  cancelComputer();
  setupEl.style.display = '';
  resumeBtn.style.display = gameStarted && !game.done ? '' : 'none';
}

menuBtn.addEventListener('click', showMenu);

resumeBtn.addEventListener('click', () => {
  showGame();
  beginTurn();
});

// ── Victory overlay ────────────────────────────────────────────────────
const victoryOverlay = document.getElementById('victoryOverlay')!;
const victoryTitle = document.getElementById('victoryTitle')!;
const victorySubtitle = document.getElementById('victorySubtitle')!;

function showVictory(humanWon: boolean, title?: string) {
  victoryTitle.textContent = title ?? (humanWon ? 'You Win!' : 'You Lose!');
  victoryTitle.className = humanWon ? 'win' : 'lose';
  victorySubtitle.textContent = humanWon ? 'Congratulations!' : 'Better luck next time';
  setTimeout(() => victoryOverlay.classList.add('show'), 600);
}

document.getElementById('playAgainBtn')!.addEventListener('click', () => {
  victoryOverlay.classList.remove('show');
  game.reset();
  // Clear board visuals
  for (const [, b] of balls) scene.remove(b.mesh);
  balls.clear(); nextBallId = 0;
  boardSlots.fill(null);
  moveLog.length = 0; refreshLog();
  initBalls();
  saveSnapshot();
  beginTurn();
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
