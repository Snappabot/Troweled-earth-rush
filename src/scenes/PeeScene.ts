import Phaser from 'phaser';

export class PeeScene extends Phaser.Scene {
  private urgencyLevel = 100;
  private relief = 0;
  private targetRelief = 100;
  private timeLimit = 15;
  private timeRemaining = 15;
  private tapsRequired = 30;
  private taps = 0;

  private mattSprite!: Phaser.GameObjects.Image;
  private urgencyBar!: Phaser.GameObjects.Graphics;
  private reliefBar!: Phaser.GameObjects.Graphics;
  private timerText!: Phaser.GameObjects.Text;
  private instructionText!: Phaser.GameObjects.Text;
  private tapZone!: Phaser.GameObjects.Zone;

  private gameData: any = {};
  private isComplete = false;
  private phase: 'running' | 'finding' | 'relieving' | 'done' = 'running';
  private bushSprite!: Phaser.GameObjects.Graphics;

  constructor() {
    super({ key: 'PeeScene' });
  }

  init(data: any): void {
    this.gameData = data;
    this.urgencyLevel = 100;
    this.relief = 0;
    this.timeRemaining = this.timeLimit;
    this.taps = 0;
    this.isComplete = false;
    this.phase = 'running';
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor('#2a4a2a');

    // Title
    this.add.text(width / 2, 50, '🚽 EMERGENCY STOP! 🚽', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#ffff00'
    }).setOrigin(0.5);

    // Timer
    this.timerText = this.add.text(width / 2, 100, `⏱️ ${this.timeRemaining}s`, {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Instructions
    this.instructionText = this.add.text(width / 2, 150, 'Matt needs to go! Tap rapidly!', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#ffff00'
    }).setOrigin(0.5);

    // Bush/tree (the target)
    this.bushSprite = this.add.graphics();
    this.bushSprite.fillStyle(0x1a5a1a);
    this.bushSprite.fillCircle(width / 2, height / 2, 80);
    this.bushSprite.fillStyle(0x2a7a2a);
    this.bushSprite.fillCircle(width / 2 - 30, height / 2 - 20, 50);
    this.bushSprite.fillCircle(width / 2 + 30, height / 2 - 20, 50);
    this.bushSprite.fillCircle(width / 2, height / 2 - 50, 45);
    // Trunk
    this.bushSprite.fillStyle(0x5a3a1a);
    this.bushSprite.fillRect(width / 2 - 15, height / 2 + 50, 30, 60);

    // Matt running/dancing
    this.mattSprite = this.add.image(100, height / 2 + 100, 'matt').setScale(3);

    // Start with running animation
    this.startRunningPhase();

    // Urgency meter (top)
    const urgencyBg = this.add.graphics();
    urgencyBg.fillStyle(0x333333, 0.8);
    urgencyBg.fillRoundedRect(width / 2 - 150, 200, 300, 40, 10);

    this.add.text(width / 2, 180, '😰 URGENCY', {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#ff4444'
    }).setOrigin(0.5);

    this.urgencyBar = this.add.graphics();

    // Relief meter (bottom)
    const reliefBg = this.add.graphics();
    reliefBg.fillStyle(0x333333, 0.8);
    reliefBg.fillRoundedRect(width / 2 - 150, height - 200, 300, 40, 10);

    this.add.text(width / 2, height - 220, '😌 RELIEF', {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#00ff00'
    }).setOrigin(0.5);

    this.reliefBar = this.add.graphics();

    // Tap zone (full screen)
    this.tapZone = this.add.zone(0, 0, width, height).setOrigin(0).setInteractive();
    this.tapZone.on('pointerdown', () => this.handleTap());

    // Timer countdown
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    // Update bars
    this.updateBars();

    // Van parked nearby
    const van = this.add.image(width - 100, height - 150, 'van').setScale(1.5).setRotation(-0.5);

    // Jose & Jarrad waiting, looking annoyed
    const jose = this.add.image(width - 150, height - 220, 'jose').setScale(2);
    const jarrad = this.add.image(width - 80, height - 220, 'jarrad').setScale(2);

    // Speech bubble
    const speechBubble = this.add.text(width - 120, height - 280, '"Hurry up, Matt!"', {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#ffffff',
      backgroundColor: '#333333',
      padding: { x: 8, y: 4 }
    }).setOrigin(0.5);

    this.tweens.add({
      targets: speechBubble,
      alpha: 0.5,
      duration: 500,
      yoyo: true,
      repeat: -1
    });
  }

  private startRunningPhase(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.phase = 'running';
    this.instructionText.setText('Matt is running to the bush! TAP to run faster!');

    // Matt's desperate running animation
    this.tweens.add({
      targets: this.mattSprite,
      y: this.mattSprite.y - 10,
      duration: 100,
      yoyo: true,
      repeat: -1
    });

    // Matt runs to bush when enough taps
    // In update, we'll check taps and move him
  }

  private startRelievingPhase(): void {
    const width = this.cameras.main.width;

    this.phase = 'relieving';
    this.taps = 0;
    this.instructionText.setText('Keep tapping for sweet relief! 😌');
    this.instructionText.setColor('#00ff00');

    // Matt goes behind bush
    this.tweens.add({
      targets: this.mattSprite,
      x: width / 2 - 40,
      y: this.cameras.main.height / 2 + 50,
      scale: 2,
      duration: 300
    });

    // Stop running animation, start wiggle
    this.tweens.killTweensOf(this.mattSprite);
  }

