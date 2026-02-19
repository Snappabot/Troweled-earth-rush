import Phaser from 'phaser';
import { Van } from './Van';

type ObstacleType = 'kangaroo' | 'cone' | 'pie';

interface ObstacleConfig {
  key: string;
  scale: number;
  speed: number;
  behavior: 'static' | 'hop' | 'roll' | 'fly';
  points: number;
}

const OBSTACLE_CONFIGS: Record<ObstacleType, ObstacleConfig> = {
  kangaroo: {
    key: 'kangaroo',
    scale: 1.5,
    speed: 80,
    behavior: 'hop',
    points: 50
  },
  cone: {
    key: 'cone',
    scale: 1.2,
    speed: 0,
    behavior: 'static',
    points: 20
  },
  pie: {
    key: 'pie',
    scale: 1.3,
    speed: 120,
    behavior: 'fly',
    points: 30
  }
};

export class ObstacleManager {
  private scene: Phaser.Scene;
  private van: Van;
  private group: Phaser.Physics.Arcade.Group;
  private lastSpawnTime: number = 0;
  private spawnInterval: number = 2000;
  private minSpawnInterval: number = 800;

  constructor(scene: Phaser.Scene, van: Van) {
    this.scene = scene;
    this.van = van;

    this.group = scene.physics.add.group({
      runChildUpdate: true
    });
  }

  getGroup(): Phaser.Physics.Arcade.Group {
    return this.group;
  }

  update(delta: number, vanSpeed: number): void {
    // Move obstacles down based on van speed
    const scrollSpeed = vanSpeed * 3;

    this.group.getChildren().forEach((child) => {
      const obstacle = child as Phaser.Physics.Arcade.Sprite;
      if (!obstacle.active) return;

      // Move down (scrolling effect)
      obstacle.y += scrollSpeed * (delta / 1000);

      // Apply special behaviors
      const behavior = obstacle.getData('behavior') as string;
      
      switch (behavior) {
        case 'hop':
          this.updateHopping(obstacle, delta);
          break;
        case 'roll':
          this.updateRolling(obstacle, delta);
          break;
        case 'fly':
          this.updateFlying(obstacle, delta);
          break;
      }

      // Remove if off screen
      if (obstacle.y > this.scene.scale.height + 100) {
        obstacle.setActive(false);
        obstacle.setVisible(false);
      }
    });
  }

  private updateHopping(obstacle: Phaser.Physics.Arcade.Sprite, delta: number): void {
    // Kangaroo hopping behavior
    const hopTimer = obstacle.getData('hopTimer') || 0;
    const hopPhase = obstacle.getData('hopPhase') || 0;
    const hopDirection = obstacle.getData('hopDirection') || 1;

    const newTimer = hopTimer + delta;
    
    if (newTimer > 400) {
      // Hop sideways
      obstacle.x += hopDirection * 30;
      obstacle.setData('hopTimer', 0);
      obstacle.setData('hopPhase', (hopPhase + 1) % 4);
      
      // Change direction occasionally
      if (hopPhase === 3) {
        obstacle.setData('hopDirection', -hopDirection);
      }
      
      // Bounce animation
      this.scene.tweens.add({
        targets: obstacle,
        scaleY: 1.3,
        duration: 100,
        yoyo: true,
        ease: 'Bounce.easeOut'
      });
    } else {
      obstacle.setData('hopTimer', newTimer);
    }

    // Keep in bounds
    const margin = 150;
    if (obstacle.x < margin) {
      obstacle.x = margin;
      obstacle.setData('hopDirection', 1);
    } else if (obstacle.x > this.scene.scale.width - margin) {
      obstacle.x = this.scene.scale.width - margin;
      obstacle.setData('hopDirection', -1);
    }
  }

  private updateRolling(obstacle: Phaser.Physics.Arcade.Sprite, delta: number): void {
    // Rolling cones
    const rollSpeed = obstacle.getData('rollSpeed') || 50;
    const rollDirection = obstacle.getData('rollDirection') || 1;
    
    obstacle.x += rollDirection * rollSpeed * (delta / 1000);
    obstacle.angle += rollDirection * 3;

    // Bounce off edges
    const margin = 150;
    if (obstacle.x < margin || obstacle.x > this.scene.scale.width - margin) {
      obstacle.setData('rollDirection', -rollDirection);
    }
  }

  private updateFlying(obstacle: Phaser.Physics.Arcade.Sprite, delta: number): void {
    // Flying pies (pie truck dropped them)
    const flySpeed = obstacle.getData('flySpeed') || 100;
    const flyDirection = obstacle.getData('flyDirection') || 1;
    
    obstacle.x += flyDirection * flySpeed * (delta / 1000);
    obstacle.angle += 5;

    // Remove if off sides
    if (obstacle.x < -50 || obstacle.x > this.scene.scale.width + 50) {
      obstacle.setActive(false);
      obstacle.setVisible(false);
    }
  }

  trySpawn(level: number): void {
    const now = this.scene.time.now;
    
    // Adjust spawn rate based on level
    const interval = Math.max(
      this.minSpawnInterval,
      this.spawnInterval - (level * 150)
    );

    if (now - this.lastSpawnTime < interval) return;

    this.lastSpawnTime = now;

    // Choose obstacle type based on level
    const types: ObstacleType[] = ['cone'];
    if (level >= 1) types.push('kangaroo');
    if (level >= 3) types.push('pie');

    const type = Phaser.Math.RND.pick(types);
    this.spawn(type);
  }

  private spawn(type: ObstacleType): void {
    const config = OBSTACLE_CONFIGS[type];
    const { width } = this.scene.scale;

    // Random x position on road
    const margin = 150;
    const x = Phaser.Math.Between(margin, width - margin);
    const y = -50;

    // Get or create obstacle
    let obstacle = this.group.getFirstDead(false) as Phaser.Physics.Arcade.Sprite;
    
    if (!obstacle) {
      obstacle = this.group.create(x, y, config.key) as Phaser.Physics.Arcade.Sprite;
    } else {
      obstacle.setTexture(config.key);
      obstacle.setPosition(x, y);
      obstacle.setActive(true);
      obstacle.setVisible(true);
    }

    obstacle.setScale(config.scale);
    obstacle.setData('type', type);
    obstacle.setData('behavior', config.behavior);
    obstacle.setData('points', config.points);

    // Set behavior-specific data
    switch (config.behavior) {
      case 'hop':
        obstacle.setData('hopTimer', 0);
        obstacle.setData('hopPhase', 0);
        obstacle.setData('hopDirection', Phaser.Math.RND.pick([-1, 1]));
        break;
      case 'roll':
        obstacle.setData('rollSpeed', Phaser.Math.Between(30, 80));
        obstacle.setData('rollDirection', Phaser.Math.RND.pick([-1, 1]));
        break;
      case 'fly':
        obstacle.setData('flySpeed', Phaser.Math.Between(80, 150));
        obstacle.setData('flyDirection', Phaser.Math.RND.pick([-1, 1]));
        obstacle.x = obstacle.getData('flyDirection') > 0 ? -30 : width + 30;
        obstacle.y = Phaser.Math.Between(200, 600);
        break;
    }

    // Set physics body
    obstacle.body?.setSize(
      obstacle.displayWidth * 0.7,
      obstacle.displayHeight * 0.7
    );
  }

  destroy(): void {
    this.group.destroy(true);
  }
}
