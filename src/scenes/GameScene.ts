import Phaser from 'phaser';

interface LevelConfig {
  timeLimit: number;
  walls: number;
  stops: string[];
  obstacleFrequency: number;
  houseType: 'generic' | 'brutalist';
}

const LEVEL_CONFIGS: Record<number, LevelConfig> = {
  1: { timeLimit: 90, walls: 2, stops: [], obstacleFrequency: 0.4, houseType: 'generic' },
  2: { timeLimit: 110, walls: 3, stops: [], obstacleFrequency: 0.5, houseType: 'generic' },
  3: { timeLimit: 130, walls: 4, stops: [], obstacleFrequency: 0.6, houseType: 'generic' },
  4: { timeLimit: 150, walls: 5, stops: ['coffee'], obstacleFrequency: 0.7, houseType: 'brutalist' },
  5: { timeLimit: 170, walls: 6, stops: ['coffee'], obstacleFrequency: 0.75, houseType: 'brutalist' },
  6: { timeLimit: 190, walls: 8, stops: ['coffee', 'food'], obstacleFrequency: 0.8, houseType: 'brutalist' },
  7: { timeLimit: 220, walls: 10, stops: ['coffee', 'food'], obstacleFrequency: 0.85, houseType: 'brutalist' },
  8: { timeLimit: 260, walls: 14, stops: ['coffee', 'food', 'pee'], obstacleFrequency: 0.9, houseType: 'brutalist' },
  9: { timeLimit: 300, walls: 18, stops: ['coffee', 'food', 'pee'], obstacleFrequency: 0.95, houseType: 'brutalist' },
  10: { timeLimit: 360, walls: 25, stops: ['coffee', 'food', 'pee'], obstacleFrequency: 1.0, houseType: 'brutalist' }
};

export class GameScene extends Phaser.Scene {
  private van!: Phaser.Physics.Arcade.Sprite;
  private obstacles!: Phaser.Physics.Arcade.Group;
  private splats!: Phaser.GameObjects.Group;
  
  private joystickBase!: Phaser.GameObjects.Image;
  private joystickKnob!: Phaser.GameObjects.Image;
  private brakeBtn!: Phaser.GameObjects.Image;
  private boostBtn!: Phaser.GameObjects.Image;
  
  private isJoystickActive = false;
  private joystickPointer: Phaser.Input.Pointer | null = null;
  private joystickVector = { x: 0, y: 0 };
  
  private isBraking = false;
  private isBoosting = false;
  private boostEnergy = 100;
  
  private speed = 0;
  private maxSpeed = 300;
  private acceleration = 150;
  private deceleration = 100;
  private turnSpeed = 3;
  
  private spillLevel = 0;
  private maxSpill = 100;
  
  private timeRemaining = 60;
  private score = 0;
  private level = 1;
  private levelConfig!: LevelConfig;
  
  private timerText!: Phaser.GameObjects.Text;
  private spillMeter!: Phaser.GameObjects.Graphics;
  private scoreText!: Phaser.GameObjects.Text;
  private levelText!: Phaser.GameObjects.Text;
  
  private roadY = 0;
  private distanceTraveled = 0;
  private targetDistance = 3000;
  
  private crewBracing = false;
  private crewIcons: Phaser.GameObjects.Image[] = [];
  
  private gameState: 'driving' | 'arrived' | 'paused' = 'driving';

  constructor() {
    super({ key: 'GameScene' });
  }

