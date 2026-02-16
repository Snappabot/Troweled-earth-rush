import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // === BACKGROUND ===
    const sky = this.add.image(width / 2, height / 2, 'sky');
    sky.setDisplaySize(width, height);
    
    this.add.image(width / 2, 180, 'city-silhouette').setAlpha(0.4);
    this.add.image(width / 2, 280, 'hills').setAlpha(0.6);

    // === TEM TREE LOGO (at top) ===
    const treeLogo = this.add.image(width / 2, 90, 'tem-tree-logo');
    treeLogo.setScale(0.4);
    
    // "RUSH" subtitle
    this.add.text(width / 2 + 2, 167, '— RUSH —', {
      fontFamily: 'Arial Black',
      fontSize: '30px',
      color: '#000000'
    } as Phaser.Types.GameObjects.Text.TextStyle).setOrigin(0.5).setAlpha(0.4);
    this.add.text(width / 2, 165, '— RUSH —', {
      fontFamily: 'Arial Black',
      fontSize: '30px',
      color: '#d4a574',
      stroke: '#2a1a0a',
      strokeThickness: 4
    }).setOrigin(0.5);

    // === TAGLINE ===
    const taglineBg = this.add.graphics();
    taglineBg.fillStyle(0x000000, 0.5);
    taglineBg.fillRoundedRect(width / 2 - 170, 195, 340, 30, 8);
    
    this.add.text(width / 2, 210, '🦘 Dodge roos! 🥧 Avoid pies! 🏠 Plaster walls!', {
      fontFamily: 'Arial',
      fontSize: '13px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // === GROUND & ROAD ===
    const roadY = 620;
    const roadHeight = 120;
    
    // Sky/grass split
    const ground = this.add.graphics();
    
    // Grass above road (where crew stands)
    ground.fillStyle(0x5a8a4a, 1);
    ground.fillRect(0, 400, width, roadY - 400);
    
    // Road
    ground.fillStyle(0x3a3a3a, 1);
    ground.fillRect(0, roadY, width, roadHeight);
    
    // Road edge lines
    ground.fillStyle(0xeeeeee, 1);
    ground.fillRect(0, roadY + 6, width, 4);
    ground.fillRect(0, roadY + roadHeight - 10, width, 4);
    
    // Road center dashes
    ground.fillStyle(0xdddddd, 0.9);
    for (let x = 0; x < width; x += 55) {
      ground.fillRect(x, roadY + roadHeight/2 - 3, 35, 6);
    }
    
    // Grass below road
    ground.fillStyle(0x4a7a3a, 1);
    ground.fillRect(0, roadY + roadHeight, width, height - roadY - roadHeight);

    // === CREW (standing on LEFT side of screen, above road) ===
    const crewY = roadY - 55;
    const crewScale = 2.0;
    const crewSpacing = 85;
    const crewCenterX = 120;  // Left side of screen
    
    // Jarrad
    this.add.image(crewCenterX - crewSpacing/2 + 3, crewY + 3, 'jarrad').setScale(crewScale).setTint(0x000000).setAlpha(0.3);
    const jarrad = this.add.image(crewCenterX - crewSpacing/2, crewY, 'jarrad').setScale(crewScale).setDepth(50);
    // TEM logo badge on Jarrad's chest
    this.add.image(crewCenterX - crewSpacing/2 + 3, crewY - 2, 'tem-logo-inverted').setScale(0.035).setDepth(51);
    
    // Matt
    this.add.image(crewCenterX + crewSpacing/2 + 3, crewY + 3, 'matt').setScale(crewScale).setTint(0x000000).setAlpha(0.3);
    const matt = this.add.image(crewCenterX + crewSpacing/2, crewY, 'matt').setScale(crewScale).setDepth(50);
    // TEM logo badge on Matt's chest
    this.add.image(crewCenterX + crewSpacing/2 - 2, crewY + 2, 'tem-logo-inverted').setScale(0.035).setDepth(51);

    // === MATERIAL BUCKETS (on grass next to crew) ===
    const bucketY = crewY + 55;
    this.createBucket(crewCenterX - crewSpacing - 25, bucketY, 0x8b5a3a); // Copper/rust
    this.createBucket(crewCenterX - crewSpacing, bucketY + 8, 0x9a8a7a); // Grey
    this.createBucket(crewCenterX + crewSpacing + 35, bucketY, 0xa67a5a); // Tan
    this.createBucket(crewCenterX + crewSpacing + 55, bucketY + 8, 0x7a9a8a); // Patina

    // Crew labels
    const labelY = crewY + 90;
    const labelStyle = { fontFamily: 'Arial Black', fontSize: '14px', color: '#ffffff', stroke: '#000000', strokeThickness: 3 };
    this.add.text(crewCenterX - crewSpacing/2, labelY, 'JARRAD', labelStyle).setOrigin(0.5).setDepth(60);
    this.add.text(crewCenterX + crewSpacing/2, labelY, 'MATT', labelStyle).setOrigin(0.5).setDepth(60);

    // === VAN (drives ON the road with Jose) ===
    const vanCenterY = roadY + roadHeight/2;  // Center of road
    const vanStartX = -400;  // Start further off screen (bigger van)
    const vanEndX = width - 200;  // End position for bigger van
    
    // Van container (on the road)
    const vanContainer = this.add.container(vanStartX, vanCenterY);
    vanContainer.setDepth(45);
    
    // Side-view van (2X BIGGER)
    const vanTexture = this.textures.exists('van-side') ? 'van-side' : 'van';
    const van = this.add.image(0, 0, vanTexture);
    van.setScale(vanTexture === 'van-side' ? 4.0 : 2.5);  // 2x bigger!
    if (vanTexture !== 'van-side') van.setAngle(-90);
    
    // Jose's head out driver window (scaled up)
    const joseHead = this.createJoseHead();
    joseHead.setPosition(vanTexture === 'van-side' ? 140 : 90, -50);
    joseHead.setScale(1.6);
    
    // TEM inverted logo on van branding panel
    const vanLogo = this.add.image(vanTexture === 'van-side' ? -150 : 0, vanTexture === 'van-side' ? 0 : 0, 'tem-logo-inverted');
    vanLogo.setScale(vanTexture === 'van-side' ? 0.36 : 0.08);
    // "Troweled Earth" text on van copper panel
    const vanText1 = this.add.text(0, -4, 'Troweled Earth', {
      fontFamily: 'Georgia, serif',
      fontSize: '8px',
      color: '#0a0a0a',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    const vanText2 = this.add.text(0, 6, 'Innovative Wall Coatings', {
      fontFamily: 'Georgia, serif',
      fontSize: '4px',
      color: '#1a1a1a'
    }).setOrigin(0.5);
    vanContainer.add([van, vanLogo, vanText1, vanText2, joseHead]);
    
    // Jose label (above van - adjusted for bigger van)
    const joseLabelY = vanCenterY - 100;
    const joseLabel = this.add.text(vanEndX + 130, joseLabelY, 'JOSE', labelStyle).setOrigin(0.5).setAlpha(0).setDepth(60);

    // === VAN DRIVE-IN ANIMATION ===
    this.tweens.add({
      targets: vanContainer,
      x: vanEndX,
      duration: 1600,
      ease: 'Power2.easeOut',
      delay: 300,
      onComplete: () => {
        // Show Jose label
        this.tweens.add({ targets: joseLabel, alpha: 1, duration: 300 });
        
        // Jose waves
        this.tweens.add({
          targets: joseHead,
          y: joseHead.y - 12,
          duration: 200,
          yoyo: true,
          repeat: 2
        });
        
        // Van idle bounce
        this.tweens.add({
          targets: vanContainer,
          y: vanCenterY + 3,
          duration: 800,
          yoyo: true,
          repeat: -1,
          ease: 'Sine.easeInOut'
        });
      }
    });

    // Crew idle animations
    [jarrad, matt].forEach((char, i) => {
      this.tweens.add({
        targets: char,
        y: char.y - 5,
        duration: 500 + i * 120,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: 200
      });
    });

    // === START BUTTON ===
    const btnY = height - 120;
    const playBtn = this.add.container(width / 2, btnY);
    
    const btnShadow = this.add.graphics();
    btnShadow.fillStyle(0x000000, 0.4);
    btnShadow.fillRoundedRect(-126, -34, 260, 78, 20);
    
    const btnBg = this.add.graphics();
    btnBg.fillStyle(0xb48454, 1);
    btnBg.fillRoundedRect(-130, -38, 260, 76, 18);
    btnBg.fillStyle(0xd4a574, 1);
    btnBg.fillRoundedRect(-128, -36, 256, 40, 16);
    btnBg.lineStyle(3, 0xffffff, 0.5);
    btnBg.strokeRoundedRect(-130, -38, 260, 76, 18);
    
    const playText = this.add.text(0, 0, '🚐 START RUSH', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#1a1a1a',
      stroke: '#ffffff',
      strokeThickness: 2
    }).setOrigin(0.5);

    playBtn.add([btnShadow, btnBg, playText]);
    playBtn.setSize(260, 76);
    playBtn.setInteractive({ useHandCursor: true });

    playBtn.on('pointerover', () => this.tweens.add({ targets: playBtn, scale: 1.06, duration: 100 }));
    playBtn.on('pointerout', () => this.tweens.add({ targets: playBtn, scale: 1, duration: 100 }));
    playBtn.on('pointerdown', () => {
      this.cameras.main.fade(500, 0, 0, 0, false, (_cam: Phaser.Cameras.Scene2D.Camera, progress: number) => {
        if (progress === 1) this.scene.start('GameScene', { level: 1 });
      });
    });

    // === CONTROLS & FOOTER ===
    this.add.text(width / 2, btnY + 55, '⬅️ Steer  •  ➡️ Brake/Boost  •  👆 Tap to brace', {
      fontFamily: 'Arial',
      fontSize: '11px',
      color: '#888888'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 40, 'A Troweled Earth Melbourne Game', {
      fontFamily: 'Arial',
      fontSize: '10px',
      color: '#666666'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 20, '[ Level Select ]', {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: '#d4a574'
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).on('pointerdown', () => this.showLevelSelect());

    this.cameras.main.fadeIn(500);
  }

  private createBucket(x: number, y: number, materialColor: number): void {
    const g = this.add.graphics();
    g.setDepth(40);
    
    // Shadow
    g.fillStyle(0x000000, 0.25);
    g.fillEllipse(x, y + 26, 26, 8);
    
    // Bucket body (WHITE)
    g.fillStyle(0xf8f8f8, 1);
    g.beginPath();
    g.moveTo(x - 15, y - 8);
    g.lineTo(x - 13, y + 22);
    g.lineTo(x + 13, y + 22);
    g.lineTo(x + 15, y - 8);
    g.closePath();
    g.fill();
    
    // Bucket outline
    g.lineStyle(1, 0xdddddd, 1);
    g.beginPath();
    g.moveTo(x - 15, y - 8);
    g.lineTo(x - 13, y + 22);
    g.lineTo(x + 13, y + 22);
    g.lineTo(x + 15, y - 8);
    g.closePath();
    g.strokePath();
    
    // BLACK LABEL (like actual TEM buckets)
    g.fillStyle(0x0a0a0a, 1);
    g.beginPath();
    g.moveTo(x - 14, y - 2);
    g.lineTo(x - 13, y + 16);
    g.lineTo(x + 13, y + 16);
    g.lineTo(x + 14, y - 2);
    g.closePath();
    g.fill();
    
    // TEM logo on bucket label
    this.add.image(x, y + 7, 'tem-logo-inverted').setScale(0.04).setDepth(41);
    
    // White rim
    g.fillStyle(0xeeeeee, 1);
    g.fillRect(x - 16, y - 12, 32, 5);
    
    // Handle (grey)
    g.lineStyle(3, 0x888888, 1);
    g.beginPath();
    g.arc(x, y - 20, 12, Math.PI, 0, false);
    g.strokePath();
    
    // Material inside bucket (colored plaster visible at top)
    g.fillStyle(materialColor, 1);
    g.fillEllipse(x, y - 8, 11, 4);
  }

  private createJoseHead(): Phaser.GameObjects.Container {
    const container = this.add.container(0, 0);
    const g = this.add.graphics();
    
    // Head
    g.fillStyle(0x9a7a5a, 1);
    g.fillCircle(0, 0, 24);
    
    // Dreadlocks
    g.fillStyle(0x2a1a0a, 1);
    g.fillRoundedRect(-20, -12, 9, 28, 4);
    g.fillRoundedRect(-11, -17, 8, 32, 4);
    g.fillRoundedRect(4, -17, 8, 32, 4);
    g.fillRoundedRect(13, -12, 9, 28, 4);
    g.fillStyle(0x1a0a00, 1);
    g.fillCircle(-9, -20, 9);
    g.fillCircle(9, -20, 9);
    g.fillCircle(0, -22, 11);
    
    // Face
    g.fillStyle(0x9a7a5a, 1);
    g.fillEllipse(0, 3, 16, 14);
    
    // Sunglasses
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(-15, -6, 13, 10, 3);
    g.fillRoundedRect(2, -6, 13, 10, 3);
    g.fillRect(-2, -3, 4, 2);
    g.fillStyle(0x2a4a6a, 0.6);
    g.fillRoundedRect(-14, -5, 11, 8, 2);
    g.fillRoundedRect(3, -5, 11, 8, 2);
    
    // Goatee
    g.fillStyle(0x1a0a00, 1);
    g.fillEllipse(0, 14, 7, 6);
    g.fillRect(-3, 8, 6, 7);
    
    // Smile
    g.lineStyle(2, 0xffffff);
    g.beginPath();
    g.arc(0, 10, 7, 0.3, Math.PI - 0.3);
    g.strokePath();
    
    // Arm waving
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(20, 8, 14, 24, 5);
    g.fillStyle(0x9a7a5a, 1);
    g.fillCircle(27, 35, 10);
    
    container.add(g);
    return container;
  }

  private showLevelSelect(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const overlay = this.add.graphics();
    overlay.fillStyle(0x000000, 0.9);
    overlay.fillRect(0, 0, width, height);
    overlay.setInteractive(new Phaser.Geom.Rectangle(0, 0, width, height), Phaser.Geom.Rectangle.Contains);

    const title = this.add.text(width / 2, 70, 'SELECT LEVEL', {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#d4a574'
    }).setOrigin(0.5);

    const levelBtns: Phaser.GameObjects.Container[] = [];
    
    for (let i = 0; i < 10; i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = width / 2 - 85 + col * 170;
      const y = 160 + row * 130;

      const levelBtn = this.add.container(x, y);
      
      const bg = this.add.graphics();
      bg.fillStyle(0x3a3a3a, 1);
      bg.fillRoundedRect(-55, -45, 110, 90, 10);
      
      const levelNum = this.add.text(0, -8, `${i + 1}`, {
        fontFamily: 'Arial Black',
        fontSize: '32px',
        color: '#d4a574'
      }).setOrigin(0.5);

      const houseType = ['Shack', 'Small', 'Small', 'Brutalist', 'Brutalist', 'Brutalist', 'Villa', 'Villa', 'Villa', 'Mansion'][i];
      const typeText = this.add.text(0, 25, houseType, {
        fontFamily: 'Arial',
        fontSize: '12px',
        color: '#888888'
      }).setOrigin(0.5);

      levelBtn.add([bg, levelNum, typeText]);
      levelBtn.setSize(110, 90);
      levelBtn.setInteractive({ useHandCursor: true });
      levelBtns.push(levelBtn);

      levelBtn.on('pointerdown', () => this.scene.start('GameScene', { level: i + 1 }));
    }

    const closeText = this.add.text(width / 2, height - 40, '✕ CLOSE', {
      fontFamily: 'Arial Black',
      fontSize: '20px',
      color: '#ff4444'
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    closeText.on('pointerdown', () => {
      overlay.destroy();
      title.destroy();
      closeText.destroy();
      levelBtns.forEach(btn => btn.destroy());
    });
  }
}
