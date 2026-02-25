// ── PhotoReveal — Final stage of job completion ───────────────────────────────
// Tap tiles to scratch-reveal the finished plaster work.
// 4×3 grid, all tiles must be flipped to unlock COMPLETE.

const PLASTER_COLOURS = [
  { name: 'Marbellino',   bg: '#C8B89A', accent: '#A0845C', text: '#5A3A1A' },
  { name: 'Tadelakt',     bg: '#D4C4A8', accent: '#8A6A4A', text: '#4A2A0A' },
  { name: 'Antique Stucco', bg: '#E0D4B8', accent: '#B09060', text: '#5A3A10' },
  { name: 'Hemp Render',  bg: '#C8C0A0', accent: '#9A8A60', text: '#4A3A10' },
  { name: 'Rokka',        bg: '#D0C0A4', accent: '#B08060', text: '#503018' },
  { name: 'Tadelino',     bg: '#D8CEB6', accent: '#A88C64', text: '#4A3020' },
];

export class PhotoReveal {
  private _el: HTMLElement | null = null;

  show(jobTitle: string, onComplete: () => void): void {
    this.hide();

    const plaster = PLASTER_COLOURS[Math.floor(Math.random() * PLASTER_COLOURS.length)];
    const COLS = 4;
    const ROWS = 3;
    const TOTAL = COLS * ROWS;
    let revealed = 0;

    const ov = document.createElement('div');
    ov.id = 'photo-reveal-ov';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:14500;
      background:#0a0a12;
      display:flex; flex-direction:column; align-items:center;
      justify-content:flex-start; padding:20px 16px 24px;
      box-sizing:border-box; font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden;
    `;

    // ── Header ─────────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.style.cssText = `
      width:100%; max-width:440px; text-align:center; margin-bottom:14px;
    `;
    const cleanTitle = jobTitle.replace(/^⚔️\s*/, '').replace(/^🚨\s*/, '').trim();
    header.innerHTML = `
      <div style="
        color:#FFD700; font-size:clamp(11px,3vw,14px); letter-spacing:3px;
        font-weight:900; margin-bottom:4px;
      ">📸 JOB COMPLETE — PHOTO REVEAL</div>
      <div style="
        color:#fff; font-size:clamp(16px,5vw,24px); font-weight:900;
        line-height:1.2; margin-bottom:4px;
      ">${cleanTitle}</div>
      <div style="
        color:#aaa; font-size:clamp(10px,2.6vw,12px); font-family:system-ui,sans-serif;
      ">TAP THE TILES TO REVEAL YOUR WORK</div>
    `;
    ov.appendChild(header);

    // ── "Before" label ─────────────────────────────────────────────────────
    const labelsRow = document.createElement('div');
    labelsRow.style.cssText = `
      display:flex; justify-content:space-between; align-items:center;
      width:100%; max-width:440px; margin-bottom:6px;
    `;
    labelsRow.innerHTML = `
      <div id="pr-before-label" style="
        color:#888; font-size:10px; font-weight:900; letter-spacing:2px;
        background:rgba(255,255,255,0.08); padding:4px 10px; border-radius:20px;
        transition:opacity 0.4s;
      ">BEFORE</div>
      <div id="pr-progress-label" style="
        color:#FFD700; font-size:12px; font-weight:900; letter-spacing:1px;
      ">0 / ${TOTAL}</div>
      <div style="
        color:#C1666B; font-size:10px; font-weight:900; letter-spacing:2px;
        background:rgba(193,102,107,0.15); padding:4px 10px; border-radius:20px;
      ">AFTER</div>
    `;
    ov.appendChild(labelsRow);

    // ── Tile grid ──────────────────────────────────────────────────────────
    const grid = document.createElement('div');
    grid.style.cssText = `
      display:grid;
      grid-template-columns:repeat(${COLS}, 1fr);
      gap:5px;
      width:100%; max-width:440px;
      aspect-ratio: ${COLS}/${ROWS};
      margin-bottom:14px;
    `;

    const tiles: HTMLElement[] = [];

    for (let i = 0; i < TOTAL; i++) {
      const tile = document.createElement('div');
      tile.style.cssText = `
        position:relative; cursor:pointer;
        border-radius:8px; overflow:hidden;
        aspect-ratio:1/1;
        touch-action:manipulation; user-select:none;
        transition:transform 0.15s;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
      `;
      tile.dataset.index = String(i);
      tile.dataset.revealed = '0';

      // ── "After" layer (plaster finish) ──────────────────────────────────
      const afterLayer = document.createElement('div');
      afterLayer.style.cssText = `
        position:absolute; inset:0;
        background:${this._makePlasterGradient(plaster.bg, plaster.accent, i)};
        display:flex; align-items:center; justify-content:center;
      `;
      // Plaster detail marks
      afterLayer.innerHTML = this._makePlasterDetail(i, plaster.accent);
      tile.appendChild(afterLayer);

      // ── "Before" cover layer ─────────────────────────────────────────────
      const beforeLayer = document.createElement('div');
      beforeLayer.id = `pr-before-${i}`;
      beforeLayer.style.cssText = `
        position:absolute; inset:0;
        background:linear-gradient(135deg,#2a2a3a,#1a1a28);
        border:1px solid rgba(255,255,255,0.08);
        border-radius:8px;
        display:flex; align-items:center; justify-content:center;
        transition:opacity 0.35s ease, transform 0.35s ease;
        transform-origin:center;
      `;
      beforeLayer.innerHTML = `<div style="color:#444;font-size:22px;">🔲</div>`;
      tile.appendChild(beforeLayer);

      // ── Tap handler ──────────────────────────────────────────────────────
      tile.addEventListener('pointerdown', () => {
        if (tile.dataset.revealed === '1') return;
        tile.dataset.revealed = '1';

        // Flip animation
        beforeLayer.style.opacity = '0';
        beforeLayer.style.transform = 'scaleX(0)';
        tile.style.transform = 'scale(0.95)';
        setTimeout(() => { tile.style.transform = 'scale(1)'; }, 150);

        revealed++;
        const progress = document.getElementById('pr-progress-label');
        if (progress) {
          progress.textContent = `${revealed} / ${TOTAL}`;
          if (revealed === TOTAL) {
            progress.style.color = '#2ECC40';
            progress.textContent = `✅ ALL REVEALED!`;
          }
        }

        if (revealed >= TOTAL) {
          const beforeLbl = document.getElementById('pr-before-label');
          if (beforeLbl) beforeLbl.style.opacity = '0';
          setTimeout(() => this._showComplete(ov, cleanTitle, plaster, onComplete), 400);
        }
      });

      tiles.push(tile);
      grid.appendChild(tile);
    }

    ov.appendChild(grid);

    // ── "Reveal All" shortcut button ──────────────────────────────────────
    const skipBtn = document.createElement('button');
    skipBtn.textContent = '✨ REVEAL ALL';
    skipBtn.style.cssText = `
      background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12);
      color:#888; font-size:11px; font-weight:900; letter-spacing:2px;
      padding:10px 24px; border-radius:24px; cursor:pointer;
      touch-action:manipulation;
    `;
    skipBtn.addEventListener('click', () => {
      // Staggered reveal
      tiles.forEach((tile, i) => {
        if (tile.dataset.revealed === '1') return;
        setTimeout(() => {
          tile.dataset.revealed = '1';
          const bl = document.getElementById(`pr-before-${i}`);
          if (bl) { bl.style.opacity = '0'; bl.style.transform = 'scaleX(0)'; }
          revealed++;
          const progress = document.getElementById('pr-progress-label');
          if (progress) {
            progress.textContent = `${revealed} / ${TOTAL}`;
            if (revealed >= TOTAL) {
              progress.style.color = '#2ECC40';
              progress.textContent = '✅ ALL REVEALED!';
            }
          }
        }, i * 80);
      });
      skipBtn.style.display = 'none';
      setTimeout(() => this._showComplete(ov, cleanTitle, plaster, onComplete), TOTAL * 80 + 500);
    });
    ov.appendChild(skipBtn);

    document.body.appendChild(ov);
    this._el = ov;
  }

  hide(): void {
    this._el?.remove();
    this._el = null;
  }

  // ── Complete overlay after all tiles revealed ──────────────────────────────
  private _showComplete(
    ov: HTMLElement,
    jobTitle: string,
    plaster: typeof PLASTER_COLOURS[0],
    onComplete: () => void
  ): void {
    const comp = document.createElement('div');
    comp.style.cssText = `
      position:absolute; inset:0; z-index:10;
      background:rgba(0,0,0,0.88);
      display:flex; flex-direction:column; align-items:center;
      justify-content:center; gap:12px;
      font-family:'Arial Black',Arial,sans-serif;
      animation:pr-fade-in 0.4s ease;
    `;

    if (!document.getElementById('pr-anim-style')) {
      const s = document.createElement('style');
      s.id = 'pr-anim-style';
      s.textContent = `
        @keyframes pr-fade-in {
          from { opacity:0; transform:scale(0.95); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes pr-star-pop {
          0%   { transform:scale(0) rotate(-30deg); opacity:0; }
          60%  { transform:scale(1.3) rotate(5deg); opacity:1; }
          100% { transform:scale(1) rotate(0deg); opacity:1; }
        }
      `;
      document.head.appendChild(s);
    }

    comp.innerHTML = `
      <div style="font-size:clamp(40px,12vw,72px);
        animation:pr-star-pop 0.5s cubic-bezier(.34,1.56,.64,1) both;">🎉</div>
      <div style="
        color:#FFD700; font-size:clamp(22px,6vw,36px); font-weight:900;
        letter-spacing:2px; text-align:center; line-height:1.2;
      ">WORK DONE.</div>
      <div style="
        color:#fff; font-size:clamp(14px,4vw,20px); font-weight:700;
        text-align:center; opacity:0.8;
      ">${jobTitle}</div>
      <div style="
        background:${plaster.bg}; color:${plaster.text};
        font-size:clamp(11px,3vw,14px); font-weight:900;
        padding:6px 18px; border-radius:20px; letter-spacing:1px;
      ">${plaster.name} FINISH ✓</div>
      <div style="
        display:flex; gap:4px; margin-top:4px;
      ">
        ${'⭐'.repeat(5)}
      </div>
    `;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '💰 COLLECT PAYMENT';
    doneBtn.style.cssText = `
      margin-top:12px;
      background:linear-gradient(135deg,#2ECC40,#1AA830);
      border:none; color:#fff;
      font-size:clamp(14px,4vw,18px); font-weight:900;
      letter-spacing:1px; padding:16px 40px;
      border-radius:30px; cursor:pointer;
      touch-action:manipulation;
      box-shadow:0 4px 20px rgba(46,204,64,0.4);
    `;
    doneBtn.addEventListener('click', () => {
      this.hide();
      onComplete();
    });
    comp.appendChild(doneBtn);
    ov.appendChild(comp);
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private _makePlasterGradient(bg: string, accent: string, seed: number): string {
    const angle = (seed * 37 + 12) % 180;
    const offset = 30 + (seed * 13) % 40;
    return `linear-gradient(${angle}deg, ${bg} 0%, ${accent} ${offset}%, ${bg} 100%)`;
  }

  private _makePlasterDetail(seed: number, color: string): string {
    const lines: string[] = [];
    const count = 3 + (seed % 3);
    for (let i = 0; i < count; i++) {
      const x1 = 10 + (seed * 17 + i * 23) % 70;
      const y1 = 5 + (seed * 11 + i * 31) % 80;
      const x2 = x1 + 10 + (i * 13) % 30;
      const y2 = y1 + 5 + (i * 7) % 20;
      const opacity = 0.2 + (i * 0.07);
      lines.push(`<line x1="${x1}%" y1="${y1}%" x2="${x2}%" y2="${y2}%"
        stroke="${color}" stroke-width="1.5" stroke-opacity="${opacity}" stroke-linecap="round"/>`);
    }
    return `<svg style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 100 100"
      preserveAspectRatio="none">${lines.join('')}</svg>`;
  }
}
