import Phaser from 'phaser';

/**
 * WeatherEffects - Rain and wind effects for Level 10
 */
export class WeatherEffects {
  private scene: Phaser.Scene;
  private rainDrops: Phaser.GameObjects.Group;
  private windDirection: number = 0;
  private rainIntensity: number = 0;
  private isActive: boolean = false;
  private overlay: Phaser.GameObjects.Graphics | null = null;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.rainDrops = scene.add.group();
  }

  public startStorm(intensity: number = 1): void {
    this.isActive = true;
    this.rainIntensity = intensity;
    
    // Dark overlay
    this.overlay = this.scene.add.graphics();
    this.overlay.fillStyle(0x000000, 0.3 * intensity);
    this.overlay.fillRect(0, 0, this.scene.cameras.main.width, this.scene.cameras.main.height);
    this.overlay.setScrollFactor(0);
    this.overlay.setDepth(50);

    // Start spawning rain
    this.scene.time.addEvent({
      delay: 30,
      callback: () => this.spawnRainDrop(),
      loop: true
    });

    // Wind changes periodically
    this.scene.time.addEvent({
      delay: 2000,
      callback: () => this.changeWind(),
      loop: true
    });

    // Occasional lightning
    if (intensity > 0.7) {
      this.scene.time.addEvent({
        delay: 5000,
        callback: () => this.flashLightning(),
        loop: true
      });
    }
  }

  public stopStorm(): void {
    this.isActive = false;
    this.overlay?.destroy();
    this.rainDrops.clear(true, true);
  }

  private spawnRainDrop(): void {
    if (!this.isActive) return;

    const width = this.scene.cameras.main.width;
    const height = this.scene.cameras.main.height;
    
    // Spawn multiple drops based on intensity
    const dropCount = Math.ceil(this.rainIntensity * 5);
    
    for (let i = 0; i < dropCount; i++) {
      const x = Phaser.Math.Between(0, width);
      const drop = this.scene.add.rectangle(
        x,
        -10,
        2,
        15,
        0x88aaff,
        0.6
      );
      
      drop.setRotation(this.windDirection * 0.3);
      this.rainDrops.add(drop);

      // Animate drop falling
      this.scene.tweens.add({
        targets: drop,
        y: height + 20,
        x: x + (this.windDirection * 100),
        duration: 500 + Math.random() * 300,
        onComplete: () => {
          // Splash effect
          if (Math.random() < 0.3) {
            this.createSplash(drop.x, height - 10);
          }
          drop.destroy();
        }
      });
    }
  }

  private createSplash(x: number, y: number): void {
    const splash = this.scene.add.circle(x, y, 3, 0x88aaff, 0.5);
    this.scene.tweens.add({
      targets: splash,
      scale: 3,
      alpha: 0,
      duration: 200,
      onComplete: () => splash.destroy()
    });
  }

  private changeWind(): void {
    // Wind changes direction
    this.windDirection = Phaser.Math.FloatBetween(-1, 1);
  }

  private flashLightning(): void {
    if (!this.isActive || Math.random() > 0.3) return;

    const flash = this.scene.add.graphics();
    flash.fillStyle(0xffffff, 0.8);
    flash.fillRect(0, 0, this.scene.cameras.main.width, this.scene.cameras.main.height);
    flash.setScrollFactor(0);
    flash.setDepth(100);

    this.scene.tweens.add({
      targets: flash,
      alpha: 0,
      duration: 150,
      onComplete: () => {
        flash.destroy();
        // Thunder shake after a delay
        this.scene.time.delayedCall(300, () => {
          this.scene.cameras.main.shake(300, 0.02);
        });
      }
    });
  }

  public getWindDirection(): number {
    return this.windDirection;
  }

  public isStormActive(): boolean {
    return this.isActive;
  }

  // Get control difficulty modifier (higher = harder to control)
  public getControlModifier(): number {
    if (!this.isActive) return 1;
    return 1 + (this.rainIntensity * 0.3) + (Math.abs(this.windDirection) * 0.2);
  }

  // Get spill modifier (rain makes spills worse)
  public getSpillModifier(): number {
    if (!this.isActive) return 1;
    return 1 + (this.rainIntensity * 0.5);
  }
}
