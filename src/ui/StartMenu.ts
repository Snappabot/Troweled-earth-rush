/**
 * StartMenu — main menu with scrolling anthem lyrics, nav buttons,
 * HOW TO PLAY modal, and real theme song audio.
 */

import { ANTHEM_ALL_LINES } from '../data/Anthem';
import { AUDIO } from '../audio/AudioAssets';
import { ClosingCredits } from './ClosingCredits';

const BASE_URL: string = ((import.meta as any).env?.BASE_URL as string) || '/';
const WHITE_LOGO = `${BASE_URL}tem-logo-white.jpg`;

export class StartMenu {
  private overlay!: HTMLDivElement;
  private scrollTimer = 0;
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private themeAudio: HTMLAudioElement | null = null;

  /** Show start menu; resolves when player hits PLAY */
  show(): Promise<void> {
    return new Promise(resolve => {
      this._build(resolve);
    });
  }

  private _build(onPlay: () => void): void {
    this._injectStyles();

    this.overlay = document.createElement('div');
    this.overlay.id = 'start-menu';
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;

    // ── Scrolling lyrics backdrop ─────────────────────────────────────────────
    const lyricsBack = document.createElement('div');
    lyricsBack.className = 'sm-lyrics-back';
    const lyricsInner = document.createElement('div');
    lyricsInner.id = 'sm-lyrics-inner';
    // Duplicate lines for seamless loop
    const allLines = [...ANTHEM_ALL_LINES, ...ANTHEM_ALL_LINES];
    allLines.forEach(line => {
      const el = document.createElement('div');
      el.className = 'sm-lyric-line';
      el.textContent = line;
      lyricsInner.appendChild(el);
    });
    lyricsBack.appendChild(lyricsInner);
    this.overlay.appendChild(lyricsBack);

    // ── Dark gradient overlay ─────────────────────────────────────────────────
    const grad = document.createElement('div');
    grad.className = 'sm-gradient';
    this.overlay.appendChild(grad);

    // ── Main content ──────────────────────────────────────────────────────────
    const content = document.createElement('div');
    content.className = 'sm-content';

    content.innerHTML = `
      <img src="${WHITE_LOGO}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;

    // ── Buttons ───────────────────────────────────────────────────────────────
    const btnRow = document.createElement('div');
    btnRow.className = 'sm-btn-row';

    const playBtn = this._btn('▶  PLAY', '#C1666B', '#9E4A50');
    playBtn.style.fontSize = '18px';
    playBtn.style.padding = '18px 48px';
    playBtn.addEventListener('click', () => {
      this._stopAudio();
      this.overlay.style.transition = 'opacity 0.5s';
      this.overlay.style.opacity = '0';
      setTimeout(() => { this.overlay.remove(); onPlay(); }, 520);
    });

    const howBtn  = this._btn('📋  HOW TO PLAY', 'rgba(200,168,106,0.18)', 'rgba(200,168,106,0.28)');
    howBtn.style.border = '1.5px solid rgba(200,168,106,0.4)';
    howBtn.addEventListener('click', () => this._showHowToPlay());

    const creditsBtn = this._btn('🎬  CREDITS', 'rgba(255,255,255,0.06)', 'rgba(255,255,255,0.12)');
    creditsBtn.style.border = '1.5px solid rgba(255,255,255,0.15)';
    creditsBtn.style.color = 'rgba(255,255,255,0.55)';
    creditsBtn.addEventListener('click', () => {
      this._killAudio(); // instant stop — no fade, no overlap
      this.overlay.style.opacity = '0';
      this.overlay.style.transition = 'opacity 0.3s';
      setTimeout(async () => {
        await new ClosingCredits().show();
        this.overlay.style.opacity = '1';
        this._startAudio();
      }, 320);
    });

    btnRow.appendChild(playBtn);
    btnRow.appendChild(howBtn);
    btnRow.appendChild(creditsBtn);
    content.appendChild(btnRow);

    this.overlay.appendChild(content);
    document.body.appendChild(this.overlay);

    // Start scrolling
    this._startScroll(lyricsInner, allLines.length);
    // Start audio on first interaction
    this.overlay.addEventListener('click', () => this._startAudio(), { once: true });
  }

  private _btn(label: string, bg: string, hover: string): HTMLButtonElement {
    const b = document.createElement('button');
    b.innerHTML = label;
    b.style.cssText = `
      background:${bg}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `;
    b.addEventListener('mouseenter', () => { b.style.background = hover; b.style.transform = 'translateY(-2px)'; });
    b.addEventListener('mouseleave', () => { b.style.background = bg; b.style.transform = ''; });
    return b;
  }

  private _startScroll(inner: HTMLDivElement, totalLines: number): void {
    let offset = 0;
    const lineH = 38; // px per line
    const totalH = totalLines * lineH;
    const half = totalH / 2;

    const tick = () => {
      offset += 0.35;
      if (offset >= half) offset = 0;
      inner.style.transform = `translateY(-${offset}px)`;
      this.scrollTimer = requestAnimationFrame(tick);
    };
    this.scrollTimer = requestAnimationFrame(tick);
  }

  private _startAudio(): void {
    // Try real theme audio first
    try {
      const audio = new Audio();
      audio.src = AUDIO.theme;
      audio.volume = 0;
      audio.loop = true;
      this.themeAudio = audio; // store ref immediately so _killAudio() can always reach it
      audio.play().then(() => {
        let vol = 0;
        const fadeIn = setInterval(() => {
          if (!this.themeAudio) { clearInterval(fadeIn); return; } // killed mid-fade
          vol = Math.min(vol + 0.02, 0.6);
          audio.volume = vol;
          if (vol >= 0.6) clearInterval(fadeIn);
        }, 100);
      }).catch(() => {
        this.themeAudio = null;
        this._startSynthAudio();
      });
      return;
    } catch {}
    this._startSynthAudio();
  }

  private _startSynthAudio(): void {
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0;
      this.masterGain.connect(this.ctx.destination);
      // Fade in
      this.masterGain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + 2);

      // Slow atmospheric drone loop
      const bpm = 76, bps = bpm / 60;
      let t = this.ctx.currentTime + 0.5;

      // Drone
      const drone = this.ctx.createOscillator();
      const droneG = this.ctx.createGain();
      const droneFlt = this.ctx.createBiquadFilter();
      drone.type = 'sine'; drone.frequency.value = 55;
      droneFlt.type = 'lowpass'; droneFlt.frequency.value = 180;
      droneG.gain.value = 0.5;
      drone.connect(droneFlt); droneFlt.connect(droneG); droneG.connect(this.masterGain);
      drone.start(t);

      // 180 beats ≈ ~142s loop
      for (let beat = 0; beat < 180; beat++) {
        const bt = t + beat / bps;
        const b = beat % 4;
        if (b === 0) this._kick(bt, 55);
        if (b === 1 || b === 3) this._snare(bt);
        this._hihat(bt);
        if (b === 0) this._bass(bt, 55);
        if (beat % 8 === 0) this._pad(bt, 220 * (beat % 16 < 8 ? 1 : 1.5));
      }
    } catch {}
  }

  /** Instant kill — no fade. Use when switching to credits to prevent overlap. */
  private _killAudio(): void {
    if (this.themeAudio) {
      this.themeAudio.pause();
      this.themeAudio.src = '';
      this.themeAudio = null;
    }
    try {
      if (this.ctx) { this.ctx.close(); this.ctx = null; this.masterGain = null; }
    } catch {}
  }

  private _stopAudio(): void {
    // Stop real audio
    if (this.themeAudio) {
      const audio = this.themeAudio;
      let vol = audio.volume;
      const fadeOut = setInterval(() => {
        vol = Math.max(0, vol - 0.05);
        audio.volume = vol;
        if (vol <= 0) { clearInterval(fadeOut); audio.pause(); audio.src = ''; }
      }, 50);
    }
    // Stop synth fallback
    try {
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
        setTimeout(() => { try { this.ctx?.close(); } catch {} }, 600);
      }
    } catch {}
  }

  private _kick(t: number, freq: number): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(20, t + 0.15);
      g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
      o.connect(g); g.connect(this.masterGain); o.start(t); o.stop(t + 0.32);
    } catch {}
  }

  private _snare(t: number): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.18), this.ctx.sampleRate);
      const d = buf.getChannelData(0); for (let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
      const src=this.ctx.createBufferSource(), flt=this.ctx.createBiquadFilter(), g=this.ctx.createGain();
      src.buffer=buf; flt.type='bandpass'; flt.frequency.value=1800;
      g.gain.setValueAtTime(0.055,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.18);
      src.connect(flt); flt.connect(g); g.connect(this.masterGain); src.start(t); src.stop(t+0.2);
    } catch {}
  }

  private _hihat(t: number): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const buf=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*0.04),this.ctx.sampleRate);
      const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
      const src=this.ctx.createBufferSource(),flt=this.ctx.createBiquadFilter(),g=this.ctx.createGain();
      src.buffer=buf; flt.type='highpass'; flt.frequency.value=9000;
      g.gain.setValueAtTime(0.016,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.04);
      src.connect(flt); flt.connect(g); g.connect(this.masterGain); src.start(t); src.stop(t+0.05);
    } catch {}
  }

  private _bass(t: number, freq: number): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const o=this.ctx.createOscillator(),flt=this.ctx.createBiquadFilter(),g=this.ctx.createGain();
      o.type='sawtooth'; o.frequency.value=freq; flt.type='lowpass'; flt.frequency.value=280;
      g.gain.setValueAtTime(0.3,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.45);
      o.connect(flt); flt.connect(g); g.connect(this.masterGain); o.start(t); o.stop(t+0.5);
    } catch {}
  }

  private _pad(t: number, freq: number): void {
    if (!this.ctx || !this.masterGain) return;
    try {
      const o=this.ctx.createOscillator(),g=this.ctx.createGain(),flt=this.ctx.createBiquadFilter();
      o.type='triangle'; o.frequency.value=freq; flt.type='lowpass'; flt.frequency.value=1000;
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.07,t+0.6); g.gain.linearRampToValueAtTime(0,t+4);
      o.connect(flt); flt.connect(g); g.connect(this.masterGain); o.start(t); o.stop(t+4.5);
    } catch {}
  }

  private _showHowToPlay(): void {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position:fixed; inset:0; z-index:50001;
      background:rgba(5,4,2,0.96); display:flex; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif; padding:20px; box-sizing:border-box;
    `;
    modal.innerHTML = `
      <div style="width:100%;max-width:500px;background:#111008;border:1.5px solid rgba(200,168,106,0.35);
                  border-radius:20px;padding:28px;box-sizing:border-box;max-height:90vh;overflow-y:auto;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <div style="color:#C8A86A;font-size:18px;font-weight:900;letter-spacing:1px;">📋 HOW TO PLAY</div>
          <button id="htp-close" style="background:rgba(255,255,255,0.1);border:none;color:#fff;
            font-size:16px;width:32px;height:32px;border-radius:50%;cursor:pointer;">✕</button>
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🎮 CONTROLS</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:1.8;margin-bottom:18px;">
          <b>Joystick</b> — Steer the van<br>
          <b>GAS</b> — Accelerate<br>
          <b>REV</b> — Brake / Reverse
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🔄 THE JOB LOOP</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          1. Accept a job from the 📋 board<br>
          2. Collect supplies at the TEM workshop<br>
          3. Pick up your crew around the city<br>
          4. Reach the job site before time runs out<br>
          5. Complete the plastering mini-game
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">⚠️ RULES</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          • Spill meter fills when you drive rough — spills cost money<br>
          • Bladder fills as you drive — find a toilet 🚽<br>
          • Coffee ☕ steadies plaster but loads the bladder<br>
          • Random breaks can hit at any job phase<br>
          • Scaffold game: win = full pay, fail = −30% penalty
        </div>

        <div style="color:#C8A86A;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:8px;">🏆 GOALS</div>
        <div style="color:rgba(240,232,216,0.75);font-size:13px;line-height:2;margin-bottom:18px;">
          • Collect all 8 TEM photo achievements → 5% store discount + certificate<br>
          • Earn 1 Bitcoin (100M sats) → 10% merch + 5% materials on certificate
        </div>

        <div style="color:rgba(200,168,106,0.4);font-size:11px;font-style:italic;text-align:center;">
          "The trowel doesn't rush. Neither do we."
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    setTimeout(() => {
      document.getElementById('htp-close')?.addEventListener('click', () => modal.remove());
    }, 0);
  }

  private _injectStyles(): void {
    if (document.getElementById('sm-styles')) return;
    const s = document.createElement('style');
    s.id = 'sm-styles';
    s.textContent = `
      #start-menu { background: #07050300; }
      .sm-lyrics-back {
        position:absolute; inset:0; z-index:1;
        overflow:hidden;
        background: linear-gradient(180deg, #080604 0%, #0f0a05 50%, #080604 100%);
      }
      #sm-lyrics-inner {
        display:flex; flex-direction:column;
        padding-top:100vh; will-change:transform;
      }
      .sm-lyric-line {
        color:rgba(200,168,106,0.08); font-size:clamp(14px,4vw,22px);
        font-style:italic; padding:10px 32px; line-height:1.4;
        text-align:center;
      }
      .sm-gradient {
        position:absolute; inset:0; z-index:2;
        background: radial-gradient(ellipse at center,
          rgba(8,6,3,0.6) 0%, rgba(8,6,3,0.92) 70%, rgba(5,4,2,0.98) 100%);
      }
      .sm-content {
        position:relative; z-index:3; text-align:center;
        display:flex; flex-direction:column; align-items:center; gap:12px;
        padding:0 24px;
      }
      .sm-logo { font-size:clamp(48px,14vw,80px); animation:smPulse 3s ease-in-out infinite; }
      .sm-logo-img {
        height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
        filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.35));
        animation:smPulse 3s ease-in-out infinite;
      }
      .sm-title {
        color:#C8A86A; font-size:clamp(22px,7vw,48px); font-weight:900;
        letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.4);
        margin-bottom:4px;
      }
      .sm-tagline {
        color:rgba(200,168,106,0.45); font-size:clamp(11px,3vw,14px);
        font-style:italic; margin-bottom:24px;
      }
      .sm-btn-row {
        display:flex; flex-direction:column; align-items:center; gap:12px;
        width:100%; max-width:300px;
      }
      .sm-btn-row button { width:100%; }

      @keyframes smPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    `;
    document.head.appendChild(s);
  }
}
