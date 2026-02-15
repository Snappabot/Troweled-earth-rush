import Phaser from 'phaser';

export class CoffeeScene extends Phaser.Scene {
  private coffeesCaught = 0;
  private coffeesMissed = 0;
  private targetCoffees = 3;
  private timeLimit = 15;
  private timeRemaining = 15;

  private coffees!: Phaser.GameObjects.Group;
  private catchZone!: Phaser.GameObjects.Rectangle;

  private timerText!: Phaser.GameObjects.Text;
  private progressText!: Phaser.GameObjects.Text;
  private instructionText!: Phaser.GameObjects.Text;

  private gameData: any = {};

  constructor() {
    super({ key: 'CoffeeScene' });
  }

  init(data: any): void {
    this.gameData = data;
    this.coffeesCaught = 0;
    this.coffeesMissed = 0;
    this.timeRemaining = this.timeLimit;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor('#4a3020');

    // Title
    this.add.text(width / 2, 50, '☕ COFFEE RUN! ☕', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#d4a574'
    }).setOrigin(0.5);

    // Timer
    this.timerText = this.add.text(width / 2, 100, `⏱️ ${this.timeRemaining}s`, {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Instructions
    this.instructionText = this.add.text(width / 2, 150, 'Tap the flying coffees to catch them!', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#888888'
    }).setOrigin(0.5);

    // Progress
    this.progressText = this.add.text(width / 2, height - 100, 
      `Coffees: ${this.coffeesCaught}/${this.targetCoffees}`, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Van parked (visual)
    const van = this.add.image(width / 2, height - 200, 'van').setScale(2.5);

    // Characters waiting
    const jose = this.add.image(width / 2 - 60, height - 280, 'jose').setScale(2);
    const jarrad = this.add.image(width / 2, height - 280, 'jarrad').setScale(2);
    const matt = this.add.image(width / 2 + 60, height - 280, 'matt').setScale(2);

    // Coffee shop background
    const shop = this.add.graphics();
    shop.fillStyle(0x5a3a20);
    shop.fillRect(100, 200, width - 200, 150);
    shop.fillStyle(0xffd700);
    shop.fillRect(110, 210, 100, 30);

    this.add.text(115, 215, 'CAFE', {
      fontFamily: 'Arial Black',
      fontSize: '18px',
      color: '#3a2010'
    });

    // Coffee group
    this.coffees = this.add.group();

    // Spawn coffees periodically
    this.time.addEvent({
      delay: 800,
      callback: this.spawnCoffee,
      callbackScope: this,
      loop: true
    });

    // Timer countdown
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    // Create coffee cup graphics
    this.createCoffeeCupTexture();
  }

  private createCoffeeCupTexture(): void {
    const graphics = this.make.graphics({ x: 0, y: 0 });
    
    // Cup
    graphics.fillStyle(0xffffff);
    graphics.fillRect(5, 10, 30, 35);
    
    // Handle
    graphics.lineStyle(4, 0xffffff);
    graphics.strokeCircle(38, 25, 8);
    
    // Coffee
    graphics.fillStyle(0x4a2a10);
    graphics.fillRect(8, 13, 24, 15);
    
    // Steam
    graphics.lineStyle(2, 0xcccccc, 0.7);
    graphics.lineBetween(15, 5, 13, 0);
    graphics.lineBetween(25, 5, 27, 0);
    
    graphics.generateTexture('coffee-cup', 45, 45);
    graphics.destroy();
  }

  private spawnCoffee(): void {
    if (this.coffeesCaught >= this.targetCoffees) return;

    const width = this.cameras.main.width;
    const startX = Phaser.Math.Between(100, width - 100);
    
    const coffee = this.add.image(startX, 350, 'coffee-cup').setScale(1.5);
    coffee.setInteractive({ useHandCursor: true });
    
    // Coffee flies in arc
    const endX = Phaser.Math.Between(100, width - 100);
    const peakY = Phaser.Math.Between(200, 400);

    this.tweens.add({
      targets: coffee,
      x: endX,
      y: [peakY, 500],
      duration: 2000,
      ease: 'Quad.easeOut',
      onComplete: () => {
        if (coffee.active) {
          this.missedCoffee(coffee);
        }
      }
    });

    // Tap to catch
    coffee.on('pointerdown', () => {
      this.catchCoffee(coffee);
    });

    this.coffees.add(coffee);
  }

  private catchCoffee(coffee: Phaser.GameObjects.Image): void {
    this.coffeesCaught++;
    this.progressText.setText(`Coffees: ${this.coffeesCaught}/${this.targetCoffees}`);

    // Success effect
    const catchText = this.add.text(coffee.x, coffee.y, '☕ +1!', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#00ff00'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: catchText,
      y: catchText.y - 50,
      alpha: 0,
      duration: 500,
      onComplete: () => catchText.destroy()
    });

    coffee.destroy();

    // Check win condition
    if (this.coffeesCaught >= this.targetCoffees) {
      this.completeMiniGame(true);
    }
  }

  private missedCoffee(coffee: Phaser.GameObjects.Image): void {
    this.coffeesMissed++;

    // Splat effect
    const missText = this.add.text(coffee.x, coffee.y, '💔', {
      fontSize: '32px'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: missText,
      y: missText.y + 30,
      alpha: 0,
      duration: 400,
      onComplete: () => missText.destroy()
    });

    coffee.destroy();
  }

  private updateTimer(): void {
    this.timeRemaining--;
    this.timerText.setText(`⏱️ ${this.timeRemaining}s`);

    if (this.timeRemaining <= 5) {
      this.timerText.setColor('#ff4444');
    }

    if (this.timeRemaining <= 0) {
      this.completeMiniGame(this.coffeesCaught >= this.targetCoffees);
    }
  }

  private completeMiniGame(success: boolean): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Stop spawning
    this.time.removeAllEvents();

    const resultText = success 
      ? '☕ CAFFEINATED! +Speed Boost!' 
      : '😴 No coffee... -5 seconds';

    const result = this.add.text(width / 2, height / 2, resultText, {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: success ? '#00ff00' : '#ff6600',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5).setDepth(100);

    // Update game data
    if (!success) {
      this.gameData.timeRemaining = Math.max(0, (this.gameData.timeRemaining || 60) - 5);
    } else {
      this.gameData.hasSpeedBoost = true;
    }

    this.time.delayedCall(2000, () => {
      this.scene.start('GameScene', { 
        ...this.gameData,
        afterStop: 'coffee'
      });
    });
  }
}
