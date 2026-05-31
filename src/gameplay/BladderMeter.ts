export class BladderMeter {
  level = 0;               // 0.0–1.0
  isUrgent = false;
  lastUrgentToast = 0;     // timestamp ms

  /** True for 30s after drinking coffee — bladder fills 1.5x faster */
  caffeinated = false;
  private caffeineTimer = 0;

  private _el: HTMLDivElement;
  private _fill: HTMLDivElement;

  constructor() {
    this._el = document.createElement('div');
    this._el.style.cssText = `
      position:fixed; left:10px; top:42%; z-index:1500;
      display:flex; align-items:center; gap:6px;
      pointer-events:none; opacity:0; transition:opacity 0.3s;
    `;
    this._el.innerHTML = `<span style="font-size:20px">🚽</span>`;
    const bar = document.createElement('div');
    bar.style.cssText = `
      width:6px; height:60px; background:rgba(255,255,255,0.15);
      border-radius:3px; overflow:hidden; position:relative;
    `;
    this._fill = document.createElement('div');
    this._fill.style.cssText = `
      position:absolute; bottom:0; left:0; right:0;
      background:#4A90D9; border-radius:3px;
      transition: height 0.5s, background 0.3s;
    `;
    bar.appendChild(this._fill);
    this._el.appendChild(bar);
    document.body.appendChild(this._el);
  }

  update(dt: number, vanSpeed: number): void {
    // Tick caffeine countdown
    if (this.caffeinated) {
      this.caffeineTimer -= dt;
      if (this.caffeineTimer <= 0) this.caffeinated = false;
    }

    const fillRate = this.caffeinated ? 0.018 : 0.012;

    if (Math.abs(vanSpeed) > 2) {
      this.level = Math.min(1, this.level + dt * fillRate);
    } else {
      this.level = Math.max(0, this.level - dt * 0.005);
    }
    this.isUrgent = this.level > 0.8;

    // Update visual
    this._fill.style.height = `${this.level * 100}%`;
    this._fill.style.background = this.level > 0.85
      ? '#E74C3C'
      : this.level > 0.6 ? '#F39C12' : '#4A90D9';
    this._el.style.opacity = this.level > 0.3 ? '1' : '0';
  }

  /** Call when player visits the coffee shop */
  drinkCoffee(): void {
    this.level = Math.min(1, this.level + 0.4);   // spike bladder +40%
    this.caffeinated = true;
    this.caffeineTimer = 30;                       // 30s caffeinated state
    this.isUrgent = this.level > 0.8;
  }

  tryRelief(vanX: number, vanZ: number): boolean {
    const dx = vanX - 100;
    const dz = vanZ - 60;
    if (Math.sqrt(dx * dx + dz * dz) > 14) return false;
    if (this.level === 0) return false;
    this.level = 0;
    this.isUrgent = false;
    this.caffeinated = false;
    this.caffeineTimer = 0;
    return true;
  }

  get spillMultiplier(): number {
    return this.isUrgent ? 1.8 : 1.0;
  }
}
