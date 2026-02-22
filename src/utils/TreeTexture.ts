import * as THREE from 'three';

/**
 * Draws the actual Troweled Earth "Tree of Life" logo:
 *  - White silhouette on black background
 *  - Single short trunk that Y-forks ~1/3 up
 *  - Organic gnarled branches fanning out to both sides (2-3 per side, subdividing)
 *  - Roots mirroring branches going downward
 *  - Roughly 1:1 width:height ratio, no enclosing circle
 *  - Matches the white logo on TEM black t-shirts and product buckets
 */
export function makeTEMTreeTexture(size = 256): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d')!;

  // Black background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  // Scale helper — coords are in 0–100 SVG space
  const p = (v: number) => v * size / 100;

  ctx.strokeStyle = '#FFFFFF';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // ── Helper: draw a single curved branch/root stroke ──────────────────────
  const branch = (lw: number, x1: number, y1: number, cpx: number, cpy: number, x2: number, y2: number) => {
    ctx.lineWidth = p(lw);
    ctx.beginPath();
    ctx.moveTo(p(x1), p(y1));
    ctx.quadraticCurveTo(p(cpx), p(cpy), p(x2), p(y2));
    ctx.stroke();
  };

  // ── Trunk (short, Y-forks at ~y=55) ──────────────────────────────────────
  branch(5.5, 50, 92, 50, 75, 50, 58);   // main trunk, base to fork

  // ── Left upper branches ───────────────────────────────────────────────────
  // Primary left: fork → mid-left
  branch(4.0, 50, 58, 38, 46, 26, 34);
  // Continue left primary to tip
  branch(2.8, 26, 34, 16, 22, 10, 12);
  // Left tip split A
  branch(1.8, 10, 12,  4,  5,  4,  4);
  // Left tip split B
  branch(1.6, 10, 12, 14,  5, 18,  3);

  // Secondary left branch (from mid-trunk area)
  branch(3.2, 48, 52, 32, 42, 18, 28);
  branch(2.0, 18, 28,  8, 18,  5, 12);
  branch(1.5, 18, 28, 20, 20, 24, 14);

  // Tertiary left (lower spread)
  branch(2.8, 49, 56, 36, 50, 24, 44);
  branch(1.8, 24, 44, 12, 36,  8, 28);

  // ── Right upper branches (mirror) ────────────────────────────────────────
  // Primary right
  branch(4.0, 50, 58, 62, 46, 74, 34);
  branch(2.8, 74, 34, 84, 22, 90, 12);
  branch(1.8, 90, 12, 96,  5, 96,  4);
  branch(1.6, 90, 12, 86,  5, 82,  3);

  // Secondary right
  branch(3.2, 52, 52, 68, 42, 82, 28);
  branch(2.0, 82, 28, 92, 18, 95, 12);
  branch(1.5, 82, 28, 80, 20, 76, 14);

  // Tertiary right
  branch(2.8, 51, 56, 64, 50, 76, 44);
  branch(1.8, 76, 44, 88, 36, 92, 28);

  // ── Left roots (mirror branches, going DOWN) ──────────────────────────────
  // Primary left root
  branch(4.0, 50, 62, 38, 72, 26, 82);
  branch(2.8, 26, 82, 16, 89, 10, 96);
  branch(1.8, 10, 96,  4, 100,  3, 100);
  branch(1.6, 10, 96, 14, 100, 18, 100);

  // Secondary left root
  branch(3.2, 48, 66, 32, 76, 18, 88);
  branch(2.0, 18, 88,  8, 94,  4, 98);
  branch(1.5, 18, 88, 20, 94, 24, 98);

  // Tertiary left root
  branch(2.8, 49, 64, 36, 74, 24, 80);
  branch(1.8, 24, 80, 12, 88,  8, 94);

  // ── Right roots (mirror) ──────────────────────────────────────────────────
  // Primary right root
  branch(4.0, 50, 62, 62, 72, 74, 82);
  branch(2.8, 74, 82, 84, 89, 90, 96);
  branch(1.8, 90, 96, 96, 100, 97, 100);
  branch(1.6, 90, 96, 86, 100, 82, 100);

  // Secondary right root
  branch(3.2, 52, 66, 68, 76, 82, 88);
  branch(2.0, 82, 88, 92, 94, 96, 98);
  branch(1.5, 82, 88, 80, 94, 76, 98);

  // Tertiary right root
  branch(2.8, 51, 64, 64, 74, 76, 80);
  branch(1.8, 76, 80, 88, 88, 92, 94);

  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
