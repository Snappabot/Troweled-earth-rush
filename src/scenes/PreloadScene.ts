import Phaser from 'phaser';

/**
 * PreloadScene - GTA 3 style sprites
 * Higher detail, 3D shading, matches real TEM branding
 */
export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(): void {
    this.createAllAssets();
  }

  private createAllAssets(): void {
    this.createVan();
    this.createRoadWithHouses();
    this.createObstacles();
    this.createUI();
    this.createCharacters();
    this.createHouses();
  }

  private createVan(): void {
    // GTA3-style van matching the real TEM Renault Trafic
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 70, h = 120;
    
    // Ground shadow
    g.fillStyle(0x000000, 0.4);
    g.fillEllipse(w/2 + 4, h - 8, w - 10, 20);
    
    // === VAN BODY - Dark charcoal/gunmetal ===
    // Base body
    g.fillStyle(0x2a2a30, 1);
    g.fillRoundedRect(6, 10, w - 12, h - 25, 8);
    
    // 3D side shading (left = lit, right = shadow)
    g.fillStyle(0x3a3a42, 1);
    g.fillRect(6, 15, 8, h - 35);
    g.fillStyle(0x1a1a20, 1);
    g.fillRect(w - 14, 15, 8, h - 35);
    
    // Hood (front)
    g.fillStyle(0x2a2a30, 1);
    g.fillRoundedRect(10, 6, w - 20, 20, 6);
    // Hood shine
    g.fillStyle(0x4a4a52, 0.4);
    g.fillRect(14, 10, w - 28, 6);
    
    // === WINDSCREEN ===
    g.fillStyle(0x1a3a5a, 1);
    g.fillRoundedRect(12, 12, w - 24, 22, 4);
    // Glass reflection
    g.fillStyle(0x3a6a9a, 0.5);
    g.beginPath();
    g.moveTo(14, 14);
    g.lineTo(28, 14);
    g.lineTo(14, 28);
    g.closePath();
    g.fill();
    
    // === ROOF RACK (black metal) ===
    g.fillStyle(0x1a1a1a, 1);
    g.fillRect(8, 35, w - 16, 4);
    g.fillRect(8, 50, w - 16, 4);
    g.fillRect(12, 35, 4, 19);
    g.fillRect(w - 16, 35, 4, 19);
    g.fillRect(w/2 - 2, 35, 4, 19);
    
    // === SIDE PANEL - Rusty copper texture with branding ===
    // Copper/rust gradient panel
    g.fillStyle(0x8b5a3a, 1);
    g.fillRect(10, 56, w - 20, 35);
    // Rust texture spots
    g.fillStyle(0xa66a4a, 0.7);
    g.fillCircle(20, 68, 8);
    g.fillCircle(40, 75, 10);
    g.fillCircle(55, 65, 6);
    g.fillStyle(0x6a4a2a, 0.5);
    g.fillCircle(30, 72, 7);
    g.fillCircle(48, 68, 5);
    
    // "Troweled Earth" text (simplified - white bar)
    g.fillStyle(0xffffff, 0.9);
    g.fillRect(14, 62, 42, 8);
    
    // Tree logo (simplified)
    g.fillStyle(0xffffff, 1);
    g.fillCircle(16, 80, 6);
    g.fillRect(14, 80, 4, 8);
    
    // === WHEELS (GTA3 style - chunky with rims) ===
    // Front wheels
    g.fillStyle(0x0a0a0a, 1);
    g.fillRoundedRect(-2, 18, 14, 24, 4);
    g.fillRoundedRect(w - 12, 18, 14, 24, 4);
    // Rims
    g.fillStyle(0x3a3a3a, 1);
    g.fillCircle(5, 30, 6);
    g.fillCircle(w - 5, 30, 6);
    g.fillStyle(0x5a5a5a, 1);
    g.fillCircle(5, 30, 3);
    g.fillCircle(w - 5, 30, 3);
    
    // Rear wheels
    g.fillStyle(0x0a0a0a, 1);
    g.fillRoundedRect(-2, h - 40, 14, 24, 4);
    g.fillRoundedRect(w - 12, h - 40, 14, 24, 4);
    // Rims
    g.fillStyle(0x3a3a3a, 1);
    g.fillCircle(5, h - 28, 6);
    g.fillCircle(w - 5, h - 28, 6);
    g.fillStyle(0x5a5a5a, 1);
    g.fillCircle(5, h - 28, 3);
    g.fillCircle(w - 5, h - 28, 3);
    
    // === HEADLIGHTS ===
    g.fillStyle(0xffffee, 1);
    g.fillCircle(18, 12, 5);
    g.fillCircle(w - 18, 12, 5);
    // Inner
    g.fillStyle(0xffff99, 1);
    g.fillCircle(18, 12, 3);
    g.fillCircle(w - 18, 12, 3);
    
    // === TAIL LIGHTS ===
    g.fillStyle(0xcc2222, 1);
    g.fillRoundedRect(12, h - 18, 14, 6, 2);
    g.fillRoundedRect(w - 26, h - 18, 14, 6, 2);
    // Brake light glow
    g.fillStyle(0xff4444, 0.5);
    g.fillRoundedRect(14, h - 16, 10, 3, 1);
    g.fillRoundedRect(w - 24, h - 16, 10, 3, 1);
    
    // Door lines
    g.lineStyle(1, 0x1a1a1a, 0.5);
    g.lineBetween(w/2, 35, w/2, h - 20);
    
    g.generateTexture('van', w, h);
    g.destroy();
  }

  private createRoadWithHouses(): void {
    // Narrow suburban street with houses on sides
    const g = this.make.graphics({ x: 0, y: 0 });
    const w = 200, h = 200;
    
    // === LEFT FOOTPATH & HOUSES ===
    g.fillStyle(0x8a8a7a, 1); // Concrete footpath
    g.fillRect(0, 0, 35, h);
    g.fillStyle(0x7a7a6a, 1);
    g.fillRect(0, 0, 35, 3); // Kerb
    
    // === RIGHT FOOTPATH ===
    g.fillStyle(0x8a8a7a, 1);
    g.fillRect(w - 35, 0, 35, h);
    g.fillStyle(0x7a7a6a, 1);
    g.fillRect(w - 35, 0, 35, 3);
    
    // === ROAD SURFACE ===
    g.fillStyle(0x3a3a3a, 1);
    g.fillRect(35, 0, w - 70, h);
    
    // Road wear/patches
    g.fillStyle(0x2d2d2d, 0.5);
    g.fillRect(50, 20, 30, 40);
    g.fillRect(120, 80, 25, 35);
    g.fillRect(70, 140, 40, 30);
    
    // Center line (dashed)
    g.fillStyle(0xeeeeee, 1);
    for (let y = 0; y < h; y += 30) {
      g.fillRect(w/2 - 3, y, 6, 18);
    }
    
    // Edge lines
    g.fillStyle(0xdddd44, 1);
    g.fillRect(38, 0, 4, h);
    g.fillRect(w - 42, 0, 4, h);
    
    // Drain grate
    g.fillStyle(0x2a2a2a, 1);
    g.fillRect(38, 90, 12, 20);
    g.lineStyle(2, 0x1a1a1a);
    for (let i = 0; i < 4; i++) {
      g.lineBetween(40, 93 + i * 5, 48, 93 + i * 5);
    }
    
    g.generateTexture('road', w, h);
    g.destroy();
    
    // === GRASS VERGE ===
    const grass = this.make.graphics({ x: 0, y: 0 });
    grass.fillStyle(0x3d6a37, 1);
    grass.fillRect(0, 0, 100, 100);
    // Grass texture
    grass.fillStyle(0x4d7a47, 0.7);
    for (let i = 0; i < 20; i++) {
      grass.fillCircle(
        Phaser.Math.Between(5, 95),
        Phaser.Math.Between(5, 95),
        Phaser.Math.Between(4, 12)
      );
    }
    grass.fillStyle(0x2d5a27, 0.5);
    for (let i = 0; i < 10; i++) {
      grass.fillCircle(
        Phaser.Math.Between(10, 90),
        Phaser.Math.Between(10, 90),
        Phaser.Math.Between(5, 15)
      );
    }
    grass.generateTexture('grass', 100, 100);
    grass.destroy();
  }

  private createHouses(): void {
    // GTA3-style suburban houses
    
    // === HOUSE TYPE 1 - Cream brick ===
    const h1 = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    h1.fillStyle(0x000000, 0.3);
    h1.fillRect(5, 75, 75, 10);
    // Walls
    h1.fillStyle(0xd4c4a4, 1);
    h1.fillRect(5, 10, 70, 65);
    // 3D shading
    h1.fillStyle(0xe4d4b4, 1);
    h1.fillRect(5, 10, 10, 65);
    h1.fillStyle(0xb4a484, 1);
    h1.fillRect(65, 10, 10, 65);
    // Roof
    h1.fillStyle(0x5a4a3a, 1);
    h1.beginPath();
    h1.moveTo(0, 15);
    h1.lineTo(40, 0);
    h1.lineTo(80, 15);
    h1.lineTo(0, 15);
    h1.closePath();
    h1.fill();
    // Roof tiles
    h1.fillStyle(0x6a5a4a, 0.5);
    h1.fillRect(10, 8, 60, 3);
    // Door
    h1.fillStyle(0x4a3a2a, 1);
    h1.fillRect(32, 45, 16, 30);
    h1.fillStyle(0xdaa520, 1);
    h1.fillCircle(44, 60, 2);
    // Windows
    h1.fillStyle(0x4a7aaa, 1);
    h1.fillRect(12, 25, 15, 18);
    h1.fillRect(53, 25, 15, 18);
    // Window frames
    h1.lineStyle(2, 0xffffff);
    h1.strokeRect(12, 25, 15, 18);
    h1.strokeRect(53, 25, 15, 18);
    h1.lineBetween(19, 25, 19, 43);
    h1.lineBetween(60, 25, 60, 43);
    h1.generateTexture('house1', 80, 85);
    h1.destroy();

    // === HOUSE TYPE 2 - Red brick ===
    const h2 = this.make.graphics({ x: 0, y: 0 });
    h2.fillStyle(0x000000, 0.3);
    h2.fillRect(5, 80, 80, 10);
    // Walls
    h2.fillStyle(0x8a4a3a, 1);
    h2.fillRect(5, 15, 75, 65);
    h2.fillStyle(0x9a5a4a, 1);
    h2.fillRect(5, 15, 12, 65);
    h2.fillStyle(0x6a3a2a, 1);
    h2.fillRect(68, 15, 12, 65);
    // Brick pattern
    h2.fillStyle(0x7a3a2a, 0.3);
    for (let y = 20; y < 75; y += 8) {
      for (let x = 10; x < 75; x += 15) {
        h2.fillRect(x + (y % 16 === 0 ? 0 : 7), y, 12, 6);
      }
    }
    // Flat roof
    h2.fillStyle(0x3a3a3a, 1);
    h2.fillRect(0, 10, 85, 10);
    // Garage
    h2.fillStyle(0x2a2a2a, 1);
    h2.fillRect(50, 40, 25, 40);
    h2.lineStyle(1, 0x4a4a4a);
    for (let y = 45; y < 78; y += 5) {
      h2.lineBetween(52, y, 73, y);
    }
    // Door
    h2.fillStyle(0x2a5a2a, 1);
    h2.fillRect(15, 50, 14, 30);
    // Windows
    h2.fillStyle(0x3a6a9a, 1);
    h2.fillRect(12, 25, 18, 15);
    h2.fillRect(35, 25, 18, 15);
    h2.lineStyle(2, 0xcccccc);
    h2.strokeRect(12, 25, 18, 15);
    h2.strokeRect(35, 25, 18, 15);
    h2.generateTexture('house2', 85, 90);
    h2.destroy();

    // === HOUSE TYPE 3 - Modern white ===
    const h3 = this.make.graphics({ x: 0, y: 0 });
    h3.fillStyle(0x000000, 0.3);
    h3.fillRect(8, 70, 70, 10);
    // Walls
    h3.fillStyle(0xf0f0f0, 1);
    h3.fillRect(5, 5, 75, 65);
    h3.fillStyle(0xffffff, 1);
    h3.fillRect(5, 5, 12, 65);
    h3.fillStyle(0xd0d0d0, 1);
    h3.fillRect(68, 5, 12, 65);
    // Flat roof overhang
    h3.fillStyle(0x2a2a2a, 1);
    h3.fillRect(0, 0, 85, 8);
    // Large windows (modern)
    h3.fillStyle(0x2a4a6a, 1);
    h3.fillRect(10, 15, 30, 35);
    h3.fillRect(50, 15, 25, 25);
    // Window frames (black)
    h3.lineStyle(3, 0x1a1a1a);
    h3.strokeRect(10, 15, 30, 35);
    h3.strokeRect(50, 15, 25, 25);
    // Door
    h3.fillStyle(0x4a3a2a, 1);
    h3.fillRect(55, 45, 16, 25);
    h3.generateTexture('house3', 85, 80);
    h3.destroy();

    // === FENCE ===
    const fence = this.make.graphics({ x: 0, y: 0 });
    fence.fillStyle(0x8a7a6a, 1);
    for (let x = 0; x < 100; x += 8) {
      fence.fillRect(x, 0, 6, 30);
      // Pointed top
      fence.beginPath();
      fence.moveTo(x, 0);
      fence.lineTo(x + 3, -5);
      fence.lineTo(x + 6, 0);
      fence.closePath();
      fence.fill();
    }
    // Horizontal rail
    fence.fillStyle(0x7a6a5a, 1);
    fence.fillRect(0, 8, 100, 4);
    fence.fillRect(0, 22, 100, 4);
    fence.generateTexture('fence', 100, 35);
    fence.destroy();
  }

  private createObstacles(): void {
    // === KANGAROO (GTA3 quality) ===
    const roo = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    roo.fillStyle(0x000000, 0.4);
    roo.fillEllipse(32, 85, 40, 15);
    // Body
    roo.fillStyle(0x7a5a3a, 1);
    roo.fillEllipse(30, 50, 28, 40);
    // Body shading
    roo.fillStyle(0x8a6a4a, 1);
    roo.fillEllipse(25, 48, 15, 30);
    roo.fillStyle(0x5a4a2a, 1);
    roo.fillEllipse(38, 52, 12, 28);
    // Powerful legs
    roo.fillStyle(0x6a4a2a, 1);
    roo.fillEllipse(22, 72, 12, 22);
    roo.fillEllipse(38, 72, 12, 22);
    // Feet
    roo.fillStyle(0x5a3a1a, 1);
    roo.fillEllipse(20, 88, 10, 6);
    roo.fillEllipse(40, 88, 10, 6);
    // Tail
    roo.fillStyle(0x7a5a3a, 1);
    roo.fillEllipse(12, 68, 10, 28);
    // Head
    roo.fillStyle(0x8a6a4a, 1);
    roo.fillEllipse(30, 15, 16, 20);
    // Ears
    roo.fillStyle(0x7a5a3a, 1);
    roo.fillEllipse(20, 4, 6, 14);
    roo.fillEllipse(40, 4, 6, 14);
    roo.fillStyle(0xc4a484, 1);
    roo.fillEllipse(20, 6, 3, 8);
    roo.fillEllipse(40, 6, 3, 8);
    // Face
    roo.fillStyle(0x1a1a1a, 1);
    roo.fillCircle(25, 12, 3);
    roo.fillCircle(35, 12, 3);
    roo.fillStyle(0xffffff, 1);
    roo.fillCircle(24, 11, 1);
    roo.fillCircle(34, 11, 1);
    roo.fillStyle(0x3a2a1a, 1);
    roo.fillEllipse(30, 22, 6, 4);
    // Pouch
    roo.fillStyle(0x9a7a5a, 1);
    roo.fillEllipse(30, 58, 12, 10);
    roo.generateTexture('kangaroo', 60, 95);
    roo.destroy();

    // === ROAD CONE ===
    const cone = this.make.graphics({ x: 0, y: 0 });
    cone.fillStyle(0x000000, 0.3);
    cone.fillEllipse(25, 55, 28, 10);
    // Base
    cone.fillStyle(0x2a2a2a, 1);
    cone.fillEllipse(25, 50, 26, 8);
    // Cone body gradient
    cone.fillStyle(0xff6600, 1);
    cone.beginPath();
    cone.moveTo(25, 8);
    cone.lineTo(5, 48);
    cone.lineTo(45, 48);
    cone.closePath();
    cone.fill();
    // 3D shading
    cone.fillStyle(0xff8833, 1);
    cone.beginPath();
    cone.moveTo(25, 8);
    cone.lineTo(15, 48);
    cone.lineTo(5, 48);
    cone.closePath();
    cone.fill();
    // Stripes
    cone.fillStyle(0xffffff, 1);
    cone.fillRect(10, 18, 30, 6);
    cone.fillRect(7, 32, 36, 6);
    // Top
    cone.fillStyle(0xff4400, 1);
    cone.fillCircle(25, 8, 5);
    cone.generateTexture('cone', 50, 60);
    cone.destroy();

    // === MEAT PIE ===
    const pie = this.make.graphics({ x: 0, y: 0 });
    pie.fillStyle(0x000000, 0.2);
    pie.fillEllipse(25, 48, 26, 8);
    // Crust bottom
    pie.fillStyle(0xc4956a, 1);
    pie.fillEllipse(25, 25, 24, 22);
    // Crust edge
    pie.fillStyle(0xd4a57a, 1);
    pie.fillEllipse(25, 22, 22, 18);
    // Filling
    pie.fillStyle(0x6a4a2a, 1);
    pie.fillEllipse(25, 20, 18, 14);
    // Gravy shine
    pie.fillStyle(0x8a5a3a, 0.6);
    pie.fillEllipse(20, 18, 8, 6);
    // Crust lattice
    pie.lineStyle(3, 0xd4a57a);
    pie.lineBetween(12, 16, 38, 24);
    pie.lineBetween(12, 24, 38, 16);
    // Steam
    pie.lineStyle(2, 0xffffff, 0.4);
    pie.lineBetween(20, 8, 18, 2);
    pie.lineBetween(30, 6, 32, 0);
    pie.generateTexture('pie', 50, 50);
    pie.destroy();

    // === BEACH BALL ===
    const ball = this.make.graphics({ x: 0, y: 0 });
    ball.fillStyle(0x000000, 0.3);
    ball.fillEllipse(30, 58, 35, 12);
    // Ball
    ball.fillStyle(0xff4444, 1);
    ball.fillCircle(30, 30, 28);
    // Stripes
    ball.fillStyle(0xffffff, 1);
    ball.slice(30, 30, 28, -0.5, 0.5, false);
    ball.fillPath();
    ball.slice(30, 30, 28, 1.5, 2.5, false);
    ball.fillPath();
    ball.fillStyle(0x4444ff, 1);
    ball.slice(30, 30, 28, 2.6, 3.6, false);
    ball.fillPath();
    ball.fillStyle(0xffff44, 1);
    ball.slice(30, 30, 28, 0.6, 1.4, false);
    ball.fillPath();
    // Shine
    ball.fillStyle(0xffffff, 0.5);
    ball.fillCircle(20, 20, 10);
    ball.fillStyle(0xffffff, 0.3);
    ball.fillCircle(18, 18, 5);
    ball.generateTexture('beachball', 60, 65);
    ball.destroy();

    // === CHOOK ===
    const chook = this.make.graphics({ x: 0, y: 0 });
    chook.fillStyle(0x000000, 0.3);
    chook.fillEllipse(25, 58, 30, 10);
    // Body
    chook.fillStyle(0xf5f5f5, 1);
    chook.fillEllipse(25, 38, 22, 25);
    // Wing
    chook.fillStyle(0xe5e5e5, 1);
    chook.fillEllipse(30, 40, 14, 16);
    // Feather detail
    chook.fillStyle(0xd5d5d5, 0.5);
    chook.fillEllipse(28, 42, 8, 10);
    // Head
    chook.fillStyle(0xf5f5f5, 1);
    chook.fillCircle(25, 14, 12);
    // Comb
    chook.fillStyle(0xcc3333, 1);
    chook.fillCircle(25, 4, 5);
    chook.fillCircle(20, 6, 4);
    chook.fillCircle(30, 6, 4);
    // Wattle
    chook.fillStyle(0xcc4444, 1);
    chook.fillEllipse(25, 24, 5, 8);
    // Beak
    chook.fillStyle(0xffaa33, 1);
    chook.beginPath();
    chook.moveTo(25, 14);
    chook.lineTo(40, 16);
    chook.lineTo(25, 18);
    chook.closePath();
    chook.fill();
    // Eye
    chook.fillStyle(0x1a1a1a, 1);
    chook.fillCircle(22, 12, 3);
    chook.fillStyle(0xffffff, 1);
    chook.fillCircle(21, 11, 1);
    // Feet
    chook.fillStyle(0xffaa33, 1);
    chook.fillRect(18, 55, 4, 10);
    chook.fillRect(28, 55, 4, 10);
    chook.generateTexture('chook', 50, 68);
    chook.destroy();

    // === EMU ===
    const emu = this.make.graphics({ x: 0, y: 0 });
    emu.fillStyle(0x000000, 0.3);
    emu.fillEllipse(30, 115, 25, 10);
    // Body (fluffy)
    emu.fillStyle(0x4a3a2a, 1);
    emu.fillEllipse(30, 80, 25, 35);
    // Feather texture
    emu.fillStyle(0x5a4a3a, 0.7);
    for (let i = 0; i < 12; i++) {
      emu.fillCircle(
        25 + Phaser.Math.Between(-12, 12),
        75 + Phaser.Math.Between(-20, 20),
        Phaser.Math.Between(4, 8)
      );
    }
    // Neck
    emu.fillStyle(0x3a3a4a, 1);
    emu.fillRect(26, 25, 8, 50);
    // Neck feathers
    emu.fillStyle(0x4a4a5a, 1);
    emu.fillRect(24, 30, 12, 8);
    // Head
    emu.fillStyle(0x4a4a5a, 1);
    emu.fillEllipse(30, 15, 12, 18);
    // Beak
    emu.fillStyle(0x2a2a2a, 1);
    emu.beginPath();
    emu.moveTo(30, 10);
    emu.lineTo(48, 18);
    emu.lineTo(30, 22);
    emu.closePath();
    emu.fill();
    // Eye
    emu.fillStyle(0xffaa33, 1);
    emu.fillCircle(26, 12, 4);
    emu.fillStyle(0x1a1a1a, 1);
    emu.fillCircle(26, 12, 2);
    // Legs
    emu.fillStyle(0x5a5a5a, 1);
    emu.fillRect(22, 100, 5, 20);
    emu.fillRect(33, 100, 5, 20);
    // Feet
    emu.fillRect(18, 118, 12, 4);
    emu.fillRect(30, 118, 12, 4);
    emu.generateTexture('emu', 60, 125);
    emu.destroy();

    // === JUMP RAMP ===
    const ramp = this.make.graphics({ x: 0, y: 0 });
    ramp.fillStyle(0x000000, 0.3);
    ramp.fillRect(5, 55, 70, 10);
    // Ramp body - yellow/black hazard
    ramp.fillStyle(0xffcc00, 1);
    ramp.beginPath();
    ramp.moveTo(0, 60);
    ramp.lineTo(40, 10);
    ramp.lineTo(80, 10);
    ramp.lineTo(80, 60);
    ramp.closePath();
    ramp.fill();
    // Hazard stripes
    ramp.fillStyle(0x1a1a1a, 1);
    for (let i = 0; i < 6; i++) {
      ramp.beginPath();
      ramp.moveTo(i * 15, 60);
      ramp.lineTo(i * 15 + 8, 60);
      ramp.lineTo(i * 15 + 28, 20);
      ramp.lineTo(i * 15 + 20, 20);
      ramp.closePath();
      ramp.fill();
    }
    // Top surface
    ramp.fillStyle(0x3a3a3a, 1);
    ramp.fillRect(38, 8, 44, 6);
    // Arrow pointing up
    ramp.fillStyle(0xffffff, 0.8);
    ramp.beginPath();
    ramp.moveTo(60, 25);
    ramp.lineTo(50, 45);
    ramp.lineTo(70, 45);
    ramp.closePath();
    ramp.fill();
    ramp.generateTexture('ramp', 85, 65);
    ramp.destroy();

    // === PUDDLE ===
    const puddle = this.make.graphics({ x: 0, y: 0 });
    // Water puddle - blue with ripples
    puddle.fillStyle(0x3a6a9a, 0.7);
    puddle.fillEllipse(40, 25, 40, 22);
    puddle.fillStyle(0x4a7aaa, 0.6);
    puddle.fillEllipse(35, 22, 30, 16);
    puddle.fillStyle(0x5a8aba, 0.5);
    puddle.fillEllipse(30, 20, 20, 10);
    // Ripples
    puddle.lineStyle(2, 0x6a9aca, 0.4);
    puddle.strokeEllipse(40, 25, 35, 18);
    puddle.strokeEllipse(40, 25, 25, 12);
    // Reflection/shine
    puddle.fillStyle(0xffffff, 0.3);
    puddle.fillEllipse(30, 18, 10, 5);
    puddle.generateTexture('puddle', 80, 50);
    puddle.destroy();

    // === OIL POOL ===
    const oil = this.make.graphics({ x: 0, y: 0 });
    // Dark oil slick with rainbow sheen
    oil.fillStyle(0x1a1a2a, 0.9);
    oil.fillEllipse(45, 30, 45, 28);
    oil.fillStyle(0x0a0a1a, 0.8);
    oil.fillEllipse(40, 28, 35, 22);
    // Rainbow oil sheen effect
    oil.fillStyle(0x8844aa, 0.3);
    oil.fillEllipse(35, 22, 25, 14);
    oil.fillStyle(0x44aa88, 0.25);
    oil.fillEllipse(50, 32, 20, 12);
    oil.fillStyle(0xaa8844, 0.2);
    oil.fillEllipse(30, 35, 18, 10);
    // Skull warning?
    oil.fillStyle(0xffff00, 0.6);
    oil.fillCircle(45, 28, 8);
    oil.fillStyle(0x1a1a1a, 1);
    oil.fillCircle(42, 26, 2);
    oil.fillCircle(48, 26, 2);
    oil.fillRect(43, 32, 4, 3);
    oil.generateTexture('oil', 90, 60);
    oil.destroy();

    // === CRAZY PEDESTRIAN ===
    const pedestrian = this.make.graphics({ x: 0, y: 0 });
    // Shadow
    pedestrian.fillStyle(0x000000, 0.3);
    pedestrian.fillEllipse(25, 72, 30, 10);
    // Legs running
    pedestrian.fillStyle(0x3a3a6a, 1);
    pedestrian.fillRoundedRect(14, 50, 8, 24, 3);
    pedestrian.fillRoundedRect(28, 48, 8, 26, 3);
    // Shoes
    pedestrian.fillStyle(0xffffff, 1);
    pedestrian.fillRoundedRect(12, 70, 12, 6, 2);
    pedestrian.fillRoundedRect(26, 70, 12, 6, 2);
    // Body - casual clothes (red shirt)
    pedestrian.fillStyle(0xcc3333, 1);
    pedestrian.fillRoundedRect(12, 28, 26, 26, 5);
    pedestrian.fillStyle(0xdd4444, 1);
    pedestrian.fillRect(12, 30, 8, 22);
    // Arms flailing
    pedestrian.fillStyle(0xcc3333, 1);
    pedestrian.fillRoundedRect(2, 30, 12, 8, 3);
    pedestrian.fillRoundedRect(36, 26, 12, 8, 3);
    // Hands
    pedestrian.fillStyle(0xe8c4a0, 1);
    pedestrian.fillCircle(4, 34, 5);
    pedestrian.fillCircle(46, 30, 5);
    // Head
    pedestrian.fillStyle(0xe8c4a0, 1);
    pedestrian.fillCircle(25, 14, 14);
    // Hair (messy)
    pedestrian.fillStyle(0x4a3a2a, 1);
    pedestrian.fillCircle(25, 8, 10);
    pedestrian.fillRect(18, 4, 5, 8);
    pedestrian.fillRect(28, 2, 5, 10);
    // Crazy eyes (wide open)
    pedestrian.fillStyle(0xffffff, 1);
    pedestrian.fillCircle(20, 12, 5);
    pedestrian.fillCircle(30, 12, 5);
    pedestrian.fillStyle(0x1a1a1a, 1);
    pedestrian.fillCircle(21, 13, 3);
    pedestrian.fillCircle(31, 13, 3);
    // Open mouth screaming
    pedestrian.fillStyle(0x1a1a1a, 1);
    pedestrian.fillEllipse(25, 22, 6, 4);
    // Phone in hand (distracted!)
    pedestrian.fillStyle(0x2a2a2a, 1);
    pedestrian.fillRect(42, 26, 8, 12);
    pedestrian.fillStyle(0x4a8aca, 1);
    pedestrian.fillRect(43, 28, 6, 8);
    pedestrian.generateTexture('pedestrian', 55, 80);
    pedestrian.destroy();

    // === SHOPPING CART (bonus obstacle) ===
    const cart = this.make.graphics({ x: 0, y: 0 });
    cart.fillStyle(0x000000, 0.3);
    cart.fillEllipse(30, 55, 35, 10);
    // Cart body (wire mesh look)
    cart.fillStyle(0x888888, 1);
    cart.fillRect(8, 15, 44, 35);
    cart.lineStyle(2, 0xaaaaaa);
    for (let y = 20; y < 48; y += 6) {
      cart.lineBetween(10, y, 50, y);
    }
    for (let x = 14; x < 50; x += 8) {
      cart.lineBetween(x, 17, x, 48);
    }
    // Handle
    cart.fillStyle(0x666666, 1);
    cart.fillRect(4, 10, 4, 40);
    cart.fillRect(4, 8, 20, 4);
    // Wheels
    cart.fillStyle(0x2a2a2a, 1);
    cart.fillCircle(15, 52, 6);
    cart.fillCircle(45, 52, 6);
    cart.fillStyle(0x4a4a4a, 1);
    cart.fillCircle(15, 52, 3);
    cart.fillCircle(45, 52, 3);
    cart.generateTexture('cart', 60, 60);
    cart.destroy();
  }

  private createUI(): void {
    // === JOYSTICK BASE ===
    const jBase = this.make.graphics({ x: 0, y: 0 });
    // Outer ring
    jBase.fillStyle(0x000000, 0.6);
    jBase.fillCircle(75, 75, 73);
    jBase.fillStyle(0x1a1a1a, 0.8);
    jBase.fillCircle(75, 75, 68);
    // Inner area
    jBase.fillStyle(0x2a2a2a, 0.6);
    jBase.fillCircle(75, 75, 55);
    // Direction arrows
    jBase.fillStyle(0xffffff, 0.15);
    jBase.beginPath();
    jBase.moveTo(75, 20);
    jBase.lineTo(65, 35);
    jBase.lineTo(85, 35);
    jBase.closePath();
    jBase.fill();
    jBase.beginPath();
    jBase.moveTo(75, 130);
    jBase.lineTo(65, 115);
    jBase.lineTo(85, 115);
    jBase.closePath();
    jBase.fill();
    jBase.beginPath();
    jBase.moveTo(20, 75);
    jBase.lineTo(35, 65);
    jBase.lineTo(35, 85);
    jBase.closePath();
    jBase.fill();
    jBase.beginPath();
    jBase.moveTo(130, 75);
    jBase.lineTo(115, 65);
    jBase.lineTo(115, 85);
    jBase.closePath();
    jBase.fill();
    // Border
    jBase.lineStyle(3, 0x8b5a3a, 0.8);
    jBase.strokeCircle(75, 75, 70);
    jBase.generateTexture('joystick-base', 150, 150);
    jBase.destroy();

    // === JOYSTICK KNOB ===
    const jKnob = this.make.graphics({ x: 0, y: 0 });
    jKnob.fillStyle(0x8b5a3a, 1);
    jKnob.fillCircle(35, 35, 33);
    jKnob.fillStyle(0xa67a5a, 1);
    jKnob.fillCircle(32, 32, 25);
    jKnob.fillStyle(0xb68a6a, 0.5);
    jKnob.fillCircle(28, 28, 15);
    jKnob.lineStyle(3, 0xffffff, 0.4);
    jKnob.strokeCircle(35, 35, 30);
    jKnob.generateTexture('joystick-knob', 70, 70);
    jKnob.destroy();

    // === BRAKE BUTTON ===
    const brake = this.make.graphics({ x: 0, y: 0 });
    brake.fillStyle(0xaa0000, 1);
    brake.fillRoundedRect(0, 0, 100, 100, 20);
    brake.fillStyle(0xcc2222, 1);
    brake.fillRoundedRect(5, 5, 90, 85, 16);
    brake.fillStyle(0xdd3333, 0.5);
    brake.fillRoundedRect(10, 10, 50, 40, 10);
    brake.lineStyle(3, 0xffffff, 0.5);
    brake.strokeRoundedRect(8, 8, 84, 78, 14);
    brake.generateTexture('brake-btn', 100, 100);
    brake.destroy();

    // === BOOST BUTTON ===
    const boost = this.make.graphics({ x: 0, y: 0 });
    boost.fillStyle(0x007700, 1);
    boost.fillRoundedRect(0, 0, 80, 80, 16);
    boost.fillStyle(0x009900, 1);
    boost.fillRoundedRect(4, 4, 72, 68, 12);
    boost.fillStyle(0x00bb00, 0.5);
    boost.fillRoundedRect(8, 8, 40, 30, 8);
    // Arrow
    boost.fillStyle(0xffffff, 0.9);
    boost.beginPath();
    boost.moveTo(40, 18);
    boost.lineTo(22, 45);
    boost.lineTo(58, 45);
    boost.closePath();
    boost.fill();
    boost.fillRect(32, 42, 16, 22);
    boost.lineStyle(2, 0xffffff, 0.4);
    boost.strokeRoundedRect(6, 6, 68, 64, 10);
    boost.generateTexture('boost-btn', 80, 80);
    boost.destroy();

    // === BUCKET (TEM branded) ===
    const bucket = this.make.graphics({ x: 0, y: 0 });
    bucket.fillStyle(0xf0f0f0, 1);
    bucket.fillRect(5, 12, 50, 50);
    bucket.fillStyle(0xffffff, 1);
    bucket.fillRect(5, 8, 50, 8);
    // Handle
    bucket.lineStyle(4, 0xaaaaaa);
    bucket.beginPath();
    bucket.arc(30, 8, 16, Math.PI, 0);
    bucket.strokePath();
    // TEM logo area
    bucket.fillStyle(0x8b5a3a, 1);
    bucket.fillRect(10, 20, 40, 15);
    // Tree icon
    bucket.fillStyle(0xffffff, 1);
    bucket.fillCircle(18, 27, 5);
    bucket.fillRect(16, 27, 4, 6);
    // Plaster inside
    bucket.fillStyle(0xd4c4a4, 1);
    bucket.fillRect(8, 38, 44, 22);
    bucket.generateTexture('bucket', 60, 65);
    bucket.destroy();

    // === SPILL ===
    const spill = this.make.graphics({ x: 0, y: 0 });
    spill.fillStyle(0xd4c4a4, 1);
    spill.fillCircle(12, 12, 12);
    spill.fillStyle(0xe4d4b4, 0.6);
    spill.fillCircle(9, 9, 6);
    spill.generateTexture('spill', 24, 24);
    spill.destroy();

    // === BUTTON ===
    const btn = this.make.graphics({ x: 0, y: 0 });
    btn.fillStyle(0x8b5a3a, 1);
    btn.fillRoundedRect(0, 0, 240, 70, 14);
    btn.fillStyle(0xa67a5a, 1);
    btn.fillRoundedRect(4, 4, 232, 54, 10);
    btn.fillStyle(0xb68a6a, 0.4);
    btn.fillRoundedRect(8, 8, 150, 25, 8);
    btn.lineStyle(3, 0xffffff, 0.3);
    btn.strokeRoundedRect(6, 6, 228, 50, 8);
    btn.generateTexture('button', 240, 70);
    btn.destroy();
  }

  private createCharacters(): void {
    // === JOSE - Driver, ICONIC DREADLOCKS, glasses, black TEM uniform ===
    const jose = this.make.graphics({ x: 0, y: 0 });
    const jw = 70, jh = 115;
    
    // Shadow
    jose.fillStyle(0x000000, 0.4);
    jose.fillEllipse(jw/2, jh - 8, 45, 15);
    
    // Legs (dark work pants)
    jose.fillStyle(0x2a2a3a, 1);
    jose.fillRoundedRect(18, 72, 14, 32, 4);
    jose.fillRoundedRect(38, 72, 14, 32, 4);
    jose.fillStyle(0x1a1a2a, 1);
    jose.fillRect(28, 74, 4, 28);
    
    // Work boots
    jose.fillStyle(0x3a2a1a, 1);
    jose.fillRoundedRect(14, 100, 18, 12, 3);
    jose.fillRoundedRect(38, 100, 18, 12, 3);
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillRect(14, 109, 18, 4);
    jose.fillRect(38, 109, 18, 4);
    
    // Torso - Black TEM uniform
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillRoundedRect(12, 40, 46, 36, 6);
    jose.fillStyle(0x2a2a2a, 1);
    jose.fillRect(12, 43, 10, 30);
    jose.fillStyle(0x0a0a0a, 1);
    jose.fillRect(48, 43, 10, 30);
    
    // TEM logo on chest (small copper/rust colored)
    jose.fillStyle(0x8b5a3a, 1);
    jose.fillRect(28, 48, 14, 8);
    jose.fillStyle(0xffffff, 0.8);
    jose.fillCircle(32, 52, 2);
    
    // Arms
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillRoundedRect(2, 42, 14, 26, 4);
    jose.fillRoundedRect(54, 42, 14, 26, 4);
    
    // Hands
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillRoundedRect(2, 64, 14, 12, 4);
    jose.fillRoundedRect(54, 64, 14, 12, 4);
    
    // Neck
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillRect(28, 32, 14, 12);
    
    // Head
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillCircle(35, 20, 18);
    
    // === ICONIC DREADLOCKS - Big and prominent! ===
    jose.fillStyle(0x3a2a1a, 1);
    // Back dreads (longer, behind head)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI + Math.PI;
      const x = 35 + Math.cos(angle) * 17;
      const y = 20 + Math.sin(angle) * 17;
      jose.fillRoundedRect(x - 4, y, 8, 28 + (i % 3) * 6, 4);
    }
    // Side dreads
    jose.fillStyle(0x4a3a2a, 1);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 0.8 + Math.PI * 1.1;
      const x = 35 + Math.cos(angle) * 16;
      const y = 20 + Math.sin(angle) * 16;
      jose.fillRoundedRect(x - 3, y, 7, 22 + (i % 2) * 5, 3);
    }
    // Top dreads texture
    jose.fillStyle(0x2a1a0a, 1);
    jose.fillCircle(28, 10, 8);
    jose.fillCircle(42, 10, 8);
    jose.fillCircle(35, 6, 10);
    
    // Face
    jose.fillStyle(0x8b6a4a, 1);
    jose.fillEllipse(35, 24, 14, 12);
    
    // Glasses (rectangular frames)
    jose.fillStyle(0x1a1a1a, 1);
    jose.fillRoundedRect(22, 18, 11, 8, 2);
    jose.fillRoundedRect(37, 18, 11, 8, 2);
    jose.fillRect(33, 20, 4, 2);
    jose.fillStyle(0x3a5a7a, 0.4);
    jose.fillRect(24, 20, 7, 4);
    jose.fillRect(39, 20, 7, 4);
    
    // Friendly smile
    jose.lineStyle(2, 0x5a4a3a);
    jose.beginPath();
    jose.arc(35, 28, 6, 0.2, Math.PI - 0.2);
    jose.strokePath();
    
    jose.generateTexture('jose', jw, jh);
    jose.destroy();

    // === JARRAD - Crew, muscular, beard, glasses, black TEM uniform ===
    const jarrad = this.make.graphics({ x: 0, y: 0 });
    const jarW = 75, jarH = 115;
    
    // Shadow
    jarrad.fillStyle(0x000000, 0.4);
    jarrad.fillEllipse(jarW/2, jarH - 8, 50, 16);
    
    // Legs
    jarrad.fillStyle(0x2a2a3a, 1);
    jarrad.fillRoundedRect(20, 70, 16, 35, 5);
    jarrad.fillRoundedRect(40, 70, 16, 35, 5);
    jarrad.fillStyle(0x1a1a2a, 1);
    jarrad.fillRect(32, 72, 4, 30);
    
    // Boots
    jarrad.fillStyle(0x3a2a1a, 1);
    jarrad.fillRoundedRect(16, 100, 22, 12, 3);
    jarrad.fillRoundedRect(40, 100, 22, 12, 3);
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillRect(16, 109, 22, 4);
    jarrad.fillRect(40, 109, 22, 4);
    
    // Muscular torso - Black TEM uniform
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillRoundedRect(10, 32, 56, 42, 8);
    jarrad.fillStyle(0x2a2a2a, 1);
    jarrad.fillRect(10, 36, 12, 36);
    jarrad.fillStyle(0x0a0a0a, 1);
    jarrad.fillRect(54, 36, 12, 36);
    
    // TEM logo on chest
    jarrad.fillStyle(0x8b5a3a, 1);
    jarrad.fillRect(30, 44, 16, 10);
    jarrad.fillStyle(0xffffff, 0.8);
    jarrad.fillCircle(35, 49, 3);
    
    // Muscular arms
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillRoundedRect(-2, 36, 16, 28, 5);
    jarrad.fillRoundedRect(62, 36, 16, 28, 5);
    
    // Hands
    jarrad.fillStyle(0xe8c4a0, 1);
    jarrad.fillRoundedRect(-2, 60, 16, 14, 5);
    jarrad.fillRoundedRect(62, 60, 16, 14, 5);
    
    // Neck
    jarrad.fillStyle(0xe8c4a0, 1);
    jarrad.fillRect(30, 24, 16, 12);
    
    // Head
    jarrad.fillStyle(0xe8c4a0, 1);
    jarrad.fillCircle(38, 14, 18);
    
    // Short hair/buzz cut
    jarrad.fillStyle(0x4a3a2a, 1);
    jarrad.slice(38, 12, 17, Math.PI, 0, false);
    jarrad.fillPath();
    
    // Full beard
    jarrad.fillStyle(0x3a2a1a, 1);
    jarrad.fillRect(24, 20, 28, 14);
    jarrad.fillRoundedRect(22, 26, 32, 12, 6);
    // Beard detail
    jarrad.fillStyle(0x4a3a2a, 0.5);
    jarrad.fillRect(30, 22, 4, 14);
    jarrad.fillRect(42, 22, 4, 14);
    
    // MOUSTACHE - thick and prominent!
    jarrad.fillStyle(0x2a1a0a, 1);
    jarrad.fillRoundedRect(26, 18, 24, 6, 2);
    // Moustache curve down sides
    jarrad.fillRect(24, 20, 6, 4);
    jarrad.fillRect(46, 20, 6, 4);
    
    // Glasses
    jarrad.fillStyle(0x1a1a1a, 1);
    jarrad.fillRoundedRect(24, 10, 12, 9, 2);
    jarrad.fillRoundedRect(40, 10, 12, 9, 2);
    jarrad.fillRect(36, 12, 4, 2);
    // Lens
    jarrad.fillStyle(0x3a5a7a, 0.4);
    jarrad.fillRect(26, 12, 8, 5);
    jarrad.fillRect(42, 12, 8, 5);
    
    jarrad.generateTexture('jarrad', jarW, jarH);
    jarrad.destroy();

    // === MATT - Tall, lanky, worried, black TEM uniform ===
    const matt = this.make.graphics({ x: 0, y: 0 });
    const mattW = 65, mattH = 130;
    
    // Shadow
    matt.fillStyle(0x000000, 0.4);
    matt.fillEllipse(mattW/2, mattH - 8, 40, 14);
    
    // Long skinny legs
    matt.fillStyle(0x2a2a3a, 1);
    matt.fillRoundedRect(18, 75, 12, 42, 4);
    matt.fillRoundedRect(36, 75, 12, 42, 4);
    matt.fillStyle(0x1a1a2a, 1);
    matt.fillRect(27, 78, 4, 36);
    
    // Boots
    matt.fillStyle(0x3a2a1a, 1);
    matt.fillRoundedRect(14, 113, 18, 12, 3);
    matt.fillRoundedRect(34, 113, 18, 12, 3);
    matt.fillStyle(0x1a1a1a, 1);
    matt.fillRect(14, 122, 18, 4);
    matt.fillRect(34, 122, 18, 4);
    
    // Skinny torso - Black TEM uniform
    matt.fillStyle(0x1a1a1a, 1);
    matt.fillRoundedRect(14, 38, 38, 40, 6);
    matt.fillStyle(0x2a2a2a, 1);
    matt.fillRect(14, 42, 8, 34);
    matt.fillStyle(0x0a0a0a, 1);
    matt.fillRect(44, 42, 8, 34);
    
    // TEM logo on chest
    matt.fillStyle(0x8b5a3a, 1);
    matt.fillRect(26, 48, 14, 8);
    matt.fillStyle(0xffffff, 0.8);
    matt.fillCircle(30, 52, 2);
    
    // Lanky arms
    matt.fillStyle(0x1a1a1a, 1);
    matt.fillRoundedRect(4, 40, 12, 28, 4);
    matt.fillRoundedRect(50, 40, 12, 28, 4);
    
    // Hands
    matt.fillStyle(0xe8c4a0, 1);
    matt.fillRoundedRect(4, 64, 12, 12, 4);
    matt.fillRoundedRect(50, 64, 12, 12, 4);
    
    // Long neck
    matt.fillStyle(0xe8c4a0, 1);
    matt.fillRect(26, 26, 14, 16);
    
    // Head (smaller)
    matt.fillStyle(0xe8c4a0, 1);
    matt.fillCircle(33, 14, 15);
    
    // Messy short hair
    matt.fillStyle(0x5a4a3a, 1);
    matt.slice(33, 12, 14, Math.PI + 0.3, -0.3, false);
    matt.fillPath();
    // Messy bits
    matt.fillRect(22, 4, 5, 8);
    matt.fillRect(36, 2, 5, 10);
    matt.fillRect(28, 0, 5, 8);
    
    // Worried face
    matt.fillStyle(0x1a1a1a, 1);
    matt.fillCircle(27, 12, 3);
    matt.fillCircle(39, 12, 3);
    matt.fillStyle(0xffffff, 1);
    matt.fillCircle(26, 11, 1);
    matt.fillCircle(38, 11, 1);
    
    // Worried eyebrows
    matt.lineStyle(2, 0x4a3a2a);
    matt.lineBetween(23, 6, 30, 9);
    matt.lineBetween(43, 6, 36, 9);
    
    // Grimace mouth
    matt.lineStyle(2, 0x6a4a3a);
    matt.lineBetween(27, 22, 39, 22);
    matt.lineBetween(27, 22, 25, 20);
    matt.lineBetween(39, 22, 41, 20);
    
    matt.generateTexture('matt', mattW, mattH);
    matt.destroy();

    // === CREW ICON ===
    const crew = this.make.graphics({ x: 0, y: 0 });
    crew.fillStyle(0x1a1a1a, 1);
    crew.fillCircle(25, 25, 23);
    crew.fillStyle(0xe8c4a0, 1);
    crew.fillCircle(25, 18, 10);
    crew.fillStyle(0xf5f5f5, 1);
    crew.fillEllipse(25, 12, 12, 6);
    crew.fillStyle(0xcccccc, 1);
    crew.fillRect(12, 32, 26, 4);
    crew.lineStyle(3, 0xffffff, 0.5);
    crew.strokeCircle(25, 25, 21);
    crew.generateTexture('crew-icon', 50, 50);
    crew.destroy();
  }

  create(): void {
    this.scene.start('MenuScene');
  }
}
