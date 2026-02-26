/**
 * WorkshopShootout — 3D-perspective canvas mini-game
 * Camera is BEHIND Jose; player taps to throw plaster globs at Connie.
 * Pure canvas 2D — no Three.js dependency.
 */

export interface ShootoutResult {
  won: boolean;
  hits: number;
  misses: number;
}

// ── Interfaces ─────────────────────────────────────────────────────────────────

interface Glob {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;   // 0 → 1
  speed: number;      // progress units per second
  hit: boolean;
  miss: boolean;
  color: string;
}

interface CounterGlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  dead: boolean;
}

// ── Constants ──────────────────────────────────────────────────────────────────

const WIN_HITS   = 6;
const GAME_TIME  = 30;
const THROW_CD   = 0.8;
const CONNIE_HP  = 6;
const INIT_SHIELDS = 3;
const PLASTER_COLOUR = '#F2EDDF';  // default — override if jobTitle has a known match

const CHEER_LINES = ['GO JOSE!', 'YEAH!', 'GET HER!', 'NAIL IT!', '💪 TEM!'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

// Simple rounded-rect helper
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
): void {
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

// ── Main class ────────────────────────────────────────────────────────────────

export class WorkshopShootout {
  private overlay!: HTMLDivElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private rafId = 0;
  private lastTs = 0;
  private onDoneFn!: (r: ShootoutResult) => void;

  // Config
  private jobTitle = '';
  private playerName = 'Player';

  // Game state
  private phase: 'playing' | 'win' | 'lose' = 'playing';
  private t = 0;              // elapsed seconds
  private hits = 0;
  private misses = 0;
  private shields = INIT_SHIELDS;
  private connieHp = CONNIE_HP;

  // Throw cooldown
  private throwCooldown = 0;

  // Connie state
  private connX = 0;         // -1..1 normalised
  private connZ = 0;         // -1..1 normalised (depth)
  private connDir = 1;
  private connZDir = 1;
  private connFlash = 0;      // red-flash timer
  private connStagger = 0;    // stagger anim timer
  private consecutiveMisses = 0;
  private connPowerMove = false; // burst speed mode

  // Counter attack
  private counterTimer = 0;
  private counterGlobs: CounterGlob[] = [];
  private shakeT = 0;

  // Globs (player throws)
  private globs: Glob[] = [];

  // Crosshair
  private reticleX = 0;
  private reticleY = 0;

  // Player character (sideline)
  private celebrateT = 0;

  // End-phase timer
  private endTimer = 0;

  // Connie's counter direction
  private lastCounterDx = 0;
  private lastCounterDy = 0;

  // ── Entry point ──────────────────────────────────────────────────────────────

  show(
    cfg: { jobTitle: string; crewIds: string[]; playerName: string },
    onDone: (result: ShootoutResult) => void
  ): void {
    this.jobTitle    = cfg.jobTitle;
    this.playerName  = cfg.playerName || 'Player';
    this.onDoneFn    = onDone;

    this._createDOM();
    this._setupInput();
    this.lastTs = performance.now();
    this.rafId = requestAnimationFrame(ts => this._loop(ts));
  }

  // ── DOM ────────────────────────────────────────────────────────────────────

  private _createDOM(): void {
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:12000; overflow:hidden; touch-action:none;
      background:#1A1510;
    `;
    document.body.appendChild(this.overlay);

    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      position:absolute; top:0; left:0; width:100%; height:100%; display:block;
    `;
    this.overlay.appendChild(this.canvas);

    const W = window.innerWidth;
    const H = window.innerHeight;
    this.canvas.width  = W;
    this.canvas.height = H;

    this.ctx = this.canvas.getContext('2d')!;

    // Initialise reticle to center of play area
    this.reticleX = W / 2;
    this.reticleY = H * 0.45;

    // Skip/Cancel button
    const skip = document.createElement('button');
    skip.textContent = '⏭ SKIP';
    skip.style.cssText = `
      position:absolute; top:14px; right:14px; z-index:13000;
      background:rgba(193,102,107,0.92); color:#fff;
      border:none; border-radius:10px; padding:10px 20px;
      font-size:15px; font-weight:800; cursor:pointer;
      font-family:system-ui,sans-serif; touch-action:manipulation;
    `;
    skip.addEventListener('click', () => this._end('skip'));
    this.overlay.appendChild(skip);

    // Connie position init
    const { connX: cx } = this._connieScreenPos();
    this.connX = 0;
    this.connZ = 0;
    void cx;
  }

  // ── Input ─────────────────────────────────────────────────────────────────

  private _setupInput(): void {
    const W = this.canvas.width;
    const H = this.canvas.height;

    const getPos = (e: MouseEvent | Touch): [number, number] => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      return [
        ('clientX' in e ? e.clientX : (e as Touch).clientX - rect.left) * scaleX,
        ('clientY' in e ? e.clientY : (e as Touch).clientY - rect.top) * scaleY,
      ];
    };

    const onMove = (x: number, y: number) => {
      // Clamp reticle to upper 2/3 of canvas (above Jose's position)
      const joseY = H * 0.68;
      this.reticleX = clamp(x, 20, W - 20);
      this.reticleY = clamp(y, H * 0.15, joseY - 60);
    };

    const onTap = (x: number, y: number) => {
      if (this.phase !== 'playing') return;
      const joseY = H * 0.68;
      if (y > joseY - 30) return; // ignore taps below Jose
      onMove(x, y);
      this._throwGlob(x, y);
    };

    this.canvas.addEventListener('mousemove', e => {
      const [x, y] = getPos(e);
      onMove(x, y);
    });
    this.canvas.addEventListener('click', e => {
      const [x, y] = getPos(e);
      onTap(x, y);
    });
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const x = (touch.clientX - rect.left) * scaleX;
      const y = (touch.clientY - rect.top) * scaleY;
      onTap(x, y);
    }, { passive: false });
    this.canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const x = (touch.clientX - rect.left) * scaleX;
      const y = (touch.clientY - rect.top) * scaleY;
      onMove(x, y);
    }, { passive: false });
  }

  // ── Throw ─────────────────────────────────────────────────────────────────

  private _throwGlob(tx: number, ty: number): void {
    if (this.throwCooldown > 0) return;
    if (this.phase !== 'playing') return;

    const W = this.canvas.width;
    const H = this.canvas.height;

    // Jose's hand position (bottom center)
    const joseX = W / 2;
    const joseY = H * 0.62;

    this.globs.push({
      startX: joseX,
      startY: joseY,
      targetX: tx,
      targetY: ty,
      progress: 0,
      speed: 1.4,  // progress units/s
      hit: false,
      miss: false,
      color: PLASTER_COLOUR,
    });

    this.throwCooldown = THROW_CD;
  }

  // ── Connie screen position ───────────────────────────────────────────────

  private _connieScreenPos(): { connX: number; connY: number; scale: number } {
    const W = this.canvas.width;
    const H = this.canvas.height;

    // Map connX (-1..1) to screen, with perspective convergence at top center
    const horizonY = H * 0.28;      // vanishing point Y
    const floorBottom = H * 0.65;   // bottom of the floor area

    // Z in -1..1: -1 = far (near horizon), +1 = close (near camera bottom)
    const zn = (this.connZ + 1) / 2;   // 0 = far, 1 = close
    const screenY = lerp(horizonY + H * 0.06, floorBottom - H * 0.04, zn);
    const perspScale = lerp(0.35, 0.8, zn);   // farther = smaller

    // X spreads with depth
    const xSpread = W * 0.32 * zn + W * 0.04;
    const screenX = W / 2 + this.connX * xSpread;

    return { connX: screenX, connY: screenY, scale: perspScale };
  }

  // ── Game loop ─────────────────────────────────────────────────────────────

  private _loop(ts: number): void {
    this.rafId = requestAnimationFrame(t => this._loop(t));
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    try {
      this._update(dt);
      this._draw();
    } catch (e) {
      console.warn('[WorkshopShootout] frame error', e);
    }
  }

  // ── Update ────────────────────────────────────────────────────────────────

  private _update(dt: number): void {
    if (this.phase === 'playing') {
      this.t += dt;
      this.throwCooldown = Math.max(0, this.throwCooldown - dt);
      this.connFlash  = Math.max(0, this.connFlash  - dt);
      this.connStagger = Math.max(0, this.connStagger - dt);
      this.celebrateT  = Math.max(0, this.celebrateT  - dt);
      this.shakeT      = Math.max(0, this.shakeT      - dt);

      // Timer check
      const remaining = GAME_TIME - this.t;
      if (remaining <= 0) {
        this._endPhase('lose');
        return;
      }

      // Connie movement — sine wave left/right + slow Z drift
      const speed = 0.45 + this.hits * 0.08 + (this.connPowerMove ? 0.5 : 0);
      const zSpeed = 0.12 + this.hits * 0.02;

      this.connX += speed * this.connDir * dt;
      this.connZ += zSpeed * this.connZDir * dt;

      if (this.connX >  0.82) { this.connX =  0.82; this.connDir = -1; }
      if (this.connX < -0.82) { this.connX = -0.82; this.connDir =  1; }
      if (this.connZ >  0.8)  { this.connZ =  0.8;  this.connZDir = -1; }
      if (this.connZ < -0.8)  { this.connZ = -0.8;  this.connZDir =  1; }

      // ── Update player globs ─────────────────────────────────────────────
      for (const g of this.globs) {
        if (g.hit || g.miss) continue;
        g.progress += g.speed * dt;
        if (g.progress >= 1) {
          // Check hit on Connie
          const { connX: cx, connY: cy, scale } = this._connieScreenPos();
          const hitRadius = 38 * scale;
          const landX = g.targetX;
          const landY = g.targetY;
          const dist = Math.hypot(landX - cx, landY - cy);
          if (dist < hitRadius) {
            g.hit = true;
            this._onHitConnie();
          } else {
            g.miss = true;
            this.misses++;
            this.consecutiveMisses++;
            if (this.consecutiveMisses >= 5) {
              this.connPowerMove = true;
              setTimeout(() => { this.connPowerMove = false; }, 3000);
              this.consecutiveMisses = 0;
            }
          }
        }
      }
      // Purge settled globs
      this.globs = this.globs.filter(g => !g.hit && !g.miss);

      // ── Counter attack by Connie ────────────────────────────────────────
      this.counterTimer += dt;
      if (this.counterTimer >= 3.0) {
        this.counterTimer = 0;
        this._spawnCounterGlob();
      }

      // Update counter globs
      for (const cg of this.counterGlobs) {
        if (cg.dead) continue;
        cg.x += cg.vx * dt;
        cg.y += cg.vy * dt;
        cg.vy += 180 * dt; // gravity

        const W = this.canvas.width;
        const H = this.canvas.height;
        const joseX = W / 2;
        const joseY = H * 0.65;
        const dist = Math.hypot(cg.x - joseX, cg.y - joseY);
        if (dist < 44) {
          cg.dead = true;
          this._onJoseHit();
        } else if (cg.y > H + 60) {
          cg.dead = true;
        }
      }
      this.counterGlobs = this.counterGlobs.filter(cg => !cg.dead);

    } else {
      // End phase: auto-advance
      this.endTimer += dt;
      if (this.endTimer >= 2.0) {
        this._finish();
      }
    }
  }

  private _onHitConnie(): void {
    this.hits++;
    this.connFlash = 0.35;
    this.connStagger = 0.5;
    this.celebrateT = 0.5;
    this.consecutiveMisses = 0;
    this.connPowerMove = false;
    this.connieHp--;
    if (this.connieHp <= 0 || this.hits >= WIN_HITS) {
      this._endPhase('win');
    }
  }

  private _onJoseHit(): void {
    this.shields--;
    this.shakeT = 0.4;
    if (this.shields <= 0) {
      this._endPhase('lose');
    }
  }

  private _spawnCounterGlob(): void {
    if (this.phase !== 'playing') return;
    const W = this.canvas.width;
    const H = this.canvas.height;
    const { connX: cx, connY: cy } = this._connieScreenPos();
    const joseX = W / 2;
    const joseY = H * 0.62;
    const dx = joseX - cx;
    const dy = joseY - cy;
    const dist = Math.hypot(dx, dy);
    const spd = 260;
    this.counterGlobs.push({
      x: cx,
      y: cy,
      vx: (dx / dist) * spd + (Math.random() - 0.5) * 40,
      vy: (dy / dist) * spd - 120,  // lob upward
      dead: false,
    });
    this.lastCounterDx = dx;
    this.lastCounterDy = dy;
    void this.lastCounterDx; void this.lastCounterDy;
  }

  private _endPhase(result: 'win' | 'lose'): void {
    if (this.phase !== 'playing') return;
    this.phase = result;
    this.endTimer = 0;
  }

  private _end(reason: 'skip' | 'done'): void {
    cancelAnimationFrame(this.rafId);
    const won = reason === 'done' ? this.phase === 'win' : false;
    const result: ShootoutResult = {
      won: reason === 'skip' ? true : won,   // skip counts as win (QoL)
      hits: this.hits,
      misses: this.misses,
    };
    try { this._cleanup(); } catch { /* best effort */ }
    try { this.onDoneFn(result); } catch { /* best effort */ }
  }

  private _finish(): void {
    this._end('done');
  }

  private _cleanup(): void {
    cancelAnimationFrame(this.rafId);
    this.overlay.remove();
  }

  // ── Drawing ───────────────────────────────────────────────────────────────

  private _draw(): void {
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;

    // Screen shake
    ctx.save();
    if (this.shakeT > 0) {
      const mag = this.shakeT * 12;
      ctx.translate(
        (Math.random() - 0.5) * mag,
        (Math.random() - 0.5) * mag
      );
    }

    // ── Background ──────────────────────────────────────────────────────────
    this._drawBackground(W, H);

    // ── Perspective grid (floor) ─────────────────────────────────────────────
    this._drawFloorGrid(W, H);

    // ── Back wall / workshop detail ──────────────────────────────────────────
    this._drawWorkshopWall(W, H);

    // ── Player character (right sideline) ────────────────────────────────────
    this._drawPlayerCharacter(W, H);

    // ── Connie ────────────────────────────────────────────────────────────────
    this._drawConnie(W, H);

    // ── Counter globs ─────────────────────────────────────────────────────────
    this._drawCounterGlobs(W, H);

    // ── Plaster globs (thrown by Jose) ────────────────────────────────────────
    this._drawGlobs(W, H);

    // ── Jose (behind-the-shoulder) ───────────────────────────────────────────
    this._drawJose(W, H);

    // ── Crosshair ────────────────────────────────────────────────────────────
    if (this.phase === 'playing') this._drawReticle(W, H);

    // ── HUD ────────────────────────────────────────────────────────────────
    this._drawHUD(W, H);

    // ── End overlay ─────────────────────────────────────────────────────────
    if (this.phase !== 'playing') {
      this._drawEndOverlay(W, H);
    }

    ctx.restore();
  }

  private _drawBackground(W: number, H: number): void {
    const ctx = this.ctx;
    // Ambient dark background
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0D0C0A');
    bg.addColorStop(0.5, '#1A1510');
    bg.addColorStop(1, '#0A0906');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Warm amber rim lighting (Jose's scene accent)
    const rimL = ctx.createRadialGradient(W * 0.18, H * 0.9, 0, W * 0.18, H * 0.9, W * 0.55);
    rimL.addColorStop(0, 'rgba(255,160,40,0.12)');
    rimL.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rimL;
    ctx.fillRect(0, 0, W, H);

    const rimR = ctx.createRadialGradient(W * 0.82, H * 0.9, 0, W * 0.82, H * 0.9, W * 0.55);
    rimR.addColorStop(0, 'rgba(255,140,20,0.10)');
    rimR.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rimR;
    ctx.fillRect(0, 0, W, H);
  }

  private _drawFloorGrid(W: number, H: number): void {
    const ctx = this.ctx;
    const horizonY = H * 0.28;
    const floorBottom = H * 0.92;
    const vpX = W / 2;

    // Floor fill
    ctx.fillStyle = '#6A5E50';
    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(W, horizonY);
    ctx.lineTo(W, floorBottom);
    ctx.lineTo(0, floorBottom);
    ctx.closePath();
    ctx.fill();

    // Perspective grid lines
    ctx.strokeStyle = 'rgba(100,90,75,0.5)';
    ctx.lineWidth = 1;

    // Radial lines from vanishing point
    const numRadial = 18;
    for (let i = 0; i <= numRadial; i++) {
      const bx = (i / numRadial) * W;
      ctx.beginPath();
      ctx.moveTo(vpX, horizonY);
      ctx.lineTo(bx, floorBottom);
      ctx.stroke();
    }

    // Horizontal lines
    ctx.strokeStyle = 'rgba(100,90,75,0.35)';
    const numH = 10;
    for (let i = 1; i <= numH; i++) {
      const t = i / numH;
      const y = lerp(horizonY, floorBottom, t * t);  // perspective spacing
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Slight vignette on floor edges
    const vL = ctx.createLinearGradient(0, 0, W * 0.12, 0);
    vL.addColorStop(0, 'rgba(0,0,0,0.45)');
    vL.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vL;
    ctx.fillRect(0, horizonY, W, floorBottom - horizonY);

    const vR = ctx.createLinearGradient(W, 0, W * 0.88, 0);
    vR.addColorStop(0, 'rgba(0,0,0,0.45)');
    vR.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vR;
    ctx.fillRect(0, horizonY, W, floorBottom - horizonY);
  }

  private _drawWorkshopWall(W: number, H: number): void {
    const ctx = this.ctx;
    const wallH = H * 0.30;

    // Wall
    ctx.fillStyle = '#1E1D18';
    ctx.fillRect(0, 0, W, wallH);

    // Horizon divider
    ctx.fillStyle = '#2C2B24';
    ctx.fillRect(0, wallH - 4, W, 8);

    // TEM Logo (text placeholder)
    ctx.font = `bold ${Math.round(H * 0.045)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,185,50,0.18)';
    ctx.fillText('TEM', W / 2, wallH * 0.5);

    // Shelves (visual detail)
    const shelfColor = '#2A2820';
    const shelfBorder = '#3A3828';
    const numShelves = 3;
    for (let i = 0; i < numShelves; i++) {
      const sx = W * (0.08 + i * 0.28);
      const sy = wallH * (0.20 + i * 0.25);
      const sw = W * 0.20;
      const sh = 6;

      ctx.fillStyle = shelfBorder;
      ctx.fillRect(sx, sy, sw, sh + 2);
      ctx.fillStyle = shelfColor;
      ctx.fillRect(sx, sy, sw, sh);

      // Bucket/item silhouettes on shelves
      for (let b = 0; b < 3; b++) {
        const bx = sx + sw * (0.15 + b * 0.32);
        const by = sy - 14;
        ctx.fillStyle = '#3A3030';
        ctx.beginPath();
        ctx.rect(bx - 5, by, 10, 14);
        ctx.fill();
      }
    }

    // Window (light from outside)
    const winX = W * 0.72;
    const winY = wallH * 0.1;
    const winW = W * 0.12;
    const winH = wallH * 0.55;
    const winGrad = ctx.createLinearGradient(winX, winY, winX + winW, winY + winH);
    winGrad.addColorStop(0, 'rgba(255,200,100,0.12)');
    winGrad.addColorStop(1, 'rgba(255,160,60,0.04)');
    ctx.fillStyle = '#151412';
    ctx.fillRect(winX, winY, winW, winH);
    ctx.fillStyle = winGrad;
    ctx.fillRect(winX, winY, winW, winH);
    // Window cross
    ctx.strokeStyle = '#1A1810';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(winX + winW / 2, winY);
    ctx.lineTo(winX + winW / 2, winY + winH);
    ctx.moveTo(winX, winY + winH / 2);
    ctx.lineTo(winX + winW, winY + winH / 2);
    ctx.stroke();
  }

  private _drawConnie(W: number, H: number): void {
    const ctx = this.ctx;
    const { connX: cx, connY: cy, scale: sc } = this._connieScreenPos();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(sc, sc);

    // Flash overlay
    if (this.connFlash > 0) {
      ctx.globalAlpha = Math.min(1, this.connFlash * 2.8);
      // Will draw red tint at end
    }

    // Stagger: slight lean/shake
    const staggerRot = this.connStagger > 0 ? Math.sin(this.connStagger * 35) * 0.18 : 0;
    ctx.rotate(staggerRot);

    const baseAlpha = ctx.globalAlpha;

    // ── Draw Connie (front-facing sprite) ───────────────────────────────────
    // Legs (black trousers)
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(-10, 28, 8, 28);   // left leg
    ctx.fillRect(2, 28, 8, 28);     // right leg

    // Boots
    ctx.fillStyle = '#0D0D0D';
    ctx.fillRect(-12, 52, 10, 8);
    ctx.fillRect(2, 52, 10, 8);

    // Body (black jacket)
    ctx.fillStyle = '#1C1C1C';
    roundRect(ctx, -14, 2, 28, 30, 4);
    ctx.fill();

    // Jacket lapels (subtle)
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.lineTo(-5, 18);
    ctx.lineTo(0, 20);
    ctx.lineTo(5, 18);
    ctx.closePath();
    ctx.fill();

    // ── Bionic arm (LEFT side — right of screen) ────────────────────────────
    // Upper arm
    ctx.fillStyle = '#7A7A8A';
    ctx.fillRect(14, 4, 10, 18);    // metallic upper arm
    // Forearm / plating
    ctx.fillStyle = '#9A9AAE';
    ctx.fillRect(15, 22, 9, 14);
    // Hand
    ctx.fillStyle = '#B0B0C4';
    ctx.fillRect(15, 36, 8, 6);
    // Bionic glow line
    ctx.strokeStyle = 'rgba(100,120,255,0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(19, 5);
    ctx.lineTo(19, 42);
    ctx.stroke();
    // Panel details
    ctx.strokeStyle = 'rgba(80,80,100,0.8)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(15, 14); ctx.lineTo(24, 14);
    ctx.moveTo(15, 25); ctx.lineTo(24, 25);
    ctx.stroke();

    // ── Normal arm (right side of Connie → left on screen) ─────────────────
    ctx.fillStyle = '#C07050';   // skin tone
    ctx.fillRect(-22, 5, 9, 16); // upper arm
    ctx.fillStyle = '#B06848';
    ctx.fillRect(-21, 21, 8, 12);
    ctx.fillStyle = '#A06040';
    ctx.fillRect(-20, 33, 7, 6); // hand

    // ── Head ────────────────────────────────────────────────────────────────
    // Neck
    ctx.fillStyle = '#C07050';
    ctx.fillRect(-5, -8, 10, 12);

    // Head shape
    ctx.fillStyle = '#C8805C';
    roundRect(ctx, -14, -28, 28, 26, 8);
    ctx.fill();

    // ── Blonde hair ──────────────────────────────────────────────────────────
    // Top of head hair
    ctx.fillStyle = '#E8C840';
    roundRect(ctx, -15, -32, 30, 14, 8);
    ctx.fill();
    // Side hair strands
    ctx.fillStyle = '#D8B830';
    ctx.fillRect(-16, -26, 5, 24);  // left side
    ctx.fillRect(11, -26, 5, 20);   // right side
    // Hair highlight
    ctx.fillStyle = 'rgba(255,240,100,0.35)';
    roundRect(ctx, -8, -33, 16, 6, 3);
    ctx.fill();

    // ── Face ────────────────────────────────────────────────────────────────
    // Eyes
    ctx.fillStyle = '#1A1A2A';
    ctx.beginPath(); ctx.ellipse(-5, -18, 3, 3.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(5, -18, 3, 3.5, 0, 0, Math.PI * 2); ctx.fill();
    // Eye whites
    ctx.fillStyle = '#FFF';
    ctx.beginPath(); ctx.ellipse(-5, -18, 2.5, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(5, -18, 2.5, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    // Pupils
    ctx.fillStyle = '#1A1A1A';
    ctx.beginPath(); ctx.ellipse(-5, -18, 1.5, 1.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(5, -18, 1.5, 1.5, 0, 0, Math.PI * 2); ctx.fill();
    // Mouth (smirk)
    ctx.strokeStyle = '#803030';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-4, -10);
    ctx.quadraticCurveTo(0, -7, 5, -10);
    ctx.stroke();
    // Nose
    ctx.fillStyle = '#B06848';
    ctx.beginPath();
    ctx.ellipse(0, -14, 2.5, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── HP bar ───────────────────────────────────────────────────────────────
    const hpBarW = 50;
    const hpBarH = 6;
    const hpX = -hpBarW / 2;
    const hpY = -42;
    ctx.fillStyle = '#333';
    roundRect(ctx, hpX - 1, hpY - 1, hpBarW + 2, hpBarH + 2, 3);
    ctx.fill();
    const hpFrac = Math.max(0, this.connieHp / CONNIE_HP);
    const hpColor = hpFrac > 0.5 ? '#44CC44' : hpFrac > 0.25 ? '#FFB020' : '#FF3030';
    ctx.fillStyle = hpColor;
    roundRect(ctx, hpX, hpY, hpBarW * hpFrac, hpBarH, 3);
    ctx.fill();

    // ── Red flash ────────────────────────────────────────────────────────────
    if (this.connFlash > 0) {
      ctx.globalAlpha = Math.min(0.7, this.connFlash * 2.0);
      ctx.fillStyle = '#FF3030';
      roundRect(ctx, -16, -34, 32, 96, 8);
      ctx.fill();
      ctx.globalAlpha = baseAlpha;
    }

    ctx.restore();
  }

  private _drawJose(W: number, H: number): void {
    const ctx = this.ctx;
    const joseX = W / 2;
    const joseY = H * 0.70;

    // Throwing arm swing (when there's a glob in flight)
    const isThrowing = this.globs.length > 0;
    const armSwing = isThrowing ? -0.6 : 0;

    ctx.save();
    ctx.translate(joseX, joseY);

    // ── Shadow ────────────────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.ellipse(0, 16, 28, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── Legs ────────────────────────────────────────────────────────────
    ctx.fillStyle = '#111111';
    ctx.fillRect(-14, 0, 12, 48);   // left leg
    ctx.fillRect(2, 0, 12, 48);     // right leg

    // Boots
    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(-16, 42, 14, 10);
    ctx.fillRect(2, 42, 14, 10);

    // ── Body (TEM shirt — dark with subtle logo hint) ─────────────────────
    ctx.fillStyle = '#1A1612';
    roundRect(ctx, -20, -48, 40, 50, 6);
    ctx.fill();

    // TEM logo hint on back of shirt
    ctx.font = `bold ${Math.round(H * 0.018)}px system-ui`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,175,50,0.20)';
    ctx.fillText('TEM', 0, -24);

    // Shirt pocket detail
    ctx.fillStyle = 'rgba(255,175,50,0.12)';
    ctx.fillRect(-14, -42, 10, 8);

    // ── Left arm (at side) ───────────────────────────────────────────────
    ctx.fillStyle = '#1A1612';
    ctx.save();
    ctx.translate(-22, -36);
    ctx.rotate(0.15);
    ctx.fillRect(-6, 0, 12, 38);  // upper+forearm
    ctx.fillStyle = '#B07055';
    ctx.fillRect(-5, 34, 10, 10); // hand
    ctx.restore();

    // ── Right arm (throwing arm) ──────────────────────────────────────────
    ctx.fillStyle = '#1A1612';
    ctx.save();
    ctx.translate(22, -36);
    ctx.rotate(armSwing);
    ctx.fillRect(-6, 0, 12, 38);
    ctx.fillStyle = '#B07055';
    ctx.fillRect(-5, 34, 10, 10); // hand
    ctx.restore();

    // ── Neck & Head ────────────────────────────────────────────────────────
    // Neck
    ctx.fillStyle = '#A06848';
    ctx.fillRect(-7, -60, 14, 15);

    // Head (dark hair, viewed from behind)
    ctx.fillStyle = '#201510';
    roundRect(ctx, -18, -90, 36, 32, 12);
    ctx.fill();

    // Hair detail (slight sheen)
    ctx.fillStyle = 'rgba(80,50,20,0.4)';
    roundRect(ctx, -16, -90, 32, 12, 8);
    ctx.fill();

    // Hard hat removed — just a cap style silhouette
    ctx.fillStyle = '#151010';
    roundRect(ctx, -20, -96, 40, 10, 5);
    ctx.fill();

    // ── Throw-ready indicator (cooldown arc) ──────────────────────────────
    if (this.phase === 'playing') {
      const cd = 1 - clamp(this.throwCooldown / THROW_CD, 0, 1);
      if (cd < 1) {
        ctx.strokeStyle = 'rgba(255,185,50,0.75)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, -52, 28, -Math.PI / 2, -Math.PI / 2 + cd * Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  private _drawPlayerCharacter(W: number, H: number): void {
    const ctx = this.ctx;
    // Right sideline — 1/4 from right
    const px = W * 0.80;
    const py = H * 0.65;
    const bounce = Math.sin(this.t * 3.5) * 8;
    const isCelebrating = this.celebrateT > 0;
    const yOff = isCelebrating ? bounce * 2 : bounce;

    ctx.save();
    ctx.translate(px, py + yOff);
    // Facing left (inward toward the action)
    ctx.scale(-1, 1);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(0, 28, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.fillStyle = '#3A5A8A';
    ctx.fillRect(-8, 0, 6, 26);
    ctx.fillRect(2, 0, 6, 26);

    // Shoes
    ctx.fillStyle = '#222';
    ctx.fillRect(-9, 22, 8, 6);
    ctx.fillRect(2, 22, 8, 6);

    // Body
    ctx.fillStyle = isCelebrating ? '#E8A030' : '#D4A030';
    roundRect(ctx, -10, -24, 20, 28, 4);
    ctx.fill();

    // Arms raised (cheering)
    const armAngle = isCelebrating
      ? -Math.PI * 0.75 + Math.sin(this.t * 8) * 0.2
      : -Math.PI * 0.55 + Math.sin(this.t * 2.5) * 0.15;
    // Left arm
    ctx.fillStyle = '#D4A030';
    ctx.save();
    ctx.translate(-12, -18);
    ctx.rotate(armAngle - 0.1);
    ctx.fillRect(-4, -24, 8, 24);
    ctx.fillStyle = '#C07050';
    ctx.fillRect(-4, -28, 8, 8);
    ctx.restore();
    // Right arm
    ctx.save();
    ctx.translate(12, -18);
    ctx.rotate(-armAngle + 0.1);
    ctx.fillRect(-4, -24, 8, 24);
    ctx.fillStyle = '#C07050';
    ctx.fillRect(-4, -28, 8, 8);
    ctx.restore();

    // Head
    ctx.fillStyle = '#C07050';
    roundRect(ctx, -9, -40, 18, 18, 6);
    ctx.fill();

    // Hair
    ctx.fillStyle = '#3A2010';
    roundRect(ctx, -10, -44, 20, 10, 5);
    ctx.fill();

    // Eyes (facing left, so we already scaled -1)
    ctx.fillStyle = '#FFF';
    ctx.beginPath(); ctx.ellipse(3, -34, 2.5, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#1A1A1A';
    ctx.beginPath(); ctx.ellipse(3, -34, 1.2, 1.2, 0, 0, Math.PI * 2); ctx.fill();

    ctx.restore();

    // ── Player name ──────────────────────────────────────────────────────────
    ctx.save();
    ctx.font = `bold ${Math.max(12, Math.round(H * 0.022))}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#FFD060';
    ctx.fillText(this.playerName, px, py + yOff - 50);
    ctx.restore();

    // ── Cheer text ───────────────────────────────────────────────────────────
    const cheerIndex = Math.floor((this.t / 2) % CHEER_LINES.length);
    const cheerLine = isCelebrating
      ? (this.hits > 0 ? '🎉 NICE HIT!' : CHEER_LINES[cheerIndex])
      : CHEER_LINES[cheerIndex];

    ctx.save();
    ctx.font = `bold ${Math.max(12, Math.round(H * 0.020))}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = isCelebrating ? '#FFE840' : '#FFFFFF';
    ctx.globalAlpha = isCelebrating ? 1.0 : 0.85;
    ctx.fillText(cheerLine, px, py + yOff - 62);
    ctx.restore();
  }

  private _drawGlobs(W: number, H: number): void {
    const ctx = this.ctx;
    const joseX = W / 2;
    const joseY = H * 0.62;

    for (const g of this.globs) {
      const p = g.progress;
      const x = lerp(g.startX, g.targetX, p);
      const arc = Math.sin(p * Math.PI) * 50;
      const y = lerp(g.startY, g.targetY, p) - arc;

      // Shadow on floor (perspective mapped)
      const floorY = lerp(H * 0.56, H * 0.80, p * 0.7 + 0.3);
      const shadowR = lerp(4, 14, p);
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(x, floorY, shadowR, shadowR * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();

      // Glob
      const r = lerp(6, 14, p * 0.6 + 0.4);
      const gGrad = ctx.createRadialGradient(x - r * 0.25, y - r * 0.25, 0, x, y, r);
      gGrad.addColorStop(0, '#FFFFFF');
      gGrad.addColorStop(0.3, g.color);
      gGrad.addColorStop(1, '#C8B880');
      ctx.fillStyle = gGrad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      void joseX; void joseY;
    }
  }

  private _drawCounterGlobs(W: number, H: number): void {
    const ctx = this.ctx;
    void W; void H;
    for (const cg of this.counterGlobs) {
      // Shadow
      ctx.fillStyle = 'rgba(180,0,0,0.15)';
      ctx.beginPath();
      ctx.ellipse(cg.x, cg.y + 10, 10, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Counter glob (red/orange plaster)
      const cGrad = ctx.createRadialGradient(cg.x - 3, cg.y - 3, 0, cg.x, cg.y, 10);
      cGrad.addColorStop(0, '#FF8844');
      cGrad.addColorStop(0.5, '#CC3322');
      cGrad.addColorStop(1, '#882211');
      ctx.fillStyle = cGrad;
      ctx.beginPath();
      ctx.arc(cg.x, cg.y, 10, 0, Math.PI * 2);
      ctx.fill();

      // Connie's warning glow
      ctx.strokeStyle = 'rgba(255,80,20,0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cg.x, cg.y, 13, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  private _drawReticle(W: number, H: number): void {
    const ctx = this.ctx;
    const x = this.reticleX;
    const y = this.reticleY;
    const canThrow = this.throwCooldown <= 0;
    void W; void H;

    ctx.strokeStyle = canThrow ? 'rgba(255,210,50,0.85)' : 'rgba(180,180,180,0.5)';
    ctx.lineWidth = 2;

    const r = 18;
    const gap = 6;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    // Crosshair lines
    ctx.beginPath();
    ctx.moveTo(x - r - gap, y);
    ctx.lineTo(x - r + gap, y);
    ctx.moveTo(x + r - gap, y);
    ctx.lineTo(x + r + gap, y);
    ctx.moveTo(x, y - r - gap);
    ctx.lineTo(x, y - r + gap);
    ctx.moveTo(x, y + r - gap);
    ctx.lineTo(x, y + r + gap);
    ctx.stroke();

    // Center dot
    ctx.fillStyle = canThrow ? 'rgba(255,210,50,0.9)' : 'rgba(180,180,180,0.6)';
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  private _drawHUD(W: number, H: number): void {
    const ctx = this.ctx;
    const remaining = Math.max(0, GAME_TIME - this.t);

    ctx.save();
    ctx.textBaseline = 'middle';

    // ── Top bar background ─────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    roundRect(ctx, 0, 0, W, 54, 0);
    ctx.fill();

    // ── Job title (center) ─────────────────────────────────────────────────
    ctx.font = `bold ${Math.max(13, Math.round(H * 0.022))}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFD060';
    ctx.fillText(this.jobTitle, W / 2, 27);

    // ── Hit counter (left) ────────────────────────────────────────────────
    ctx.font = `bold ${Math.max(14, Math.round(H * 0.025))}px system-ui, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FFF';
    ctx.fillText(`🎯 ${this.hits}/${WIN_HITS}`, 16, 27);

    // ── Timer (right) ─────────────────────────────────────────────────────
    const timerColor = remaining <= 10 ? '#FF4444' : '#FFFFFF';
    ctx.fillStyle = timerColor;
    ctx.textAlign = 'right';
    ctx.fillText(`⏱ ${Math.ceil(remaining)}s`, W - 16, 27);

    // ── Shields row (below job title) ─────────────────────────────────────
    const shieldY = 70;
    ctx.textAlign = 'center';
    ctx.font = `${Math.max(16, Math.round(H * 0.028))}px system-ui, sans-serif`;
    let shieldStr = '';
    for (let i = 0; i < INIT_SHIELDS; i++) {
      shieldStr += i < this.shields ? '🛡️' : '🖤';
    }
    ctx.fillText(shieldStr, W / 2, shieldY);

    // ── Cooldown indicator ─────────────────────────────────────────────────
    if (this.throwCooldown > 0) {
      const cdFrac = this.throwCooldown / THROW_CD;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      roundRect(ctx, W / 2 - 60, H - 48, 120, 22, 8);
      ctx.fill();
      ctx.fillStyle = '#888';
      roundRect(ctx, W / 2 - 58, H - 46, 116, 18, 6);
      ctx.fill();
      ctx.fillStyle = '#FFD060';
      roundRect(ctx, W / 2 - 58, H - 46, 116 * (1 - cdFrac), 18, 6);
      ctx.fill();
      ctx.font = `bold ${Math.max(11, Math.round(H * 0.016))}px system-ui, sans-serif`;
      ctx.fillStyle = '#FFF';
      ctx.textAlign = 'center';
      ctx.fillText('RELOAD', W / 2, H - 37);
    } else {
      // TAP TO THROW hint
      ctx.font = `${Math.max(12, Math.round(H * 0.018))}px system-ui, sans-serif`;
      ctx.fillStyle = 'rgba(255,210,80,0.7)';
      ctx.textAlign = 'center';
      ctx.fillText('TAP TO THROW', W / 2, H - 36);
    }

    ctx.restore();
  }

  private _drawEndOverlay(W: number, H: number): void {
    const ctx = this.ctx;
    const won = this.phase === 'win';

    // Backdrop
    ctx.fillStyle = won ? 'rgba(0,30,0,0.80)' : 'rgba(30,0,0,0.80)';
    ctx.fillRect(0, 0, W, H);

    // Panel
    const panelW = Math.min(W * 0.80, 380);
    const panelH = 180;
    const px = (W - panelW) / 2;
    const py = H * 0.30;

    ctx.fillStyle = won ? '#1A2E10' : '#2E1010';
    roundRect(ctx, px, py, panelW, panelH, 18);
    ctx.fill();

    ctx.strokeStyle = won ? '#FFD700' : '#FF4444';
    ctx.lineWidth = 3;
    roundRect(ctx, px, py, panelW, panelH, 18);
    ctx.stroke();

    // Title
    ctx.font = `bold ${Math.max(22, Math.round(H * 0.042))}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = won ? '#FFD700' : '#FF6666';
    ctx.fillText(won ? 'YOU WIN! 🏆' : 'CONNIE ESCAPED 💨', W / 2, py + 56);

    // Stats
    ctx.font = `${Math.max(14, Math.round(H * 0.024))}px system-ui, sans-serif`;
    ctx.fillStyle = '#CCC';
    ctx.fillText(`Hits: ${this.hits}  •  Misses: ${this.misses}`, W / 2, py + 106);

    // Continue note
    ctx.font = `${Math.max(12, Math.round(H * 0.018))}px system-ui, sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillText('Continuing...', W / 2, py + 148);
  }
}
