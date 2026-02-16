import Phaser from 'phaser';

export class GameOverScene extends Phaser.Scene {
  private level = 1;
  private score = 0;
  private success = false;
  private reason = '';
  private wallsCompleted = 0;
  private totalWalls = 0;
  private coverage = 0;
  private timeRemaining = 0;

  constructor() {
    super({ key: 'GameOverScene' });
  }

  init(data: any): void {
    this.level = data.level || 1;
    this.score = data.score || 0;
    this.success = data.success || false;
    this.reason = data.reason || '';
    this.wallsCompleted = data.wallsCompleted || 0;
    this.totalWalls = data.totalWalls || 0;
    this.coverage = data.coverage || 0;
    this.timeRemaining = data.timeRemaining || 0;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor(this.success ? '#1a3a1a' : '#3a1a1a');

    if (this.success) {
      this.showSuccessScreen();
    } else {
      this.showFailureScreen();
    }
  }

  private showSuccessScreen(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Success title with animation
    const title = this.add.text(width / 2, 150, '🎉 LEVEL COMPLETE! 🎉', {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#00ff00'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: title,
      scale: 1.1,
      duration: 500,
      yoyo: true,
      repeat: -1
    });

    // Stats box
    const statsBox = this.add.graphics();
    statsBox.fillStyle(0x000000, 0.7);
    statsBox.fillRoundedRect(60, 220, width - 120, 350, 20);

    // Stats
    let yPos = 260;
    const statStyle = { fontFamily: 'Arial', fontSize: '24px', color: '#ffffff' };
    const valueStyle = { fontFamily: 'Arial Black', fontSize: '24px', color: '#d4a574' };

    this.add.text(100, yPos, 'Walls Plastered:', statStyle);
    this.add.text(width - 100, yPos, `${this.wallsCompleted}/${this.totalWalls}`, valueStyle).setOrigin(1, 0);
    yPos += 50;

    this.add.text(100, yPos, 'Coverage:', statStyle);
    this.add.text(width - 100, yPos, `${Math.floor(this.coverage)}%`, valueStyle).setOrigin(1, 0);
    yPos += 50;

    this.add.text(100, yPos, 'Time Bonus:', statStyle);
    this.add.text(width - 100, yPos, `+${this.timeRemaining * 50}`, { ...valueStyle, color: '#00ff00' }).setOrigin(1, 0);
    yPos += 50;

    // Divider
    const divider = this.add.graphics();
    divider.lineStyle(2, 0xffffff, 0.3);
    divider.lineBetween(100, yPos + 10, width - 100, yPos + 10);
    yPos += 40;

    // Final score
    this.add.text(100, yPos, 'TOTAL SCORE:', { fontFamily: 'Arial Black', fontSize: '28px', color: '#ffffff' });
    const scoreText = this.add.text(width - 100, yPos, `${Math.floor(this.score)}`, {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#ffff00'
    }).setOrigin(1, 0);

    // Animate score
    this.tweens.add({
      targets: scoreText,
      scale: 1.2,
      duration: 300,
      yoyo: true,
      repeat: 2
    });

    // Achievements/badges earned
    yPos += 80;
    this.add.text(width / 2, yPos, '🏆 Achievements 🏆', {
      fontFamily: 'Arial Black',
      fontSize: '20px',
      color: '#d4a574'
    }).setOrigin(0.5);

    yPos += 40;
    const achievements = this.getAchievements();
    achievements.forEach((achievement, i) => {
      this.add.text(width / 2, yPos + i * 30, achievement, {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#00ff00'
      }).setOrigin(0.5);
    });

    // Characters celebrating
    this.showCelebration();

    // Buttons
    this.createButtons();
  }

