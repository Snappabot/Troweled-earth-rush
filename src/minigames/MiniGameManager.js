import { TrowelingGame } from './TrowelingGame';
export class MiniGameManager {
    overlay;
    active = false;
    trowelingGame = null;
    constructor() {
        // Full-screen overlay — sits above the Three.js canvas, below any system modals
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 3000;
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
        this.active = true;
        this.overlay.style.display = 'block';
        this.overlay.innerHTML = '';
        // Brief delay so browser can paint the overlay and resolve dimensions
        // before the canvas is created inside TrowelingGame
        setTimeout(() => {
            try {
                this.trowelingGame = new TrowelingGame();
                this.trowelingGame.mount(this.overlay, (result) => {
                    this.stop();
                    onComplete(result);
                });
            }
            catch (err) {
                console.error('TrowelingGame failed to init:', err);
                // Fallback: show a simple "Job Done" button so the flow doesn't get stuck
                this.overlay.innerHTML = `
          <div style="
            display:flex; flex-direction:column; align-items:center;
            justify-content:center; height:100%; color:#fff;
            font-family:system-ui,sans-serif; gap:24px;
          ">
            <div style="font-size:48px">🪣</div>
            <div style="font-size:28px; font-weight:800;">PLASTERING DONE!</div>
            <button id="mgFallbackBtn" style="
              padding:18px 40px; font-size:20px; font-weight:800;
              background:#C1666B; color:#fff; border:none;
              border-radius:14px; cursor:pointer;
            ">Collect Payment</button>
          </div>
        `;
                document.getElementById('mgFallbackBtn')?.addEventListener('click', () => {
                    this.stop();
                    onComplete({ score: 80, qualityPct: 0.8, message: 'Solid work!' });
                });
            }
        }, 100);
    }
    stop() {
        if (this.trowelingGame) {
            this.trowelingGame.unmount();
            this.trowelingGame = null;
        }
        this.overlay.style.display = 'none';
        this.overlay.innerHTML = '';
        this.active = false;
    }
}
