/**
 * Tutorial — first-launch guided walkthrough.
 *
 * Step sequence (player-paced, skippable at any time):
 *   1. Joystick callout (bottom-left)
 *   2. GAS / REV callout (bottom-right)
 *   3. Open menu → pick first contract
 *   4. Follow waypoint to workshop
 * Persists completion in localStorage.
 */

const STORAGE_KEY = 'tem_rush_tutorial_done_v1';

export class Tutorial {
  private overlay: HTMLDivElement | null = null;
  private skipBtn: HTMLButtonElement | null = null;
  private callout: HTMLDivElement | null = null;
  private active = false;
  private currentStep: 'controls' | 'menu' | 'waypoint' | null = null;

  static hasCompleted(): boolean {
    try { return localStorage.getItem(STORAGE_KEY) === '1'; } catch { return false; }
  }

  static markComplete(): void {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
  }

  isActive(): boolean { return this.active; }

  /** Step 1+2: introduce controls. */
  startControlsIntro(): void {
    if (this.active) return;
    this.active = true;
    this.currentStep = 'controls';
    this._build();
    this._showCallout({
      title: '🚐 Welcome to TEM Rush',
      body: 'Use the <b>joystick</b> (bottom-left) to steer.<br>Tap <b>GAS</b> (green) to accelerate.<br>Tap <b>REV</b> (red) to brake / reverse.',
      cta: 'GOT IT ▶',
      onCta: () => this._advanceToMenu(),
    });
  }

  private _advanceToMenu(): void {
    this.currentStep = 'menu';
    this._showCallout({
      title: '📋 Pick Up Your First Job',
      body: 'Tap the <b>☰ menu</b> in the top-right, then choose <b>JOBS</b> to accept your first contract.',
      cta: 'OK ▶',
      onCta: () => this._hideCallout(),
      pulse: 'menu-button',
    });
  }

  /** Fired when player accepts their first job — switch to waypoint hint. */
  onJobAccepted(): void {
    if (!this.active) return;
    this.currentStep = 'waypoint';
    this._showCallout({
      title: '🎯 Follow the Yellow Waypoint',
      body: 'Drive to the <b>workshop</b> first to pick up plaster supplies. Watch the orange ring on the map.',
      cta: 'LET\'S GO ▶',
      onCta: () => this._hideCallout(),
    });
  }

  /** Fired when player reaches the workshop (waypoint arrival). Ends the tutorial. */
  onWorkshopArrived(): void {
    if (!this.active) return;
    this._finish();
  }

  private _finish(): void {
    this.active = false;
    this.currentStep = null;
    Tutorial.markComplete();
    this._cleanup();
  }

  /** Allow user-triggered skip from anywhere. */
  skip(): void {
    if (!this.active) return;
    this._finish();
  }

  // ── Rendering ───────────────────────────────────────────────────────────────
  private _build(): void {
    if (this.overlay) return;

    // Dim background — non-blocking pointer events so user can still drive
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 8800;
      pointer-events: none;
    `;
    document.body.appendChild(this.overlay);

    // Skip button — top-centre, low-key
    this.skipBtn = document.createElement('button');
    this.skipBtn.textContent = 'SKIP TUTORIAL';
    this.skipBtn.style.cssText = `
      position: fixed; top: 14px; left: 50%; transform: translateX(-50%);
      z-index: 8801; pointer-events: auto;
      background: rgba(0,0,0,0.65); color: rgba(255,255,255,0.85);
      border: 1.5px solid rgba(255,255,255,0.4); border-radius: 18px;
      padding: 6px 14px; font-size: 11px; font-weight: 700;
      letter-spacing: 1.2px; cursor: pointer;
      font-family: system-ui, sans-serif; touch-action: manipulation;
    `;
    this.skipBtn.addEventListener('click', () => this.skip());
    this.skipBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.skip(); }, { passive: false });
    document.body.appendChild(this.skipBtn);
  }

  private _showCallout(opts: {
    title: string;
    body: string;
    cta: string;
    onCta: () => void;
    pulse?: 'menu-button';
  }): void {
    this._hideCallout();
    const c = document.createElement('div');
    c.style.cssText = `
      position: fixed; left: 50%; bottom: 28%;
      transform: translateX(-50%);
      width: min(86vw, 380px);
      background: linear-gradient(135deg, rgba(40,32,20,0.96), rgba(20,18,14,0.96));
      color: #F0E8D8; border: 2px solid #C8A86A;
      border-radius: 16px; padding: 18px 20px 16px;
      font-family: system-ui, sans-serif; pointer-events: auto;
      z-index: 8802;
      box-shadow: 0 12px 36px rgba(0,0,0,0.6);
      animation: tutFadeIn 0.32s ease-out;
    `;
    c.innerHTML = `
      <div style="color:#FFD700;font-size:13px;font-weight:900;letter-spacing:2px;margin-bottom:6px;">
        TUTORIAL
      </div>
      <div style="font-size:18px;font-weight:900;margin-bottom:10px;line-height:1.3;">${opts.title}</div>
      <div style="font-size:14px;line-height:1.55;color:#E0D5C0;margin-bottom:14px;">${opts.body}</div>
      <button style="
        background: #C8A86A; color: #1A1410; border: none;
        border-radius: 24px; padding: 10px 22px; font-size: 14px;
        font-weight: 900; cursor: pointer; letter-spacing: 1px;
        font-family: system-ui, sans-serif; touch-action: manipulation;
      ">${opts.cta}</button>
    `;
    const btn = c.querySelector('button')!;
    btn.addEventListener('click', () => opts.onCta());
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); opts.onCta(); }, { passive: false });

    if (!document.getElementById('tut-anim-styles')) {
      const style = document.createElement('style');
      style.id = 'tut-anim-styles';
      style.textContent = `
        @keyframes tutFadeIn { from { opacity: 0; transform: translate(-50%, 16px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @keyframes tutPulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,215,0,0.7); } 50% { box-shadow: 0 0 0 14px rgba(255,215,0,0); } }
        .tut-pulse-glow { animation: tutPulseGlow 1.4s ease-in-out infinite; }
      `;
      document.head.appendChild(style);
    }

    this.callout = c;
    document.body.appendChild(c);
  }

  private _hideCallout(): void {
    if (this.callout) {
      this.callout.remove();
      this.callout = null;
    }
  }

  private _cleanup(): void {
    this._hideCallout();
    if (this.skipBtn) { this.skipBtn.remove(); this.skipBtn = null; }
    if (this.overlay) { this.overlay.remove(); this.overlay = null; }
  }
}
