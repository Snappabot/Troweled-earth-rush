import { TrowelingGame } from './TrowelingGame';
export class MiniGameManager {
    overlay;
    active = false;
    trowelingGame = null;
    safetyTimer = null;
    constructor() {
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: #1a1a14;
      display: none;
      overflow: hidden;
    `;
        document.body.appendChild(this.overlay);
    }
    isActive() {
        return this.active;
    }
    startTroweling(onComplete) {
        // Reset any previous stuck state
        this.stop();
        this.active = true;
        this.overlay.style.display = 'block';
        this.overlay.innerHTML = '';
        // Always-visible skip button in top-right corner
        const skipBtn = document.createElement('button');
        skipBtn.textContent = '✓ DONE';
        skipBtn.style.cssText = `
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `;
        skipBtn.addEventListener('click', () => {
            this.stop();
            onComplete({ score: 75, qualityPct: 0.75, message: 'Job done!' });
        });
        this.overlay.appendChild(skipBtn);
        // Safety: auto-complete after 60s no matter what
        this.safetyTimer = setTimeout(() => {
            if (this.active) {
                this.stop();
                onComplete({ score: 70, qualityPct: 0.70, message: 'Time up!' });
            }
        }, 60_000);
        // Brief delay so browser can paint overlay and resolve dimensions
        setTimeout(() => {
            if (!this.active)
                return; // stopped before timeout fired
            try {
                this.trowelingGame = new TrowelingGame();
                this.trowelingGame.mount(this.overlay, (result) => {
                    if (this.safetyTimer)
                        clearTimeout(this.safetyTimer);
                    this.stop();
                    onComplete(result);
                });
            }
            catch (err) {
                console.error('TrowelingGame init failed:', err);
                // Fallback body if game crashes
                const fallback = document.createElement('div');
                fallback.style.cssText = `
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `;
                fallback.innerHTML = `
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">PLASTER APPLIED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `;
                this.overlay.appendChild(fallback);
            }
        }, 120);
    }
    stop() {
        if (this.safetyTimer) {
            clearTimeout(this.safetyTimer);
            this.safetyTimer = null;
        }
        if (this.trowelingGame) {
            this.trowelingGame.unmount();
            this.trowelingGame = null;
        }
        this.overlay.style.display = 'none';
        this.overlay.innerHTML = '';
        this.active = false;
    }
}
