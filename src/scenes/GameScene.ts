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
  private maxSpeed = 390;
  private acceleration = 195;
  private deceleration = 130;
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
  private targetDistance = 5000;
  
  private roadBendOffset = 0;
  private roadBendTarget = 0;
  private roadBendSpeed = 0;
  
  private crewBracing = false;
  private crewIcons: Phaser.GameObjects.Image[] = [];
  
  private gameState: 'driving' | 'arrived' | 'paused' | 'at_stop' = 'driving';
  
  // Oncoming traffic
  private oncomingTraffic!: Phaser.Physics.Arcade.Group;
  private trafficSpeed = 200;
  
  // Stops system
  private stopsRemaining: string[] = [];
  private stopsCompleted: string[] = [];
  private nextStopDistance = 0;
  private currentStop: Phaser.GameObjects.Container | null = null;
  private stopZone: Phaser.GameObjects.Rectangle | null = null;
  
  // Lane positions (4 lanes total)
  private lane1X = 0;  // Far left - our lane / same direction
  private lane2X = 0;  // Inner left - same direction traffic
  private lane3X = 0;  // Inner right - oncoming traffic
  private lane4X = 0;  // Far right - oncoming traffic
  
  // Same direction traffic
  private sameDirectionTraffic!: Phaser.Physics.Arcade.Group;

  constructor() {
    super({ key: 'GameScene' });
  }

  init(data: { level: number; timeRemaining?: number; spillLevel?: number; score?: number; stopsCompleted?: string[] }): void {
    this.level = data.level || 1;
    this.levelConfig = LEVEL_CONFIGS[this.level] || LEVEL_CONFIGS[1];
    this.timeRemaining = data.timeRemaining ?? this.levelConfig.timeLimit;
    this.spillLevel = data.spillLevel ?? 0;
    this.score = data.score ?? 0;
    this.speed = 0;
    this.distanceTraveled = 0;
    this.targetDistance = 5000 + (this.level * 1200);
    this.gameState = 'driving';
    this.boostEnergy = 100;
    this.roadBendOffset = 0;
    this.roadBendTarget = 0;
    this.roadBendSpeed = 0;
    
    // Set up stops for this level
    this.stopsCompleted = data.stopsCompleted ?? [];
    this.stopsRemaining = this.levelConfig.stops.filter(s => !this.stopsCompleted.includes(s));
    
    // Calculate when stops appear (evenly distributed along route)
    if (this.stopsRemaining.length > 0) {
      const stopInterval = this.targetDistance / (this.stopsRemaining.length + 1);
      this.nextStopDistance = stopInterval;
    } else {
      this.nextStopDistance = Infinity;
    }
    
    this.currentStop = null;
    this.stopZone = null;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Calculate lane positions (4 lanes)
    // Left side goes UP (our direction), Right side goes DOWN (oncoming)
    const laneWidth = 85;
    const roadCenter = width / 2;
    this.lane1X = roadCenter - laneWidth * 1.5;  // Far left - player's main lane
    this.lane2X = roadCenter - laneWidth * 0.5;  // Inner left - same direction traffic
    this.lane3X = roadCenter + laneWidth * 0.5;  // Inner right - oncoming
    this.lane4X = roadCenter + laneWidth * 1.5;  // Far right - oncoming

    // Road background (scrolling)
    this.createRoad();

    // Van - positioned in lane 1 (far left)
    this.van = this.physics.add.sprite(this.lane1X, height - 250, 'van');
    this.van.setScale(1.44);
    this.van.setCollideWorldBounds(true);
    this.van.setDrag(50);
    this.van.body?.setSize(32, 50);
    this.van.setDepth(50);

    // Obstacles group (hazards on road)
    this.obstacles = this.physics.add.group();
    this.splats = this.add.group();
    
    // Same direction traffic (lane 2 - inner left, going UP)
    this.sameDirectionTraffic = this.physics.add.group();
    
    // Oncoming traffic group (lanes 3 & 4 - right side, going DOWN)
    this.oncomingTraffic = this.physics.add.group();

    // Collisions
    this.physics.add.overlap(this.van, this.obstacles, this.handleObstacleHit, undefined, this);
    this.physics.add.overlap(this.van, this.oncomingTraffic, this.handleTrafficCollision, undefined, this);
    this.physics.add.overlap(this.van, this.sameDirectionTraffic, this.handleSameDirectionCollision, undefined, this);

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

    // Road bend spawner
    this.time.addEvent({
      delay: 2500,
      callback: this.createRoadBend,
      callbackScope: this,
      loop: true
    });

    // Oncoming traffic spawner (right lanes, going down)
    this.time.addEvent({
      delay: 1000 - (this.level * 60),
      callback: this.spawnOncomingTraffic,
      callbackScope: this,
      loop: true
    });
    
    // Same direction traffic spawner (lane 2, going up)
    this.time.addEvent({
      delay: 1800 - (this.level * 80),
      callback: this.spawnSameDirectionTraffic,
      callbackScope: this,
      loop: true
    });

    // Fade in
    this.cameras.main.fadeIn(300);

    // Level announcement
    this.showLevelAnnouncement();
    
    // Show stops indicator if there are stops
    if (this.stopsRemaining.length > 0) {
      this.showStopsIndicator();
    }
  }

  private showStopsIndicator(): void {
    const width = this.cameras.main.width;
    const stopsText = this.stopsRemaining.map(s => {
      if (s === 'coffee') return '☕';
      if (s === 'food') return '🥧';
      if (s === 'pee') return '🚽';
      return '';
    }).join(' ');
    
    const indicator = this.add.text(width / 2, 130, `STOPS: ${stopsText}`, {
      fontFamily: 'Arial Black',
      fontSize: '20px',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setScrollFactor(0).setDepth(100);
    
    // Pulse animation
    this.tweens.add({
      targets: indicator,
      scale: 1.1,
      duration: 500,
      yoyo: true,
      repeat: 2,
      onComplete: () => {
        indicator.setScale(1);
      }
    });
  }

  private createRoad(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // === PARALLAX LAYER 1: SKY (static background) ===
    const sky = this.add.image(width / 2, height / 2, 'sky');
    sky.setDisplaySize(width, height);
    sky.setScrollFactor(0);
    sky.setDepth(-100);

    // === PARALLAX LAYER 2: DISTANT CITY (very slow scroll) ===
    for (let x = -250; x < width + 500; x += 500) {
      const city = this.add.image(x, 120, 'city-silhouette');
      city.setData('parallaxLayer', 'city');
      city.setData('parallaxSpeed', 0.05);
      city.setDepth(-90);
    }

    // === PARALLAX LAYER 3: HILLS (slow scroll) ===
    for (let x = -250; x < width + 500; x += 500) {
      const hills = this.add.image(x, 180, 'hills');
      hills.setData('parallaxLayer', 'hills');
      hills.setData('parallaxSpeed', 0.15);
      hills.setDepth(-80);
    }

    // === ROADSIDE SCENERY (houses, trees, etc.) ===
    // These spawn dynamically during gameplay
    this.time.addEvent({
      delay: 800,
      callback: this.spawnRoadsideScenery,
      callbackScope: this,
      loop: true
    });

    // === ROAD TILES ===
    const tileSize = 220;
    for (let y = -tileSize; y < height + tileSize * 2; y += tileSize) {
      const road = this.add.image(width / 2, y, 'road');
      road.setData('isRoad', true);
      road.setDepth(-10);
    }
  }

  private spawnRoadsideScenery(): void {
    if (this.gameState !== 'driving' || this.speed < 50) return;

    const width = this.cameras.main.width;
    const side = Math.random() > 0.5 ? 'left' : 'right';
    const x = side === 'left' ? Phaser.Math.Between(-30, 50) : Phaser.Math.Between(width - 50, width + 30);
    
    // Scenery type depends on level aesthetics
    let types: string[];
    if (this.levelConfig.houseType === 'brutalist') {
      // Brutalist levels: modern, sparse, more concrete
      types = ['brutalist', 'house3', 'tree', 'streetlamp', 'streetlamp', 'hydrant'];
    } else {
      // Generic levels: suburban, friendly
      types = ['house1', 'house2', 'tree', 'tree', 'bush', 'bush', 'mailbox', 'fence'];
    }
    
    const type = types[Math.floor(Math.random() * types.length)];
    
    const scenery = this.add.image(x, -100, type);
    scenery.setDepth(-5);
    
    // Scale based on type
    if (type.includes('house') || type === 'brutalist') {
      scenery.setScale(Phaser.Math.FloatBetween(1.2, 1.8));
    } else if (type === 'tree') {
      scenery.setScale(Phaser.Math.FloatBetween(1.5, 2.5));
    } else if (type === 'fence') {
      scenery.setScale(1.5);
    } else {
      scenery.setScale(Phaser.Math.FloatBetween(1, 1.5));
    }
    
    // Flip for right side
    if (side === 'right') {
      scenery.setFlipX(true);
    }
    
    scenery.setData('isScenery', true);
    scenery.setData('scrollSpeed', 0.9);
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

  // === ONCOMING TRAFFIC SYSTEM (Right lanes - going DOWN) ===
  private spawnOncomingTraffic(): void {
    if (this.gameState !== 'driving') return;
    
    // Different car types with varying speeds
    const carTypes = ['car-red', 'car-blue', 'car-white', 'truck', 'ute'];
    const type = carTypes[Math.floor(Math.random() * carTypes.length)];
    
    // Pick random right lane (lane 3 or lane 4)
    const laneX = Math.random() > 0.5 ? this.lane3X : this.lane4X;
    
    // Create car in right lane (oncoming - going down screen)
    const car = this.oncomingTraffic.create(laneX, -80, 'van') as Phaser.Physics.Arcade.Sprite;
    car.setScale(1.26);
    car.setFlipY(true); // Face downward (coming toward us)
    car.setTint(this.getCarTint(type));
    car.setData('type', type);
    car.setData('speed', this.trafficSpeed + Phaser.Math.Between(-50, 100));
    car.setDepth(45);
    
    // Trucks are bigger and slower
    if (type === 'truck') {
      car.setScale(1.62);
      car.setData('speed', this.trafficSpeed - 50);
    }
  }
  
  // === SAME DIRECTION TRAFFIC (Lane 2 - going UP) ===
  private spawnSameDirectionTraffic(): void {
    if (this.gameState !== 'driving') return;
    if (this.speed < 100) return; // Only spawn when we're moving fast
    
    const carTypes = ['car-red', 'car-blue', 'car-white', 'ute'];
    const type = carTypes[Math.floor(Math.random() * carTypes.length)];
    
    // Spawn ahead or behind based on relative speed
    const spawnBehind = Math.random() > 0.3;
    const y = spawnBehind ? this.cameras.main.height + 100 : -80;
    
    const car = this.sameDirectionTraffic.create(this.lane2X, y, 'van') as Phaser.Physics.Arcade.Sprite;
    car.setScale(1.26);
    car.setTint(this.getCarTint(type));
    car.setData('type', type);
    // Same direction cars move at varying speeds relative to us
    car.setData('speed', Phaser.Math.Between(150, 350)); // Their absolute speed
    car.setData('spawnedBehind', spawnBehind);
    car.setDepth(45);
  }
  
  private handleSameDirectionCollision(van: any, car: any): void {
    // Side collision or rear-end - moderate penalty
    this.addSpill(20);
    this.speed *= 0.5;
    
    this.cameras.main.shake(300, 0.02);
    
    const crashText = this.add.text(this.van.x, this.van.y - 60, '💥 CRASH!', {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ff6600',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(200);
    
    this.tweens.add({
      targets: crashText,
      y: crashText.y - 50,
      alpha: 0,
      duration: 800,
      onComplete: () => crashText.destroy()
    });
    
    car.destroy();
  }

  private getCarTint(type: string): number {
    switch (type) {
      case 'car-red': return 0xff4444;
      case 'car-blue': return 0x4444ff;
      case 'car-white': return 0xeeeeee;
      case 'truck': return 0x888888;
      case 'ute': return 0x44aa44;
      default: return 0xffffff;
    }
  }

  private handleTrafficCollision(van: any, car: any): void {
    // Head-on collision - major penalty!
    this.addSpill(40);
    this.speed = 0;
    
    // Big screen shake
    this.cameras.main.shake(500, 0.03);
    
    // Crash text
    const crashText = this.add.text(this.van.x, this.van.y - 80, '💥 HEAD-ON! 💥', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#ff0000',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5).setDepth(200);
    
    this.tweens.add({
      targets: crashText,
      y: crashText.y - 100,
      alpha: 0,
      scale: 1.5,
      duration: 1000,
      onComplete: () => crashText.destroy()
    });
    
    // Destroy the car
    car.destroy();
    
    // Knock van back
    this.tweens.add({
      targets: this.van,
      y: this.van.y + 100,
      duration: 300,
      yoyo: true
    });
  }

  private updateOncomingTraffic(delta: number): void {
    const dt = delta / 1000;
    const height = this.cameras.main.height;

    this.oncomingTraffic.children.iterate((child) => {
      const car = child as Phaser.Physics.Arcade.Sprite;
      if (car) {
        const carSpeed = car.getData('speed') || this.trafficSpeed;
        // Oncoming traffic moves DOWN the screen (toward us)
        // Combined speed = our speed + their speed
        car.y += (this.speed + carSpeed) * dt;

        // Remove when off screen
        if (car.y > height + 150) {
          car.destroy();
        }
      }
      return true;
    });
  }
  
  private updateSameDirectionTraffic(delta: number): void {
    const dt = delta / 1000;
    const height = this.cameras.main.height;

    this.sameDirectionTraffic.children.iterate((child) => {
      const car = child as Phaser.Physics.Arcade.Sprite;
      if (car) {
        const carSpeed = car.getData('speed') || 200;
        const spawnedBehind = car.getData('spawnedBehind');
        
        // Relative movement: if car is faster than us, it moves up; if slower, it moves down
        const relativeSpeed = this.speed - carSpeed;
        car.y += relativeSpeed * dt;

        // Remove when off screen (either direction)
        if (car.y > height + 150 || car.y < -150) {
          car.destroy();
        }
      }
      return true;
    });
  }

  // === STOPS SYSTEM ===
  private checkForStops(): void {
    if (this.stopsRemaining.length === 0) return;
    if (this.currentStop) return; // Already showing a stop
    
    // Check if we've reached the next stop distance
    if (this.distanceTraveled >= this.nextStopDistance) {
      this.spawnStop(this.stopsRemaining[0]);
    }
  }

  private spawnStop(stopType: string): void {
    const width = this.cameras.main.width;
    
    // Create stop zone on the left side of road
    const stopX = 60;
    const stopY = -150;
    
    // Stop building container
    this.currentStop = this.add.container(stopX, stopY);
    this.currentStop.setDepth(30);
    
    // Stop graphics
    const stopBg = this.add.graphics();
    let stopColor = 0x8b4513;
    let stopEmoji = '🏪';
    let stopName = 'STOP';
    
    if (stopType === 'coffee') {
      stopColor = 0x4a2c0a;
      stopEmoji = '☕';
      stopName = 'COFFEE';
    } else if (stopType === 'food') {
      stopColor = 0xcc6600;
      stopEmoji = '🥧';
      stopName = 'SERVO';
    } else if (stopType === 'pee') {
      stopColor = 0x2266aa;
      stopEmoji = '🚽';
      stopName = 'DUNNY';
    }
    
    // Building
    stopBg.fillStyle(stopColor, 1);
    stopBg.fillRoundedRect(-40, -60, 80, 80, 8);
    stopBg.fillStyle(0x000000, 0.3);
    stopBg.fillRect(-35, -55, 70, 10);
    
    const emoji = this.add.text(0, -30, stopEmoji, { fontSize: '40px' }).setOrigin(0.5);
    const label = this.add.text(0, 15, stopName, {
      fontFamily: 'Arial Black',
      fontSize: '14px',
      color: '#ffffff'
    }).setOrigin(0.5);
    
    // "PULL IN!" indicator
    const pullIn = this.add.text(0, 45, '⬅️ PULL IN!', {
      fontFamily: 'Arial Black',
      fontSize: '16px',
      color: '#ffff00',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5);
    
    this.tweens.add({
      targets: pullIn,
      scale: 1.2,
      duration: 300,
      yoyo: true,
      repeat: -1
    });
    
    this.currentStop.add([stopBg, emoji, label, pullIn]);
    this.currentStop.setData('stopType', stopType);
    this.currentStop.setData('isScrolling', true);
    
    // Create invisible stop zone for collision
    this.stopZone = this.add.rectangle(stopX, stopY, 100, 120, 0x00ff00, 0);
    this.stopZone.setData('stopType', stopType);
  }

  private updateStops(delta: number): void {
    if (!this.currentStop) return;
    
    const dt = delta / 1000;
    const height = this.cameras.main.height;
    
    // Scroll stop down
    if (this.currentStop.getData('isScrolling')) {
      this.currentStop.y += this.speed * dt * 0.9;
      if (this.stopZone) {
        this.stopZone.y = this.currentStop.y;
      }
      
      // Check if van is in stop zone
      if (this.stopZone && this.van.x < 120 && 
          Math.abs(this.van.y - this.stopZone.y) < 80 &&
          this.speed < 50) {
        this.enterStop();
      }
      
      // Remove if missed
      if (this.currentStop.y > height + 100) {
        this.missedStop();
      }
    }
  }

  private enterStop(): void {
    const stopType = this.currentStop?.getData('stopType');
    if (!stopType) return;
    
    this.gameState = 'at_stop';
    this.speed = 0;
    
    // Success feedback
    const successText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 
      `${stopType.toUpperCase()} BREAK!`, {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#00ff00',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5).setDepth(200);
    
    this.tweens.add({
      targets: successText,
      scale: 1.3,
      duration: 500,
      yoyo: true,
      onComplete: () => {
        successText.destroy();
        // Go to mini-game
        this.launchMiniGame(stopType);
      }
    });
  }

  private missedStop(): void {
    const stopType = this.currentStop?.getData('stopType');
    
    // Penalty for missing stop
    this.addSpill(20);
    
    const missText = this.add.text(this.cameras.main.width / 2, 200, 
      `MISSED ${stopType?.toUpperCase()}! +20 SPILL`, {
      fontFamily: 'Arial Black',
      fontSize: '24px',
      color: '#ff4444',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(200);
    
    this.tweens.add({
      targets: missText,
      y: missText.y - 50,
      alpha: 0,
      duration: 1500,
      onComplete: () => missText.destroy()
    });
    
    // Clean up
    this.currentStop?.destroy();
    this.currentStop = null;
    this.stopZone?.destroy();
    this.stopZone = null;
    
    // Move to next stop
    this.stopsRemaining.shift();
    if (this.stopsRemaining.length > 0) {
      const stopInterval = (this.targetDistance - this.distanceTraveled) / (this.stopsRemaining.length + 1);
      this.nextStopDistance = this.distanceTraveled + stopInterval;
    }
  }

  private launchMiniGame(stopType: string): void {
    // Clean up current stop
    this.currentStop?.destroy();
    this.currentStop = null;
    this.stopZone?.destroy();
    this.stopZone = null;
    
    // Mark as completed
    this.stopsCompleted.push(stopType);
    this.stopsRemaining.shift();
    
    // Calculate next stop distance
    if (this.stopsRemaining.length > 0) {
      const stopInterval = (this.targetDistance - this.distanceTraveled) / (this.stopsRemaining.length + 1);
      this.nextStopDistance = this.distanceTraveled + stopInterval;
    }
    
    // Launch appropriate mini-game scene
    const sceneData = {
      level: this.level,
      timeRemaining: this.timeRemaining,
      spillLevel: this.spillLevel,
      score: this.score,
      distanceTraveled: this.distanceTraveled,
      targetDistance: this.targetDistance,
      stopsCompleted: this.stopsCompleted,
      stopsRemaining: this.stopsRemaining
    };
    
    if (stopType === 'coffee') {
      this.scene.start('CoffeeScene', sceneData);
    } else if (stopType === 'food') {
      this.scene.start('FoodScene', sceneData);
    } else if (stopType === 'pee') {
      this.scene.start('PeeScene', sceneData);
    }
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
    
    // Update oncoming traffic
    this.updateOncomingTraffic(delta);
    
    // Update same direction traffic
    this.updateSameDirectionTraffic(delta);
    
    // Update stops
    this.updateStops(delta);
    this.checkForStops();

    // Update boost energy
    this.updateBoost(delta);

    // Check if reached destination (only if all stops completed)
    if (this.distanceTraveled >= this.targetDistance && this.stopsRemaining.length === 0) {
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

      // Clamp to road bounds - can use left 2 lanes, but crossing center is dangerous!
      const width = this.cameras.main.width;
      const centerLine = width / 2;
      const leftBound = this.lane1X - 40;  // Left edge of road
      const rightBound = this.lane4X + 40; // Right edge of road
      this.van.x = Phaser.Math.Clamp(this.van.x, leftBound, rightBound);

      // Warning if drifting into oncoming lanes (right side)
      if (this.van.x > centerLine - 10) {
        // In danger zone - in oncoming lanes!
        if (!this.van.getData('inDangerZone')) {
          this.van.setData('inDangerZone', true);
          const dangerText = this.add.text(this.van.x, this.van.y - 80, '⚠️ WRONG SIDE!', {
            fontFamily: 'Arial Black',
            fontSize: '22px',
            color: '#ff0000',
            stroke: '#000000',
            strokeThickness: 4
          }).setOrigin(0.5).setDepth(200);
          this.tweens.add({
            targets: dangerText,
            y: dangerText.y - 40,
            alpha: 0,
            duration: 1000,
            onComplete: () => dangerText.destroy()
          });
        }
      } else {
        this.van.setData('inDangerZone', false);
      }

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

  private createRoadBend(): void {
    if (this.gameState !== 'driving') return;
    
    // Create a new bend target (positive = bend right, negative = bend left)
    this.roadBendTarget = Phaser.Math.Between(-120, 120);
    this.roadBendSpeed = Phaser.Math.FloatBetween(0.5, 1.5);
    
    // Show curve warning
    const warning = this.add.text(
      this.cameras.main.width / 2, 
      150, 
      this.roadBendTarget > 0 ? '⬅️ CURVE AHEAD!' : '➡️ CURVE AHEAD!',
      {
        fontFamily: 'Arial Black',
        fontSize: '24px',
        color: '#ffff00',
        stroke: '#000000',
        strokeThickness: 3
      }
    ).setOrigin(0.5).setDepth(150);
    
    this.tweens.add({
      targets: warning,
      alpha: 0,
      y: warning.y - 50,
      duration: 1500,
      onComplete: () => warning.destroy()
    });
  }

  private updateRoadScroll(delta: number): void {
    const dt = delta / 1000;
    const scrollSpeed = this.speed * dt;
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Update road bend
    if (this.roadBendOffset !== this.roadBendTarget) {
      const bendDelta = this.roadBendSpeed * dt * 60;
      if (this.roadBendOffset < this.roadBendTarget) {
        this.roadBendOffset = Math.min(this.roadBendTarget, this.roadBendOffset + bendDelta);
      } else {
        this.roadBendOffset = Math.max(this.roadBendTarget, this.roadBendOffset - bendDelta);
      }
    }

    // Apply bend force to van (simulates curve)
    if (Math.abs(this.roadBendOffset) > 10 && this.speed > 50) {
      const bendForce = (this.roadBendOffset / 120) * 2 * dt * (this.speed / this.maxSpeed);
      this.van.x += bendForce * 60;
      
      // Spill on hard curves if not compensating
      if (Math.abs(this.roadBendOffset) > 80 && Math.abs(this.joystickVector.x) < 0.3) {
        if (!this.crewBracing && Math.random() < 0.05) {
          this.addSpill(1);
        }
      }
    }

    // Move all scrollable elements
    this.children.list.forEach(child => {
      if (!child.getData) return;
      
      // Road tiles
      if (child.getData('isRoad')) {
        const road = child as Phaser.GameObjects.Image;
        road.y += scrollSpeed;
        if (road.y > height + 220) {
          road.y -= height + 440;
        }
      }
      
      // Parallax layers (city, hills)
      const parallaxSpeed = child.getData('parallaxSpeed');
      if (parallaxSpeed) {
        const layer = child as Phaser.GameObjects.Image;
        layer.y += scrollSpeed * parallaxSpeed;
        // Very slow vertical wrap for parallax
        if (layer.y > 250) {
          layer.y = 100;
        }
      }
      
      // Roadside scenery
      if (child.getData('isScenery')) {
        const scenery = child as Phaser.GameObjects.Image;
        const scenerySpeed = child.getData('scrollSpeed') || 0.9;
        scenery.y += scrollSpeed * scenerySpeed;
        
        // Remove when off screen
        if (scenery.y > height + 150) {
          scenery.destroy();
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
