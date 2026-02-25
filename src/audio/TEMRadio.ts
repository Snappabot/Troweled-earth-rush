/**
 * TEMRadio — Troweled Earth Radio
 * GTA-style in-game radio with 5 stations, real audio + Web Audio API fallback,
 * fake song titles, DJ callouts, and a sleek bottom-bar UI.
 */

import { AUDIO } from './AudioAssets';

// ── Station definitions ────────────────────────────────────────────────────────
interface Station {
  id: string;
  name: string;
  freq: string;
  tagline: string;
  songs: string[];
  dj: string[];           // rotating DJ callout lines
  bpm: number;
  rootHz: number;         // root note
  vibe: 'ambient' | 'lofi' | 'rock' | 'italian' | 'electronic';
  color: string;
  audioFile?: string;     // optional real audio track (loops)
}

const STATIONS: Station[] = [
  {
    id: 'tem-fm',
    name: 'TEM FM',
    freq: '88.3',
    tagline: "Melbourne's Most Refined",
    songs: [
      '★ Troweled Earth (The Anthem) [LIVE]',
      'Fresh Plaster Dreams',
      'Tadelakt Sunrise',
      'Ochre & Ochre',
      'Marbellino Midnight',
      'Render Slowly (feat. Phil)',
    ],
    dj: [
      "TEM FM — opening tonight with the anthem. Turn it up.",
      "That was Troweled Earth — The Anthem. Written on site, finished in the van.",
      "You're listening to TEM FM. Don't spill.",
      "Smooth surfaces. Smoother sounds. TEM FM 88.3.",
      "That was a certified classic. Like a three-coat stucco system.",
      "Blood red clay to concrete's cold embrace... TEM FM.",
    ],
    bpm: 68, rootHz: 220, vibe: 'ambient', color: '#C8A86A',
    audioFile: AUDIO.theme,
  },
  {
    id: 'brunswick-beats',
    name: 'BRUNSWICK BEATS',
    freq: '99.9',
    tagline: 'Lo-Fi for Lo-Fi People',
    songs: [
      'study playlist #47',
      'plaster & chill',
      'waiting for jarrad (again)',
      'lost my trowel',
      'bladder full, waypoint far',
    ],
    dj: [
      "Brunswick Beats. For people who get it.",
      "That was a vibe. This is also a vibe. 99.9.",
      "We don't talk. We just play the music. Brunswick Beats.",
      "Jarrad submitted this playlist. He says it slaps. It does.",
    ],
    bpm: 80, rootHz: 196.00, vibe: 'lofi', color: '#8B9EC8',
    audioFile: AUDIO.radio2,
  },
  {
    id: 'the-scaffold',
    name: 'THE SCAFFOLD',
    freq: '107.1',
    tagline: 'Tune In, Fall Off',
    songs: [
      '30% Penalty (Acoustic)',
      'Epstein Was Right (Radio Edit)',
      'Topknot Thunder',
      'Hard Hat? Never Heard of Her',
      'Five Floors No Fear',
    ],
    dj: [
      "THE SCAFFOLD. 107.1. You WILL survive the jump.",
      "That riff goes harder than Tsuyoshi vaulting the van door.",
      "Tune in. Fall off. THE SCAFFOLD.",
      "Jarrad called in. Said he's been waiting fifteen minutes. Legend.",
    ],
    bpm: 140, rootHz: 164.81, vibe: 'rock', color: '#C1666B',
    audioFile: AUDIO.scaffold,
  },
  {
    id: 'fabio-pizza',
    name: "FABIO'S PIZZA RADIO",
    freq: '92.5',
    tagline: 'Music for Real Men',
    songs: [
      'Ehhhh (12" Extended Mix)',
      'San Marzano Morning',
      'La Dolce Trowel',
      'One Slice, Two Slice',
      'Thin Base, Wood Fire (feat. Fabio)',
    ],
    dj: [
      "Fabio's Pizza Radio — ehhhh. That is all.",
      "You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.",
      "That song — like a perfect margherita. Simple. Honest. Ehhhh.",
      "Fabio's Pizza Radio. For men with trowels and good taste.",
    ],
    bpm: 108, rootHz: 246.94, vibe: 'italian', color: '#D4602A',
    audioFile: AUDIO.radio3,
  },
  {
    id: 'jarrad-fm',
    name: 'JARRAD FM',
    freq: '105.9',
    tagline: "He's Running Late But He's Here",
    songs: [
      '★ Five Floors No Fear [Radio Cut]',
      'Topknot Thunder',
      'Scaffold or Die',
      'Left My Phone on Level 4',
      'Running Late (Again)',
    ],
    dj: [
      "Jarrad FM 105.9 — yeah nah yeah nah yeah.",
      "That was Jarrad. He submitted it from the scaffold. Mid-climb.",
      "105.9 — for the ones who take the stairs AND the poles.",
      "Jarrad called in. Said he's almost there. That was 40 minutes ago.",
    ],
    bpm: 128, rootHz: 174.61, vibe: 'rock', color: '#E8A830',
    audioFile: AUDIO.radio8,
  },
  {
    id: 'tsuyoshi-fm',
    name: 'TSUYOSHI FM',
    freq: '104.5',
    tagline: "Precision. Focus. Plaster.",
    songs: [
      '★ Five Coat Finish [Live Session]',
      'Venetian Nights',
      'Tadelakt & Silence',
      'The Quiet Climb',
      'Zero Defects (feat. Tsuyoshi)',
    ],
    dj: [
      "Tsuyoshi FM 104.5 — play it perfectly or don't play it.",
      "That was flawless. Like Tsuyoshi's tadelakt. 104.5.",
      "No mistakes. No shortcuts. Tsuyoshi FM.",
      "You are listening to the most precise station in Melbourne.",
    ],
    bpm: 76, rootHz: 220, vibe: 'lofi', color: '#78C8A8',
    audioFile: AUDIO.radio7,
  },
  {
    id: 'warlord-sessions',
    name: 'WARLORD SESSIONS',
    freq: '101.5',
    tagline: "Deep Cuts from the Site",
    songs: [
      '★ The Warlord Method [Extended Mix]',
      'Forty Coats, One Wall',
      'Blood Red Clay (Long Version)',
      'Marbellino Deep Session',
      'The Matt Maloy Experience',
    ],
    dj: [
      "Warlord Sessions 101.5 — long-form. No fillers.",
      "You're in deep now. Warlord Sessions.",
      "Matt approved this personally. Says it captures the vibe.",
      "101.5 — for the ones who stay on site after dark.",
    ],
    bpm: 72, rootHz: 207.65, vibe: 'ambient', color: '#A07840',
    audioFile: AUDIO.radio6,
  },
  {
    id: 'joses-mix',
    name: "JOSE'S MIX",
    freq: '96.1',
    tagline: "From the Van. For the Van.",
    songs: [
      '★ Late Night Render [LIVE]',
      'BTC Stack (Instrumental)',
      'Marbellino Midnight Run',
      'Van Life Vol. II',
      'Gold Sky Reprise',
    ],
    dj: [
      "Jose's Mix 96.1 — playing what Jose wants, when Jose wants.",
      "You're listening to the only station that matters. 96.1.",
      "That was a banger. Jose approved it personally.",
      "No requests. Jose already chose the perfect song.",
    ],
    bpm: 95, rootHz: 233.08, vibe: 'electronic', color: '#FFD700',
    audioFile: AUDIO.radio5,
  },
  {
    id: 'connie-gold',
    name: "CONNIE'S GOLD",
    freq: '103.7',
    tagline: 'For the Craft, Darling',
    songs: [
      'Quando Quando Quando (In the Van)',
      'Bella Ciao Bella Render',
      'Volare Trowel',
      'Arrivederci Deadline',
      'O Sole Mio Stucco',
    ],
    dj: [
      "Ehhhh — welcome to Connie's Gold! Ha ha ha ha!",
      "You're listening to the best station. Connie said so. She's right.",
      "Connie's Gold 103.7 — music to plaster by, darling.",
      "Next up: another classic. Just like our Antique Stucco. Ha!",
    ],
    bpm: 92, rootHz: 261.63, vibe: 'italian', color: '#E8A050',
    audioFile: AUDIO.connie,
  },
  {
    id: 'tem-talk',
    name: 'TEM TALK',
    freq: '91.1',
    tagline: 'Conversations From the Site',
    songs: [
      '★ The Troweled Earth Podcast [LIVE]',
      'Deep Dive: Blood Red Clay vs Venetian',
      'Interview: Matt on the Warlord Method',
      'Ask Connie — Running a Crew in Melbourne',
      'Five Years of Tadelakt with Tsuyoshi',
    ],
    dj: [
      "TEM Talk 91.1 — real conversations from the trade.",
      "You're listening to Melbourne's only plastering podcast. TEM Talk.",
      "That was a conversation worth replaying. 91.1 FM.",
      "Next up: more from the TEM crew. Stick around.",
    ],
    bpm: 70, rootHz: 180, vibe: 'ambient', color: '#90B0C0',
    audioFile: AUDIO.theme2,
  },
];

