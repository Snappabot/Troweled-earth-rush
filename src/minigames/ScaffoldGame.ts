/**
 * ScaffoldGame — "Climb The Scaffold" BTC Bonus Mini-Game
 *
 * Jarrad starts at the BOTTOM and climbs 5 scaffold platforms to the TOP.
 * Connie + Phil drop coloured plaster blobs down from the top.
 * Catching blobs on the way up = partial BTC bonus per catch.
 * Reaching the top (floor 5) = full bonus payout.
 * Partial height = partial payout. 30-second timer.
 */

import type { MiniGameResult } from './MiniGameManager';
import type { PlayerCharacter } from '../ui/CharacterCreator';

// ── Public result interface ───────────────────────────────────────────────────
export interface ScaffoldResult {
  won: boolean;
  bonusSats: number;
}

// ── Blob colour palette (Marbellino) ─────────────────────────────────────────
const BLOB_COLORS  = ['#F5E6C8', '#D4906A', '#A8B898', '#C07850', '#6BAED6'] as const;
const BLOB_VALUES  = [2000, 3000, 5000, 8000, 10_000];
const BLOB_WEIGHTS = [35, 28, 18, 12, 7];

function pickBlobIdx(): number {
  const total = BLOB_WEIGHTS.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < BLOB_WEIGHTS.length; i++) {
    r -= BLOB_WEIGHTS[i];
    if (r <= 0) return i;
  }
  return 0;
}

// ── Constants ─────────────────────────────────────────────────────────────────
const TOTAL_FLOORS   = 5;          // platforms (1 = lowest, 5 = top = goal)
const BASE_PAYOUT    = 50_000;     // sats at 100% height
const GAME_TIME      = 30;         // seconds
const CLIMB_DURATION = 0.42;       // seconds per floor transition
const BLOB_CATCH_R   = 40;         // pixel radius for catch detection
const PLAYER_SPEED   = 260;        // px/s horizontal on platform

// ── Blob object ───────────────────────────────────────────────────────────────
interface Blob {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  colorIdx: number;
  spin: number;
  caught: boolean;
  dead: boolean;
}

// ── Visual effects ────────────────────────────────────────────────────────────
interface FloatingText {
  x: number; y: number;
  text: string;
  age: number;
  maxAge: number;
  color: string;
}

interface BurstRing {
  x: number; y: number;
  r: number;
  maxR: number;
  age: number;
  maxAge: number;
  color: string;
}

// ── Rounded-rect helper (avoids lib.dom roundRect compat issues) ──────────────
function rrect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, radius: number
): void {
  const r = Math.min(radius, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y,         x + w, y + r,         r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h,     x + w - r, y + h,     r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x,      y + h,    x,         y + h - r,  r);
  ctx.lineTo(x,     y + r);
  ctx.arcTo(x,      y,        x + r,     y,           r);
  ctx.closePath();
}

// ── Main class ────────────────────────────────────────────────────────────────
export class ScaffoldGame {
  private overlay!: HTMLDivElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private rafId = 0;
  private lastTs = 0;

  // Layout (recomputed on resize)
  private ww = 0;
  private hh = 0;
  private scaffoldTop    = 0;
  private scaffoldBottom = 0;
  private scaffoldLeft   = 0;
  private scaffoldRight  = 0;
  private connieX        = 0;
  private philX          = 0;
  private floorYs: number[] = [];  // index 0 = ground, 1–5 = platforms

  // Game state
  private gameOver   = false;
  private timer      = GAME_TIME;
  private catchSats  = 0;
  private catchCount = 0;

  // Player
  private playerX    = 0;          // horizontal centre
  private playerFloor = 0;         // 0 = ground, 1–5 = platforms
  private playerY    = 0;          // current draw Y (feet), interpolated while climbing
  private playerVX   = 0;

  // Climbing animation
  private isClimbing    = false;
  private climbProgress = 0;       // 0 → 1
  private climbFromY    = 0;
  private climbToY      = 0;
  private climbQueued   = false;

  // Throw animations
  private connieThrowing = false;
  private philThrowing   = false;
  private connieThrowAge = 0;
  private philThrowAge   = 0;

  // Blobs
  private blobs: Blob[] = [];
  private nextDrop = 0;
  private dropSide = 0;

  // VFX
  private floatingTexts: FloatingText[] = [];
  private bursts: BurstRing[] = [];

  // Controls
  private moveLeft   = false;
  private moveRight  = false;

  // Callback
  private onCompleteFn!: (r: MiniGameResult) => void;

  // Player character customisation
  private playerChar: PlayerCharacter | null = null;
  setPlayerChar(pc: PlayerCharacter): void { this.playerChar = pc; }

  // ── Entry point ──────────────────────────────────────────────────────────────
  start(onComplete: (r: MiniGameResult) => void): void {
    this.onCompleteFn = onComplete;
    this._createOverlay();
    this._computeLayout();
    this._buildButtons();
    this.nextDrop = 0.6 + Math.random() * 0.4;
    this.lastTs   = performance.now();
    this.rafId    = requestAnimationFrame(ts => this._loop(ts));
  }

