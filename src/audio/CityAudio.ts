/**
 * CityAudio — synthesised city soundscape for TEM Rush.
 * No external files. All Web Audio API.
 */

const CHAR_LINES: Record<string, string> = {
  trump:         "Tremendous! Nobody gets hit by vans better than me!",
  elon:          "To the moon! Or the road. Same thing.",
  karen:         "I want to speak to the van driver immediately!",
  zuckerberg:    "I am a human. I am experiencing fear.",
  kanyewest:     "This van is a genius. I approve.",
  kanye:         "This van is a genius. I approve.",
  alexjones:     "THE VAN IS IN THE PLASTER! THE PLASTER IS IN THE VAN!",
  flatearther:   "The van follows the edge! There is no edge!",
  antivaxxer:    "My essential oils cannot protect me from this!",
  cryptobro:     "This is actually bullish for crypto!",
  conspiracyguy: "They planned this. The van. The plaster. All connected.",
};

export class CityAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private muted = false;

  private engineOsc: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private ambientStarted = false;
  private speechQueue: string[] = [];
  private speaking = false;

  constructor() {}

  start(): void {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.muted ? 0 : 1;
      this.masterGain.connect(this.ctx.destination);
      this._startAmbient();
    } catch (e) {
      console.warn('[CityAudio] init failed:', e);
    }
  }

  startEngine(): void {
    if (!this.ctx || !this.masterGain || this.engineOsc) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Click
    this._noiseBurst(0.3, 0.05, 400, 0.005, now);
    // Crank — bandpass noise 0.4s
    this._noiseBurst(0.15, 0.5, 100, 0.05, now + 0.3);
    // Engine catches at ~1s
    setTimeout(() => this._startEngineLoop(), 950);
  }

  private _startEngineLoop(): void {
    if (!this.ctx || !this.masterGain || this.engineOsc) return;
    const ctx = this.ctx;

    // Two detuned low-frequency oscillators through a lowpass — diesel rumble
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 120;
    filter.Q.value = 1.2;

    const osc  = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc.type  = 'sawtooth'; osc.frequency.value  = 48;
    osc2.type = 'sawtooth'; osc2.frequency.value = 51;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    osc.connect(filter); osc2.connect(filter);
    filter.connect(gain); gain.connect(this.masterGain);

    osc.start(); osc2.start();
    // Ramp in
    gain.gain.setTargetAtTime(0.09, ctx.currentTime, 0.4);

    this.engineOsc  = osc;
    this.engineOsc2 = osc2;
    this.engineGain = gain;
  }

  updateEngine(speed: number, _gear: number): void {
    if (!this.ctx || !this.engineOsc || !this.engineGain) return;
    const t = this.ctx.currentTime;
    const norm = Math.min(1, speed / 28);
    // 48Hz idle → 85Hz fast. Very low rumble, stays bassy.
    const freq   = 48 + norm * 37;
    const freq2  = freq + 3;
    const vol    = 0.05 + norm * 0.08; // max 0.13 — never overpowering
    this.engineOsc.frequency.setTargetAtTime(freq,  t, 0.12);
    if (this.engineOsc2) this.engineOsc2.frequency.setTargetAtTime(freq2, t, 0.12);
    this.engineGain.gain.setTargetAtTime(vol, t, 0.12);
  }

  honk(): void {
    if (!this.ctx || !this.masterGain) return;
    // Two-tone car horn: 390Hz + 490Hz sine, 0.5s
    this._tone(390, 'sine', 0.22, 0.5);
    this._tone(490, 'sine', 0.18, 0.5);
  }

  /** NPC speech via Web Speech API — queued so lines don't overlap */
  playHitChar(charId: string): void {
    const key  = charId.toLowerCase().replace(/[^a-z]/g, '');
    const line = CHAR_LINES[key] ?? null;
    if (!line) return;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.speechQueue.push(line);
      this._drainSpeechQueue();
    }
  }

  private _drainSpeechQueue(): void {
    if (this.speaking || this.speechQueue.length === 0) return;
    this.speaking = true;
    const line = this.speechQueue.shift()!;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(line);
    utter.volume = this.muted ? 0 : 1;
    utter.rate   = 1.0;
    utter.pitch  = 1.0;
    utter.onend  = () => { this.speaking = false; this._drainSpeechQueue(); };
    utter.onerror = () => { this.speaking = false; this._drainSpeechQueue(); };
    window.speechSynthesis.speak(utter);
  }

  playPedScatter(): void {
    if (!this.ctx || !this.masterGain) return;
    // Short rising yelp — sine sweep 300→600Hz
    const now  = this.ctx.currentTime;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200 + Math.random() * 200, now);
    osc.frequency.exponentialRampToValueAtTime(600 + Math.random() * 300, now + 0.12);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.15);
  }

  playCrash(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    // Low thud
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.5);
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.6);
    // Noise crunch
    this._noiseBurst(0.4, 0.3, 250, 0.01, now);
  }

  playMissionComplete(): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
    notes.forEach((freq, i) => {
      const t = now + i * 0.11;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.3, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.connect(gain); gain.connect(this.masterGain!);
      osc.start(t); osc.stop(t + 0.2);
    });
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 1, this.ctx.currentTime, 0.05);
    }
    if (muted && 'speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  // ── Private helpers ──────────────────────────────────────────────────────────

  private _startAmbient(): void {
    if (!this.ctx || !this.masterGain || this.ambientStarted) return;
    this.ambientStarted = true;
    // Constant low city rumble — filtered noise, very quiet
    this._rumbleLoop();
    // Distant traffic honks — proper car horn tones, not beeps
    this._scheduleTrafficHonk();
  }

  private _rumbleLoop(): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const sr  = ctx.sampleRate;
    const buf = ctx.createBuffer(1, sr * 3, sr);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

    const src    = ctx.createBufferSource();
    src.buffer   = buf;
    src.loop     = true;

    const filter = ctx.createBiquadFilter();
    filter.type  = 'lowpass';
    filter.frequency.value = 60; // very low — only the deep rumble passes

    const gain = ctx.createGain();
    gain.gain.value = 0.025; // barely audible undertone

    src.connect(filter); filter.connect(gain); gain.connect(this.masterGain);
    src.start();
  }

  private _scheduleTrafficHonk(): void {
    if (!this.ctx) return;
    const delay = 7000 + Math.random() * 14000;
    setTimeout(() => {
      if (!this.ctx || !this.masterGain) return;
      // Real car horn: two close sine tones
      const base = 330 + Math.random() * 120; // 330–450Hz
      const dur  = 0.25 + Math.random() * 0.3;
      this._tone(base,      'sine', 0.05, dur);
      this._tone(base * 1.26, 'sine', 0.04, dur); // perfect fourth above
      this._scheduleTrafficHonk();
    }, delay);
  }

  private _tone(freq: number, type: OscillatorType, vol: number, dur: number, startAt?: number): void {
    if (!this.ctx || !this.masterGain) return;
    const now  = startAt ?? this.ctx.currentTime;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type; osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, now);
    gain.gain.setValueAtTime(vol, now + dur * 0.8);
    gain.gain.linearRampToValueAtTime(0, now + dur);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + dur + 0.01);
  }

  private _noiseBurst(vol: number, dur: number, cutoff: number, attack: number, startAt?: number): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx  = this.ctx;
    const now  = startAt ?? ctx.currentTime;
    const sr   = ctx.sampleRate;
    const len  = Math.ceil(sr * dur);
    const buf  = ctx.createBuffer(1, len, sr);
    const d    = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    const src    = ctx.createBufferSource();
    src.buffer   = buf;

    const filter = ctx.createBiquadFilter();
    filter.type  = 'lowpass';
    filter.frequency.value = cutoff;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    src.connect(filter); filter.connect(gain); gain.connect(this.masterGain);
    src.start(now); src.stop(now + dur + 0.05);
  }
}
