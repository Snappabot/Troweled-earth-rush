import * as THREE from 'three';

/**
 * Draws the actual Troweled Earth logo as seen on the product buckets:
 *  - White circle border
 *  - Thick trunk, wide at base, narrowing upward
 *  - Many intricate bare-winter branches spreading wide (bare oak / gnarled tree style)
 *  - No roots visible — clean trunk base
 *  - White on black background
 */
export function makeTEMTreeTexture(size = 256): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;

  // Black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const R  = size * 0.44;  // circle radius

  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle   = '#FFFFFF';
  ctx.lineCap     = 'round';
  ctx.lineJoin    = 'round';

  // ── Circle border ─────────────────────────────────────────────────────────
  ctx.lineWidth = size * 0.018;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.stroke();

  // Coordinate helper: tree space (0–100) → canvas pixels
  // Tree is positioned so trunk base sits near bottom of circle
  // cx,cy = 50,50 in tree space; scale to canvas
  const tx = (x: number) => cx + (x - 50) * R / 46;
  const ty = (y: number) => cy * 1.08 + (y - 50) * R / 46;

  // Branch helper: quadratic bezier stroke with given line width
  const br = (lw: number, x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number) => {
    ctx.lineWidth = size * lw / 100;
    ctx.beginPath();
    ctx.moveTo(tx(x1), ty(y1));
    ctx.quadraticCurveTo(tx(cpx), ty(cpy), tx(x2), ty(y2));
    ctx.stroke();
  };

  // Straight line helper
  const ln = (lw: number, x1: number, y1: number, x2: number, y2: number) => {
    ctx.lineWidth = size * lw / 100;
    ctx.beginPath();
    ctx.moveTo(tx(x1), ty(y1));
    ctx.lineTo(tx(x2), ty(y2));
    ctx.stroke();
  };

  // ── Trunk — thick, flares at base ────────────────────────────────────────
  // Draw as filled trapezoid for proper thickness taper
  ctx.beginPath();
  ctx.moveTo(tx(46.5), ty(90));
  ctx.lineTo(tx(53.5), ty(90));
  ctx.lineTo(tx(52.5), ty(72));
  ctx.lineTo(tx(47.5), ty(72));
  ctx.closePath();
  ctx.fill();

  // Trunk upper narrowing section
  ctx.beginPath();
  ctx.moveTo(tx(47.5), ty(72));
  ctx.lineTo(tx(52.5), ty(72));
  ctx.lineTo(tx(51.5), ty(58));
  ctx.lineTo(tx(48.5), ty(58));
  ctx.closePath();
  ctx.fill();

  // ── First fork — two main boughs ─────────────────────────────────────────
  // Left main bough
  br(3.8, 50, 62, 40, 54, 30, 44);
  br(3.0, 30, 44, 20, 36, 12, 26);
  // Right main bough
  br(3.8, 50, 62, 60, 54, 70, 44);
  br(3.0, 70, 44, 80, 36, 88, 26);

  // ── Second-level branches from each main bough ────────────────────────────
  // Left side
  br(2.2, 22, 31, 14, 22,  8, 14);
  br(1.8, 22, 31, 20, 20, 24, 12);
  br(2.0, 30, 44, 22, 32, 16, 22);
  br(1.6, 16, 22, 10, 14,  6,  8);
  br(1.5, 16, 22, 18, 13, 20,  8);
  br(2.2, 40, 50, 30, 38, 22, 28);
  br(1.8, 22, 28, 14, 18,  8, 10);
  br(1.6, 22, 28, 22, 18, 26, 12);
  br(2.0, 46, 55, 38, 44, 28, 34);
  br(1.5, 28, 34, 18, 24, 12, 16);

  // Right side (mirror)
  br(2.2, 78, 31, 86, 22, 92, 14);
  br(1.8, 78, 31, 80, 20, 76, 12);
  br(2.0, 70, 44, 78, 32, 84, 22);
  br(1.6, 84, 22, 90, 14, 94,  8);
  br(1.5, 84, 22, 82, 13, 80,  8);
  br(2.2, 60, 50, 70, 38, 78, 28);
  br(1.8, 78, 28, 86, 18, 92, 10);
  br(1.6, 78, 28, 78, 18, 74, 12);
  br(2.0, 54, 55, 62, 44, 72, 34);
  br(1.5, 72, 34, 82, 24, 88, 16);

  // ── Third-level fine tips ─────────────────────────────────────────────────
  // Left tips
  ln(1.2,  8, 14,  3,  7);
  ln(1.1,  8, 14, 10,  6);
  ln(1.1, 12, 16,  8,  8);
  ln(1.0, 12, 16, 16,  8);
  ln(1.1, 20,  8, 16,  3);
  ln(1.0, 20,  8, 23,  3);
  ln(1.2, 24, 12, 20,  5);
  ln(1.0, 24, 12, 28,  6);
  ln(1.1,  6,  8,  2,  2);
  ln(1.0, 26, 12, 30,  5);

  // Right tips (mirror)
  ln(1.2, 92, 14, 97,  7);
  ln(1.1, 92, 14, 90,  6);
  ln(1.1, 88,  8, 92, 14);
  ln(1.0, 88,  8, 84,  8);
  ln(1.1, 80,  8, 84,  3);
  ln(1.0, 80,  8, 77,  3);
  ln(1.2, 76, 12, 80,  5);
  ln(1.0, 76, 12, 72,  6);
  ln(1.1, 94,  8, 98,  2);
  ln(1.0, 74, 12, 70,  5);

  // ── Extra mid-level branches for fullness ─────────────────────────────────
  br(1.8, 48, 60, 36, 50, 24, 40);
  br(1.4, 24, 40, 14, 28,  8, 18);
  br(1.3,  8, 18,  3, 12,  1, 10);
  br(1.8, 52, 60, 64, 50, 76, 40);
  br(1.4, 76, 40, 86, 28, 92, 18);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