// ── Audio engine ──────────────────────────────────────────────────────────────
class RadioAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain!: GainNode;
  private scheduleAhead = 0.1;   // seconds
  private scheduleInterval = 0.05;
  private nextBeatTime = 0;
  private beatCount = 0;
  private currentStation: Station | null = null;
  private nodes: AudioNode[] = [];
  private schedulerTimer = 0;
  private compressor!: DynamicsCompressorNode;
  private realAudioEl: HTMLAudioElement | null = null;
  private realAudioActive = false;

  init(): boolean {
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.value = -18;
      this.compressor.ratio.value = 4;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.18;
      this.masterGain.connect(this.compressor);
      this.compressor.connect(this.ctx.destination);
      return true;
    } catch { return false; }
  }

  setVolume(v: number): void {
    if (this.masterGain) this.masterGain.gain.value = v;
    if (this.realAudioEl) this.realAudioEl.volume = Math.min(1, v * 4); // scale up from synth level
  }

  play(station: Station): void {
    this.stop();
    this.currentStation = station;
    this.beatCount = 0;

    // Try real audio file first — no AudioContext needed
    if (station.audioFile) {
      const vol = Math.min(1, (this.masterGain?.gain.value ?? 0.18) * 4.5);
      const audio = new Audio();
      audio.src = station.audioFile;
      audio.loop = true;
      audio.volume = vol;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.realAudioEl = audio;
          this.realAudioActive = true;
        }).catch(() => {
          // Real audio blocked — fall back to generative
          this.realAudioActive = false;
          this._startGenerative();
        });
      } else {
        // Older browser — assume play started
        this.realAudioEl = audio;
        this.realAudioActive = true;
      }
    } else {
      this._startGenerative();
    }
  }

  private _startGenerative(): void {
    if (!this.ctx || !this.currentStation) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.nextBeatTime = this.ctx.currentTime + 0.05;
    this.schedulerTimer = window.setInterval(() => this._schedule(), this.scheduleInterval * 1000);
  }

  stop(): void {
    clearInterval(this.schedulerTimer);
    this.nodes.forEach(n => { try { (n as any).stop?.(); n.disconnect(); } catch {} });
    this.nodes = [];
    this.currentStation = null;
    // Stop real audio
    if (this.realAudioEl) {
      this.realAudioEl.pause();
      this.realAudioEl.src = '';
      this.realAudioEl = null;
    }
    this.realAudioActive = false;
  }

  private _schedule(): void {
    if (!this.ctx || !this.currentStation) return;
    const lookAhead = this.ctx.currentTime + this.scheduleAhead;
    while (this.nextBeatTime < lookAhead) {
      this._scheduleBeat(this.nextBeatTime, this.beatCount, this.currentStation);
      const bps = this.currentStation.bpm / 60;
      this.nextBeatTime += 1 / bps;
      this.beatCount++;
    }
  }

  private _scheduleBeat(t: number, beat: number, st: Station): void {
    const bar = Math.floor(beat / 4);
    const b   = beat % 4;
    const r   = st.rootHz;

    switch (st.vibe) {
      case 'ambient':   this._ambientBeat(t, beat, r); break;
      case 'lofi':      this._lofiBeat(t, b, r); break;
      case 'rock':      this._rockBeat(t, b, bar, r); break;
      case 'italian':   this._italianBeat(t, b, bar, r); break;
      case 'electronic':this._electronicBeat(t, b, r); break;
    }
  }

  // ── Ambient (TEM FM) — slow pads + occasional pluck ──────────────────────
  private _ambientBeat(t: number, beat: number, r: number): void {
    if (!this.ctx) return;
    // Slow pad chord every 4 beats
    if (beat % 4 === 0) {
      const chord = [r, r * 1.25, r * 1.5, r * 2]; // major chord
      chord.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const g   = this.ctx!.createGain();
        const flt = this.ctx!.createBiquadFilter();
        osc.type = 'sine';
        osc.frequency.value = f * 0.5;
        flt.type = 'lowpass'; flt.frequency.value = 800;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.06 - i * 0.01, t + 0.4);
        g.gain.linearRampToValueAtTime(0, t + 3.5);
        osc.connect(flt); flt.connect(g); g.connect(this.masterGain);
        osc.start(t); osc.stop(t + 4);
        this.nodes.push(osc, g);
      });
    }
    // Occasional high pluck
    if (beat % 8 === 5) {
      const osc = this.ctx.createOscillator();
      const g   = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = r * 4;
      g.gain.setValueAtTime(0.04, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
      osc.connect(g); g.connect(this.masterGain);
      osc.start(t); osc.stop(t + 0.9);
      this.nodes.push(osc, g);
    }
  }

  // ── Lo-fi (Brunswick Beats) — boom-bap drums + bass ──────────────────────
  private _lofiBeat(t: number, b: number, r: number): void {
    if (!this.ctx) return;
    // Kick on 0,2
    if (b === 0 || b === 2) this._kick(t, r * 0.5);
    // Snare on 1,3
    if (b === 1 || b === 3) this._snare(t, 0.04);
    // Hi-hat every beat
    this._hihat(t, 0.025);
    // Bass line
    const bassNotes = [r * 0.5, r * 0.5, r * 0.5 * 0.75, r * 0.5 * 0.9];
    this._bass(t, bassNotes[b], 0.25);
  }

  // ── Rock (The Scaffold) — driving 4/4 + power bass ───────────────────────
  private _rockBeat(t: number, b: number, bar: number, r: number): void {
    if (!this.ctx) return;
    // Kick on 0, 2 (and extra on 2.5 every other bar)
    if (b === 0 || b === 2) this._kick(t, r * 0.4);
    // Snare 1,3
    if (b === 1 || b === 3) this._snare(t, 0.07);
    // Aggressive hi-hats every half beat (will fire each beat here)
    this._hihat(t, 0.05);
    // Distorted power bass
    const powerNotes = [r * 0.5, r * 0.5, r * 0.5 * 0.8, r * 0.5];
    this._distBass(t, powerNotes[b % 4]);
    // Rhythm guitar power chord every bar start
    if (b === 0 && bar % 2 === 0) {
      [r, r * 1.5, r * 2].forEach(f => {
        const osc = this.ctx!.createOscillator();
        const g   = this.ctx!.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = f;
        g.gain.setValueAtTime(0.035, t); g.gain.linearRampToValueAtTime(0, t + 0.5);
        osc.connect(g); g.connect(this.masterGain);
        osc.start(t); osc.stop(t + 0.55);
        this.nodes.push(osc, g);
      });
    }
  }

  // ── Italian (Connie's Gold / Fabio's Pizza Radio) — waltz/upbeat ─────────
  private _italianBeat(t: number, b: number, bar: number, r: number): void {
    if (!this.ctx) return;
    // Oom-pah-pah style bass on beat 0
    if (b === 0) this._bass(t, r * 0.5, 0.3);
    if (b === 1 || b === 2 || b === 3) this._bass(t, r * 0.75, 0.12);
    // Kick on 0
    if (b === 0) this._kick(t, r * 0.5);
    // Accordion-style chord (triangle + slight vibrato)
    if (b === 0 || b === 2) {
      const melody = [r, r * 1.122, r * 1.260, r * 1.498, r * 1.682];
      const note = melody[bar % melody.length];
      const osc = this.ctx!.createOscillator();
      const g   = this.ctx!.createGain();
      osc.type = 'triangle';
      osc.frequency.value = note;
      // Simple vibrato via LFO
      const lfo = this.ctx!.createOscillator();
      const lfoG = this.ctx!.createGain();
      lfo.frequency.value = 5.5;
      lfoG.gain.value = 3;
      lfo.connect(lfoG); lfoG.connect(osc.frequency);
      g.gain.setValueAtTime(0.04, t); g.gain.linearRampToValueAtTime(0, t + 0.8);
      osc.connect(g); g.connect(this.masterGain);
      lfo.start(t); osc.start(t);
      lfo.stop(t + 0.9); osc.stop(t + 0.9);
      this.nodes.push(osc, lfo, g, lfoG);
    }
  }

  // ── Electronic ────────────────────────────────────────────────────────────
  private _electronicBeat(t: number, b: number, r: number): void {
    if (!this.ctx) return;
    if (b === 0 || b === 2) this._kick(t, r * 0.5);
    if (b === 1 || b === 3) this._snare(t, 0.05);
    this._hihat(t, 0.03);
    if (b === 0) this._bass(t, r * 0.5, 0.25);
    if (b === 2) this._bass(t, r * 0.375, 0.2);
  }

  // ── Primitive drum sounds ─────────────────────────────────────────────────
  private _kick(t: number, freq: number): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g   = this.ctx.createGain();
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.12);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.connect(g); g.connect(this.masterGain);
    osc.start(t); osc.stop(t + 0.3);
    this.nodes.push(osc, g);
  }

  private _snare(t: number, vol: number): void {
    if (!this.ctx) return;
    const bufLen = Math.floor(this.ctx.sampleRate * 0.18);
    const buf    = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'bandpass'; flt.frequency.value = 1800; flt.Q.value = 0.8;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    src.connect(flt); flt.connect(g); g.connect(this.masterGain);
    src.start(t); src.stop(t + 0.2);
    this.nodes.push(src, g);
  }

  private _hihat(t: number, vol: number): void {
    if (!this.ctx) return;
    const bufLen = Math.floor(this.ctx.sampleRate * 0.06);
    const buf    = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = (Math.random() * 2 - 1);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const flt = this.ctx.createBiquadFilter();
    flt.type = 'highpass'; flt.frequency.value = 7000;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    src.connect(flt); flt.connect(g); g.connect(this.masterGain);
    src.start(t); src.stop(t + 0.08);
    this.nodes.push(src, g);
  }

  private _bass(t: number, freq: number, vol: number): void {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const flt = this.ctx.createBiquadFilter();
    const g   = this.ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.value = freq;
    flt.type = 'lowpass'; flt.frequency.value = 350;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    osc.connect(flt); flt.connect(g); g.connect(this.masterGain);
    osc.start(t); osc.stop(t + 0.4);
    this.nodes.push(osc, g);
  }

  private _distBass(t: number, freq: number): void {
    if (!this.ctx) return;
    const osc  = this.ctx.createOscillator();
    const wave = this.ctx.createWaveShaper();
    const g    = this.ctx.createGain();
    osc.type = 'sawtooth'; osc.frequency.value = freq;
    // Simple hard-clip distortion curve
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 256 - 1;
      curve[i] = Math.max(-0.6, Math.min(0.6, x * 3));
    }
    wave.curve = curve;
    g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(wave); wave.connect(g); g.connect(this.masterGain);
    osc.start(t); osc.stop(t + 0.35);
    this.nodes.push(osc, g);
  }
}

