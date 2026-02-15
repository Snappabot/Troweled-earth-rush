import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { PreloadScene } from './scenes/PreloadScene';
import { MenuScene } from './scenes/MenuScene';
import { GameScene } from './scenes/GameScene';
import { GameOverScene } from './scenes/GameOverScene';
import { MixingScene } from './scenes/MixingScene';
import { TrowelingScene } from './scenes/TrowelingScene';
import { CoffeeScene } from './scenes/CoffeeScene';
import { FoodScene } from './scenes/FoodScene';
import { PeeScene } from './scenes/PeeScene';

// Expose game instance for debugging
declare global {
  interface Window {
    game: Phaser.Game;
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: '#2d5a27',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 720,
    height: 1280,
    min: {
      width: 360,
      height: 640
    },
    max: {
      width: 1080,
      height: 1920
    }
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  input: {
    activePointers: 3
  },
  scene: [BootScene, PreloadScene, MenuScene, GameScene, GameOverScene, MixingScene, TrowelingScene, CoffeeScene, FoodScene, PeeScene],
  render: {
    pixelArt: true,
    antialias: false
  }
};

window.game = new Phaser.Game(config);