  // ── Overlay + canvas ─────────────────────────────────────────────────────────
  private _createOverlay(): void {
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#0d1117;
    `;
    document.body.appendChild(this.overlay);

    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
    this.overlay.appendChild(this.canvas);

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('No 2D context');
    this.ctx = ctx;

    const onResize = () => {
      this.canvas.width  = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this._computeLayout();
    };
    onResize();
    window.addEventListener('resize', onResize);
    this.overlay.addEventListener('_remove', () => window.removeEventListener('resize', onResize));

    // SKIP button — top-right, gold
    const skip = document.createElement('button');
    skip.textContent = 'SKIP ▶';
    skip.style.cssText = `
      position:absolute; top:14px; right:14px; z-index:101;
      background:#8B6914; color:#FFD700; border:2px solid #FFD700;
      border-radius:10px; padding:10px 18px;
      font-size:13px; font-weight:900; font-family:system-ui,sans-serif;
      cursor:pointer; touch-action:manipulation; min-height:44px;
    `;
    skip.addEventListener('click', () => this._end());
    this.overlay.appendChild(skip);
  }

  // ── Layout computation ───────────────────────────────────────────────────────
  private _computeLayout(): void {
    this.ww            = window.innerWidth;
    this.hh            = window.innerHeight;
    this.scaffoldTop   = this.hh * 0.09;
    this.scaffoldBottom = this.hh * 0.87;
    this.scaffoldLeft  = this.ww * 0.07;
    this.scaffoldRight = this.ww * 0.93;
    this.connieX       = this.ww * 0.30;
    this.philX         = this.ww * 0.70;

    // Floor Y positions: 0 = ground/start, 1–5 = platforms
    // Task spec: platforms at 20%, 36%, 52%, 68%, 84% from bottom
    const scaffH = this.scaffoldBottom - this.scaffoldTop;
    const pcts   = [0, 0.20, 0.36, 0.52, 0.68, 0.84];  // index 0 = ground
    this.floorYs = pcts.map(p => this.scaffoldBottom - scaffH * p);

    // Initialise player on ground if not yet set
    if (this.playerX === 0) {
      this.playerX = this.ww * 0.50;
    }
    this.playerY = this.floorYs[this.playerFloor];
  }

  // ── Button bar ───────────────────────────────────────────────────────────────
  private _buildButtons(): void {
    const bar = document.createElement('div');
    bar.style.cssText = `
      position:absolute; bottom:0; left:0; right:0; z-index:100;
      display:flex; align-items:stretch; justify-content:space-between;
      padding:8px 12px 14px; gap:8px;
    `;

    const mkBtn = (label: string, bgColor: string, flex: number) => {
      const b = document.createElement('button');
      b.innerHTML = label;
      b.style.cssText = `
        flex:${flex}; min-height:68px; border:none; border-radius:14px;
        font-size:20px; font-weight:900; color:#fff; cursor:pointer;
        touch-action:manipulation; user-select:none;
        background:${bgColor};
        box-shadow:0 3px 10px rgba(0,0,0,0.45);
        font-family:system-ui,sans-serif;
      `;
      return b;
    };

    const leftBtn  = mkBtn('◀',        'rgba(30,30,60,0.92)',  2);
    const climbBtn = mkBtn('CLIMB ▲',  'rgba(0,110,50,0.95)', 3);
    const rightBtn = mkBtn('▶',        'rgba(30,30,60,0.92)',  2);

    // Hold-to-move
    const hold = (el: HTMLElement, on: () => void, off: () => void) => {
      el.addEventListener('touchstart',  e => { e.preventDefault(); on();  }, { passive: false });
      el.addEventListener('touchend',    e => { e.preventDefault(); off(); }, { passive: false });
      el.addEventListener('touchcancel', e => { e.preventDefault(); off(); }, { passive: false });
      el.addEventListener('mousedown', on);
      el.addEventListener('mouseup',   off);
      el.addEventListener('mouseleave', off);
    };

    hold(leftBtn,  () => { this.moveLeft  = true;  }, () => { this.moveLeft  = false; });
    hold(rightBtn, () => { this.moveRight = true;  }, () => { this.moveRight = false; });

    // Climb: each tap queues one floor climb
    const doClimb = (e: Event) => { e.preventDefault(); this.climbQueued = true; };
    climbBtn.addEventListener('touchstart', doClimb, { passive: false });
    climbBtn.addEventListener('mousedown',  doClimb);

    bar.appendChild(leftBtn);
    bar.appendChild(climbBtn);
    bar.appendChild(rightBtn);
    this.overlay.appendChild(bar);

    // Keyboard support
    const kd = (e: KeyboardEvent) => {
      if (['ArrowLeft',  'KeyA'].includes(e.code)) this.moveLeft   = true;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.moveRight  = true;
      if (['ArrowUp', 'KeyW', 'Space', 'KeyZ'].includes(e.code)) this.climbQueued = true;
    };
    const ku = (e: KeyboardEvent) => {
      if (['ArrowLeft',  'KeyA'].includes(e.code)) this.moveLeft  = false;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.moveRight = false;
    };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup',   ku);
    this.overlay.addEventListener('_remove', () => {
      window.removeEventListener('keydown', kd);
      window.removeEventListener('keyup',   ku);
    });
  }

  // ── Game loop ─────────────────────────────────────────────────────────────────
  private _loop(ts: number): void {
    if (this.gameOver) return;
    this.rafId = requestAnimationFrame(t => this._loop(t));
    const dt   = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    this._update(dt);
    this._render();
    this.climbQueued = false;
  }

  // ── Update ────────────────────────────────────────────────────────────────────
  private _update(dt: number): void {
    // ── Timer ──────────────────────────────────────────────────────────────────
    this.timer = Math.max(0, this.timer - dt);
    if (this.timer <= 0) { this._end(); return; }

    // ── Climbing animation ─────────────────────────────────────────────────────
    if (this.isClimbing) {
      this.climbProgress += dt / CLIMB_DURATION;
      if (this.climbProgress >= 1) {
        this.climbProgress  = 1;
        this.isClimbing     = false;
        this.playerY        = this.climbToY;
        // Win check: reached top floor
        if (this.playerFloor >= TOTAL_FLOORS) {
          this._end();
          return;
        }
      } else {
        // Smooth ease-in-out interpolation
        const t = this.climbProgress;
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        this.playerY = this.climbFromY + (this.climbToY - this.climbFromY) * ease;
      }
    } else {
      // ── Initiate climb if queued ──────────────────────────────────────────
      if (this.climbQueued && this.playerFloor < TOTAL_FLOORS) {
        this.playerFloor++;
        this.isClimbing    = true;
        this.climbProgress = 0;
        this.climbFromY    = this.floorYs[this.playerFloor - 1];
        this.climbToY      = this.floorYs[this.playerFloor];
      }
    }

    // ── Horizontal movement ────────────────────────────────────────────────────
    if (this.moveLeft)       this.playerVX = -PLAYER_SPEED;
    else if (this.moveRight) this.playerVX =  PLAYER_SPEED;
    else                     this.playerVX  = 0;

    this.playerX += this.playerVX * dt;
    const halfW = 14;
    this.playerX = Math.max(this.scaffoldLeft + halfW,
                   Math.min(this.scaffoldRight - halfW, this.playerX));

    // ── Throw animations ───────────────────────────────────────────────────────
    this.connieThrowAge += dt;
    this.philThrowAge   += dt;
    if (this.connieThrowing && this.connieThrowAge > 0.3) this.connieThrowing = false;
    if (this.philThrowing   && this.philThrowAge   > 0.3) this.philThrowing   = false;

    // ── Blob spawning ──────────────────────────────────────────────────────────
    this.nextDrop -= dt;
    if (this.nextDrop <= 0 && this.blobs.length < 14) {
      this._spawnBlob();
      this.nextDrop = 0.40 + Math.random() * 0.22;
    }

    // ── Blob physics + catch detection ─────────────────────────────────────────
    const blobGravity = this.hh * 0.17;   // scale with screen height
    for (const b of this.blobs) {
      if (b.dead) continue;
      b.vy  += blobGravity * dt;
      b.x   += b.vx * dt;
      b.y   += b.vy * dt;
      b.spin += 2.2 * dt;
      if (b.y > this.scaffoldBottom + 50) { b.dead = true; continue; }

      // Catch: distance from player centre
      const playerCY = this.playerY - this.hh * 0.032;   // slightly above feet
      const dx = b.x - this.playerX;
      const dy = b.y - playerCY;
      if (Math.sqrt(dx * dx + dy * dy) < BLOB_CATCH_R + b.r) {
        b.dead     = true;
        const sats = BLOB_VALUES[b.colorIdx];
        this.catchSats += sats;
        this.catchCount++;
        const label = sats >= 1000 ? `+${sats / 1000}K sats ₿` : `+${sats} sats ₿`;
        this.floatingTexts.push({
          x: b.x, y: b.y,
          text: label,
          age: 0, maxAge: 1.2,
          color: BLOB_COLORS[b.colorIdx],
        });
        this.bursts.push({
          x: b.x, y: b.y,
          r: b.r, maxR: b.r * 3.8,
          age: 0, maxAge: 0.38,
          color: BLOB_COLORS[b.colorIdx],
        });
      }
    }
    this.blobs = this.blobs.filter(b => !b.dead);

    // ── VFX aging ─────────────────────────────────────────────────────────────
    for (const ft of this.floatingTexts) ft.age += dt;
    this.floatingTexts = this.floatingTexts.filter(ft => ft.age < ft.maxAge);
    for (const bst of this.bursts)        bst.age += dt;
    this.bursts = this.bursts.filter(bst => bst.age < bst.maxAge);
  }

  // ── Spawn blob ────────────────────────────────────────────────────────────────
  private _spawnBlob(): void {
    const isConnie = this.dropSide === 0;
    this.dropSide  = 1 - this.dropSide;

    if (isConnie) { this.connieThrowing = true; this.connieThrowAge = 0; }
    else          { this.philThrowing   = true; this.philThrowAge   = 0; }

    const centreX = isConnie ? this.connieX : this.philX;
    const x = centreX + (Math.random() - 0.5) * this.ww * 0.22;
    const y = this.scaffoldTop + 18;

    const initVY = this.hh * (0.048 + Math.random() * 0.024);  // ~38–57 px/s at 800px
    const driftX = (Math.random() - 0.5) * 60;
    const r      = 11 + Math.random() * 6;

    this.blobs.push({
      x, y, vx: driftX, vy: initVY,
      r, colorIdx: pickBlobIdx(),
      spin: Math.random() * Math.PI * 2,
      caught: false, dead: false,
    });
  }

  // ── Render ────────────────────────────────────────────────────────────────────
  private _render(): void {
    const { ctx, ww, hh } = this;
    ctx.clearRect(0, 0, ww, hh);
    this._drawBackground();
    this._drawScaffold();
    this._drawCharacters();
    this._drawBlobs();
    this._drawBursts();
    this._drawPlayer();
    this._drawFloatingTexts();
    this._drawHUD();
  }

  // ── Background ────────────────────────────────────────────────────────────────
  private _drawBackground(): void {
    const { ctx, ww, hh } = this;

    // Night sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, this.scaffoldBottom);
    sky.addColorStop(0,   '#0a0f1a');
    sky.addColorStop(0.5, '#0d1f3c');
    sky.addColorStop(1,   '#162a4a');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, ww, this.scaffoldBottom);

    // Ground strip
    const gnd = ctx.createLinearGradient(0, this.scaffoldBottom, 0, hh);
    gnd.addColorStop(0, '#252a18');
    gnd.addColorStop(1, '#161810');
    ctx.fillStyle = gnd;
    ctx.fillRect(0, this.scaffoldBottom, ww, hh - this.scaffoldBottom);

    // Ground line
    ctx.strokeStyle = '#3a4020';
    ctx.lineWidth   = 3;
    ctx.beginPath();
    ctx.moveTo(0, this.scaffoldBottom);
    ctx.lineTo(ww, this.scaffoldBottom);
    ctx.stroke();

    // Static stars
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    const sx = [0.06,0.18,0.31,0.44,0.57,0.68,0.79,0.89,0.12,0.25,0.50,0.75,0.93,0.38,0.62];
    const sy = [0.04,0.11,0.06,0.14,0.03,0.09,0.05,0.12,0.18,0.08,0.15,0.07,0.10,0.17,0.02];
    for (let i = 0; i < sx.length; i++) {
      ctx.beginPath();
      ctx.arc(sx[i] * ww, sy[i] * this.scaffoldTop * 5, 0.7 + (i % 3) * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ── Scaffold structure ────────────────────────────────────────────────────────
  private _drawScaffold(): void {
    const { ctx, ww } = this;
    const sl   = this.scaffoldLeft;
    const sr   = this.scaffoldRight;
    const topY = this.scaffoldTop;
    const botY = this.scaffoldBottom;

    // ── Vertical poles (outer + 2 inner) ─────────────────────────────────────
    const poles = [sl, ww * 0.28, ww * 0.50, ww * 0.72, sr];
    ctx.fillStyle = '#3e3e52';
    for (const px of poles) {
      ctx.fillRect(px - 5, topY, 10, botY - topY);
    }

    // ── Cross-bracing (diagonal lines between adjacent poles) ─────────────────
    ctx.strokeStyle = '#2e2e40';
    ctx.lineWidth   = 2.5;
    const sections = 5;
    const sectionH = (botY - topY) / sections;
    for (let s = 0; s < sections; s++) {
      const y0 = topY + s * sectionH;
      const y1 = topY + (s + 1) * sectionH;
      // Draw X bracing between outer poles only for visual clarity
      ctx.beginPath(); ctx.moveTo(sl, y0); ctx.lineTo(sr, y1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(sr, y0); ctx.lineTo(sl, y1); ctx.stroke();
    }

    // ── Horizontal crossbeams ─────────────────────────────────────────────────
    ctx.fillStyle = '#3e3e52';
    for (let s = 0; s <= sections; s++) {
      const by = topY + s * sectionH;
      ctx.fillRect(sl - 4, by - 3, sr - sl + 8, 6);
    }

    // ── Platforms (5 wooden planks) ───────────────────────────────────────────
    for (let f = 1; f <= TOTAL_FLOORS; f++) {
      const py = this.floorYs[f];
      this._drawPlatform(py, f === TOTAL_FLOORS);
    }

    // ── Top platform (Connie + Phil stand here) ───────────────────────────────
    ctx.fillStyle = '#5c5c3a';
    ctx.fillRect(sl - 6, topY - 12, sr - sl + 12, 15);
    ctx.strokeStyle = '#7a7a50';
    ctx.lineWidth   = 1.5;
    ctx.beginPath(); ctx.moveTo(sl - 6, topY - 12); ctx.lineTo(sr + 6, topY - 12); ctx.stroke();

    // ── Ground plank ──────────────────────────────────────────────────────────
    ctx.fillStyle = '#3a3020';
    ctx.fillRect(sl, this.scaffoldBottom, sr - sl, 20);
  }

  private _drawPlatform(y: number, isGoal: boolean): void {
    const { ctx } = this;
    const sl = this.scaffoldLeft;
    const sr = this.scaffoldRight;
    const pw = sr - sl;
    const ph = 14;

    // Plank colour
    ctx.fillStyle = isGoal ? '#7a6010' : '#4a3618';
    ctx.fillRect(sl, y - ph, pw, ph);

    // Plank grain lines
    ctx.strokeStyle = isGoal ? '#9a8020' : '#3a2810';
    ctx.lineWidth   = 1;
    const grainStep = pw / 7;
    for (let gx = sl + grainStep; gx < sr; gx += grainStep) {
      ctx.beginPath();
      ctx.moveTo(gx, y - ph);
      ctx.lineTo(gx, y);
      ctx.stroke();
    }

    // Goal platform: gold glow edge
    if (isGoal) {
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth   = 2;
      ctx.beginPath();
      ctx.moveTo(sl, y - ph);
      ctx.lineTo(sr, y - ph);
      ctx.stroke();
    }
  }

  // ── Characters ────────────────────────────────────────────────────────────────
  private _drawCharacters(): void {
    // Connie (left) and Phil (right) stand on the top platform
    const feetY = this.scaffoldTop - 2;
    this._drawConnie(this.connieX, feetY);
    this._drawPhil(this.philX,    feetY);

    const { ctx } = this;
    const fontSize = Math.max(11, Math.round(this.hh * 0.018));
    ctx.font      = `bold ${fontSize}px system-ui,sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFD700';
    ctx.fillText('CONNIE', this.connieX, this.scaffoldTop - 42);
    ctx.fillText('PHIL',   this.philX,   this.scaffoldTop - 42);
  }

