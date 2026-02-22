import * as THREE from 'three';

/**
 * TEM Tree of Life logo — bold version optimised for small 3D scale.
 * White tree + circle on black. Thick strokes, readable at low resolution.
 */
export function makeTEMTreeTexture(size = 512): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const R  = size * 0.42;

  ctx.strokeStyle = '#FFFFFF';
  ctx.fillStyle   = '#FFFFFF';
  ctx.lineCap     = 'round';
  ctx.lineJoin    = 'round';

  // ── Circle border ─────────────────────────────────────────────────────────
  ctx.lineWidth = size * 0.025;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.stroke();

  // Helper: tree coords (0–100) → canvas pixels
  // Tree centred, trunk base at ~bottom of circle
  const tx = (x: number) => cx + (x - 50) * (R * 0.9 / 46);
  const ty = (y: number) => cy + 0.1 * size + (y - 55) * (R * 0.9 / 46);

  const br = (lw: number, x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number) => {
    ctx.lineWidth = size * lw / 100;
    ctx.beginPath();
    ctx.moveTo(tx(x1), ty(y1));
    ctx.quadraticCurveTo(tx(cpx), ty(cpy), tx(x2), ty(y2));
    ctx.stroke();
  };

  // ── Trunk — filled trapezoid, bold ───────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(tx(45), ty(90));
  ctx.lineTo(tx(55), ty(90));
  ctx.lineTo(tx(53), ty(68));
  ctx.lineTo(tx(47), ty(68));
  ctx.closePath();
  ctx.fill();

  // Trunk top narrowing
  ctx.beginPath();
  ctx.moveTo(tx(47), ty(68));
  ctx.lineTo(tx(53), ty(68));
  ctx.lineTo(tx(51.5), ty(55));
  ctx.lineTo(tx(48.5), ty(55));
  ctx.closePath();
  ctx.fill();

  // ── Main boughs from fork at y=58 ────────────────────────────────────────
  // Left bough
  br(4.5, 50, 58, 36, 48, 20, 36);
  br(3.5, 20, 36, 10, 26,  4, 18);

  // Right bough (mirror)
  br(4.5, 50, 58, 64, 48, 80, 36);
  br(3.5, 80, 36, 90, 26, 96, 18);

  // ── Secondary branches ────────────────────────────────────────────────────
  // Left upper
  br(3.0, 34, 45, 22, 34, 10, 22);
  br(2.5, 10, 22,  2, 12,  0,  8);
  br(2.2, 10, 22, 12, 12, 16,  8);

  // Left mid
  br(2.8, 40, 52, 28, 40, 16, 28);
  br(2.2, 16, 28,  6, 16,  2, 10);
  br(2.0, 16, 28, 18, 18, 22, 12);

  // Left lower secondary (broad spread)
  br(3.2, 46, 56, 32, 46, 18, 38);
  br(2.5, 18, 38,  8, 26,  2, 18);

  // Right upper (mirror)
  br(3.0, 66, 45, 78, 34, 90, 22);
  br(2.5, 90, 22, 98, 12, 100,  8);
  br(2.2, 90, 22, 88, 12, 84,  8);

  // Right mid (mirror)
  br(2.8, 60, 52, 72, 40, 84, 28);
  br(2.2, 84, 28, 94, 16, 98, 10);
  br(2.0, 84, 28, 82, 18, 78, 12);

  // Right lower secondary (mirror)
  br(3.2, 54, 56, 68, 46, 82, 38);
  br(2.5, 82, 38, 92, 26, 98, 18);

  // ── Fine tips ─────────────────────────────────────────────────────────────
  br(1.8,  4, 18,  0, 10,  -2,  6);
  br(1.8,  4, 18,  8,  8,   8,  2);
  br(1.8, 96, 18, 100, 10, 102,  6);
  br(1.8, 96, 18,  92,  8,  92,  2);

  br(1.6, 22, 12, 18,  5, 16,  2);
  br(1.6, 22, 12, 26,  5, 28,  2);
  br(1.6, 78, 12, 82,  5, 84,  2);
  br(1.6, 78, 12, 74,  5, 72,  2);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
