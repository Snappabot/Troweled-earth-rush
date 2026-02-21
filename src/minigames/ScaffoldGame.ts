import type { MiniGameResult } from './MiniGameManager';

// ─── Virtual resolution ───────────────────────────────────────────────────────
const VW = 400;
const VH = 700;

// ─── Physics constants ────────────────────────────────────────────────────────
const GRAVITY             = 800;   // px/s²
const JUMP_VY             = -420;  // px/s (upward)
const MOVE_SPEED          = 140;   // px/s
const CLIMB_SPEED         = 100;   // px/s
const MAX_FALL            = 600;   // px/s
const INVINCIBLE_DURATION = 0.5;   // seconds
const NORMAL_H            = 44;    // Jarrad full height
const CROUCH_H            = 22;    // Jarrad crouch height

// ─── PoP mechanics constants ──────────────────────────────────────────────────
const WALL_RUN_DURATION   = 0.6;   // seconds
const WALL_RUN_UP_SPEED   = 120;   // px/s upward during wall run
const WALL_RUN_PUSH_VX    = 180;   // horizontal push away from wall after run
const WALL_RUN_PUSH_VY    = -200;  // upward boost after wall run
const SHIMMY_SPEED        = 60;    // px/s lateral while hanging
const VAULT_MIN_SPEED     = 80;    // px/s horizontal speed needed to vault
const REWIND_INVINCIBLE   = 0.8;   // seconds invincibility after rewind
const MOMENTUM_THRESHOLD  = 100;   // px/s — if faster, jump gets boost
const MOMENTUM_BOOST      = 1.15;  // multiplier on JUMP_VY
const COMBO_WINDOW        = 3.0;   // seconds to complete full combo chain
const HIGH_FALL_THRESHOLD = 100;   // px — triggers splat particles on landing

// ─── Rope constants ───────────────────────────────────────────────────────────
const ROPE_ANCHOR_X = 200;
const ROPE_ANCHOR_Y = 80;
const ROPE_LENGTH   = 270;       // px, hangs to y≈350

// ─── Platform layout ──────────────────────────────────────────────────────────
type PlatformType = 'normal' | 'moving' | 'crumbling' | 'win';

interface Platform {
  id: string;
  baseX: number;
  y: number;
  width: number;
  height: number;
  level: number;
  type: PlatformType;
}

const PLATFORM_DEFS: Platform[] = [
  // id        baseX   y     w     h  lvl  type
  { id:'lv1',  baseX:80,  y:540, width:100, height:8, level:1, type:'normal'   }, // 0
  { id:'lv2',  baseX:140, y:450, width:120, height:8, level:2, type:'normal'   }, // 1
  { id:'lv3a', baseX:80,  y:360, width:100, height:8, level:3, type:'normal'   }, // 2
  { id:'lv3b', baseX:220, y:360, width:100, height:8, level:3, type:'normal'   }, // 3
  { id:'lv4',  baseX:125, y:270, width:140, height:8, level:4, type:'moving'   }, // 4  (baseX is centre of oscillation left-edge)
  { id:'lv5a', baseX:80,  y:185, width:100, height:8, level:5, type:'crumbling'}, // 5
  { id:'lv5b', baseX:220, y:185, width:100, height:8, level:5, type:'normal'   }, // 6
  { id:'lv6',  baseX:80,  y:100, width:240, height:8, level:6, type:'win'      }, // 7
];

// Drop-sheet obstacle on level 2 platform
const DROP_SHEET = { x: 190, y: 420, w: 40, h: 30 };

// ─── Jarrad state ─────────────────────────────────────────────────────────────
type JarradState = 'standing' | 'jumping' | 'falling' | 'hanging' | 'climbing' | 'swinging' | 'dead' | 'wall-running';

interface SplatParticle {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; radius: number;
}

interface Jarrad {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  state: JarradState;
  isCrouching: boolean;
  lives: number;
  invincTimer: number;
  deathTimer: number;
  currentLevel: number;
  bucketAngle: number;
  // PoP additions
  wallRunTimer: number;     // >0 = wall running
  wallRunDir: number;       // 1 = right wall, -1 = left wall
  wallRunUsed: boolean;     // reset on platform landing
  rewindX: number;          // last safe platform position
  rewindY: number;
  rewindAvailable: boolean; // one-use per life
}

interface Pigeon {
  x: number;
  y: number;
  vx: number;
  platformIdx: number;
  jumpTimer: number;
  scaredTimer: number;
  flying: boolean;
  flyTargetX: number;
  flyTargetY: number;
}

type GamePhase = 'playing' | 'won' | 'lost' | 'result';

export class ScaffoldGame {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animFrame: number | null = null;
  private onComplete: ((result: MiniGameResult) => void) | null = null;

  // Game state
  private phase: GamePhase = 'playing';
  private platforms: Platform[] = [];
  private jarrad!: Jarrad;
  private pigeon!: Pigeon;
  private gameTime      = 0;
  private tsuyoshiSpeech = 'I GOT IT!';
  private tsuyoshiTimer  = 0;
  private resultTimer    = 0;
  private retried        = false;

  // Moving platform
  private movingPlatTime = 0;
  private movingPlatX    = 125; // current left-edge X

  // Crumbling platform (lv5a, index 5)
  private crumble5ATimer   = 0;  // time Jarrad has stood on it
  private crumble5AState: 'solid' | 'shaking' | 'broken' = 'solid';
  private crumble5ARespawn = 0;  // countdown when broken

  // Rope swing
  private ropeAngle    = 0;    // radians from vertical (positive = rightward)
  private ropeAngVel   = 0;    // angular velocity rad/s
  private ropeGrabbed  = false;

  // Wind
  private windCycleTimer = 0;
  private windActive     = false;
  private windAlpha      = 0;

  // Gap hint
  private showGapHint = true;
  private gapHintTimer = 8;

  // HUD wobble (for crumble visual)
  private shakeNoise = 0;

  // ─── PoP / Polish state ───────────────────────────────────────────────────
  // Combo chain: 0=none, 1=jumped, 2=grabbed/hung, 3=shimmied, 4=pulled-up (complete)
  private comboPhase  = 0;
  private comboTimer  = 0;
  private comboFlashTimer = 0;

  // Flash text timers
  private vaultFlashTimer  = 0;
  private rewindFlashTimer = 0;  // white screen flash on rewind

  // Plaster splat particles (land from high fall)
  private splatParticles: SplatParticle[] = [];

  // Frame counter for leg animation
  private frameCount = 0;

  // Track Y before landing for fall-height detection
  private prevJarradY = 0;

  // Wall run dust particles (simple positional list)
  private wallDustParticles: Array<{x: number; y: number; alpha: number; r: number}> = [];

  // Shimmy tracking for combo
  private hasShimmied = false;

  // Input
  private keys: Record<string, boolean> = {};
  private prevKeys: Record<string, boolean> = {};
  private keyHandler!: (e: KeyboardEvent) => void;
  private keyUpHandler!: (e: KeyboardEvent) => void;

  // Mobile
  private mobileLeft   = false;
  private mobileRight  = false;
  private mobileJump   = false;
  private mobileDrop   = false;
  private mobileRewind = false;
  private mobileRewindFired = false; // edge-detect latch
  private mobileContainer: HTMLDivElement | null = null;

  // Timestamp
  private lastTimestamp = 0;

  // ─── Public interface ──────────────────────────────────────────────────────

