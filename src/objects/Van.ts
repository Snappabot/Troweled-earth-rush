import Phaser from 'phaser';

export class Van {
  public sprite: Phaser.Physics.Arcade.Sprite;
  public maxSpeed: number = 150;
  
  private scene: Phaser.Scene;
  private velocity: number = 0;
  private acceleration: number = 200;
  private deceleration: number = 100;
  private brakeForce: number = 300;
  private turnSpeed: number = 180;
  private minTurnSpeed: number = 30;
  
  private spillEmitter: Phaser.GameObjects.Particles.ParticleEmitter;
  private isFlashing: boolean = false;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;

    // Create sprite
    this.sprite = scene.physics.add.sprite(x, y, 'van');
    this.sprite.setScale(1.8);
    this.sprite.setDepth(10);
    this.sprite.setCollideWorldBounds(true);
    
    // Set up physics body
    this.sprite.body?.setSize(35, 60);
    this.sprite.setDamping(true);
    this.sprite.setDrag(0.95);

    // Create spill particle emitter
    this.spillEmitter = scene.add.particles(0, 0, 'spill', {
      speed: { min: 50, max: 150 },
      angle: { min: 0, max: 360 },
      scale: { start: 0.8, end: 0.2 },
      lifespan: 800,
      gravityY: 0,
      frequency: -1, // Manual emission
      emitting: false
    });
    this.spillEmitter.setDepth(5);
  }

  update(delta: number, steerX: number, throttleY: number, braking: boolean): void {
    const dt = delta / 1000;

    // Handle acceleration/braking
    if (braking) {
      // Apply brakes
      this.velocity = Math.max(0, this.velocity - this.brakeForce * dt);
    } else if (throttleY < 0) {
      // Accelerate forward (up is negative Y)
      this.velocity = Math.min(this.maxSpeed, this.velocity + this.acceleration * dt);
    } else if (throttleY > 0) {
      // Reverse (slower)
      this.velocity = Math.max(-this.maxSpeed * 0.3, this.velocity - this.acceleration * 0.5 * dt);
    } else {
      // Natural deceleration
      if (this.velocity > 0) {
        this.velocity = Math.max(0, this.velocity - this.deceleration * dt);
      } else if (this.velocity < 0) {
        this.velocity = Math.min(0, this.velocity + this.deceleration * dt);
      }
    }

    // Handle steering (only when moving)
    if (Math.abs(this.velocity) > 5) {
      // Turn rate scales with speed
      const speedFactor = Math.abs(this.velocity) / this.maxSpeed;
      const currentTurnSpeed = Phaser.Math.Linear(this.minTurnSpeed, this.turnSpeed, speedFactor);
      
      // Reverse steering when going backwards
      const steerDirection = this.velocity >= 0 ? 1 : -1;
      this.sprite.angle += steerX * currentTurnSpeed * steerDirection * dt;
    }

    // Calculate velocity components based on angle
    const angleRad = Phaser.Math.DegToRad(this.sprite.angle - 90);
    const vx = Math.cos(angleRad) * this.velocity;
    const vy = Math.sin(angleRad) * this.velocity;

    this.sprite.setVelocity(vx, vy);

    // Keep van in reasonable bounds (left-right)
    const bounds = this.scene.scale;
    const margin = 100;
    if (this.sprite.x < margin) {
      this.sprite.x = margin;
    } else if (this.sprite.x > bounds.width - margin) {
      this.sprite.x = bounds.width - margin;
    }

    // Update spill emitter position
    this.spillEmitter.setPosition(this.sprite.x, this.sprite.y + 20);
  }

  getSpeed(): number {
    return Math.abs(this.velocity);
  }

  emitSpill(intensity: number): void {
    const count = Math.floor(intensity * 3) + 1;
    
    // Emit particles to sides based on turn direction
    this.spillEmitter.setPosition(
      this.sprite.x + Phaser.Math.Between(-20, 20),
      this.sprite.y + 25
    );
    this.spillEmitter.explode(count);
  }

  applyImpact(): void {
    // Reduce speed on collision
    this.velocity *= 0.3;
    
    // Small screen shake already handled in GameScene
  }

  flash(): void {
    if (this.isFlashing) return;
    
    this.isFlashing = true;
    
    this.scene.tweens.add({
      targets: this.sprite,
      alpha: 0.3,
      duration: 100,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        this.sprite.alpha = 1;
        this.isFlashing = false;
      }
    });
  }

  destroy(): void {
    this.sprite.destroy();
    this.spillEmitter.destroy();
  }
}
