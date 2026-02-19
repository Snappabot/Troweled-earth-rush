export class HUD {
    container;
    spillBar;
    speedText;
    constructor() {
        this.container = document.createElement('div');
        this.container.style.cssText = `
      position: fixed; bottom: 20px; left: 20px; right: 20px;
      pointer-events: none; font-family: monospace; color: white;
    `;
        this.spillBar = document.createElement('div');
        this.spillBar.style.cssText = `
      width: 200px; height: 20px; background: #333;
      border: 2px solid #fff; border-radius: 4px; overflow: hidden;
      margin-bottom: 8px;
    `;
        const spillFill = document.createElement('div');
        spillFill.id = 'spill-fill';
        spillFill.style.cssText = `height: 100%; width: 0%; background: #C1666B; transition: width 0.1s;`;
        this.spillBar.appendChild(spillFill);
        this.speedText = document.createElement('div');
        this.speedText.style.cssText = `font-size: 18px; text-shadow: 1px 1px 2px #000;`;
        this.container.appendChild(this.spillBar);
        this.container.appendChild(this.speedText);
        document.body.appendChild(this.container);
    }
    update(speed, spillPct) {
        this.speedText.textContent = `${Math.abs(Math.round(speed * 3.6))} km/h`;
        const fill = document.getElementById('spill-fill');
        if (fill)
            fill.style.width = `${spillPct * 100}%`;
    }
}