  mount(container: HTMLDivElement, onComplete: (result: MiniGameResult) => void): void {
    this.onComplete = onComplete;
    this.platforms  = PLATFORM_DEFS.map(p => ({ ...p }));

    this.canvas = document.createElement('canvas');
    this.canvas.width  = VW;
    this.canvas.height = VH;
    this.canvas.style.cssText = `
      width: 100%; height: 100%; object-fit: contain; display: block; touch-action: none;
    `;
    this.ctx = this.canvas.getContext('2d');

    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000; overflow: hidden;
    `;
    wrapper.appendChild(this.canvas);
    container.appendChild(wrapper);

    this.buildMobileButtons(wrapper);
    this.initGame();

    this.keys = {};
    this.prevKeys = {};
    this.keyHandler = (e: KeyboardEvent) => {
      this.keys[e.code] = true;
      if (['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)) e.preventDefault();
    };
    this.keyUpHandler = (e: KeyboardEvent) => { this.keys[e.code] = false; };
    window.addEventListener('keydown', this.keyHandler);
    window.addEventListener('keyup',   this.keyUpHandler);

    this.lastTimestamp = 0;
    this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
  }

  unmount(): void {
    if (this.animFrame !== null) { cancelAnimationFrame(this.animFrame); this.animFrame = null; }
    window.removeEventListener('keydown', this.keyHandler);
    window.removeEventListener('keyup',   this.keyUpHandler);
    this.canvas = null;
    this.ctx    = null;
    this.onComplete = null;
    this.mobileContainer = null;
  }

  // ─── Mobile buttons ────────────────────────────────────────────────────────

  private buildMobileButtons(wrapper: HTMLElement): void {
    const mobileDiv = document.createElement('div');
    mobileDiv.style.cssText = `
      position: absolute; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 8px; pointer-events: none; z-index: 50;
    `;

    const makeBtn = (label: string, onDown: () => void, onUp: () => void): HTMLButtonElement => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.style.cssText = `
        pointer-events: auto;
        background: rgba(255,255,255,0.18); border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px; font-size: 22px; font-weight: 900;
        cursor: pointer; touch-action: manipulation; user-select: none;
        -webkit-tap-highlight-color: transparent;
      `;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); onDown(); }, { passive: false });
      btn.addEventListener('touchend',   (e) => { e.preventDefault(); onUp();   }, { passive: false });
      btn.addEventListener('mousedown',  () => onDown());
      btn.addEventListener('mouseup',    () => onUp());
      btn.addEventListener('mouseleave', () => onUp());
      return btn;
    };

    const leftCluster = document.createElement('div');
    leftCluster.style.cssText = 'display:flex; flex-direction:column; gap:4px; pointer-events:none; align-items:flex-start;';

    // ⏪ rewind button (smaller, top of left cluster)
    const rewindBtn = makeBtn('⏪', () => {
      if (!this.mobileRewindFired) {
        this.mobileRewind = true;
        this.mobileRewindFired = true;
      }
    }, () => {
      this.mobileRewind = false;
      this.mobileRewindFired = false;
    });
    rewindBtn.style.cssText += '; width:48px; height:40px; font-size:16px;';

    const dirRow = document.createElement('div');
    dirRow.style.cssText = 'display:flex; gap:4px; pointer-events:none;';
    const lBtn = makeBtn('◀', () => { this.mobileLeft = true; }, () => { this.mobileLeft = false; });
    lBtn.style.width = '64px'; lBtn.style.height = '64px';
    const rBtn = makeBtn('▶', () => { this.mobileRight = true; }, () => { this.mobileRight = false; });
    rBtn.style.width = '64px'; rBtn.style.height = '64px';
    dirRow.appendChild(lBtn);
    dirRow.appendChild(rBtn);

    leftCluster.appendChild(rewindBtn);
    leftCluster.appendChild(dirRow);

    const jumpBtn = makeBtn('▲', () => { this.mobileJump = true; }, () => { this.mobileJump = false; });
    jumpBtn.style.width = '80px'; jumpBtn.style.height = '64px';

    const dropBtn = makeBtn('▼', () => { this.mobileDrop = true; }, () => { this.mobileDrop = false; });
    dropBtn.style.width = '64px'; dropBtn.style.height = '64px';

    mobileDiv.appendChild(leftCluster);
    mobileDiv.appendChild(jumpBtn);
    mobileDiv.appendChild(dropBtn);
    wrapper.appendChild(mobileDiv);
    this.mobileContainer = mobileDiv;
  }

  // ─── Init / reset ──────────────────────────────────────────────────────────

  private initGame(): void {
    this.phase          = 'playing';
    this.gameTime       = 0;
    this.movingPlatTime = 0;
    this.movingPlatX    = 125;
    this.tsuyoshiTimer  = 0;
    this.tsuyoshiSpeech = 'I GOT IT!';
    this.resultTimer    = 0;
    this.crumble5ATimer = 0;
    this.crumble5AState = 'solid';
    this.crumble5ARespawn = 0;
    this.ropeAngle   = 0;
    this.ropeAngVel  = 0;
    this.ropeGrabbed = false;
    this.windCycleTimer = 0;
    this.windActive  = false;
    this.windAlpha   = 0;
    this.showGapHint = true;
    this.gapHintTimer = 8;

    // PoP reset
    this.comboPhase  = 0;
    this.comboTimer  = 0;
    this.comboFlashTimer = 0;
    this.vaultFlashTimer  = 0;
    this.rewindFlashTimer = 0;
    this.splatParticles   = [];
    this.wallDustParticles = [];
    this.frameCount  = 0;
    this.hasShimmied = false;

    this.pigeon = {
      x: 240, y: 0, vx: 60,
      platformIdx: 3,   // start on lv3b
      jumpTimer: 6,
      scaredTimer: 0,
      flying: false,
      flyTargetX: 240,
      flyTargetY: 0,
    };
    this.snapPigeonToPlatform();
    this.spawnAtLevel1();
  }

  private spawnAtLevel1(): void {
    const plat = this.platforms[0]; // lv1
    const existingLives = this.jarrad?.lives ?? 3;
    this.jarrad = {
      x: plat.baseX + 10,
      y: plat.y - NORMAL_H,
      vx: 0, vy: 0,
      w: 18, h: NORMAL_H,
      state: 'standing',
      isCrouching: false,
      lives: existingLives,
      invincTimer: 0,
      deathTimer: 0,
      currentLevel: 1,
      bucketAngle: 0,
      // PoP
      wallRunTimer: 0,
      wallRunDir: 0,
      wallRunUsed: false,
      rewindX: plat.baseX + 10,
      rewindY: plat.y - NORMAL_H,
      rewindAvailable: true,
    };
    this.ropeGrabbed = false;
    this.prevJarradY = this.jarrad.y;
    this.splatParticles = [];
    this.wallDustParticles = [];
  }

  // ─── Game loop ─────────────────────────────────────────────────────────────

  private gameLoop(timestamp: number): void {
    if (!this.ctx || !this.canvas) return;
    const dt = Math.min((timestamp - (this.lastTimestamp || timestamp)) / 1000, 0.05);
    this.lastTimestamp = timestamp;

    if (this.phase === 'playing') this.update(dt);
    this.draw();
    this.prevKeys = { ...this.keys };
    this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
  }

  // ─── Update ───────────────────────────────────────────────────────────────

  private update(dt: number): void {
    this.gameTime  += dt;
    this.frameCount++;

    // Tsuyoshi speech
    this.tsuyoshiTimer += dt;
    if (this.tsuyoshiTimer > 3) {
      this.tsuyoshiTimer  = 0;
      this.tsuyoshiSpeech = this.tsuyoshiSpeech === 'I GOT IT!' ? 'HOLD ON!' : 'I GOT IT!';
    }

    // Gap hint countdown
    if (this.showGapHint) {
      this.gapHintTimer -= dt;
      if (this.gapHintTimer <= 0) this.showGapHint = false;
    }

    // Moving platform
    this.movingPlatTime += dt;
    const prevMovX = this.movingPlatX;
    this.movingPlatX = 125 + 45 * Math.sin((2 * Math.PI * this.movingPlatTime) / 3);

    // Wind system
    this.updateWind(dt);

    // Crumbling platform
    this.updateCrumble(dt);

    // Pigeon
    this.updatePigeon(dt);

    // Flash timers
    if (this.vaultFlashTimer > 0)  this.vaultFlashTimer  -= dt;
    if (this.rewindFlashTimer > 0) this.rewindFlashTimer -= dt;
    if (this.comboFlashTimer > 0)  this.comboFlashTimer  -= dt;

    // Combo timer decay
    if (this.comboPhase > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        // Chain expired
        this.comboPhase  = 0;
        this.comboTimer  = 0;
      }
    }

    // Update splat particles
    this.updateSplatParticles(dt);

    // Update wall dust
    this.updateWallDust(dt);

    // Jarrad
    if (this.jarrad.state === 'dead') {
      this.jarrad.deathTimer -= dt;
      if (this.jarrad.deathTimer <= 0) this.spawnAtLevel1();
      return;
    }

    if (this.jarrad.invincTimer > 0) this.jarrad.invincTimer -= dt;

    // Track Y before physics for fall detection
    this.prevJarradY = this.jarrad.y;

    this.handleInput(dt);
    this.applyPhysics(dt, prevMovX);
    this.checkCollisions();
    this.checkDeath();
    this.checkWin();

    // Bucket swing
    const targetAngle = this.jarrad.vx * 0.002;
    this.jarrad.bucketAngle += (targetAngle - this.jarrad.bucketAngle) * 8 * dt;

    if (this.jarrad.invincTimer <= 0) this.checkPigeonCollision();

    this.jarrad.currentLevel = this.getCurrentLevel();
  }

  // ─── Splat particles ──────────────────────────────────────────────────────

  private spawnSplatParticles(x: number, y: number): void {
    const count = 5 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 60 + Math.random() * 80;
      this.splatParticles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 30,
        alpha: 1,
        radius: 3 + Math.random() * 4,
      });
    }
  }

  private updateSplatParticles(dt: number): void {
    for (const p of this.splatParticles) {
      p.x    += p.vx * dt;
      p.y    += p.vy * dt;
      p.vy   += 200 * dt; // light gravity
      p.alpha -= dt / 0.4;
    }
    this.splatParticles = this.splatParticles.filter(p => p.alpha > 0);
  }

  // ─── Wall dust ────────────────────────────────────────────────────────────

  private spawnWallDust(x: number, y: number): void {
    for (let i = 0; i < 3; i++) {
      this.wallDustParticles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + Math.random() * 20,
        alpha: 0.8,
        r: 3 + Math.random() * 4,
      });
    }
  }

  private updateWallDust(dt: number): void {
    for (const p of this.wallDustParticles) {
      p.alpha -= dt / 0.4;
      p.y     -= 20 * dt;
    }
    this.wallDustParticles = this.wallDustParticles.filter(p => p.alpha > 0);
  }

  // ─── Wind ─────────────────────────────────────────────────────────────────

  private updateWind(dt: number): void {
    this.windCycleTimer += dt;
    const cycle = 4; // seconds per cycle
    const gustDuration = 1.5;
    const t = this.windCycleTimer % cycle;

    if (t < gustDuration) {
      this.windActive = true;
      if (t < 0.3) this.windAlpha = t / 0.3;
      else if (t > gustDuration - 0.3) this.windAlpha = (gustDuration - t) / 0.3;
      else this.windAlpha = 1;
    } else {
      this.windActive = false;
      this.windAlpha  = 0;
    }
  }

  // ─── Crumble ──────────────────────────────────────────────────────────────

  private updateCrumble(dt: number): void {
    if (this.crumble5AState === 'broken') {
      this.crumble5ARespawn -= dt;
      if (this.crumble5ARespawn <= 0) {
        this.crumble5AState = 'solid';
        this.crumble5ATimer = 0;
      }
      return;
    }

    const j = this.jarrad;
    const p5a = this.platforms[5]; // lv5a
    const jFeet = j.y + j.h;

    const onCrumble =
      j.state === 'standing' &&
      Math.abs(jFeet - p5a.y) < 5 &&
      j.x + j.w > p5a.baseX &&
      j.x < p5a.baseX + p5a.width;

    if (onCrumble) {
      this.crumble5ATimer += dt;
      if (this.crumble5ATimer > 1.5) {
        this.crumble5AState   = 'broken';
        this.crumble5ARespawn = 8;
        this.crumble5ATimer   = 0;
        if (j.state === 'standing') {
          j.state = 'falling';
          j.vy    = 0;
        }
      } else if (this.crumble5ATimer > 1.2) {
        this.crumble5AState = 'shaking';
        this.shakeNoise = (Math.random() - 0.5) * 4;
      }
    } else {
      this.crumble5ATimer = Math.max(0, this.crumble5ATimer - dt * 2);
      if (this.crumble5ATimer < 1.2) this.crumble5AState = 'solid';
    }
  }

  // ─── Input ────────────────────────────────────────────────────────────────

  private handleInput(dt: number): void {
    const j = this.jarrad;
    const leftHeld  = this.keys['ArrowLeft']  || this.keys['KeyA'] || this.mobileLeft;
    const rightHeld = this.keys['ArrowRight'] || this.keys['KeyD'] || this.mobileRight;
    const jumpPress = this.isJustPressed('ArrowUp') || this.isJustPressed('KeyW') || this.isJustPressed('Space') || this.mobileJump;
    const upHeld    = this.keys['ArrowUp']    || this.keys['KeyW'] || this.keys['Space'] || this.mobileJump;
    const downHeld  = this.keys['ArrowDown']  || this.keys['KeyS'] || this.mobileDrop;

    // ── Time Rewind (Dagger of Time) ─────────────────────────────────────────
    const rewindPress = (this.isJustPressed('ShiftLeft') || this.isJustPressed('ShiftRight') || this.mobileRewind)
      && !this.mobileRewindFired;
    if (rewindPress && j.rewindAvailable && j.state !== 'dead') {
      // Consume the mobile latch
      if (this.mobileRewind) this.mobileRewindFired = true;

      j.rewindAvailable = false;
      j.x = j.rewindX;
      j.y = j.rewindY;
      j.vx = 0; j.vy = 0;
      j.state = 'falling';
      j.invincTimer = REWIND_INVINCIBLE;
      j.wallRunTimer = 0;
      j.wallRunUsed  = false;
      this.rewindFlashTimer = 0.3;
      this.ropeGrabbed = false;
    }

    // ── Wall Run ─────────────────────────────────────────────────────────────
    if (j.state === 'wall-running') {
      j.wallRunTimer -= dt;
      if (j.wallRunTimer <= 0) {
        // End wall run — push away
        j.vx    = -j.wallRunDir * WALL_RUN_PUSH_VX;
        j.vy    = WALL_RUN_PUSH_VY;
        j.state = 'jumping';
      }
      return; // wall-run handles all physics in applyPhysics
    }

    // ── Rope swing ──────────────────────────────────────────────────────────
    if (j.state === 'swinging') {
      if (jumpPress) {
        const ω = this.ropeAngVel;
        const θ = this.ropeAngle;
        j.vx = ROPE_LENGTH * ω * Math.cos(θ);
        j.vy = -ROPE_LENGTH * ω * Math.sin(θ);
        j.state = 'jumping';
        this.ropeGrabbed = false;
      }
      return;
    }

    // ── Grab rope (while airborne) ──────────────────────────────────────────
    if ((j.state === 'jumping' || j.state === 'falling') && !this.ropeGrabbed) {
      const centreX = j.x + j.w / 2;
      const centreY = j.y + j.h / 2;
      const ropeEndY = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle);
      if (
        Math.abs(centreX - ROPE_ANCHOR_X) < 15 &&
        centreY > ROPE_ANCHOR_Y &&
        centreY < ropeEndY + 30
      ) {
        const dx = centreX - ROPE_ANCHOR_X;
        const dy = centreY - ROPE_ANCHOR_Y;
        this.ropeAngle   = Math.atan2(dx, dy);
        this.ropeAngVel  = j.vx / ROPE_LENGTH;
        j.state = 'swinging';
        this.ropeGrabbed = true;
        // Combo: phase 2 — grabbed
        if (this.comboPhase === 1) { this.comboPhase = 2; this.comboTimer = COMBO_WINDOW; }
        return;
      }
    }

    // ── Wall run trigger (airborne near wall) ────────────────────────────────
    if ((j.state === 'jumping' || j.state === 'falling') && !j.wallRunUsed) {
      const nearLeftWall  = j.x < 30 && leftHeld;
      const nearRightWall = j.x + j.w > 370 && rightHeld;
      if (nearLeftWall || nearRightWall) {
        j.state = 'wall-running';
        j.wallRunDir   = nearRightWall ? 1 : -1;
        j.wallRunTimer = WALL_RUN_DURATION;
        j.wallRunUsed  = true;
        j.vx = 0; j.vy = -WALL_RUN_UP_SPEED;
      }
    }

    // ── Climbing ─────────────────────────────────────────────────────────────
    const cx = j.x + j.w / 2;
    const onLadderA = cx > 120 && cx < 145 && j.y > 180 && j.y + j.h < 555;
    const onLadderB = cx > 260 && cx < 285 && j.y > 180 && j.y + j.h < 370;
    const onLadder  = onLadderA || onLadderB;

    if ((j.state === 'standing' || j.state === 'climbing' || j.state === 'falling') && onLadder) {
      if (upHeld) {
        j.isCrouching = false; j.h = NORMAL_H;
        j.state = 'climbing'; j.vy = -CLIMB_SPEED; j.vx = 0;
        return;
      }
      if (downHeld) {
        j.isCrouching = false; j.h = NORMAL_H;
        j.state = 'climbing'; j.vy = CLIMB_SPEED; j.vx = 0;
        return;
      }
    }

    if (j.state === 'climbing') {
      if (!onLadder || (!upHeld && !downHeld)) {
        j.vy = 0; j.state = 'falling';
      }
    }

    // ── Standing ─────────────────────────────────────────────────────────────
    if (j.state === 'standing') {
      if (downHeld && !onLadder) {
        if (!j.isCrouching) {
          j.isCrouching = true;
          j.y += NORMAL_H - CROUCH_H;
          j.h  = CROUCH_H;
        }
        j.vx = 0;
        return;
      } else if (j.isCrouching) {
        j.isCrouching = false;
        j.y -= NORMAL_H - CROUCH_H;
        j.h  = NORMAL_H;
      }

      j.vx = 0;
      if (leftHeld)  j.vx = -MOVE_SPEED;
      if (rightHeld) j.vx =  MOVE_SPEED;

      if (jumpPress) {
        // Momentum-based jump boost
        const boost = Math.abs(j.vx) > MOMENTUM_THRESHOLD ? MOMENTUM_BOOST : 1.0;
        j.vy = JUMP_VY * boost;
        j.state = 'jumping';
        j.isCrouching = false;
        j.h = NORMAL_H;

        // Combo: phase 1 — jumped
        this.comboPhase = 1;
        this.comboTimer = COMBO_WINDOW;
        this.hasShimmied = false;
      }
    } else if (j.state === 'jumping' || j.state === 'falling') {
      // Air control
      j.vx = 0;
      if (leftHeld)  j.vx = -MOVE_SPEED * 0.85;
      if (rightHeld) j.vx =  MOVE_SPEED * 0.85;
    } else if (j.state === 'hanging') {
      j.vx = 0;

      // ── Ledge Shimmy ───────────────────────────────────────────────────────
      // Find the platform Jarrad is hanging from
      const hangingPlat = this.getHangingPlatform();
      if (hangingPlat) {
        const px = (hangingPlat.type === 'moving') ? this.movingPlatX : hangingPlat.baseX;
        const pr = px + hangingPlat.width;

        if (leftHeld) {
          j.x -= SHIMMY_SPEED * dt;
          // Clamp: drop off left edge
          if (j.x + j.w < px + 4) {
            // Drop off
            j.state = 'falling'; j.vy = 0;
            return;
          }
          if (!this.hasShimmied && this.comboPhase === 2) {
            this.hasShimmied = true;
            this.comboPhase  = 3;
            this.comboTimer  = COMBO_WINDOW;
          }
        }
        if (rightHeld) {
          j.x += SHIMMY_SPEED * dt;
          // Clamp: drop off right edge
          if (j.x > pr - 4) {
            j.state = 'falling'; j.vy = 0;
            return;
          }
          if (!this.hasShimmied && this.comboPhase === 2) {
            this.hasShimmied = true;
            this.comboPhase  = 3;
            this.comboTimer  = COMBO_WINDOW;
          }
        }
      }

      if (upHeld) {
        // Pull-up
        j.y -= 18; j.vy = 0; j.state = 'falling';
        // Combo: phase 4 — pulled up
        if (this.comboPhase === 3) {
          this.comboPhase = 4;
          // COMBO COMPLETE!
          this.comboFlashTimer = 2.0;
          this.gameTime = Math.max(0, this.gameTime - 3); // +3s bonus (subtract 3 from elapsed)
        }
      }
      if (downHeld) {
        j.y += 5; j.state = 'falling';
      }
    }
  }

  private getHangingPlatform(): Platform | null {
    const j = this.jarrad;
    const jHead = j.y;
    for (let i = 0; i < this.platforms.length; i++) {
      const plat = this.platforms[i];
      if (plat.type === 'crumbling' && this.crumble5AState === 'broken') continue;
      const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
      const pb = plat.y + plat.height;
      if (Math.abs(jHead - pb) < 12 && j.x + j.w > px + 2 && j.x < px + plat.width - 2) {
        return plat;
      }
    }
    return null;
  }

  private isJustPressed(code: string): boolean {
    return !!this.keys[code] && !this.prevKeys[code];
  }

  // ─── Physics ──────────────────────────────────────────────────────────────

  private applyPhysics(dt: number, prevMovX: number): void {
    const j = this.jarrad;

    // ── Wall run ─────────────────────────────────────────────────────────────
    if (j.state === 'wall-running') {
      j.vy = -WALL_RUN_UP_SPEED; // cancel gravity, move up
      j.y += j.vy * dt;
      // Keep pressed against wall
      if (j.wallRunDir === 1) j.x = Math.min(VW - j.w - 5, Math.max(VW - j.w - 30, j.x));
      else                    j.x = Math.max(5, Math.min(30, j.x));
      // Emit dust
      if (this.frameCount % 4 === 0) {
        this.spawnWallDust(
          j.wallRunDir === 1 ? j.x + j.w : j.x,
          j.y + j.h / 2
        );
      }
      return;
    }

    // ── Rope pendulum ─────────────────────────────────────────────────────────
    if (j.state === 'swinging') {
      const gOverL = GRAVITY / ROPE_LENGTH;
      this.ropeAngVel += -gOverL * Math.sin(this.ropeAngle) * dt;
      this.ropeAngVel *= 0.995;
      this.ropeAngle  += this.ropeAngVel * dt;
      this.ropeAngle = Math.max(-Math.PI * 0.6, Math.min(Math.PI * 0.6, this.ropeAngle));
      j.x = ROPE_ANCHOR_X + ROPE_LENGTH * Math.sin(this.ropeAngle) - j.w / 2;
      j.y = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle) - j.h;
      return;
    }

    if (j.state === 'climbing') { j.y += j.vy * dt; return; }
    if (j.state === 'hanging')  return;

    // Gravity
    if (j.state !== 'standing') {
      j.vy = Math.min(j.vy + GRAVITY * dt, MAX_FALL);
    }

    // Wind (only above y=270, levels 5+)
    if (this.windActive && j.y < 270 && j.state !== 'standing') {
      j.vx -= 30 * dt;
    } else if (this.windActive && j.y < 270 && j.state === 'standing') {
      j.vx -= 15 * dt;
    }

    j.x += j.vx * dt;
    j.y += j.vy * dt;

    // Clamp horizontal
    j.x = Math.max(5, Math.min(VW - j.w - 5, j.x));

    // Move with moving platform (when standing on it)
    if (j.state === 'standing') {
      const mp = this.platforms[4];
      const jFeet = j.y + j.h;
      if (
        Math.abs(jFeet - mp.y) < 5 &&
        j.x + j.w > this.movingPlatX &&
        j.x < this.movingPlatX + mp.width
      ) {
        const delta = this.movingPlatX - prevMovX;
        j.x += delta;
        j.x = Math.max(5, Math.min(VW - j.w - 5, j.x));
      }
    }
  }

  // ─── Collisions ───────────────────────────────────────────────────────────

  private checkCollisions(): void {
    const j = this.jarrad;
    if (j.state === 'dead' || j.state === 'swinging' || j.state === 'wall-running') return;

    // Check for vault opportunity (before standard collision)
    const leftHeld  = this.keys['ArrowLeft']  || this.keys['KeyA'] || this.mobileLeft;
    const rightHeld = this.keys['ArrowRight'] || this.keys['KeyD'] || this.mobileRight;
    const jumpNow   = this.keys['ArrowUp'] || this.keys['KeyW'] || this.keys['Space'] || this.mobileJump;

    for (let i = 0; i < this.platforms.length; i++) {
      const plat = this.platforms[i];
      if (plat.type === 'crumbling' && this.crumble5AState === 'broken') continue;

      const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
      const py = plat.y;
      const pr = px + plat.width;
      const pb = py + plat.height;

      const jFeet = j.y + j.h;
      const jLeft = j.x;
      const jRight = j.x + j.w;

      // Land on top
      if (
        (j.state === 'jumping' || j.state === 'falling' || j.state === 'climbing') &&
        j.vy >= 0 &&
        jFeet >= py && jFeet <= pb + 12 &&
        jRight > px + 2 && jLeft < pr - 2
      ) {
        // Splat particles on high fall
        const fallDist = j.y - this.prevJarradY;
        if (fallDist > HIGH_FALL_THRESHOLD) {
          this.spawnSplatParticles(j.x + j.w / 2, j.y + j.h);
        }

        j.y  = py - j.h;
        j.vy = 0;
        j.vx = 0;
        j.state = 'standing';
        if (j.isCrouching) { j.y += NORMAL_H - CROUCH_H; }

        // Record safe rewind position
        j.rewindX = j.x;
        j.rewindY = j.y;

        // Reset wall run
        j.wallRunUsed = false;

        // Combo: phase 4 check — if we pulled up and then landed it's already counted
        // Reset combo on new platform landing (only if not just completed)
        if (this.comboPhase < 4) {
          this.comboPhase = 0; this.comboTimer = 0;
        } else if (this.comboPhase === 4) {
          this.comboPhase = 0;
        }

        break;
      }

      // Head bump → hang
      const jHead = j.y;
      if (
        j.state === 'jumping' && j.vy < 0 &&
        jHead <= pb && jHead >= py - 10 &&
        jRight > px + 10 && jLeft < pr - 10
      ) {
        j.vy    = 0;
        j.y     = pb;
        j.state = 'hanging';
        // Combo: phase 2
        if (this.comboPhase === 1) { this.comboPhase = 2; this.comboTimer = COMBO_WINDOW; this.hasShimmied = false; }
        break;
      }
    }

    // Walk-off edge check
    if (j.state === 'standing') {
      let onAny = false;
      for (let i = 0; i < this.platforms.length; i++) {
        const plat = this.platforms[i];
        if (plat.type === 'crumbling' && this.crumble5AState === 'broken') continue;
        const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
        const jFeet = j.y + j.h;
        if (
          Math.abs(jFeet - plat.y) < 5 &&
          j.x + j.w > px + 1 && j.x < px + plat.width - 1
        ) { onAny = true; break; }
      }
      if (!onAny) j.state = 'falling';
    }

    // Drop-sheet obstacle collision (on level 2 platform)
    if (j.state === 'standing' || j.state === 'falling') {
      const jFeet = j.y + j.h;
      const lv2 = this.platforms[1];
      if (Math.abs(jFeet - lv2.y) < 6) {
        const sheetRight = DROP_SHEET.x + DROP_SHEET.w;
        const jRight = j.x + j.w;
        const jLeft  = j.x;
        const jTop   = j.y;

        const overlapX = jRight > DROP_SHEET.x && jLeft < sheetRight;
        const sheetTop = DROP_SHEET.y;

        if (overlapX && jTop < sheetTop) {
          // Check for vault: fast + holding jump
          if (!j.isCrouching && Math.abs(j.vx) >= VAULT_MIN_SPEED && jumpNow) {
            // VAULT!
            j.vy = JUMP_VY * 0.7; // gentle upward arc
            j.y -= 6;
            j.state = 'jumping';
            this.vaultFlashTimer = 1.2;
          } else if (!j.isCrouching) {
            // Standard bounce back
            j.vx = j.vx !== 0 ? -j.vx * 0.5 : 0;
            if (j.x + j.w / 2 < DROP_SHEET.x + DROP_SHEET.w / 2) {
              j.x = DROP_SHEET.x - j.w - 1;
            } else {
              j.x = sheetRight + 1;
            }
          }
        }
      }
    }
  }

  // ─── Death / win ──────────────────────────────────────────────────────────

  private checkDeath(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;
    if (j.y + j.h >= 640) this.killJarrad();
    if (j.y < -120) { j.y = -60; j.vy = 0; j.state = 'falling'; }
  }

  private killJarrad(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;
    j.lives--;
    j.state = 'dead';
    j.deathTimer = 1.2;
    j.rewindAvailable = true; // Recharge on new life
    this.ropeGrabbed = false;

    if (j.lives <= 0) {
      setTimeout(() => {
        if (this.retried) {
          this.phase = 'result';
          this.finishGame(false);
        } else {
          this.phase = 'lost';
        }
      }, 1300);
    }
  }

  private checkWin(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;
    const win = this.platforms[7]; // lv6
    const jFeet = j.y + j.h;
    if (
      Math.abs(jFeet - win.y) < 6 &&
      j.x + j.w > win.baseX && j.x < win.baseX + win.width
    ) {
      this.phase = 'won';
      setTimeout(() => this.finishGame(true), 100);
    }
  }

  private getCurrentLevel(): number {
    const j = this.jarrad;
    const jFeet = j.y + j.h;
    let best = 1, minDist = Infinity;
    for (const p of this.platforms) {
      const d = Math.abs(jFeet - p.y);
      if (d < minDist) { minDist = d; best = p.level; }
    }
    return best;
  }

  // ─── Pigeon ───────────────────────────────────────────────────────────────

  private snapPigeonToPlatform(): void {
    const plat = this.platforms[this.pigeon.platformIdx];
    const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
    this.pigeon.y = plat.y - 20;
    this.pigeon.x = Math.max(px + 4, Math.min(px + plat.width - 20, this.pigeon.x));
  }

  private updatePigeon(dt: number): void {
    const pg = this.pigeon;
    if (pg.scaredTimer > 0) pg.scaredTimer -= dt;

    if (pg.flying) {
      const dx = pg.flyTargetX - pg.x;
      const dy = pg.flyTargetY - pg.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 10) {
        pg.flying = false;
        this.snapPigeonToPlatform();
      } else {
        const speed = 120;
        pg.x += (dx / dist) * speed * dt;
        pg.y += (dy / dist) * speed * dt;
      }
      return;
    }

    pg.jumpTimer -= dt;
    if (pg.jumpTimer <= 0) {
      const jarradPlatIdx = this.getJarradPlatformIdx();
      const candidates = [1, 2, 3, 4, 5, 6].filter(i => {
        if (i === pg.platformIdx) return false;
        if (i === 5 && this.crumble5AState === 'broken') return false;
        return true;
      });
      const preferred = candidates.filter(i => i !== jarradPlatIdx);
      const pool = preferred.length > 0 ? preferred : candidates;

      const newIdx = pool[Math.floor(Math.random() * pool.length)];
      const newPlat = this.platforms[newIdx];
      const newPx = (newPlat.type === 'moving') ? this.movingPlatX : newPlat.baseX;

      const currentPlatX = (this.platforms[pg.platformIdx].type === 'moving')
        ? this.movingPlatX
        : this.platforms[pg.platformIdx].baseX;
      const crossingGap =
        (currentPlatX < 190 && newPx > 215) ||
        (currentPlatX > 215 && newPx < 190);

      if (crossingGap || Math.random() < 0.3) {
        pg.flying = true;
        pg.platformIdx = newIdx;
        pg.flyTargetX = newPx + 20;
        pg.flyTargetY = newPlat.y - 20;
        pg.jumpTimer = 5 + Math.random() * 3;
      } else {
        pg.platformIdx = newIdx;
        pg.jumpTimer = 5 + Math.random() * 3;
        this.snapPigeonToPlatform();
      }
    }

    if (!pg.flying) {
      const plat = this.platforms[pg.platformIdx];
      const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
      const pr = px + plat.width;

      pg.x += pg.vx * dt;
      if (pg.x <= px + 2)     { pg.x = px + 2;  pg.vx =  60; }
      if (pg.x >= pr - 20)    { pg.x = pr - 20; pg.vx = -60; }
      // Bob Y — sine wave
      pg.y = plat.y - 20 + Math.sin(this.gameTime * 3.5 + pg.platformIdx) * 3;
    }
  }

  private getJarradPlatformIdx(): number {
    const j = this.jarrad;
    const jFeet = j.y + j.h;
    let bestIdx = 0, minDist = Infinity;
    for (let i = 0; i < this.platforms.length; i++) {
      const d = Math.abs(jFeet - this.platforms[i].y);
      if (d < minDist) { minDist = d; bestIdx = i; }
    }
    return bestIdx;
  }

  private checkPigeonCollision(): void {
    const j  = this.jarrad;
    const pg = this.pigeon;
    if (pg.scaredTimer > 0 || pg.flying) return;

    const jarradPlatIdx = this.getJarradPlatformIdx();
    if (jarradPlatIdx !== pg.platformIdx) return;

    const jFeet = j.y + j.h;
    const plat  = this.platforms[pg.platformIdx];
    if (Math.abs(jFeet - plat.y) > 12) return;

    if (j.x < pg.x + 18 && j.x + j.w > pg.x) {
      j.invincTimer = INVINCIBLE_DURATION;
      pg.scaredTimer = 1.5;
      pg.jumpTimer   = 0;
      j.lives--;
      if (j.lives <= 0) {
        j.state = 'dead'; j.deathTimer = 1.2;
        setTimeout(() => {
          if (this.retried) { this.phase = 'result'; this.finishGame(false); }
          else { this.phase = 'lost'; }
        }, 1300);
      }
    }
  }

  // ─── Draw ─────────────────────────────────────────────────────────────────

  private draw(): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, VW, VH);
    this.drawBackground(ctx);
    this.drawRope(ctx);
    this.drawScaffold(ctx);
    this.drawPlatforms(ctx);
    this.drawDropSheet(ctx);
    this.drawGapHint(ctx);
    this.drawWindEffect(ctx);
    this.drawTsuyoshi(ctx);
    this.drawPigeon(ctx);
    this.drawWallDust(ctx);
    this.drawSplatParticles(ctx);
    this.drawJarrad(ctx);
    this.drawHUD(ctx);
    this.drawFlashTexts(ctx);
    this.drawRewindFlash(ctx);

    if (this.phase === 'won')  this.drawWinOverlay(ctx);
    else if (this.phase === 'lost') this.drawLostOverlay(ctx);
  }

  // ─── Draw wall dust ───────────────────────────────────────────────────────

  private drawWallDust(ctx: CanvasRenderingContext2D): void {
    for (const p of this.wallDustParticles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = '#E8E0D0';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ─── Draw splat particles ─────────────────────────────────────────────────

  private drawSplatParticles(ctx: CanvasRenderingContext2D): void {
    for (const p of this.splatParticles) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ─── Draw flash texts (VAULT!, COMBO!) ────────────────────────────────────

  private drawFlashTexts(ctx: CanvasRenderingContext2D): void {
    if (this.vaultFlashTimer > 0) {
      const alpha = Math.min(1, this.vaultFlashTimer / 0.4);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = '#FFFF44';
      ctx.font        = 'bold 28px system-ui, sans-serif';
      ctx.textAlign   = 'center';
      ctx.shadowColor = '#FF8800';
      ctx.shadowBlur  = 8;
      ctx.fillText('VAULT! 🏃', VW / 2, 200);
      ctx.restore();
    }

    if (this.comboFlashTimer > 0) {
      const alpha = Math.min(1, this.comboFlashTimer / 0.5);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = '#FF6600';
      ctx.font        = 'bold 32px system-ui, sans-serif';
      ctx.textAlign   = 'center';
      ctx.shadowColor = '#FFDD00';
      ctx.shadowBlur  = 12;
      ctx.fillText('COMBO! 🔥 +3s', VW / 2, 160);
      ctx.restore();
    }
  }

  // ─── Rewind white flash ───────────────────────────────────────────────────

  private drawRewindFlash(ctx: CanvasRenderingContext2D): void {
    if (this.rewindFlashTimer <= 0) return;
    const alpha = this.rewindFlashTimer / 0.3;
    ctx.save();
    ctx.globalAlpha = alpha * 0.85;
    ctx.fillStyle   = '#FFFFFF';
    ctx.fillRect(0, 0, VW, VH);
    ctx.restore();
  }

  // ─── Background ───────────────────────────────────────────────────────────

  private drawBackground(ctx: CanvasRenderingContext2D): void {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, VH);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(1, '#C5E8F5');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, VW, VH);

    ctx.fillStyle = '#C2BEB6';
    this.roundRect(ctx, 72, 60, 120, 540, 12); ctx.fill();
    ctx.fillStyle = '#CAC6BE';
    this.roundRect(ctx, 212, 60, 120, 540, 12); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    this.roundRect(ctx, 72, 60, 18, 540, 10); ctx.fill();
    this.roundRect(ctx, 212, 60, 18, 540, 10); ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 635, VW, 8);
    const poolGrad = ctx.createLinearGradient(0, 643, 0, VH);
    poolGrad.addColorStop(0, '#48B8C8');
    poolGrad.addColorStop(1, '#2A9AAD');
    ctx.fillStyle = poolGrad;
    ctx.fillRect(0, 643, VW, VH - 643);

    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const y = 660 + i * 8;
      const off = Math.sin(this.gameTime * 2 + i) * 5;
      ctx.beginPath();
      ctx.moveTo(10 + off, y); ctx.lineTo(VW - 10 + off, y);
      ctx.stroke();
    }

    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, 625, VW, 15);
    ctx.fillStyle = '#7A6345';
    ctx.fillRect(0, 627, VW, 4);
  }

  // ─── Rope ─────────────────────────────────────────────────────────────────

  private drawRope(ctx: CanvasRenderingContext2D): void {
    const ax = ROPE_ANCHOR_X;
    const ay = ROPE_ANCHOR_Y;
    const θ  = this.ropeAngle;
    const ex = ax + ROPE_LENGTH * Math.sin(θ);
    const ey = ay + ROPE_LENGTH * Math.cos(θ);

    ctx.save();
    ctx.strokeStyle = '#8B5A2B';
    ctx.lineWidth   = 5;
    ctx.lineCap     = 'round';
    ctx.beginPath();
    const mx = (ax + ex) / 2 + Math.sin(θ) * 10;
    const my = (ay + ey) / 2 + 20;
    ctx.moveTo(ax, ay);
    ctx.quadraticCurveTo(mx, my, ex, ey);
    ctx.stroke();

    ctx.fillStyle   = '#6B4520';
    ctx.strokeStyle = '#4A3010';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.arc(ex, ey, 5, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  // ─── Scaffold ─────────────────────────────────────────────────────────────

  private drawScaffold(ctx: CanvasRenderingContext2D): void {
    const drawTower = (lx: number, rx: number): void => {
      const top = 80, bot = 560;
      ctx.strokeStyle = '#B8B8B8';
      ctx.lineWidth   = 5;
      ctx.beginPath(); ctx.moveTo(lx, top); ctx.lineTo(lx, bot); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(rx, top); ctx.lineTo(rx, bot); ctx.stroke();

      const sectionYs = [80, 185, 270, 360, 450, 540, 560];
      ctx.strokeStyle = '#A0A0A0';
      ctx.lineWidth   = 2;
      for (let i = 0; i < sectionYs.length - 1; i++) {
        const y1 = sectionYs[i];
        const y2 = sectionYs[i + 1];
        ctx.beginPath(); ctx.moveTo(lx, y1); ctx.lineTo(rx, y2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(rx, y1); ctx.lineTo(lx, y2); ctx.stroke();
      }
    };

    drawTower(80, 180);
    drawTower(220, 320);

    this.drawLadder(ctx, 130, 185, 540);
    this.drawLadder(ctx, 270, 185, 360);
  }

  private drawLadder(ctx: CanvasRenderingContext2D, x: number, yTop: number, yBot: number): void {
    ctx.strokeStyle = '#909090';
    ctx.lineWidth   = 2.5;
    ctx.beginPath(); ctx.moveTo(x, yTop); ctx.lineTo(x, yBot); ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#A0A0A0';
    for (let y = yTop; y <= yBot; y += 20) {
      ctx.beginPath(); ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.stroke();
    }
  }

  // ─── Platforms ────────────────────────────────────────────────────────────

  private drawPlatforms(ctx: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.platforms.length; i++) {
      const plat = this.platforms[i];

      if (plat.type === 'crumbling' && this.crumble5AState === 'broken') continue;

      const px0 = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;

      let shakeX = 0;
      if (plat.type === 'crumbling' && this.crumble5AState === 'shaking') {
        shakeX = this.shakeNoise;
      }
      const px = px0 + shakeX;
      const py = plat.y;
      const pw = plat.width;
      const ph = plat.height;

      ctx.save();

      if (plat.type === 'win') {
        const grad = ctx.createLinearGradient(px, py, px + pw, py);
        grad.addColorStop(0, '#FFD700');
        grad.addColorStop(1, '#FFA500');
        ctx.fillStyle = grad;
      } else if (plat.type === 'crumbling') {
        ctx.fillStyle = '#C8A040';
      } else if (plat.type === 'moving') {
        ctx.fillStyle = '#8080D0';
      } else {
        ctx.fillStyle = '#B0B0B0';
      }

      this.roundRect(ctx, px, py, pw, ph, 2);
      ctx.fill();

      ctx.strokeStyle = (plat.type === 'win') ? '#FFE57A' : (plat.type === 'crumbling') ? '#E8C060' : '#D8D8D8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px + 3, py + 1.5);
      ctx.lineTo(px + pw - 3, py + 1.5);
      ctx.stroke();

      if (plat.type === 'crumbling') {
        ctx.strokeStyle = '#7A5010';
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.moveTo(px + 20, py + 1); ctx.lineTo(px + 28, py + 7); ctx.lineTo(px + 35, py + 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px + 55, py + 2); ctx.lineTo(px + 60, py + 7); ctx.lineTo(px + 68, py + 1);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(px + 80, py + 3); ctx.lineTo(px + 87, py + 6); ctx.lineTo(px + 93, py + 1);
        ctx.stroke();
      }

      if (plat.type === 'moving') {
        ctx.strokeStyle = '#F0F080';
        ctx.lineWidth   = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.strokeRect(px, py, pw, ph);
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,255,200,0.7)';
        ctx.font = 'bold 7px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('↔ MOVING', px + pw / 2, py + ph - 1);
      }

      if (plat.type === 'win') {
        ctx.fillStyle = '#333';
        ctx.font = 'bold 9px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🏁 DELIVER', px + pw / 2, py + 6);
      }

      ctx.restore();
    }
  }

  // ─── Drop sheet ───────────────────────────────────────────────────────────

  private drawDropSheet(ctx: CanvasRenderingContext2D): void {
    const { x, y, w, h } = DROP_SHEET;

    ctx.save();
    ctx.fillStyle = '#F0EDE5';
    ctx.strokeStyle = '#C8C0A0';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h - 4);
    ctx.quadraticCurveTo(x + w * 0.75, y + h + 3, x + w * 0.5, y + h);
    ctx.quadraticCurveTo(x + w * 0.25, y + h - 3, x, y + h - 4);
    ctx.closePath();
    ctx.fill(); ctx.stroke();

    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const fx = x + (w / 4) * i;
      ctx.beginPath();
      ctx.moveTo(fx, y);
      ctx.lineTo(fx + 2, y + h - 6);
      ctx.stroke();
    }

    ctx.fillStyle = '#888866';
    ctx.font = 'bold 7px system-ui';
    ctx.textAlign = 'center';
    // Show VAULT hint if moving fast, else DUCK
    ctx.fillText('DUCK ↓ / VAULT →', x + w / 2, y - 3);

    ctx.restore();
  }

  // ─── Gap hint ─────────────────────────────────────────────────────────────

  private drawGapHint(ctx: CanvasRenderingContext2D): void {
    if (!this.showGapHint) return;
    const alpha = Math.min(1, this.gapHintTimer / 2) * Math.abs(Math.sin(this.gameTime * 3));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle   = '#FFEE44';
    ctx.font        = 'bold 11px system-ui';
    ctx.textAlign   = 'center';
    ctx.fillText('→ JUMP! →', 200, 400);
    ctx.strokeStyle = '#FFEE44';
    ctx.lineWidth   = 2;
    ctx.beginPath();
    ctx.moveTo(183, 390); ctx.lineTo(217, 390);
    ctx.moveTo(210, 385); ctx.lineTo(217, 390); ctx.lineTo(210, 395);
    ctx.stroke();
    ctx.restore();
  }

  // ─── Wind effect ──────────────────────────────────────────────────────────

  private drawWindEffect(ctx: CanvasRenderingContext2D): void {
    if (!this.windActive || this.windAlpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.windAlpha * 0.35;
    ctx.strokeStyle = '#AADDFF';
    ctx.lineWidth   = 2;

    for (let i = 0; i < 8; i++) {
      const y = 130 + i * 30 + Math.sin(this.gameTime * 4 + i) * 5;
      const xOff = (this.gameTime * 120) % 60;
      const len  = 30 + Math.random() * 40;
      ctx.beginPath();
      ctx.moveTo(VW - xOff, y);
      ctx.lineTo(VW - xOff - len, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // ─── Tsuyoshi ─────────────────────────────────────────────────────────────

  private drawTsuyoshi(ctx: CanvasRenderingContext2D): void {
    const tx = 90, ty = 605;

    ctx.fillStyle = '#1A1A18';
    ctx.fillRect(tx - 9, ty - 30, 18, 30);

    ctx.fillStyle = '#C8A060';
    ctx.save();
    ctx.translate(tx - 9, ty - 20);
    ctx.rotate(-0.6);
    ctx.fillRect(-4, -18, 7, 20);
    ctx.restore();
    ctx.save();
    ctx.translate(tx + 9, ty - 20);
    ctx.rotate(0.3);
    ctx.fillRect(-3, -16, 7, 18);
    ctx.restore();

    ctx.fillStyle = '#C8A060';
    this.roundRect(ctx, tx - 7, ty - 44, 14, 14, 3); ctx.fill();

    ctx.fillStyle = '#0A0A08';
    ctx.fillRect(tx - 2, ty - 56, 4, 14);
    ctx.fillRect(tx - 1, ty - 62, 2, 8);

    ctx.fillStyle = '#0A0A08';
    ctx.fillRect(tx - 5, ty - 38, 3, 3);
    ctx.fillRect(tx + 2, ty - 38, 3, 3);

    const speech   = this.tsuyoshiSpeech;
    const bubbleX  = tx - 40, bubbleY = ty - 80;
    const bubbleW  = 80, bubbleH = 22;
    ctx.fillStyle  = '#FFFFFFEE';
    this.roundRect(ctx, bubbleX, bubbleY, bubbleW, bubbleH, 6); ctx.fill();
    ctx.strokeStyle = '#CCCCCC'; ctx.lineWidth = 1; ctx.stroke();

    ctx.fillStyle = '#FFFFFFEE';
    ctx.beginPath();
    ctx.moveTo(tx - 5, bubbleY + bubbleH);
    ctx.lineTo(tx + 5, bubbleY + bubbleH);
    ctx.lineTo(tx,     bubbleY + bubbleH + 8);
    ctx.closePath(); ctx.fill();

    ctx.fillStyle = '#333333';
    ctx.font = 'bold 8px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(speech, bubbleX + bubbleW / 2, bubbleY + 15);
  }

  // ─── Jarrad ───────────────────────────────────────────────────────────────

  private drawJarrad(ctx: CanvasRenderingContext2D): void {
    const j = this.jarrad;

    const flashing = j.invincTimer > 0 && Math.floor(j.invincTimer * 10) % 2 === 0;
    if (flashing) ctx.globalAlpha = 0.4;

    if (j.state === 'dead') {
      ctx.save();
      ctx.translate(j.x + j.w / 2, j.y + j.h);
      ctx.rotate(Math.PI / 2);
      this.drawJarradShape(ctx, 0, -NORMAL_H / 2, false, false);
      ctx.fillStyle = 'rgba(70,130,180,0.6)';
      ctx.beginPath(); ctx.arc(-10, 8, 12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(10,  4, 8,  0, Math.PI * 2); ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
      return;
    }

    if (j.state === 'swinging') {
      const ex = ROPE_ANCHOR_X + ROPE_LENGTH * Math.sin(this.ropeAngle) - j.w / 2;
      const ey = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle);
      ctx.save();
      ctx.translate(ex + j.w / 2, ey);
      ctx.rotate(this.ropeAngle * 0.3);
      this.drawJarradShape(ctx, -j.w / 2, -NORMAL_H, false, false);
      ctx.restore();
    } else if (j.state === 'wall-running') {
      // Draw Jarrad tilted 30° toward the wall
      ctx.save();
      ctx.translate(j.x + j.w / 2, j.y + j.h / 2);
      const tiltDir = j.wallRunDir; // 1=right wall, tilt right; -1=left wall, tilt left
      ctx.rotate((Math.PI / 6) * tiltDir); // 30°
      this.drawJarradShape(ctx, -j.w / 2, -j.h / 2, false, false);
      ctx.restore();
    } else if (j.state === 'hanging') {
      // Draw Jarrad upside-down-ish at hanging position
      ctx.save();
      ctx.translate(j.x + j.w / 2, j.y);
      this.drawJarradShape(ctx, -j.w / 2, 0, false, false);
      // Swinging bucket when hanging/shimmying
      const bx = j.w / 2 + 2;
      const by = NORMAL_H * 0.6;
      ctx.save();
      ctx.translate(bx, by);
      const shimBucketAngle = Math.sin(this.gameTime * 4) * 0.3; // swing while hanging
      ctx.rotate(shimBucketAngle + j.bucketAngle);
      ctx.strokeStyle = '#888'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 8); ctx.stroke();
      ctx.fillStyle = '#C49A7A';
      ctx.fillRect(-5, 8, 10, 10);
      ctx.strokeStyle = '#A07050'; ctx.lineWidth = 1;
      ctx.strokeRect(-5, 8, 10, 10);
      ctx.fillStyle = '#F0ECE4';
      ctx.fillRect(-3, 9, 6, 4);
      ctx.restore();
      ctx.restore();
    } else {
      const isRunning = j.state === 'standing' && Math.abs(j.vx) > 10;
      this.drawJarradShape(ctx, j.x, j.y, j.isCrouching, isRunning);
    }

    ctx.globalAlpha = 1;

    // Bucket (only when not swinging or hanging — handled above)
    if (j.state !== 'swinging' && j.state !== 'hanging') {
      const bx = j.x + j.w + 2;
      const by = j.y + (j.isCrouching ? 10 : 20);
      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(j.bucketAngle);
      ctx.strokeStyle = '#888'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 8); ctx.stroke();
      ctx.fillStyle = '#C49A7A';
      ctx.fillRect(-5, 8, 10, 10);
      ctx.strokeStyle = '#A07050'; ctx.lineWidth = 1;
      ctx.strokeRect(-5, 8, 10, 10);
      ctx.fillStyle = '#F0ECE4';
      ctx.fillRect(-3, 9, 6, 4);
      ctx.restore();
    }
  }

  private drawJarradShape(ctx: CanvasRenderingContext2D, x: number, y: number, crouching: boolean, running: boolean): void {
    if (crouching) {
      ctx.fillStyle = '#111111';
      ctx.fillRect(x, y + 8, 18, 14);

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath(); ctx.arc(x + 5, y + 12, 2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(x + 13, y + 16, 2, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#C8A080';
      this.roundRect(ctx, x + 2, y, 14, 12, 3); ctx.fill();

      ctx.fillStyle = '#1E1008';
      ctx.fillRect(x + 1, y - 5, 16, 6);

      ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 1.5;
      ctx.strokeRect(x + 3, y + 3, 4, 3);
      ctx.strokeRect(x + 9, y + 3, 4, 3);

      ctx.fillStyle = '#2A1808';
      ctx.fillRect(x + 4, y + 9, 9, 3);

      ctx.fillStyle = '#2A2A2A';
      ctx.fillRect(x + 1,  y + 22, 7, 5);
      ctx.fillRect(x + 10, y + 22, 7, 5);
      return;
    }

    // Normal Jarrad body
    ctx.fillStyle = '#111111';
    ctx.fillRect(x, y + 14, 18, 30);

    // Plaster splats on body
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath(); ctx.arc(x + 5,  y + 22, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 12, y + 28, 2,   0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 7,  y + 35, 1.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 14, y + 19, 2,   0, Math.PI * 2); ctx.fill();

    // Head
    ctx.fillStyle = '#C8A080';
    this.roundRect(ctx, x + 2, y, 14, 14, 3); ctx.fill();

    // Hair
    ctx.fillStyle = '#1E1008';
    ctx.fillRect(x + 1,  y - 7, 16, 8);
    ctx.fillRect(x + 2,  y - 9, 5, 4);
    ctx.fillRect(x + 10, y - 8, 4, 3);

    // Glasses
    ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 1.5;
    ctx.strokeRect(x + 3, y + 4, 4, 3);
    ctx.strokeRect(x + 9, y + 4, 4, 3);
    ctx.beginPath();
    ctx.moveTo(x + 7, y + 5.5); ctx.lineTo(x + 9, y + 5.5); ctx.stroke();

    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(x + 4,  y + 5, 2, 2);
    ctx.fillRect(x + 10, y + 5, 2, 2);

    // Beard
    ctx.fillStyle = '#2A1808';
    ctx.fillRect(x + 4, y + 10, 9, 4);

    // Legs — alternate every 8 frames when running
    ctx.fillStyle = '#2A2A2A';
    if (running) {
      const legPhase = Math.floor(this.frameCount / 8) % 2 === 0;
      if (legPhase) {
        // Left leg forward
        ctx.fillRect(x + 1,  y + 38, 6, 14);
        ctx.fillRect(x + 11, y + 44, 6, 8);
      } else {
        // Right leg forward
        ctx.fillRect(x + 1,  y + 44, 6, 8);
        ctx.fillRect(x + 11, y + 38, 6, 14);
      }
    } else {
      // Standing legs
      ctx.fillRect(x + 2,  y + 44, 6, 8);
      ctx.fillRect(x + 10, y + 44, 6, 8);
    }
  }

  // ─── Pigeon ───────────────────────────────────────────────────────────────

  private drawPigeon(ctx: CanvasRenderingContext2D): void {
    const pg = this.pigeon;
    const facing = pg.vx >= 0 ? 1 : -1;

    ctx.save();
    ctx.translate(pg.x + 9, pg.y + 10);
    if (facing < 0) ctx.scale(-1, 1);

    ctx.fillStyle = '#888888';
    this.roundRect(ctx, -8, -6, 16, 12, 6); ctx.fill();
    ctx.fillStyle = '#666666';
    this.roundRect(ctx, -6, -4, 12, 6, 4); ctx.fill();

    if (pg.flying) {
      // Flying wing flap
      const flapAng = Math.sin(this.gameTime * 15) * 0.4;
      ctx.save();
      ctx.rotate(flapAng);
      ctx.fillStyle = '#777777';
      ctx.fillRect(-8, -10, 16, 5);
      ctx.restore();
    } else {
      // Walking bob — gentle wing flicker
      const bobAng = Math.sin(this.gameTime * 6) * 0.12;
      ctx.save();
      ctx.rotate(bobAng);
      ctx.fillStyle = '#777777';
      ctx.fillRect(-8, -8, 16, 4);
      ctx.restore();
    }

    // Head
    ctx.fillStyle = '#AAAAAA';
    this.roundRect(ctx, 4, -10, 10, 9, 4); ctx.fill();
    ctx.fillStyle = '#FF4400';
    ctx.beginPath(); ctx.arc(11, -7, 2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.arc(11, -7, 1, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#CC9900';
    ctx.beginPath();
    ctx.moveTo(14, -6); ctx.lineTo(18, -4); ctx.lineTo(14, -3);
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = '#CC9900'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-2, 6); ctx.lineTo(-2, 12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(3, 6);  ctx.lineTo(3, 12);  ctx.stroke();
    ctx.restore();
  }

  // ─── HUD ──────────────────────────────────────────────────────────────────

  private drawHUD(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, 0, VW, 36);

    // Hearts
    ctx.textAlign = 'left';
    for (let i = 0; i < 3; i++) {
      this.drawHeart(ctx, 8 + i * 22, 18, 8, i < this.jarrad.lives ? '#FF4060' : '#555555');
    }

    // Dagger icon (Time Rewind)
    ctx.font = '14px system-ui';
    ctx.textAlign = 'left';
    ctx.globalAlpha = this.jarrad.rewindAvailable ? 1.0 : 0.35;
    ctx.fillText('🗡️', 72, 22);
    ctx.globalAlpha = 1.0;

    // Level
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`LEVEL ${this.jarrad.currentLevel}/6`, VW / 2, 22);

    // Timer
    const mins = Math.floor(this.gameTime / 60);
    const secs = Math.floor(this.gameTime % 60);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`, VW - 8, 22);

