/**
 * WeaponSelector — on-foot tool tray + TEM colour picker.
 *
 * Layout:
 *  • A round toggle button sits where REV used to be (bottom-right).
 *  • Tapping the toggle expands a vertical list of 5 weapon buttons above it.
 *  • When Trowel is selected a small "🎨 Colour" chip appears that
 *    opens a full colour-picker overlay on tap.
 */
import { MARBELLINO_COLOURS } from '../data/MarbellinoColours';
import { WEAPONS } from '../entities/PlayerOnFoot';

export class WeaponSelector {
  selectedWeapon   = 'trowel';
  selectedHex      = '#F2EDDF';
  selectedColorName = 'Custom Spanish White';
  visible = false;

  private toggleBtn!: HTMLDivElement;
  private trayEl!:    HTMLDivElement;
  private colourBtn!: HTMLDivElement;
  private colourOverlay!: HTMLDivElement;
  private weaponBtns: HTMLDivElement[] = [];
  private trayOpen = false;

  constructor() { this._build(); }

  show(): void {
    this.toggleBtn.style.display = 'flex';
    this.visible = true;
  }

  hide(): void {
    this.toggleBtn.style.display  = 'none';
    this.trayEl.style.display     = 'none';
    this.colourBtn.style.display  = 'none';
    this.colourOverlay.style.display = 'none';
    this.trayOpen = false;
    this.visible = false;
  }

