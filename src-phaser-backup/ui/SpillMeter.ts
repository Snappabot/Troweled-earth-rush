import Phaser from 'phaser';

export class SpillMeter {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private fillBar: Phaser.GameObjects.Graphics;
  private maxMaterial: number = 100;
  private currentMaterial: number = 100;
  private warningThreshold: number = 30;
  private criticalThreshold: number = 15;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.container = scene.add.container(x, y);
    this.container.setScrollFactor(0);
    this.container.setDepth(200);

    // Background panel
    const bg = scene.add.graphics();
    bg.fillStyle(0x000000, 0.6);
    bg.fillRoundedRect(-50, -30, 100, 60, 8);
    this.container.add(bg);

    // Bucket icon
    const bucket = scene.add.image(-30, 0, 'bucket').setScale(0.8);
    this.container.add(bucket);

    // Fill bar background
    const barBg = scene.add.graphics();
    barBg.fillStyle(0x333333, 1);
    barBg.fillRoundedRect(0, -15, 40, 30, 4);
    this.container.add(barBg);

    // Fill bar (will be updated)
    this.fillBar = scene.add.graphics();
    this.container.add(this.fillBar);

    // Label
    const label = scene.add.text(20, -35, '🪣 Material', {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: '#ffffff'
    }).setOrigin(0.5);
    this.container.add(label);

    this.updateDisplay();
  }

  addSpill(amount: number): void {
    this.currentMaterial = Math.max(0, this.currentMaterial - amount);
    this.updateDisplay();

    // Flash warning if low
    if (this.currentMaterial <= this.warningThreshold && this.currentMaterial > 0) {
      this.flashWarning();
    }
  }

  private updateDisplay(): void {
    this.fillBar.clear();

    const fillPercent = this.currentMaterial / this.maxMaterial;
    const fillHeight = 26 * fillPercent;

    // Choose color based on level
    let color = 0xc4a77d; // Clay/terracotta
    if (this.currentMaterial <= this.criticalThreshold) {
      color = 0xff0000; // Critical red
    } else if (this.currentMaterial <= this.warningThreshold) {
      color = 0xff6600; // Warning orange
    }

    // Draw from bottom up
    this.fillBar.fillStyle(color, 1);
    this.fillBar.fillRoundedRect(
      2,
      -13 + (26 - fillHeight),
      36,
      fillHeight,
      3
    );
  }

  private flashWarning(): void {
    this.scene.tweens.add({
      targets: this.container,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 100,
      yoyo: true,
      repeat: 1
    });
  }

  getRemaining(): number {
    return this.currentMaterial;
  }

  isEmpty(): boolean {
    return this.currentMaterial <= 0;
  }

  reset(): void {
    this.currentMaterial = this.maxMaterial;
    this.updateDisplay();
  }

  destroy(): void {
    this.container.destroy();
  }
}
