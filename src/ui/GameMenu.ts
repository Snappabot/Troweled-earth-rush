/**
 * GameMenu — hamburger dropdown in the top-right corner.
 * Contains: money/BTC panel, radio, photo button, jobs button.
 */
export class GameMenu {
  private btn!: HTMLButtonElement;
  private panel!: HTMLDivElement;
  private radioSlot!: HTMLDivElement;
  private moneySlot!: HTMLDivElement;
  private _open = false;

  constructor(onPhoto: () => void, onJobs: () => void, onMixer?: () => void) {
    this._build(onPhoto, onJobs, onMixer);
  }

  private _build(onPhoto: () => void, onJobs: () => void, onMixer?: () => void): void {
    // ── Hamburger button — top-right ─────────────────────────────────────────
    this.btn = document.createElement('button');
    this.btn.textContent = '☰';
    this.btn.style.cssText = `
      position: fixed; top: 10px; right: 12px; z-index: 3100;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(10px);
      border: 1px solid rgba(200,168,106,0.4); border-radius: 12px;
      color: #C8A86A; font-size: 20px; font-weight: 900;
      width: 44px; height: 44px; line-height: 1;
      cursor: pointer; touch-action: manipulation;
      box-shadow: 0 2px 12px rgba(0,0,0,0.55);
      transition: background 0.15s, color 0.15s;
    `;
    this.btn.addEventListener('click', (e) => { e.stopPropagation(); this._toggle(); });
    document.body.appendChild(this.btn);

    // ── Dropdown panel ────────────────────────────────────────────────────────
    this.panel = document.createElement('div');
    this.panel.style.cssText = `
      position: fixed; top: 62px; right: 10px; z-index: 3099;
      background: rgba(8,6,4,0.95); backdrop-filter: blur(18px);
      border: 1px solid rgba(200,168,106,0.22); border-radius: 18px;
      padding: 16px 14px; width: min(300px, calc(100vw - 24px));
      display: none; flex-direction: column; gap: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.75);
      font-family: system-ui, sans-serif;
      max-height: calc(100vh - 80px); overflow-y: auto;
    `;

    // ── Money slot (filled by mountMoneyPanel) ────────────────────────────────
    this.moneySlot = document.createElement('div');
    this.panel.appendChild(this.moneySlot);

    this.panel.appendChild(this._divider());

    // ── Radio slot (filled by mountRadio) ─────────────────────────────────────
    this.radioSlot = document.createElement('div');
    this.panel.appendChild(this.radioSlot);

    this.panel.appendChild(this._divider());

    // ── Action buttons row ────────────────────────────────────────────────────
    const btnRow = document.createElement('div');
    btnRow.style.cssText = `display: flex; gap: 10px;`;

    const photoBtn = this._actionBtn('🪣  Collection', 'rgba(70,60,30,0.9)', () => {
      this._close(); onPhoto();
    });
    const jobsBtn = this._actionBtn('📋  JOBS', 'rgba(193,102,107,0.9)', () => {
      this._close(); onJobs();
    });
    btnRow.appendChild(photoBtn);
    btnRow.appendChild(jobsBtn);
    this.panel.appendChild(btnRow);

    // ── Mixer button (full-width, second row) ─────────────────────────────────
    if (onMixer) {
      const mixerBtn = this._actionBtn('🎨  MARBELLINO MIXER', 'rgba(30,50,40,0.9)', () => {
        this._close(); onMixer();
      });
      mixerBtn.style.cssText += `
        width:100%; margin-top:2px;
        background:linear-gradient(135deg, rgba(40,70,50,0.95), rgba(20,40,30,0.95));
        border:1px solid rgba(68,221,136,0.2);
        color:#88FFBB; font-size:13px;
      `;
      this.panel.appendChild(mixerBtn);
    }

    document.body.appendChild(this.panel);

    // Close on outside tap
    document.addEventListener('pointerdown', (e) => {
      if (this._open && !this.panel.contains(e.target as Node) && e.target !== this.btn) {
        this._close();
      }
    }, { passive: true });
  }

  private _toggle(): void { this._open ? this._close() : this._openPanel(); }

  private _openPanel(): void {
    this._open = true;
    this.panel.style.display = 'flex';
    this.btn.textContent = '✕';
    this.btn.style.color = '#ff9999';
  }

  private _close(): void {
    this._open = false;
    this.panel.style.display = 'none';
    this.btn.textContent = '☰';
    this.btn.style.color = '#C8A86A';
  }

  /** Inject HUD money/BTC panel into the menu */
  mountMoneyPanel(el: HTMLElement): void {
    el.style.cssText += `position:relative; top:auto; right:auto; align-items:flex-start;`;
    this.moneySlot.appendChild(el);
  }

  /** Inject TEMRadio container into the menu */
  mountRadio(el: HTMLElement): void {
    el.style.cssText += `position:relative; top:auto; left:auto; transform:none; width:100%;`;
    this.radioSlot.appendChild(el);
  }

  private _actionBtn(label: string, bg: string, onClick: () => void): HTMLButtonElement {
    const b = document.createElement('button');
    b.innerHTML = label;
    b.style.cssText = `
      flex: 1; background: ${bg}; border: none; color: #fff;
      font-size: 14px; font-weight: 800; letter-spacing: 0.5px;
      padding: 13px 14px; border-radius: 12px; cursor: pointer;
      touch-action: manipulation; box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      font-family: system-ui, sans-serif;
    `;
    b.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
    return b;
  }

  private _divider(): HTMLDivElement {
    const d = document.createElement('div');
    d.style.cssText = `height: 1px; background: rgba(200,168,106,0.12); margin: 0 -4px;`;
    return d;
  }
}
