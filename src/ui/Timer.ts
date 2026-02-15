import Phaser from 'phaser';

export class GameTimer {
  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;
  private timeText: Phaser.GameObjects.Text;
  private totalTime: number = 60;
  private remainingTime: number = 60;
  private isRunning: boolean = false;
  private warningThreshold: number = 15;
  private criticalThreshold: number = 5;
  
  public onTimeUp: (() => void) | null = null;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.container = scene.add.container(x, y);
    this.container.setScrollFactor(0);
    this.container.setDepth(200);

    // Background panel
    const bg = scene.add.graphics();
    bg.fillStyle(0x000000, 0.7);
    bg.fillRoundedRect(-80, -25, 160, 50, 10);
    bg.lineStyle(3, 0xd35400, 1);
    bg.strokeRoundedRect(-80, -25, 160, 50, 10);
    this.container.add(bg);

    // Timer icon
    const icon = scene.add.text(-60, 0, '⏱️', {
      fontSize: '28px'
    }).setOrigin(0.5);
    this.container.add(icon);

    // Time text
    this.timeText = scene.add.text(15, 0, '1:00', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 2
    }).setOrigin(0.5);
    this.container.add(this.timeText);

    // Update timer every frame
    scene.events.on('update', this.update, this);
  }

  start(seconds: number): void {
    this.totalTime = seconds;
    this.remainingTime = seconds;
    this.isRunning = true;
    this.updateDisplay();
  }

  stop(): void {
    this.isRunning = false;
  }

  pause(): void {
    this.isRunning = false;
  }

  resume(): void {
    this.isRunning = true;
  }

  private update(_time: number, delta: number): void {
    if (!this.isRunning) return;

    this.remainingTime -= delta / 1000;

    if (this.remainingTime <= 0) {
      this.remainingTime = 0;
      this.isRunning = false;
      this.onTimeUp?.();
    }

    this.updateDisplay();
  }

  private updateDisplay(): void {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = Math.floor(this.remainingTime % 60);
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    this.timeText.setText(timeStr);

    // Color based on remaining time
    if (this.remainingTime <= this.criticalThreshold) {
      this.timeText.setColor('#ff0000');
      this.pulseEffect();
    } else if (this.remainingTime <= this.warningThreshold) {
      this.timeText.setColor('#ff6600');
    } else {
      this.timeText.setColor('#ffffff');
    }
  }

  private pulseEffect(): void {
    if (this.container.getData('pulsing')) return;
    
    this.container.setData('pulsing', true);
    
    this.scene.tweens.add({
      targets: this.container,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 200,
      yoyo: true,
      onComplete: () => {
        this.container.setData('pulsing', false);
      }
    });
  }

  getRemaining(): number {
    return this.remainingTime;
  }

  getTotal(): number {
    return this.totalTime;
  }

  addTime(seconds: number): void {
    this.remainingTime = Math.min(this.remainingTime + seconds, this.totalTime * 1.5);
    
    // Show bonus text
    const bonusText = this.scene.add.text(
      this.container.x,
      this.container.y + 40,
      `+${seconds}s`,
      {
        fontFamily: 'Arial Black',
        fontSize: '24px',
        color: '#00ff00'
      }
    ).setOrigin(0.5);

    this.scene.tweens.add({
      targets: bonusText,
      y: bonusText.y - 30,
      alpha: 0,
      duration: 800,
      onComplete: () => bonusText.destroy()
    });
  }

  destroy(): void {
    this.scene.events.off('update', this.update, this);
    this.container.destroy();
  }
}
