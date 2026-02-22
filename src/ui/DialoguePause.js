/**
 * DialoguePause — full-screen modal that freezes the game at checkpoints.
 * Each checkpoint gives the player 15 seconds to read, then auto-continues.
 * Travel timer is paused for the full duration (handled in game loop).
 * Player can tap GAS / REV / anywhere to skip early.
 */
const CHECKPOINT_SECONDS = 15;
export class DialoguePause {
    overlay;
    titleEl;
    bodyEl;
    hintEl;
    progressBar;
    _active = false;
    _readyToResume = false;
    _resumeCallback = null;
    _lockTimer = null;
    _countdownInterval = null;
    _autoTimer = null;
    _secondsLeft = CHECKPOINT_SECONDS;
    constructor() {
        // ── Inject CSS ────────────────────────────────────────────────────────────
        if (!document.getElementById('dp-styles')) {
            const s = document.createElement('style');
            s.id = 'dp-styles';
            s.textContent = `
        @keyframes dpBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes dpSlideUp { from{transform:translateY(36px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes dpDrain { from{width:100%} to{width:0%} }
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
      padding: 0 0 88px 0;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;
        this.titleEl = document.createElement('div');
        this.titleEl.style.cssText = `
      color: #fff;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.4px;
      text-shadow: 0 1px 4px rgba(0,0,0,0.35);
      flex: 1;
    `;
        // Countdown badge (top-right of header)
        const countdownBadge = document.createElement('div');
        countdownBadge.style.cssText = `
      background: rgba(0,0,0,0.28);
      color: #fff;
      font-size: 15px;
      font-weight: 900;
      border-radius: 50%;
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 12px;
      font-variant-numeric: tabular-nums;
    `;
        this.hintEl = countdownBadge; // reuse hintEl ref for countdown badge
        // ── Progress bar (drains over CHECKPOINT_SECONDS) ─────────────────────────
        const progressTrack = document.createElement('div');
        progressTrack.style.cssText = `
      height: 4px;
      background: rgba(193,102,107,0.25);
    `;
        this.progressBar = document.createElement('div');
        this.progressBar.style.cssText = `
      height: 100%;
      background: #C1666B;
      width: 100%;
      transform-origin: left;
      transition: none;
    `;
        progressTrack.appendChild(this.progressBar);
        // ── Body ──────────────────────────────────────────────────────────────────
        const bodyWrap = document.createElement('div');
        bodyWrap.style.cssText = `padding: 16px 20px 4px;`;
        this.bodyEl = document.createElement('div');
        this.bodyEl.style.cssText = `
      color: #EEE8E0;
      font-size: 14.5px;
      line-height: 1.65;
      white-space: pre-wrap;
      max-height: 36vh;
      overflow-y: auto;
    `;
        // ── Tap-to-skip hint ──────────────────────────────────────────────────────
        const skipHint = document.createElement('div');
        skipHint.style.cssText = `
      color: rgba(193,102,107,0.75);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 12px 0 16px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.2s ease-in-out infinite;
    `;
        skipHint.textContent = '▶  TAP GAS or REV to skip';
        // ── Assemble ──────────────────────────────────────────────────────────────
        header.appendChild(this.titleEl);
        header.appendChild(countdownBadge);
        bodyWrap.appendChild(this.bodyEl);
        card.appendChild(header);
        card.appendChild(progressTrack);
        card.appendChild(bodyWrap);
        card.appendChild(skipHint);
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
     * Show the pause dialogue with a 15-second countdown.
     * Travel timer is paused by the game loop while isActive is true.
     */
    show(title, body, onResume) {
        this._clearTimers();
        this._active = true;
        this._readyToResume = false;
        this._resumeCallback = onResume;
        this._secondsLeft = CHECKPOINT_SECONDS;
        this.titleEl.textContent = title;
        this.bodyEl.textContent = body;
        this.hintEl.textContent = String(CHECKPOINT_SECONDS);
        this.overlay.style.display = 'flex';
        // Animate progress bar draining
        this.progressBar.style.transition = 'none';
        this.progressBar.style.width = '100%';
        // Force reflow then start drain animation
        void this.progressBar.offsetWidth;
        this.progressBar.style.transition = `width ${CHECKPOINT_SECONDS}s linear`;
        this.progressBar.style.width = '0%';
        // Short lockout so trigger-tap doesn't immediately dismiss
        this._lockTimer = setTimeout(() => {
            this._readyToResume = true;
        }, 380);
        // Countdown tick every second
        this._countdownInterval = setInterval(() => {
            this._secondsLeft = Math.max(0, this._secondsLeft - 1);
            this.hintEl.textContent = String(this._secondsLeft);
        }, 1000);
        // Auto-dismiss at 0
        this._autoTimer = setTimeout(() => {
            this._forceResume();
        }, CHECKPOINT_SECONDS * 1000);
    }
    /**
     * Called each frame by the game loop with current input state.
     * Only resumes after the brief lockout period.
     */
    tryResume() {
        if (!this._active || !this._readyToResume)
            return;
        this._doResume();
    }
    /** Force resume regardless of lockout (used for auto-dismiss). */
    _forceResume() {
        if (!this._active)
            return;
        this._doResume();
    }
    _doResume() {
        this._active = false;
        this._readyToResume = false;
        this.overlay.style.display = 'none';
        this._clearTimers();
        const cb = this._resumeCallback;
        this._resumeCallback = null;
        cb?.();
    }
    _clearTimers() {
        if (this._lockTimer) {
            clearTimeout(this._lockTimer);
            this._lockTimer = null;
        }
        if (this._autoTimer) {
            clearTimeout(this._autoTimer);
            this._autoTimer = null;
        }
        if (this._countdownInterval) {
            clearInterval(this._countdownInterval);
            this._countdownInterval = null;
        }
    }
    get isActive() { return this._active; }
}
