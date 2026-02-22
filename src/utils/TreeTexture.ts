import * as THREE from 'three';

/**
 * Renders the Troweled Earth tree logo onto a canvas and returns a THREE.CanvasTexture.
 * White tree on black background, matching the TEM shirt/logo symbol.
 */
export function makeTEMTreeTexture(size = 256): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;

  // Black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  // Scale factor — SVG is 100×100 viewBox
  const s = size / 100;

  ctx.fillStyle   = '#FFFFFF';
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineCap     = 'round';
  ctx.lineJoin    = 'round';

  // ── Trunk ──────────────────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(48 * s, 85 * s);
  ctx.lineTo(48 * s, 55 * s);
  ctx.quadraticCurveTo(48 * s, 50 * s, 50 * s, 45 * s);
  ctx.quadraticCurveTo(52 * s, 50 * s, 52 * s, 55 * s);
  ctx.lineTo(52 * s, 85 * s);
  ctx.closePath();
  ctx.fill();

  // ── Main branches (pairs, left + right) ────────────────────────────────────
  const branches: [number, number, number, number, number, number, number][] = [
    // [fromX, fromY, cpX, cpY, toX, toY, lineWidth]
    // Mid level
    [50, 50, 40, 45, 30, 40,  1.8],
    [50, 50, 60, 45, 70, 40,  1.8],
    // Main spread
    [50, 45, 35, 35, 25, 25,  2.0],
    [50, 45, 65, 35, 75, 25,  2.0],
    // Wider spread
    [50, 40, 30, 25, 20, 20,  1.6],
    [50, 40, 70, 25, 80, 20,  1.6],
    // Lower drooping
    [48, 60, 38, 55, 28, 50,  1.4],
    [52, 60, 62, 55, 72, 50,  1.4],
    // Upper
    [50, 35, 45, 20, 35, 10,  1.5],
    [50, 35, 55, 20, 65, 10,  1.5],
    // Far upper
    [50, 30, 40, 15, 30,  8,  1.2],
    [50, 30, 60, 15, 70,  8,  1.2],
  ];

  for (const [fx, fy, cpx, cpy, tx, ty, lw] of branches) {
    ctx.lineWidth = lw * s;
    ctx.beginPath();
    ctx.moveTo(fx * s, fy * s);
    ctx.quadraticCurveTo(cpx * s, cpy * s, tx * s, ty * s);
    ctx.stroke();
  }

  // ── Circle outline ─────────────────────────────────────────────────────────
  ctx.lineWidth   = 2.5 * s;
  ctx.strokeStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(50 * s, 50 * s, 44 * s, 0, Math.PI * 2);
  ctx.stroke();

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
