import Phaser from 'phaser';

export class MixingScene extends Phaser.Scene {
  private mixProgress = 0;
  private targetMix = 100;
  private bucketsFilled = 0;
  private bucketsNeeded = 5;
  private stirSpeed = 0;
  private mixerAngle = 0;
  private isStirring = false;
  private lastPointerAngle = 0;

  private mixerGraphic!: Phaser.GameObjects.Graphics;
  private bucketDisplay!: Phaser.GameObjects.Text;
  private progressBar!: Phaser.GameObjects.Graphics;
  private instructionText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MixingScene' });
  }

  init(data: { level: number; bucketsNeeded?: number }): void {
    this.bucketsFilled = 0;
    this.bucketsNeeded = data.bucketsNeeded || 5;
    this.mixProgress = 0;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor('#2a2a2a');

    // Title
    this.add.text(width / 2, 60, '🪣 MIX THE PLASTER!', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#d4a574'
    }).setOrigin(0.5);

    // Instructions
    this.instructionText = this.add.text(width / 2, 120, 'Swirl your finger to stir!\nNot too fast, not too slow!', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#ffffff',
      align: 'center'
    }).setOrigin(0.5);

    // Mixer container (big circle)
    const mixerBg = this.add.graphics();
    mixerBg.fillStyle(0x444444);
    mixerBg.fillCircle(width / 2, height / 2, 150);
    mixerBg.lineStyle(8, 0x666666);
    mixerBg.strokeCircle(width / 2, height / 2, 150);

    // Plaster in mixer
    this.mixerGraphic = this.add.graphics();
    this.updateMixerVisual();

    // Stirring paddle
    const paddle = this.add.graphics();
    paddle.fillStyle(0x888888);
    paddle.fillRect(-10, -120, 20, 240);
    paddle.x = width / 2;
    paddle.y = height / 2;

    // Bucket progress
    this.bucketDisplay = this.add.text(width / 2, height / 2 + 200, 
      `Buckets: ${this.bucketsFilled}/${this.bucketsNeeded}`, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Progress bar
    const progressBg = this.add.graphics();
    progressBg.fillStyle(0x333333);
    progressBg.fillRoundedRect(width / 2 - 150, height / 2 + 250, 300, 30, 10);

    this.progressBar = this.add.graphics();

    // Touch input for stirring
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.isStirring = true;
      this.lastPointerAngle = Phaser.Math.Angle.Between(width / 2, height / 2, pointer.x, pointer.y);
    });

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (this.isStirring) {
        const currentAngle = Phaser.Math.Angle.Between(width / 2, height / 2, pointer.x, pointer.y);
        let angleDiff = currentAngle - this.lastPointerAngle;
        
        // Normalize angle difference
        if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

        this.stirSpeed = Math.abs(angleDiff) * 100;
        this.mixerAngle += angleDiff;
        paddle.rotation = this.mixerAngle;

        this.lastPointerAngle = currentAngle;
      }
    });

    this.input.on('pointerup', () => {
      this.isStirring = false;
    });
  }

  private updateMixerVisual(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.mixerGraphic.clear();
    
    // Base color
    this.mixerGraphic.fillStyle(0xc4956a, 0.8);
    this.mixerGraphic.fillCircle(width / 2, height / 2, 140);

    // Swirl effect based on progress
    const swirls = Math.floor(this.mixProgress / 20);
    for (let i = 0; i < swirls; i++) {
      this.mixerGraphic.fillStyle(0xd4a574, 0.5);
      const angle = (this.mixerAngle + i * 0.5) % (Math.PI * 2);
      const x = width / 2 + Math.cos(angle) * (60 + i * 10);
      const y = height / 2 + Math.sin(angle) * (60 + i * 10);
      this.mixerGraphic.fillCircle(x, y, 20 - i * 2);
    }
  }

  private updateProgressBar(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.progressBar.clear();
    this.progressBar.fillStyle(0xd4a574);
    this.progressBar.fillRoundedRect(
      width / 2 - 145, 
      height / 2 + 255, 
      290 * (this.mixProgress / this.targetMix), 
      20, 
      8
    );
  }

  update(time: number, delta: number): void {
    const dt = delta / 1000;

    // Decay stir speed
    this.stirSpeed *= 0.95;

    // Update mix progress based on stir speed
    // Ideal speed is around 30-50
    if (this.stirSpeed > 10 && this.stirSpeed < 80) {
      const efficiency = 1 - Math.abs(this.stirSpeed - 40) / 60;
      this.mixProgress += efficiency * 30 * dt;
    } else if (this.stirSpeed >= 80) {
      // Too fast - overflow splash!
      this.instructionText.setText('TOO FAST! Slow down!');
      this.instructionText.setColor('#ff4444');
    } else {
      this.instructionText.setText('Swirl your finger to stir!\nNot too fast, not too slow!');
      this.instructionText.setColor('#ffffff');
    }

    this.updateMixerVisual();
    this.updateProgressBar();

    // Check if bucket filled
    if (this.mixProgress >= this.targetMix) {
      this.bucketsFilled++;
      this.mixProgress = 0;
      this.bucketDisplay.setText(`Buckets: ${this.bucketsFilled}/${this.bucketsNeeded}`);

      // Bucket filled feedback
      const fillText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 
        '🪣 FILLED!', {
        fontFamily: 'Arial Black',
        fontSize: '48px',
        color: '#00ff00'
      }).setOrigin(0.5);

      this.tweens.add({
        targets: fillText,
        scale: 1.5,
        alpha: 0,
        duration: 500,
        onComplete: () => fillText.destroy()
      });

      // Check if all buckets done
      if (this.bucketsFilled >= this.bucketsNeeded) {
        this.completeMixing();
      }
    }
  }

  private completeMixing(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const completeText = this.add.text(width / 2, height / 2, 
      '✅ MIXING COMPLETE!\n\nLoad up the van!', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#00ff00',
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.time.delayedCall(2000, () => {
      this.scene.start('GameScene', { level: 1, afterMixing: true });
    });
  }
}
