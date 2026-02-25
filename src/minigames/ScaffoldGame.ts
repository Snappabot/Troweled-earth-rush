/**
 * ScaffoldGame — 3D side-scrolling platformer (Three.js)
 * Mario-style: double jump, pole climbing, scaffold bar swings
 * Player: Jarrad (CrewCharacter) climbing a Melbourne terrace scaffold
 */

import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from '../entities/CrewCharacter';
import type { MiniGameResult } from './MiniGameManager';

// ── World constants ───────────────────────────────────────────────────────────
const FLOOR_H   = 5;      // vertical distance between scaffold floors
const N_FLOORS  = 8;      // number of scaffold floors above ground
const GOAL_Y    = N_FLOORS * FLOOR_H;
const POLE_XS   = [-8, 8] as const;  // outer scaffold poles

// ── Physics ───────────────────────────────────────────────────────────────────
const GRAVITY   = 20;     // units/s² — reduced so jumps actually reach platforms
const WALK_SPD  = 5.5;    // units/s horizontal
const JUMP1     = 14;     // first jump — peak ≈ 4.9 units (clears FLOOR_H=5 with platform offset)
const JUMP2     = 11;     // double jump floater
const CLIMB_SPD = 4;      // units/s on pole
const MAX_FALL  = -30;    // terminal velocity

// Player AABB half-extents
const PW = 0.4;   // half-width
const PH = 2.1;   // full height (feet to top)

interface Plat {
  x1: number; x2: number; y: number;
  mesh: THREE.Mesh; type: 'normal' | 'moving' | 'crumble' | 'win';
  moveDir?: number; crumbleTimer?: number; crumbled?: boolean;
}
interface SwingBar { anchorX: number; anchorY: number; radius: number; mesh: THREE.Mesh; }
interface ClimbPole { x: number; y1: number; y2: number; }
interface FallingGlob { x: number; y: number; vx: number; vy: number; r: number; mesh: THREE.Mesh; shadowRing: THREE.Mesh; dead: boolean; }

export class ScaffoldGame {
  private overlay!: HTMLDivElement;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private rafId = 0;
  private lastTs = 0;

  // Player state
  private px = 0; private py = 0;       // position (feet centre)
  private vx = 0; private vy = 0;       // velocity
  private onGround = false;
  private jumpsLeft = 2;

  // Climbing
  private climbPole: ClimbPole | null = null;

  // Swinging (pendulum)
  private swingBar: SwingBar | null = null;
  private swingAngle = 0;   // radians from vertical
  private swingOmega = 0;   // angular velocity rad/s

  // Character
  private char!: CrewCharacter;
  private charGroup!: THREE.Group;
  private facingRight = true;

  // Level
  private platforms: Plat[] = [];
  private poles: ClimbPole[] = [];
  private swingBars: SwingBar[] = [];

  // Connie at top — throws falling globs
  private globs: FallingGlob[] = [];
  private globSpawnTimer = 3.5;          // first throw at 3.5s
  private connTopX = 0;
  private connTopDir = 1;
  private readonly CONN_TOP_SPD = 2.8;  // units/s
  private connTopMesh: THREE.Group | null = null;
  private warnT = 0;                     // countdown before throw
  private warningEl: HTMLDivElement | null = null;
  private throwCount = 0;                // tracks bionic burst trigger
  private bionichipActive = false;       // bionic burst mode flag
  private bionichipBurstLeft = 0;        // globs left to fire in burst
  private invincT = 0;                   // invincibility frames after hit (seconds)

  // Connie's bionic personality taunt lines
  private readonly CONNIE_TAUNTS = [
    '🪣 Watch the silicone!',
    '⚡ Metal hip, no miss!',
    '🦾 Bionic arm activated!',
    '💀 Duck, Jarrad!',
    '🪣 Plasterin\' from above!',
    '😈 Try me, hardhat!',
  ];
  private readonly BIONIC_WARNING = '⚡⚡ BIONIC BURST!!';

  // HUD
  private heartsEl!: HTMLDivElement;
  private timerEl!: HTMLDivElement;

  // Game state
  private lives = 3;
  private timer = 120;
  private gameOver = false;
  private delivered = false;

  // Input
  private keys = { left: false, right: false, up: false, down: false };
  private jumpTap = false; // single-frame edge: true on tap

  private onCompleteFn!: (r: MiniGameResult) => void;

  // ── Entry point ────────────────────────────────────────────────────────────
  start(onComplete: (r: MiniGameResult) => void): void {
    this.onCompleteFn = onComplete;
    this._createOverlay();
    this._createScene();
    this._buildBackground();
    this._buildLevel();
    this._buildHUD();
    this._buildControls();
    this.px = 0; this.py = 0.5;
    this.lastTs = performance.now();
    this.rafId = requestAnimationFrame(t => this._loop(t));
  }

  // ── Overlay & renderer ─────────────────────────────────────────────────────
  private _createOverlay(): void {
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `;
    document.body.appendChild(this.overlay);
  }

  private _createScene(): void {
    const W = window.innerWidth, H = window.innerHeight;

    // Canvas renderer
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;`;
    this.overlay.appendChild(canvas);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.setSize(W, H);
    this.renderer.shadowMap.enabled = true;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.018);