  private _drawConnie(cx: number, feetY: number): void {
    const { ctx } = this;
    const h  = this.hh * 0.050;
    const hw = h * 0.27;
    const throwOff = this.connieThrowing ? -h * 0.16 : 0;

    // Legs
    ctx.fillStyle = '#2a1a2e';
    ctx.fillRect(cx - hw * 0.65, feetY - h * 0.36, hw * 0.52, h * 0.36);
    ctx.fillRect(cx + hw * 0.13, feetY - h * 0.36, hw * 0.52, h * 0.36);
    // Dress
    ctx.fillStyle = '#7a3858';
    ctx.beginPath();
    ctx.moveTo(cx - hw * 0.80, feetY - h * 0.36);
    ctx.lineTo(cx + hw * 0.80, feetY - h * 0.36);
    ctx.lineTo(cx + hw * 0.55, feetY - h * 0.70);
    ctx.lineTo(cx - hw * 0.55, feetY - h * 0.70);
    ctx.fill();
    // Torso
    ctx.fillStyle = '#c06888';
    ctx.fillRect(cx - hw * 0.48, feetY - h * 0.86, hw * 0.96, h * 0.18);
    // Throwing arm
    ctx.fillStyle = '#d4906a';
    ctx.beginPath();
    ctx.ellipse(cx + hw * 0.62, feetY - h * 0.78 + throwOff, hw * 0.17, hw * 0.36, throwOff * 2, 0, Math.PI * 2);
    ctx.fill();
    // Head
    ctx.fillStyle = '#d4906a';
    ctx.beginPath();
    ctx.ellipse(cx, feetY - h * 0.98, hw * 0.42, hw * 0.48, 0, 0, Math.PI * 2);
    ctx.fill();
    // Hair
    ctx.fillStyle = '#c4bab0';
    ctx.beginPath();
    ctx.ellipse(cx, feetY - h * 1.04, hw * 0.44, hw * 0.30, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    // Bionic glow
    ctx.fillStyle = 'rgba(255,180,0,0.55)';
    ctx.beginPath();
    ctx.arc(cx + hw * 0.62, feetY - h * 0.48, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  private _drawPhil(cx: number, feetY: number): void {
    const { ctx } = this;
    const h  = this.hh * 0.050;
    const hw = h * 0.27;
    const throwOff = this.philThrowing ? -h * 0.16 : 0;

    // Boots
    ctx.fillStyle = '#141010';
    ctx.fillRect(cx - hw * 0.68, feetY - h * 0.13, hw * 0.52, h * 0.13);
    ctx.fillRect(cx + hw * 0.16, feetY - h * 0.13, hw * 0.52, h * 0.13);
    // Legs
    ctx.fillStyle = '#1a2040';
    ctx.fillRect(cx - hw * 0.62, feetY - h * 0.44, hw * 0.52, h * 0.31);
    ctx.fillRect(cx + hw * 0.10, feetY - h * 0.44, hw * 0.52, h * 0.31);
    // Body (hi-vis)
    ctx.fillStyle = '#aaba18';
    ctx.fillRect(cx - hw * 0.62, feetY - h * 0.76, hw * 1.24, h * 0.32);
    // Throwing arm
    ctx.fillStyle = '#aaba18';
    ctx.beginPath();
    ctx.ellipse(cx - hw * 0.76, feetY - h * 0.66 + throwOff, hw * 0.18, hw * 0.38, throwOff * 2, 0, Math.PI * 2);
    ctx.fill();
    // Head
    ctx.fillStyle = '#c4906a';
    ctx.beginPath();
    ctx.ellipse(cx, feetY - h * 0.94, hw * 0.42, hw * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();
    // Hard hat
    ctx.fillStyle = '#f08000';
    ctx.beginPath();
    ctx.ellipse(cx, feetY - h * 1.06, hw * 0.48, hw * 0.22, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(cx - hw * 0.54, feetY - h * 1.06, hw * 1.08, hw * 0.15);
    // Glasses
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth   = 1.5;
    ctx.strokeRect(cx - hw * 0.30, feetY - h * 0.90, hw * 0.26, hw * 0.19);
    ctx.strokeRect(cx + hw * 0.04, feetY - h * 0.90, hw * 0.26, hw * 0.19);
    ctx.beginPath();
    ctx.moveTo(cx - hw * 0.04, feetY - h * 0.83);
    ctx.lineTo(cx + hw * 0.04, feetY - h * 0.83);
    ctx.stroke();
  }

  // ── Blobs ─────────────────────────────────────────────────────────────────────
  private _drawBlobs(): void {
    const { ctx } = this;
    for (const b of this.blobs) {
      if (b.dead) continue;
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.spin);

      // Main blob body (slightly irregular)
      ctx.fillStyle = BLOB_COLORS[b.colorIdx];
      ctx.beginPath();
      const r = b.r;
      ctx.moveTo(r * 1.1, 0);
      ctx.bezierCurveTo(r * 1.1, r * 0.6,  r * 0.6,  r * 1.15,  0, r * 1.15);
      ctx.bezierCurveTo(-r * 0.6, r * 1.15, -r * 1.1, r * 0.6, -r * 1.1, 0);
      ctx.bezierCurveTo(-r * 1.1, -r * 0.6, -r * 0.6, -r * 1.15, 0, -r * 1.15);
      ctx.bezierCurveTo(r * 0.6, -r * 1.15, r * 1.1, -r * 0.6,  r * 1.1, 0);
      ctx.fill();

      // Highlight
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      ctx.beginPath();
      ctx.ellipse(-r * 0.26, -r * 0.30, r * 0.28, r * 0.18, -0.5, 0, Math.PI * 2);
      ctx.fill();

      // Ring for rare blobs
      if (b.colorIdx >= 3) {
        ctx.strokeStyle = b.colorIdx === 4 ? '#FFD700' : '#E8A040';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, r * 1.28, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  // ── Burst rings ───────────────────────────────────────────────────────────────
  private _drawBursts(): void {
    const { ctx } = this;
    for (const bst of this.bursts) {
      const t      = bst.age / bst.maxAge;
      const radius = bst.r + (bst.maxR - bst.r) * t;
      ctx.globalAlpha = (1 - t) * 0.85;
      ctx.strokeStyle = bst.color;
      ctx.lineWidth   = 3 * (1 - t * 0.5);
      ctx.beginPath();
      ctx.arc(bst.x, bst.y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }

  // ── Player (Jarrad silhouette) ────────────────────────────────────────────────
  private _drawPlayer(): void {
    const { ctx, hh } = this;
    const cx  = this.playerX;
    const cy  = this.playerY;           // feet Y
    const h   = hh * 0.065;            // ~52px at 800px screen
    const hw  = h * 0.26;
    const facingRight = this.playerVX >= 0;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(facingRight ? 1 : -1, 1);

    // Boots
    ctx.fillStyle = '#080808';
    ctx.fillRect(-hw * 0.74, -h * 0.13, hw * 0.58, h * 0.13);
    ctx.fillRect(hw * 0.16,  -h * 0.13, hw * 0.58, h * 0.13);

    // Pants
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(-hw * 0.64, -h * 0.46, hw * 0.50, h * 0.33);
    ctx.fillRect(hw * 0.14,  -h * 0.46, hw * 0.50, h * 0.33);

    // Belt
    ctx.fillStyle = '#3a2a14';
    ctx.fillRect(-hw * 0.64, -h * 0.49, hw * 1.28, h * 0.06);

    // Black TEM shirt
    ctx.fillStyle = '#111111';
    ctx.fillRect(-hw * 0.70, -h * 0.80, hw * 1.40, h * 0.34);

    // Arms
    ctx.fillStyle = '#111111';
    rrect(ctx, -hw * 1.04, -h * 0.77, hw * 0.38, h * 0.26, 4);  ctx.fill();
    rrect(ctx,  hw * 0.66, -h * 0.77, hw * 0.40, h * 0.26, 4);  ctx.fill();

    // Neck + head
    const skin = this.playerChar?.skinTone  ?? '#c49470';
    const hair = this.playerChar?.hairColor ?? '#181010';
    const hs   = this.playerChar?.headStyle ?? 4;
    ctx.fillStyle = skin;
    ctx.fillRect(-hw * 0.17, -h * 0.90, hw * 0.34, h * 0.12);
    ctx.beginPath();
    ctx.ellipse(0, -h * 1.02, hw * 0.42, hw * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hair base
    ctx.fillStyle = hair;
    ctx.beginPath();
    ctx.ellipse(0, -h * 1.10, hw * 0.44, hw * 0.28, 0, Math.PI, Math.PI * 2);
    ctx.fill();

    // Headstyle from playerChar
    const hr = hw * 0.42;
    if (hs === 5) { // Afro — bumpy
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        ctx.fillStyle = hair;
        ctx.beginPath();
        ctx.arc(Math.cos(a) * hr * 1.5, -h * 1.02 + Math.sin(a) * hr * 1.3, hr * 0.38, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = hair;
      ctx.beginPath();
      ctx.ellipse(0, -h * 1.02, hr * 1.1, hr * 1.0, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (hs === 3) { // Hard hat
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.ellipse(0, -h * 1.08, hr * 1.2, hr * 1.1, 0, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#E8C000';
      ctx.fillRect(-hr * 1.5, -h * 1.0, hr * 3.0, hr * 0.3);
    } else if (hs === 6) { // Long hair
      ctx.fillStyle = hair;
      ctx.fillRect(-hr * 1.1, -h * 1.10, hr * 0.4, h * 0.3);
      ctx.fillRect(hr * 0.7,  -h * 1.10, hr * 0.4, h * 0.3);
    } else if (hs === 8) { // Bald — just shine
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.beginPath();
      ctx.ellipse(-hr * 0.2, -h * 1.08, hr * 0.35, hr * 0.2, -0.3, 0, Math.PI * 2);
      ctx.fill();
    } else { // Cap/beanie/etc — simple block
      ctx.fillStyle = hair;
      ctx.beginPath();
      ctx.roundRect(-hr * 1.1, -h * 1.20, hr * 2.2, hr * 0.85, 4);
      ctx.fill();
    }

    // Glasses
    ctx.strokeStyle = '#1a1a1a';
    ctx.fillStyle   = 'rgba(180,220,255,0.22)';
    ctx.lineWidth   = 1.5;
    rrect(ctx, -hw * 0.40, -h * 1.01, hw * 0.33, hw * 0.23, 2); ctx.fill(); ctx.stroke();
    rrect(ctx,  hw * 0.07, -h * 1.01, hw * 0.33, hw * 0.23, 2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-hw * 0.07, -h * 0.94);
    ctx.lineTo( hw * 0.07, -h * 0.94);
    ctx.stroke();

    // TEM logo hint (white circle)
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.beginPath();
    ctx.arc(0, -h * 0.67, hw * 0.13, 0, Math.PI * 2);
    ctx.fill();

    // Climbing highlight: yellow glow beneath player when moving up
    if (this.isClimbing) {
      ctx.globalAlpha = 0.4 * (1 - this.climbProgress);
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.ellipse(0, 0, hw * 1.4, h * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    ctx.restore();
  }

  // ── Floating text ─────────────────────────────────────────────────────────────
  private _drawFloatingTexts(): void {
    const { ctx } = this;
    for (const ft of this.floatingTexts) {
      const t     = ft.age / ft.maxAge;
      const alpha = Math.min(1, (1 - t) * 1.8);
      const yOff  = -55 * t;
      const fsz   = Math.round(this.hh * 0.022);
      ctx.font        = `bold ${fsz}px system-ui,sans-serif`;
      ctx.textAlign   = 'center';
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = 'rgba(0,0,0,0.75)';
      ctx.fillText(ft.text, ft.x + 2, ft.y + yOff + 2);
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y + yOff);
      ctx.globalAlpha = 1;
    }
  }

  // ── HUD ───────────────────────────────────────────────────────────────────────
  private _drawHUD(): void {
    const { ctx, ww } = this;
    const fsz  = Math.max(13, Math.round(this.hh * 0.024));
    const pill = (text: string, x: number, y: number, align: CanvasTextAlign, fg: string) => {
      ctx.font      = `bold ${fsz}px system-ui,sans-serif`;
      ctx.textAlign = align;
      const tw = ctx.measureText(text).width;
      const th = fsz + 14;
      const px = align === 'center' ? x - (tw + 24) / 2
               : align === 'right'  ? x - tw - 24
               : x;
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      rrect(ctx, px, y, tw + 24, th, th / 2); ctx.fill();
      ctx.fillStyle = fg;
      ctx.fillText(text, align === 'center' ? x : align === 'right' ? x - 12 : x + 12, y + th * 0.72);
    };

    const secs   = Math.ceil(this.timer);
    const mins   = Math.floor(secs / 60);
    const secStr = String(secs % 60).padStart(2, '0');
    const timerColor = secs <= 10 ? '#FF4444' : '#FFD700';
    pill(`${mins}:${secStr}`, ww / 2, 14, 'center', timerColor);

    // Progress floor counter (top-left)
    pill(`🏗️ Floor ${this.playerFloor}/${TOTAL_FLOORS}`, 10, 14, 'left', '#E8DFC8');

    // BTC caught so far (top-right)
    const btcStr = this.catchSats >= 1000 ? `₿ +${Math.round(this.catchSats / 1000)}K` : `₿ +${this.catchSats}`;
    pill(btcStr, ww - 10, 14, 'right', '#F7931A');

    // Progress bar (left edge, vertical)
    const barH   = (this.scaffoldBottom - this.scaffoldTop) * 0.85;
    const barX   = this.scaffoldLeft - 22;
    const barBotY = this.scaffoldBottom - (this.scaffoldBottom - this.scaffoldTop) * 0.075;
    const progFrac = this.playerFloor / TOTAL_FLOORS + (this.isClimbing ? this.climbProgress / TOTAL_FLOORS : 0);
    const fillH   = barH * progFrac;

    // Bar background
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    rrect(ctx, barX - 6, barBotY - barH, 12, barH, 6); ctx.fill();

    // Bar fill
    const barGrad = ctx.createLinearGradient(0, barBotY, 0, barBotY - barH);
    barGrad.addColorStop(0,   '#1a8a2a');
    barGrad.addColorStop(0.5, '#60cc40');
    barGrad.addColorStop(1,   '#FFD700');
    ctx.fillStyle = barGrad;
    rrect(ctx, barX - 5, barBotY - fillH, 10, fillH, 5); ctx.fill();

    // Top flag marker
    ctx.fillStyle = '#FFD700';
    ctx.font      = `${Math.round(this.hh * 0.026)}px system-ui`;
    ctx.textAlign = 'center';
    ctx.fillText('🚩', barX, barBotY - barH - 8);

    // Timer urgency flash
    if (this.timer <= 5 && Math.floor(this.timer * 2) % 2 === 0) {
      ctx.fillStyle = 'rgba(255,0,0,0.07)';
      ctx.fillRect(0, 0, ww, this.hh);
    }

    // "REACH THE TOP!" hint (shown when at floor 0 for first 5 seconds)
    if (this.timer > 25 && this.playerFloor === 0) {
      const hint = '👆 TAP CLIMB ▲ TO GO UP';
      ctx.font      = `bold ${Math.max(12, Math.round(this.hh * 0.020))}px system-ui,sans-serif`;
      ctx.textAlign = 'center';
      const hw2 = ctx.measureText(hint).width + 28;
      const hh2 = Math.round(this.hh * 0.020) + 14;
      const hx  = ww / 2 - hw2 / 2;
      const hy  = this.scaffoldBottom - hh2 - 90;
      ctx.fillStyle = 'rgba(0,0,0,0.70)';
      rrect(ctx, hx, hy, hw2, hh2, hh2 / 2); ctx.fill();
      const pulse = 0.65 + 0.35 * Math.sin(Date.now() * 0.006);
      ctx.globalAlpha = pulse;
      ctx.fillStyle   = '#60cc40';
      ctx.fillText(hint, ww / 2, hy + hh2 * 0.72);
      ctx.globalAlpha = 1;
    }
  }

  // ── End game ──────────────────────────────────────────────────────────────────
  private _end(): void {
    if (this.gameOver) return;
    this.gameOver = true;
    cancelAnimationFrame(this.rafId);

    const heightPct  = this.playerFloor / TOTAL_FLOORS;
    const heightBonus = Math.round(BASE_PAYOUT * heightPct);
    const bonusSats  = heightBonus + this.catchSats;
    const won        = this.playerFloor >= TOTAL_FLOORS;

    // Result banner
    const banner = document.createElement('div');
    banner.style.cssText = `
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(8,10,18,0.96); padding:26px 34px;
      border-radius:20px; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.75);
      border:2px solid ${won ? '#FFD700' : '#556070'};
      min-width:260px;
    `;

    const kStr = bonusSats >= 1000 ? `${Math.round(bonusSats / 1000)}K` : `${bonusSats}`;
    if (won) {
      banner.innerHTML = `
        <div style="font-size:28px;font-weight:900;color:#FFD700;">🏆 TOP REACHED!</div>
        <div style="margin-top:8px;font-size:16px;color:#F7931A;font-weight:700;">₿ +${kStr} sats earned</div>
        <div style="margin-top:4px;font-size:13px;color:#aaa;">Full payout! ${this.catchCount} blob${this.catchCount !== 1 ? 's' : ''} caught.</div>
      `;
    } else {
      const floorStr = `Floor ${this.playerFloor}/${TOTAL_FLOORS}`;
      const pctStr   = Math.round(heightPct * 100);
      banner.innerHTML = `
        <div style="font-size:24px;font-weight:900;color:#c8d0e0;">🏗️ ${floorStr}</div>
        <div style="margin-top:6px;font-size:15px;color:#F7931A;font-weight:700;">₿ +${kStr} sats (${pctStr}% payout)</div>
        <div style="margin-top:4px;font-size:13px;color:#aaa;">${this.catchCount} blob${this.catchCount !== 1 ? 's' : ''} caught along the way.</div>
      `;
    }
    this.overlay.appendChild(banner);

    const delay = won ? 1800 : 1500;
    setTimeout(() => {
      const result = {
        score:      Math.round(heightPct * 100),
        qualityPct: heightPct,
        message:    won
          ? `Scaffold conquered! +${kStr} sats.`
          : `Reached floor ${this.playerFloor}/${TOTAL_FLOORS} — +${kStr} sats.`,
        bonusSats,
        won,
      } as MiniGameResult & { bonusSats: number; won: boolean };

      try { this._cleanup(); } catch { /* ignore */ }
      try { this.onCompleteFn(result); } catch { /* ignore */ }
    }, delay);
  }

  // ── Cleanup ───────────────────────────────────────────────────────────────────
  private _cleanup(): void {
    cancelAnimationFrame(this.rafId);
    this.overlay.dispatchEvent(new Event('_remove'));
    this.overlay.remove();
  }

  // ── MiniGameManager interface ─────────────────────────────────────────────────
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
