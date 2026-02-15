import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Background
    this.cameras.main.setBackgroundColor('#1a1512');

    // Title
    const title = this.add.text(width / 2, 200, 'TROWELED\nEARTH\nRUSH', {
      fontFamily: 'Arial Black',
      fontSize: '64px',
      color: '#d4a574',
      align: 'center',
      stroke: '#2a1a0a',
      strokeThickness: 6
    }).setOrigin(0.5);

    // Van driving animation
    const van = this.add.image(width / 2, 450, 'van').setScale(3);
    
    this.tweens.add({
      targets: van,
      x: width / 2 + 30,
      duration: 500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Subtitle
    this.add.text(width / 2, 550, '🦘 Dodge kangaroos! 🥧 Avoid pies! 🏠 Plaster houses!', {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#ffffff',
      align: 'center'
    }).setOrigin(0.5);

    // Crew display
    const jose = this.add.image(width / 2 - 80, 650, 'jose').setScale(2);
    const jarrad = this.add.image(width / 2, 650, 'jarrad').setScale(2);
    const matt = this.add.image(width / 2 + 80, 650, 'matt').setScale(2);

    this.add.text(width / 2 - 80, 720, 'Jose', { fontFamily: 'Arial', fontSize: '14px', color: '#d4a574' }).setOrigin(0.5);
    this.add.text(width / 2, 720, 'Jarrad', { fontFamily: 'Arial', fontSize: '14px', color: '#d4a574' }).setOrigin(0.5);
    this.add.text(width / 2 + 80, 720, 'Matt', { fontFamily: 'Arial', fontSize: '14px', color: '#d4a574' }).setOrigin(0.5);

    // Play button
    const playBtn = this.add.container(width / 2, 850);
    
    const btnBg = this.add.graphics();
    btnBg.fillStyle(0xd4a574, 1);
    btnBg.fillRoundedRect(-120, -40, 240, 80, 20);
    btnBg.lineStyle(4, 0xffffff, 0.5);
    btnBg.strokeRoundedRect(-120, -40, 240, 80, 20);
    
    const playText = this.add.text(0, 0, '🚐 START RUSH', {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#1a1a1a'
    }).setOrigin(0.5);

    playBtn.add([btnBg, playText]);
    playBtn.setSize(240, 80);
    playBtn.setInteractive({ useHandCursor: true });

    playBtn.on('pointerover', () => {
      this.tweens.add({
        targets: playBtn,
        scale: 1.1,
        duration: 100
      });
    });

    playBtn.on('pointerout', () => {
      this.tweens.add({
        targets: playBtn,
        scale: 1,
        duration: 100
      });
    });

    playBtn.on('pointerdown', () => {
      this.cameras.main.fade(500, 0, 0, 0, false, (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
        if (progress === 1) {
          this.scene.start('GameScene', { level: 1 });
        }
      });
    });

    // How to play
    this.add.text(width / 2, 970, 'Controls:\n⬅️ Left: Joystick to steer\n➡️ Right: Brake & Boost buttons\n👆 Tap crew to brace against spills!', {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#888888',
      align: 'center'
    }).setOrigin(0.5);

    // Credits
    this.add.text(width / 2, 1100, 'A Troweled Earth Melbourne Game\ntroweledearthmelbourne.com.au', {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#555555',
      align: 'center'
    }).setOrigin(0.5);

    // Level select (small text)
    this.add.text(width / 2, 1180, 'Tap here for Level Select', {
      fontFamily: 'Arial',
      fontSize: '14px',
      color: '#d4a574'
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      this.showLevelSelect();
    });

    // Animate entry
    this.cameras.main.fadeIn(500);
  }

  private showLevelSelect(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Overlay
    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.9);
    overlay.fillRect(0, 0, width, height);
    overlay.setInteractive(new Phaser.Geom.Rectangle(0, 0, width, height), Phaser.Geom.Rectangle.Contains);

    const title = this.add.text(width / 2, 100, 'SELECT LEVEL', {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#d4a574'
    }).setOrigin(0.5);

    // Level buttons (2x5 grid)
    for (let i = 0; i < 10; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = width / 2 - 100 + col * 200;
      const y = 200 + row * 180;

      const levelBtn = this.add.container(x, y);
      
      const bg = this.add.graphics();
      bg.fillStyle(0x3a3a3a, 1);
      bg.fillRoundedRect(-70, -70, 140, 140, 15);
      
      const levelNum = this.add.text(0, -20, `${i + 1}`, {
        fontFamily: 'Arial Black',
        fontSize: '48px',
        color: '#d4a574'
      }).setOrigin(0.5);

      const houseType = ['Shack', 'Small', 'Small', 'Brutalist', 'Brutalist', 'Brutalist', 'Villa', 'Villa', 'Villa', 'Mansion'][i];
      const typeText = this.add.text(0, 35, houseType, {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#888888'
      }).setOrigin(0.5);

      levelBtn.add([bg, levelNum, typeText]);
      levelBtn.setSize(140, 140);
      levelBtn.setInteractive({ useHandCursor: true });

      levelBtn.on('pointerdown', () => {
        overlay.destroy();
        title.destroy();
        this.scene.start('GameScene', { level: i + 1 });
      });
    }

    // Close button
    const closeText = this.add.text(width / 2, height - 80, '✕ CLOSE', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ff4444'
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    closeText.on('pointerdown', () => {
      overlay.destroy();
      title.destroy();
      closeText.destroy();
      // Destroy all level buttons
      this.children.list.filter(child => child instanceof Phaser.GameObjects.Container).forEach(c => {
        if ((c as Phaser.GameObjects.Container).getData('isLevelBtn')) c.destroy();
      });
    });
  }
}