// ── Radio UI ──────────────────────────────────────────────────────────────────
export class TEMRadio {
  private container!: HTMLDivElement;
  private stationIdx = 0;
  private on = false;
  private songIdx = 0;
  private djIdx = 0;
  private songTimer = 0;
  private djTimer = 0;
  private nameEl!: HTMLSpanElement;
  private songEl!: HTMLDivElement;
  private djEl!: HTMLDivElement;
  private iconEl!: HTMLSpanElement;
  private freqEl!: HTMLSpanElement;
  private engine = new RadioAudioEngine();
  private engineReady = false;
  private volumeSlider!: HTMLInputElement;
  private rafId = 0;
  private lastUpdateTs = 0;

  constructor() {
    this._buildUI();
    // Start timers for song/DJ rotation
    this.lastUpdateTs = performance.now();
    this._tick();
  }

  private _volOpen = false;

  private _buildUI(): void {
    // ── Outer wrapper — lives inside GameMenu dropdown ────────────────────────
    this.container = document.createElement('div');
    this.container.style.cssText = `
      z-index: 1; font-family: system-ui, sans-serif;
      display: flex; flex-direction: column; align-items: stretch; gap: 4px;
      user-select: none; transition: opacity 0.4s; width: 100%;
    `;

    // ── Main bar ─────────────────────────────────────────────────────────────
    const bar = document.createElement('div');
    bar.style.cssText = `
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(200,168,106,0.2); border-radius: 12px;
      padding: 8px 12px;
      pointer-events: auto; touch-action: manipulation;
    `;

    // 📻 icon (decorative)
    this.iconEl = document.createElement('span');
    this.iconEl.textContent = '📻';
    this.iconEl.style.cssText = `font-size:16px; opacity:0.85; line-height:1;`;

    // ◀ Prev station
    const prev = document.createElement('span');
    prev.textContent = '◀';
    prev.style.cssText = `color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;`;
    prev.addEventListener('click', () => this._changeStation(-1));

    // Station name + freq
    const nameWrap = document.createElement('div');
    nameWrap.style.cssText = `display:flex; flex-direction:column; align-items:center; min-width:120px;`;

    this.nameEl = document.createElement('span');
    this.nameEl.style.cssText = `
      color: #C8A86A; font-size: 11px; font-weight: 900;
      letter-spacing: 1.5px; text-transform: uppercase; line-height:1.2;
    `;

    this.freqEl = document.createElement('span');
    this.freqEl.style.cssText = `color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;`;

    nameWrap.appendChild(this.nameEl);
    nameWrap.appendChild(this.freqEl);

    // ▶ Next station
    const next = document.createElement('span');
    next.textContent = '▶';
    next.style.cssText = `color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;`;
    next.addEventListener('click', () => this._changeStation(1));

    // 🔊 Volume button
    const volBtn = document.createElement('span');
    volBtn.textContent = '🔊';
    volBtn.title = 'Volume';
    volBtn.style.cssText = `font-size:14px; cursor:pointer; opacity:0.8; line-height:1; padding:0 1px;`;
    volBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._volOpen = !this._volOpen;
      volPanel.style.display = this._volOpen ? 'flex' : 'none';
    });

    // ⏻ Off button
    const offBtn = document.createElement('span');
    offBtn.textContent = '⏻';
    offBtn.title = this.on ? 'Turn Off' : 'Turn On';
    offBtn.style.cssText = `
      font-size:14px; cursor:pointer; line-height:1; padding:0 1px;
      color: rgba(200,168,106,0.8); font-weight:bold;
    `;
    offBtn.addEventListener('click', () => {
      this._togglePower();
      offBtn.title = this.on ? 'Turn Off' : 'Turn On';
      offBtn.style.color = this.on ? '#ff6b6b' : 'rgba(200,168,106,0.8)';
    });

    bar.appendChild(this.iconEl);
    bar.appendChild(prev);
    bar.appendChild(nameWrap);
    bar.appendChild(next);
    bar.appendChild(volBtn);
    bar.appendChild(offBtn);

    // ── Volume panel (shown/hidden by volBtn) ────────────────────────────────
    const volPanel = document.createElement('div');
    volPanel.style.cssText = `
      display: none; align-items: center; gap: 6px;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(12px);
      border: 1px solid rgba(200,168,106,0.25); border-radius: 20px;
      padding: 5px 12px;
      pointer-events: auto; touch-action: manipulation;
    `;

    const volIcon = document.createElement('span');
    volIcon.textContent = '🔈';
    volIcon.style.cssText = `font-size:12px; opacity:0.7;`;

    this.volumeSlider = document.createElement('input');
    this.volumeSlider.type = 'range';
    this.volumeSlider.min = '0'; this.volumeSlider.max = '100'; this.volumeSlider.value = '55';
    this.volumeSlider.style.cssText = `
      width: 80px; height: 3px; accent-color: #C8A86A; cursor: pointer;
    `;
    this.volumeSlider.addEventListener('input', () => {
      const v = Number(this.volumeSlider.value) / 100;
      this.engine.setVolume(v * 0.18);
      volIcon.textContent = v === 0 ? '🔇' : v < 0.4 ? '🔈' : '🔊';
    });

    const volLabel = document.createElement('span');
    volLabel.style.cssText = `color:rgba(200,168,106,0.6); font-size:9px; min-width:22px; text-align:right;`;
    this.volumeSlider.addEventListener('input', () => {
      volLabel.textContent = this.volumeSlider.value + '%';
    });
    volLabel.textContent = '55%';

    volPanel.appendChild(volIcon);
    volPanel.appendChild(this.volumeSlider);
    volPanel.appendChild(volLabel);

    // ── Song ticker ───────────────────────────────────────────────────────────
    this.songEl = document.createElement('div');
    this.songEl.style.cssText = `
      color: rgba(255,255,255,0.55); font-size: 10px;
      background: rgba(0,0,0,0.5); border-radius: 20px;
      padding: 3px 12px; max-width: 280px;
      text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
      transition: opacity 0.4s; pointer-events: none;
    `;

    // ── DJ callout ────────────────────────────────────────────────────────────
    this.djEl = document.createElement('div');
    this.djEl.style.cssText = `
      color: rgba(200,168,106,0.65); font-size: 10px; font-style: italic;
      text-align: center; max-width: 300px;
      opacity: 0; transition: opacity 0.6s;
      pointer-events: none;
    `;

    this.container.appendChild(bar);
    this.container.appendChild(volPanel);
    this.container.appendChild(this.songEl);
    this.container.appendChild(this.djEl);
    // Note: caller must mount via GameMenu.mountRadio() — do NOT self-append here

    this._renderStation();
  }

  /** Return the radio container element for embedding in GameMenu */
  getEl(): HTMLDivElement { return this.container; }

  private _renderStation(): void {
    const st = STATIONS[this.stationIdx];
    this.nameEl.textContent = st.name;
    this.nameEl.style.color = st.color;
    this.freqEl.textContent = `${st.freq} FM`;
    this.songEl.textContent = this.on ? `♫  ${st.songs[this.songIdx % st.songs.length]}` : '— OFF —';
    this.iconEl.style.opacity = this.on ? '1' : '0.55';
  }

  private _togglePower(): void {
    if (!this.engineReady) {
      this.engineReady = this.engine.init();
    }
    this.on = !this.on;
    if (this.on) {
      this.engine.play(STATIONS[this.stationIdx]);
      this._showDJ();
    } else {
      this.engine.stop();
    }
    this._renderStation();
  }

  private _changeStation(dir: 1 | -1): void {
    this.stationIdx = (this.stationIdx + dir + STATIONS.length) % STATIONS.length;
    this.songIdx = 0;
    this.songTimer = 0;
    if (this.on) {
      if (!this.engineReady) this.engineReady = this.engine.init();
      this.engine.play(STATIONS[this.stationIdx]);
      this._showDJ();
    }
    this._renderStation();
  }

  private _showDJ(): void {
    const st   = STATIONS[this.stationIdx];
    const line = st.dj[this.djIdx % st.dj.length];
    this.djEl.textContent = `"${line}"`;
    this.djEl.style.opacity = '1';
    setTimeout(() => { this.djEl.style.opacity = '0'; }, 4500);
    this.djIdx++;

    // Speak DJ callout — match voice to station character
    const djVoice: Record<string, string> = {
      'connie-gold':   'Connie',
      'fabio-pizza':   'Fabio',
    };
  }

  private _tick(): void {
    const now = performance.now();
    const dt  = (now - this.lastUpdateTs) / 1000;
    this.lastUpdateTs = now;

    if (this.on) {
      const st = STATIONS[this.stationIdx];
      // Rotate song every 45–70s
      const songDuration = 45 + (this.songIdx % 3) * 10;
      this.songTimer += dt;
      if (this.songTimer >= songDuration) {
        this.songTimer = 0;
        this.songIdx++;
        this._renderStation();
      }
      // DJ callout every 30s
      this.djTimer += dt;
      if (this.djTimer >= 30) {
        this.djTimer = 0;
        this._showDJ();
      }
    }

    this.rafId = requestAnimationFrame(() => this._tick());
  }

  /** Call from main game loop — hide radio bar during mini-games */
  setVisible(v: boolean): void {
    this.container.style.opacity = v ? '1' : '0';
    this.container.style.pointerEvents = v ? 'auto' : 'none';
  }

  destroy(): void {
    cancelAnimationFrame(this.rafId);
    this.engine.stop();
    this.container.remove();
  }
}
