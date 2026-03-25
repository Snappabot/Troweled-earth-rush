/**
 * CityAudio — Web Audio API city sound engine for TEM Rush.
 * All sounds are synthesised inline — no external files required.
 */

interface CharVoice {
  pitch: number;
  rate: number;
  line: string;
}

const CHAR_VOICES: Record<string, CharVoice> = {
  trump:        { pitch: 0.8,  rate: 0.9,  line: "Tremendous! Nobody gets hit by vans better than me!" },
  elon:         { pitch: 1.2,  rate: 1.1,  line: "To the moon! Or the road. Same thing." },
  karen:        { pitch: 1.4,  rate: 1.2,  line: "I want to speak to the van driver immediately!" },
  zuckerberg:   { pitch: 0.9,  rate: 0.8,  line: "I am a human. I am experiencing fear." },
  kanye:        { pitch: 0.85, rate: 0.95, line: "This van is a genius. I approve." },
  alexjones:    { pitch: 1.0,  rate: 1.3,  line: "THE VAN IS IN THE PLASTER! THE PLASTER IS IN THE VAN!" },
  flatearther:  { pitch: 1.1,  rate: 1.0,  line: "The van follows the edge! There is no edge!" },
  antivaxxer:   { pitch: 1.2,  rate: 1.1,  line: "My essential oils cannot protect me from this!" },
  cryptobro:    { pitch: 1.0,  rate: 1.2,  line: "This is actually bullish for crypto!" },
  conspiracyguy:{ pitch: 0.9,  rate: 0.85, line: "They planned this. The van. The plaster. All connected." },
};

export class CityAudio {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private muted = false;

  // Engine oscillator (persistent)
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineShaper: WaveShaperNode | null = null;

  // Ambient state
  private ambientStarted = false;
  private honkScheduled = false;

  // Horn debounce
  private _hornActive = false;

  constructor() {}

  /** Call once after first user interaction. Creates AudioContext and starts all loops. */
  start(): void {
    if (this.ctx) return;
    try {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.muted ? 0 : 1;
      this.masterGain.connect(this.ctx.destination);

      this._startEngine();
      this._startAmbient();
    } catch (e) {
      console.warn('[CityAudio] AudioContext creation failed:', e);
    }
  }

  /** Call every frame with current van speed (m/s) and gear (unused for now). */
  updateEngine(speed: number, _gear: number): void {
    if (!this.ctx || !this.engineOsc || !this.engineGain) return;
    const t = this.ctx.currentTime;
    // Speed 0 → 80 Hz idle, speed ~30 → 180 Hz
    const normSpeed = Math.min(1, speed / 30);
    const targetFreq = 80 + normSpeed * 100;
    const targetVol  = 0.08 + normSpeed * 0.18;
    this.engineOsc.frequency.setTargetAtTime(targetFreq, t, 0.1);
    this.engineGain.gain.setTargetAtTime(targetVol, t, 0.1);
  }

