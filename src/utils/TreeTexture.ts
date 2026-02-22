import * as THREE from 'three';

/**
 * Draws the TEM tree logo directly onto a canvas — white tree on black background.
 * No network request, no async. Matches the TEM Tree-of-Life SVG composition.
 * Used on the van roof and workshop front face.
 */
export function makeTEMTreeTexture(size = 256): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = size; cv.height = size;
  const ctx = cv.getContext('2d')!;

  // Black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  // Scale all coordinates from 256-based
  const s = size / 256;
  ctx.save();
  ctx.scale(s, s);

  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle = '#FFFFFF';
  ctx.lineCap = 'round';

  // ── Circle border ────────────────────────────────────────────────────────
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(128, 128, 118, 0, Math.PI * 2);
  ctx.stroke();

  // ── Trunk ────────────────────────────────────────────────────────────────
  ctx.lineWidth = 11;
  ctx.beginPath(); ctx.moveTo(128, 225); ctx.lineTo(128, 148); ctx.stroke();
  ctx.lineWidth = 7;
  ctx.beginPath(); ctx.moveTo(128, 148); ctx.lineTo(128, 96); ctx.stroke();

  // ── Branches — symmetric pairs radiating up and outward ─────────────────
  const branches: [number,number,number,number][] = [
    // y-level,  branch tip x, tip y
    [128, 178, 76, 152],  [128, 178, 180, 152],   // low
    [128, 160, 64, 134],  [128, 160, 192, 134],   // mid-low
    [128, 142, 76, 116],  [128, 142, 180, 116],   // mid
    [128, 124, 88,  99],  [128, 124, 168,  99],   // mid-high
    [128, 110, 98,  84],  [128, 110, 158,  84],   // high
    [128,  98, 110,  70], [128,  98, 146,  70],   // upper
    [128,  88, 118,  56], [128,  88, 138,  56],   // top
  ];

  ctx.lineWidth = 4;
  for (const [x1, y1, x2, y2] of branches) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    // Dot at tip
    ctx.beginPath(); ctx.arc(x2, y2, 5, 0, Math.PI * 2); ctx.fill();
  }

  // Center trunk top dot
  ctx.beginPath(); ctx.arc(128, 88, 5, 0, Math.PI * 2); ctx.fill();

  ctx.restore();
  return new THREE.CanvasTexture(cv);
}
