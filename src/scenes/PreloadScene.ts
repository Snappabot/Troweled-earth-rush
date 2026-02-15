import Phaser from 'phaser';

/**
 * PreloadScene - Generates all game sprites in a GTA 1/2 style
 * Chunky pixel art, visible details, recognizable characters
 */
export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(): void {
    this.createPlaceholderAssets();
  }

  createPlaceholderAssets(): void {
    this.createVan();
    this.createRoad();
    this.createGrass();
    this.createObstacles();
    this.createUI();
    this.createCharacters();
  }

  private createVan(): void {
    // GTA-style top-down van - bigger, more detail, TEM branding
    const g = this.make.graphics({ x: 0, y: 0 });
    
    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillRoundedRect(4, 4, 52, 90, 6);
    
    // Van body - matte black
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(0, 0, 52, 90, 6);
    
    // Body panel lines
    g.lineStyle(1, 0x333333);
    g.lineBetween(4, 30, 48, 30);
    g.lineBetween(4, 60, 48, 60);
    
    // Windscreen (front)
    g.fillStyle(0x3a6a9a, 1);
    g.fillRoundedRect(6, 4, 40, 18, 3);
    // Windscreen glare
    g.fillStyle(0x5a9aca, 0.5);
    g.fillTriangle(8, 6, 20, 6, 8, 16);
    
    // Side windows
    g.fillStyle(0x2a5a8a, 1);
    g.fillRect(4, 25, 8, 12);
    g.fillRect(40, 25, 8, 12);
    
    // === TEM BRANDING ===
    // Orange racing stripe down center
    g.fillStyle(0xd35400, 1);
    g.fillRect(22, 25, 8, 50);
    
    // "TEM" text area (simplified logo)
    g.fillStyle(0xd35400, 1);
    g.fillRoundedRect(10, 42, 32, 14, 2);
    // T
    g.fillStyle(0xffffff, 1);
    g.fillRect(14, 45, 6, 2);
    g.fillRect(16, 45, 2, 8);
    // E
    g.fillRect(22, 45, 2, 8);
    g.fillRect(22, 45, 5, 2);
    g.fillRect(22, 48, 4, 2);
    g.fillRect(22, 51, 5, 2);
    // M
    g.fillRect(29, 45, 2, 8);
    g.fillRect(35, 45, 2, 8);
    g.fillRect(30, 46, 2, 2);
    g.fillRect(32, 47, 2, 2);
    g.fillRect(34, 46, 2, 2);
    
    // Rear lights
    g.fillStyle(0xff3333, 1);
    g.fillRect(6, 82, 10, 5);
    g.fillRect(36, 82, 10, 5);
    
    // Wheels - chunky GTA style
    g.fillStyle(0x111111, 1);
    g.fillRoundedRect(-4, 12, 10, 20, 3);
    g.fillRoundedRect(46, 12, 10, 20, 3);
    g.fillRoundedRect(-4, 58, 10, 20, 3);
    g.fillRoundedRect(46, 58, 10, 20, 3);
    // Wheel rims
    g.fillStyle(0x444444, 1);
    g.fillRect(-2, 17, 6, 10);
    g.fillRect(48, 17, 6, 10);
    g.fillRect(-2, 63, 6, 10);
    g.fillRect(48, 63, 6, 10);
    
    // Roof rack
    g.fillStyle(0x333333, 1);
    g.fillRect(8, 32, 36, 3);
    g.fillRect(8, 38, 36, 3);
    
    // Headlights
    g.fillStyle(0xffffcc, 1);
    g.fillCircle(12, 8, 4);
    g.fillCircle(40, 8, 4);
    
    g.generateTexture('van', 56, 94);
    g.destroy();
  }

  private createRoad(): void {
    // Wider road with more detail
    const g = this.make.graphics({ x: 0, y: 0 });
    
    // Asphalt
    g.fillStyle(0x3a3a3a, 1);
    g.fillRect(0, 0, 160, 160);
    
    // Asphalt texture (darker patches)
    g.fillStyle(0x2d2d2d, 1);
    for (let i = 0; i < 8; i++) {
      g.fillRect(
        Phaser.Math.Between(10, 140),
        Phaser.Math.Between(10, 140),
        Phaser.Math.Between(8, 20),
        Phaser.Math.Between(8, 20)
      );
    }
    
    // Center dashed line
    g.fillStyle(0xf0f0f0, 1);
    for (let y = 0; y < 160; y += 40) {
      g.fillRect(76, y, 8, 25);
    }
    
    // Side lines (yellow)
    g.fillStyle(0xffcc00, 1);
    g.fillRect(12, 0, 5, 160);
    g.fillRect(143, 0, 5, 160);
    
    // Edge cracks
    g.lineStyle(1, 0x2a2a2a);
    g.lineBetween(20, 0, 25, 160);
    g.lineBetween(135, 0, 140, 160);
    
    g.generateTexture('road', 160, 160);
    g.destroy();
  }

  private createGrass(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    
    // Base green
    g.fillStyle(0x2d5a27, 1);
    g.fillRect(0, 0, 80, 80);
    
    // Grass variation
    g.fillStyle(0x3d7a37, 1);
    for (let i = 0; i < 12; i++) {
      g.fillCircle(
        Phaser.Math.Between(5, 75),
        Phaser.Math.Between(5, 75),
        Phaser.Math.Between(3, 8)
      );
    }
    
    // Dark patches
    g.fillStyle(0x1d4a17, 1);
    for (let i = 0; i < 5; i++) {
      g.fillCircle(
        Phaser.Math.Between(10, 70),
        Phaser.Math.Between(10, 70),
        Phaser.Math.Between(4, 10)
      );
    }
    
    g.generateTexture('grass', 80, 80);
    g.destroy();
  }

  private createObstacles(): void {
    // === KANGAROO - GTA style ===
    const roo = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    roo.fillStyle(0x000000, 0.3);
    roo.fillEllipse(28, 58, 30, 12);
    // Body
    roo.fillStyle(0x8b5a2b, 1);
    roo.fillEllipse(25, 35, 22, 32);
    // Legs (powerful)
    roo.fillStyle(0x7a4a1b, 1);
    roo.fillEllipse(18, 52, 10, 16);
    roo.fillEllipse(32, 52, 10, 16);
    // Tail
    roo.fillStyle(0x8b5a2b, 1);
    roo.fillEllipse(12, 50, 8, 20);
    // Head
    roo.fillStyle(0x9b6a3b, 1);
    roo.fillEllipse(25, 10, 14, 16);
    // Ears
    roo.fillStyle(0x8b5a2b, 1);
    roo.fillTriangle(16, 8, 18, -6, 22, 6);
    roo.fillTriangle(28, 6, 32, -6, 34, 8);
    // Inner ears
    roo.fillStyle(0xd4a574, 1);
    roo.fillTriangle(17, 6, 19, -2, 21, 5);
    roo.fillTriangle(29, 5, 31, -2, 33, 6);
    // Face
    roo.fillStyle(0x1a1a1a, 1);
    roo.fillCircle(21, 8, 2); // Eye
    roo.fillCircle(29, 8, 2); // Eye
    roo.fillCircle(25, 14, 3); // Nose
    // Pouch indicator
    roo.fillStyle(0xa67c4c, 1);
    roo.fillEllipse(25, 42, 10, 8);
    roo.generateTexture('kangaroo', 50, 70);
    roo.destroy();

    // === ROAD CONE ===
    const cone = this.make.graphics({ x: 0, y: 0 });
    // Base
    cone.fillStyle(0x333333, 1);
    cone.fillEllipse(20, 38, 22, 8);
    // Cone body
    cone.fillStyle(0xff6600, 1);
    cone.beginPath();
    cone.moveTo(20, 5);
    cone.lineTo(6, 35);
    cone.lineTo(34, 35);
    cone.closePath();
    cone.fill();
    // White stripes
    cone.fillStyle(0xffffff, 1);
    cone.fillRect(10, 14, 20, 5);
    cone.fillRect(8, 24, 24, 5);
    // Top
    cone.fillStyle(0xff8800, 1);
    cone.fillCircle(20, 6, 4);
    cone.generateTexture('cone', 40, 45);
    cone.destroy();

    // === MEAT PIE (flying) ===
    const pie = this.make.graphics({ x: 0, y: 0 });
    // Crust
    pie.fillStyle(0xd4a574, 1);
    pie.fillCircle(20, 20, 18);
    // Filling visible
    pie.fillStyle(0x8b4513, 1);
    pie.fillCircle(20, 20, 12);
    // Crust top pattern
    pie.lineStyle(2, 0xc4956a);
    pie.lineBetween(12, 16, 28, 16);
    pie.lineBetween(12, 24, 28, 24);
    pie.lineBetween(16, 12, 16, 28);
    pie.lineBetween(24, 12, 24, 28);
    // Shine
    pie.fillStyle(0xe4b584, 0.5);
    pie.fillCircle(14, 14, 5);
    pie.generateTexture('pie', 40, 40);
    pie.destroy();

    // === BEACH BALL ===
    const ball = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    ball.fillStyle(0x000000, 0.2);
    ball.fillEllipse(25, 48, 30, 10);
    // Ball
    ball.fillStyle(0xff4444, 1);
    ball.fillCircle(25, 25, 22);
    // Stripes
    ball.fillStyle(0xffffff, 1);
    ball.beginPath();
    ball.arc(25, 25, 22, -0.5, 0.5);
    ball.lineTo(25, 25);
    ball.closePath();
    ball.fill();
    ball.beginPath();
    ball.arc(25, 25, 22, 1.5, 2.5);
    ball.lineTo(25, 25);
    ball.closePath();
    ball.fill();
    ball.fillStyle(0x4444ff, 1);
    ball.beginPath();
    ball.arc(25, 25, 22, 2.6, 3.6);
    ball.lineTo(25, 25);
    ball.closePath();
    ball.fill();
    // Shine
    ball.fillStyle(0xffffff, 0.4);
    ball.fillCircle(18, 18, 8);
    ball.generateTexture('beachball', 50, 55);
    ball.destroy();

    // === CHOOK (chicken) ===
    const chook = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    chook.fillStyle(0x000000, 0.2);
    chook.fillEllipse(20, 42, 24, 8);
    // Body
    chook.fillStyle(0xffffff, 1);
    chook.fillEllipse(20, 28, 18, 20);
    // Wing
    chook.fillStyle(0xeeeeee, 1);
    chook.fillEllipse(24, 30, 10, 12);
    // Head
    chook.fillStyle(0xffffff, 1);
    chook.fillCircle(20, 10, 10);
    // Comb (red)
    chook.fillStyle(0xff3333, 1);
    chook.fillCircle(20, 2, 4);
    chook.fillCircle(16, 4, 3);
    chook.fillCircle(24, 4, 3);
    // Wattle
    chook.fillStyle(0xff4444, 1);
    chook.fillEllipse(20, 18, 4, 6);
    // Beak
    chook.fillStyle(0xffaa00, 1);
    chook.fillTriangle(20, 10, 30, 12, 20, 14);
    // Eye
    chook.fillStyle(0x1a1a1a, 1);
    chook.fillCircle(18, 8, 2);
    // Feet
    chook.fillStyle(0xffaa00, 1);
    chook.fillRect(14, 40, 3, 8);
    chook.fillRect(23, 40, 3, 8);
    chook.generateTexture('chook', 40, 50);
    chook.destroy();

    // === EMU ===
    const emu = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    emu.fillStyle(0x000000, 0.2);
    emu.fillEllipse(25, 78, 20, 8);
    // Body (fluffy)
    emu.fillStyle(0x4a3a2a, 1);
    emu.fillEllipse(25, 55, 20, 25);
    // Feather texture
    emu.fillStyle(0x5a4a3a, 1);
    for (let i = 0; i < 8; i++) {
      emu.fillCircle(
        20 + Phaser.Math.Between(-8, 8),
        50 + Phaser.Math.Between(-10, 10),
        Phaser.Math.Between(3, 6)
      );
    }
    // Neck
    emu.fillStyle(0x3a3a4a, 1);
    emu.fillRect(22, 20, 6, 35);
    // Head
    emu.fillStyle(0x4a4a5a, 1);
    emu.fillEllipse(25, 12, 10, 14);
    // Beak
    emu.fillStyle(0x2a2a2a, 1);
    emu.fillTriangle(25, 8, 35, 14, 25, 18);
    // Eye
    emu.fillStyle(0xffaa00, 1);
    emu.fillCircle(22, 10, 3);
    emu.fillStyle(0x1a1a1a, 1);
    emu.fillCircle(22, 10, 1);
    // Legs
    emu.fillStyle(0x5a5a5a, 1);
    emu.fillRect(18, 70, 4, 15);
    emu.fillRect(28, 70, 4, 15);
    emu.generateTexture('emu', 50, 90);
    emu.destroy();
  }

  private createUI(): void {
    // === JOYSTICK BASE ===
    const jBase = this.make.graphics({ x: 0, y: 0 });
    jBase.fillStyle(0x000000, 0.5);
    jBase.fillCircle(70, 70, 68);
    jBase.lineStyle(4, 0xd35400, 0.8);
    jBase.strokeCircle(70, 70, 65);
    jBase.lineStyle(2, 0xffffff, 0.3);
    jBase.strokeCircle(70, 70, 40);
    // Direction indicators
    jBase.fillStyle(0xffffff, 0.2);
    jBase.fillTriangle(70, 15, 60, 30, 80, 30); // Up
    jBase.fillTriangle(70, 125, 60, 110, 80, 110); // Down
    jBase.fillTriangle(15, 70, 30, 60, 30, 80); // Left
    jBase.fillTriangle(125, 70, 110, 60, 110, 80); // Right
    jBase.generateTexture('joystick-base', 140, 140);
    jBase.destroy();

    // === JOYSTICK KNOB ===
    const jKnob = this.make.graphics({ x: 0, y: 0 });
    jKnob.fillStyle(0xd35400, 1);
    jKnob.fillCircle(30, 30, 28);
    jKnob.fillStyle(0xe35500, 1);
    jKnob.fillCircle(26, 26, 20);
    jKnob.lineStyle(3, 0xffffff, 0.5);
    jKnob.strokeCircle(30, 30, 26);
    jKnob.generateTexture('joystick-knob', 60, 60);
    jKnob.destroy();

    // === BRAKE BUTTON ===
    const brake = this.make.graphics({ x: 0, y: 0 });
    brake.fillStyle(0xcc0000, 1);
    brake.fillRoundedRect(0, 0, 90, 90, 18);
    brake.fillStyle(0xaa0000, 1);
    brake.fillRoundedRect(5, 5, 80, 80, 15);
    brake.lineStyle(3, 0xffffff, 0.6);
    brake.strokeRoundedRect(8, 8, 74, 74, 12);
    // "BRAKE" text would go here
    brake.generateTexture('brake-btn', 90, 90);
    brake.destroy();

    // === BOOST BUTTON ===
    const boost = this.make.graphics({ x: 0, y: 0 });
    boost.fillStyle(0x00aa00, 1);
    boost.fillRoundedRect(0, 0, 70, 70, 15);
    boost.fillStyle(0x008800, 1);
    boost.fillRoundedRect(4, 4, 62, 62, 12);
    boost.lineStyle(2, 0xffffff, 0.5);
    boost.strokeRoundedRect(6, 6, 58, 58, 10);
    // Arrow up
    boost.fillStyle(0xffffff, 0.8);
    boost.fillTriangle(35, 15, 20, 40, 50, 40);
    boost.fillRect(27, 38, 16, 20);
    boost.generateTexture('boost-btn', 70, 70);
    boost.destroy();

    // === BUCKET ===
    const bucket = this.make.graphics({ x: 0, y: 0 });
    bucket.fillStyle(0x666666, 1);
    bucket.fillRect(0, 8, 40, 40);
    bucket.fillStyle(0x888888, 1);
    bucket.fillRect(0, 5, 40, 6);
    // Handle
    bucket.lineStyle(3, 0x555555);
    bucket.strokeArc(20, 5, 12, Phaser.Math.DegToRad(180), Phaser.Math.DegToRad(360));
    // Plaster inside
    bucket.fillStyle(0xd4c4a4, 1);
    bucket.fillRect(3, 12, 34, 33);
    bucket.generateTexture('bucket', 40, 50);
    bucket.destroy();

    // === SPILL PARTICLE ===
    const spill = this.make.graphics({ x: 0, y: 0 });
    spill.fillStyle(0xd4c4a4, 1);
    spill.fillCircle(10, 10, 10);
    spill.fillStyle(0xc4b494, 1);
    spill.fillCircle(8, 8, 5);
    spill.generateTexture('spill', 20, 20);
    spill.destroy();

    // === BUTTON ===
    const btn = this.make.graphics({ x: 0, y: 0 });
    btn.fillStyle(0xd35400, 1);
    btn.fillRoundedRect(0, 0, 220, 65, 12);
    btn.fillStyle(0xe36510, 1);
    btn.fillRoundedRect(3, 3, 214, 50, 10);
    btn.lineStyle(3, 0xffffff, 0.4);
    btn.strokeRoundedRect(5, 5, 210, 46, 8);
    btn.generateTexture('button', 220, 65);
    btn.destroy();
  }

  private createCharacters(): void {
    // === JOSE - Driver, muscular Latino, dreadlocks, goatee, hi-vis ===
    const jose = this.make.graphics({ x: 0, y: 0 });
    
    // Shadow
    jose.fillStyle(0x000000, 0.3);
    jose.fillEllipse(30, 75, 35, 12);
    
    // Legs (dark work pants)
    jose.fillStyle(0x2a2a3a, 1);
    jose.fillRect(18, 55, 10, 22);
    jose.fillRect(32, 55, 10, 22);
    
    // Boots
    jose.fillStyle(0x3a2a1a, 1);
    jose.fillRect(16, 72, 14, 8);
    jose.fillRect(30, 72, 14, 8);
    
    // Body/torso
    jose.fillStyle(0xff6600, 1); // Hi-vis orange
    jose.fillRect(14, 32, 32, 28);
    
    // Hi-vis reflective stripes
    jose.fillStyle(0xcccccc, 1);
    jose.fillRect(14, 40, 32, 4);
    jose.fillRect(14, 52, 32, 4);
    
    // Arms (hi-vis)
    jose.fillStyle(0xff6600, 1);
    jose.fillRect(6, 34, 10, 18);
    jose.fillRect(44, 34, 10, 18);
    
    // Hands
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillRect(6, 50, 10, 8);
    jose.fillRect(44, 50, 10, 8);
    
    // Head
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillCircle(30, 18, 16);
    
    // Dreadlocks (black, hanging down)
    jose.fillStyle(0x1a1a1a, 1);
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 1.2 + Math.PI * 0.9;
      const x = 30 + Math.cos(angle) * 14;
      const y = 18 + Math.sin(angle) * 14;
      jose.fillRect(x - 2, y, 4, 14 + Math.random() * 6);
    }
    
    // Face details
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillCircle(24, 16, 2); // Eye
    jose.fillCircle(36, 16, 2); // Eye
    // Goatee
    jose.fillRect(26, 24, 8, 6);
    jose.fillTriangle(26, 30, 30, 34, 34, 30);
    
    // Sunglasses
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillRect(20, 14, 8, 5);
    jose.fillRect(32, 14, 8, 5);
    jose.fillRect(28, 15, 4, 2);
    
    jose.generateTexture('jose', 60, 85);
    jose.destroy();

    // === JARRAD - Crew, muscular Aussie, beard, glasses, hi-vis ===
    const jarrad = this.make.graphics({ x: 0, y: 0 });
    
    // Shadow
    jarrad.fillStyle(0x000000, 0.3);
    jarrad.fillEllipse(30, 78, 38, 12);
    
    // Legs
    jarrad.fillStyle(0x2a2a3a, 1);
    jarrad.fillRect(16, 55, 12, 24);
    jarrad.fillRect(32, 55, 12, 24);
    
    // Boots
    jarrad.fillStyle(0x3a2a1a, 1);
    jarrad.fillRect(14, 74, 16, 8);
    jarrad.fillRect(30, 74, 16, 8);
    
    // Muscular torso (hi-vis)
    jarrad.fillStyle(0xffcc00, 1); // Hi-vis yellow
    jarrad.fillRect(12, 30, 36, 30);
    
    // Reflective stripes
    jarrad.fillStyle(0xcccccc, 1);
    jarrad.fillRect(12, 38, 36, 4);
    jarrad.fillRect(12, 50, 36, 4);
    
    // Muscular arms
    jarrad.fillStyle(0xffcc00, 1);
    jarrad.fillRect(2, 32, 12, 20);
    jarrad.fillRect(46, 32, 12, 20);
    
    // Hands
    jarrad.fillStyle(0xe8c4a0, 1);
    jarrad.fillRect(2, 50, 12, 8);
    jarrad.fillRect(46, 50, 12, 8);
    
    // Head
    jarrad.fillStyle(0xe8c4a0, 1);
    jarrad.fillCircle(30, 16, 16);
    
    // Short hair/buzz cut
    jarrad.fillStyle(0x5a4a3a, 1);
    jarrad.fillArc(30, 14, 15, Phaser.Math.DegToRad(180), Phaser.Math.DegToRad(360), false);
    
    // Full beard
    jarrad.fillStyle(0x4a3a2a, 1);
    jarrad.fillRect(18, 20, 24, 12);
    jarrad.fillRoundedRect(16, 24, 28, 10, 5);
    
    // Glasses
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillRect(20, 12, 8, 6);
    jarrad.fillRect(32, 12, 8, 6);
    jarrad.fillRect(28, 14, 4, 2);
    // Lens shine
    jarrad.fillStyle(0x4a8aca, 0.3);
    jarrad.fillRect(21, 13, 6, 4);
    jarrad.fillRect(33, 13, 6, 4);
    
    // Eyes behind glasses
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillCircle(24, 14, 1);
    jarrad.fillCircle(36, 14, 1);
    
    jarrad.generateTexture('jarrad', 60, 88);
    jarrad.destroy();

    // === MATT - Tall, lanky, desperate expression, hi-vis ===
    const matt = this.make.graphics({ x: 0, y: 0 });
    
    // Shadow
    matt.fillStyle(0x000000, 0.3);
    matt.fillEllipse(28, 92, 30, 10);
    
    // Long skinny legs
    matt.fillStyle(0x2a2a3a, 1);
    matt.fillRect(18, 58, 8, 32);
    matt.fillRect(32, 58, 8, 32);
    
    // Boots
    matt.fillStyle(0x3a2a1a, 1);
    matt.fillRect(16, 86, 12, 8);
    matt.fillRect(30, 86, 12, 8);
    
    // Skinny torso (hi-vis)
    matt.fillStyle(0xff6600, 1);
    matt.fillRect(16, 32, 26, 30);
    
    // Reflective stripes
    matt.fillStyle(0xcccccc, 1);
    matt.fillRect(16, 40, 26, 3);
    matt.fillRect(16, 52, 26, 3);
    
    // Lanky arms
    matt.fillStyle(0xff6600, 1);
    matt.fillRect(8, 34, 10, 20);
    matt.fillRect(40, 34, 10, 20);
    
    // Hands
    matt.fillStyle(0xe8c4a0, 1);
    matt.fillRect(8, 52, 10, 8);
    matt.fillRect(40, 52, 10, 8);
    
    // Head (smaller, on long neck)
    matt.fillStyle(0xe8c4a0, 1);
    matt.fillRect(24, 22, 10, 12); // Neck
    matt.fillCircle(29, 12, 13);
    
    // Short messy hair
    matt.fillStyle(0x6a5a4a, 1);
    matt.fillArc(29, 10, 12, Phaser.Math.DegToRad(200), Phaser.Math.DegToRad(340), false);
    // Messy bits
    matt.fillRect(20, 4, 4, 6);
    matt.fillRect(32, 2, 4, 8);
    matt.fillRect(26, 0, 4, 6);
    
    // Worried/desperate face
    matt.fillStyle(0x1a1a1a, 1);
    matt.fillCircle(24, 10, 2); // Eye
    matt.fillCircle(34, 10, 2); // Eye
    // Worried eyebrows
    matt.lineStyle(2, 0x5a4a3a);
    matt.lineBetween(21, 6, 27, 8);
    matt.lineBetween(37, 6, 31, 8);
    // Grimacing mouth
    matt.lineStyle(2, 0x1a1a1a);
    matt.lineBetween(24, 18, 34, 18);
    
    matt.generateTexture('matt', 56, 98);
    matt.destroy();

    // === CREW ICON (for brace button) ===
    const crewIcon = this.make.graphics({ x: 0, y: 0 });
    crewIcon.fillStyle(0xff6600, 0.8);
    crewIcon.fillCircle(20, 20, 18);
    crewIcon.fillStyle(0xe8c4a0, 1);
    crewIcon.fillCircle(20, 14, 8);
    crewIcon.fillStyle(0xcccccc, 1);
    crewIcon.fillRect(12, 24, 16, 3);
    crewIcon.lineStyle(2, 0xffffff, 0.6);
    crewIcon.strokeCircle(20, 20, 17);
    crewIcon.generateTexture('crew-icon', 40, 40);
    crewIcon.destroy();
  }

  create(): void {
    this.scene.start('MenuScene');
  }
}
