import type { RivalCrew } from '../data/RivalCrews';

// ── ContractWar — manages the active rival battle during a contested job ─────

export class ContractWar {
  private _active = false;
  private _rival: RivalCrew | null = null;
  private _rivalProgress = 0;   // 0 – 1
  private _playerProgress = 0;  // 0 – 1 (set externally)
  private _el: HTMLElement | null = null;

  /** Start tracking a contract war against this rival */
  start(rival: RivalCrew): void {
    this.end(); // clean up any prior

    this._active = true;
    this._rival = rival;
    this._rivalProgress = 0;
    this._playerProgress = 0;

    this._buildUI(rival);
  }

  /** Called by the mini-game system as the player makes progress */
  setPlayerProgress(pct: number): void {
    this._playerProgress = Math.min(1, Math.max(0, pct));
  }

  /** Tick rival progress forward — call from main game loop */
  update(dt: number): void {
    if (!this._active || !this._rival) return;

    // Speed formula: rival.speed * 0.4 units/sec
    // At speed=1.0 → finishes in 1/0.4 = 2.5 min
    // At speed=0.42 → finishes in 1/0.168 ≈ 5.95 min
    this._rivalProgress = Math.min(1, this._rivalProgress + this._rival.speed * 0.4 * dt);
    this._updateUI();

    if (this._rivalProgress >= 1 && this.checkResult() === 'rival-wins') {
      this._showRivalWin();
    }
  }

  isActive(): boolean {
    return this._active;
  }

  getRivalProgress(): number {
    return this._rivalProgress;
  }

  checkResult(): 'player-wins' | 'rival-wins' | 'ongoing' {
    if (this._playerProgress >= 1) return 'player-wins';
    if (this._rivalProgress >= 1) return 'rival-wins';
    return 'ongoing';
  }

  /** Clean up and hide the rival progress bar */
  end(): void {
    this._active = false;
    this._rival = null;
    this._rivalProgress = 0;
    this._playerProgress = 0;
    this._el?.remove();
    this._el = null;
  }

  // ── Internal UI ────────────────────────────────────────────────────────────

  private _buildUI(rival: RivalCrew): void {
    const container = document.createElement('div');
    container.id = 'contract-war-hud';
    container.style.cssText = `
      position:fixed; top:0; left:0; right:0; z-index:5000;
      pointer-events:none;
    `;

    // Label above bar
    const label = document.createElement('div');
    label.id = 'cw-label';
    label.style.cssText = `
      background:rgba(0,0,0,0.7);
      color:${rival.color};
      font-family:'Arial Black',Arial,sans-serif;
      font-size:10px; font-weight:900;
      letter-spacing:1px;
      padding:2px 8px;
      display:inline-block;
    `;
    label.textContent = `⚔️ ${rival.name.toUpperCase()} PROGRESS`;
    container.appendChild(label);

    // Progress bar track
    const track = document.createElement('div');
    track.style.cssText = `
      position:relative;
      width:100%; height:8px;
      background:rgba(0,0,0,0.5);
      overflow:hidden;
    `;

    const fill = document.createElement('div');
    fill.id = 'cw-fill';
    fill.style.cssText = `
      height:100%;
      width:0%;
      background:linear-gradient(90deg,${rival.color},#FF0000);
      transition:width 0.3s linear;
      box-shadow:0 0 8px ${rival.color}88;
    `;
    track.appendChild(fill);
    container.appendChild(track);

    document.body.appendChild(container);
    this._el = container;
  }

  private _updateUI(): void {
    const fill = document.getElementById('cw-fill');
    if (fill) {
      fill.style.width = `${this._rivalProgress * 100}%`;
    }
  }

  private _showRivalWin(): void {
    // Only flash once
    if (document.getElementById('cw-rival-win')) return;

    const flash = document.createElement('div');
    flash.id = 'cw-rival-win';
    flash.style.cssText = `
      position:fixed; inset:0; z-index:14999;
      background:rgba(180,0,0,0.82);
      display:flex; align-items:center; justify-content:center;
      font-family:'Arial Black',Arial,sans-serif;
      font-size:clamp(20px,6vw,40px); font-weight:900;
      color:#fff; text-align:center; letter-spacing:2px;
      text-shadow:0 0 20px #FF0000;
      animation:cw-flash-in 0.3s ease;
      padding:20px;
    `;
    flash.innerHTML = `THEY WON THE CONTRACT 😤<br>
      <span style="font-size:0.5em;color:#ffaaaa;letter-spacing:1px;">Better luck next time, mate.</span>`;

    if (!document.getElementById('cw-flash-style')) {
      const s = document.createElement('style');
      s.id = 'cw-flash-style';
      s.textContent = `@keyframes cw-flash-in{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}`;
      document.head.appendChild(s);
    }

    document.body.appendChild(flash);
    setTimeout(() => { flash.remove(); this.end(); }, 2000);
  }
}
