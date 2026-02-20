import type { MiniGameResult } from './MiniGameManager';

// ─── Virtual resolution ───────────────────────────────────────────────────────
const VW = 400;
const VH = 700;

// ─── Physics constants ────────────────────────────────────────────────────────
const GRAVITY      = 800;   // px/s²
const JUMP_VY      = -420;  // px/s (upward)
const MOVE_SPEED   = 140;   // px/s
const CLIMB_SPEED  = 100;   // px/s
const MAX_FALL     = 600;   // px/s
const INVINCIBLE_DURATION = 0.5; // seconds

// ─── Scaffold layout ──────────────────────────────────────────────────────────
const POLE_LEFT  = 140;
const POLE_RIGHT = 260;
const POLE_TOP   = 80;
const POLE_BOT   = 630;

interface Platform {
  baseX: number;       // left edge (logical)
  y: number;           // top edge
  width: number;
  height: number;
  level: number;
  wobble: boolean;     // only level 4
  wobbleOffset: number;// current x offset from sine wave
}

const BASE_PLATFORMS: Omit<Platform, 'wobbleOffset'>[] = [
  { baseX: POLE_LEFT, y: 580, width: 120, height: 8, level: 1, wobble: false },
  { baseX: POLE_LEFT, y: 490, width: 120, height: 8, level: 2, wobble: false },
  { baseX: POLE_LEFT, y: 400, width: 120, height: 8, level: 3, wobble: false },
  { baseX: POLE_LEFT, y: 310, width: 120, height: 8, level: 4, wobble: true  },
  { baseX: POLE_LEFT, y: 220, width: 120, height: 8, level: 5, wobble: false },
  { baseX: POLE_LEFT, y: 130, width: 120, height: 8, level: 6, wobble: false },
];

// ─── Jarrad state ─────────────────────────────────────────────────────────────
type JarradState = 'standing' | 'jumping' | 'falling' | 'hanging' | 'climbing' | 'dead';

interface Jarrad {
  x: number;     // left edge of hitbox
  y: number;     // top edge of hitbox
  vx: number;
  vy: number;
  w: number;     // 18
  h: number;     // 44 (head 14 + body 30)
  state: JarradState;
  lives: number;
  invincTimer: number;   // countdown seconds
  deathTimer: number;
  currentLevel: number;
  bucketAngle: number;   // radians swing
}

interface Pigeon {
  x: number;
  y: number;
  vx: number;
  platformIdx: number;  // index in platforms array (0–5)
  jumpTimer: number;    // countdown to next jump
  scaredTimer: number;  // brief invincibility after scare
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
  private gameTime = 0;       // seconds elapsed
  private wobbleTime = 0;     // driving sine for level 4
  private tsuyoshiSpeech = 'I GOT IT!';
  private tsuyoshiTimer = 0;
  private resultTimer = 0;
  private retried = false;    // after first loss, second loss = onComplete(0)

  // Input state
  private keys: Record<string, boolean> = {};
  private prevKeys: Record<string, boolean> = {};
  private keyHandler!: (e: KeyboardEvent) => void;
  private keyUpHandler!: (e: KeyboardEvent) => void;

  // Mobile button flags
  private mobileLeft  = false;
  private mobileRight = false;
  private mobileJump  = false;
  private mobileDrop  = false;
  private mobileContainer: HTMLDivElement | null = null;

  // Timestamp tracking
  private lastTimestamp = 0;

  // ─── Public interface ──────────────────────────────────────────────────────

