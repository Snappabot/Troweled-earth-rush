import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload(): void {
    // Generate placeholder graphics since we don't have real assets yet
    this.createPlaceholderAssets();
  }

  createPlaceholderAssets(): void {
    // Van sprite (top-down view)
    const vanGraphics = this.make.graphics({ x: 0, y: 0 });
    // Van body (black panel van)
    vanGraphics.fillStyle(0x1a1a1a, 1);
    vanGraphics.fillRoundedRect(0, 0, 40, 70, 5);
    // Windows
    vanGraphics.fillStyle(0x4a90d9, 1);
    vanGraphics.fillRect(5, 5, 30, 12);
    // Orange stripe (branding)
    vanGraphics.fillStyle(0xd35400, 1);
    vanGraphics.fillRect(2, 35, 36, 6);
    // Wheels
    vanGraphics.fillStyle(0x333333, 1);
    vanGraphics.fillRect(-3, 10, 6, 15);
    vanGraphics.fillRect(37, 10, 6, 15);
    vanGraphics.fillRect(-3, 45, 6, 15);
    vanGraphics.fillRect(37, 45, 6, 15);
    vanGraphics.generateTexture('van', 46, 70);
    vanGraphics.destroy();

    // Road tile
    const roadGraphics = this.make.graphics({ x: 0, y: 0 });
    roadGraphics.fillStyle(0x3d3d3d, 1);
    roadGraphics.fillRect(0, 0, 128, 128);
    // Road markings
    roadGraphics.fillStyle(0xf0f0f0, 1);
    roadGraphics.fillRect(60, 0, 8, 30);
    roadGraphics.fillRect(60, 50, 8, 30);
    roadGraphics.fillRect(60, 100, 8, 28);
    // Side lines
    roadGraphics.fillStyle(0xffcc00, 1);
    roadGraphics.fillRect(10, 0, 4, 128);
    roadGraphics.fillRect(114, 0, 4, 128);
    roadGraphics.generateTexture('road', 128, 128);
    roadGraphics.destroy();

    // Grass tile
    const grassGraphics = this.make.graphics({ x: 0, y: 0 });
    grassGraphics.fillStyle(0x2d5a27, 1);
    grassGraphics.fillRect(0, 0, 64, 64);
    // Random grass patches
    grassGraphics.fillStyle(0x3d7a37, 1);
    grassGraphics.fillCircle(15, 20, 5);
    grassGraphics.fillCircle(45, 35, 7);
    grassGraphics.fillCircle(30, 55, 4);
    grassGraphics.generateTexture('grass', 64, 64);
    grassGraphics.destroy();

    // Kangaroo obstacle
    const kangarooGraphics = this.make.graphics({ x: 0, y: 0 });
    kangarooGraphics.fillStyle(0x8b4513, 1);
    // Body
    kangarooGraphics.fillEllipse(20, 25, 25, 35);
    // Head
    kangarooGraphics.fillCircle(20, 5, 10);
    // Ears
    kangarooGraphics.fillTriangle(12, 0, 15, -12, 18, 0);
    kangarooGraphics.fillTriangle(22, 0, 25, -12, 28, 0);
    // Tail
    kangarooGraphics.fillEllipse(15, 45, 8, 15);
    kangarooGraphics.generateTexture('kangaroo', 40, 60);
    kangarooGraphics.destroy();

    // Road cone
    const coneGraphics = this.make.graphics({ x: 0, y: 0 });
    coneGraphics.fillStyle(0xff6600, 1);
    coneGraphics.fillTriangle(15, 0, 0, 30, 30, 30);
    coneGraphics.fillStyle(0xffffff, 1);
    coneGraphics.fillRect(5, 10, 20, 5);
    coneGraphics.fillRect(7, 20, 16, 4);
    coneGraphics.generateTexture('cone', 30, 30);
    coneGraphics.destroy();

    // Pie (flying obstacle)
    const pieGraphics = this.make.graphics({ x: 0, y: 0 });
    pieGraphics.fillStyle(0xdaa520, 1);
    pieGraphics.fillCircle(15, 15, 15);
    pieGraphics.fillStyle(0x8b4513, 1);
    pieGraphics.fillCircle(15, 15, 10);
    pieGraphics.generateTexture('pie', 30, 30);
    pieGraphics.destroy();

    // Bucket (for spill meter)
    const bucketGraphics = this.make.graphics({ x: 0, y: 0 });
    bucketGraphics.fillStyle(0x666666, 1);
    bucketGraphics.fillRect(0, 5, 30, 30);
    bucketGraphics.fillStyle(0xc4a77d, 1); // Clay color
    bucketGraphics.fillRect(3, 8, 24, 24);
    bucketGraphics.generateTexture('bucket', 30, 35);
    bucketGraphics.destroy();

    // Joystick base
    const joystickBaseGraphics = this.make.graphics({ x: 0, y: 0 });
    joystickBaseGraphics.fillStyle(0x000000, 0.4);
    joystickBaseGraphics.fillCircle(60, 60, 60);
    joystickBaseGraphics.lineStyle(3, 0xffffff, 0.5);
    joystickBaseGraphics.strokeCircle(60, 60, 58);
    joystickBaseGraphics.generateTexture('joystick-base', 120, 120);
    joystickBaseGraphics.destroy();

    // Joystick knob
    const joystickKnobGraphics = this.make.graphics({ x: 0, y: 0 });
    joystickKnobGraphics.fillStyle(0xd35400, 0.9);
    joystickKnobGraphics.fillCircle(25, 25, 25);
    joystickKnobGraphics.lineStyle(2, 0xffffff, 0.7);
    joystickKnobGraphics.strokeCircle(25, 25, 23);
    joystickKnobGraphics.generateTexture('joystick-knob', 50, 50);
    joystickKnobGraphics.destroy();

    // Brake button
    const brakeGraphics = this.make.graphics({ x: 0, y: 0 });
    brakeGraphics.fillStyle(0xcc0000, 0.8);
    brakeGraphics.fillRoundedRect(0, 0, 80, 80, 15);
    brakeGraphics.lineStyle(3, 0xffffff, 0.6);
    brakeGraphics.strokeRoundedRect(2, 2, 76, 76, 14);
    brakeGraphics.generateTexture('brake-btn', 80, 80);
    brakeGraphics.destroy();

    // Spill particle
    const spillGraphics = this.make.graphics({ x: 0, y: 0 });
    spillGraphics.fillStyle(0xc4a77d, 1);
    spillGraphics.fillCircle(8, 8, 8);
    spillGraphics.generateTexture('spill', 16, 16);
    spillGraphics.destroy();

    // Button graphics
    const buttonGraphics = this.make.graphics({ x: 0, y: 0 });
    buttonGraphics.fillStyle(0xd35400, 1);
    buttonGraphics.fillRoundedRect(0, 0, 200, 60, 10);
    buttonGraphics.lineStyle(3, 0xffffff, 0.8);
    buttonGraphics.strokeRoundedRect(2, 2, 196, 56, 9);
    buttonGraphics.generateTexture('button', 200, 60);
    buttonGraphics.destroy();

    // Character placeholders
    // Jose - muscular, dreadlocks
    const joseGraphics = this.make.graphics({ x: 0, y: 0 });
    joseGraphics.fillStyle(0x8b5a2b, 1);
    joseGraphics.fillCircle(25, 20, 18); // Head
    joseGraphics.fillStyle(0x1a1a1a, 1);
    // Dreadlocks
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI + Math.PI;
      joseGraphics.fillRect(25 + Math.cos(angle) * 15, 20 + Math.sin(angle) * 15, 4, 20);
    }
    joseGraphics.fillStyle(0x8b5a2b, 1);
    joseGraphics.fillRect(15, 35, 20, 25); // Body
    joseGraphics.generateTexture('jose', 50, 60);
    joseGraphics.destroy();

    // Jarrad - muscular, beard, glasses
    const jarradGraphics = this.make.graphics({ x: 0, y: 0 });
    jarradGraphics.fillStyle(0xe8c4a0, 1);
    jarradGraphics.fillCircle(25, 20, 18); // Head
    jarradGraphics.fillStyle(0x8b4513, 1);
    jarradGraphics.fillRect(10, 25, 30, 8); // Beard
    jarradGraphics.fillStyle(0x1a1a1a, 1);
    jarradGraphics.fillRect(15, 12, 8, 6); // Glasses left
    jarradGraphics.fillRect(27, 12, 8, 6); // Glasses right
    jarradGraphics.fillRect(23, 14, 4, 2); // Glasses bridge
    jarradGraphics.fillStyle(0xe8c4a0, 1);
    jarradGraphics.fillRect(12, 35, 26, 28); // Muscular body
    jarradGraphics.generateTexture('jarrad', 50, 63);
    jarradGraphics.destroy();

    // Matt - tall, lanky, floppy
    const mattGraphics = this.make.graphics({ x: 0, y: 0 });
    mattGraphics.fillStyle(0xe8c4a0, 1);
    mattGraphics.fillCircle(25, 15, 14); // Small head
    mattGraphics.fillStyle(0x8b4513, 1);
    mattGraphics.fillRect(15, 5, 20, 8); // Short cropped hair
    mattGraphics.fillStyle(0xe8c4a0, 1);
    mattGraphics.fillRect(20, 28, 10, 35); // Lanky body
    // Floppy limbs
    mattGraphics.fillRect(8, 30, 12, 5);
    mattGraphics.fillRect(30, 30, 12, 5);
    mattGraphics.generateTexture('matt', 50, 65);
    mattGraphics.destroy();
  }

  create(): void {
    this.scene.start('MenuScene');
  }
}