    // Camera — side-scroll perspective, slight 3/4 angle
    this.camera = new THREE.PerspectiveCamera(44, W / H, 0.1, 200);
    this.camera.position.set(0, 12, 26);
    this.camera.lookAt(0, 10, 0);

    // Lighting
    const ambient = new THREE.AmbientLight(0xFFFFFF, 0.6);
    this.scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xFFF8E8, 1.1);
    sun.position.set(8, 30, 15);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 120;
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 55;
    sun.shadow.camera.bottom = -5;
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0xC0D8FF, 0.4);
    fill.position.set(-5, 10, 5);
    this.scene.add(fill);

    // Player (Jarrad — hard hat, hi-vis)
    this.char = new CrewCharacter(CREW_CONFIGS['Jarrad']);
    this.charGroup = this.char.group;
    this.charGroup.scale.setScalar(1.0);
    this.scene.add(this.charGroup);

    // Connie at top — throws plaster globs down
    const connieCrew = new CrewCharacter(CREW_CONFIGS['Connie']);
    this.connTopMesh = connieCrew.group;
    this.connTopMesh.scale.setScalar(0.85);
    this.connTopMesh.position.set(0, GOAL_Y + 0.5, 0.3);
    this.scene.add(this.connTopMesh);
    // Bionic glow light (attached to Connie, pulsed when in burst mode)
    const bionichipLight = new THREE.PointLight(0x8844FF, 0, 6);
    bionichipLight.name = 'bionichipLight';
    this.connTopMesh.add(bionichipLight);
  }

  // ── Background city / building facade ─────────────────────────────────────
  private _buildBackground(): void {
    const add = (geo: THREE.BufferGeometry, col: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: col }));
      m.position.set(x, y, z); m.receiveShadow = true; this.scene.add(m);
      return m;
    };

    // Sky gradient plane
    add(new THREE.PlaneGeometry(80, 60), 0xB0D8F0, 0, 22, -12);

    // Background city silhouette
    const bgBuildings = [
      [-14, 10], [-10, 14], [-6, 8], [8, 16], [12, 11], [16, 9],
    ];
    for (const [bx, bh] of bgBuildings) {
      add(new THREE.BoxGeometry(4, bh, 1), 0x6A7090, bx, bh/2 - 1, -9);
    }

    // ── Main building facade (the one being plastered) ──────────────────────
    const totalH = GOAL_Y + 5;
    add(new THREE.BoxGeometry(16, totalH, 0.6), 0xE8DCC0, 0, totalH/2 - 1, -1.5);

    // Cornice (top of facade)
    add(new THREE.BoxGeometry(16.6, 0.5, 0.9), 0xD4C8A8, 0, totalH - 1, -1.4);

    // Sill / base strip
    add(new THREE.BoxGeometry(16, 0.4, 0.7), 0xD0C4A0, 0, 0, -1.4);

    // Windows (4 across × per floor)
    for (let fl = 0; fl < N_FLOORS; fl++) {
      const wy = fl * FLOOR_H + 2.0;
      for (const wx of [-5.5, -1.8, 1.8, 5.5]) {
        add(new THREE.BoxGeometry(2.0, 2.8, 0.2), 0x334466, wx, wy, -1.1);
        add(new THREE.BoxGeometry(1.8, 0.15, 0.25), 0xBBB090, wx, wy + 1.5, -1.05);
      }
    }

    // Ground
    add(new THREE.BoxGeometry(24, 0.5, 5), 0x3A3832, 0, -0.25, 0.5);

    // Plaster trough (death zone visually)
    add(new THREE.BoxGeometry(14, 0.5, 1.2), 0xC8B888, 0, 0.25, 1.0);
    add(new THREE.BoxGeometry(14, 1.2, 0.15), 0xB8A878, 0, 0.6, 1.57);
    add(new THREE.BoxGeometry(0.15, 1.2, 1.2), 0xB8A878, -7, 0.6, 1.0);
    add(new THREE.BoxGeometry(0.15, 1.2, 1.2), 0xB8A878, 7, 0.6, 1.0);
  }

  // ── Level geometry ─────────────────────────────────────────────────────────
  private _buildLevel(): void {
    const PX = 8; // outer pole x (matches POLE_XS)

    // ── Scaffold vertical poles ──────────────────────────────────────────────
    for (const px of POLE_XS) {
      this._addScaffoldPole(px, 0, GOAL_Y + 3);
      this.poles.push({ x: px, y1: 0, y2: GOAL_Y + 3 });
    }
    // Inner climbable poles at ±3.5 — key for escaping ground floor
    for (const ipx of [-3.5, 3.5]) {
      this._addScaffoldPole(ipx, 0, GOAL_Y + 3);
      this.poles.push({ x: ipx, y1: 0, y2: GOAL_Y + 3 });
    }
    // Central visual poles (not climbable, just structure)
    this._addScaffoldPole(-1, 0, GOAL_Y + 3);
    this._addScaffoldPole( 1, 0, GOAL_Y + 3);

    // ── Scaffold horizontal ledger tubes every floor ─────────────────────────
    for (let fl = 0; fl <= N_FLOORS; fl++) {
      const ty = fl * FLOOR_H;
      this._addTube(-PX, PX, ty, 0x9999AA, 0.07);
    }

    // ── Diagonal cross-bracing (visual only) ────────────────────────────────
    for (let fl = 0; fl < N_FLOORS; fl++) {
      const y0 = fl * FLOOR_H, y1 = (fl + 1) * FLOOR_H;
      this._addDiag(-PX, y0, PX, y1);
      this._addDiag(PX, y0, -PX, y1);
    }

    // ── Wooden plank platforms (HARD — fewer, smaller, bigger gaps) ──────────
    // Floor 0 — narrow starting pad (not wall-to-wall anymore)
    this._addPlat(-4.5, 4.5, 0, 'normal');

    // Floor 1 — two stubby pads with a big centre gap
    this._addPlat(-7.5, -2.5, FLOOR_H * 1, 'normal');
    this._addPlat(2.5, 7.5, FLOOR_H * 1, 'normal');

    // Floor 2 — crumble left, small normal right
    this._addPlat(-7.5, -2.0, FLOOR_H * 2, 'crumble');
    this._addPlat(3.5, 7.5, FLOOR_H * 2, 'normal');

    // Floor 3 — small outer pads + narrow moving centre
    this._addPlat(-7.5, -4.5, FLOOR_H * 3, 'normal');
    this._addPlat(-1.5, 1.5, FLOOR_H * 3, 'moving');
    this._addPlat(4.5, 7.5, FLOOR_H * 3, 'normal');

    // Floor 4 — only crumble left, normal on far right (big gap in middle)
    this._addPlat(-7.5, -3.5, FLOOR_H * 4, 'crumble');
    this._addPlat(4.0, 7.5, FLOOR_H * 4, 'normal');

    // Floor 5 — tiny pads, slight height variation
    this._addPlat(-7.5, -5.0, FLOOR_H * 5, 'normal');
    this._addPlat(-1.2, 1.2, FLOOR_H * 5 + 1.0, 'moving');  // raised + moving
    this._addPlat(5.0, 7.5, FLOOR_H * 5, 'crumble');

    // Floor 6 — only a moving platform, outer crumbles at edges
    this._addPlat(-7.5, -5.5, FLOOR_H * 6, 'crumble');
    this._addPlat(-2.5, 2.5, FLOOR_H * 6, 'moving');          // the only reliable path
    this._addPlat(5.5, 7.5, FLOOR_H * 6, 'crumble');

    // Floor 7 — nightmare: tiny crumble pads only, poles are the solution
    this._addPlat(-7.5, -5.0, FLOOR_H * 7, 'crumble');
    this._addPlat(5.0, 7.5, FLOOR_H * 7, 'crumble');

    // ── Swing bars (golden grab bars mid-floor) ───────────────────────────────
    this._addSwingBar(0, FLOOR_H * 1 + 2.5, 2.8);   // F1→2 bridge
    this._addSwingBar(0, FLOOR_H * 3 + 2.5, 2.8);   // F3→4
    this._addSwingBar(-4, FLOOR_H * 5 + 2.5, 2.2);  // F5→6 left
    this._addSwingBar( 4, FLOOR_H * 6 + 2.5, 2.2);  // F6→7 right

    // ── Delivery zone (win platform) ─────────────────────────────────────────
    this._addPlat(-7.5, 7.5, GOAL_Y, 'win');
    this._addSign(0, GOAL_Y + 1.8, '⭐ DELIVER HERE ⭐', 0xFF8800);

    // Buckets for atmosphere
    this._addBucket(-5.0, 0.8);
    this._addBucket(5.0, 0.8);
  }

  private _addScaffoldPole(x: number, y1: number, y2: number): void {
    const h = y2 - y1;
    const geo = new THREE.CylinderGeometry(0.07, 0.07, h, 8);
    const mat = new THREE.MeshLambertMaterial({ color: 0xA0A0B0 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y1 + h/2, 0.3);
    m.castShadow = true;
    this.scene.add(m);
    // Bolt clamps at each floor
    for (let cy = y1; cy <= y2; cy += FLOOR_H) {
      const cg = new THREE.SphereGeometry(0.12, 6, 5);
      const c = new THREE.Mesh(cg, mat);
      c.position.set(x, cy, 0.3); this.scene.add(c);
    }
  }

  private _addTube(x1: number, x2: number, y: number, col: number, r: number): void {
    const len = x2 - x1;
    const geo = new THREE.CylinderGeometry(r, r, len, 7);
    const mat = new THREE.MeshLambertMaterial({ color: col });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.z = Math.PI / 2;
    m.position.set((x1 + x2) / 2, y, 0.3);
    this.scene.add(m);
  }

  private _addDiag(x1: number, y1: number, x2: number, y2: number): void {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx*dx + dy*dy);
    const geo = new THREE.CylinderGeometry(0.04, 0.04, len, 6);
    const mat = new THREE.MeshLambertMaterial({ color: 0x8888A0 });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
    m.position.set((x1+x2)/2, (y1+y2)/2, 0.3);
    this.scene.add(m);
  }

  private _addPlat(x1: number, x2: number, y: number, type: Plat['type']): void {
    const w = x2 - x1;
    const col = { normal: 0x8B6210, moving: 0xD46010, crumble: 0x886622, win: 0xFFCC00 }[type];
    const geo = new THREE.BoxGeometry(w, 0.28, 0.8);
    const mat = new THREE.MeshLambertMaterial({ color: col });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((x1+x2)/2, y + 0.14, 0.3);
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);
    // Plank grain lines
    for (let gx = x1 + 0.6; gx < x2; gx += 0.9) {
      const lg = new THREE.BoxGeometry(0.06, 0.30, 0.82);
      const lm = new THREE.MeshLambertMaterial({ color: col - 0x111100 });
      const l = new THREE.Mesh(lg, lm);
      l.position.set(gx - (x1+x2)/2, 0, 0);
      mesh.add(l);
    }
    this.platforms.push({ x1, x2, y, mesh, type, moveDir: 1, crumbleTimer: 0, crumbled: false });
  }

  private _addSwingBar(anchorX: number, anchorY: number, radius: number): void {
    // Horizontal grab bar
    const geo = new THREE.CylinderGeometry(0.09, 0.09, 3, 8);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xFFAA00, emissive: 0x884400, emissiveIntensity: 0.5
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.z = Math.PI / 2;
    mesh.position.set(anchorX, anchorY, 0.5);
    this.scene.add(mesh);
    // Glow indicator
    const gGeo = new THREE.SphereGeometry(0.22, 8, 8);
    const gMat = new THREE.MeshBasicMaterial({ color: 0xFFEE00, transparent: true, opacity: 0.7 });
    const glow = new THREE.Mesh(gGeo, gMat);
    glow.position.set(anchorX, anchorY, 0.6);
    this.scene.add(glow);
    this.swingBars.push({ anchorX, anchorY, radius, mesh });
  }

  private _addSign(x: number, y: number, _text: string, col: number): void {
    const geo = new THREE.BoxGeometry(6, 0.8, 0.15);
    const mat = new THREE.MeshLambertMaterial({ color: col, emissive: col, emissiveIntensity: 0.3 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, 0.5);
    this.scene.add(m);
  }

  private _addBucket(x: number, y: number): void {
    const geo = new THREE.CylinderGeometry(0.25, 0.2, 0.5, 8);
    const mat = new THREE.MeshLambertMaterial({ color: 0xC1666B, emissive: 0x660011, emissiveIntensity: 0.3 });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, 0.5);
    this.scene.add(m);
  }

  // ── Falling plaster glob (thrown by Connie) ────────────────────────────────
  private _spawnGlob(): void {
    // Spawn just above the top of camera view so player always sees it coming
    const camTop = this.camera.position.y + 11;
    const spawnY = Math.min(camTop, GOAL_Y);
    const sx = this.connTopX + (Math.random() - 0.5) * 4;

    // Glob — big, bright, unmissable
    const geo = new THREE.SphereGeometry(0.85, 10, 10);
    const mat = new THREE.MeshLambertMaterial({
      color: 0xFF6622, emissive: 0xCC3300, emissiveIntensity: 0.9
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(sx, spawnY, 0.5);
    mesh.castShadow = true;
    this.scene.add(mesh);

    // Target shadow ring — pulsing red circle on the ground below
    const ringGeo = new THREE.RingGeometry(0.6, 1.1, 20);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xFF2200, transparent: true, opacity: 0.75, side: THREE.DoubleSide
    });
    const shadowRing = new THREE.Mesh(ringGeo, ringMat);
    shadowRing.rotation.x = -Math.PI / 2;
    shadowRing.position.set(sx, 0.3, 0.5);
    this.scene.add(shadowRing);

    this.globs.push({
      x: sx, y: spawnY,
      vx: (Math.random() - 0.5) * 3.5,
      vy: -4,   // already moving down fast — no arc
      r: 0.85,
      mesh,
      shadowRing,
      dead: false,
    });
  }

  // ── HUD ────────────────────────────────────────────────────────────────────
  private _buildHUD(): void {
    const hud = document.createElement('div');
    hud.style.cssText = `
      position:absolute; top:0; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 18px; font-family:system-ui,sans-serif; pointer-events:none;
    `;
    this.heartsEl = document.createElement('div');
    this.heartsEl.style.fontSize = '22px';
    this._updateHearts();

    const title = document.createElement('div');
    title.style.cssText = `
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:13px; font-weight:800; letter-spacing:1px;
    `;
    title.textContent = '🏗️ SCAFFOLD CLIMB';

    this.timerEl = document.createElement('div');
    this.timerEl.style.cssText = `
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:14px; font-weight:800; min-width:52px; text-align:center;
    `;

    hud.appendChild(this.heartsEl);
    hud.appendChild(title);
    hud.appendChild(this.timerEl);
    this.overlay.appendChild(hud);

    // Warning flash
    this.warningEl = document.createElement('div');
    this.warningEl.style.cssText = `
      position:absolute; top:58px; left:50%; transform:translateX(-50%);
      background:rgba(200,0,0,0.85); color:#fff; padding:5px 18px;
      border-radius:16px; font-size:14px; font-weight:900; letter-spacing:1px;
      z-index:110; display:none; pointer-events:none;
    `;
    this.warningEl.textContent = '🪣 Watch the silicone!';
    this.overlay.appendChild(this.warningEl);
  }

  private _updateHearts(): void {
    this.heartsEl.textContent = '❤️'.repeat(this.lives) + '🖤'.repeat(Math.max(0, 3 - this.lives));
  }

  // ── Controls ───────────────────────────────────────────────────────────────
  private _buildControls(): void {
    const ctrl = document.createElement('div');
    ctrl.style.cssText = `
      position:absolute; bottom:12px; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:flex-end;
      padding:0 20px 8px;
    `;

    // Left D-pad
    const dpad = document.createElement('div');
    dpad.style.cssText = `display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;`;

    const mk = (label: string, col: string, row: number, col2: number) => {
      const b = document.createElement('div');
      b.style.cssText = `
        grid-row:${row}; grid-column:${col2};
        background:${col}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `;
      b.textContent = label;
      return b;
    };

    const upBtn   = mk('▲', 'rgba(60,60,160,0.88)', 1, 2);
    const leftBtn = mk('◀', 'rgba(70,70,70,0.88)', 2, 1);
    const downBtn = mk('▼', 'rgba(60,60,160,0.88)', 2, 2);
    const rightBtn= mk('▶', 'rgba(70,70,70,0.88)', 2, 3);

    dpad.appendChild(upBtn); dpad.appendChild(leftBtn);
    dpad.appendChild(downBtn); dpad.appendChild(rightBtn);

    // Jump button (right)
    const jumpBtn = document.createElement('div');
    jumpBtn.style.cssText = `
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `;
    jumpBtn.textContent = 'JUMP';

    const hold = (el: HTMLElement, on: () => void, off: () => void) => {
      el.addEventListener('touchstart', e => { e.preventDefault(); on(); }, { passive: false });
      el.addEventListener('touchend',   e => { e.preventDefault(); off(); }, { passive: false });
      el.addEventListener('mousedown', on);
      el.addEventListener('mouseup', off);
    };

    hold(leftBtn,  () => this.keys.left  = true,  () => this.keys.left  = false);
    hold(rightBtn, () => this.keys.right = true,  () => this.keys.right = false);
    hold(upBtn,    () => this.keys.up    = true,  () => this.keys.up    = false);
    hold(downBtn,  () => this.keys.down  = true,  () => this.keys.down  = false);

    // Jump: edge on press
    const jumpDown = () => { this.jumpTap = true; };
    jumpBtn.addEventListener('touchstart', e => { e.preventDefault(); jumpDown(); }, { passive: false });
    jumpBtn.addEventListener('mousedown', jumpDown);

    // Keyboard support
    const keymap: Record<string, keyof typeof this.keys | 'jump'> = {
      ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
      KeyA: 'left', KeyD: 'right', KeyW: 'up', KeyS: 'down',
    };
    const kd = (e: KeyboardEvent) => {
      if (keymap[e.code]) {
        const k = keymap[e.code];
        if (k === 'jump') this.jumpTap = true;
        else this.keys[k] = true;
      }
      if (e.code === 'Space' || e.code === 'KeyZ') this.jumpTap = true;
    };
    const ku = (e: KeyboardEvent) => {
      const k = keymap[e.code];
      if (k && k !== 'jump') this.keys[k] = false;
    };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    this.overlay.addEventListener('remove', () => {
      window.removeEventListener('keydown', kd);
      window.removeEventListener('keyup', ku);
    });

    ctrl.appendChild(dpad);
    ctrl.appendChild(jumpBtn);
    this.overlay.appendChild(ctrl);
  }

  // ── Game loop ──────────────────────────────────────────────────────────────
  private _loop(ts: number): void {
    if (this.gameOver) return;
    this.rafId = requestAnimationFrame(t => this._loop(t));
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    this._update(dt);
    this.renderer.render(this.scene, this.camera);
    this.jumpTap = false; // consume jump edge
  }

  // ── Update ────────────────────────────────────────────────────────────────
  private _update(dt: number): void {
    this.timer = Math.max(0, this.timer - dt);
    this.timerEl.textContent = `⏱ ${Math.ceil(this.timer)}s`;
    if (this.timer <= 0 && !this.delivered) { this._end(false); return; }

    this.char.update(dt);

    // Update moving platforms
    for (const p of this.platforms) {
      if (p.type === 'moving') {
        p.x1 += 2.5 * (p.moveDir ?? 1) * dt;
        p.x2 += 2.5 * (p.moveDir ?? 1) * dt;
        p.mesh.position.x = (p.x1 + p.x2) / 2;
        if (p.x2 > 5.2 || p.x1 < -1.8) p.moveDir = -(p.moveDir ?? 1);
      }
      // Crumble on stand
      if (p.type === 'crumble' && !p.crumbled) {
        const standing = this.onGround &&
          this.px >= p.x1 - PW && this.px <= p.x2 + PW &&
          Math.abs(this.py - p.y) < 0.3;
        if (standing) {
          p.crumbleTimer = (p.crumbleTimer ?? 0) + dt;
          const shake = Math.sin(p.crumbleTimer * 40) * 0.06 * Math.min(1, p.crumbleTimer);
          p.mesh.position.z = 0.3 + shake;
          if (p.crumbleTimer > 1.2) {
            p.crumbled = true;
            p.mesh.visible = false;
          }
        } else {
          if ((p.crumbleTimer ?? 0) > 0 && !p.crumbled) p.crumbleTimer = 0;
        }
      }
    }

    // ── Connie top movement + glob throw ───────────────────────────────────
    this.connTopX += this.CONN_TOP_SPD * this.connTopDir * dt;
    if (this.connTopX > 6.5) { this.connTopX = 6.5; this.connTopDir = -1; }
    if (this.connTopX < -6.5) { this.connTopX = -6.5; this.connTopDir = 1; }
    if (this.connTopMesh) {
      this.connTopMesh.position.x = this.connTopX;
      this.connTopMesh.rotation.y = this.connTopDir > 0 ? -0.2 : Math.PI + 0.2;
      // Bionic hip glow during burst
      const bLight = this.connTopMesh.getObjectByName('bionichipLight') as THREE.PointLight | undefined;
      if (bLight) {
        bLight.intensity = this.bionichipActive ? 2.5 + Math.sin(performance.now() * 0.02) * 1.5 : 0;
      }
      // Move faster during bionic burst
      if (this.bionichipActive) {
        this.connTopX += this.CONN_TOP_SPD * 2.5 * this.connTopDir * dt;
      }
    }

    // Warning countdown before throw
    this.globSpawnTimer -= dt;
    if (this.globSpawnTimer <= 1.5 && this.warningEl) {
      this.warningEl.style.display = 'block';
    }
    if (this.globSpawnTimer <= 0) {
      this.throwCount++;
      const isBionic = this.throwCount % 4 === 0; // every 4th throw = bionic burst
      if (this.warningEl) {
        this.warningEl.style.display = 'none';
        this.warningEl.style.background = 'rgba(200,0,0,0.85)';
      }
      if (isBionic) {
        // Bionic burst: 3 rapid globs
        this.bionichipActive = true;
        this.bionichipBurstLeft = 2; // spawn 1 now + 2 more via timer
        this._spawnGlob();
        // Schedule 2 more globs 0.25s apart
        setTimeout(() => { if (!this.gameOver) this._spawnGlob(); }, 250);
        setTimeout(() => { if (!this.gameOver) this._spawnGlob(); }, 500);
        setTimeout(() => { this.bionichipActive = false; }, 600);
      } else {
        this._spawnGlob();
      }
      // Next throw: 1.5–3s, gets faster as timer runs down
      const urgency = Math.max(0.55, this.timer / 120);
      this.globSpawnTimer = (1.5 + Math.random() * 1.5) * urgency;
      // Set next taunt line
      if (this.warningEl) {
        if (this.throwCount % 4 === 3) {
          // Pre-announce bionic on the throw BEFORE it hits
          this.warningEl.textContent = this.BIONIC_WARNING;
          this.warningEl.style.background = 'rgba(80,0,180,0.92)';
        } else {
          const t = this.CONNIE_TAUNTS[Math.floor(Math.random() * this.CONNIE_TAUNTS.length)];
          this.warningEl.textContent = t;
          this.warningEl.style.background = 'rgba(200,0,0,0.85)';
        }
      }
    }

    // Tick invincibility
    if (this.invincT > 0) {
      this.invincT -= dt;
      // Flash player during invincibility
      this.charGroup.visible = Math.sin(this.invincT * 25) > 0;
    } else {
      this.charGroup.visible = true;
    }

    // ── Update globs ──────────────────────────────────────────────────────
    for (const g of this.globs) {
      if (g.dead) continue;
      g.vy = Math.max(g.vy - GRAVITY * dt, MAX_FALL);
      g.x += g.vx * dt;
      g.y += g.vy * dt;
      g.mesh.position.set(g.x, g.y, 0.5);
      g.mesh.rotation.z += 4 * dt;

      // Pulse shadow ring — grows + brightens as glob approaches ground
      const heightFrac = Math.max(0, Math.min(1, g.y / (GOAL_Y + 5)));
      const ringScale = 1.0 + (1 - heightFrac) * 1.2; // grows as it falls
      const ringOpacity = 0.4 + (1 - heightFrac) * 0.55;
      g.shadowRing.position.x = g.x;
      g.shadowRing.scale.setScalar(ringScale);
      (g.shadowRing.material as THREE.MeshBasicMaterial).opacity = ringOpacity;

      // Player hit (skip if invincible)
      if (!this.delivered && this.invincT <= 0) {
        const dx = Math.abs(this.px - g.x);
        const dy = g.y - this.py;
        if (dx < PW + g.r + 0.15 && dy > -0.5 && dy < PH + g.r) {
          g.dead = true;
          this.scene.remove(g.mesh);
          this.scene.remove(g.shadowRing);
          this.lives--;
          this._updateHearts();
          if (this.lives <= 0) { this._end(false); return; }
          // Knockback — heavy downward/sideways push, player falls to platform below naturally
          this.vy = -18;
          this.vx = (this.px > g.x ? 1 : -1) * 5;
          this.onGround = false; this.jumpsLeft = 1;
          this.climbPole = null; this.swingBar = null;
          this.invincT = 1.2; // 1.2s invincibility
          continue;
        }
      }

      // Splat on platform or ground
      if (!g.dead) {
        for (const p of this.platforms) {
          if (!p.crumbled && g.x > p.x1 && g.x < p.x2 &&
              Math.abs(g.y - p.y) < 0.5 && g.vy <= 0) {
            g.dead = true;
            this.scene.remove(g.mesh);
            this.scene.remove(g.shadowRing);
            break;
          }
        }
        if (!g.dead && g.y < -2) {
          g.dead = true;
          this.scene.remove(g.mesh);
          this.scene.remove(g.shadowRing);
        }
      }
    }
    // Purge dead
    this.globs = this.globs.filter(g => !g.dead);

    if (this.swingBar) {
      this._physicsSwing(dt);
    } else if (this.climbPole) {
      this._physicsClimb(dt);
    } else {
      this._physicsPlatform(dt);
    }

    // Player visual
    this.charGroup.position.set(this.px, this.py, 0.3);
    this.charGroup.rotation.y = this.facingRight ? -0.15 : Math.PI + 0.15;

    // Camera smoothly follows player Y
    const targetY = Math.max(8, Math.min(this.py + 6, GOAL_Y + 2));
    this.camera.position.y += (targetY - this.camera.position.y) * 0.07;
    this.camera.lookAt(0, this.camera.position.y - 4, 0);

    // Fall into trough
    if (this.py < -3.5) { this._loseLife(); return; }

    // Win condition
    if (!this.delivered && this.py >= GOAL_Y - 0.5 && Math.abs(this.px) < 5) {
      this.delivered = true;
      this._end(true);
    }
  }

  // ── Platformer physics ────────────────────────────────────────────────────
  private _physicsPlatform(dt: number): void {
    // Check pole proximity → grab on UP (works from ground AND air)
    for (const pole of this.poles) {
      if (Math.abs(this.px - pole.x) < 0.6 && this.py >= pole.y1 - 0.5 && this.py <= pole.y2) {
        if (this.keys.up) {
          this.climbPole = pole;
          this.px = pole.x; this.vx = 0; this.vy = 0;
          this.onGround = false;
          return;
        }
      }
    }

    // Gravity
    if (!this.onGround) {
      this.vy = Math.max(this.vy - GRAVITY * dt, MAX_FALL);
    }

    // Walk
    if (this.keys.left)       { this.vx = -WALK_SPD; this.facingRight = false; }
    else if (this.keys.right) { this.vx =  WALK_SPD; this.facingRight = true; }
    else                      { this.vx *= 0.6; }

    // Jump / double jump / grab swing
    if (this.jumpTap) {
      if (this.onGround) {
        this.vy = JUMP1; this.onGround = false; this.jumpsLeft = 1;
      } else if (this.jumpsLeft > 0) {
        this.vy = JUMP2; this.jumpsLeft--;
      } else {
        // Try grabbing a swing bar
        for (const bar of this.swingBars) {
          const dx = this.px - bar.anchorX;
          const dy = this.py - bar.anchorY;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < bar.radius + 1.5 && this.py < bar.anchorY + 0.5) {
            this.swingBar = bar;
            const r = Math.max(dist, bar.radius);
            this.swingAngle  = Math.atan2(dx, -(dy));
            this.swingOmega  = this.vx / r;
            this.vx = 0; this.vy = 0;
            return;
          }
        }
      }
    }

    // Swing bar auto-grab when drifting close
    if (!this.onGround) {
      for (const bar of this.swingBars) {
        const dy = Math.abs(this.py - bar.anchorY);
        const dx = Math.abs(this.px - bar.anchorX);
        if (dy < 0.6 && dx < bar.radius && this.vy < 0) {
          this.swingBar = bar;
          this.swingAngle = Math.atan2(this.px - bar.anchorX, -(this.py - bar.anchorY));
          this.swingOmega = this.vx / bar.radius;
          this.vx = 0; this.vy = 0;
          return;
        }
      }
    }

    // Move
    this.px += this.vx * dt;
    this.py += this.vy * dt;
    this.px = Math.max(-8.2, Math.min(8.2, this.px));

    // Platform collision
    this.onGround = false;
    for (const p of this.platforms) {
      if (p.crumbled) continue;
      if (
        this.px + PW > p.x1 && this.px - PW < p.x2 &&
        this.py > p.y - 0.5 && this.py < p.y + 1.0 && this.vy <= 0
      ) {
        this.py = p.y; this.vy = 0;
        this.onGround = true; this.jumpsLeft = 2;
        break;
      }
    }
  }

  // ── Pole climbing ──────────────────────────────────────────────────────────
  private _physicsClimb(dt: number): void {
    const pole = this.climbPole!;
    if (this.keys.up)   this.py += CLIMB_SPD * dt;
    if (this.keys.down) this.py -= CLIMB_SPD * dt;

    // Step off onto a platform
    for (const p of this.platforms) {
      if (!p.crumbled && Math.abs(this.py - p.y) < 0.4 &&
          this.px >= p.x1 && this.px <= p.x2) {
        this.climbPole = null;
        this.py = p.y; this.onGround = true; this.jumpsLeft = 2;
        return;
      }
    }
    // Bounds check
    if (this.py < pole.y1 || this.py > pole.y2) {
      this.climbPole = null;
    }
    // Jump off pole
    if (this.jumpTap) {
      this.climbPole = null;
      this.vy = JUMP1 * 0.85; this.jumpsLeft = 1;
      if (this.keys.left)       { this.vx = -WALK_SPD * 1.3; this.facingRight = false; }
      else if (this.keys.right) { this.vx =  WALK_SPD * 1.3; this.facingRight = true; }
    }
  }

  // ── Swing physics (pendulum) ───────────────────────────────────────────────
  private _physicsSwing(dt: number): void {
    const bar = this.swingBar!;
    const R = bar.radius;

    // Pendulum gravity + player push input
    this.swingOmega += -(9.8 / R) * Math.sin(this.swingAngle) * dt;
    if (this.keys.left)  this.swingOmega -= 4.0 * dt;
    if (this.keys.right) this.swingOmega += 4.0 * dt;
    this.swingOmega *= 0.993; // damping
    this.swingAngle  += this.swingOmega * dt;

    this.px = bar.anchorX + R * Math.sin(this.swingAngle);
    this.py = bar.anchorY - R * Math.cos(this.swingAngle);
    this.facingRight = this.swingOmega > 0;

    // Release — fly off with momentum
    if (this.jumpTap) {
      this.swingBar = null;
      const speed = this.swingOmega * R;
      this.vx = speed * Math.cos(this.swingAngle) * 1.4;
      this.vy = Math.max(JUMP2 * 0.75, Math.abs(speed) * 0.8 + 4);
      this.jumpsLeft = 1; this.onGround = false;
    }

    // Land on platform while swinging
    for (const p of this.platforms) {
      if (!p.crumbled && this.px + PW > p.x1 && this.px - PW < p.x2 &&
          Math.abs(this.py - p.y) < 0.4 && this.swingOmega < 1.5) {
        this.swingBar = null;
        this.py = p.y; this.vx = 0; this.vy = 0;
        this.onGround = true; this.jumpsLeft = 2;
      }
    }
  }

  // ── Lives ─────────────────────────────────────────────────────────────────
  private _loseLife(): void {
    this.lives--;
    this._updateHearts();
    if (this.lives <= 0) { this._end(false); return; }
    // Respawn on highest safe floor
    const safeFloor = Math.max(0, Math.floor(this.py / FLOOR_H) - 1);
    this.px = 0; this.py = safeFloor * FLOOR_H;
    this.vx = 0; this.vy = 0;
    this.onGround = false; this.jumpsLeft = 2;
    this.climbPole = null; this.swingBar = null;
  }

  // ── End game ──────────────────────────────────────────────────────────────
  private _end(success: boolean): void {
    if (this.gameOver) return;
    this.gameOver = true;
    cancelAnimationFrame(this.rafId);

    // Win = full job pay. Fail = -30% penalty (negative qualityPct signals deduction).
    const qualityPct = success ? 1.0 : -0.3;

    const banner = document.createElement('div');
    banner.style.cssText = `
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${success ? '#FFD700' : '#C1666B'};
      color: ${success ? '#FFD97A' : '#FF6B6B'};
    `;
    banner.innerHTML = success
      ? `🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>`
      : `💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`;
    this.overlay.appendChild(banner);

    setTimeout(() => {
      this._cleanup();
      this.onCompleteFn({
        score: success ? 100 : 0,
        qualityPct,
        message: success ? 'Scaffold conquered!' : 'Scaffold failed — 30% deducted.',
      });
    }, success ? 1800 : 2200);
  }

  private _cleanup(): void {
    cancelAnimationFrame(this.rafId);
    // Remove any in-flight globs + their shadow rings
    for (const g of this.globs) {
      this.scene.remove(g.mesh);
      this.scene.remove(g.shadowRing);
    }
    this.globs = [];
    this.renderer.dispose();
    this.overlay.dispatchEvent(new Event('remove'));
    this.overlay.remove();
  }

  // ── MiniGameManager compat (mount/unmount interface) ──────────────────────
  mount(_container: HTMLElement, onComplete: (r: MiniGameResult) => void): void {
    this.start(onComplete);
  }
  unmount(): void {
    if (!this.gameOver) {
      this.gameOver = true;
      this._cleanup();
    }
  }
}