  private showFailureScreen(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Failure title
    const title = this.add.text(width / 2, 150, '💥 JOB FAILED! 💥', {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#ff4444'
    }).setOrigin(0.5);

    // Reason
    this.add.text(width / 2, 220, this.reason || 'Better luck next time!', {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Sad characters
    const jose = this.add.image(width / 2 - 100, 350, 'jose').setScale(3);
    const jarrad = this.add.image(width / 2, 350, 'jarrad').setScale(3);
    const matt = this.add.image(width / 2 + 100, 350, 'matt').setScale(3);
    // TEM logo badges
    this.add.image(width / 2 - 100, 360, 'tem-tree-logo').setScale(0.08).setDepth(51);
    this.add.image(width / 2, 360, 'tem-tree-logo').setScale(0.08).setDepth(51);
    this.add.image(width / 2 + 100, 365, 'tem-tree-logo').setScale(0.08).setDepth(51);

    // Sad animation (shake head)
    [jose, jarrad, matt].forEach(char => {
      this.tweens.add({
        targets: char,
        x: char.x + 5,
        duration: 100,
        yoyo: true,
        repeat: -1
      });
    });

    // Funny failure message
    const failMessages = [
      '"Oi, that was rough!"',
      '"Matt needed another pee break..."',
      '"The kangaroos won this round!"',
      '"Back to the factory, boys!"',
      '"We\'ll get \'em next time!"'
    ];
    
    this.add.text(width / 2, 450, failMessages[Math.floor(Math.random() * failMessages.length)], {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#888888',
      fontStyle: 'italic'
    }).setOrigin(0.5);

    // Score achieved
    this.add.text(width / 2, 520, `Score: ${Math.floor(this.score)}`, {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#d4a574'
    }).setOrigin(0.5);

    // Splat decorations
    for (let i = 0; i < 5; i++) {
      const splat = this.add.image(
        Phaser.Math.Between(50, width - 50),
        Phaser.Math.Between(100, height - 200),
        'splat'
      ).setScale(Phaser.Math.FloatBetween(1, 2)).setAlpha(0.3);
    }

    // Buttons
    this.createButtons();
  }

  private getAchievements(): string[] {
    const achievements: string[] = [];

    if (this.coverage >= 100) achievements.push('⭐ Perfect Coverage!');
    if (this.timeRemaining >= 30) achievements.push('⏱️ Speed Demon!');
    if (this.wallsCompleted >= 5) achievements.push('🏗️ Master Plasterer!');
    if (this.level >= 5) achievements.push('🦘 Outback Survivor!');
    if (this.level >= 10) achievements.push('🏆 Brutalist Champion!');

    if (achievements.length === 0) {
      achievements.push('🌟 Job Well Done!');
    }

    return achievements;
  }

  private showCelebration(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Happy characters
    const jose = this.add.image(width / 4, height - 200, 'jose').setScale(3);
    const jarrad = this.add.image(width / 2, height - 200, 'jarrad').setScale(3);
    const matt = this.add.image((width / 4) * 3, height - 200, 'matt').setScale(3);
    // TEM logo badges
    this.add.image(width / 4, height - 190, 'tem-tree-logo').setScale(0.08).setDepth(51);
    this.add.image(width / 2, height - 190, 'tem-tree-logo').setScale(0.08).setDepth(51);
    this.add.image((width / 4) * 3, height - 185, 'tem-tree-logo').setScale(0.08).setDepth(51);

    // Jump animation
    [jose, jarrad, matt].forEach((char, i) => {
      this.tweens.add({
        targets: char,
        y: char.y - 30,
        duration: 400,
        yoyo: true,
        repeat: -1,
        delay: i * 150
      });
    });

    // Confetti particles
    for (let i = 0; i < 30; i++) {
      this.time.delayedCall(i * 100, () => {
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];
        const confetti = this.add.rectangle(
          Phaser.Math.Between(50, width - 50),
          -20,
          10,
          10,
          colors[Math.floor(Math.random() * colors.length)]
        );

        this.tweens.add({
          targets: confetti,
          y: height + 50,
          x: confetti.x + Phaser.Math.Between(-100, 100),
          rotation: Phaser.Math.FloatBetween(0, Math.PI * 4),
          duration: 2000,
          onComplete: () => confetti.destroy()
        });
      });
    }
  }

  private createButtons(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Retry button
    const retryBtn = this.add.container(width / 2 - 110, height - 100);
    const retryBg = this.add.graphics();
    retryBg.fillStyle(0xd4a574);
    retryBg.fillRoundedRect(-90, -35, 180, 70, 15);
    const retryText = this.add.text(0, 0, '🔄 RETRY', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#1a1a1a'
    }).setOrigin(0.5);
    retryBtn.add([retryBg, retryText]);
    retryBtn.setSize(180, 70);
    retryBtn.setInteractive({ useHandCursor: true });

    retryBtn.on('pointerdown', () => {
      this.cameras.main.fade(300, 0, 0, 0, false, (cam: any, progress: number) => {
        if (progress === 1) {
          this.scene.start('GameScene', { level: this.level });
        }
      });
    });

    // Next level / Menu button
    const nextBtn = this.add.container(width / 2 + 110, height - 100);
    const nextBg = this.add.graphics();
    
    if (this.success && this.level < 10) {
      nextBg.fillStyle(0x00aa00);
      const nextText = this.add.text(0, 0, '➡️ NEXT', {
        fontFamily: 'Arial Black',
        fontSize: '24px',
        color: '#ffffff'
      }).setOrigin(0.5);
      nextBtn.add([nextBg, nextText]);

      nextBtn.on('pointerdown', () => {
        this.cameras.main.fade(300, 0, 0, 0, false, (cam: any, progress: number) => {
          if (progress === 1) {
            this.scene.start('GameScene', { level: this.level + 1 });
          }
        });
      });
    } else {
      nextBg.fillStyle(0x4444aa);
      const menuText = this.add.text(0, 0, '🏠 MENU', {
        fontFamily: 'Arial Black',
        fontSize: '24px',
        color: '#ffffff'
      }).setOrigin(0.5);
      nextBtn.add([nextBg, menuText]);

      nextBtn.on('pointerdown', () => {
        this.cameras.main.fade(300, 0, 0, 0, false, (cam: any, progress: number) => {
          if (progress === 1) {
            this.scene.start('MenuScene');
          }
        });
      });
    }

    nextBg.fillRoundedRect(-90, -35, 180, 70, 15);
    nextBtn.setSize(180, 70);
    nextBtn.setInteractive({ useHandCursor: true });

    // Share button (bottom)
    const shareBtn = this.add.text(width / 2, height - 30, '📱 Share Score #TroweledEarthRush', {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#888888'
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    shareBtn.on('pointerdown', () => {
      // Would implement share functionality here
      const shareText = `I scored ${Math.floor(this.score)} points on Level ${this.level} of Troweled Earth Rush! 🚐🦘 Can you beat me? #TroweledEarthRush`;
      console.log('Share:', shareText);
      
      // Mobile share API if available
      if (navigator.share) {
        navigator.share({
          title: 'Troweled Earth Rush',
          text: shareText,
          url: 'https://troweledearthmelbourne.com.au'
        });
      }
    });
  }
}
