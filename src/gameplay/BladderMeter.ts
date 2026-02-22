export class BladderMeter {
  level = 0;               // 0.0–1.0
  isUrgent = false;
  lastUrgentToast = 0;     // timestamp ms

  /** True for 30s after drinking coffee — bladder fills 1.5x faster */
  caffeinated = false;
  private caffeineTimer = 0;

  update(dt: number, vanSpeed: number): void {
    // Tick caffeine countdown
    if (this.caffeinated) {
      this.caffeineTimer -= dt;
      if (this.caffeineTimer <= 0) this.caffeinated = false;
    }

    const fillRate = this.caffeinated ? 0.018 : 0.012;

    if (Math.abs(vanSpeed) > 2) {
      this.level = Math.min(1, this.level + dt * fillRate);
    } else {
      this.level = Math.max(0, this.level - dt * 0.005);
    }
    this.isUrgent = this.level > 0.8;
  }

  /** Call when player visits the coffee shop */
  drinkCoffee(): void {
    this.level = Math.min(1, this.level + 0.4);   // spike bladder +40%
    this.caffeinated = true;
    this.caffeineTimer = 30;                       // 30s caffeinated state
    this.isUrgent = this.level > 0.8;
  }

  tryRelief(vanX: number, vanZ: number): boolean {
    const dx = vanX - 100;
    const dz = vanZ - 60;
    if (Math.sqrt(dx * dx + dz * dz) > 14) return false;
    if (this.level === 0) return false;
    this.level = 0;
    this.isUrgent = false;
    this.caffeinated = false;
    this.caffeineTimer = 0;
    return true;
  }

  get spillMultiplier(): number {
    return this.isUrgent ? 1.8 : 1.0;
  }
}
