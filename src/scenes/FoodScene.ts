import Phaser from 'phaser';

export class FoodScene extends Phaser.Scene {
  private pieStack: Phaser.GameObjects.Image[] = [];
  private stackHeight = 0;
  private maxPies = 5;
  private piesDropped = 0;
  private timeRemaining = 20;

  private tiltAngle = 0;
  private trayGraphic!: Phaser.GameObjects.Graphics;
  private trayContainer!: Phaser.GameObjects.Container;

  private timerText!: Phaser.GameObjects.Text;
  private progressText!: Phaser.GameObjects.Text;
  private instructionText!: Phaser.GameObjects.Text;

  private gameData: any = {};
  private isComplete = false;

  constructor() {
    super({ key: 'FoodScene' });
  }

  init(data: any): void {
    this.gameData = data;
    this.pieStack = [];
    this.stackHeight = 0;
    this.piesDropped = 0;
    this.timeRemaining = 20;
    this.tiltAngle = 0;
    this.isComplete = false;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor('#3a2010');

    // Title
    this.add.text(width / 2, 50, '🥧 PIE BALANCE! 🥧', {
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
    this.instructionText = this.add.text(width / 2, 150, 'Tilt phone to balance the pies!\nDon\'t let them fall!', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#888888',
      align: 'center'
    }).setOrigin(0.5);

    // Progress
    this.progressText = this.add.text(width / 2, height - 80, 
      `Pies stacked: ${this.pieStack.length}/${this.maxPies}`, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Drive-thru window background
    const window = this.add.graphics();
    window.fillStyle(0xff6600);
    window.fillRect(width / 2 - 150, 180, 300, 200);
    window.fillStyle(0x333333);
    window.fillRect(width / 2 - 140, 190, 280, 150);

    this.add.text(width / 2, 370, '🍔 TRADIE TUCKER 🍔', {
      fontFamily: 'Arial Black',
      fontSize: '16px',
      color: '#ff6600'
    }).setOrigin(0.5);

    // Create tray container
    this.createTray();

    // Character holding tray (Matt)
    const matt = this.add.image(width / 2, height - 200, 'matt').setScale(2.5);

    // Spawn pies
    this.time.addEvent({
      delay: 2000,
      callback: this.addPie,
      callbackScope: this,
      repeat: this.maxPies - 1
    });

    // Add first pie immediately
    this.time.delayedCall(500, () => this.addPie());

    // Timer
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    // Touch/tilt controls
    this.setupControls();

    // Create pie texture
    this.createPieTexture();
  }

  private createPieTexture(): void {
    const graphics = this.make.graphics({ x: 0, y: 0 });
    
    // Pie crust
    graphics.fillStyle(0xd4a574);
    graphics.fillCircle(25, 25, 25);
    
    // Filling
    graphics.fillStyle(0x8b4513);
    graphics.fillCircle(25, 25, 18);
    
    // Top crust pattern
    graphics.lineStyle(2, 0xc4956a);
    graphics.lineBetween(15, 20, 35, 20);
    graphics.lineBetween(15, 30, 35, 30);
    graphics.lineBetween(20, 15, 20, 35);
    graphics.lineBetween(30, 15, 30, 35);
    
    graphics.generateTexture('meat-pie', 50, 50);
    graphics.destroy();
  }

  private createTray(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.trayContainer = this.add.container(width / 2, height - 350);

    // Tray graphic
    this.trayGraphic = this.add.graphics();
    this.trayGraphic.fillStyle(0x888888);
    this.trayGraphic.fillRoundedRect(-100, 0, 200, 15, 5);
    this.trayGraphic.fillStyle(0x666666);
    this.trayGraphic.fillRect(-90, 10, 180, 5);

    this.trayContainer.add(this.trayGraphic);
  }

  private setupControls(): void {
    const width = this.cameras.main.width;

    // Touch zones for tilting (mobile simulation)
    const leftZone = this.add.zone(0, 0, width / 2, this.cameras.main.height)
      .setOrigin(0)
      .setInteractive();

    const rightZone = this.add.zone(width / 2, 0, width / 2, this.cameras.main.height)
      .setOrigin(0)
      .setInteractive();

    leftZone.on('pointerdown', () => {
      if (!this.isComplete) this.tiltAngle = -0.15;
    });

    rightZone.on('pointerdown', () => {
      if (!this.isComplete) this.tiltAngle = 0.15;
    });

    this.input.on('pointerup', () => {
      this.tiltAngle = 0;
    });

    // Device orientation if available
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        if (!this.isComplete && event.gamma !== null) {
          this.tiltAngle = Phaser.Math.Clamp(event.gamma / 45, -0.3, 0.3);
        }
      });
    }
  }

  private addPie(): void {
    if (this.isComplete) return;

    const pie = this.add.image(0, -30 - (this.pieStack.length * 35), 'meat-pie').setScale(1.2);
    this.trayContainer.add(pie);
    this.pieStack.push(pie);

    // Bounce animation
    this.tweens.add({
      targets: pie,
      y: pie.y + 5,
      duration: 200,
      yoyo: true
    });

    this.progressText.setText(`Pies stacked: ${this.pieStack.length}/${this.maxPies}`);

    // Announcement
    if (this.pieStack.length === this.maxPies) {
      this.instructionText.setText('Keep it balanced until time runs out!');
    }
  }

  private dropPie(): void {
    if (this.pieStack.length === 0 || this.isComplete) return;

    const pie = this.pieStack.pop()!;
    this.piesDropped++;

    // Drop animation
    const worldPos = this.trayContainer.getWorldTransformMatrix().transformPoint(pie.x, pie.y);
    this.trayContainer.remove(pie);
    pie.setPosition(worldPos.x, worldPos.y);

    this.tweens.add({
      targets: pie,
      y: this.cameras.main.height + 50,
      x: pie.x + Phaser.Math.Between(-100, 100),
      rotation: Phaser.Math.FloatBetween(-2, 2),
      duration: 800,
      onComplete: () => pie.destroy()
    });

    // Splat text
    const splatText = this.add.text(worldPos.x, worldPos.y, '💥 SPLAT!', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ff4444'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: splatText,
      y: splatText.y + 50,
      alpha: 0,
      duration: 500,
      onComplete: () => splatText.destroy()
    });

    this.progressText.setText(`Pies stacked: ${this.pieStack.length}/${this.maxPies}`);

    // Shake camera
    this.cameras.main.shake(200, 0.01);
  }

  private updateTimer(): void {
    if (this.isComplete) return;

    this.timeRemaining--;
    this.timerText.setText(`⏱️ ${this.timeRemaining}s`);

    if (this.timeRemaining <= 5) {
      this.timerText.setColor('#ff4444');
    }

    if (this.timeRemaining <= 0) {
      this.completeMiniGame();
    }
  }

  update(time: number, delta: number): void {
    if (this.isComplete) return;

    // Apply tilt to tray
    this.trayContainer.rotation = Phaser.Math.Linear(
      this.trayContainer.rotation,
      this.tiltAngle,
      0.1
    );

    // Check if pies should fall based on tilt
    const maxTilt = 0.25;
    if (Math.abs(this.trayContainer.rotation) > maxTilt && this.pieStack.length > 0) {
      // Higher stacks are more unstable
      const dropChance = 0.02 * this.pieStack.length * (Math.abs(this.trayContainer.rotation) / maxTilt);
      if (Math.random() < dropChance) {
        this.dropPie();
      }
    }

    // Update pie positions based on tilt
    this.pieStack.forEach((pie, i) => {
      const offsetX = this.trayContainer.rotation * 30 * (i + 1);
      pie.x = Phaser.Math.Linear(pie.x, offsetX, 0.1);
    });
  }

  private completeMiniGame(): void {
    this.isComplete = true;
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Calculate success
    const piesDelivered = this.pieStack.length;
    const success = piesDelivered >= 3;

    const resultText = success 
      ? `🥧 Delivered ${piesDelivered} pies! Crew is fed!` 
      : `😢 Only ${piesDelivered} pies... Crew is hungry! -10 sec`;

    const result = this.add.text(width / 2, height / 2, resultText, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: success ? '#00ff00' : '#ff6600',
      stroke: '#000000',
      strokeThickness: 4,
      align: 'center'
    }).setOrigin(0.5).setDepth(100);

    // Update game data
    if (!success) {
      this.gameData.timeRemaining = Math.max(0, (this.gameData.timeRemaining || 60) - 10);
    }

    this.time.delayedCall(2500, () => {
      this.scene.start('GameScene', { 
        ...this.gameData,
        afterStop: 'food'
      });
    });
  }
}
