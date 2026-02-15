import Phaser from 'phaser';

export class VirtualJoystick {
  private scene: Phaser.Scene;
  private base: Phaser.GameObjects.Image;
  private knob: Phaser.GameObjects.Image;
  private basePosition: Phaser.Math.Vector2;
  private maxDistance: number = 50;
  private currentVector: Phaser.Math.Vector2;
  private activePointer: Phaser.Input.Pointer | null = null;
  private isActive: boolean = false;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.basePosition = new Phaser.Math.Vector2(x, y);
    this.currentVector = new Phaser.Math.Vector2(0, 0);

    // Create joystick base
    this.base = scene.add.image(x, y, 'joystick-base')
      .setScrollFactor(0)
      .setDepth(100)
      .setAlpha(0.8);

    // Create joystick knob
    this.knob = scene.add.image(x, y, 'joystick-knob')
      .setScrollFactor(0)
      .setDepth(101);

    // Set up touch zone (left half of screen)
    const touchZone = scene.add.rectangle(
      scene.scale.width * 0.25,
      scene.scale.height * 0.5,
      scene.scale.width * 0.5,
      scene.scale.height,
      0x000000,
      0
    )
      .setScrollFactor(0)
      .setInteractive()
      .setDepth(99);

    touchZone.on('pointerdown', this.onPointerDown, this);
    scene.input.on('pointermove', this.onPointerMove, this);
    scene.input.on('pointerup', this.onPointerUp, this);
  }

  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    // Only respond to touches on left side of screen
    if (pointer.x > this.scene.scale.width * 0.5) return;
    
    this.activePointer = pointer;
    this.isActive = true;
    
    // Move base to touch position (dynamic joystick)
    this.basePosition.set(pointer.x, pointer.y);
    this.base.setPosition(pointer.x, pointer.y);
    this.knob.setPosition(pointer.x, pointer.y);
    
    // Fade in
    this.scene.tweens.add({
      targets: [this.base, this.knob],
      alpha: 1,
      duration: 100
    });
  }

  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (!this.isActive || pointer.id !== this.activePointer?.id) return;

    const dx = pointer.x - this.basePosition.x;
    const dy = pointer.y - this.basePosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
      // Normalize and clamp to max distance
      const clampedDistance = Math.min(distance, this.maxDistance);
      const normalizedX = dx / distance;
      const normalizedY = dy / distance;

      // Update knob position
      this.knob.x = this.basePosition.x + normalizedX * clampedDistance;
      this.knob.y = this.basePosition.y + normalizedY * clampedDistance;

      // Update vector (-1 to 1 range)
      this.currentVector.set(
        normalizedX * (clampedDistance / this.maxDistance),
        normalizedY * (clampedDistance / this.maxDistance)
      );
    }
  }

  private onPointerUp(pointer: Phaser.Input.Pointer): void {
    if (pointer.id !== this.activePointer?.id) return;

    this.isActive = false;
    this.activePointer = null;

    // Reset knob to center
    this.scene.tweens.add({
      targets: this.knob,
      x: this.basePosition.x,
      y: this.basePosition.y,
      duration: 100,
      ease: 'Back.easeOut'
    });

    // Fade out slightly
    this.scene.tweens.add({
      targets: [this.base, this.knob],
      alpha: 0.6,
      duration: 200
    });

    // Reset vector
    this.currentVector.set(0, 0);
  }

  getVector(): Phaser.Math.Vector2 {
    return this.currentVector;
  }

  isPressed(): boolean {
    return this.isActive;
  }

  destroy(): void {
    this.base.destroy();
    this.knob.destroy();
  }
}
