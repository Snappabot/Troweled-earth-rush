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

  // ── Timer tick state ────────────────────────────────────────────────────────
  private tickTimer: ReturnType<typeof setInterval> | null = null;
  private tickInterval = 1000;
  private tickUrgency = 0;       // 0–1, controls pitch and volume

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

  /** Wet splat — sharp noise burst + low thud. Used for spill events + bombs. */
  playSpill(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    // High-frequency wet splat: bandpassed noise
    this._noiseBurst(0.55, 0.12, 1800, 0.002, now);
    // Mid-range slap
    this._noiseBurst(0.35, 0.22, 600, 0.005, now + 0.02);
    // Low thud underneath
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.25);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.35);
  }

  /** Van side-door slam — heavy thud + click. */
  playDoorSlam(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    // Initial click — metal latch
    this._noiseBurst(0.25, 0.04, 3500, 0.001, now);
    // Heavy thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now + 0.02);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.3);
    gain.gain.setValueAtTime(0.55, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now + 0.02); osc.stop(now + 0.4);
    // Body shudder noise
    this._noiseBurst(0.18, 0.25, 200, 0.005, now + 0.04);
  }

  // ── Timer tick (heartbeat) — under 15 seconds ──────────────────────────────
  startTimerTick(urgency = 0): void {
    this.tickUrgency = Math.max(0, Math.min(1, urgency));
    // 0 = ~750ms (1.3 Hz), 1 = ~220ms (4.5 Hz)
    this.tickInterval = 750 - this.tickUrgency * 530;
    if (this.tickTimer !== null) return;
    const fire = () => {
      this._tickPulse();
      this.tickTimer = setTimeout(fire, this.tickInterval) as unknown as ReturnType<typeof setInterval>;
    };
    fire();
  }

  setTimerTickUrgency(urgency: number): void {
    this.tickUrgency = Math.max(0, Math.min(1, urgency));
    this.tickInterval = 750 - this.tickUrgency * 530;
  }

  stopTimerTick(): void {
    if (this.tickTimer !== null) {
      clearTimeout(this.tickTimer as unknown as ReturnType<typeof setTimeout>);
      this.tickTimer = null;
    }
  }

  private _tickPulse(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const baseFreq = 140 + this.tickUrgency * 280;     // 140Hz → 420Hz
    const vol      = 0.12 + this.tickUrgency * 0.18;   // 0.12 → 0.30
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + 0.08);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.1);
  }

  // ── ScaffoldGame sounds ────────────────────────────────────────────────────

  /** Coin/blob catch — bright pluck (ascending). */
  playScaffoldCatch(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(740, now);
    osc.frequency.exponentialRampToValueAtTime(1180, now + 0.10);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.18);
  }

  /** Climb / jump — short rising whoosh. */
  playScaffoldJump(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.18);
    gain.gain.setValueAtTime(0.20, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.24);
    this._noiseBurst(0.10, 0.18, 1200, 0.02, now);
  }

  /** Player placed/landed on a scaffold platform — thud/clank. */
  playScaffoldPlace(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    // Metallic clank
    this._noiseBurst(0.22, 0.05, 2200, 0.001, now);
    // Wood thud
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.18);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain); gain.connect(this.masterGain);
    osc.start(now); osc.stop(now + 0.25);
  }

  /** Goo bomb hit / fall — wet splat + thud. */
  playScaffoldFall(): void {
    this.playSpill(); // wet splat is a perfect goo-bomb hit
  }

  /** Top reached — bright triumphant fanfare (longer than mission complete). */
  playScaffoldWin(): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    // C5–E5–G5–C6 ascending, then sustained C6 + E6
    const seq = [523.25, 659.25, 783.99, 1046.50];
    seq.forEach((freq, i) => {
      const t = now + i * 0.10;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.32, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      osc.connect(gain); gain.connect(this.masterGain!);
      osc.start(t); osc.stop(t + 0.25);
    });
    // Sustained closing chord
    const tEnd = now + seq.length * 0.10 + 0.04;
    [1046.50, 1318.51].forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, tEnd);
      gain.gain.linearRampToValueAtTime(0.20, tEnd + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, tEnd + 0.7);
      osc.connect(gain); gain.connect(this.masterGain!);
      osc.start(tEnd); osc.stop(tEnd + 0.75);
    });
  }

  /** Failed to reach top — descending sad horn. */
  playScaffoldLose(): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const seq = [392.00, 329.63, 261.63]; // G4 → E4 → C4 descending
    seq.forEach((freq, i) => {
      const t = now + i * 0.18;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.22, t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);
      osc.connect(gain); gain.connect(this.masterGain!);
      osc.start(t); osc.stop(t + 0.35);
    });
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
    if (muted) this.stopTimerTick();
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