  private handleTap(): void {
    if (this.isComplete) return;

    this.taps++;

    if (this.phase === 'running') {
      // Move Matt toward bush
      const targetX = this.cameras.main.width / 2 - 50;
      const progress = this.taps / 15; // 15 taps to reach bush
      this.mattSprite.x = Phaser.Math.Linear(100, targetX, Math.min(progress, 1));

      // Decrease urgency slightly while running
      this.urgencyLevel = Math.max(0, this.urgencyLevel - 0.5);

      // Desperate animation
      this.mattSprite.y += (Math.random() - 0.5) * 10;

      if (this.taps >= 15) {
        this.startRelievingPhase();
      }
    } else if (this.phase === 'relieving') {
      // Each tap gives relief
      this.relief = Math.min(100, this.relief + 3);
      this.urgencyLevel = Math.max(0, this.urgencyLevel - 3);

      // Relief particles
      const width = this.cameras.main.width;
      if (Math.random() < 0.3) {
        const drop = this.add.circle(
          width / 2 + Phaser.Math.Between(-20, 20),
          this.cameras.main.height / 2 + 80,
          3,
          0x44aaff
        );
        this.tweens.add({
          targets: drop,
          y: drop.y + 30,
          alpha: 0,
          duration: 300,
          onComplete: () => drop.destroy()
        });
      }

      // Happy wiggle
      this.mattSprite.rotation = (Math.random() - 0.5) * 0.1;

      if (this.relief >= 100) {
        this.completeMiniGame(true);
      }
    }

    this.updateBars();

    // Visual tap feedback
    const tapFeedback = this.add.circle(
      Phaser.Math.Between(200, this.cameras.main.width - 200),
      Phaser.Math.Between(300, this.cameras.main.height - 300),
      20,
      0xffffff,
      0.3
    );
    this.tweens.add({
      targets: tapFeedback,
      scale: 2,
      alpha: 0,
      duration: 200,
      onComplete: () => tapFeedback.destroy()
    });
  }

  private updateTimer(): void {
    if (this.isComplete) return;

    this.timeRemaining--;
    this.timerText.setText(`⏱️ ${this.timeRemaining}s`);

    // Urgency increases over time if not relieving
    if (this.phase === 'running') {
      this.urgencyLevel = Math.min(100, this.urgencyLevel + 2);
    }

    if (this.timeRemaining <= 5) {
      this.timerText.setColor('#ff4444');
    }

    if (this.timeRemaining <= 0) {
      this.completeMiniGame(this.relief >= 50);
    }

    // Fail if urgency hits 100 and no relief
    if (this.urgencyLevel >= 100 && this.relief < 10) {
      this.completeMiniGame(false, true);
    }

    this.updateBars();
  }

  private updateBars(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Urgency bar (red, fills from left)
    this.urgencyBar.clear();
    this.urgencyBar.fillStyle(0xff4444);
    this.urgencyBar.fillRoundedRect(
      width / 2 - 145,
      205,
      290 * (this.urgencyLevel / 100),
      30,
      8
    );

    // Relief bar (green, fills from left)
    this.reliefBar.clear();
    this.reliefBar.fillStyle(0x44ff44);
    this.reliefBar.fillRoundedRect(
      width / 2 - 145,
      height - 195,
      290 * (this.relief / 100),
      30,
      8
    );
  }

  private completeMiniGame(success: boolean, accident: boolean = false): void {
    this.isComplete = true;
    this.phase = 'done';
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.time.removeAllEvents();
    this.tweens.killTweensOf(this.mattSprite);

    let resultText: string;
    let color: string;

    if (accident) {
      resultText = '💦 ACCIDENT! Matt didn\'t make it!\n-20 seconds & extra spill!';
      color = '#ff0000';
      
      // Embarrassing animation
      this.mattSprite.setTint(0xff6666);
      
      // Splash effect
      for (let i = 0; i < 10; i++) {
        const splash = this.add.circle(
          this.mattSprite.x + Phaser.Math.Between(-30, 30),
          this.mattSprite.y + Phaser.Math.Between(-20, 40),
          5,
          0x44aaff
        );
        this.tweens.add({
          targets: splash,
          scale: 2,
          alpha: 0,
          duration: 500,
          delay: i * 50
        });
      }

      this.gameData.timeRemaining = Math.max(0, (this.gameData.timeRemaining || 60) - 20);
      this.gameData.spillLevel = Math.min(100, (this.gameData.spillLevel || 0) + 25);
    } else if (success) {
      resultText = '😌 AHHH! Sweet relief!\nMatt is a happy camper!';
      color = '#00ff00';
      
      // Happy dance
      this.tweens.add({
        targets: this.mattSprite,
        y: this.mattSprite.y - 20,
        duration: 200,
        yoyo: true,
        repeat: 3
      });
    } else {
      resultText = '😬 Partial relief...\nMatt is still uncomfortable. -10 sec';
      color = '#ffaa00';
      
      this.gameData.timeRemaining = Math.max(0, (this.gameData.timeRemaining || 60) - 10);
    }

    const result = this.add.text(width / 2, height / 2 - 150, resultText, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: color,
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    this.time.delayedCall(3000, () => {
      this.scene.start('GameScene', { 
        ...this.gameData,
        afterStop: 'pee'
      });
    });
  }
}
