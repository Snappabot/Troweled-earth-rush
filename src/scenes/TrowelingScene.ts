import Phaser from 'phaser';

interface WallCell {
  x: number;
  y: number;
  covered: boolean;
  sprite: Phaser.GameObjects.Rectangle;
}

export class TrowelingScene extends Phaser.Scene {
  private level = 1;
  private timeRemaining = 30;
  private score = 0;
  private wallsCompleted = 0;
  private totalWalls = 1;
  private spillLevel = 0;

  private wallCells: WallCell[] = [];
  private cellsCovered = 0;
  private totalCells = 0;
  private coveragePercent = 0;

  private timerText!: Phaser.GameObjects.Text;
  private coverageText!: Phaser.GameObjects.Text;
  private wallsText!: Phaser.GameObjects.Text;
  private instructionText!: Phaser.GameObjects.Text;

  private isTroweling = false;
  private trowelGraphic!: Phaser.GameObjects.Image;
  private lastTrowelPos = { x: 0, y: 0 };

  private characters!: Phaser.GameObjects.Group;

  constructor() {
    super({ key: 'TrowelingScene' });
  }

  init(data: { level: number; timeRemaining: number; spillLevel: number; score: number; walls: number }): void {
    this.level = data.level || 1;
    this.timeRemaining = Math.max(data.timeRemaining || 30, 15); // At least 15 seconds for troweling
    this.spillLevel = data.spillLevel || 0;
    this.score = data.score || 0;
    this.totalWalls = data.walls || 1;
    this.wallsCompleted = 0;
    this.wallCells = [];
    this.cellsCovered = 0;
  }

