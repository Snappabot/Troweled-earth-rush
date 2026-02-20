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
        // Clear anything left in the overlay
        this.overlay.innerHTML = '';
        // Mount the troweling game into the overlay
        this.trowelingGame = new TrowelingGame();
        this.trowelingGame.mount(this.overlay, (result) => {
            this.stop();
            onComplete(result);
        });
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
