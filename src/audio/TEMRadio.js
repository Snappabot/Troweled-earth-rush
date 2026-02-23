/**
 * TEMRadio — Troweled Earth Radio
 * GTA-style in-game radio with 5 stations, Web Audio API generative music,
 * fake song titles, DJ callouts, and a sleek bottom-bar UI.
 */
const STATIONS = [
    {
        id: 'tem-fm',
        name: 'TEM FM',
        freq: '88.3',
        tagline: "Melbourne's Most Refined",
        songs: [
            'Fresh Plaster Dreams',
            'Tadelakt Sunrise',
            'Ochre & Ochre',
            'Marbellino Midnight',
            'Render Slowly (feat. Phil)',
        ],
        dj: [
            "TEM FM — where the walls breathe and so do you.",
            "You're listening to TEM FM. Don't spill.",
            "Smooth surfaces. Smoother sounds. TEM FM 88.3.",
            "That was a certified classic. Like a three-coat stucco system.",
        ],
        bpm: 68, rootHz: 220, vibe: 'ambient', color: '#C8A86A',
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
    },
];
// ── Audio engine ──────────────────────────────────────────────────────────────
class RadioAudioEngine {
    ctx = null;
    masterGain;
    scheduleAhead = 0.1; // seconds
    scheduleInterval = 0.05;
    nextBeatTime = 0;
    beatCount = 0;
    currentStation = null;
    nodes = [];
    schedulerTimer = 0;
    compressor;
    init() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.compressor = this.ctx.createDynamicsCompressor();
            this.compressor.threshold.value = -18;
            this.compressor.ratio.value = 4;
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0.18;
            this.masterGain.connect(this.compressor);
            this.compressor.connect(this.ctx.destination);
            return true;
        }
        catch {
            return false;
        }
    }
    setVolume(v) {
        if (this.masterGain)
            this.masterGain.gain.value = v;
    }
    play(station) {
        if (!this.ctx)
            return;
        this.stop();
        this.currentStation = station;
        this.beatCount = 0;
        if (this.ctx.state === 'suspended')
            this.ctx.resume();
        this.nextBeatTime = this.ctx.currentTime + 0.05;
        this.schedulerTimer = window.setInterval(() => this._schedule(), this.scheduleInterval * 1000);
    }
    stop() {
        clearInterval(this.schedulerTimer);
        this.nodes.forEach(n => { try {
            n.stop?.();
            n.disconnect();
        }
        catch { } });
        this.nodes = [];
        this.currentStation = null;
    }
    _schedule() {
        if (!this.ctx || !this.currentStation)
            return;
        const lookAhead = this.ctx.currentTime + this.scheduleAhead;
        while (this.nextBeatTime < lookAhead) {
            this._scheduleBeat(this.nextBeatTime, this.beatCount, this.currentStation);
            const bps = this.currentStation.bpm / 60;
            this.nextBeatTime += 1 / bps;
            this.beatCount++;
        }
    }
    _scheduleBeat(t, beat, st) {
        const bar = Math.floor(beat / 4);
        const b = beat % 4;
        const r = st.rootHz;
        switch (st.vibe) {
            case 'ambient':
                this._ambientBeat(t, beat, r);
                break;
            case 'lofi':
                this._lofiBeat(t, b, r);
                break;
            case 'rock':
                this._rockBeat(t, b, bar, r);
                break;
            case 'italian':
                this._italianBeat(t, b, bar, r);
                break;
            case 'electronic':
                this._electronicBeat(t, b, r);
                break;
        }
    }
    // ── Ambient (TEM FM) — slow pads + occasional pluck ──────────────────────
    _ambientBeat(t, beat, r) {
        if (!this.ctx)
            return;
        // Slow pad chord every 4 beats
        if (beat % 4 === 0) {
            const chord = [r, r * 1.25, r * 1.5, r * 2]; // major chord
            chord.forEach((f, i) => {
                const osc = this.ctx.createOscillator();
                const g = this.ctx.createGain();
                const flt = this.ctx.createBiquadFilter();
                osc.type = 'sine';
                osc.frequency.value = f * 0.5;
                flt.type = 'lowpass';
                flt.frequency.value = 800;
                g.gain.setValueAtTime(0, t);
                g.gain.linearRampToValueAtTime(0.06 - i * 0.01, t + 0.4);
                g.gain.linearRampToValueAtTime(0, t + 3.5);
                osc.connect(flt);
                flt.connect(g);
                g.connect(this.masterGain);
                osc.start(t);
                osc.stop(t + 4);
                this.nodes.push(osc, g);
            });
        }
        // Occasional high pluck
        if (beat % 8 === 5) {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = r * 4;
            g.gain.setValueAtTime(0.04, t);
            g.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
            osc.connect(g);
            g.connect(this.masterGain);
            osc.start(t);
            osc.stop(t + 0.9);
            this.nodes.push(osc, g);
        }
    }
    // ── Lo-fi (Brunswick Beats) — boom-bap drums + bass ──────────────────────
    _lofiBeat(t, b, r) {
        if (!this.ctx)
            return;
        // Kick on 0,2
        if (b === 0 || b === 2)
            this._kick(t, r * 0.5);
        // Snare on 1,3
        if (b === 1 || b === 3)
            this._snare(t, 0.04);
        // Hi-hat every beat
        this._hihat(t, 0.025);
        // Bass line
        const bassNotes = [r * 0.5, r * 0.5, r * 0.5 * 0.75, r * 0.5 * 0.9];
        this._bass(t, bassNotes[b], 0.25);
    }
    // ── Rock (The Scaffold) — driving 4/4 + power bass ───────────────────────
    _rockBeat(t, b, bar, r) {
        if (!this.ctx)
            return;
        // Kick on 0, 2 (and extra on 2.5 every other bar)
        if (b === 0 || b === 2)
            this._kick(t, r * 0.4);
        // Snare 1,3
        if (b === 1 || b === 3)
            this._snare(t, 0.07);
        // Aggressive hi-hats every half beat (will fire each beat here)
        this._hihat(t, 0.05);
        // Distorted power bass
        const powerNotes = [r * 0.5, r * 0.5, r * 0.5 * 0.8, r * 0.5];
        this._distBass(t, powerNotes[b % 4]);
        // Rhythm guitar power chord every bar start
        if (b === 0 && bar % 2 === 0) {
            [r, r * 1.5, r * 2].forEach(f => {
                const osc = this.ctx.createOscillator();
                const g = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.value = f;
                g.gain.setValueAtTime(0.035, t);
                g.gain.linearRampToValueAtTime(0, t + 0.5);
                osc.connect(g);
                g.connect(this.masterGain);
                osc.start(t);
                osc.stop(t + 0.55);
                this.nodes.push(osc, g);
            });
        }
    }
    // ── Italian (Connie's Gold / Fabio's Pizza Radio) — waltz/upbeat ─────────
    _italianBeat(t, b, bar, r) {
        if (!this.ctx)
            return;
        // Oom-pah-pah style bass on beat 0
        if (b === 0)
            this._bass(t, r * 0.5, 0.3);
        if (b === 1 || b === 2 || b === 3)
            this._bass(t, r * 0.75, 0.12);
        // Kick on 0
        if (b === 0)
            this._kick(t, r * 0.5);
        // Accordion-style chord (triangle + slight vibrato)
        if (b === 0 || b === 2) {
            const melody = [r, r * 1.122, r * 1.260, r * 1.498, r * 1.682];
            const note = melody[bar % melody.length];
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = note;
            // Simple vibrato via LFO
            const lfo = this.ctx.createOscillator();
            const lfoG = this.ctx.createGain();
            lfo.frequency.value = 5.5;
            lfoG.gain.value = 3;
            lfo.connect(lfoG);
            lfoG.connect(osc.frequency);
            g.gain.setValueAtTime(0.04, t);
            g.gain.linearRampToValueAtTime(0, t + 0.8);
            osc.connect(g);
            g.connect(this.masterGain);
            lfo.start(t);
            osc.start(t);
            lfo.stop(t + 0.9);
            osc.stop(t + 0.9);
            this.nodes.push(osc, lfo, g, lfoG);
        }
    }
    // ── Electronic ────────────────────────────────────────────────────────────
    _electronicBeat(t, b, r) {
        if (!this.ctx)
            return;
        if (b === 0 || b === 2)
            this._kick(t, r * 0.5);
        if (b === 1 || b === 3)
            this._snare(t, 0.05);
        this._hihat(t, 0.03);
        if (b === 0)
            this._bass(t, r * 0.5, 0.25);
        if (b === 2)
            this._bass(t, r * 0.375, 0.2);
    }
    // ── Primitive drum sounds ─────────────────────────────────────────────────
    _kick(t, freq) {
        if (!this.ctx)
            return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(20, t + 0.12);
        g.gain.setValueAtTime(0.5, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.connect(g);
        g.connect(this.masterGain);
        osc.start(t);
        osc.stop(t + 0.3);
        this.nodes.push(osc, g);
    }
    _snare(t, vol) {
        if (!this.ctx)
            return;
        const bufLen = Math.floor(this.ctx.sampleRate * 0.18);
        const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++)
            data[i] = (Math.random() * 2 - 1);
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const flt = this.ctx.createBiquadFilter();
        flt.type = 'bandpass';
        flt.frequency.value = 1800;
        flt.Q.value = 0.8;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(vol, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        src.connect(flt);
        flt.connect(g);
        g.connect(this.masterGain);
        src.start(t);
        src.stop(t + 0.2);
        this.nodes.push(src, g);
    }
    _hihat(t, vol) {
        if (!this.ctx)
            return;
        const bufLen = Math.floor(this.ctx.sampleRate * 0.06);
        const buf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufLen; i++)
            data[i] = (Math.random() * 2 - 1);
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const flt = this.ctx.createBiquadFilter();
        flt.type = 'highpass';
        flt.frequency.value = 7000;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(vol, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
        src.connect(flt);
        flt.connect(g);
        g.connect(this.masterGain);
        src.start(t);
        src.stop(t + 0.08);
        this.nodes.push(src, g);
    }
    _bass(t, freq, vol) {
        if (!this.ctx)
            return;
        const osc = this.ctx.createOscillator();
        const flt = this.ctx.createBiquadFilter();
        const g = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        flt.type = 'lowpass';
        flt.frequency.value = 350;
        g.gain.setValueAtTime(vol, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        osc.connect(flt);
        flt.connect(g);
        g.connect(this.masterGain);
        osc.start(t);
        osc.stop(t + 0.4);
        this.nodes.push(osc, g);
    }
    _distBass(t, freq) {
        if (!this.ctx)
            return;
        const osc = this.ctx.createOscillator();
        const wave = this.ctx.createWaveShaper();
        const g = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        // Simple hard-clip distortion curve
        const curve = new Float32Array(256);
        for (let i = 0; i < 256; i++) {
            const x = (i * 2) / 256 - 1;
            curve[i] = Math.max(-0.6, Math.min(0.6, x * 3));
        }
        wave.curve = curve;
        g.gain.setValueAtTime(0.08, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc.connect(wave);
        wave.connect(g);
        g.connect(this.masterGain);
        osc.start(t);
        osc.stop(t + 0.35);
        this.nodes.push(osc, g);
    }
}
// ── Radio UI ──────────────────────────────────────────────────────────────────
export class TEMRadio {
    container;
    stationIdx = 0;
    on = false;
    songIdx = 0;
    djIdx = 0;
    songTimer = 0;
    djTimer = 0;
    nameEl;
    songEl;
    djEl;
    iconEl;
    freqEl;
    engine = new RadioAudioEngine();
    engineReady = false;
    volumeSlider;
    rafId = 0;
    lastUpdateTs = 0;
    constructor() {
        this._buildUI();
        // Start timers for song/DJ rotation
        this.lastUpdateTs = performance.now();
        this._tick();
    }
    _buildUI() {
        // ── Outer bar ────────────────────────────────────────────────────────────
        this.container = document.createElement('div');
        this.container.style.cssText = `
      position: fixed; bottom: 110px; left: 50%; transform: translateX(-50%);
      z-index: 2000; font-family: system-ui, sans-serif;
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      pointer-events: none; user-select: none;
      transition: opacity 0.4s;
    `;
        // ── Main bar ─────────────────────────────────────────────────────────────
        const bar = document.createElement('div');
        bar.style.cssText = `
      display: flex; align-items: center; gap: 10px;
      background: rgba(8,6,4,0.84); backdrop-filter: blur(10px);
      border: 1px solid rgba(200,168,106,0.3); border-radius: 40px;
      padding: 8px 16px 8px 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.6);
      pointer-events: auto; touch-action: manipulation;
    `;
        // On/off toggle
        this.iconEl = document.createElement('span');
        this.iconEl.textContent = '📻';
        this.iconEl.style.cssText = `font-size:18px; cursor:pointer; opacity:0.5;`;
        this.iconEl.addEventListener('click', () => this._togglePower());
        // Prev station
        const prev = document.createElement('span');
        prev.textContent = '◀';
        prev.style.cssText = `color:rgba(200,168,106,0.7); font-size:13px; cursor:pointer; padding:0 2px;`;
        prev.addEventListener('click', () => this._changeStation(-1));
        // Station name
        const nameWrap = document.createElement('div');
        nameWrap.style.cssText = `display:flex; flex-direction:column; align-items:center; min-width:130px;`;
        this.nameEl = document.createElement('span');
        this.nameEl.style.cssText = `
      color: #C8A86A; font-size: 11px; font-weight: 900;
      letter-spacing: 1.5px; text-transform: uppercase;
    `;
        this.freqEl = document.createElement('span');
        this.freqEl.style.cssText = `color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;`;
        nameWrap.appendChild(this.nameEl);
        nameWrap.appendChild(this.freqEl);
        // Next station
        const next = document.createElement('span');
        next.textContent = '▶';
        next.style.cssText = `color:rgba(200,168,106,0.7); font-size:13px; cursor:pointer; padding:0 2px;`;
        next.addEventListener('click', () => this._changeStation(1));
        // Volume slider
        this.volumeSlider = document.createElement('input');
        this.volumeSlider.type = 'range';
        this.volumeSlider.min = '0';
        this.volumeSlider.max = '100';
        this.volumeSlider.value = '55';
        this.volumeSlider.style.cssText = `
      width: 52px; height: 3px; accent-color: #C8A86A; cursor: pointer;
      opacity: 0.6;
    `;
        this.volumeSlider.addEventListener('input', () => {
            const v = Number(this.volumeSlider.value) / 100;
            this.engine.setVolume(v * 0.18);
        });
        bar.appendChild(this.iconEl);
        bar.appendChild(prev);
        bar.appendChild(nameWrap);
        bar.appendChild(next);
        bar.appendChild(this.volumeSlider);
        // ── Song ticker ───────────────────────────────────────────────────────────
        this.songEl = document.createElement('div');
        this.songEl.style.cssText = `
      color: rgba(255,255,255,0.55); font-size: 11px;
      background: rgba(0,0,0,0.5); border-radius: 20px;
      padding: 3px 12px; max-width: 280px;
      text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
      transition: opacity 0.4s;
    `;
        // ── DJ callout ────────────────────────────────────────────────────────────
        this.djEl = document.createElement('div');
        this.djEl.style.cssText = `
      color: rgba(200,168,106,0.6); font-size: 10px; font-style: italic;
      text-align: center; max-width: 300px;
      opacity: 0; transition: opacity 0.6s;
      pointer-events: none;
    `;
        this.container.appendChild(bar);
        this.container.appendChild(this.songEl);
        this.container.appendChild(this.djEl);
        document.body.appendChild(this.container);
        this._renderStation();
    }
    _renderStation() {
        const st = STATIONS[this.stationIdx];
        this.nameEl.textContent = st.name;
        this.nameEl.style.color = st.color;
        this.freqEl.textContent = `${st.freq} FM`;
        this.songEl.textContent = this.on ? `♫  ${st.songs[this.songIdx % st.songs.length]}` : '— OFF —';
        this.iconEl.style.opacity = this.on ? '1' : '0.4';
    }
    _togglePower() {
        if (!this.engineReady) {
            this.engineReady = this.engine.init();
        }
        this.on = !this.on;
        if (this.on) {
            this.engine.play(STATIONS[this.stationIdx]);
            this._showDJ();
        }
        else {
            this.engine.stop();
        }
        this._renderStation();
    }
    _changeStation(dir) {
        this.stationIdx = (this.stationIdx + dir + STATIONS.length) % STATIONS.length;
        this.songIdx = 0;
        this.songTimer = 0;
        if (this.on) {
            if (!this.engineReady)
                this.engineReady = this.engine.init();
            this.engine.play(STATIONS[this.stationIdx]);
            this._showDJ();
        }
        this._renderStation();
    }
    _showDJ() {
        const st = STATIONS[this.stationIdx];
        const line = st.dj[this.djIdx % st.dj.length];
        this.djEl.textContent = `"${line}"`;
        this.djEl.style.opacity = '1';
        setTimeout(() => { this.djEl.style.opacity = '0'; }, 4500);
        this.djIdx++;
    }
    _tick() {
        const now = performance.now();
        const dt = (now - this.lastUpdateTs) / 1000;
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
    setVisible(v) {
        this.container.style.opacity = v ? '1' : '0';
        this.container.style.pointerEvents = v ? 'auto' : 'none';
    }
    destroy() {
        cancelAnimationFrame(this.rafId);
        this.engine.stop();
        this.container.remove();
    }
}
