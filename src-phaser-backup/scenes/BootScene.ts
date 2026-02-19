import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    // Create loading bar graphics
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Loading text
    const loadingText = this.add.text(width / 2, height / 2 - 50, 'TROWELED EARTH RUSH', {
      fontFamily: 'Arial Black',
      fontSize: '32px',
      color: '#d4a574'
    }).setOrigin(0.5);

    const subText = this.add.text(width / 2, height / 2, 'Loading...', {
      fontFamily: 'Arial',
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);
  }

  create(): void {
    this.scene.start('PreloadScene');
  }
}
