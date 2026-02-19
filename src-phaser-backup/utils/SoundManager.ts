import Phaser from 'phaser';

/**
 * SoundManager - Handles all game audio
 * Currently generates placeholder sounds using Web Audio API
 * Can be replaced with actual audio files later
 */
export class SoundManager {
  private scene: Phaser.Scene;
  private audioContext: AudioContext | null = null;
  private muted = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    
    // Initialize Web Audio API
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    return this.muted;
  }

  // Play a beep sound effect
  public playBeep(frequency: number = 440, duration: number = 0.1, type: OscillatorType = 'square'): void {
    if (this.muted || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // Engine sound
  public playEngine(speed: number): void {
    const frequency = 80 + (speed / 300) * 100;
    this.playBeep(frequency, 0.05, 'sawtooth');
  }

  // Collision/hit sound
  public playHit(): void {
    this.playBeep(150, 0.2, 'square');
    setTimeout(() => this.playBeep(100, 0.15, 'square'), 50);
  }

  // Splat sound
  public playSplat(): void {
    this.playBeep(200, 0.1, 'sine');
    this.playBeep(100, 0.15, 'sine');
  }

  // Success/win sound
  public playSuccess(): void {
    const notes = [523, 659, 784, 1047]; // C E G C
    notes.forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.2, 'sine'), i * 100);
    });
  }

  // Failure sound
  public playFail(): void {
    const notes = [400, 350, 300, 250];
    notes.forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.2, 'sawtooth'), i * 100);
    });
  }

  // Pickup/collect sound
  public playPickup(): void {
    this.playBeep(600, 0.1, 'sine');
    setTimeout(() => this.playBeep(800, 0.1, 'sine'), 50);
  }

  // Button click
  public playClick(): void {
    this.playBeep(500, 0.05, 'square');
  }

  // Timer warning
  public playWarning(): void {
    this.playBeep(800, 0.1, 'square');
    setTimeout(() => this.playBeep(600, 0.1, 'square'), 150);
  }

  // Boost sound
  public playBoost(): void {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => this.playBeep(300 + i * 50, 0.05, 'sawtooth'), i * 30);
    }
  }

  // Brake/skid sound
  public playBrake(): void {
    this.playBeep(100, 0.3, 'sawtooth');
  }

  // Relief/complete sound
  public playRelief(): void {
    this.playBeep(400, 0.2, 'sine');
    setTimeout(() => this.playBeep(500, 0.2, 'sine'), 100);
    setTimeout(() => this.playBeep(600, 0.3, 'sine'), 200);
  }

  // Coffee catch sound
  public playCoffee(): void {
    this.playBeep(700, 0.1, 'sine');
    this.playBeep(900, 0.1, 'sine');
  }

  // Pie splat
  public playPieSplat(): void {
    this.playBeep(150, 0.2, 'sine');
    setTimeout(() => this.playBeep(100, 0.3, 'sine'), 50);
  }

  // Level complete fanfare
  public playLevelComplete(): void {
    const melody = [523, 659, 784, 880, 1047, 1175, 1319, 1568];
    melody.forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.15, 'sine'), i * 80);
    });
  }

  // Game over jingle
  public playGameOver(): void {
    const melody = [392, 349, 330, 294, 262];
    melody.forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.25, 'triangle'), i * 150);
    });
  }

  // Trowel scrape sound
  public playTrowelScrape(): void {
    this.playBeep(50 + Math.random() * 50, 0.05, 'sawtooth');
  }

  // Stir/mix sound
  public playStir(): void {
    this.playBeep(100 + Math.random() * 50, 0.05, 'triangle');
  }

  // Haptic feedback (if supported)
  public vibrate(pattern: number | number[] = 50): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }
}
