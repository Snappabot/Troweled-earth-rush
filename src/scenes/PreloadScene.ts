import Phaser from 'phaser';

/**
 * PreloadScene - Polished 2.5D Isometric Style
 * Fake 3D with proper shading, parallax-ready assets, and visual depth
 */
export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(): void {
    // Load actual TEM logo image
    this.load.image('tem-tree-logo', 'assets/tem-logo.jpg');
    
    // Create procedural assets
    this.createAllAssets();
  }

  private createAllAssets(): void {
    this.createParallaxLayers();
    this.createLogo();
    this.createSideVan();
    this.createVan();
    this.createIsometricRoad();
    this.createObstacles();
    this.createUI();
    this.createCharacters();
    this.createHouses();
    this.createEnvironment();
  }

  // ============================================
  // TROWELED EARTH LOGO - INVERTED (white tree on dark)
  // ============================================
  private createLogo(): void {
    // === INVERTED TREE BADGE (white tree on dark circle) ===
    const badge = this.make.graphics({ x: 0, y: 0 });
    const bw = 60, bh = 60;
    
    // Dark background circle
    badge.fillStyle(0x1a1a1a, 1);
    badge.fillCircle(bw/2, bh/2, 28);
    
    // Outer circle (white)
    badge.lineStyle(2, 0xffffff, 0.9);
    badge.strokeCircle(bw/2, bh/2, 26);
    
    // White bare tree silhouette
    badge.fillStyle(0xffffff, 1);
    // Trunk
    badge.fillRect(27, 32, 6, 20);
    // Main branches going up and out
    badge.lineStyle(3, 0xffffff, 1);
    // Center trunk line
    badge.lineBetween(30, 32, 30, 15);
    // Left branches
    badge.lineBetween(30, 22, 15, 10);
    badge.lineBetween(30, 26, 12, 18);
    badge.lineBetween(30, 18, 20, 8);
    badge.lineBetween(15, 10, 8, 8);
    badge.lineBetween(20, 8, 18, 4);
    // Right branches  
    badge.lineBetween(30, 22, 45, 10);
    badge.lineBetween(30, 26, 48, 18);
    badge.lineBetween(30, 18, 40, 8);
    badge.lineBetween(45, 10, 52, 8);
    badge.lineBetween(40, 8, 42, 4);
    // Extra twigs
    badge.lineStyle(2, 0xffffff, 1);
    badge.lineBetween(12, 18, 6, 22);
    badge.lineBetween(48, 18, 54, 22);
    badge.lineBetween(15, 10, 10, 6);
    badge.lineBetween(45, 10, 50, 6);
    
    badge.generateTexture('tem-badge', bw, bh);
    badge.destroy();
    
    // === COPPER/RUST PANEL FOR VAN ===
    const vanPanel = this.make.graphics({ x: 0, y: 0 });
    const vpw = 100, vph = 50;
    
    // Copper/rust background
    vanPanel.fillStyle(0x8b5a3a, 1);
    vanPanel.fillRoundedRect(0, 0, vpw, vph, 6);
    // Rust texture
    vanPanel.fillStyle(0xa66a4a, 0.5);
    vanPanel.fillEllipse(20, 20, 15, 12);
    vanPanel.fillEllipse(70, 30, 20, 15);
    vanPanel.fillStyle(0x7a4a2a, 0.3);
    vanPanel.fillEllipse(50, 25, 18, 12);
    
    // "TROWELED EARTH" text (white, clear)
    vanPanel.fillStyle(0xffffff, 1);
    vanPanel.fillRect(8, 10, 84, 12);
    vanPanel.fillRect(8, 26, 84, 16);
    
    vanPanel.generateTexture('van-panel', vpw, vph);
    vanPanel.destroy();
  }

  // ============================================
  // PARALLAX BACKGROUND LAYERS
  // ============================================
  private createParallaxLayers(): void {
    const w = 500, h = 900;
    
    // === SKY GRADIENT ===
    const sky = this.make.graphics({ x: 0, y: 0 });
    // Gradient from light blue to pale
    for (let y = 0; y < h; y++) {
      const t = y / h;
      const r = Math.floor(135 + t * 80);
      const g = Math.floor(180 + t * 50);
      const b = Math.floor(235 + t * 20);
      sky.fillStyle(Phaser.Display.Color.GetColor(r, g, b), 1);
      sky.fillRect(0, y, w, 1);
    }
    // Subtle clouds
    sky.fillStyle(0xffffff, 0.3);
    sky.fillEllipse(100, 80, 80, 30);
    sky.fillEllipse(150, 90, 60, 25);
    sky.fillEllipse(350, 120, 90, 35);
    sky.fillEllipse(400, 100, 50, 20);
    sky.fillStyle(0xffffff, 0.2);
    sky.fillEllipse(250, 150, 100, 40);
    sky.generateTexture('sky', w, h);
    sky.destroy();

    // === DISTANT CITY SILHOUETTE ===
    const city = this.make.graphics({ x: 0, y: 0 });
    city.fillStyle(0x6a7a8a, 0.4);
    // Skyline silhouette
    const buildings = [
      { x: 0, w: 40, h: 60 }, { x: 35, w: 25, h: 90 }, { x: 55, w: 35, h: 70 },
      { x: 85, w: 20, h: 110 }, { x: 100, w: 45, h: 80 }, { x: 140, w: 30, h: 100 },
      { x: 165, w: 50, h: 65 }, { x: 210, w: 25, h: 120 }, { x: 230, w: 40, h: 85 },
      { x: 265, w: 35, h: 95 }, { x: 295, w: 55, h: 75 }, { x: 345, w: 30, h: 105 },
      { x: 370, w: 45, h: 60 }, { x: 410, w: 35, h: 90 }, { x: 440, w: 60, h: 70 },
    ];
    buildings.forEach(b => {
      city.fillRect(b.x, 150 - b.h, b.w, b.h);
      // Window lights
      city.fillStyle(0xffffcc, 0.15);
      for (let y = 155 - b.h; y < 145; y += 12) {
        for (let x = b.x + 4; x < b.x + b.w - 4; x += 8) {
          if (Math.random() > 0.3) city.fillRect(x, y, 4, 6);
        }
      }
      city.fillStyle(0x6a7a8a, 0.4);
    });
    city.generateTexture('city-silhouette', w, 150);
    city.destroy();

    // === HILLS/TREES MID LAYER ===
    const hills = this.make.graphics({ x: 0, y: 0 });
    // Rolling hills
    hills.fillStyle(0x4a6a3a, 0.6);
    hills.beginPath();
    hills.moveTo(0, 100);
    for (let x = 0; x <= w; x += 20) {
      const y = 60 + Math.sin(x * 0.02) * 20 + Math.sin(x * 0.05) * 10;
      hills.lineTo(x, y);
    }
    hills.lineTo(w, 100);
    hills.lineTo(0, 100);
    hills.closePath();
    hills.fill();
    
    // Trees on hills
    hills.fillStyle(0x3a5a2a, 0.8);
    for (let i = 0; i < 30; i++) {
      const x = Phaser.Math.Between(10, w - 10);
      const baseY = 55 + Math.sin(x * 0.02) * 20 + Math.sin(x * 0.05) * 10;
      const h = Phaser.Math.Between(15, 35);
      // Tree shape
      hills.beginPath();
      hills.moveTo(x, baseY);
      hills.lineTo(x - h/3, baseY + h);
      hills.lineTo(x + h/3, baseY + h);
      hills.closePath();
      hills.fill();
    }
    hills.generateTexture('hills', w, 100);
    hills.destroy();
  }

  // ============================================
  // SIDE-VIEW VAN (for menu - shows branding)
  // ============================================
  private createSideVan(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 200, h = 80;
    
    // === GROUND SHADOW ===
    g.fillStyle(0x000000, 0.2);
    g.fillEllipse(w/2, h - 4, w - 20, 12);
    
    // === WHEELS ===
    // Rear wheel
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(45, h - 15, 14);
    g.fillStyle(0x3a3a3a, 1);
    g.fillCircle(45, h - 15, 10);
    g.fillStyle(0x5a5a5a, 1);
    g.fillCircle(45, h - 15, 6);
    // Front wheel
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(155, h - 15, 14);
    g.fillStyle(0x3a3a3a, 1);
    g.fillCircle(155, h - 15, 10);
    g.fillStyle(0x5a5a5a, 1);
    g.fillCircle(155, h - 15, 6);
    
    // === VAN BODY (JET BLACK) ===
    // Main body
    g.fillStyle(0x0a0a0a, 1);
    g.fillRoundedRect(10, 15, 180, 48, 6);
    
    // Roof
    g.fillStyle(0x050505, 1);
    g.fillRoundedRect(15, 10, 170, 8, 4);
    
    // === ROOF RACK ===
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(20, 6, 160, 4);
    g.fillRect(30, 2, 4, 8);
    g.fillRect(80, 2, 4, 8);
    g.fillRect(130, 2, 4, 8);
    g.fillRect(166, 2, 4, 8);
    
    // === COPPER/RUST BRANDING PANEL ===
    g.fillStyle(0x8b5a3a, 1);
    g.fillRoundedRect(22, 20, 110, 38, 4);
    // Rust texture
    g.fillStyle(0xa66a4a, 0.5);
    g.fillEllipse(40, 32, 15, 10);
    g.fillEllipse(90, 42, 20, 12);
    g.fillStyle(0x7a4a2a, 0.4);
    g.fillEllipse(65, 38, 18, 10);
    
    // Tree logo - INVERTED (white tree on dark circle) - matching actual TEM
    g.fillStyle(0x0a0a0a, 1);
    g.fillCircle(38, 38, 14);
    g.lineStyle(2, 0xffffff, 1);
    g.strokeCircle(38, 38, 13);
    // White bare tree - full branch structure like actual logo
    g.lineStyle(2.5, 0xffffff, 1);
    // Trunk
    g.lineBetween(38, 48, 38, 30);
    // Main left branch curving out
    g.lineBetween(38, 33, 24, 26);
    g.lineBetween(24, 26, 19, 28);
    g.lineBetween(24, 26, 20, 23);
    // Main right branch curving out
    g.lineBetween(38, 33, 52, 26);
    g.lineBetween(52, 26, 57, 28);
    g.lineBetween(52, 26, 56, 23);
    // Middle branches
    g.lineBetween(38, 36, 27, 30);
    g.lineBetween(38, 36, 49, 30);
    g.lineStyle(1.5, 0xffffff, 1);
    g.lineBetween(27, 30, 23, 32);
    g.lineBetween(49, 30, 53, 32);
    // Top twigs
    g.lineBetween(38, 30, 32, 26);
    g.lineBetween(38, 30, 44, 26);
    
    // "Troweled Earth" text area (white)
    g.fillStyle(0xffffff, 1);
    g.fillRoundedRect(54, 24, 72, 14, 2);
    g.fillRoundedRect(54, 42, 72, 10, 2);
    
    // === WINDOWS ===
    // Side windows (dark tint)
    g.fillStyle(0x1a3a5a, 0.9);
    g.fillRoundedRect(140, 20, 44, 25, 3);
    // Window reflection
    g.fillStyle(0x3a6a9a, 0.4);
    g.beginPath();
    g.moveTo(142, 22);
    g.lineTo(155, 22);
    g.lineTo(142, 40);
    g.closePath();
    g.fill();
    
    // === FRONT ===
    // Headlight
    g.fillStyle(0xffffee, 1);
    g.fillRoundedRect(182, 35, 6, 12, 2);
    g.fillStyle(0xffffaa, 1);
    g.fillRect(184, 38, 3, 6);
    
    // Front bumper
    g.fillStyle(0x2a2a2a, 1);
    g.fillRoundedRect(185, 50, 8, 12, 2);
    
    // === REAR ===
    // Tail light
    g.fillStyle(0xcc2222, 1);
    g.fillRoundedRect(12, 40, 6, 10, 2);
    
    // Door line
    g.lineStyle(1, 0x1a1a1a, 0.6);
    g.lineBetween(135, 18, 135, 60);
    
    // Door handle
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(138, 38, 8, 4);
    
    g.generateTexture('van-side', w, h);
    g.destroy();
  }

  // ============================================
  // ISOMETRIC VAN - 3/4 View with full shading
  // ============================================
  private createVan(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 80, h = 130;
    
    // === GROUND SHADOW (soft) ===
    g.fillStyle(0x000000, 0.25);
    g.fillEllipse(w/2 + 5, h - 6, w - 8, 18);
    g.fillStyle(0x000000, 0.15);
    g.fillEllipse(w/2 + 3, h - 6, w + 5, 24);
    
    // === WHEELS (3D depth) ===
    // Rear wheels (partially hidden)
    g.fillStyle(0x1a1a1a, 1);
    g.fillEllipse(12, h - 35, 16, 22);
    g.fillEllipse(w - 12, h - 35, 16, 22);
    // Wheel rims
    g.fillStyle(0x4a4a4a, 1);
    g.fillEllipse(12, h - 35, 10, 14);
    g.fillStyle(0x6a6a6a, 1);
    g.fillEllipse(12, h - 36, 6, 8);
    g.fillEllipse(w - 12, h - 35, 10, 14);
    g.fillStyle(0x6a6a6a, 1);
    g.fillEllipse(w - 12, h - 36, 6, 8);
    
    // Front wheels
    g.fillStyle(0x1a1a1a, 1);
    g.fillEllipse(12, 28, 16, 22);
    g.fillEllipse(w - 12, 28, 16, 22);
    g.fillStyle(0x4a4a4a, 1);
    g.fillEllipse(12, 28, 10, 14);
    g.fillEllipse(w - 12, 28, 10, 14);
    g.fillStyle(0x6a6a6a, 1);
    g.fillEllipse(12, 27, 6, 8);
    g.fillEllipse(w - 12, 27, 6, 8);
    
    // === VAN BODY - JET BLACK ===
    // Main body
    g.fillStyle(0x0a0a0a, 1);
    g.fillRoundedRect(8, 12, w - 16, h - 30, 8);
    
    // Left side highlight (subtle)
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(8, 12, 12, h - 30, { tl: 8, bl: 8, tr: 0, br: 0 });
    
    // Right side shadow
    g.fillStyle(0x050505, 1);
    g.fillRoundedRect(w - 20, 12, 12, h - 30, { tl: 0, bl: 0, tr: 8, br: 8 });
    
    // Top reflection (subtle shine)
    g.fillStyle(0x2a2a2a, 0.3);
    g.fillRect(12, 14, w - 24, 8);
    
    // === HOOD (front) ===
    g.fillStyle(0x0a0a0a, 1);
    g.fillRoundedRect(12, 6, w - 24, 18, 6);
    // Hood shine (subtle)
    g.fillStyle(0x1a1a1a, 0.4);
    g.fillRoundedRect(16, 9, w - 32, 6, 3);
    
    // === WINDSCREEN (glass with reflection) ===
    g.fillStyle(0x1a3a5a, 1);
    g.fillRoundedRect(14, 12, w - 28, 24, 4);
    // Glass gradient/reflection
    g.fillStyle(0x3a6a9a, 0.6);
    g.beginPath();
    g.moveTo(16, 14);
    g.lineTo(32, 14);
    g.lineTo(16, 32);
    g.closePath();
    g.fill();
    // Wiper area hint
    g.lineStyle(1, 0x2a4a6a, 0.5);
    g.lineBetween(20, 30, w/2, 18);
    g.lineBetween(w - 20, 30, w/2, 18);
    
    // === ROOF RACK ===
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(10, 38, w - 20, 5);
    g.fillRect(10, 52, w - 20, 5);
    // Rack bars
    g.fillRect(14, 38, 4, 19);
    g.fillRect(w - 18, 38, 4, 19);
    g.fillRect(w/2 - 2, 38, 4, 19);
    // Pipes/materials on rack
    g.fillStyle(0x8a7a6a, 1);
    g.fillRoundedRect(18, 40, w - 36, 12, 3);
    g.fillStyle(0x9a8a7a, 0.5);
    g.fillRect(20, 42, w - 40, 3);
    
    // === SIDE PANEL - Copper/Rust TEM branding ===
    // Panel base
    g.fillStyle(0x8b5a3a, 1);
    g.fillRect(12, 60, w - 24, 35);
    // Rust texture
    g.fillStyle(0xa66a4a, 0.6);
    g.fillEllipse(25, 72, 12, 8);
    g.fillEllipse(45, 80, 15, 10);
    g.fillEllipse(60, 70, 10, 7);
    g.fillStyle(0x7a4a2a, 0.4);
    g.fillEllipse(35, 78, 10, 8);
    g.fillEllipse(52, 73, 8, 6);
    // Patina streaks
    g.fillStyle(0x6a9a7a, 0.2);
    g.fillRect(20, 62, 3, 30);
    g.fillRect(50, 65, 2, 25);
    
    // "TROWELED EARTH" text blocks (clearer)
    g.fillStyle(0xffffff, 1);
    g.fillRoundedRect(14, 63, 52, 9, 2);
    g.fillRoundedRect(14, 74, 52, 12, 2);
    
    // Tree logo circle (matching actual TEM logo)
    g.fillStyle(0xf5f0e8, 1);
    g.fillCircle(w - 22, 78, 10);
    g.lineStyle(2, 0x1a1a1a, 1);
    g.strokeCircle(w - 22, 78, 9);
    // Bare tree branches
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(w - 24, 80, 4, 7);
    g.lineStyle(1.5, 0x1a1a1a, 1);
    g.lineBetween(w - 22, 80, w - 22, 74);
    g.lineBetween(w - 22, 76, w - 28, 72);
    g.lineBetween(w - 22, 76, w - 16, 72);
    g.lineBetween(w - 22, 78, w - 26, 75);
    g.lineBetween(w - 22, 78, w - 18, 75);
    
    // === HEADLIGHTS ===
    g.fillStyle(0xffffee, 1);
    g.fillEllipse(22, 12, 6, 5);
    g.fillEllipse(w - 22, 12, 6, 5);
    // Inner glow
    g.fillStyle(0xffffaa, 1);
    g.fillEllipse(22, 12, 3, 3);
    g.fillEllipse(w - 22, 12, 3, 3);
    
    // === TAIL LIGHTS ===
    g.fillStyle(0xcc2222, 1);
    g.fillRoundedRect(14, h - 22, 16, 7, 2);
    g.fillRoundedRect(w - 30, h - 22, 16, 7, 2);
    // Brake glow
    g.fillStyle(0xff4444, 0.6);
    g.fillRect(16, h - 20, 12, 3);
    g.fillRect(w - 28, h - 20, 12, 3);
    
    // === DOOR LINES ===
    g.lineStyle(1, 0x1a1a1a, 0.6);
    g.lineBetween(w/2, 40, w/2, h - 25);
    // Door handles
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(w/2 - 10, 75, 8, 3);
    g.fillRect(w/2 + 2, 75, 8, 3);
    
    // === SIDE MIRRORS ===
    g.fillStyle(0x25252a, 1);
    g.fillRect(2, 20, 8, 12);
    g.fillRect(w - 10, 20, 8, 12);
    g.fillStyle(0x4a6a8a, 0.5);
    g.fillRect(3, 22, 6, 8);
    g.fillRect(w - 9, 22, 6, 8);
    
    g.generateTexture('van', w, h);
    g.destroy();
  }

  // ============================================
  // ISOMETRIC ROAD TILE with perspective
  // ============================================
  private createIsometricRoad(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 220, h = 220;
    
    // === GRASS VERGE (left) ===
    g.fillStyle(0x4a7a3a, 1);
    g.fillRect(0, 0, 30, h);
    g.fillStyle(0x5a8a4a, 0.6);
    for (let i = 0; i < 15; i++) {
      g.fillCircle(Phaser.Math.Between(3, 27), Phaser.Math.Between(5, h - 5), Phaser.Math.Between(5, 12));
    }
    // Kerb
    g.fillStyle(0x9a9a8a, 1);
    g.fillRect(28, 0, 8, h);
    g.fillStyle(0xaaaaaa, 1);
    g.fillRect(28, 0, 3, h);
    
    // === GRASS VERGE (right) ===
    g.fillStyle(0x4a7a3a, 1);
    g.fillRect(w - 30, 0, 30, h);
    g.fillStyle(0x5a8a4a, 0.6);
    for (let i = 0; i < 15; i++) {
      g.fillCircle(Phaser.Math.Between(w - 27, w - 3), Phaser.Math.Between(5, h - 5), Phaser.Math.Between(5, 12));
    }
    // Kerb
    g.fillStyle(0x9a9a8a, 1);
    g.fillRect(w - 36, 0, 8, h);
    g.fillStyle(0x7a7a7a, 1);
    g.fillRect(w - 31, 0, 3, h);
    
    // === ROAD SURFACE (4 LANES) ===
    // Base asphalt
    g.fillStyle(0x3a3a3a, 1);
    g.fillRect(36, 0, w - 72, h);
    
    // Asphalt texture (subtle noise)
    g.fillStyle(0x2d2d2d, 0.4);
    for (let i = 0; i < 40; i++) {
      g.fillRect(
        Phaser.Math.Between(38, w - 40),
        Phaser.Math.Between(2, h - 2),
        Phaser.Math.Between(8, 25),
        Phaser.Math.Between(8, 20)
      );
    }
    g.fillStyle(0x454545, 0.3);
    for (let i = 0; i < 25; i++) {
      g.fillRect(
        Phaser.Math.Between(40, w - 45),
        Phaser.Math.Between(5, h - 5),
        Phaser.Math.Between(5, 15),
        Phaser.Math.Between(5, 12)
      );
    }
    
    // Tar patches/repairs
    g.fillStyle(0x2a2a2a, 0.6);
    g.fillRoundedRect(50, 30, 30, 40, 4);
    g.fillRoundedRect(140, 100, 35, 25, 3);
    g.fillRoundedRect(70, 160, 25, 30, 3);
    
    // === ROAD MARKINGS (4 LANES) ===
    const laneWidth = (w - 72) / 4;
    
    // CENTER DOUBLE YELLOW LINE (divides directions)
    g.fillStyle(0xddcc44, 1);
    g.fillRect(w/2 - 5, 0, 4, h);
    g.fillRect(w/2 + 1, 0, 4, h);
    
    // Lane divider - left side (between lanes 1 & 2) - white dashed
    g.fillStyle(0xeeeeee, 1);
    for (let y = 0; y < h; y += 40) {
      g.fillRect(36 + laneWidth - 2, y, 4, 25);
    }
    
    // Lane divider - right side (between lanes 3 & 4) - white dashed
    for (let y = 0; y < h; y += 40) {
      g.fillRect(w - 36 - laneWidth - 2, y, 4, 25);
    }
    
    // Edge lines (white solid)
    g.fillStyle(0xeeeeee, 1);
    g.fillRect(38, 0, 4, h);
    g.fillRect(w - 42, 0, 4, h);
    
    // === DRAIN ===
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(42, h/2 - 15, 14, 30);
    g.lineStyle(2, 0x3a3a3a);
    for (let y = h/2 - 12; y < h/2 + 12; y += 5) {
      g.lineBetween(44, y, 54, y);
    }
    
    g.generateTexture('road', w, h);
    g.destroy();

    // === ROAD WITH BEND (left curve) ===
    const bendL = this.make.graphics({ x: 0, y: 0 });
    bendL.fillStyle(0x4a7a3a, 1);
    bendL.fillRect(0, 0, 50, h);
    bendL.fillStyle(0x3a3a3a, 1);
    bendL.fillRect(50, 0, w - 80, h);
    bendL.fillStyle(0x4a7a3a, 1);
    bendL.fillRect(w - 30, 0, 30, h);
    // Curve indication
    bendL.fillStyle(0xddcc44, 1);
    bendL.beginPath();
    bendL.arc(w - 30, h/2, w - 80, Math.PI * 0.6, Math.PI * 0.4, true);
    bendL.strokePath();
    bendL.generateTexture('road-bend-left', w, h);
    bendL.destroy();

    // === ROAD WITH BEND (right curve) ===
    const bendR = this.make.graphics({ x: 0, y: 0 });
    bendR.fillStyle(0x4a7a3a, 1);
    bendR.fillRect(0, 0, 30, h);
    bendR.fillStyle(0x3a3a3a, 1);
    bendR.fillRect(30, 0, w - 80, h);
    bendR.fillStyle(0x4a7a3a, 1);
    bendR.fillRect(w - 50, 0, 50, h);
    bendR.generateTexture('road-bend-right', w, h);
    bendR.destroy();
  }

  // ============================================
  // ENVIRONMENT PROPS
  // ============================================
  private createEnvironment(): void {
    // === STREET LAMP ===
    const lamp = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    lamp.fillStyle(0x000000, 0.2);
    lamp.fillEllipse(20, 95, 25, 8);
    // Pole
    lamp.fillStyle(0x3a3a3a, 1);
    lamp.fillRect(17, 20, 6, 75);
    lamp.fillStyle(0x4a4a4a, 1);
    lamp.fillRect(17, 20, 2, 75);
    // Arm
    lamp.fillStyle(0x3a3a3a, 1);
    lamp.fillRect(10, 18, 25, 5);
    // Light fixture
    lamp.fillStyle(0x5a5a5a, 1);
    lamp.fillRoundedRect(5, 10, 18, 12, 3);
    // Light glow
    lamp.fillStyle(0xffffcc, 0.8);
    lamp.fillEllipse(14, 22, 12, 6);
    lamp.generateTexture('streetlamp', 40, 100);
    lamp.destroy();

    // === TREE ===
    const tree = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    tree.fillStyle(0x000000, 0.2);
    tree.fillEllipse(35, 115, 40, 12);
    // Trunk
    tree.fillStyle(0x5a4030, 1);
    tree.fillRect(30, 60, 12, 55);
    tree.fillStyle(0x6a5040, 1);
    tree.fillRect(30, 60, 4, 55);
    // Foliage layers
    tree.fillStyle(0x2a5a2a, 1);
    tree.fillEllipse(36, 35, 35, 40);
    tree.fillStyle(0x3a6a3a, 1);
    tree.fillEllipse(32, 30, 28, 32);
    tree.fillEllipse(42, 38, 25, 28);
    tree.fillStyle(0x4a7a4a, 0.7);
    tree.fillEllipse(30, 25, 18, 22);
    tree.fillEllipse(44, 32, 16, 20);
    tree.generateTexture('tree', 75, 120);
    tree.destroy();

    // === BUSH ===
    const bush = this.make.graphics({ x: 0, y: 0 });
    bush.fillStyle(0x000000, 0.15);
    bush.fillEllipse(25, 45, 28, 8);
    bush.fillStyle(0x3a6a3a, 1);
    bush.fillEllipse(25, 28, 24, 20);
    bush.fillStyle(0x4a7a4a, 0.8);
    bush.fillEllipse(20, 25, 16, 14);
    bush.fillEllipse(32, 30, 14, 12);
    bush.fillStyle(0x5a8a5a, 0.5);
    bush.fillEllipse(25, 22, 10, 10);
    bush.generateTexture('bush', 50, 50);
    bush.destroy();

    // === MAILBOX ===
    const mailbox = this.make.graphics({ x: 0, y: 0 });
    mailbox.fillStyle(0x000000, 0.2);
    mailbox.fillEllipse(15, 58, 14, 5);
    // Post
    mailbox.fillStyle(0x8a7a6a, 1);
    mailbox.fillRect(12, 25, 6, 33);
    // Box
    mailbox.fillStyle(0xcc2222, 1);
    mailbox.fillRoundedRect(4, 8, 22, 20, 4);
    mailbox.fillStyle(0xdd3333, 1);
    mailbox.fillRect(4, 8, 8, 18);
    // Flag
    mailbox.fillStyle(0xcc2222, 1);
    mailbox.fillRect(24, 12, 6, 3);
    mailbox.generateTexture('mailbox', 35, 65);
    mailbox.destroy();

    // === FIRE HYDRANT ===
    const hydrant = this.make.graphics({ x: 0, y: 0 });
    hydrant.fillStyle(0x000000, 0.2);
    hydrant.fillEllipse(18, 48, 16, 6);
    hydrant.fillStyle(0xcc2222, 1);
    hydrant.fillRoundedRect(8, 15, 20, 33, 4);
    hydrant.fillStyle(0xdd4444, 1);
    hydrant.fillRect(8, 15, 6, 30);
    // Cap
    hydrant.fillStyle(0xaa1111, 1);
    hydrant.fillRoundedRect(6, 8, 24, 10, 3);
    // Side outlets
    hydrant.fillStyle(0xbb2222, 1);
    hydrant.fillRect(2, 25, 8, 8);
    hydrant.fillRect(26, 25, 8, 8);
    hydrant.generateTexture('hydrant', 36, 55);
    hydrant.destroy();
  }

  // ============================================
  // OBSTACLES - High detail with proper shading
  // ============================================
  private createObstacles(): void {
    // === KANGAROO ===
    const roo = this.make.graphics({ x: 0, y: 0 });
    const rooW = 65, rooH = 100;
    // Shadow
    roo.fillStyle(0x000000, 0.3);
    roo.fillEllipse(rooW/2, rooH - 8, 45, 14);
    // Tail
    roo.fillStyle(0x7a5a3a, 1);
    roo.fillEllipse(15, 70, 12, 30);
    roo.fillStyle(0x8a6a4a, 0.6);
    roo.fillEllipse(12, 68, 6, 20);
    // Body
    roo.fillStyle(0x8a6a4a, 1);
    roo.fillEllipse(rooW/2, 55, 26, 38);
    // Body highlight
    roo.fillStyle(0x9a7a5a, 1);
    roo.fillEllipse(rooW/2 - 8, 52, 14, 28);
    // Body shadow
    roo.fillStyle(0x6a4a2a, 0.6);
    roo.fillEllipse(rooW/2 + 10, 58, 12, 25);
    // Legs
    roo.fillStyle(0x7a5a3a, 1);
    roo.fillEllipse(24, 78, 11, 20);
    roo.fillEllipse(42, 78, 11, 20);
    // Feet
    roo.fillStyle(0x6a4a2a, 1);
    roo.fillEllipse(22, 92, 12, 7);
    roo.fillEllipse(44, 92, 12, 7);
    // Head
    roo.fillStyle(0x9a7a5a, 1);
    roo.fillEllipse(rooW/2, 18, 15, 18);
    // Ears
    roo.fillStyle(0x8a6a4a, 1);
    roo.fillEllipse(22, 5, 6, 14);
    roo.fillEllipse(44, 5, 6, 14);
    roo.fillStyle(0xc4a484, 0.7);
    roo.fillEllipse(22, 7, 3, 8);
    roo.fillEllipse(44, 7, 3, 8);
    // Face
    roo.fillStyle(0x1a1a1a, 1);
    roo.fillCircle(27, 14, 3);
    roo.fillCircle(39, 14, 3);
    roo.fillStyle(0xffffff, 1);
    roo.fillCircle(26, 13, 1);
    roo.fillCircle(38, 13, 1);
    roo.fillStyle(0x4a3a2a, 1);
    roo.fillEllipse(rooW/2, 25, 5, 4);
    // Pouch
    roo.fillStyle(0xa48a6a, 1);
    roo.fillEllipse(rooW/2, 62, 12, 10);
    roo.generateTexture('kangaroo', rooW, rooH);
    roo.destroy();

    // === ROAD CONE ===
    const cone = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    cone.fillStyle(0x000000, 0.25);
    cone.fillEllipse(28, 58, 30, 10);
    // Base
    cone.fillStyle(0x2a2a2a, 1);
    cone.fillEllipse(28, 52, 28, 8);
    // Cone body with gradient
    cone.fillStyle(0xff6600, 1);
    cone.beginPath();
    cone.moveTo(28, 8);
    cone.lineTo(6, 50);
    cone.lineTo(50, 50);
    cone.closePath();
    cone.fill();
    // Highlight
    cone.fillStyle(0xff8833, 1);
    cone.beginPath();
    cone.moveTo(28, 8);
    cone.lineTo(14, 50);
    cone.lineTo(6, 50);
    cone.closePath();
    cone.fill();
    // Shadow side
    cone.fillStyle(0xcc4400, 0.6);
    cone.beginPath();
    cone.moveTo(28, 8);
    cone.lineTo(42, 50);
    cone.lineTo(50, 50);
    cone.closePath();
    cone.fill();
    // Stripes
    cone.fillStyle(0xffffff, 1);
    cone.fillRect(12, 18, 32, 6);
    cone.fillRect(9, 34, 38, 6);
    // Top cap
    cone.fillStyle(0xff4400, 1);
    cone.fillCircle(28, 8, 5);
    cone.fillStyle(0xff7733, 1);
    cone.fillCircle(27, 7, 2);
    cone.generateTexture('cone', 56, 65);
    cone.destroy();

    // === MEAT PIE ===
    const pie = this.make.graphics({ x: 0, y: 0 });
    pie.fillStyle(0x000000, 0.2);
    pie.fillEllipse(28, 50, 28, 10);
    // Wrapper/container
    pie.fillStyle(0xeeddcc, 1);
    pie.fillEllipse(28, 28, 26, 22);
    // Pie crust
    pie.fillStyle(0xd4a57a, 1);
    pie.fillEllipse(28, 25, 23, 18);
    // Crispy top
    pie.fillStyle(0xe4b58a, 0.8);
    pie.fillEllipse(24, 22, 15, 12);
    // Filling visible
    pie.fillStyle(0x6a4a2a, 1);
    pie.fillEllipse(28, 28, 12, 8);
    pie.fillStyle(0x8a5a3a, 0.6);
    pie.fillEllipse(26, 26, 6, 4);
    // Sauce
    pie.fillStyle(0xcc2222, 1);
    pie.fillEllipse(32, 20, 8, 5);
    pie.generateTexture('pie', 56, 55);
    pie.destroy();

    // === BEACH BALL ===
    const ball = this.make.graphics({ x: 0, y: 0 });
    ball.fillStyle(0x000000, 0.2);
    ball.fillEllipse(30, 58, 28, 10);
    // Ball base
    ball.fillStyle(0xffffff, 1);
    ball.fillCircle(30, 30, 26);
    // Colored segments
    const colors = [0xff4444, 0x4444ff, 0xffff44, 0x44ff44];
    for (let i = 0; i < 4; i++) {
      ball.fillStyle(colors[i], 1);
      ball.slice(30, 30, 26, (i * Math.PI / 2) - 0.3, (i * Math.PI / 2) + 0.6, false);
      ball.fillPath();
    }
    // Shine
    ball.fillStyle(0xffffff, 0.6);
    ball.fillEllipse(22, 20, 10, 8);
    ball.generateTexture('beachball', 60, 65);
    ball.destroy();

    // === CHOOK (chicken) ===
    const chook = this.make.graphics({ x: 0, y: 0 });
    chook.fillStyle(0x000000, 0.2);
    chook.fillEllipse(28, 58, 30, 10);
    // Body
    chook.fillStyle(0xe8d8c8, 1);
    chook.fillEllipse(28, 38, 22, 20);
    chook.fillStyle(0xf0e8e0, 0.7);
    chook.fillEllipse(24, 35, 14, 14);
    // Tail feathers
    chook.fillStyle(0xd8c8b8, 1);
    chook.fillEllipse(8, 38, 10, 15);
    // Head
    chook.fillStyle(0xe8d8c8, 1);
    chook.fillCircle(42, 22, 12);
    // Comb
    chook.fillStyle(0xcc3333, 1);
    chook.fillCircle(42, 10, 5);
    chook.fillCircle(38, 12, 4);
    chook.fillCircle(46, 12, 4);
    // Wattle
    chook.fillStyle(0xcc3333, 1);
    chook.fillEllipse(46, 28, 4, 6);
    // Beak
    chook.fillStyle(0xffaa44, 1);
    chook.beginPath();
    chook.moveTo(52, 20);
    chook.lineTo(58, 23);
    chook.lineTo(52, 26);
    chook.closePath();
    chook.fill();
    // Eye
    chook.fillStyle(0x1a1a1a, 1);
    chook.fillCircle(44, 20, 3);
    chook.fillStyle(0xffffff, 1);
    chook.fillCircle(43, 19, 1);
    // Legs
    chook.fillStyle(0xffaa44, 1);
    chook.fillRect(22, 52, 3, 10);
    chook.fillRect(32, 52, 3, 10);
    chook.generateTexture('chook', 60, 65);
    chook.destroy();

    // === PEDESTRIAN ===
    const ped = this.make.graphics({ x: 0, y: 0 });
    ped.fillStyle(0x000000, 0.25);
    ped.fillEllipse(25, 88, 24, 8);
    // Legs
    ped.fillStyle(0x3a5a8a, 1);
    ped.fillRoundedRect(16, 55, 10, 32, 4);
    ped.fillRoundedRect(28, 55, 10, 32, 4);
    // Shoes
    ped.fillStyle(0x2a2a2a, 1);
    ped.fillRoundedRect(14, 82, 14, 8, 3);
    ped.fillRoundedRect(28, 82, 14, 8, 3);
    // Torso
    ped.fillStyle(0x4a7aaa, 1);
    ped.fillRoundedRect(12, 28, 30, 30, 6);
    ped.fillStyle(0x5a8aba, 0.6);
    ped.fillRect(12, 30, 10, 26);
    // Arms
    ped.fillStyle(0x4a7aaa, 1);
    ped.fillRoundedRect(4, 32, 10, 22, 4);
    ped.fillRoundedRect(40, 32, 10, 22, 4);
    // Hands
    ped.fillStyle(0xe8c8a8, 1);
    ped.fillCircle(9, 54, 5);
    ped.fillCircle(45, 54, 5);
    // Phone in hand
    ped.fillStyle(0x1a1a1a, 1);
    ped.fillRoundedRect(42, 45, 8, 14, 2);
    ped.fillStyle(0x4a8aca, 0.8);
    ped.fillRect(43, 47, 6, 8);
    // Head
    ped.fillStyle(0xe8c8a8, 1);
    ped.fillCircle(27, 15, 14);
    // Hair
    ped.fillStyle(0x4a3a2a, 1);
    ped.slice(27, 13, 13, Math.PI, 0, false);
    ped.fillPath();
    // Face
    ped.fillStyle(0x1a1a1a, 1);
    ped.fillCircle(22, 14, 2);
    ped.fillCircle(32, 14, 2);
    ped.lineStyle(1, 0x8a6a5a);
    ped.lineBetween(24, 22, 30, 22);
    ped.generateTexture('pedestrian', 55, 95);
    ped.destroy();

    // === PUDDLE ===
    const puddle = this.make.graphics({ x: 0, y: 0 });
    puddle.fillStyle(0x3a5a7a, 0.6);
    puddle.fillEllipse(40, 25, 38, 22);
    puddle.fillStyle(0x4a6a8a, 0.4);
    puddle.fillEllipse(35, 22, 25, 15);
    puddle.fillStyle(0x8abadd, 0.3);
    puddle.fillEllipse(30, 20, 12, 8);
    puddle.generateTexture('puddle', 80, 50);
    puddle.destroy();

    // === OIL SLICK ===
    const oil = this.make.graphics({ x: 0, y: 0 });
    oil.fillStyle(0x1a1a2a, 0.7);
    oil.fillEllipse(45, 28, 42, 25);
    // Rainbow sheen
    oil.fillStyle(0x8a4a8a, 0.3);
    oil.fillEllipse(40, 25, 30, 18);
    oil.fillStyle(0x4a8a4a, 0.2);
    oil.fillEllipse(50, 30, 25, 14);
    oil.fillStyle(0x8a8a4a, 0.2);
    oil.fillEllipse(35, 28, 20, 12);
    oil.generateTexture('oil', 90, 55);
    oil.destroy();

    // === RAMP ===
    const ramp = this.make.graphics({ x: 0, y: 0 });
    ramp.fillStyle(0x000000, 0.2);
    ramp.fillRect(5, 45, 70, 10);
    // Ramp body
    ramp.fillStyle(0xaa8844, 1);
    ramp.beginPath();
    ramp.moveTo(5, 50);
    ramp.lineTo(5, 30);
    ramp.lineTo(75, 50);
    ramp.closePath();
    ramp.fill();
    // Highlight
    ramp.fillStyle(0xcc9955, 1);
    ramp.beginPath();
    ramp.moveTo(5, 50);
    ramp.lineTo(5, 35);
    ramp.lineTo(40, 50);
    ramp.closePath();
    ramp.fill();
    // Edge stripe
    ramp.fillStyle(0xffff44, 1);
    ramp.lineStyle(3, 0xffff44);
    ramp.lineBetween(5, 30, 75, 50);
    ramp.generateTexture('ramp', 80, 55);
    ramp.destroy();

    // === EMU ===
    const emu = this.make.graphics({ x: 0, y: 0 });
    emu.fillStyle(0x000000, 0.2);
    emu.fillEllipse(35, 115, 35, 12);
    // Body
    emu.fillStyle(0x4a4a4a, 1);
    emu.fillEllipse(35, 70, 28, 35);
    emu.fillStyle(0x5a5a5a, 0.7);
    emu.fillEllipse(30, 65, 18, 25);
    // Feather texture
    emu.fillStyle(0x3a3a3a, 0.5);
    for (let i = 0; i < 8; i++) {
      emu.fillEllipse(25 + i * 4, 60 + (i % 2) * 10, 6, 12);
    }
    // Legs
    emu.fillStyle(0x8a7a6a, 1);
    emu.fillRect(25, 95, 5, 22);
    emu.fillRect(40, 95, 5, 22);
    // Feet
    emu.fillStyle(0x6a5a4a, 1);
    emu.fillRect(20, 113, 15, 5);
    emu.fillRect(38, 113, 15, 5);
    // Neck
    emu.fillStyle(0x5a5a5a, 1);
    emu.fillRect(32, 20, 8, 45);
    emu.fillStyle(0x6a6a6a, 0.5);
    emu.fillRect(32, 20, 3, 45);
    // Head
    emu.fillStyle(0x4a6a7a, 1);
    emu.fillEllipse(36, 15, 12, 15);
    // Beak
    emu.fillStyle(0x3a3a3a, 1);
    emu.beginPath();
    emu.moveTo(42, 12);
    emu.lineTo(55, 15);
    emu.lineTo(42, 18);
    emu.closePath();
    emu.fill();
    // Eye
    emu.fillStyle(0xff8800, 1);
    emu.fillCircle(40, 10, 4);
    emu.fillStyle(0x1a1a1a, 1);
    emu.fillCircle(40, 10, 2);
    emu.generateTexture('emu', 70, 120);
    emu.destroy();

    // === SHOPPING CART ===
    const cart = this.make.graphics({ x: 0, y: 0 });
    cart.fillStyle(0x000000, 0.2);
    cart.fillEllipse(35, 65, 40, 10);
    // Wheels
    cart.fillStyle(0x2a2a2a, 1);
    cart.fillCircle(15, 60, 7);
    cart.fillCircle(55, 60, 7);
    cart.fillStyle(0x4a4a4a, 1);
    cart.fillCircle(15, 60, 4);
    cart.fillCircle(55, 60, 4);
    // Frame
    cart.lineStyle(3, 0x8a8a8a);
    cart.lineBetween(15, 55, 15, 30);
    cart.lineBetween(55, 55, 55, 20);
    // Basket
    cart.fillStyle(0xaaaaaa, 0.8);
    cart.beginPath();
    cart.moveTo(10, 15);
    cart.lineTo(5, 50);
    cart.lineTo(60, 50);
    cart.lineTo(55, 15);
    cart.closePath();
    cart.fill();
    cart.lineStyle(2, 0x8a8a8a);
    cart.strokeRect(8, 18, 50, 30);
    // Handle
    cart.lineStyle(4, 0x6a6a6a);
    cart.lineBetween(55, 15, 65, 5);
    cart.generateTexture('cart', 70, 70);
    cart.destroy();

    // === SPLAT ===
    const splat = this.make.graphics({ x: 0, y: 0 });
    splat.fillStyle(0xd4a574, 0.9);
    splat.fillCircle(30, 30, 20);
    splat.fillEllipse(15, 25, 12, 8);
    splat.fillEllipse(45, 35, 10, 12);
    splat.fillEllipse(25, 48, 14, 8);
    splat.fillEllipse(38, 15, 8, 10);
    splat.fillStyle(0xc4956a, 0.7);
    splat.fillCircle(28, 28, 12);
    splat.generateTexture('splat', 60, 60);
    splat.destroy();
  }

  // ============================================
  // UI ELEMENTS
  // ============================================
  private createUI(): void {
    // === JOYSTICK BASE ===
    const jBase = this.make.graphics({ x: 0, y: 0 });
    jBase.fillStyle(0x000000, 0.3);
    jBase.fillCircle(60, 60, 58);
    jBase.fillStyle(0x2a2a2a, 0.8);
    jBase.fillCircle(60, 60, 55);
    jBase.lineStyle(3, 0x4a4a4a, 0.6);
    jBase.strokeCircle(60, 60, 50);
    jBase.strokeCircle(60, 60, 35);
    // Direction indicators
    jBase.fillStyle(0x5a5a5a, 0.4);
    jBase.fillTriangle(60, 15, 50, 30, 70, 30);
    jBase.fillTriangle(60, 105, 50, 90, 70, 90);
    jBase.fillTriangle(15, 60, 30, 50, 30, 70);
    jBase.fillTriangle(105, 60, 90, 50, 90, 70);
    jBase.generateTexture('joystick-base', 120, 120);
    jBase.destroy();

    // === JOYSTICK KNOB ===
    const jKnob = this.make.graphics({ x: 0, y: 0 });
    jKnob.fillStyle(0x000000, 0.3);
    jKnob.fillCircle(32, 34, 28);
    jKnob.fillStyle(0x4a4a4a, 1);
    jKnob.fillCircle(30, 30, 28);
    jKnob.fillStyle(0x5a5a5a, 1);
    jKnob.fillCircle(28, 28, 24);
    jKnob.fillStyle(0x6a6a6a, 1);
    jKnob.fillCircle(26, 26, 18);
    jKnob.fillStyle(0x8a8a8a, 0.5);
    jKnob.fillCircle(22, 22, 10);
    jKnob.generateTexture('joystick-knob', 64, 64);
    jKnob.destroy();

    // === BRAKE BUTTON ===
    const brake = this.make.graphics({ x: 0, y: 0 });
    brake.fillStyle(0x000000, 0.3);
    brake.fillCircle(42, 44, 38);
    brake.fillStyle(0x8a2222, 1);
    brake.fillCircle(40, 40, 38);
    brake.fillStyle(0xaa3333, 1);
    brake.fillCircle(38, 38, 32);
    brake.fillStyle(0xcc4444, 0.6);
    brake.fillCircle(32, 32, 18);
    brake.lineStyle(3, 0x6a1111);
    brake.strokeCircle(40, 40, 36);
    brake.generateTexture('brake-btn', 85, 85);
    brake.destroy();

    // === BOOST BUTTON ===
    const boost = this.make.graphics({ x: 0, y: 0 });
    boost.fillStyle(0x000000, 0.3);
    boost.fillCircle(42, 44, 38);
    boost.fillStyle(0x22662a, 1);
    boost.fillCircle(40, 40, 38);
    boost.fillStyle(0x33883a, 1);
    boost.fillCircle(38, 38, 32);
    boost.fillStyle(0x44aa4a, 0.6);
    boost.fillCircle(32, 32, 18);
    boost.lineStyle(3, 0x114411);
    boost.strokeCircle(40, 40, 36);
    boost.generateTexture('boost-btn', 85, 85);
    boost.destroy();

    // === BUCKET ===
    const bucket = this.make.graphics({ x: 0, y: 0 });
    bucket.fillStyle(0x000000, 0.2);
    bucket.fillEllipse(25, 48, 24, 8);
    // Bucket body
    bucket.fillStyle(0x6a6a6a, 1);
    bucket.beginPath();
    bucket.moveTo(5, 10);
    bucket.lineTo(2, 45);
    bucket.lineTo(48, 45);
    bucket.lineTo(45, 10);
    bucket.closePath();
    bucket.fill();
    // Highlight
    bucket.fillStyle(0x8a8a8a, 1);
    bucket.beginPath();
    bucket.moveTo(5, 10);
    bucket.lineTo(3, 45);
    bucket.lineTo(15, 45);
    bucket.lineTo(18, 10);
    bucket.closePath();
    bucket.fill();
    // Contents (plaster)
    bucket.fillStyle(0xd4a574, 1);
    bucket.fillEllipse(25, 12, 18, 6);
    bucket.fillStyle(0xe4b584, 0.6);
    bucket.fillEllipse(22, 11, 10, 4);
    // Handle
    bucket.lineStyle(4, 0x5a5a5a);
    bucket.beginPath();
    bucket.arc(25, 8, 16, Math.PI, 0, false);
    bucket.strokePath();
    bucket.generateTexture('bucket', 50, 55);
    bucket.destroy();

    // === TROWEL ===
    const trowel = this.make.graphics({ x: 0, y: 0 });
    // Handle
    trowel.fillStyle(0x5a4030, 1);
    trowel.fillRoundedRect(28, 0, 12, 30, 4);
    trowel.fillStyle(0x6a5040, 0.7);
    trowel.fillRect(28, 2, 4, 26);
    // Metal collar
    trowel.fillStyle(0x8a8a8a, 1);
    trowel.fillRect(26, 28, 16, 6);
    // Blade
    trowel.fillStyle(0xaaaaaa, 1);
    trowel.beginPath();
    trowel.moveTo(34, 34);
    trowel.lineTo(5, 80);
    trowel.lineTo(63, 80);
    trowel.closePath();
    trowel.fill();
    // Blade shine
    trowel.fillStyle(0xcccccc, 1);
    trowel.beginPath();
    trowel.moveTo(34, 34);
    trowel.lineTo(15, 75);
    trowel.lineTo(5, 80);
    trowel.lineTo(34, 40);
    trowel.closePath();
    trowel.fill();
    // Plaster on blade
    trowel.fillStyle(0xd4a574, 0.7);
    trowel.fillEllipse(34, 65, 20, 10);
    trowel.generateTexture('trowel', 68, 85);
    trowel.destroy();
  }

  // ============================================
  // HOUSES - Detailed with proper perspective
  // ============================================
  private createHouses(): void {
    // === HOUSE TYPE 1 - Cream brick Federation ===
    const h1 = this.make.graphics({ x: 0, y: 0 });
    const h1W = 90, h1H = 95;
    // Shadow
    h1.fillStyle(0x000000, 0.25);
    h1.fillRect(8, h1H - 12, 80, 12);
    // Main walls
    h1.fillStyle(0xd4c4a4, 1);
    h1.fillRect(8, 18, 75, 65);
    // Wall shading
    h1.fillStyle(0xe4d4b4, 1);
    h1.fillRect(8, 18, 15, 65);
    h1.fillStyle(0xb4a484, 0.7);
    h1.fillRect(68, 18, 15, 65);
    // Roof
    h1.fillStyle(0x5a4a3a, 1);
    h1.beginPath();
    h1.moveTo(0, 22);
    h1.lineTo(h1W/2, 0);
    h1.lineTo(h1W, 22);
    h1.closePath();
    h1.fill();
    // Roof tiles
    h1.fillStyle(0x6a5a4a, 0.5);
    for (let i = 0; i < 3; i++) {
      h1.fillRect(15 + i * 20, 8 + i * 4, 50 - i * 12, 3);
    }
    // Door
    h1.fillStyle(0x4a3020, 1);
    h1.fillRoundedRect(35, 52, 18, 32, { tl: 8, tr: 8, bl: 0, br: 0 });
    h1.fillStyle(0x5a4030, 0.5);
    h1.fillRect(35, 54, 6, 28);
    h1.fillStyle(0xdaa520, 1);
    h1.fillCircle(49, 70, 2);
    // Windows
    h1.fillStyle(0x4a7aaa, 1);
    h1.fillRect(14, 30, 16, 20);
    h1.fillRect(60, 30, 16, 20);
    // Window frames
    h1.lineStyle(2, 0xffffff);
    h1.strokeRect(14, 30, 16, 20);
    h1.strokeRect(60, 30, 16, 20);
    h1.lineBetween(22, 30, 22, 50);
    h1.lineBetween(68, 30, 68, 50);
    h1.lineBetween(14, 40, 30, 40);
    h1.lineBetween(60, 40, 76, 40);
    // Chimney
    h1.fillStyle(0x8a6a5a, 1);
    h1.fillRect(65, 0, 12, 15);
    h1.generateTexture('house1', h1W, h1H);
    h1.destroy();

    // === HOUSE TYPE 2 - Red brick 70s ===
    const h2 = this.make.graphics({ x: 0, y: 0 });
    const h2W = 95, h2H = 100;
    h2.fillStyle(0x000000, 0.25);
    h2.fillRect(8, h2H - 12, 85, 12);
    // Walls
    h2.fillStyle(0x8a4a3a, 1);
    h2.fillRect(8, 18, 80, 70);
    h2.fillStyle(0x9a5a4a, 1);
    h2.fillRect(8, 18, 15, 70);
    h2.fillStyle(0x6a3a2a, 0.6);
    h2.fillRect(73, 18, 15, 70);
    // Brick pattern
    h2.fillStyle(0x7a3a2a, 0.3);
    for (let y = 22; y < 85; y += 8) {
      for (let x = 12; x < 83; x += 18) {
        h2.fillRect(x + (y % 16 === 0 ? 0 : 9), y, 14, 6);
      }
    }
    // Flat roof
    h2.fillStyle(0x3a3a3a, 1);
    h2.fillRect(4, 12, 88, 10);
    h2.fillStyle(0x4a4a4a, 0.5);
    h2.fillRect(4, 12, 88, 4);
    // Garage
    h2.fillStyle(0x2a2a2a, 1);
    h2.fillRect(55, 48, 28, 40);
    h2.lineStyle(1, 0x4a4a4a);
    for (let y = 53; y < 86; y += 6) {
      h2.lineBetween(57, y, 81, y);
    }
    // Door
    h2.fillStyle(0x2a5a2a, 1);
    h2.fillRect(18, 58, 16, 30);
    h2.fillStyle(0x3a6a3a, 0.5);
    h2.fillRect(18, 60, 5, 26);
    // Windows
    h2.fillStyle(0x3a6a9a, 1);
    h2.fillRect(15, 28, 20, 18);
    h2.fillRect(40, 28, 20, 18);
    h2.lineStyle(2, 0xcccccc);
    h2.strokeRect(15, 28, 20, 18);
    h2.strokeRect(40, 28, 20, 18);
    h2.generateTexture('house2', h2W, h2H);
    h2.destroy();

    // === HOUSE TYPE 3 - Modern white minimalist ===
    const h3 = this.make.graphics({ x: 0, y: 0 });
    const h3W = 100, h3H = 90;
    h3.fillStyle(0x000000, 0.25);
    h3.fillRect(10, h3H - 12, 85, 12);
    // Walls
    h3.fillStyle(0xf5f5f5, 1);
    h3.fillRect(8, 12, 85, 66);
    h3.fillStyle(0xffffff, 1);
    h3.fillRect(8, 12, 18, 66);
    h3.fillStyle(0xd8d8d8, 0.6);
    h3.fillRect(75, 12, 18, 66);
    // Flat roof overhang
    h3.fillStyle(0x2a2a2a, 1);
    h3.fillRect(4, 6, 95, 10);
    h3.fillStyle(0x3a3a3a, 0.6);
    h3.fillRect(4, 6, 95, 4);
    // Large windows
    h3.fillStyle(0x2a4a6a, 1);
    h3.fillRect(14, 22, 35, 40);
    h3.fillRect(58, 22, 28, 28);
    // Window frames
    h3.lineStyle(4, 0x1a1a1a);
    h3.strokeRect(14, 22, 35, 40);
    h3.strokeRect(58, 22, 28, 28);
    // Door
    h3.fillStyle(0x4a3a2a, 1);
    h3.fillRect(62, 55, 18, 23);
    h3.fillStyle(0x5a4a3a, 0.5);
    h3.fillRect(62, 57, 6, 19);
    // Handle
    h3.fillStyle(0xaaaaaa, 1);
    h3.fillRect(75, 68, 3, 6);
    h3.generateTexture('house3', h3W, h3H);
    h3.destroy();

    // === BRUTALIST ===
    const brut = this.make.graphics({ x: 0, y: 0 });
    const brutW = 110, brutH = 100;
    brut.fillStyle(0x000000, 0.25);
    brut.fillRect(5, brutH - 10, 105, 10);
    // Concrete base
    brut.fillStyle(0x7a7a7a, 1);
    brut.fillRect(5, 20, 100, 70);
    // 3D blocks
    brut.fillStyle(0x8a8a8a, 1);
    brut.fillRect(5, 20, 20, 70);
    brut.fillStyle(0x6a6a6a, 0.7);
    brut.fillRect(85, 20, 20, 70);
    // Stepped levels
    brut.fillStyle(0x8a8a8a, 1);
    brut.fillRect(15, 8, 50, 15);
    brut.fillRect(55, 0, 45, 25);
    // Windows (irregular)
    brut.fillStyle(0x2a3a4a, 1);
    brut.fillRect(15, 30, 25, 18);
    brut.fillRect(50, 25, 18, 22);
    brut.fillRect(75, 35, 22, 15);
    brut.fillRect(20, 58, 20, 15);
    brut.fillRect(60, 55, 30, 20);
    // Concrete texture
    brut.fillStyle(0x6a6a6a, 0.3);
    for (let i = 0; i < 12; i++) {
      brut.fillRect(
        Phaser.Math.Between(10, 95),
        Phaser.Math.Between(25, 85),
        Phaser.Math.Between(8, 20),
        Phaser.Math.Between(4, 12)
      );
    }
    brut.generateTexture('brutalist', brutW, brutH);
    brut.destroy();

    // === GENERIC HOUSE (fallback) ===
    const house = this.make.graphics({ x: 0, y: 0 });
    house.fillStyle(0x000000, 0.2);
    house.fillEllipse(45, 88, 50, 12);
    house.fillStyle(0xc4b494, 1);
    house.fillRect(10, 25, 70, 60);
    house.fillStyle(0x5a4a3a, 1);
    house.beginPath();
    house.moveTo(5, 30);
    house.lineTo(45, 5);
    house.lineTo(85, 30);
    house.closePath();
    house.fill();
    house.fillStyle(0x4a3020, 1);
    house.fillRect(35, 55, 18, 30);
    house.fillStyle(0x4a7aaa, 1);
    house.fillRect(15, 40, 14, 16);
    house.fillRect(60, 40, 14, 16);
    house.generateTexture('house', 90, 95);
    house.destroy();

    // === FENCE ===
    const fence = this.make.graphics({ x: 0, y: 0 });
    fence.fillStyle(0x8a7a6a, 1);
    for (let x = 0; x < 100; x += 10) {
      fence.fillRect(x, 5, 7, 30);
      fence.beginPath();
      fence.moveTo(x, 5);
      fence.lineTo(x + 3.5, 0);
      fence.lineTo(x + 7, 5);
      fence.closePath();
      fence.fill();
    }
    fence.fillStyle(0x7a6a5a, 1);
    fence.fillRect(0, 12, 100, 4);
    fence.fillRect(0, 26, 100, 4);
    fence.generateTexture('fence', 100, 38);
    fence.destroy();
  }

  // ============================================
  // CHARACTERS - Full detail with shading
  // ============================================
  private createCharacters(): void {
    this.createJose();
    this.createJarrad();
    this.createMatt();
    this.createCrewIcon();
  }

  private createJose(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 70, h = 115;
    
    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillEllipse(w/2, h - 6, 45, 14);
    
    // Legs
    g.fillStyle(0x2a2a3a, 1);
    g.fillRoundedRect(18, 68, 14, 35, 5);
    g.fillRoundedRect(38, 68, 14, 35, 5);
    g.fillStyle(0x1a1a2a, 0.6);
    g.fillRect(29, 70, 5, 30);
    
    // Boots
    g.fillStyle(0x3a2a1a, 1);
    g.fillRoundedRect(14, 98, 20, 14, 4);
    g.fillRoundedRect(36, 98, 20, 14, 4);
    g.fillStyle(0x2a1a0a, 1);
    g.fillRect(14, 108, 20, 4);
    g.fillRect(36, 108, 20, 4);
    
    // Torso - Black TEM uniform
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(12, 38, 46, 34, 6);
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(12, 40, 12, 30);
    g.fillStyle(0x0a0a0a, 0.7);
    g.fillRect(46, 40, 12, 30);
    
    // TEM badge - inverted logo (white tree on dark circle)
    g.fillStyle(0x0a0a0a, 1);
    g.fillCircle(35, 52, 10);
    g.lineStyle(1.5, 0xffffff, 1);
    g.strokeCircle(35, 52, 9);
    // White bare tree - matching actual TEM logo
    g.lineStyle(2, 0xffffff, 1);
    // Trunk
    g.lineBetween(35, 58, 35, 46);
    // Main left branch
    g.lineBetween(35, 48, 27, 44);
    g.lineBetween(27, 44, 24, 45);
    g.lineBetween(27, 44, 25, 42);
    // Main right branch
    g.lineBetween(35, 48, 43, 44);
    g.lineBetween(43, 44, 46, 45);
    g.lineBetween(43, 44, 45, 42);
    // Upper branches
    g.lineBetween(35, 50, 29, 47);
    g.lineBetween(35, 50, 41, 47);
    g.lineStyle(1, 0xffffff, 1);
    g.lineBetween(29, 47, 27, 48);
    g.lineBetween(41, 47, 43, 48);
    
    // Arms
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(2, 40, 14, 28, 5);
    g.fillRoundedRect(54, 40, 14, 28, 5);
    
    // Hands
    g.fillStyle(0x8b6a4a, 1);
    g.fillRoundedRect(2, 64, 14, 14, 5);
    g.fillRoundedRect(54, 64, 14, 14, 5);
    
    // Neck
    g.fillStyle(0x8b6a4a, 1);
    g.fillRect(28, 30, 14, 12);
    
    // Head
    g.fillStyle(0x8b6a4a, 1);
    g.fillCircle(35, 18, 18);
    
    // Dreadlocks
    g.fillStyle(0x2a1a0a, 1);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI + Math.PI;
      const x = 35 + Math.cos(angle) * 16;
      const y = 18 + Math.sin(angle) * 16;
      g.fillRoundedRect(x - 4, y, 8, 26 + (i % 3) * 5, 4);
    }
    g.fillStyle(0x3a2a1a, 0.7);
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 0.7 + Math.PI * 1.15;
      const x = 35 + Math.cos(angle) * 15;
      const y = 18 + Math.sin(angle) * 15;
      g.fillRoundedRect(x - 3, y, 6, 20 + (i % 2) * 4, 3);
    }
    // Top
    g.fillStyle(0x1a0a00, 1);
    g.fillCircle(28, 8, 8);
    g.fillCircle(42, 8, 8);
    g.fillCircle(35, 5, 10);
    
    // Face (cleaner shape)
    g.fillStyle(0x9a7a5a, 1);
    g.fillEllipse(35, 20, 12, 11);
    
    // Eyes (behind glasses)
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(28, 18, 2);
    g.fillCircle(42, 18, 2);
    
    // Glasses (sunglasses style)
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(22, 14, 12, 9, 3);
    g.fillRoundedRect(36, 14, 12, 9, 3);
    g.fillRect(34, 17, 2, 2);
    // Lens tint
    g.fillStyle(0x2a4a6a, 0.6);
    g.fillRoundedRect(23, 15, 10, 7, 2);
    g.fillRoundedRect(37, 15, 10, 7, 2);
    
    // Nose
    g.fillStyle(0x8a6a4a, 1);
    g.fillEllipse(35, 22, 3, 4);
    
    // Goatee
    g.fillStyle(0x1a0a00, 1);
    g.fillEllipse(35, 28, 5, 4);
    g.fillRect(33, 25, 4, 4);
    
    // Smile (subtle)
    g.lineStyle(1, 0x6a5a4a);
    g.beginPath();
    g.arc(35, 26, 4, 0.2, Math.PI - 0.2);
    g.strokePath();
    
    g.generateTexture('jose', w, h);
    g.destroy();
  }

  private createJarrad(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 75, h = 120;
    
    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillEllipse(w/2, h - 6, 50, 15);
    
    // Legs
    g.fillStyle(0x2a2a3a, 1);
    g.fillRoundedRect(20, 72, 16, 36, 5);
    g.fillRoundedRect(40, 72, 16, 36, 5);
    g.fillStyle(0x1a1a2a, 0.6);
    g.fillRect(33, 74, 5, 32);
    
    // Boots
    g.fillStyle(0x3a2a1a, 1);
    g.fillRoundedRect(16, 103, 22, 14, 4);
    g.fillRoundedRect(40, 103, 22, 14, 4);
    g.fillStyle(0x2a1a0a, 1);
    g.fillRect(16, 113, 22, 4);
    g.fillRect(40, 113, 22, 4);
    
    // Muscular torso
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(10, 34, 56, 42, 8);
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(10, 38, 14, 36);
    g.fillStyle(0x0a0a0a, 0.7);
    g.fillRect(52, 38, 14, 36);
    
    // TEM badge - inverted logo (white tree on dark circle)
    g.fillStyle(0x0a0a0a, 1);
    g.fillCircle(38, 54, 12);
    g.lineStyle(1.5, 0xffffff, 1);
    g.strokeCircle(38, 54, 11);
    // White bare tree - matching actual TEM logo
    g.lineStyle(2.5, 0xffffff, 1);
    // Trunk
    g.lineBetween(38, 62, 38, 47);
    // Main left branch
    g.lineBetween(38, 50, 28, 44);
    g.lineBetween(28, 44, 24, 46);
    g.lineBetween(28, 44, 25, 42);
    // Main right branch
    g.lineBetween(38, 50, 48, 44);
    g.lineBetween(48, 44, 52, 46);
    g.lineBetween(48, 44, 51, 42);
    // Upper branches
    g.lineBetween(38, 52, 30, 48);
    g.lineBetween(38, 52, 46, 48);
    g.lineStyle(1.5, 0xffffff, 1);
    g.lineBetween(30, 48, 27, 50);
    g.lineBetween(46, 48, 49, 50);
    
    // Muscular arms
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(-2, 38, 16, 30, 6);
    g.fillRoundedRect(62, 38, 16, 30, 6);
    
    // Hands
    g.fillStyle(0xe8c4a0, 1);
    g.fillRoundedRect(-2, 64, 16, 14, 5);
    g.fillRoundedRect(62, 64, 16, 14, 5);
    
    // Neck
    g.fillStyle(0xe8c4a0, 1);
    g.fillRect(30, 26, 16, 12);
    
    // Head
    g.fillStyle(0xe8c4a0, 1);
    g.fillCircle(38, 14, 18);
    
    // Top knot
    g.fillStyle(0x4a3a2a, 1);
    g.slice(38, 12, 17, Math.PI * 1.15, Math.PI * -0.15, false);
    g.fillPath();
    g.fillCircle(38, -5, 10);
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(34, 0, 8, 4);
    
    // Glasses
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(24, 10, 12, 9, 2);
    g.fillRoundedRect(40, 10, 12, 9, 2);
    g.fillRect(36, 13, 4, 2);
    g.fillStyle(0x3a5a7a, 0.5);
    g.fillRect(26, 12, 8, 5);
    g.fillRect(42, 12, 8, 5);
    
    // Friendly expression
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(30, 12, 2);
    g.fillCircle(46, 12, 2);
    g.lineStyle(2, 0xb8a080);
    g.beginPath();
    g.arc(38, 22, 4, 0.2, Math.PI - 0.2);
    g.strokePath();
    
    g.generateTexture('jarrad', w, h);
    g.destroy();
  }

  private createMatt(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 65, h = 135;
    
    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillEllipse(w/2, h - 6, 40, 12);
    
    // Long skinny legs
    g.fillStyle(0x2a2a3a, 1);
    g.fillRoundedRect(18, 78, 12, 44, 4);
    g.fillRoundedRect(36, 78, 12, 44, 4);
    g.fillStyle(0x1a1a2a, 0.6);
    g.fillRect(27, 80, 4, 40);
    
    // Boots
    g.fillStyle(0x3a2a1a, 1);
    g.fillRoundedRect(14, 118, 18, 12, 3);
    g.fillRoundedRect(34, 118, 18, 12, 3);
    g.fillStyle(0x2a1a0a, 1);
    g.fillRect(14, 126, 18, 4);
    g.fillRect(34, 126, 18, 4);
    
    // Skinny torso
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(14, 42, 38, 40, 6);
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(14, 45, 10, 35);
    g.fillStyle(0x0a0a0a, 0.7);
    g.fillRect(42, 45, 10, 35);
    
    // TEM badge - inverted logo (white tree on dark circle)
    g.fillStyle(0x0a0a0a, 1);
    g.fillCircle(33, 58, 10);
    g.lineStyle(1.5, 0xffffff, 1);
    g.strokeCircle(33, 58, 9);
    // White bare tree - matching actual TEM logo
    g.lineStyle(2, 0xffffff, 1);
    // Trunk
    g.lineBetween(33, 64, 33, 52);
    // Main left branch
    g.lineBetween(33, 54, 25, 50);
    g.lineBetween(25, 50, 22, 52);
    g.lineBetween(25, 50, 23, 48);
    // Main right branch
    g.lineBetween(33, 54, 41, 50);
    g.lineBetween(41, 50, 44, 52);
    g.lineBetween(41, 50, 43, 48);
    // Upper branches
    g.lineBetween(33, 56, 27, 53);
    g.lineBetween(33, 56, 39, 53);
    g.lineStyle(1, 0xffffff, 1);
    g.lineBetween(27, 53, 25, 54);
    g.lineBetween(39, 53, 41, 54);
    
    // Lanky arms
    g.fillStyle(0x1a1a1a, 1);
    g.fillRoundedRect(4, 44, 12, 30, 4);
    g.fillRoundedRect(50, 44, 12, 30, 4);
    
    // Hands
    g.fillStyle(0xe8c4a0, 1);
    g.fillRoundedRect(4, 70, 12, 12, 4);
    g.fillRoundedRect(50, 70, 12, 12, 4);
    
    // Long neck
    g.fillStyle(0xe8c4a0, 1);
    g.fillRect(26, 28, 14, 18);
    
    // Head
    g.fillStyle(0xe8c4a0, 1);
    g.fillCircle(33, 16, 15);
    
    // Messy hair
    g.fillStyle(0x5a4a3a, 1);
    g.slice(33, 14, 14, Math.PI + 0.3, -0.3, false);
    g.fillPath();
    g.fillRect(22, 5, 6, 9);
    g.fillRect(36, 3, 6, 11);
    g.fillRect(28, 1, 6, 9);
    g.fillStyle(0x4a3a2a, 0.6);
    g.fillRect(25, 3, 4, 7);
    g.fillRect(33, 2, 5, 8);
    
    // Worried face
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(27, 14, 3);
    g.fillCircle(39, 14, 3);
    g.fillStyle(0xffffff, 1);
    g.fillCircle(26, 13, 1);
    g.fillCircle(38, 13, 1);
    
    // Worried eyebrows
    g.lineStyle(2, 0x4a3a2a);
    g.lineBetween(23, 8, 30, 11);
    g.lineBetween(43, 8, 36, 11);
    
    // Grimace
    g.lineStyle(2, 0x8a6a5a);
    g.lineBetween(27, 24, 39, 24);
    g.lineBetween(27, 24, 25, 22);
    g.lineBetween(39, 24, 41, 22);
    
    g.generateTexture('matt', w, h);
    g.destroy();
  }

  private createCrewIcon(): void {
    const g = this.make.graphics({ x: 0, y: 0 });
    g.fillStyle(0x1a1a1a, 1);
    g.fillCircle(25, 25, 23);
    g.fillStyle(0xe8c4a0, 1);
    g.fillCircle(25, 18, 10);
    g.fillStyle(0x1a1a1a, 1);
    g.slice(25, 16, 9, Math.PI, 0, false);
    g.fillPath();
    g.fillStyle(0xcccccc, 1);
    g.fillRect(12, 32, 26, 5);
    g.lineStyle(3, 0xffffff, 0.6);
    g.strokeCircle(25, 25, 21);
    g.generateTexture('crew-icon', 50, 50);
    g.destroy();
  }

  create(): void {
    this.scene.start('MenuScene');
  }
}