  private _build(): void {
    // ── Toggle button — same position as REV ─────────────────────────────────
    this.toggleBtn = document.createElement('div');
    this.toggleBtn.style.cssText = `
      position:fixed; bottom:30px; right:30px;
      width:90px; height:90px; border-radius:50%;
      background:rgba(30,30,50,0.90);
      border:3px solid rgba(212,160,64,0.7);
      display:none; align-items:center; justify-content:center;
      flex-direction:column; gap:2px;
      color:#FFD700; font-size:22px; font-weight:900;
      z-index:2000; touch-action:manipulation; user-select:none;
      cursor:pointer;
    `;
    this.toggleBtn.innerHTML = `<span style="font-size:24px">🪚</span><span style="font-size:9px;letter-spacing:1px;color:#aaa">TOOLS</span>`;
    document.body.appendChild(this.toggleBtn);

    this.toggleBtn.addEventListener('touchstart', (e) => {
      e.preventDefault(); e.stopPropagation();
      this._toggleTray();
    }, { passive: false });
    this.toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); this._toggleTray();
    });

    // ── Weapon tray — hidden, appears above toggle ────────────────────────────
    this.trayEl = document.createElement('div');
    this.trayEl.style.cssText = `
      position:fixed; bottom:130px; right:30px;
      display:none; flex-direction:column-reverse; align-items:center;
      gap:8px; z-index:2001; pointer-events:auto;
    `;
    document.body.appendChild(this.trayEl);

    WEAPONS.forEach((w) => {
      const btn = document.createElement('div');
      btn.style.cssText = `
        width:80px; height:80px; border-radius:12px;
        background:rgba(10,10,20,0.92); border:2px solid #444;
        display:flex; flex-direction:column; align-items:center;
        justify-content:center; gap:3px;
        cursor:pointer; touch-action:manipulation; user-select:none;
      `;
      btn.innerHTML = `
        <span style="font-size:26px">${w.icon}</span>
        <span style="font-size:10px;color:#ccc;letter-spacing:0.5px">${w.name.split(' ')[0]}</span>
      `;
      const select = (e: Event) => {
        e.preventDefault(); e.stopPropagation();
        this.selectedWeapon = w.id;
        this._refreshBtns();
        this._updateColourBtn();
        // Update toggle icon
        this.toggleBtn.innerHTML = `<span style="font-size:24px">${w.icon}</span><span style="font-size:9px;letter-spacing:1px;color:#aaa">TOOLS</span>`;
        this._closeTray();
      };
      btn.addEventListener('touchstart', select as EventListener, { passive: false });
      btn.addEventListener('click', select);
      this.trayEl.appendChild(btn);
      this.weaponBtns.push(btn);
    });

    this._refreshBtns();

    // ── Colour chip — only visible when trowel selected ───────────────────────
    this.colourBtn = document.createElement('div');
    this.colourBtn.style.cssText = `
      position:fixed; bottom:140px; left:50%;
      transform:translateX(-50%);
      display:none;
      background:rgba(10,10,20,0.92);
      border:2px solid rgba(212,160,64,0.6);
      border-radius:24px; padding:8px 16px;
      color:#FFD700; font-size:12px; font-weight:700;
      letter-spacing:1px; z-index:2000;
      touch-action:manipulation; cursor:pointer; user-select:none;
      align-items:center; gap:8px; white-space:nowrap;
    `;
    this._updateColourChipLabel();
    document.body.appendChild(this.colourBtn);

    const openColour = (e: Event) => {
      e.preventDefault(); e.stopPropagation();
      this.colourOverlay.style.display = 'flex';
    };
    this.colourBtn.addEventListener('touchstart', openColour as EventListener, { passive: false });
    this.colourBtn.addEventListener('click', openColour);

    // ── Colour picker overlay ─────────────────────────────────────────────────
    this.colourOverlay = document.createElement('div');
    this.colourOverlay.style.cssText = `
      position:fixed; inset:0; z-index:9000;
      background:rgba(0,0,0,0.88);
      display:none; flex-direction:column;
      align-items:center; justify-content:center;
      touch-action:none;
    `;
    document.body.appendChild(this.colourOverlay);

    // Overlay title + close
    const overlayHead = document.createElement('div');
    overlayHead.style.cssText = `
      color:#FFD700; font-size:16px; font-weight:900; letter-spacing:2px;
      margin-bottom:16px; text-align:center;
    `;
    overlayHead.textContent = '🎨 SELECT PAINT COLOUR';
    this.colourOverlay.appendChild(overlayHead);

    // Grid of swatches
    const grid = document.createElement('div');
    grid.style.cssText = `
      display:grid; grid-template-columns:repeat(4,1fr);
      gap:10px; max-width:320px; width:90%;
    `;
    this.colourOverlay.appendChild(grid);

    MARBELLINO_COLOURS.forEach((col) => {
      const swatch = document.createElement('div');
      swatch.style.cssText = `
        width:100%; aspect-ratio:1;
        background:${col.hex}; border-radius:8px;
        border:2px solid transparent;
        cursor:pointer; touch-action:manipulation;
        display:flex; align-items:flex-end; justify-content:center;
        padding-bottom:3px; box-sizing:border-box;
        position:relative;
      `;
      // Short name label
      const nameEl = document.createElement('span');
      nameEl.style.cssText = `
        font-size:7px; font-weight:700;
        color:rgba(0,0,0,0.6); line-height:1.2;
        text-align:center; width:100%; padding:0 2px;
        text-shadow: 0 0 2px rgba(255,255,255,0.4);
        pointer-events:none;
      `;
      nameEl.textContent = col.name.split(' ').slice(-1)[0]; // last word only
      swatch.appendChild(nameEl);

      if (col.hex === this.selectedHex) {
        swatch.style.border = '2px solid #FFD700';
      }

      const pickColor = (e: Event) => {
        e.preventDefault(); e.stopPropagation();
        this.selectedHex = col.hex;
        this.selectedColorName = col.name;
        grid.querySelectorAll<HTMLDivElement>('[data-sw]').forEach(s => {
          s.style.border = '2px solid transparent';
        });
        swatch.style.border = '2px solid #FFD700';
        this._updateColourChipLabel();
        this.colourOverlay.style.display = 'none';
      };
      swatch.dataset['sw'] = col.hex;
      swatch.addEventListener('touchstart', pickColor as EventListener, { passive: false });
      swatch.addEventListener('click', pickColor);
      grid.appendChild(swatch);
    });

    // Close button
    const closeBtn = document.createElement('div');
    closeBtn.style.cssText = `
      margin-top:20px; padding:12px 32px;
      background:rgba(212,160,64,0.2); border:2px solid rgba(212,160,64,0.5);
      border-radius:12px; color:#FFD700; font-size:14px; font-weight:700;
      letter-spacing:2px; cursor:pointer; touch-action:manipulation;
    `;
    closeBtn.textContent = '✕ CLOSE';
    closeBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.colourOverlay.style.display = 'none'; }, { passive: false });
    closeBtn.addEventListener('click', () => { this.colourOverlay.style.display = 'none'; });
    this.colourOverlay.appendChild(closeBtn);
  }

  private _toggleTray(): void {
    this.trayOpen ? this._closeTray() : this._openTray();
  }

  private _openTray(): void {
    this.trayOpen = true;
    this.trayEl.style.display = 'flex';
    this.toggleBtn.style.borderColor = '#FFD700';
  }

  private _closeTray(): void {
    this.trayOpen = false;
    this.trayEl.style.display = 'none';
    this.toggleBtn.style.borderColor = 'rgba(212,160,64,0.7)';
  }

  private _refreshBtns(): void {
    WEAPONS.forEach((w, i) => {
      const btn = this.weaponBtns[i];
      if (w.id === this.selectedWeapon) {
        btn.style.border = '2px solid #FFD700';
        btn.style.background = 'rgba(40,30,0,0.95)';
      } else {
        btn.style.border = '2px solid #444';
        btn.style.background = 'rgba(10,10,20,0.92)';
      }
    });
  }

  private _updateColourBtn(): void {
    const isPaintTool = ['trowel', 'roller', 'bucket'].includes(this.selectedWeapon);
    this.colourBtn.style.display = (isPaintTool && this.visible) ? 'flex' : 'none';
  }

  private _updateColourChipLabel(): void {
    const dot = `<span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${this.selectedHex};border:1px solid rgba(255,255,255,0.3);vertical-align:middle;margin-right:6px;"></span>`;
    this.colourBtn.innerHTML = `${dot}${this.selectedColorName} ▾`;
  }
}