  create(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.setBackgroundColor('#3a3a3a');

    // Title
    this.add.text(width / 2, 40, '🏗️ TROWEL TIME!', {
      fontFamily: 'Arial Black',
      fontSize: '28px',
      color: '#d4a574'
    }).setOrigin(0.5);

    // Timer
    this.timerText = this.add.text(width / 2, 90, `⏱️ ${this.timeRemaining}s`, {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#ffffff'
    }).setOrigin(0.5);

    // Coverage
    this.coverageText = this.add.text(width - 20, 40, 'Coverage: 0%', {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#d4a574'
    }).setOrigin(1, 0);

    // Walls progress
    this.wallsText = this.add.text(20, 40, `Wall: ${this.wallsCompleted + 1}/${this.totalWalls}`, {
      fontFamily: 'Arial',
      fontSize: '20px',
      color: '#ffffff'
    });

    // Instructions
    this.instructionText = this.add.text(width / 2, 130, 'Swipe to spread plaster evenly!', {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#888888'
    }).setOrigin(0.5);

    // Create wall grid
    this.createWallGrid();

    // Create characters at bottom
    this.createCharacters();

    // Create trowel cursor
    this.trowelGraphic = this.add.image(0, 0, 'trowel').setScale(2).setVisible(false).setDepth(100);

    // Input handling
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.isTroweling = true;
      this.lastTrowelPos = { x: pointer.x, y: pointer.y };
      this.trowelGraphic.setVisible(true).setPosition(pointer.x, pointer.y);
    });

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      if (this.isTroweling) {
        this.trowelGraphic.setPosition(pointer.x, pointer.y);
        this.applyPlaster(pointer.x, pointer.y);
        
        // Trowel angle based on movement
        const angle = Phaser.Math.Angle.Between(this.lastTrowelPos.x, this.lastTrowelPos.y, pointer.x, pointer.y);
        this.trowelGraphic.setRotation(angle);
        
        this.lastTrowelPos = { x: pointer.x, y: pointer.y };
      }
    });

    this.input.on('pointerup', () => {
      this.isTroweling = false;
      this.trowelGraphic.setVisible(false);
    });

    // Timer event
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });
  }

  private createWallGrid(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Wall area
    const wallX = 60;
    const wallY = 180;
    const wallWidth = width - 120;
    const wallHeight = height - 450;
    const cellSize = 40;

    // Background wall
    const wallBg = this.add.graphics();
    wallBg.fillStyle(0x5a5a5a);
    wallBg.fillRect(wallX, wallY, wallWidth, wallHeight);
    wallBg.lineStyle(4, 0x3a3a3a);
    wallBg.strokeRect(wallX, wallY, wallWidth, wallHeight);

    // Create grid cells
    this.wallCells = [];
    const cols = Math.floor(wallWidth / cellSize);
    const rows = Math.floor(wallHeight / cellSize);
    this.totalCells = cols * rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = wallX + col * cellSize + cellSize / 2;
        const y = wallY + row * cellSize + cellSize / 2;

        const cell = this.add.rectangle(x, y, cellSize - 2, cellSize - 2, 0x5a5a5a);
        cell.setAlpha(0);

        this.wallCells.push({
          x,
          y,
          covered: false,
          sprite: cell
        });
      }
    }
  }

  private createCharacters(): void {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Characters at bottom doing work animation
    const jose = this.add.image(width / 4, height - 100, 'jose').setScale(3);
    const jarrad = this.add.image(width / 2, height - 100, 'jarrad').setScale(3);
    const matt = this.add.image((width / 4) * 3, height - 100, 'matt').setScale(3);

    // Work animation
    [jose, jarrad, matt].forEach((char, i) => {
      this.tweens.add({
        targets: char,
        y: char.y - 10,
        duration: 300,
        yoyo: true,
        repeat: -1,
        delay: i * 100
      });
    });

    // Trowels
    const trowel1 = this.add.image(width / 4 + 30, height - 80, 'trowel').setScale(2);
    const trowel2 = this.add.image(width / 2 + 30, height - 80, 'trowel').setScale(2);
    const trowel3 = this.add.image((width / 4) * 3 + 30, height - 80, 'trowel').setScale(2);

    [trowel1, trowel2, trowel3].forEach((trowel, i) => {
      this.tweens.add({
        targets: trowel,
        rotation: 0.3,
        duration: 200,
        yoyo: true,
        repeat: -1,
        delay: i * 100
      });
    });

    // Speech bubbles occasionally
    this.time.addEvent({
      delay: 3000,
      callback: () => {
        const phrases = [
          'Smooth it out!',
          'Looking good!',
          'Perfect coverage!',
          'Troweled to perfection!',
          'That\'s the way!',
          'Beauty!'
        ];
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        const speaker = [jose, jarrad, matt][Math.floor(Math.random() * 3)];

        const bubble = this.add.text(speaker.x, speaker.y - 80, phrase, {
          fontFamily: 'Arial',
          fontSize: '14px',
          color: '#ffffff',
          backgroundColor: '#333333',
          padding: { x: 8, y: 4 }
        }).setOrigin(0.5);

        this.tweens.add({
          targets: bubble,
          y: bubble.y - 30,
          alpha: 0,
          duration: 2000,
          onComplete: () => bubble.destroy()
        });
      },
      loop: true
    });
  }

  private applyPlaster(x: number, y: number): void {
    const brushSize = 60;

    this.wallCells.forEach(cell => {
      if (!cell.covered) {
        const dist = Phaser.Math.Distance.Between(x, y, cell.x, cell.y);
        if (dist < brushSize) {
          cell.covered = true;
          cell.sprite.setFillStyle(0xd4a574);
          cell.sprite.setAlpha(1);
          this.cellsCovered++;

          // Satisfying sound/haptic would go here
          // Small particles
          if (Math.random() < 0.3) {
            const particle = this.add.circle(cell.x + Phaser.Math.Between(-10, 10), cell.y + Phaser.Math.Between(-10, 10), 3, 0xc4956a);
            this.tweens.add({
              targets: particle,
              alpha: 0,
              scale: 2,
              duration: 300,
              onComplete: () => particle.destroy()
            });
          }
        }
      }
    });

    // Update coverage
    this.coveragePercent = (this.cellsCovered / this.totalCells) * 100;
    this.coverageText.setText(`Coverage: ${Math.floor(this.coveragePercent)}%`);

    // Check wall completion
    if (this.coveragePercent >= 95) {
      this.completeWall();
    }
  }

  private updateTimer(): void {
    this.timeRemaining--;
    
    if (this.timeRemaining <= 10) {
      this.timerText.setColor('#ff4444');
    }
    
    this.timerText.setText(`⏱️ ${this.timeRemaining}s`);

    if (this.timeRemaining <= 0) {
      this.finishLevel();
    }
  }

  private completeWall(): void {
    this.wallsCompleted++;
    this.score += this.coveragePercent * 10;

    // Celebration
    const celebText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 
      '✨ WALL COMPLETE! ✨', {
      fontFamily: 'Arial Black',
      fontSize: '36px',
      color: '#00ff00'
    }).setOrigin(0.5).setDepth(200);

    this.tweens.add({
      targets: celebText,
      scale: 1.5,
      alpha: 0,
      duration: 1000,
      onComplete: () => celebText.destroy()
    });

    if (this.wallsCompleted >= this.totalWalls) {
      // Level complete!
      this.time.delayedCall(1000, () => this.finishLevel());
    } else {
      // Reset for next wall
      this.time.delayedCall(1000, () => {
        this.wallsText.setText(`Wall: ${this.wallsCompleted + 1}/${this.totalWalls}`);
        this.cellsCovered = 0;
        this.coveragePercent = 0;
        this.wallCells.forEach(cell => {
          cell.covered = false;
          cell.sprite.setAlpha(0);
        });
      });
    }
  }

  private finishLevel(): void {
    const success = this.wallsCompleted >= this.totalWalls || this.coveragePercent >= 80;

    // Calculate final score
    const timeBonus = this.timeRemaining * 50;
    const coverageBonus = this.coveragePercent * 20;
    const spillPenalty = this.spillLevel * 5;
    const finalScore = Math.floor(this.score + timeBonus + coverageBonus - spillPenalty);

    this.scene.start('GameOverScene', {
      level: this.level,
      score: finalScore,
      success,
      wallsCompleted: this.wallsCompleted,
      totalWalls: this.totalWalls,
      coverage: this.coveragePercent,
      timeRemaining: this.timeRemaining
    });
  }
}