  init(data: { level: number }): void {
    this.level = data.level || 1;
    this.levelConfig = LEVEL_CONFIGS[this.level] || LEVEL_CONFIGS[1];
    this.timeRemaining = this.levelConfig.timeLimit;
    this.spillLevel = 0;
    this.score = 0;
    this.speed = 0;
    this.distanceTraveled = 0;
    this.targetDistance = 3000 + (this.level * 800);
    this.gameState = 'driving';
    this.boostEnergy = 100;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Road background (scrolling)
    this.createRoad();

    // Van
    this.van = this.physics.add.sprite(width / 2, height - 250, 'van');
    this.van.setScale(2);
    this.van.setCollideWorldBounds(true);
    this.van.setDrag(50);
    this.van.body?.setSize(30, 50);

    // Obstacles group
    this.obstacles = this.physics.add.group();
    this.splats = this.add.group();

    // Collision
    this.physics.add.overlap(this.van, this.obstacles, this.handleObstacleHit, undefined, this);

    // Create UI
    this.createUI();

    // Create controls
    this.createControls();

    // Timer event
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });

    // Obstacle spawner
    this.time.addEvent({
      delay: 1500,
      callback: this.spawnObstacle,
      callbackScope: this,
      loop: true
    });

    // Fade in
    this.cameras.main.fadeIn(300);

    // Level announcement
    this.showLevelAnnouncement();
  }

  private createRoad(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Create road tiles
    for (let y = -128; y < height + 256; y += 128) {
      for (let x = 0; x < width; x += 128) {
        const road = this.add.image(x + 64, y, 'road');
        road.setData('isRoad', true);
      }
    }

    // Road edges
    const leftEdge = this.add.graphics();
    leftEdge.fillStyle(0x1a5a1a);
    leftEdge.fillRect(0, 0, 80, height);
    leftEdge.setScrollFactor(0);

    const rightEdge = this.add.graphics();
    rightEdge.fillStyle(0x1a5a1a);
    rightEdge.fillRect(width - 80, 0, 80, height);
    rightEdge.setScrollFactor(0);
  }

  private createUI(): void {
    const width = this.cameras.main.width;

    // Timer
    this.timerText = this.add.text(width / 2, 40, `⏱️ ${this.timeRemaining}s`, {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5).setScrollFactor(0).setDepth(100);

    // Level indicator
    this.levelText = this.add.text(width / 2, 90, `Level ${this.level}`, {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#d4a574'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(100);

    // Spill meter background
    const spillBg = this.add.graphics().setScrollFactor(0).setDepth(100);
    spillBg.fillStyle(0x333333, 0.8);
    spillBg.fillRoundedRect(20, 130, 60, 200, 10);

    // Spill meter
    this.spillMeter = this.add.graphics().setScrollFactor(0).setDepth(100);
    this.updateSpillMeter();

    // Bucket icon
    this.add.image(50, 115, 'bucket').setScrollFactor(0).setDepth(100);

    // Score
    this.scoreText = this.add.text(width - 20, 40, `Score: ${this.score}`, {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#ffffff'
    }).setOrigin(1, 0).setScrollFactor(0).setDepth(100);

    // Distance progress
    this.add.text(width - 20, 70, '🏠', {
      fontSize: '24px'
    }).setOrigin(1, 0).setScrollFactor(0).setDepth(100);

    // Crew icons for bracing
    this.createCrewIcons();
  }

  private createCrewIcons(): void {
    const width = this.cameras.main.width;
    
    const joseIcon = this.add.image(width - 50, 150, 'jose').setScale(1.5).setScrollFactor(0).setDepth(100);
    const jarradIcon = this.add.image(width - 50, 210, 'jarrad').setScale(1.5).setScrollFactor(0).setDepth(100);
    const mattIcon = this.add.image(width - 50, 270, 'matt').setScale(1.5).setScrollFactor(0).setDepth(100);

    [joseIcon, jarradIcon, mattIcon].forEach(icon => {
      icon.setInteractive({ useHandCursor: true });
      icon.on('pointerdown', () => {
        this.activateBrace();
      });
    });

    this.crewIcons = [joseIcon, jarradIcon, mattIcon];

    // Labels
    this.add.text(width - 50, 115, 'BRACE!', {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: '#ff6600'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(100);
  }

  private activateBrace(): void {
    if (!this.crewBracing) {
      this.crewBracing = true;
      
      // Visual feedback
      this.crewIcons.forEach(icon => {
        this.tweens.add({
          targets: icon,
          scale: 2,
          duration: 100,
          yoyo: true
        });
        icon.setTint(0x00ff00);
      });

      // Brace lasts 2 seconds
      this.time.delayedCall(2000, () => {
        this.crewBracing = false;
        this.crewIcons.forEach(icon => icon.clearTint());
      });
    }
  }

  private createControls(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Joystick (left side)
    this.joystickBase = this.add.image(120, height - 150, 'joystick-base')
      .setScrollFactor(0)
      .setDepth(100)
      .setAlpha(0.7);

    this.joystickKnob = this.add.image(120, height - 150, 'joystick-knob')
      .setScrollFactor(0)
      .setDepth(101);

    // Brake button (right side)
    this.brakeBtn = this.add.image(width - 130, height - 180, 'brake-btn')
      .setScrollFactor(0)
      .setDepth(100)
      .setInteractive({ useHandCursor: true });

    this.add.text(width - 130, height - 180, 'BRAKE', {
      fontFamily: 'Arial Black',
      fontSize: '14px',
      color: '#ffffff'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(101);

    // Boost button
    this.boostBtn = this.add.image(width - 130, height - 80, 'boost-btn')
      .setScrollFactor(0)
      .setDepth(100)
      .setInteractive({ useHandCursor: true });

    this.add.text(width - 130, height - 80, 'BOOST', {
      fontFamily: 'Arial Black',
      fontSize: '14px',
      color: '#ffffff'
    }).setOrigin(0.5).setScrollFactor(0).setDepth(101);

    // Input handling
    this.input.on('pointerdown', this.handlePointerDown, this);
    this.input.on('pointermove', this.handlePointerMove, this);
    this.input.on('pointerup', this.handlePointerUp, this);

    this.brakeBtn.on('pointerdown', () => { this.isBraking = true; });
    this.brakeBtn.on('pointerup', () => { this.isBraking = false; });
    this.brakeBtn.on('pointerout', () => { this.isBraking = false; });

    this.boostBtn.on('pointerdown', () => { 
      if (this.boostEnergy > 0) this.isBoosting = true; 
    });
    this.boostBtn.on('pointerup', () => { this.isBoosting = false; });
    this.boostBtn.on('pointerout', () => { this.isBoosting = false; });
  }

  private handlePointerDown(pointer: Phaser.Input.Pointer): void {
    // Check if in joystick area (left half of screen, bottom)
    if (pointer.x < this.cameras.main.width / 2 && pointer.y > this.cameras.main.height - 300) {
      this.isJoystickActive = true;
      this.joystickPointer = pointer;
    }
  }

  private handlePointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isJoystickActive && this.joystickPointer && pointer.id === this.joystickPointer.id) {
      const baseX = 120;
      const baseY = this.cameras.main.height - 150;
      const maxDist = 50;

      let dx = pointer.x - baseX;
      let dy = pointer.y - baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > maxDist) {
        dx = (dx / dist) * maxDist;
        dy = (dy / dist) * maxDist;
      }

      this.joystickKnob.setPosition(baseX + dx, baseY + dy);
      this.joystickVector = { x: dx / maxDist, y: dy / maxDist };
    }
  }

  private handlePointerUp(pointer: Phaser.Input.Pointer): void {
    if (this.joystickPointer && pointer.id === this.joystickPointer.id) {
      this.isJoystickActive = false;
      this.joystickPointer = null;
      this.joystickVector = { x: 0, y: 0 };
      
      // Reset knob position
      const baseX = 120;
      const baseY = this.cameras.main.height - 150;
      this.tweens.add({
        targets: this.joystickKnob,
        x: baseX,
        y: baseY,
        duration: 100
      });
    }
  }

  private updateTimer(): void {
    if (this.gameState !== 'driving') return;

    this.timeRemaining--;
    
    if (this.timeRemaining <= 10) {
      this.timerText.setColor('#ff4444');
    }
    
    this.timerText.setText(`⏱️ ${this.timeRemaining}s`);

    if (this.timeRemaining <= 0) {
      this.gameOver(false);
    }
  }

  private spawnObstacle(): void {
    if (this.gameState !== 'driving') return;
    if (Math.random() > this.levelConfig.obstacleFrequency) return;

    const width = this.cameras.main.width;
    
    // More obstacles at higher levels
    const baseObstacles = ['kangaroo', 'pie', 'cone', 'beachball', 'chook'];
    const advancedObstacles = ['pedestrian', 'puddle', 'oil', 'cart', 'emu'];
    const jumpObstacles = ['ramp'];
    
    let availableObstacles = [...baseObstacles];
    if (this.level >= 3) availableObstacles.push(...advancedObstacles.slice(0, 2)); // puddle, pedestrian
    if (this.level >= 5) availableObstacles.push(...advancedObstacles.slice(2, 4)); // oil, cart
    if (this.level >= 7) availableObstacles.push(...advancedObstacles.slice(4)); // emu
    if (this.level >= 4) availableObstacles.push(...jumpObstacles); // ramps

    const type = availableObstacles[Math.floor(Math.random() * availableObstacles.length)];
    
    const x = Phaser.Math.Between(100, width - 100);
    const obstacle = this.obstacles.create(x, -50, type) as Phaser.Physics.Arcade.Sprite;
    obstacle.setScale(1.5);
    obstacle.setData('type', type);

    // Different movement patterns based on type
    if (type === 'kangaroo') {
      // Kangaroo hops side to side
      this.tweens.add({
        targets: obstacle,
        x: x + Phaser.Math.Between(-100, 100),
        duration: 500,
        yoyo: true,
        repeat: -1
      });
    } else if (type === 'beachball') {
      // Beach ball bounces
      this.tweens.add({
        targets: obstacle,
        scale: 2,
        duration: 300,
        yoyo: true,
        repeat: -1
      });
    } else if (type === 'pedestrian') {
      // Pedestrian runs across the road!
      const startLeft = Math.random() > 0.5;
      obstacle.x = startLeft ? -50 : width + 50;
      obstacle.y = Phaser.Math.Between(200, 600);
      this.tweens.add({
        targets: obstacle,
        x: startLeft ? width + 50 : -50,
        duration: 2000 + Math.random() * 1000,
        onComplete: () => obstacle.destroy()
      });
    } else if (type === 'emu') {
      // Emu runs erratically
      this.tweens.add({
        targets: obstacle,
        x: x + Phaser.Math.Between(-150, 150),
        duration: 400,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    } else if (type === 'cart') {
      // Shopping cart rolls slowly
      this.tweens.add({
        targets: obstacle,
        x: x + (Math.random() > 0.5 ? 100 : -100),
        duration: 3000,
        repeat: -1
      });
    } else if (type === 'puddle' || type === 'oil' || type === 'ramp') {
      // Static hazards - larger hitbox
      obstacle.setScale(2);
    }
  }

  private handleObstacleHit(van: any, obstacle: any): void {
    const type = obstacle.getData('type');
    
    // === SPECIAL HAZARD EFFECTS ===
    if (type === 'ramp') {
      // JUMP! Van goes airborne
      this.tweens.add({
        targets: this.van,
        y: this.van.y - 150,
        scaleX: 2.5,
        scaleY: 2.5,
        duration: 400,
        yoyo: true,
        ease: 'Quad.easeOut',
        onComplete: () => {
          this.van.setScale(2);
        }
      });
      // Bonus points for jump!
      this.score += 50;
      const jumpText = this.add.text(this.van.x, this.van.y - 100, '🚀 AIRBORNE! +50', {
        fontFamily: 'Arial Black',
        fontSize: '28px',
        color: '#00ff00'
      }).setOrigin(0.5);
      this.tweens.add({
        targets: jumpText,
        y: jumpText.y - 80,
        alpha: 0,
        duration: 1000,
        onComplete: () => jumpText.destroy()
      });
      obstacle.destroy();
      return;
    }
    
    if (type === 'puddle') {
      // SLIP! Van slides sideways
      this.tweens.add({
        targets: this.van,
        x: this.van.x + Phaser.Math.Between(-80, 80),
        duration: 300,
        ease: 'Sine.easeOut'
      });
      this.addSpill(8);
      const splashText = this.add.text(this.van.x, this.van.y, '💦 SPLASH!', {
        fontFamily: 'Arial Black',
        fontSize: '24px',
        color: '#4a9aff'
      }).setOrigin(0.5);
      this.tweens.add({
        targets: splashText,
        y: splashText.y - 50,
        alpha: 0,
        duration: 600,
        onComplete: () => splashText.destroy()
      });
      obstacle.destroy();
      return;
    }
    
    if (type === 'oil') {
      // SPIN OUT! Van rotates
      this.tweens.add({
        targets: this.van,
        angle: this.van.angle + (Math.random() > 0.5 ? 360 : -360),
        duration: 800,
        ease: 'Cubic.easeOut'
      });
      this.speed *= 0.3;
      this.addSpill(25);
      const spinText = this.add.text(this.van.x, this.van.y, '🛢️ SPIN OUT!', {
        fontFamily: 'Arial Black',
        fontSize: '28px',
        color: '#aa44aa'
      }).setOrigin(0.5);
      this.tweens.add({
        targets: spinText,
        y: spinText.y - 60,
        alpha: 0,
        duration: 800,
        onComplete: () => spinText.destroy()
      });
      this.cameras.main.shake(400, 0.02);
      obstacle.destroy();
      return;
    }
    
    // === STANDARD COLLISIONS ===
    let spillAmount = 10;
    if (type === 'kangaroo') spillAmount = 20;
    if (type === 'beachball') spillAmount = 15;
    if (type === 'emu') spillAmount = 25;
    if (type === 'pedestrian') spillAmount = 30;
    if (type === 'cart') spillAmount = 18;

    if (!this.crewBracing) {
      this.addSpill(spillAmount);
    } else {
      this.addSpill(spillAmount * 0.3);
    }

    // Visual feedback
    this.createSplat(obstacle.x, obstacle.y);
    
    // Screen shake
    this.cameras.main.shake(200, 0.01);

    // Slow down
    this.speed *= 0.7;

    // Remove obstacle
    obstacle.destroy();

    // Show funny text based on type
    let texts = ['Oi!', 'Crikey!', 'Watch it!', 'Steady on!', 'Strewth!'];
    if (type === 'pedestrian') texts = ['📱 GET OFF YOUR PHONE!', 'WATCH WHERE YA GOIN!', 'BLOODY HELL!'];
    if (type === 'emu') texts = ['🦃 STUPID BIRD!', 'EMU ATTACK!', 'RUN BIRD RUN!'];
    if (type === 'cart') texts = ['🛒 TROLLEY!', 'WHO LEFT THAT THERE!'];
    
    const text = this.add.text(this.van.x, this.van.y - 50, texts[Math.floor(Math.random() * texts.length)], {
      fontFamily: 'Arial Black',
      fontSize: '22px',
      color: '#ff6600'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: text,
      y: text.y - 50,
      alpha: 0,
      duration: 800,
      onComplete: () => text.destroy()
    });
  }

  private addSpill(amount: number): void {
    this.spillLevel = Math.min(this.maxSpill, this.spillLevel + amount);
    this.updateSpillMeter();

    if (this.spillLevel >= this.maxSpill) {
      this.gameOver(false);
    }
  }

  private createSplat(x: number, y: number): void {
    const splat = this.add.image(x, y, 'splat');
    splat.setScale(Phaser.Math.FloatBetween(0.8, 1.5));
    splat.setRotation(Phaser.Math.FloatBetween(0, Math.PI * 2));
    splat.setAlpha(0.8);
    this.splats.add(splat);

    // Fade out over time
    this.tweens.add({
      targets: splat,
      alpha: 0,
      duration: 3000,
      onComplete: () => splat.destroy()
    });
  }

  private updateSpillMeter(): void {
    this.spillMeter.clear();
    
    const fillHeight = (this.spillLevel / this.maxSpill) * 180;
    const color = this.spillLevel > 70 ? 0xff4444 : (this.spillLevel > 40 ? 0xffaa44 : 0xd4a574);
    
    this.spillMeter.fillStyle(color, 1);
    this.spillMeter.fillRoundedRect(25, 135 + (180 - fillHeight), 50, fillHeight, 5);
  }

  private showLevelAnnouncement(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    const houseNames = ['Tiny Shack', 'Small House', 'Small House', 'Brutalist Home', 'Brutalist Home', 
                        'Brutalist Home', 'Luxury Villa', 'Luxury Villa', 'Luxury Villa', 'MEGA MANSION'];
    
    const announcement = this.add.text(width / 2, height / 2, 
      `LEVEL ${this.level}\n${houseNames[this.level - 1]}\n\n${this.levelConfig.walls} Walls to Plaster!`, {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#d4a574',
      align: 'center',
      stroke: '#000000',
      strokeThickness: 6
    }).setOrigin(0.5).setDepth(200);

    this.tweens.add({
      targets: announcement,
      scale: 1.2,
      duration: 300,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        this.tweens.add({
          targets: announcement,
          alpha: 0,
          y: announcement.y - 100,
          duration: 500,
          onComplete: () => announcement.destroy()
        });
      }
    });
  }

  update(time: number, delta: number): void {
    if (this.gameState !== 'driving') return;

    // Update van physics based on joystick
    this.updateVanMovement(delta);

    // Update road scroll
    this.updateRoadScroll(delta);

    // Update obstacles
    this.updateObstacles(delta);

    // Update boost energy
    this.updateBoost(delta);

    // Check if reached destination
    if (this.distanceTraveled >= this.targetDistance) {
      this.arriveAtDestination();
    }

    // Update score display
    this.scoreText.setText(`Score: ${Math.floor(this.score)}`);
  }

  private updateVanMovement(delta: number): void {
    const dt = delta / 1000;

    // Acceleration from joystick Y
    if (this.joystickVector.y < -0.1 && !this.isBraking) {
      // Forward
      const accelMultiplier = this.isBoosting ? 2 : 1;
      this.speed = Math.min(this.maxSpeed * accelMultiplier, this.speed + this.acceleration * dt * accelMultiplier);
    } else if (this.joystickVector.y > 0.1 || this.isBraking) {
      // Brake/reverse
      this.speed = Math.max(-this.maxSpeed * 0.3, this.speed - this.deceleration * 2 * dt);
    } else {
      // Coast/decelerate
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - this.deceleration * dt);
      } else if (this.speed < 0) {
        this.speed = Math.min(0, this.speed + this.deceleration * dt);
      }
    }

    // Steering from joystick X
    if (Math.abs(this.speed) > 10) {
      const turnAmount = this.joystickVector.x * this.turnSpeed * dt * (this.speed / this.maxSpeed);
      this.van.rotation += turnAmount;

      // Move van horizontally
      const lateralSpeed = this.joystickVector.x * Math.abs(this.speed) * 0.5;
      this.van.x += lateralSpeed * dt;

      // Clamp to road bounds
      this.van.x = Phaser.Math.Clamp(this.van.x, 100, this.cameras.main.width - 100);

      // Add spill on sharp turns
      if (Math.abs(this.joystickVector.x) > 0.7 && Math.abs(this.speed) > 100) {
        if (!this.crewBracing && Math.random() < 0.1) {
          this.addSpill(2);
          this.createSplat(this.van.x + Phaser.Math.Between(-20, 20), this.van.y + 30);
        }
      }
    }

    // Van tilt animation
    this.van.setRotation(this.joystickVector.x * 0.2);
  }

  private updateRoadScroll(delta: number): void {
    const dt = delta / 1000;
    const scrollSpeed = this.speed * dt;

    // Move road tiles
    this.children.list.forEach(child => {
      if (child.getData && child.getData('isRoad')) {
        const road = child as Phaser.GameObjects.Image;
        road.y += scrollSpeed;

        // Wrap road tiles
        if (road.y > this.cameras.main.height + 128) {
          road.y -= this.cameras.main.height + 384;
        }
      }
    });

    // Update distance
    if (this.speed > 0) {
      this.distanceTraveled += scrollSpeed;
      this.score += scrollSpeed * 0.01;
    }
  }

  private updateObstacles(delta: number): void {
    const dt = delta / 1000;

    this.obstacles.children.iterate((child) => {
      const obstacle = child as Phaser.Physics.Arcade.Sprite;
      if (obstacle) {
        obstacle.y += this.speed * dt;

        // Remove if off screen
        if (obstacle.y > this.cameras.main.height + 100) {
          obstacle.destroy();
          this.score += 10; // Bonus for avoiding
        }
      }
      return true;
    });
  }

  private updateBoost(delta: number): void {
    if (this.isBoosting && this.boostEnergy > 0) {
      this.boostEnergy -= delta * 0.05;
      this.boostBtn.setAlpha(0.5 + (this.boostEnergy / 200));
      
      if (this.boostEnergy <= 0) {
        this.isBoosting = false;
        this.boostEnergy = 0;
      }
    } else if (!this.isBoosting && this.boostEnergy < 100) {
      this.boostEnergy += delta * 0.01;
    }
  }

  private arriveAtDestination(): void {
    this.gameState = 'arrived';
    this.speed = 0;

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Show house
    const houseTexture = this.levelConfig.houseType === 'brutalist' ? 'brutalist' : 'house';
    const house = this.add.image(width / 2, 200, houseTexture).setScale(3);

    // Arrival message
    const arrivalText = this.add.text(width / 2, height / 2, '🏠 ARRIVED!\n\nTime to Trowel!', {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#00ff00',
      align: 'center'
    }).setOrigin(0.5);

    // Transition to troweling
    this.time.delayedCall(2000, () => {
      this.scene.start('TrowelingScene', {
        level: this.level,
        timeRemaining: this.timeRemaining,
        spillLevel: this.spillLevel,
        score: this.score,
        walls: this.levelConfig.walls
      });
    });
  }

  private gameOver(success: boolean): void {
    this.gameState = 'paused';

    if (!success) {
      const reason = this.spillLevel >= this.maxSpill ? 'Too much spill!' : 'Out of time!';
      this.scene.start('GameOverScene', {
        level: this.level,
        score: this.score,
        success: false,
        reason
      });
    }
  }
}
