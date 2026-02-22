/**
 * DialoguePause — full-screen modal that freezes the game at checkpoints.
 * Player taps GAS or REV (or anywhere on the overlay) to continue.
 */
export class DialoguePause {
  private overlay: HTMLDivElement;
  private titleEl: HTMLDivElement;
  private bodyEl: HTMLDivElement;

  private _active = false;
  private _readyToResume = false;
  private _resumeCallback: (() => void) | null = null;
  private _readyTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // ── Blink animation ───────────────────────────────────────────────────────
    if (!document.getElementById('dp-blink-style')) {
      const s = document.createElement('style');
      s.id = 'dp-blink-style';
      s.textContent = `
        @keyframes dpBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes dpSlideUp { from{transform:translateY(32px);opacity:0} to{transform:translateY(0);opacity:1} }
      `;
      document.head.appendChild(s);
    }

    // ── Backdrop ──────────────────────────────────────────────────────────────
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 8000;
      background: rgba(0,0,0,0.74);
      display: none; flex-direction: column;
      align-items: center; justify-content: flex-end;
      padding: 0 0 90px 0;
      touch-action: manipulation;
    `;

    // ── Card ──────────────────────────────────────────────────────────────────
    const card = document.createElement('div');
    card.style.cssText = `
      width: min(480px, 92vw);
      background: #1A1208;
      border: 2.5px solid #C1666B;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 12px 48px rgba(0,0,0,0.85);
      font-family: system-ui, -apple-system, sans-serif;
      animation: dpSlideUp 0.22s ease-out both;
    `;

    // ── Header ────────────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.style.cssText = `
      background: linear-gradient(135deg, #C1666B 0%, #9E4A50 100%);
      padding: 14px 20px 12px;
    `;

    this.titleEl = document.createElement('div');
    this.titleEl.style.cssText = `
      color: #fff;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.4px;
      text-shadow: 0 1px 4px rgba(0,0,0,0.35);
    `;

    // ── Body ──────────────────────────────────────────────────────────────────
    const bodyWrap = document.createElement('div');
    bodyWrap.style.cssText = `padding: 16px 20px 4px;`;

    this.bodyEl = document.createElement('div');
    this.bodyEl.style.cssText = `
      color: #EEE8E0;
      font-size: 14.5px;
      line-height: 1.65;
      white-space: pre-wrap;
      max-height: 38vh;
      overflow-y: auto;
    `;

    // ── Hint ──────────────────────────────────────────────────────────────────
    const hint = document.createElement('div');
    hint.style.cssText = `
      color: #C1666B;
      font-size: 13px;
      font-weight: 700;
      text-align: center;
      padding: 14px 0 18px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.1s ease-in-out infinite;
    `;
    hint.textContent = '▶  TAP GAS or REV to continue';

    // ── Assemble ──────────────────────────────────────────────────────────────
    header.appendChild(this.titleEl);
    bodyWrap.appendChild(this.bodyEl);
    card.appendChild(header);
    card.appendChild(bodyWrap);
    card.appendChild(hint);
    this.overlay.appendChild(card);
    document.body.appendChild(this.overlay);

    // Tap anywhere on backdrop also resumes
    this.overlay.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.tryResume();
    }, { passive: false });
    this.overlay.addEventListener('click', () => this.tryResume());
  }

  /**
   * Show the pause dialogue.
   * @param title   Header text (short — phase / event name)
   * @param body    Main message text (job description, mission brief, etc.)
   * @param onResume  Called when player taps GAS/REV to continue
   */
  show(title: string, body: string, onResume: () => void): void {
    if (this._readyTimer) { clearTimeout(this._readyTimer); this._readyTimer = null; }
    this._active = true;
    this._readyToResume = false;
    this._resumeCallback = onResume;
    this.titleEl.textContent = title;
    this.bodyEl.textContent = body;
    this.overlay.style.display = 'flex';
    // Brief lockout so the dialogue doesn't dismiss from the tap that triggered it
    this._readyTimer = setTimeout(() => { this._readyToResume = true; }, 380);
  }

  /**
   * Call every frame while dialogue is active — pass input.forward || input.brake.
   * Dismisses when ready.
   */
  tryResume(): void {
    if (!this._active || !this._readyToResume) return;
    this._active = false;
    this._readyToResume = false;
    this.overlay.style.display = 'none';
    if (this._readyTimer) { clearTimeout(this._readyTimer); this._readyTimer = null; }
    const cb = this._resumeCallback;
    this._resumeCallback = null;
    cb?.();
  }

  get isActive(): boolean { return this._active; }
}