  mount(container: HTMLDivElement, onComplete: (result: MiniGameResult) => void): void {
    this.onComplete = onComplete;

    // Build platforms with wobbleOffset initialised to 0
    this.platforms = BASE_PLATFORMS.map(p => ({ ...p, wobbleOffset: 0 }));

    // Canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width  = VW;
    this.canvas.height = VH;
    this.canvas.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      touch-action: none;
    `;
    this.ctx = this.canvas.getContext('2d');

    // Wrapper (centres canvas, black bars)
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000;
      overflow: hidden;
    `;
    wrapper.appendChild(this.canvas);
    container.appendChild(wrapper);

    // Mobile overlay buttons (drawn over canvas wrapper)
    this.buildMobileButtons(wrapper);

    // Init game
    this.initGame();

    // Keyboard
    this.keys = {};
    this.prevKeys = {};
    this.keyHandler = (e: KeyboardEvent) => {
      this.keys[e.code] = true;
      if (['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
    };
    this.keyUpHandler = (e: KeyboardEvent) => {
      this.keys[e.code] = false;
    };
    window.addEventListener('keydown', this.keyHandler);
    window.addEventListener('keyup', this.keyUpHandler);

    // Start loop
    this.lastTimestamp = 0;
    this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
  }

  unmount(): void {
    if (this.animFrame !== null) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
    window.removeEventListener('keydown', this.keyHandler);
    window.removeEventListener('keyup', this.keyUpHandler);
    this.canvas?.parentElement?.parentElement?.querySelector('div')?.remove();
    this.canvas = null;
    this.ctx = null;
    this.onComplete = null;
    this.mobileContainer = null;
  }

  // ─── Mobile buttons ────────────────────────────────────────────────────────

  private buildMobileButtons(wrapper: HTMLElement): void {
    // Only show on touch devices (or always show, since we can't easily detect)
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
        background: rgba(255,255,255,0.18);
        border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px;
        font-size: 22px; font-weight: 900;
        cursor: pointer;
        touch-action: manipulation;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      `;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); onDown(); }, { passive: false });
      btn.addEventListener('touchend',   (e) => { e.preventDefault(); onUp();   }, { passive: false });
      btn.addEventListener('mousedown',  () => onDown());
      btn.addEventListener('mouseup',    () => onUp());
      btn.addEventListener('mouseleave', () => onUp());
      return btn;
    };

    // Left cluster: ← →
    const leftCluster = document.createElement('div');
    leftCluster.style.cssText = 'display:flex; gap:4px; pointer-events:none;';

    const lBtn = makeBtn('◀', () => { this.mobileLeft = true; }, () => { this.mobileLeft = false; });
    lBtn.style.width = '64px'; lBtn.style.height = '64px';
    const rBtn = makeBtn('▶', () => { this.mobileRight = true; }, () => { this.mobileRight = false; });
    rBtn.style.width = '64px'; rBtn.style.height = '64px';
    leftCluster.appendChild(lBtn);
    leftCluster.appendChild(rBtn);

    // Centre: JUMP
    const jumpBtn = makeBtn('▲', () => { this.mobileJump = true; }, () => { this.mobileJump = false; });
    jumpBtn.style.width = '80px'; jumpBtn.style.height = '64px';

    // Right: DROP
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
    this.phase = 'playing';
    this.gameTime = 0;
    this.wobbleTime = 0;
    this.tsuyoshiTimer = 0;
    this.tsuyoshiSpeech = 'I GOT IT!';
    this.resultTimer = 0;

    // Pigeon on level 3 (index 2, 0-based)
    this.pigeon = {
      x: POLE_LEFT + 20,
      y: 0,
      vx: 60,
      platformIdx: 2,
      jumpTimer: 6,
      scaredTimer: 0,
    };
    this.snapPigeonToPlatform();

    this.spawnAtLevel1();
  }

  private spawnAtLevel1(): void {
    const plat = this.platforms[0]; // level 1
    this.jarrad = {
      x: POLE_LEFT + 10,
      y: plat.y - 44,   // sit on top of platform
      vx: 0,
      vy: 0,
      w: 18,
      h: 44,
      state: 'standing',
      lives: this.jarrad?.lives ?? 3,
      invincTimer: 0,
      deathTimer: 0,
      currentLevel: 1,
      bucketAngle: 0,
    };
  }

  // ─── Game loop ─────────────────────────────────────────────────────────────

  private gameLoop(timestamp: number): void {
    if (!this.ctx || !this.canvas) return;

    const dt = Math.min((timestamp - (this.lastTimestamp || timestamp)) / 1000, 0.05);
    this.lastTimestamp = timestamp;

    if (this.phase === 'playing') {
      this.update(dt);
    } else if (this.phase === 'result') {
      this.resultTimer -= dt;
      if (this.resultTimer <= 0) {
        // Handled inside showResult
      }
    }

    this.draw();

    this.prevKeys = { ...this.keys };
    this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
  }

  // ─── Update ───────────────────────────────────────────────────────────────

  private update(dt: number): void {
    this.gameTime += dt;
    this.wobbleTime += dt;

    // Tsuyoshi speech
    this.tsuyoshiTimer += dt;
    if (this.tsuyoshiTimer > 3) {
      this.tsuyoshiTimer = 0;
      this.tsuyoshiSpeech = this.tsuyoshiSpeech === 'I GOT IT!' ? 'HOLD ON!' : 'I GOT IT!';
    }

    // Update wobble platform (level 4 = index 3)
    const wobblePlat = this.platforms[3];
    wobblePlat.wobbleOffset = Math.sin(this.wobbleTime * (2 * Math.PI / 2.5)) * 15;

    // Update pigeon
    this.updatePigeon(dt);

    // Handle input & physics
    if (this.jarrad.state === 'dead') {
      this.jarrad.deathTimer -= dt;
      if (this.jarrad.deathTimer <= 0) {
        this.spawnAtLevel1();
      }
      return;
    }

    // Invincibility
    if (this.jarrad.invincTimer > 0) {
      this.jarrad.invincTimer -= dt;
    }

    this.handleInput(dt);
    this.applyPhysics(dt);
    this.checkCollisions();
    this.checkDeath();
    this.checkWin();

    // Bucket swing
    const targetAngle = this.jarrad.vx * 0.002;
    this.jarrad.bucketAngle += (targetAngle - this.jarrad.bucketAngle) * 8 * dt;

    // Pigeon collision
    if (this.jarrad.invincTimer <= 0) {
      this.checkPigeonCollision();
    }

    // Update Jarrad's current level
    this.jarrad.currentLevel = this.getCurrentLevel();
  }

  private handleInput(dt: number): void {
    const j = this.jarrad;
    const leftHeld  = this.keys['ArrowLeft']  || this.keys['KeyA'] || this.mobileLeft;
    const rightHeld = this.keys['ArrowRight'] || this.keys['KeyD'] || this.mobileRight;
    const upPress   = this.isJustPressed('ArrowUp') || this.isJustPressed('KeyW') || this.isJustPressed('Space') || this.mobileJump;
    const upHeld    = this.keys['ArrowUp']    || this.keys['KeyW'] || this.keys['Space'] || this.mobileJump;
    const downHeld  = this.keys['ArrowDown']  || this.keys['KeyS'] || this.mobileDrop;

    // Climbing on ladder (near centre)
    const onLadder = j.x + j.w / 2 > 185 && j.x + j.w / 2 < 215;

    if ((j.state === 'standing' || j.state === 'climbing' || j.state === 'falling') && onLadder) {
      if (upHeld) {
        j.state = 'climbing';
        j.vy = -CLIMB_SPEED;
        j.vx = 0;
        return;
      }
      if (downHeld) {
        j.state = 'climbing';
        j.vy = CLIMB_SPEED;
        j.vx = 0;
        return;
      }
    }

    if (j.state === 'climbing') {
      // Stop climbing if not pressing up/down, or off ladder
      if (!onLadder || (!upHeld && !downHeld)) {
        j.vy = 0;
        j.state = 'falling';
      }
    }

    if (j.state === 'standing') {
      j.vx = 0;
      if (leftHeld)  j.vx = -MOVE_SPEED;
      if (rightHeld) j.vx =  MOVE_SPEED;

      if (upPress) {
        j.vy = JUMP_VY;
        j.state = 'jumping';
      }
      if (downHeld) {
        // Drop off platform edge or ladder
        j.y += 2;
        j.state = 'falling';
      }
    } else if (j.state === 'jumping' || j.state === 'falling') {
      // Air control (slightly reduced)
      j.vx = 0;
      if (leftHeld)  j.vx = -MOVE_SPEED * 0.8;
      if (rightHeld) j.vx =  MOVE_SPEED * 0.8;
    } else if (j.state === 'hanging') {
      j.vx = 0;
      if (upHeld) {
        // Pull up onto platform
        j.y -= 18;
        j.vy = 0;
        j.state = 'falling'; // will land on platform immediately
      }
      if (downHeld) {
        // Drop
        j.y += 5;
        j.state = 'falling';
      }
    }
  }

  private isJustPressed(code: string): boolean {
    return !!this.keys[code] && !this.prevKeys[code];
  }

  private applyPhysics(dt: number): void {
    const j = this.jarrad;
    if (j.state === 'climbing') {
      j.y += j.vy * dt;
      return;
    }
    if (j.state === 'hanging') return;

    // Gravity
    if (j.state !== 'standing') {
      j.vy = Math.min(j.vy + GRAVITY * dt, MAX_FALL);
    }

    j.x += j.vx * dt;
    j.y += j.vy * dt;

    // Clamp horizontal within canvas
    j.x = Math.max(10, Math.min(VW - j.w - 10, j.x));
  }

  private checkCollisions(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;

    for (const plat of this.platforms) {
      const px = plat.baseX + (plat.wobble ? plat.wobbleOffset : 0);
      const py = plat.y;
      const pr = px + plat.width;
      const pb = py + plat.height;

      // Jarrad feet
      const jFeetY = j.y + j.h;
      const jLeft  = j.x;
      const jRight  = j.x + j.w;

      // Landing on top (falling down onto platform)
      if (
        (j.state === 'jumping' || j.state === 'falling' || j.state === 'climbing') &&
        j.vy >= 0 &&
        jFeetY >= py && jFeetY <= pb + 10 &&
        jRight > px && jLeft < pr
      ) {
        j.y  = py - j.h;
        j.vy = 0;
        j.vx = 0;
        j.state = 'standing';

        // Wobble platform: move Jarrad with it
        if (plat.wobble) {
          // Jarrad is on wobble plat — position is continuously updated in wobble update
        }
        break;
      }

      // Head bump (jumping up into platform underside → hang)
      const jHeadY = j.y;
      if (
        j.state === 'jumping' && j.vy < 0 &&
        jHeadY <= pb && jHeadY >= py - 10 &&
        jRight > px + 10 && jLeft < pr - 10
      ) {
        j.vy = 0;
        j.y  = pb;
        j.state = 'hanging';
        break;
      }
    }

    // Wobble platform: if Jarrad is standing on it, move with it
    const wobblePlat = this.platforms[3];
    if (j.state === 'standing') {
      const px = wobblePlat.baseX + wobblePlat.wobbleOffset;
      const py = wobblePlat.y;
      const pr = px + wobblePlat.width;
      const jFeetY = j.y + j.h;
      if (Math.abs(jFeetY - py) < 4 && j.x + j.w > px && j.x < pr) {
        // Move with wobble (track delta)
        const prevOffset = Math.sin((this.wobbleTime - 0.016) * (2 * Math.PI / 2.5)) * 15;
        const delta = wobblePlat.wobbleOffset - prevOffset;
        j.x += delta;
        j.x = Math.max(10, Math.min(VW - j.w - 10, j.x));
      }
    }

    // After standing collision, check if Jarrad has walked off edge
    if (j.state === 'standing') {
      let onSomePlatform = false;
      for (const plat of this.platforms) {
        const px = plat.baseX + (plat.wobble ? plat.wobbleOffset : 0);
        const pr = px + plat.width;
        const jFeetY = j.y + j.h;
        if (Math.abs(jFeetY - plat.y) < 4 && j.x + j.w > px && j.x < pr) {
          onSomePlatform = true;
          break;
        }
      }
      if (!onSomePlatform) {
        j.state = 'falling';
      }
    }
  }

  private checkDeath(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;

    // Fell into pool (y=640+)
    if (j.y + j.h >= 640) {
      this.killJarrad();
    }
    // Fell off top somehow
    if (j.y < -100) {
      j.y = 0;
      j.vy = 0;
      j.state = 'falling';
    }
  }

  private killJarrad(): void {
    const j = this.jarrad;
    if (j.state === 'dead') return;
    j.lives--;
    j.state = 'dead';
    j.deathTimer = 1.2;

    if (j.lives <= 0) {
      // Game over
      setTimeout(() => {
        if (this.retried) {
          // Second time losing: call onComplete with 0
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
    // Win: on level 6 platform (index 5, y=130)
    const topPlat = this.platforms[5];
    const jFeetY = j.y + j.h;
    if (Math.abs(jFeetY - topPlat.y) < 6 &&
        j.x + j.w > topPlat.baseX &&
        j.x < topPlat.baseX + topPlat.width) {
      this.phase = 'won';
      setTimeout(() => this.finishGame(true), 100);
    }
  }

  private getCurrentLevel(): number {
    const j = this.jarrad;
    const jFeetY = j.y + j.h;
    let closest = 1;
    let minDist = Infinity;
    for (const plat of this.platforms) {
      const d = Math.abs(jFeetY - plat.y);
      if (d < minDist) {
        minDist = d;
        closest = plat.level;
      }
    }
    return closest;
  }

  // ─── Pigeon ───────────────────────────────────────────────────────────────

  private snapPigeonToPlatform(): void {
    const plat = this.platforms[this.pigeon.platformIdx];
    const px = plat.baseX + (plat.wobble ? plat.wobbleOffset : 0);
    this.pigeon.y = plat.y - 20; // sit on top
    // Keep x within platform bounds
    this.pigeon.x = Math.max(px + 4, Math.min(px + plat.width - 20, this.pigeon.x));
  }

  private updatePigeon(dt: number): void {
    const pg = this.pigeon;
    if (pg.scaredTimer > 0) pg.scaredTimer -= dt;

    pg.jumpTimer -= dt;
    if (pg.jumpTimer <= 0) {
      // Jump to a different platform (not level 1 or 6)
      const choices = [1, 2, 3, 4].filter(i => i !== pg.platformIdx); // indices 1–4 = levels 2–5
      pg.platformIdx = choices[Math.floor(Math.random() * choices.length)];
      pg.jumpTimer = 6;
      this.snapPigeonToPlatform();
    }

    const plat = this.platforms[pg.platformIdx];
    const px = plat.baseX + (plat.wobble ? plat.wobbleOffset : 0);
    const pr = px + plat.width;

    pg.x += pg.vx * dt;
    if (pg.x <= px + 2)       { pg.x = px + 2;       pg.vx =  60; }
    if (pg.x >= pr - 20)      { pg.x = pr - 20;      pg.vx = -60; }

    pg.y = plat.y - 20;
  }

  private checkPigeonCollision(): void {
    const j = this.jarrad;
    const pg = this.pigeon;
    if (pg.scaredTimer > 0) return;

    const pigeonPlat = this.platforms[pg.platformIdx];
    const jarradPlat = this.platforms.find(p => {
      const jFeetY = j.y + j.h;
      const px = p.baseX + (p.wobble ? p.wobbleOffset : 0);
      return Math.abs(jFeetY - p.y) < 8 && j.x + j.w > px && j.x < px + p.width;
    });

    if (!jarradPlat || jarradPlat.level !== pigeonPlat.level) return;

    // Check x overlap
    if (j.x < pg.x + 18 && j.x + j.w > pg.x) {
      // Hit!
      j.invincTimer = INVINCIBLE_DURATION;
      pg.scaredTimer = 1.5;
      pg.jumpTimer = 0; // force jump next frame
      j.lives--;
      if (j.lives <= 0) {
        j.state = 'dead';
        j.deathTimer = 1.2;
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
  }

  // ─── Draw ─────────────────────────────────────────────────────────────────

  private draw(): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, VW, VH);

    this.drawBackground(ctx);
    this.drawScaffold(ctx);
    this.drawTsuyoshi(ctx);
    this.drawPigeon(ctx);
    this.drawJarrad(ctx);
    this.drawHUD(ctx);

    if (this.phase === 'won') {
      this.drawWinOverlay(ctx);
    } else if (this.phase === 'lost') {
      this.drawLostOverlay(ctx);
    }
  }

  private drawBackground(ctx: CanvasRenderingContext2D): void {
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, VH);
    skyGrad.addColorStop(0, '#87CEEB');
    skyGrad.addColorStop(1, '#C5E8F5');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, VW, VH);

    // Curved building (pearl grey cylinders behind scaffold)
    ctx.fillStyle = '#C8C4BC';
    this.roundRect(ctx, 110, 60, 70, 580, 35);
    ctx.fill();
    ctx.fillStyle = '#D4D0CA';
    this.roundRect(ctx, 230, 80, 60, 560, 30);
    ctx.fill();
    // Subtle shading
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    this.roundRect(ctx, 140, 60, 20, 580, 10);
    ctx.fill();

    // Pool (death zone) bottom
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 635, VW, 8); // white pool edge
    const poolGrad = ctx.createLinearGradient(0, 643, 0, VH);
    poolGrad.addColorStop(0, '#48B8C8');
    poolGrad.addColorStop(1, '#2A9AAD');
    ctx.fillStyle = poolGrad;
    ctx.fillRect(0, 643, VW, VH - 643);

    // Pool ripple lines
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const y = 660 + i * 8;
      const off = Math.sin(this.wobbleTime * 2 + i) * 5;
      ctx.beginPath();
      ctx.moveTo(10 + off, y);
      ctx.lineTo(VW - 10 + off, y);
      ctx.stroke();
    }

    // Ground strip
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, 625, VW, 15);
    ctx.fillStyle = '#7A6345';
    ctx.fillRect(0, 627, VW, 4);
  }

  private drawScaffold(ctx: CanvasRenderingContext2D): void {
    // Vertical poles
    ctx.strokeStyle = '#C0C0C0';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(POLE_LEFT, POLE_TOP);
    ctx.lineTo(POLE_LEFT, POLE_BOT);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(POLE_RIGHT, POLE_TOP);
    ctx.lineTo(POLE_RIGHT, POLE_BOT);
    ctx.stroke();

    // X-cross bracing between platforms
    const platformYs = this.platforms.map(p => p.y);
    const levels = [0, ...platformYs, POLE_TOP];
    for (let i = 0; i < this.platforms.length; i++) {
      const topY    = i < this.platforms.length - 1 ? this.platforms[i + 1].y : POLE_TOP;
      const bottomY = this.platforms[i].y;
      ctx.strokeStyle = '#B8B8B8';
      ctx.lineWidth = 2.5;
      // X-cross
      ctx.beginPath();
      ctx.moveTo(POLE_LEFT,  topY);
      ctx.lineTo(POLE_RIGHT, bottomY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(POLE_RIGHT, topY);
      ctx.lineTo(POLE_LEFT,  bottomY);
      ctx.stroke();
    }

    // Ladder rungs (centre pole at x=200, ticks every 20px)
    ctx.strokeStyle = '#A0A0A0';
    ctx.lineWidth = 2;
    // Centre vertical
    ctx.beginPath();
    ctx.moveTo(200, POLE_TOP);
    ctx.lineTo(200, POLE_BOT);
    ctx.stroke();
    // Ticks
    ctx.lineWidth = 1.5;
    for (let y = POLE_TOP; y <= POLE_BOT; y += 20) {
      ctx.beginPath();
      ctx.moveTo(195, y);
      ctx.lineTo(205, y);
      ctx.stroke();
    }

    // Platform planks
    for (const plat of this.platforms) {
      const px = plat.baseX + (plat.wobble ? plat.wobbleOffset : 0);
      const isTop  = plat.level === 6;
      const isWob  = plat.wobble;

      // Platform body
      if (isTop) {
        const grad = ctx.createLinearGradient(px, plat.y, px + plat.width, plat.y);
        grad.addColorStop(0, '#FFD700');
        grad.addColorStop(1, '#FFA500');
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = isWob ? '#C0A060' : '#B0B0B0';
      }
      this.roundRect(ctx, px, plat.y, plat.width, plat.height, 2);
      ctx.fill();

      // Highlight on top edge
      ctx.strokeStyle = isTop ? '#FFE57A' : '#D8D8D8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px + 3, plat.y + 1.5);
      ctx.lineTo(px + plat.width - 3, plat.y + 1.5);
      ctx.stroke();

      // Wobble plank indicator (dashed border)
      if (isWob) {
        ctx.strokeStyle = '#F07070';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.strokeRect(px, plat.y, plat.width, plat.height);
        ctx.setLineDash([]);
      }

      // Top label
      if (isTop) {
        ctx.fillStyle = '#333';
        ctx.font = 'bold 9px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🏁 DELIVER', px + plat.width / 2, plat.y + 6);
      }
    }
  }

  private drawTsuyoshi(ctx: CanvasRenderingContext2D): void {
    const tx = 90, ty = 605;

    // Body
    ctx.fillStyle = '#1A1A18';
    ctx.fillRect(tx - 9, ty - 30, 18, 30);

    // Arms raised (holding scaffold)
    ctx.fillStyle = '#C8A060';
    // Left arm angled up-right toward pole
    ctx.save();
    ctx.translate(tx - 9, ty - 20);
    ctx.rotate(-0.6);
    ctx.fillRect(-4, -18, 7, 20);
    ctx.restore();
    // Right arm angled up
    ctx.save();
    ctx.translate(tx + 9, ty - 20);
    ctx.rotate(0.3);
    ctx.fillRect(-3, -16, 7, 18);
    ctx.restore();

    // Head
    ctx.fillStyle = '#C8A060';
    this.roundRect(ctx, tx - 7, ty - 44, 14, 14, 3);
    ctx.fill();

    // Mohawk
    ctx.fillStyle = '#0A0A08';
    ctx.fillRect(tx - 2, ty - 56, 4, 14);
    ctx.fillRect(tx - 1, ty - 62, 2, 8);

    // Eyes
    ctx.fillStyle = '#0A0A08';
    ctx.fillRect(tx - 5, ty - 38, 3, 3);
    ctx.fillRect(tx + 2, ty - 38, 3, 3);

    // Speech bubble
    const speech = this.tsuyoshiSpeech;
    const bubbleX = tx - 40;
    const bubbleY = ty - 80;
    const bubbleW = 80;
    const bubbleH = 22;

    ctx.fillStyle = '#FFFFFFEE';
    this.roundRect(ctx, bubbleX, bubbleY, bubbleW, bubbleH, 6);
    ctx.fill();
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Bubble tail
    ctx.fillStyle = '#FFFFFFEE';
    ctx.beginPath();
    ctx.moveTo(tx - 5, bubbleY + bubbleH);
    ctx.lineTo(tx + 5, bubbleY + bubbleH);
    ctx.lineTo(tx,     bubbleY + bubbleH + 8);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#333333';
    ctx.font = 'bold 8px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(speech, bubbleX + bubbleW / 2, bubbleY + 15);
  }

  private drawJarrad(ctx: CanvasRenderingContext2D): void {
    const j = this.jarrad;

    // Flash red during invincibility
    const flashing = j.invincTimer > 0 && Math.floor(j.invincTimer * 10) % 2 === 0;
    if (flashing) {
      ctx.globalAlpha = 0.4;
    }

    // Dead splat
    if (j.state === 'dead') {
      ctx.save();
      ctx.translate(j.x + j.w / 2, j.y + j.h);
      ctx.rotate(Math.PI / 2);
      this.drawJarradShape(ctx, 0, -j.h / 2);
      // Splat circles
      ctx.fillStyle = 'rgba(70,130,180,0.6)';
      ctx.beginPath(); ctx.arc(-10, 8, 12, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(10, 4, 8, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 1;
      return;
    }

    this.drawJarradShape(ctx, j.x, j.y);
    ctx.globalAlpha = 1;

    // Bucket on a string, hanging from right side
    const bx = j.x + j.w + 2;
    const by = j.y + 20;
    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(j.bucketAngle);
    // String
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 8);
    ctx.stroke();
    // Bucket
    ctx.fillStyle = '#C49A7A';
    ctx.fillRect(-5, 8, 10, 10);
    ctx.strokeStyle = '#A07050';
    ctx.lineWidth = 1;
    ctx.strokeRect(-5, 8, 10, 10);
    // Plaster inside
    ctx.fillStyle = '#F0ECE4';
    ctx.fillRect(-3, 9, 6, 4);
    ctx.restore();
  }

  private drawJarradShape(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // Body (black TEM shirt)
    ctx.fillStyle = '#111111';
    ctx.fillRect(x, y + 14, 18, 30);

    // Plaster splats on shirt
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath(); ctx.arc(x + 5, y + 22, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 12, y + 28, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 7, y + 35, 1.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 14, y + 19, 2, 0, Math.PI * 2); ctx.fill();

    // Head (skin)
    ctx.fillStyle = '#C8A080';
    this.roundRect(ctx, x + 2, y, 14, 14, 3);
    ctx.fill();

    // Hair (dark, messy)
    ctx.fillStyle = '#1E1008';
    ctx.fillRect(x + 1, y - 7, 16, 8);
    ctx.fillRect(x + 2, y - 9, 5, 4);
    ctx.fillRect(x + 10, y - 8, 4, 3);

    // Glasses (two tiny outlines)
    ctx.strokeStyle = '#1A1A1A';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x + 3, y + 4, 4, 3);
    ctx.strokeRect(x + 9, y + 4, 4, 3);
    ctx.beginPath();
    ctx.moveTo(x + 7, y + 5.5);
    ctx.lineTo(x + 9, y + 5.5);
    ctx.stroke();

    // Eyes
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(x + 4, y + 5, 2, 2);
    ctx.fillRect(x + 10, y + 5, 2, 2);

    // Beard
    ctx.fillStyle = '#2A1808';
    ctx.fillRect(x + 4, y + 10, 9, 4);

    // Legs
    ctx.fillStyle = '#2A2A2A';
    ctx.fillRect(x + 2,  y + 44, 6, 8);
    ctx.fillRect(x + 10, y + 44, 6, 8);
  }

  private drawPigeon(ctx: CanvasRenderingContext2D): void {
    const pg = this.pigeon;
    const facing = pg.vx > 0 ? 1 : -1;

    ctx.save();
    ctx.translate(pg.x + 9, pg.y + 10);
    if (facing < 0) ctx.scale(-1, 1);

    // Body
    ctx.fillStyle = '#888888';
    this.roundRect(ctx, -8, -6, 16, 12, 6);
    ctx.fill();

    // Wing
    ctx.fillStyle = '#666666';
    this.roundRect(ctx, -6, -4, 12, 6, 4);
    ctx.fill();

    // Head
    ctx.fillStyle = '#AAAAAA';
    this.roundRect(ctx, 4, -10, 10, 9, 4);
    ctx.fill();

    // Eye
    ctx.fillStyle = '#FF4400';
    ctx.beginPath();
    ctx.arc(11, -7, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(11, -7, 1, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = '#CC9900';
    ctx.beginPath();
    ctx.moveTo(14, -6);
    ctx.lineTo(18, -4);
    ctx.lineTo(14, -3);
    ctx.closePath();
    ctx.fill();

    // Legs
    ctx.strokeStyle = '#CC9900';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-2, 6); ctx.lineTo(-2, 12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(3, 6);  ctx.lineTo(3, 12);  ctx.stroke();

    ctx.restore();
  }

  private drawHUD(ctx: CanvasRenderingContext2D): void {
    // Background strip
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, VW, 36);

    // Hearts (lives)
    ctx.textAlign = 'left';
    ctx.font = '16px system-ui';
    for (let i = 0; i < 3; i++) {
      const filled = i < this.jarrad.lives;
      this.drawHeart(ctx, 8 + i * 22, 18, 8, filled ? '#FF4060' : '#555555');
    }

    // Level indicator
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`LEVEL ${this.jarrad.currentLevel}/6`, VW / 2, 22);

    // Timer
    const mins = Math.floor(this.gameTime / 60);
    const secs = Math.floor(this.gameTime % 60);
    const timeStr = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    ctx.textAlign = 'right';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 13px system-ui, sans-serif';
    ctx.fillText(timeStr, VW - 8, 22);
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
      // Draw retry button (fake canvas button — we overlay real DOM button)
      ctx.fillStyle = '#C1666B';
      this.roundRect(ctx, VW / 2 - 70, VH / 2 + 10, 140, 44, 10);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px system-ui';
      ctx.fillText('🔄 RETRY', VW / 2, VH / 2 + 38);

      // Tap-to-retry via canvas click
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
          this.canvas!.removeEventListener('click', handler as EventListener);
          this.canvas!.removeEventListener('touchend', handler as EventListener);
          this.retried = true;
          this.jarrad.lives = 3;
          this.initGame();
        }
      };
      this.canvas?.addEventListener('click', handler as EventListener, { once: false });
      this.canvas?.addEventListener('touchend', handler as EventListener, { once: false });

      // Remove handler after retry used (managed internally)
    }
  }

  // ─── Finish game ──────────────────────────────────────────────────────────

  private finishGame(won: boolean): void {
    this.phase = 'result';

    const lives = this.jarrad.lives;
    let score: number;
    let qualityPct: number;
    let message: string;

    if (won) {
      if (lives >= 3) {
        score = 100; qualityPct = 1.0;
        message = "Jarrad didn't spill a drop. Tsuyoshi's still shaking though.";
      } else if (lives === 2) {
        score = 80; qualityPct = 0.8;
        message = "A pigeon got involved. Classic site visit.";
      } else {
        score = 60; qualityPct = 0.6;
        message = "The bucket made it. Jarrad's ego didn't.";
      }
    } else {
      score = 0; qualityPct = 0;
      message = "Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way.";
    }

    const result: MiniGameResult = { score, qualityPct, message };

    // Show result overlay
    if (this.ctx && this.canvas) {
      this.drawResultScreen(this.ctx, won, score, message);
    }

    setTimeout(() => {
      this.onComplete?.(result);
    }, 3000);
  }

  private drawResultScreen(ctx: CanvasRenderingContext2D, won: boolean, score: number, message: string): void {
    ctx.fillStyle = 'rgba(0,0,0,0.82)';
    ctx.fillRect(0, 0, VW, VH);

    ctx.textAlign = 'center';

    // Big emoji
    ctx.font = '72px system-ui';
    ctx.fillText(won ? '🏆' : '💀', VW / 2, VH / 2 - 90);

    // Score
    const colour = score >= 75 ? '#5EDB7D' : score >= 50 ? '#F7C948' : '#F07070';
    ctx.fillStyle = colour;
    ctx.font = 'bold 64px system-ui, sans-serif';
    ctx.fillText(`${score}%`, VW / 2, VH / 2 - 10);

    // Message (word-wrapped)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '15px system-ui, sans-serif';
    this.wrapText(ctx, message, VW / 2, VH / 2 + 40, 340, 22);
  }

  private wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): void {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (const word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > maxWidth && line !== '') {
        ctx.fillText(line, x, curY);
        line = word + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, curY);
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private roundRect(
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
}