  /** Two-tone van horn — A4 + E5, 0.4 s square wave. */
  honk(): void {
    if (!this.ctx || !this.masterGain) return;
    const freqs = [440, 659];
    const now = this.ctx.currentTime;
    for (const freq of freqs) {
      const osc  = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.4);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.42);
    }
  }

  /** Play a funny speech line for a hit character. Falls back to synth beep. */
  playHitChar(charId: string): void {
    const key = charId.toLowerCase().replace(/[^a-z]/g, '');
    const voice = CHAR_VOICES[key] ?? null;

    if (typeof window !== 'undefined' && window.speechSynthesis && voice) {
      // Cancel any ongoing speech first
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(voice.line);
      utter.pitch = voice.pitch;
      utter.rate  = voice.rate;
      utter.volume = this.muted ? 0 : 0.9;
      window.speechSynthesis.speak(utter);
    } else {
      // Synth fallback: short ascending beep pair
      this._synth(880, 'sine', 0.1, 0.08);
      setTimeout(() => this._synth(1100, 'sine', 0.07, 0.06), 80);
    }
  }

  /** Short FM yelp — random pitch 400-800 Hz, 0.15 s. */
  playPedScatter(): void {
    if (!this.ctx || !this.masterGain) return;
    const baseFreq = 400 + Math.random() * 400;
    const now = this.ctx.currentTime;
    const carrier = this.ctx.createOscillator();
    const modulator = this.ctx.createOscillator();
    const modGain   = this.ctx.createGain();
    const outGain   = this.ctx.createGain();

    carrier.type  = 'sine';
    carrier.frequency.value = baseFreq;
    modulator.type = 'sine';
    modulator.frequency.value = baseFreq * 3.5;
    modGain.gain.value = baseFreq * 2;

    modulator.connect(modGain);
    modGain.connect(carrier.frequency);

    outGain.gain.setValueAtTime(0.22, now);
    outGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    carrier.connect(outGain);
    outGain.connect(this.masterGain);

    modulator.start(now); modulator.stop(now + 0.16);
    carrier.start(now);   carrier.stop(now + 0.16);
  }

  /** Low thud crash — sine burst at 60 Hz + filtered noise burst. */
  playCrash(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Sine thud
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.5);

    // Noise burst
    this._noiseBurst(0.3, 0.3, 200, 0.35);
  }

  /** Cheerful 5-note fanfare: C E G C5 E5 ascending arpeggio. */
  playMissionComplete(): void {
    if (!this.ctx || !this.masterGain) return;
    const ctx = this.ctx;
    const masterGain = this.masterGain;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4 E4 G4 C5 E5
    const stepTime = 0.12;
    const now = ctx.currentTime;

    notes.forEach((freq, i) => {
      const t    = now + i * stepTime;
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.02);
      gain.gain.setValueAtTime(0.35, t + stepTime * 0.6);
      gain.gain.linearRampToValueAtTime(0, t + stepTime * 1.2);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(t);
      osc.stop(t + stepTime * 1.3);
    });

    // Final chord bloom: all three notes together
    const chordStart = now + notes.length * stepTime;
    [261.63, 329.63, 392.00].forEach(freq => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, chordStart);
      gain.gain.linearRampToValueAtTime(0.2, chordStart + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, chordStart + 0.7);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(chordStart);
      osc.stop(chordStart + 0.75);
    });
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(muted ? 0 : 1, this.ctx!.currentTime, 0.05);
    }
    // Also mute speech synthesis
    if (muted && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  // ── Private helpers ──────────────────────────────────────────────────────────

  private _startEngine(): void {
    if (!this.ctx || !this.masterGain) return;

    // WaveShaper for slight overdrive
    const shaper = this.ctx.createWaveShaper();
    shaper.curve = this._makeDistortionCurve(60);
    shaper.oversample = '2x';
    this.engineShaper = shaper;

    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Add slight detuned oscillator for richness
    const osc2  = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sawtooth';
    osc2.frequency.value = 83; // slightly detuned
    gain2.gain.value = 0.04;
    osc2.connect(gain2);
    gain2.connect(shaper);

    osc.type = 'sawtooth';
    osc.frequency.value = 80;
    gain.gain.value = 0.08;
    osc.connect(gain);
    gain.connect(shaper);
    shaper.connect(this.masterGain);

    osc.start();
    osc2.start();

    this.engineOsc  = osc;
    this.engineGain = gain;
  }

  private _startAmbient(): void {
    if (!this.ctx || !this.masterGain || this.ambientStarted) return;
    this.ambientStarted = true;

    // 1. Low distant rumble — filtered noise
    this._startRumble();

    // 2. Occasional random traffic honks
    this._scheduleRandomHonk();

    // 3. Occasional crowd murmur bursts
    this._scheduleCrowdMurmur();
  }

  private _startRumble(): void {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data   = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.loop   = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 80;
    filter.Q.value = 0.5;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.03;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    source.start();
  }

  private _scheduleRandomHonk(): void {
    if (!this.ctx) return;
    const delay = 8000 + Math.random() * 12000; // 8-20 s
    this.honkScheduled = true;
    setTimeout(() => {
      if (!this.ctx || !this.masterGain) return;
      const freq = 300 + Math.random() * 300; // 300-600 Hz
      const now  = this.ctx.currentTime;
      const osc  = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.35);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.38);
      this._scheduleRandomHonk(); // reschedule
    }, delay);
  }

  private _scheduleCrowdMurmur(): void {
    if (!this.ctx) return;
    const delay = 12000 + Math.random() * 18000; // 12-30 s
    setTimeout(() => {
      if (!this.ctx || !this.masterGain) return;
      this._noiseBurst(0.08, 1.5, 800, 0.06);
      this._scheduleCrowdMurmur();
    }, delay);
  }

  /** Short noise burst: duration s, filter cutoff Hz, volume. */
  private _noiseBurst(vol: number, duration: number, cutoffHz: number, attackTime: number): void {
    if (!this.ctx || !this.masterGain) return;
    const sampleRate = this.ctx.sampleRate;
    const length     = Math.ceil(sampleRate * duration);
    const buffer     = this.ctx.createBuffer(1, length, sampleRate);
    const data       = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;

    const source = this.ctx.createBufferSource();
    source.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = cutoffHz;
    filter.Q.value = 1.2;

    const gain = this.ctx.createGain();
    const now  = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(vol, now + attackTime);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    source.start(now);
    source.stop(now + duration + 0.05);
  }

  /** Quick one-shot synth tone. */
  private _synth(freq: number, type: OscillatorType, vol: number, duration: number): void {
    if (!this.ctx || !this.masterGain) return;
    const now  = this.ctx.currentTime;
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + duration + 0.01);
  }

  private _makeDistortionCurve(amount: number): Float32Array<ArrayBuffer> {
    const n = 256;
    const buf  = new ArrayBuffer(n * 4);
    const curve = new Float32Array(buf);
    const deg   = Math.PI / 180;
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1;
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
  }
}
