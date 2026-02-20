/** SpillMeter — tracks and displays how close the plaster is to spilling. */
export class SpillMeter {
  level = 0; // 0.0–1.0

  private container: HTMLDivElement;
  private fill: HTMLDivElement;
  private bucketEl: HTMLSpanElement;
  private isShaking = false;
  private spillFlashing = false;

  constructor() {
    // ── Inject keyframe animations once ──────────────────────────────────────
    if (!document.getElementById('spill-meter-styles')) {
      const style = document.createElement('style');
      style.id = 'spill-meter-styles';
      style.textContent = `
        @keyframes bucketShake {
          0%   { transform: rotate(0deg);   }
          20%  { transform: rotate(-12deg); }
          40%  { transform: rotate(12deg);  }
          60%  { transform: rotate(-8deg);  }
          80%  { transform: rotate(8deg);   }
          100% { transform: rotate(0deg);   }
        }
        @keyframes spillFlash {
          0%   { background: rgba(255,0,0,0.6); }
          50%  { background: rgba(255,0,0,0.0); }
          100% { background: rgba(255,0,0,0.6); }
        }
        .bucket-shake {
          animation: bucketShake 0.4s ease-in-out infinite;
          display: inline-block;
        }
        .spill-flash {
          animation: spillFlash 0.3s ease-in-out 2;
        }
      `;
      document.head.appendChild(style);
    }

    // ── Outer container — top-centre overlay ─────────────────────────────────
    this.container = document.createElement('div');
    Object.assign(this.container.style, {
      position:        'fixed',
      top:             '16px',
      left:            '50%',
      transform:       'translateX(-50%)',
      display:         'flex',
      flexDirection:   'column',
      alignItems:      'center',
      gap:             '4px',
      zIndex:          '999',
      userSelect:      'none',
      pointerEvents:   'none',
    });

    // ── Bucket emoji + bar row ────────────────────────────────────────────────
    const row = document.createElement('div');
    Object.assign(row.style, {
      display:     'flex',
      alignItems:  'center',
      gap:         '8px',
    });

    this.bucketEl = document.createElement('span');
    this.bucketEl.textContent = '🪣';
    Object.assign(this.bucketEl.style, {
      fontSize:   '28px',
      lineHeight: '1',
    });
    row.appendChild(this.bucketEl);

    // Bar track
    const track = document.createElement('div');
    Object.assign(track.style, {
      width:        '160px',
      height:       '18px',
      background:   '#333',
      borderRadius: '9px',
      overflow:     'hidden',
      border:       '2px solid rgba(255,255,255,0.25)',
      boxShadow:    '0 2px 6px rgba(0,0,0,0.6)',
    });

    // Filled portion — colour will be updated every frame
    this.fill = document.createElement('div');
    Object.assign(this.fill.style, {
      height:       '100%',
      width:        '0%',
      borderRadius: '9px',
      transition:   'width 0.05s linear',
      background:   'linear-gradient(to right, #4caf50, #ffeb3b)',
    });
    track.appendChild(this.fill);
    row.appendChild(track);

    this.container.appendChild(row);

    // ── Label below ───────────────────────────────────────────────────────────
    const label = document.createElement('div');
    label.textContent = "DON'T SPILL THE PLASTER!";
    Object.assign(label.style, {
      color:      '#fff',
      fontSize:   '11px',
      fontWeight: '700',
      fontFamily: 'system-ui, sans-serif',
      textShadow: '0 1px 4px rgba(0,0,0,0.9)',
      letterSpacing: '0.5px',
    });
    this.container.appendChild(label);

    document.body.appendChild(this.container);
  }

  /** Add spill amount directly */
  addSpill(amount: number): void {
    this.level = Math.min(1, this.level + amount);
  }

  /** Call every frame with dt in seconds */
  update(dt: number): void {
    // Slowly drain when not bumping
    this.level = Math.max(0, this.level - dt * 0.05);

    // Update fill bar width
    const pct = this.level * 100;
    this.fill.style.width = `${pct}%`;

    // Update fill colour: green → yellow → red
    if (this.level < 0.5) {
      // Green → yellow
      const t = this.level * 2;
      const r = Math.round(76 + t * (255 - 76));
      const g = Math.round(175 + t * (235 - 175));
      this.fill.style.background = `linear-gradient(to right, rgb(${r},${g},50), rgb(${r},${g},50))`;
    } else {
      // Yellow → red
      const t = (this.level - 0.5) * 2;
      const r = 255;
      const g = Math.round(235 - t * 235);
      this.fill.style.background = `linear-gradient(to right, rgb(${r},${g},50), rgb(${r},${Math.round(g * 0.4)},20))`;
    }

    // Shake bucket when near full
    if (this.level > 0.8 && !this.isShaking) {
      this.bucketEl.classList.add('bucket-shake');
      this.isShaking = true;
    } else if (this.level <= 0.8 && this.isShaking) {
      this.bucketEl.classList.remove('bucket-shake');
      this.isShaking = false;
    }

    // Spill! Flash and penalise when full
    if (this.level >= 1.0 && !this.spillFlashing) {
      this.spillFlashing = true;
      this.level = 0.5;

      this.container.classList.add('spill-flash');
      setTimeout(() => {
        this.container.classList.remove('spill-flash');
        this.spillFlashing = false;
      }, 700);
    }
  }

  /** Called when the van hits a curb */
  triggerBump(intensity: number): void {
    this.addSpill(intensity * 0.3);
  }
}
