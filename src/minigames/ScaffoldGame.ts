import type { MiniGameResult } from './MiniGameManager';

const TEM_PHOTOS = [
  'images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg',
  'images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg',
  'images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg',
  'images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg',
  'images/787315c4-a661-4dca-8567-b7a18f104665.jpg',
  'images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg',
  'images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg',
  'images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg',
];

const SCAFFOLD_LEVELS = 6;
const WOBBLE_CHANCE = 0.3;
const WOBBLE_DELAY_MS = 2000;
const PIGEON_RESET_MS = 5000;

interface Platform {
  el: HTMLDivElement;
  wobbly: boolean;
}

export class ScaffoldGame {
  private root: HTMLDivElement | null = null;
  private onComplete: ((result: MiniGameResult) => void) | null = null;

  // Game state
  private jarradLevel = 1; // 1 = bottom, 6 = top
  private lives = 3;
  private done = false;
  private startTime = 0;

  // DOM elements
  private platforms: Platform[] = [];
  private jarradEl: HTMLDivElement | null = null;
  private pigeonEl: HTMLDivElement | null = null;
  private livesEl: HTMLDivElement | null = null;

  // Pigeon state
  private pigeonLevel = 3;
  private pigeonX = 10; // percentage across platform
  private pigeonDir = 1; // 1 = right, -1 = left

  // Timers & intervals
  private pigeonInterval: ReturnType<typeof setInterval> | null = null;
  private pigeonResetTimer: ReturnType<typeof setTimeout> | null = null;
  private wobbleTimer: ReturnType<typeof setTimeout> | null = null;
  private safetyTimer: ReturnType<typeof setTimeout> | null = null;
  private pigeonAnimFrame: ReturnType<typeof setInterval> | null = null;

  // Input handlers (stored so we can remove them)
  private keyHandler: ((e: KeyboardEvent) => void) | null = null;
  private touchStartY = 0;

