import { MARBELLINO_COLOURS } from '../data/MarbellinoColours';
import { WEAPONS } from '../entities/PlayerOnFoot';

export class WeaponSelector {
  selectedWeapon = 'trowel';
  selectedHex = '#F2EDDF';
  selectedColorName = 'Custom Spanish White';
  visible = false;

  private panel!: HTMLDivElement;
  private colorPanel!: HTMLDivElement;
  private weaponBtns: HTMLButtonElement[] = [];

  constructor() {
    this._build();
  }

  show(): void {
    this.panel.style.display = 'flex';
    this.visible = true;
    this._updateColorPanelVisibility();
  }

  hide(): void {
    this.panel.style.display = 'none';
    this.colorPanel.style.display = 'none';
    this.visible = false;
  }

  private _updateColorPanelVisibility(): void {
    if (this.selectedWeapon === 'trowel' && this.visible) {
      this.colorPanel.style.display = 'flex';
    } else {
      this.colorPanel.style.display = 'none';
    }
  }

  private _build(): void {
    // ── Weapon tray ────────────────────────────────────────────────────────
    this.panel = document.createElement('div');
    this.panel.style.cssText = [
      'position:fixed',
      'bottom:120px',
      'left:50%',
      'transform:translateX(-50%)',
      'display:none',
      'flex-direction:row',
      'gap:8px',
      'z-index:4000',
      'align-items:flex-end',
      'pointer-events:auto',
    ].join(';');
    document.body.appendChild(this.panel);

    WEAPONS.forEach((w) => {
      const btn = document.createElement('button');
      btn.style.cssText = [
        'width:60px',
        'height:60px',
        'background:rgba(0,0,0,0.82)',
        'border:2px solid #555',
        'border-radius:10px',
        'color:#fff',
        'font-size:22px',
        'display:flex',
        'flex-direction:column',
        'align-items:center',
        'justify-content:center',
        'cursor:pointer',
        'touch-action:manipulation',
        'user-select:none',
        'gap:2px',
      ].join(';');

      const iconEl = document.createElement('span');
      iconEl.textContent = w.icon;
      iconEl.style.fontSize = '22px';

      const nameEl = document.createElement('span');
      nameEl.textContent = w.name.split(' ')[0];
      nameEl.style.cssText = 'font-size:9px;color:#aaa;letter-spacing:0.5px;';

      btn.appendChild(iconEl);
      btn.appendChild(nameEl);

      btn.addEventListener('click', () => {
        this.selectedWeapon = w.id;
        this._refreshSelection();
        this._updateColorPanelVisibility();
      });
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.selectedWeapon = w.id;
        this._refreshSelection();
        this._updateColorPanelVisibility();
      }, { passive: false });

      this.panel.appendChild(btn);
      this.weaponBtns.push(btn);
    });

    this._refreshSelection();

    // ── Color picker panel ─────────────────────────────────────────────────
    this.colorPanel = document.createElement('div');
    this.colorPanel.style.cssText = [
      'position:fixed',
      'bottom:190px',
      'left:50%',
      'transform:translateX(-50%)',
      'display:none',
      'flex-direction:row',
      'flex-wrap:wrap',
      'gap:6px',
      'z-index:4000',
      'background:rgba(0,0,0,0.85)',
      'border:1px solid rgba(200,168,106,0.4)',
      'border-radius:14px',
      'padding:10px',
      'max-width:340px',
      'justify-content:center',
      'pointer-events:auto',
    ].join(';');
    document.body.appendChild(this.colorPanel);

    // Title
    const title = document.createElement('div');
    title.textContent = '🎨 Paint Colour';
    title.style.cssText = [
      'width:100%',
      'text-align:center',
      'color:#C8A86A',
      'font-size:11px',
      'font-weight:800',
      'letter-spacing:1px',
      'margin-bottom:4px',
    ].join(';');
    this.colorPanel.appendChild(title);

    // Swatches
    MARBELLINO_COLOURS.forEach((col) => {
      const swatch = document.createElement('div');
      swatch.style.cssText = [
        'width:40px',
        'height:40px',
        `background:${col.hex}`,
        'border-radius:6px',
        'cursor:pointer',
        'border:2px solid transparent',
        'touch-action:manipulation',
        'flex-shrink:0',
        'position:relative',
      ].join(';');
      swatch.title = col.name;

      if (col.hex === this.selectedHex) {
        swatch.style.border = '2px solid #FFD700';
        swatch.style.boxShadow = '0 0 6px rgba(255,215,0,0.6)';
      }

      const selectColor = () => {
        this.selectedHex = col.hex;
        this.selectedColorName = col.name;
        // Update borders on all swatches
        this.colorPanel.querySelectorAll<HTMLDivElement>('[data-swatch]').forEach((s) => {
          s.style.border = '2px solid transparent';
          s.style.boxShadow = 'none';
        });
        swatch.style.border = '2px solid #FFD700';
        swatch.style.boxShadow = '0 0 6px rgba(255,215,0,0.6)';
      };

      swatch.dataset['swatch'] = col.hex;
      swatch.addEventListener('click', selectColor);
      swatch.addEventListener('touchstart', (e) => { e.preventDefault(); selectColor(); }, { passive: false });

      this.colorPanel.appendChild(swatch);
    });
  }

  private _refreshSelection(): void {
    WEAPONS.forEach((w, i) => {
      const btn = this.weaponBtns[i];
      if (w.id === this.selectedWeapon) {
        btn.style.border = '2px solid #FFD700';
        btn.style.background = 'rgba(40,30,0,0.92)';
        btn.style.boxShadow = '0 0 8px rgba(255,215,0,0.4)';
      } else {
        btn.style.border = '2px solid #555';
        btn.style.background = 'rgba(0,0,0,0.82)';
        btn.style.boxShadow = 'none';
      }
    });
  }
}
