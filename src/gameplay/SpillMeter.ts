/** SpillMeter — tracks and displays how close the plaster is to spilling. */
export class SpillMeter {
  level = 0; // 0.0–1.0
  spillRateMultiplier = 1.0;

  /** Called with a penalty amount (sats) whenever the bucket spills. */
  onSpill?: (penalty: number) => void;

  private container: HTMLDivElement;
  private fill: HTMLDivElement;
  private bucketEl: HTMLSpanElement;
  private _warningIcon!: HTMLDivElement;
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

    // ── Outer container — left side, vertical ────────────────────────────────
    this.container = document.createElement('div');
    Object.assign(this.container.style, {
      position:      'fixed',
      left:          '10px',
      top:           '50%',
      transform:     'translateY(-50%)',
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           '6px',
      zIndex:        '999',
      userSelect:    'none',
      pointerEvents: 'none',
    });

    // ── Bucket emoji ──────────────────────────────────────────────────────────
    this.bucketEl = document.createElement('span');
    this.bucketEl.textContent = '🪣';
    Object.assign(this.bucketEl.style, {
      fontSize:   '26px',
      lineHeight: '1',
    });
    this.container.appendChild(this.bucketEl);

    // ── Vertical bar track ────────────────────────────────────────────────────
    const track = document.createElement('div');
    Object.assign(track.style, {
      position:     'relative',
      width:        '16px',
      height:       '130px',
      background:   'rgba(40,40,40,0.85)',
      borderRadius: '8px',
      overflow:     'hidden',
      border:       '1.5px solid rgba(255,255,255,0.2)',
      boxShadow:    '0 2px 8px rgba(0,0,0,0.6)',
    });

    // Fill rises from bottom
    this.fill = document.createElement('div');
    Object.assign(this.fill.style, {
      position:     'absolute',
      bottom:       '0',
      left:         '0',
      width:        '100%',
      height:       '0%',
      borderRadius: '8px',
      transition:   'height 0.05s linear',
      background:   '#4caf50',
    });
    track.appendChild(this.fill);
    this.container.appendChild(track);

    // ── Label (rotated) ───────────────────────────────────────────────────────
    const label = document.createElement('div');
    label.textContent = '🚨';
    Object.assign(label.style, {
      fontSize:   '16px',
      lineHeight: '1',
      opacity:    '0',
      transition: 'opacity 0.3s',
    });
    (label as any)._isWarning = true;
    this.container.appendChild(label);
    this._warningIcon = label;

    document.body.appendChild(this.container);
    this.container.style.display = 'none'; // hidden until job starts
  }

  /** Show or hide the entire meter */
  setVisible(visible: boolean): void {
    this.container.style.display = visible ? 'flex' : 'none';
  }

  /** Add spill amount directly */
  addSpill(amount: number): void {
    this.level = Math.min(1, this.level + amount);
  }

  /** Call every frame with dt in seconds */
  update(dt: number): void {
    // Slowly drain when not bumping
    // No passive drain — only bumps and crashes affect the meter

    // Update fill bar height (vertical — rises from bottom)
    const pct = this.level * 100;
    this.fill.style.height = `${pct}%`;

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

    // Shake bucket + show warning icon when near full
    if (this.level > 0.8 && !this.isShaking) {
      this.bucketEl.classList.add('bucket-shake');
      this._warningIcon.style.opacity = '1';
      this.isShaking = true;
    } else if (this.level <= 0.8 && this.isShaking) {
      this.bucketEl.classList.remove('bucket-shake');
      this._warningIcon.style.opacity = '0';
      this.isShaking = false;
    }

    // Spill! Flash and penalise when full
    if (this.level >= 1.0 && !this.spillFlashing) {
      this.spillFlashing = true;
      this.level = 0.5;

      this.onSpill?.(50_000); // 50K sats penalty per spill

      this.container.classList.add('spill-flash');
      setTimeout(() => {
        this.container.classList.remove('spill-flash');
        this.spillFlashing = false;
      }, 700);
    }
  }

  /** Called when the van hits a curb */
  /** Curb crossing — 2.5% spill */
  triggerBump(_intensity: number): void {
    this.addSpill(0.025);
  }

  /** Crash into building or traffic car — 30% spill */
  triggerCrash(): void {
    this.addSpill(0.30);
  }
}