  mount(container: HTMLDivElement, onComplete: (result: MiniGameResult) => void): void {
    this.onComplete = onComplete;
    this.done = false;
    this.jarradLevel = 1;
    this.lives = 3;
    this.platforms = [];
    this.startTime = Date.now();

    const photo = TEM_PHOTOS[Math.floor(Math.random() * TEM_PHOTOS.length)];

    // Root
    this.root = document.createElement('div');
    this.root.style.cssText = `
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-end;
      font-family: system-ui, sans-serif;
      user-select: none; touch-action: none;
      overflow: hidden;
    `;

    // Background
    const bg = document.createElement('div');
    bg.style.cssText = `
      position: absolute; inset: 0;
      background: url('${photo}') center/cover no-repeat;
      filter: blur(3px) brightness(0.3);
    `;
    this.root.appendChild(bg);

    // Title
    const title = document.createElement('div');
    title.style.cssText = `
      position: absolute; top: 12px; width: 100%; text-align: center;
      color: #fff; font-size: clamp(16px, 4vw, 22px);
      font-weight: 900; text-shadow: 0 2px 8px rgba(0,0,0,0.9);
      z-index: 10;
    `;
    title.textContent = '🪣 JARRAD\'S SCAFFOLD — DELIVER THE PLASTER!';
    this.root.appendChild(title);

    // Lives display
    this.livesEl = document.createElement('div');
    this.livesEl.style.cssText = `
      position: absolute; top: 48px; width: 100%; text-align: center;
      font-size: clamp(20px, 5vw, 28px); z-index: 10;
    `;
    this.updateLivesDisplay();
    this.root.appendChild(this.livesEl);

    // Scaffold area — centred column
    const scaffoldArea = document.createElement('div');
    scaffoldArea.style.cssText = `
      position: absolute;
      top: 90px; bottom: 110px;
      left: 50%; transform: translateX(-50%);
      width: min(320px, 85vw);
      display: flex; flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
    `;

    // Build platforms (top to bottom in DOM, level 6 first)
    for (let lvl = SCAFFOLD_LEVELS; lvl >= 1; lvl--) {
      const isWobbly = Math.random() < WOBBLE_CHANCE && lvl !== 1 && lvl !== SCAFFOLD_LEVELS;
      const platformRow = this.buildPlatformRow(lvl, isWobbly);
      scaffoldArea.appendChild(platformRow.rowEl);
      this.platforms[lvl] = { el: platformRow.platformEl, wobbly: isWobbly };
    }

    this.root.appendChild(scaffoldArea);

    // Pigeon element (floating, positioned absolutely in scaffold area)
    this.pigeonEl = document.createElement('div');
    this.pigeonEl.style.cssText = `
      position: absolute;
      font-size: clamp(20px, 5vw, 28px);
      transition: left 0.3s linear;
      z-index: 20;
      pointer-events: none;
    `;
    this.pigeonEl.textContent = '🐦';
    scaffoldArea.style.position = 'relative';
    scaffoldArea.appendChild(this.pigeonEl);

    // Jarrad element
    this.jarradEl = document.createElement('div');
    this.jarradEl.style.cssText = `
      position: absolute;
      font-size: clamp(22px, 6vw, 32px);
      transition: top 0.25s ease;
      z-index: 21;
      pointer-events: none;
      text-align: center;
      line-height: 1;
    `;
    this.jarradEl.innerHTML = this.getJarradEmoji();
    scaffoldArea.appendChild(this.jarradEl);

    // Mobile buttons
    const btnRow = document.createElement('div');
    btnRow.style.cssText = `
      position: absolute; bottom: 16px;
      width: 100%; display: flex;
      justify-content: center; gap: 32px;
      z-index: 50;
    `;

    const upBtn = this.makeMobileButton('⬆️ UP');
    const downBtn = this.makeMobileButton('⬇️ DOWN');

    upBtn.addEventListener('click', () => this.tryMove(1));
    downBtn.addEventListener('click', () => this.tryMove(-1));
    btnRow.appendChild(upBtn);
    btnRow.appendChild(downBtn);
    this.root.appendChild(btnRow);

    container.appendChild(this.root);

    // Position characters after DOM is appended (so we can measure)
    requestAnimationFrame(() => {
      this.repositionJarrad(scaffoldArea);
      this.repositionPigeon(scaffoldArea);
    });

    // Keyboard input
    this.keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault();
        this.tryMove(1);
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        this.tryMove(-1);
      }
    };
    window.addEventListener('keydown', this.keyHandler);

    // Touch swipe
    this.root.addEventListener('touchstart', (e) => {
      this.touchStartY = e.touches[0].clientY;
    }, { passive: true });
    this.root.addEventListener('touchend', (e) => {
      const dy = this.touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 30) this.tryMove(dy > 0 ? 1 : -1);
    }, { passive: true });

    // Pigeon movement
    this.pigeonLevel = Math.floor(Math.random() * (SCAFFOLD_LEVELS - 2)) + 2; // 2–5
    this.pigeonX = 10;
    this.pigeonDir = 1;

    this.pigeonAnimFrame = setInterval(() => {
      if (this.done) return;
      this.pigeonX += this.pigeonDir * 3;
      if (this.pigeonX >= 85) this.pigeonDir = -1;
      if (this.pigeonX <= 5) this.pigeonDir = 1;
      this.repositionPigeon(scaffoldArea);
      this.checkPigeonCollision();
    }, 150);

    // Pigeon respawn
    this.schedulePigeonRespawn(scaffoldArea);

    // Safety auto-complete
    this.safetyTimer = setTimeout(() => {
      if (!this.done) this.finishGame(false, true);
    }, 90_000);
  }

  private buildPlatformRow(level: number, isWobbly: boolean): { rowEl: HTMLDivElement; platformEl: HTMLDivElement } {
    const rowEl = document.createElement('div');
    rowEl.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex: 1;
    `;

    // Ladder section above this platform (not for top)
    if (level < SCAFFOLD_LEVELS) {
      const ladder = document.createElement('div');
      ladder.style.cssText = `
        position: absolute; top: 0; left: 50%;
        transform: translateX(-50%);
        width: 22px; height: 100%;
        background: repeating-linear-gradient(
          to bottom,
          #8B6914 0px, #8B6914 4px,
          transparent 4px, transparent 18px
        );
        border-left: 4px solid #8B6914;
        border-right: 4px solid #8B6914;
        opacity: 0.8;
        pointer-events: none;
        z-index: 1;
      `;
      rowEl.appendChild(ladder);
    }

    // Platform plank
    const plankEl = document.createElement('div');
    const label = level === SCAFFOLD_LEVELS ? '🏁 TOP' : level === 1 ? '🪣 START' : `Level ${level}`;
    plankEl.style.cssText = `
      position: absolute; bottom: 0;
      left: 0; right: 0;
      height: 18px;
      background: ${level === SCAFFOLD_LEVELS ? 'linear-gradient(90deg,#FFD700,#FFA500)' : '#B8860B'};
      border-radius: 4px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center;
      color: ${level === SCAFFOLD_LEVELS ? '#000' : '#fff'};
      font-size: 11px; font-weight: 700;
      z-index: 2;
      ${isWobbly ? 'border: 2px dashed #F07070;' : ''}
    `;
    plankEl.textContent = label;

    if (isWobbly) {
      // CSS wobble keyframe injected via style tag (only once)
      this.ensureWobbleKeyframes();
    }

    rowEl.appendChild(plankEl);

    return { rowEl, platformEl: plankEl };
  }

  private ensureWobbleKeyframes(): void {
    if (document.getElementById('scaffold-wobble-style')) return;
    const style = document.createElement('style');
    style.id = 'scaffold-wobble-style';
    style.textContent = `
      @keyframes scaffold-wobble {
        0%, 100% { transform: rotate(0deg) translateX(0); }
        20% { transform: rotate(-2deg) translateX(-3px); }
        40% { transform: rotate(2deg) translateX(3px); }
        60% { transform: rotate(-1.5deg) translateX(-2px); }
        80% { transform: rotate(1.5deg) translateX(2px); }
      }
      @keyframes scaffold-flash {
        0%, 100% { background: rgba(240,70,70,0); }
        50% { background: rgba(240,70,70,0.5); }
      }
      @keyframes scaffold-win {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  private getJarradEmoji(): string {
    // Jarrad: glasses, beard, bucket
    return '<span title="Jarrad">👷🏻‍♂️🪣</span>';
  }

  private makeMobileButton(label: string): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.style.cssText = `
      background: rgba(193,102,107,0.92);
      color: #fff; border: none; border-radius: 14px;
      padding: 16px 28px; font-size: clamp(16px, 4vw, 20px);
      font-weight: 800; cursor: pointer;
      font-family: system-ui, sans-serif;
      touch-action: manipulation;
      box-shadow: 0 3px 10px rgba(0,0,0,0.4);
      min-width: 100px; min-height: 56px;
    `;
    btn.textContent = label;
    return btn;
  }

  private getPlatformRowEl(level: number): HTMLDivElement | null {
    return this.platforms[level]?.el ?? null;
  }

  private getRowTopOffset(level: number, containerEl: HTMLDivElement): number {
    // Level 1 = bottom, level 6 = top
    // DOM order: level 6 is first child, level 1 is last child
    const children = Array.from(containerEl.children) as HTMLElement[];
    // children[0] = level 6 row, children[5] = level 1 row
    const childIndex = SCAFFOLD_LEVELS - level; // level 6 → 0, level 1 → 5
    const rowEl = children[childIndex] as HTMLDivElement;
    if (!rowEl) return 0;
    return rowEl.offsetTop + rowEl.offsetHeight - 28; // sit on top of the plank
  }

  private repositionJarrad(scaffoldArea: HTMLDivElement): void {
    if (!this.jarradEl || this.done) return;
    const topPx = this.getRowTopOffset(this.jarradLevel, scaffoldArea);
    this.jarradEl.style.top = `${topPx}px`;
    // Horizontally offset left of pigeon a bit
    this.jarradEl.style.left = `10px`;
  }

  private repositionPigeon(scaffoldArea: HTMLDivElement): void {
    if (!this.pigeonEl || this.done) return;
    const topPx = this.getRowTopOffset(this.pigeonLevel, scaffoldArea);
    this.pigeonEl.style.top = `${topPx}px`;
    this.pigeonEl.style.left = `${this.pigeonX}%`;
    this.pigeonEl.style.transform = this.pigeonDir < 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  private tryMove(direction: 1 | -1): void {
    if (this.done) return;

    const newLevel = this.jarradLevel + direction;
    if (newLevel < 1 || newLevel > SCAFFOLD_LEVELS) {
      if (newLevel < 1) {
        // Tried to go below level 1 = fall off
        this.loseLife('Fell off the bottom! 💥');
      }
      return;
    }

    this.jarradLevel = newLevel;

    // Get scaffold area reference
    const scaffoldArea = this.jarradEl?.parentElement as HTMLDivElement;
    if (scaffoldArea) this.repositionJarrad(scaffoldArea);

    // Clear any pending wobble timer
    if (this.wobbleTimer) {
      clearTimeout(this.wobbleTimer);
      this.wobbleTimer = null;
    }

    // Check if this platform is wobbly
    const platform = this.platforms[this.jarradLevel];
    if (platform?.wobbly && this.jarradLevel !== SCAFFOLD_LEVELS) {
      platform.el.style.animation = '';
      // Re-trigger animation
      void platform.el.offsetWidth;
      platform.el.style.animation = 'scaffold-wobble 0.5s ease-in-out infinite';

      this.wobbleTimer = setTimeout(() => {
        if (this.done || this.jarradLevel !== newLevel) return; // moved away
        platform.el.style.animation = '';
        // Slip down one level
        this.jarradLevel = Math.max(1, this.jarradLevel - 1);
        if (scaffoldArea) this.repositionJarrad(scaffoldArea);
        this.flashDamage();
      }, WOBBLE_DELAY_MS);
    } else if (platform) {
      platform.el.style.animation = '';
    }

    // Check win
    if (this.jarradLevel === SCAFFOLD_LEVELS) {
      this.wobbleTimer && clearTimeout(this.wobbleTimer);
      this.finishGame(true, false);
    }
  }

  private checkPigeonCollision(): void {
    if (this.done) return;
    if (this.pigeonLevel !== this.jarradLevel) return;

    // Jarrad is at left ~10% position, pigeon walks across
    // Collision when pigeon is in 5–35% range (near left side where Jarrad stands)
    if (this.pigeonX < 35) {
      this.loseLife('🐦 Pigeon attack!');
    }
  }

  private loseLife(reason: string): void {
    if (this.done) return;
    this.lives = Math.max(0, this.lives - 1);
    this.updateLivesDisplay();
    this.flashDamage();

    // Reset pigeon to different level
    const scaffoldArea = this.jarradEl?.parentElement as HTMLDivElement;
    this.resetPigeon(scaffoldArea);

    // Show reason briefly
    this.showFloatingText(reason);

    if (this.lives <= 0) {
      setTimeout(() => this.finishGame(false, false), 800);
    }
  }

  private flashDamage(): void {
    if (!this.root) return;
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: absolute; inset: 0; z-index: 99;
      background: rgba(240,70,70,0.4);
      animation: scaffold-flash 0.5s ease;
      pointer-events: none;
    `;
    this.root.appendChild(flash);
    setTimeout(() => flash.remove(), 600);
  }

  private showFloatingText(text: string): void {
    if (!this.root) return;
    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute; left: 50%; top: 40%;
      transform: translateX(-50%);
      color: #FF6B6B; font-size: clamp(16px, 4vw, 24px);
      font-weight: 900; text-shadow: 0 2px 8px rgba(0,0,0,0.9);
      z-index: 100; text-align: center; pointer-events: none;
      white-space: nowrap;
    `;
    el.textContent = text;
    this.root.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  private resetPigeon(scaffoldArea: HTMLDivElement | null): void {
    // Move pigeon to a different level
    const available = [2, 3, 4, 5].filter(l => l !== this.pigeonLevel && l !== this.jarradLevel);
    this.pigeonLevel = available[Math.floor(Math.random() * available.length)] ?? 3;
    this.pigeonX = 50;
    if (scaffoldArea) this.repositionPigeon(scaffoldArea);
  }

  private schedulePigeonRespawn(scaffoldArea: HTMLDivElement): void {
    this.pigeonResetTimer = setTimeout(() => {
      if (!this.done) {
        this.resetPigeon(scaffoldArea);
        this.schedulePigeonRespawn(scaffoldArea);
      }
    }, PIGEON_RESET_MS);
  }

  private updateLivesDisplay(): void {
    if (!this.livesEl) return;
    const hearts = '❤️'.repeat(this.lives) + '🖤'.repeat(3 - this.lives);
    this.livesEl.textContent = `Lives: ${hearts}`;
  }

  private finishGame(won: boolean, timeout: boolean): void {
    if (this.done) return;
    this.done = true;

    this.clearTimers();

    // Stop wobble animations
    this.platforms.forEach(p => {
      if (p?.el) p.el.style.animation = '';
    });

    const elapsed = (Date.now() - this.startTime) / 1000; // seconds

    // Score calculation
    let score: number;
    let message: string;
    let qualityPct: number;

    if (!won || timeout) {
      score = 0;
      qualityPct = 0;
      message = "Jarrad's on the ground. The bucket too. Phil's not happy.";
    } else {
      // Time bonus: under 30s = perfect time, 60s = no bonus
      const timeBonus = Math.max(0, Math.min(20, Math.round(20 * (1 - (elapsed - 15) / 45))));

      if (this.lives === 3) {
        score = Math.min(100, 80 + timeBonus);
        qualityPct = score / 100;
        message = "Jarrad didn't even spill a drop. Legends cry.";
      } else if (this.lives === 2) {
        score = Math.min(80, 60 + timeBonus);
        qualityPct = score / 100;
        message = 'Lost a life to a pigeon. Classic Jarrad.';
      } else {
        score = Math.min(60, 40 + timeBonus);
        qualityPct = score / 100;
        message = 'Two pigeon incidents. The scaffold survived though.';
      }
    }

    const result: MiniGameResult = { score, qualityPct, message };

    // Show result overlay
    if (this.root) {
      const colour = score >= 75 ? '#5EDB7D' : score >= 50 ? '#F7C948' : '#F07070';
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 20px;
        background: rgba(0,0,0,0.78);
        z-index: 200;
      `;
      overlay.innerHTML = `
        <div style="font-size: clamp(60px,18vw,90px);">${won ? '🏆' : '💀'}</div>
        <div style="font-size: clamp(44px,13vw,72px); font-weight:900; color:${colour}; text-shadow:0 4px 20px rgba(0,0,0,0.8);">${score}%</div>
        <div style="font-size: clamp(14px,3.5vw,20px); color:#fff; text-align:center; padding:0 28px; text-shadow:0 2px 8px rgba(0,0,0,0.8); max-width:340px;">${message}</div>
      `;
      this.root.appendChild(overlay);
    }

    setTimeout(() => this.onComplete?.(result), 2500);
  }

  private clearTimers(): void {
    if (this.pigeonAnimFrame) { clearInterval(this.pigeonAnimFrame); this.pigeonAnimFrame = null; }
    if (this.pigeonInterval) { clearInterval(this.pigeonInterval); this.pigeonInterval = null; }
    if (this.pigeonResetTimer) { clearTimeout(this.pigeonResetTimer); this.pigeonResetTimer = null; }
    if (this.wobbleTimer) { clearTimeout(this.wobbleTimer); this.wobbleTimer = null; }
    if (this.safetyTimer) { clearTimeout(this.safetyTimer); this.safetyTimer = null; }
  }

  unmount(): void {
    this.done = true;
    this.clearTimers();
    if (this.keyHandler) {
      window.removeEventListener('keydown', this.keyHandler);
      this.keyHandler = null;
    }
    this.root?.remove();
    this.root = null;
    this.onComplete = null;
    this.jarradEl = null;
    this.pigeonEl = null;
    this.livesEl = null;
    this.platforms = [];
  }
}
