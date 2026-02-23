/**
 * IntroSequence — GTA-style cinematic intro
 * Character reveals with verse overlays, anthem audio, skip button.
 */

import { ANTHEM, type AnthemVerse } from '../data/Anthem';

// Each beat step in seconds per character reveal
const REVEAL_DURATION = 3.2;
const FADE_MS         = 600;

export class IntroSequence {
  private overlay!: HTMLDivElement;
  private ctx!: AudioContext;
  private masterGain!: GainNode;
  private done = false;
  private rafId = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];

  /** Returns a promise that resolves when the intro finishes or is skipped */
  play(): Promise<void> {
    return new Promise(resolve => {
      this._build(resolve);
    });
  }

  private _build(onDone: () => void): void {
    this._injectStyles();
    this._startAudio();

    this.overlay = document.createElement('div');
    this.overlay.id = 'intro-overlay';
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:50000;
      background:#000; overflow:hidden;
      font-family: system-ui, -apple-system, sans-serif;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
    `;

    // Skip button
    const skip = document.createElement('button');
    skip.textContent = 'SKIP ▶';
    skip.style.cssText = `
      position:absolute; top:20px; right:20px; z-index:10;
      background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25);
      color:rgba(255,255,255,0.6); font-size:12px; font-weight:700;
      padding:8px 16px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `;
    skip.addEventListener('click', () => this._finish(onDone));
    this.overlay.appendChild(skip);

    // City background (CSS layers)
    const city = document.createElement('div');
    city.className = 'intro-city';
    this.overlay.appendChild(city);

    // Content area
    const content = document.createElement('div');
    content.id = 'intro-content';
    content.style.cssText = `
      position:relative; z-index:5; text-align:center;
      width:100%; max-width:640px; padding:0 32px; box-sizing:border-box;
    `;
    this.overlay.appendChild(content);

    document.body.appendChild(this.overlay);

    // ── Phase 1: Logo intro (0–3s) ─────────────────────────────────────────
    this._after(200, () => this._showLogo(content));

    // ── Phase 2: Character reveals (3s+) ──────────────────────────────────
    let t = 3200;
    for (const verse of ANTHEM) {
      const verseSnap = verse;
      this._after(t, () => this._showVerse(content, verseSnap));
      t += REVEAL_DURATION * 1000;
    }

    // ── Phase 3: Final outro + launch ─────────────────────────────────────
    this._after(t, () => this._showOutro(content, onDone));
  }

  private _showLogo(content: HTMLDivElement): void {
    content.innerHTML = `
      <div class="intro-logo-wrap">
        <div class="intro-tree">🌳</div>
        <div class="intro-brand">TROWELED EARTH</div>
        <div class="intro-sub">MELBOURNE</div>
      </div>
    `;
  }

  private _showVerse(content: HTMLDivElement, verse: AnthemVerse): void {
    if (this.done) return;
    const isChorus = !verse.character;
    const lineHTML = verse.lines
      .map((l, i) => `<div class="intro-line" style="animation-delay:${i * 0.18}s">${l}</div>`)
      .join('');

    content.innerHTML = `
      <div class="intro-verse ${isChorus ? 'chorus' : ''}">
        <div class="intro-char-name" style="color:${verse.color}">${verse.label}</div>
        <div class="intro-lines">${lineHTML}</div>
      </div>
    `;
  }

  private _showOutro(content: HTMLDivElement, onDone: () => void): void {
    if (this.done) return;
    content.innerHTML = `
      <div class="intro-outro">
        <div class="intro-tree-big">🌳</div>
        <div class="intro-title-big">TROWELED EARTH RUSH</div>
        <div class="intro-tagline">"The walls remember every hand that shaped them."</div>
      </div>
    `;
    this._after(2800, () => {
      // Fade out overlay
      this.overlay.style.transition = `opacity ${FADE_MS}ms ease`;
      this.overlay.style.opacity = '0';
      this._after(FADE_MS + 50, () => this._finish(onDone));
    });
  }

  private _finish(onDone: () => void): void {
    if (this.done) return;
    this.done = true;
    this.timers.forEach(clearTimeout);
    cancelAnimationFrame(this.rafId);
    this._stopAudio();
    this.overlay?.remove();
    onDone();
  }

  // ── Anthem audio (dark cinematic) ─────────────────────────────────────────
  private _startAudio(): void {
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.12;
      this.masterGain.connect(this.ctx.destination);
      this._scheduleAnthem();
    } catch { /* audio fails silently */ }
  }

  private _stopAudio(): void {
    try {
      if (this.ctx) {
        this.masterGain?.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
        this.masterGain?.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
        setTimeout(() => { try { this.ctx.close(); } catch {} }, 600);
      }
    } catch {}
  }

  private _scheduleAnthem(): void {
    if (!this.ctx) return;
    const bpm = 82, bps = bpm / 60;
    let t = this.ctx.currentTime + 0.1;

    // Low drone pad
    const drone = this.ctx.createOscillator();
    const droneG = this.ctx.createGain();
    const droneFlt = this.ctx.createBiquadFilter();
    drone.type = 'sine'; drone.frequency.value = 55;
    droneFlt.type = 'lowpass'; droneFlt.frequency.value = 200;
    droneG.gain.setValueAtTime(0, t);
    droneG.gain.linearRampToValueAtTime(0.4, t + 2);
    drone.connect(droneFlt); droneFlt.connect(droneG); droneG.connect(this.masterGain);
    drone.start(t);

    // Schedule 120 beats (≈88s at 82bpm)
    for (let beat = 0; beat < 120; beat++) {
      const bt = t + beat / bps;
      const b = beat % 4;
      // Kick
      if (b === 0 || b === 2) this._kick(bt, 60);
      // Snare
      if (b === 1 || b === 3) this._snare(bt, 0.06);
      // Hi-hat every beat (quiet)
      this._hihat(bt, 0.018);
      // Bass pulse on 0
      if (b === 0) this._bassPulse(bt, 55);
      // High atmosphere sweep every 8 beats
      if (beat % 8 === 0) this._pad(bt, 220 * (beat % 3 === 0 ? 1 : beat % 3 === 1 ? 1.25 : 0.75));
    }
  }

  private _kick(t: number, freq: number): void {
    try {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.frequency.setValueAtTime(freq, t);
      o.frequency.exponentialRampToValueAtTime(20, t + 0.15);
      g.gain.setValueAtTime(0.6, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.connect(g); g.connect(this.masterGain);
      o.start(t); o.stop(t + 0.35);
    } catch {}
  }

  private _snare(t: number, vol: number): void {
    try {
      const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.2), this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = this.ctx.createBufferSource(), flt = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
      src.buffer = buf; flt.type = 'bandpass'; flt.frequency.value = 1800;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      src.connect(flt); flt.connect(g); g.connect(this.masterGain);
      src.start(t); src.stop(t + 0.22);
    } catch {}
  }

  private _hihat(t: number, vol: number): void {
    try {
      const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.05), this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = this.ctx.createBufferSource(), flt = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
      src.buffer = buf; flt.type = 'highpass'; flt.frequency.value = 8000;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      src.connect(flt); flt.connect(g); g.connect(this.masterGain);
      src.start(t); src.stop(t + 0.07);
    } catch {}
  }

  private _bassPulse(t: number, freq: number): void {
    try {
      const o = this.ctx.createOscillator(), flt = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
      o.type = 'sawtooth'; o.frequency.value = freq;
      flt.type = 'lowpass'; flt.frequency.value = 300;
      g.gain.setValueAtTime(0.35, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      o.connect(flt); flt.connect(g); g.connect(this.masterGain);
      o.start(t); o.stop(t + 0.55);
    } catch {}
  }

  private _pad(t: number, freq: number): void {
    try {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain(), flt = this.ctx.createBiquadFilter();
      o.type = 'triangle'; o.frequency.value = freq;
      flt.type = 'lowpass'; flt.frequency.value = 1200;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.08, t + 0.5);
      g.gain.linearRampToValueAtTime(0, t + 3.5);
      o.connect(flt); flt.connect(g); g.connect(this.masterGain);
      o.start(t); o.stop(t + 4);
    } catch {}
  }

  private _after(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }

  private _injectStyles(): void {
    if (document.getElementById('intro-styles')) return;
    const s = document.createElement('style');
    s.id = 'intro-styles';
    s.textContent = `
      .intro-city {
        position:absolute; inset:0; z-index:1;
        background: linear-gradient(180deg, #0a0806 0%, #1a1208 40%, #0d0a06 100%);
        overflow:hidden;
      }
      .intro-city::before {
        content:''; position:absolute; bottom:0; left:0; right:0; height:35%;
        background: linear-gradient(0deg,
          rgba(30,20,10,0.9) 0%, rgba(15,10,5,0.5) 60%, transparent 100%);
      }
      .intro-city::after {
        content:''; position:absolute; bottom:60px; left:0; right:0; height:160px;
        background:
          repeating-linear-gradient(90deg,
            transparent 0, transparent 40px, rgba(200,168,106,0.05) 40px, rgba(200,168,106,0.05) 42px
          );
        mask-image: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%);
      }

      .intro-logo-wrap { text-align:center; animation: introFadeIn 1.2s ease both; }
      .intro-tree { font-size:56px; margin-bottom:12px; display:block; }
      .intro-brand {
        color:#C8A86A; font-size:clamp(22px,7vw,42px); font-weight:900;
        letter-spacing:6px; text-shadow:0 0 40px rgba(200,168,106,0.5);
      }
      .intro-sub { color:rgba(200,168,106,0.5); font-size:13px; letter-spacing:4px; margin-top:6px; }

      .intro-verse { animation: introFadeIn 0.5s ease both; }
      .intro-verse.chorus { border-top:1px solid rgba(200,168,106,0.25); padding-top:16px; }
      .intro-char-name {
        font-size:clamp(11px,3vw,14px); font-weight:900; letter-spacing:4px;
        text-transform:uppercase; margin-bottom:14px; opacity:0.9;
      }
      .intro-lines { display:flex; flex-direction:column; gap:7px; }
      .intro-line {
        color:rgba(240,232,216,0.82); font-size:clamp(13px,3.5vw,17px);
        line-height:1.5; font-style:italic;
        animation: introLineIn 0.4s ease both;
      }

      .intro-outro { animation: introFadeIn 0.8s ease both; text-align:center; }
      .intro-tree-big { font-size:72px; margin-bottom:16px; display:block; animation: introPulse 1.5s ease-in-out infinite; }
      .intro-title-big {
        color:#C8A86A; font-size:clamp(24px,8vw,52px); font-weight:900;
        letter-spacing:4px; text-shadow:0 0 60px rgba(200,168,106,0.6);
      }
      .intro-tagline {
        color:rgba(200,168,106,0.5); font-size:13px; font-style:italic;
        margin-top:12px; letter-spacing:0.5px;
      }

      @keyframes introFadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      @keyframes introLineIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
      @keyframes introPulse  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
    `;
    document.head.appendChild(s);
  }
}
