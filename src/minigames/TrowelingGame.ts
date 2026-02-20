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

const TROWEL_MESSAGES = [
  "Flawless. Matt's crying. He won't admit it.",
  "Bloody beautiful. TEM material right there.",
  "Good enough. Karen won't notice the patch.",
  "Passable. Call it 'textured'. Send the invoice.",
  "Jarrad could've done better. Probably.",
  "That wall has seen better days. So have you.",
];

export class TrowelingGame {
  private root: HTMLDivElement | null = null;
  private onComplete: ((result: MiniGameResult) => void) | null = null;
  private score = 0;
  private strokes = 0;
  private readonly STROKES_NEEDED = 8;
  private timeLeft = 30;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private done = false;
  private timerBar: HTMLDivElement | null = null;
  private pctEl: HTMLDivElement | null = null;

  mount(container: HTMLDivElement, onComplete: (result: MiniGameResult) => void): void {
    this.onComplete = onComplete;
    this.done = false;
    this.strokes = 0;
    this.score = 0;

    const photo = TEM_PHOTOS[Math.floor(Math.random() * TEM_PHOTOS.length)];

    // Root wrapper
    this.root = document.createElement('div');
    this.root.style.cssText = `
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      font-family: system-ui, sans-serif;
      user-select: none; touch-action: none;
      overflow: hidden;
    `;

    // Background photo
    const bg = document.createElement('div');
    bg.style.cssText = `
      position: absolute; inset: 0;
      background: url('${photo}') center/cover no-repeat;
      filter: brightness(0.35);
    `;
    this.root.appendChild(bg);

    // Timer bar
    const timerTrack = document.createElement('div');
    timerTrack.style.cssText = `
      position: absolute; top: 60px; left: 10%; width: 80%; height: 12px;
      background: rgba(0,0,0,0.5); border-radius: 8px; overflow: hidden;
    `;
    this.timerBar = document.createElement('div');
    this.timerBar.style.cssText = `
      width: 100%; height: 100%; background: #5EDB7D;
      border-radius: 8px; transition: width 1s linear, background 0.5s;
    `;
    timerTrack.appendChild(this.timerBar);
    this.root.appendChild(timerTrack);

    // Instruction
    const instr = document.createElement('div');
    instr.style.cssText = `
      position: absolute; top: 90px;
      width: 100%; text-align: center;
      color: #fff; font-size: clamp(16px,4vw,22px);
      font-weight: 700; text-shadow: 0 2px 8px rgba(0,0,0,0.8);
    `;
    instr.textContent = '🧱 SWIPE TO TROWEL THE WALL!';
    this.root.appendChild(instr);

    // Progress %
    this.pctEl = document.createElement('div');
    this.pctEl.style.cssText = `
      position: absolute; bottom: 100px;
      width: 100%; text-align: center;
      color: #fff; font-size: clamp(28px,8vw,48px);
      font-weight: 900; text-shadow: 0 2px 12px rgba(0,0,0,0.9);
    `;
    this.pctEl.textContent = '0%';
    this.root.appendChild(this.pctEl);

    // Trowel swipe zone — the main interactive area
    const zone = document.createElement('div');
    zone.style.cssText = `
      position: absolute; inset: 0;
      cursor: crosshair;
    `;

    let lastY = 0;
    const onSwipe = (y: number) => {
      if (this.done) return;
      const dy = Math.abs(y - lastY);
      if (dy > 5) {
        lastY = y;
        this.addStroke(bg, zone);
      }
    };

    zone.addEventListener('mousemove', (e) => {
      if (e.buttons === 0) return;
      onSwipe(e.clientY);
    });
    zone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      onSwipe(e.touches[0].clientY);
    }, { passive: false });
    zone.addEventListener('touchstart', (e) => {
      lastY = e.touches[0].clientY;
    }, { passive: true });
    zone.addEventListener('mousedown', (e) => {
      lastY = e.clientY;
    });

    this.root.appendChild(zone);
    container.appendChild(this.root);

    // Timer
    this.timerInterval = setInterval(() => {
      if (this.done) return;
      this.timeLeft--;
      const frac = this.timeLeft / 30;
      if (this.timerBar) {
        this.timerBar.style.width = `${frac * 100}%`;
        this.timerBar.style.background = frac < 0.33 ? '#F07070' : frac < 0.6 ? '#F7C948' : '#5EDB7D';
      }
      if (this.timeLeft <= 0) this.finish();
    }, 1000);
  }

  private addStroke(bg: HTMLDivElement, zone: HTMLDivElement): void {
    this.strokes++;
    const pct = Math.min(100, Math.round((this.strokes / this.STROKES_NEEDED) * 100));
    if (this.pctEl) this.pctEl.textContent = `${pct}%`;

    // Gradually reveal photo by reducing brightness filter
    const brightness = 0.35 + (0.65 * this.strokes / this.STROKES_NEEDED);
    bg.style.filter = `brightness(${Math.min(1, brightness)})`;

    // Flash effect on zone
    zone.style.background = `rgba(255,255,255,${0.08})`;
    setTimeout(() => { zone.style.background = ''; }, 80);

    this.score = pct;

    if (this.strokes >= this.STROKES_NEEDED) {
      this.finish();
    }
  }

  private finish(): void {
    if (this.done) return;
    this.done = true;
    if (this.timerInterval) clearInterval(this.timerInterval);

    const qualityPct = Math.min(1, this.score / 100);
    const msgIndex = Math.floor((1 - qualityPct) * (TROWEL_MESSAGES.length - 1));
    const message = TROWEL_MESSAGES[Math.max(0, msgIndex)];
    const result: MiniGameResult = { score: this.score, qualityPct, message };

    // Show result screen briefly
    if (this.root) {
      const colour = this.score >= 85 ? '#5EDB7D' : this.score >= 60 ? '#F7C948' : '#F07070';
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center; gap: 16px;
        background: rgba(0,0,0,0.7);
      `;
      overlay.innerHTML = `
        <div style="font-size:clamp(48px,15vw,80px); font-weight:900; color:${colour}; text-shadow:0 4px 20px rgba(0,0,0,0.8);">${this.score}%</div>
        <div style="font-size:clamp(14px,3.5vw,20px); color:#fff; text-align:center; padding:0 24px; text-shadow:0 2px 8px rgba(0,0,0,0.8);">${message}</div>
      `;
      this.root.appendChild(overlay);
    }

    setTimeout(() => this.onComplete?.(result), 2000);
  }

  unmount(): void {
    this.done = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.root?.remove();
    this.root = null;
    this.onComplete = null;
  }
}
