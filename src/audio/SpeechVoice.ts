/**
 * SpeechVoice — Web Speech API wrapper for character voices.
 * Quick version: browser TTS with per-character pitch/rate/lang.
 * Replace with real audio files once API key is added.
 */

export interface VoiceConfig {
  lang:  string;
  pitch: number;   // 0.0–2.0, default 1.0
  rate:  number;   // 0.1–10, default 1.0
  volume: number;  // 0.0–1.0
}

// ── Per-character voice settings ──────────────────────────────────────────────
export const CHAR_VOICES: Record<string, VoiceConfig> = {
  Connie:   { lang: 'de-DE',  pitch: 1.25, rate: 0.92, volume: 1.0 },  // German accent
  Fabio:    { lang: 'it-IT',  pitch: 0.90, rate: 0.85, volume: 1.0 },  // Italian
  Jose:     { lang: 'es-ES',  pitch: 0.95, rate: 0.90, volume: 1.0 },  // Spanish
  Matt:     { lang: 'en-AU',  pitch: 0.88, rate: 1.00, volume: 1.0 },  // Aussie
  Jarrad:   { lang: 'en-AU',  pitch: 0.85, rate: 0.95, volume: 1.0 },  // Aussie
  Phil:     { lang: 'en-GB',  pitch: 0.92, rate: 0.88, volume: 0.9 },  // British calm
  Tsuyoshi: { lang: 'ja-JP',  pitch: 1.05, rate: 0.95, volume: 1.0 },  // Japanese
  Joe:      { lang: 'en-AU',  pitch: 0.85, rate: 0.90, volume: 1.0 },  // Aussie
  Mikayla:  { lang: 'en-AU',  pitch: 1.35, rate: 1.05, volume: 1.0 },  // Young Aussie
  DJ:       { lang: 'en-US',  pitch: 0.80, rate: 0.92, volume: 1.0 },  // Deep US radio
  Narrator: { lang: 'en-US',  pitch: 0.85, rate: 0.88, volume: 0.9 },  // Game narrator
};

const DEFAULT_VOICE: VoiceConfig = { lang: 'en-AU', pitch: 1.0, rate: 1.0, volume: 1.0 };

class SpeechVoiceEngine {
  private supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  private voiceCache: Map<string, SpeechSynthesisVoice | null> = new Map();

  /** Speak text with optional character name for voice selection */
  speak(text: string, character?: string): void {
    if (!this.supported) return;
    const cfg = (character && CHAR_VOICES[character]) ? CHAR_VOICES[character] : DEFAULT_VOICE;
    this._say(text, cfg);
  }

  /** Cancel any current speech */
  cancel(): void {
    if (!this.supported) return;
    window.speechSynthesis.cancel();
  }

  private _say(text: string, cfg: VoiceConfig): void {
    const synth = window.speechSynthesis;
    synth.cancel(); // stop anything playing

    const utt = new SpeechSynthesisUtterance(text);
    utt.lang   = cfg.lang;
    utt.pitch  = cfg.pitch;
    utt.rate   = cfg.rate;
    utt.volume = cfg.volume;

    // Try to pick a matching voice
    const voice = this._pickVoice(cfg.lang);
    if (voice) utt.voice = voice;

    // Fix Chrome bug: long utterances get cut off
    const resumeHack = setInterval(() => {
      if (!synth.speaking) { clearInterval(resumeHack); return; }
      synth.pause();
      synth.resume();
    }, 10000);
    utt.onend = () => clearInterval(resumeHack);
    utt.onerror = () => clearInterval(resumeHack);

    synth.speak(utt);
  }

  private _pickVoice(lang: string): SpeechSynthesisVoice | null {
    if (this.voiceCache.has(lang)) return this.voiceCache.get(lang)!;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null; // not loaded yet

    // Exact match first
    let v = voices.find(v => v.lang === lang) ?? null;
    // Language prefix match (e.g. 'de' for 'de-DE')
    if (!v) v = voices.find(v => v.lang.startsWith(lang.split('-')[0])) ?? null;
    // Fallback to any English
    if (!v) v = voices.find(v => v.lang.startsWith('en')) ?? null;

    this.voiceCache.set(lang, v);
    return v;
  }

  /** Warm up voices on first user gesture (browsers load voices async) */
  warmUp(): void {
    if (!this.supported) return;
    window.speechSynthesis.getVoices();
    // Chrome loads voices async — listen for the event
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.voiceCache.clear(); // rebuild cache with real voices
      };
    }
  }
}

export const SpeechVoice = new SpeechVoiceEngine();