    // Wind indicator
    if (this.windActive) {
      ctx.save();
      ctx.globalAlpha = this.windAlpha;
      ctx.font = '14px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText('💨', VW - 8, 35);
      ctx.restore();
    }

    // Wall-run indicator
    if (this.jarrad.state === 'wall-running') {
      ctx.save();
      ctx.fillStyle = '#44FFAA';
      ctx.font = 'bold 11px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('🏃 WALL RUN!', VW / 2, 34);
      ctx.restore();
    }

    // Crumble warning
    if (this.crumble5AState === 'shaking') {
      ctx.save();
      ctx.fillStyle = '#FF8800';
      ctx.font = 'bold 10px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('⚠ PLANK BREAKING!', VW / 2, 34);
      ctx.restore();
    }

    // Combo chain progress dots (when active)
    if (this.comboPhase > 0 && this.comboPhase < 4) {
      ctx.save();
      ctx.textAlign = 'left';
      ctx.font = '9px system-ui';
      ctx.fillStyle = '#AAFFAA';
      const phases = ['↑J', '🤲G', '↔S', '↑P'];
      let cx2 = 4;
      for (let i = 0; i < 4; i++) {
        ctx.globalAlpha = i < this.comboPhase ? 1.0 : 0.3;
        ctx.fillText(phases[i], cx2, VH - 8);
        cx2 += 28;
      }
      ctx.restore();
    }

    this.drawMiniMap(ctx);
  }

  private drawMiniMap(ctx: CanvasRenderingContext2D): void {
    const mmX = VW - 28, mmY = 42, mmW = 22, mmH = 120;

    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    this.roundRect(ctx, mmX - 2, mmY - 2, mmW + 4, mmH + 4, 4);
    ctx.fill();

    const scaleX = mmW / VW;
    const scaleY = mmH / 700;

    for (let i = 0; i < this.platforms.length; i++) {
      const p  = this.platforms[i];
      if (p.type === 'crumbling' && this.crumble5AState === 'broken') continue;
      const px0 = (p.type === 'moving') ? this.movingPlatX : p.baseX;
      const mx  = mmX + px0 * scaleX;
      const my  = mmY + p.y * scaleY;
      const mw  = p.width * scaleX;

      let colour = '#A0A0A0';
      if (p.type === 'win')       colour = '#FFD700';
      if (p.type === 'crumbling') colour = '#C8A040';
      if (p.type === 'moving')    colour = '#8080D0';

      ctx.fillStyle = colour;
      ctx.fillRect(mx, my, Math.max(mw, 2), 2);
    }

    const j = this.jarrad;
    const jmx = mmX + (j.x + j.w / 2) * scaleX;
    const jmy = mmY + (j.y + j.h)      * scaleY;
    ctx.fillStyle = '#00FF88';
    ctx.beginPath(); ctx.arc(jmx, jmy, 2.5, 0, Math.PI * 2); ctx.fill();
  }

  private drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, colour: string): void {
    ctx.fillStyle = colour;
    ctx.beginPath();
    ctx.moveTo(x, y + r * 0.4);
    ctx.bezierCurveTo(x, y - r * 0.6, x - r * 1.2, y - r * 0.6, x - r * 1.2, y);
    ctx.bezierCurveTo(x - r * 1.2, y + r * 0.7, x, y + r * 1.2, x, y + r * 1.4);
    ctx.bezierCurveTo(x, y + r * 1.2, x + r * 1.2, y + r * 0.7, x + r * 1.2, y);
    ctx.bezierCurveTo(x + r * 1.2, y - r * 0.6, x, y - r * 0.6, x, y + r * 0.4);
    ctx.closePath();
    ctx.fill();
  }

  // ─── Win/Lost overlays ───────────────────────────────────────────────────

  private drawWinOverlay(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.fillRect(0, 0, VW, VH);
    ctx.textAlign = 'center';
    ctx.font = 'bold 52px system-ui';
    ctx.fillStyle = '#FFD700';
    ctx.fillText('🪣 DELIVERED!', VW / 2, VH / 2 - 40);
    ctx.font = 'bold 22px system-ui';
    ctx.fillStyle = '#5EDB7D';
    ctx.fillText('🏆 Bucket reached the top!', VW / 2, VH / 2 + 10);
  }

  private drawLostOverlay(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'rgba(0,0,0,0.80)';
    ctx.fillRect(0, 0, VW, VH);
    ctx.textAlign = 'center';
    ctx.font = 'bold 48px system-ui';
    ctx.fillStyle = '#F07070';
    ctx.fillText('💦 SPLAT!', VW / 2, VH / 2 - 60);
    ctx.font = 'bold 16px system-ui';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText("Jarrad's in the pool.", VW / 2, VH / 2 - 20);

    if (!this.retried) {
      ctx.fillStyle = '#C1666B';
      this.roundRect(ctx, VW / 2 - 70, VH / 2 + 10, 140, 44, 10); ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px system-ui';
      ctx.fillText('🔄 RETRY', VW / 2, VH / 2 + 38);

      const handler = (e: MouseEvent | TouchEvent) => {
        const rect = this.canvas!.getBoundingClientRect();
        let cx: number, cy: number;
        if (e instanceof MouseEvent) {
          cx = (e.clientX - rect.left) * (VW / rect.width);
          cy = (e.clientY - rect.top)  * (VH / rect.height);
        } else {
          cx = (e.changedTouches[0].clientX - rect.left) * (VW / rect.width);
          cy = (e.changedTouches[0].clientY - rect.top)  * (VH / rect.height);
        }
        if (cx > VW / 2 - 70 && cx < VW / 2 + 70 && cy > VH / 2 + 10 && cy < VH / 2 + 54) {
          this.canvas!.removeEventListener('click',    handler as EventListener);
          this.canvas!.removeEventListener('touchend', handler as EventListener);
          this.retried    = true;
          this.jarrad.lives = 3;
          this.initGame();
        }
      };
      this.canvas?.addEventListener('click',    handler as EventListener, { once: false });
      this.canvas?.addEventListener('touchend', handler as EventListener, { once: false });
    }
  }

  // ─── Finish game ──────────────────────────────────────────────────────────

  private finishGame(won: boolean): void {
    this.phase = 'result';
    const lives = this.jarrad.lives;
    let score: number, qualityPct: number, message: string;

    if (won) {
      if (lives >= 3)      { score = 100; qualityPct = 1.0; message = "Jarrad didn't spill a drop. Tsuyoshi's still shaking though."; }
      else if (lives === 2){ score = 80;  qualityPct = 0.8; message = "A pigeon got involved. Classic site visit."; }
      else                 { score = 60;  qualityPct = 0.6; message = "The bucket made it. Jarrad's ego didn't."; }
    } else {
      score = 0; qualityPct = 0;
      message = "Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way.";
    }

    if (this.ctx) this.drawResultScreen(this.ctx, won, score, message);
    setTimeout(() => this.onComplete?.({ score, qualityPct, message }), 3000);
  }

  private drawResultScreen(ctx: CanvasRenderingContext2D, won: boolean, score: number, message: string): void {
    ctx.fillStyle = 'rgba(0,0,0,0.82)';
    ctx.fillRect(0, 0, VW, VH);
    ctx.textAlign = 'center';
    ctx.font = '72px system-ui';
    ctx.fillText(won ? '🏆' : '💀', VW / 2, VH / 2 - 90);
    const colour = score >= 75 ? '#5EDB7D' : score >= 50 ? '#F7C948' : '#F07070';
    ctx.fillStyle = colour;
    ctx.font = 'bold 64px system-ui, sans-serif';
    ctx.fillText(`${score}%`, VW / 2, VH / 2 - 10);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '15px system-ui, sans-serif';
    this.wrapText(ctx, message, VW / 2, VH / 2 + 40, 340, 22);
  }

  private wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): void {
    const words = text.split(' ');
    let line = '', curY = y;
    for (const word of words) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > maxWidth && line !== '') {
        ctx.fillText(line, x, curY);
        line = word + ' ';
        curY += lineHeight;
      } else { line = test; }
    }
    ctx.fillText(line, x, curY);
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
}
