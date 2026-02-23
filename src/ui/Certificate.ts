/**
 * Certificate.ts
 * Renders the TEM Rush Certificate of Completion as a canvas image.
 * Returned as a data URL — can be displayed or downloaded.
 */

export interface CertificateOptions {
  recipientName?: string;  // defaults to "Apprentice Plasterer"
  dateStr?: string;        // defaults to today
}

export function renderCertificate(opts: CertificateOptions = {}): string {
  const name   = opts.recipientName ?? 'Apprentice Plasterer';
  const date   = opts.dateStr       ?? new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  const W = 900, H = 640;

  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // ── Background ───────────────────────────────────────────────────────────────
  ctx.fillStyle = '#0D0B08';
  ctx.fillRect(0, 0, W, H);

  // Warm parchment gradient overlay
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0,   'rgba(40,32,20,0.95)');
  bg.addColorStop(0.5, 'rgba(28,22,14,0.98)');
  bg.addColorStop(1,   'rgba(40,32,20,0.95)');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // ── Outer border ─────────────────────────────────────────────────────────────
  ctx.strokeStyle = '#C8A86A';
  ctx.lineWidth = 3;
  ctx.strokeRect(18, 18, W - 36, H - 36);
  ctx.strokeStyle = 'rgba(200,168,106,0.35)';
  ctx.lineWidth = 1;
  ctx.strokeRect(26, 26, W - 52, H - 52);

  // ── Corner ornaments ──────────────────────────────────────────────────────────
  const corners: [number, number][] = [[36, 36], [W - 36, 36], [36, H - 36], [W - 36, H - 36]];
  for (const [cx, cy] of corners) {
    ctx.strokeStyle = '#C8A86A';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#C8A86A';
    ctx.fill();
  }

  // ── TEM Logo area (top centre) ────────────────────────────────────────────────
  // Draw procedural tree (simplified from TreeTexture)
  const tx = W / 2, ty = 74;
  ctx.fillStyle = '#C8A86A';
  // Trunk
  ctx.fillRect(tx - 3, ty, 6, 22);
  // Canopy layers
  for (let i = 0; i < 3; i++) {
    const r = 20 - i * 4;
    const y = ty - i * 14;
    ctx.beginPath();
    ctx.arc(tx, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Title block ──────────────────────────────────────────────────────────────
  ctx.textAlign = 'center';

  ctx.fillStyle = '#C8A86A';
  ctx.font = `700 11px 'Courier New', monospace`;
  ctx.letterSpacing = '4px';
  ctx.fillText('TROWELED EARTH MELBOURNE', W / 2, 148);

  ctx.fillStyle = 'rgba(200,168,106,0.45)';
  ctx.fillRect(W / 2 - 180, 158, 360, 1);

  ctx.fillStyle = '#F0E8D8';
  ctx.font = `900 34px system-ui, sans-serif`;
  ctx.letterSpacing = '0px';
  ctx.fillText('Certificate of Completion', W / 2, 200);

  ctx.fillStyle = 'rgba(200,168,106,0.45)';
  ctx.fillRect(W / 2 - 220, 214, 440, 1);

  // ── Body ─────────────────────────────────────────────────────────────────────
  ctx.fillStyle = 'rgba(240,232,216,0.55)';
  ctx.font = `400 15px system-ui, sans-serif`;
  ctx.fillText('This certifies that', W / 2, 258);

  ctx.fillStyle = '#FFD97A';
  ctx.font = `700 28px system-ui, sans-serif`;
  ctx.fillText(name, W / 2, 300);

  ctx.fillStyle = 'rgba(200,168,106,0.45)';
  ctx.fillRect(W / 2 - 200, 312, 400, 1);

  ctx.fillStyle = 'rgba(240,232,216,0.55)';
  ctx.font = `400 15px system-ui, sans-serif`;
  ctx.fillText('has completed all TEM Rush training missions', W / 2, 348);
  ctx.fillText('and achieved full collection of Troweled Earth works.', W / 2, 372);

  // ── Qualification box ─────────────────────────────────────────────────────────
  const qx = W / 2 - 200, qy = 394, qw = 400, qh = 58;
  ctx.fillStyle = 'rgba(200,168,106,0.08)';
  ctx.strokeStyle = 'rgba(200,168,106,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(qx, qy, qw, qh, 8);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#C8A86A';
  ctx.font = `700 11px 'Courier New', monospace`;
  ctx.letterSpacing = '2px';
  ctx.fillText('QUALIFICATION', W / 2, qy + 20);
  ctx.fillStyle = '#F0E8D8';
  ctx.font = `700 17px system-ui, sans-serif`;
  ctx.letterSpacing = '0px';
  ctx.fillText('TEM Rush — Plasterer\'s Apprentice', W / 2, qy + 44);

  // ── Discount reward ───────────────────────────────────────────────────────────
  const dx = W / 2 - 160, dy = 466, dw = 320, dh = 52;
  ctx.fillStyle = 'rgba(193,102,107,0.15)';
  ctx.strokeStyle = 'rgba(193,102,107,0.5)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(dx, dy, dw, dh, 8);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#C1666B';
  ctx.font = `700 11px 'Courier New', monospace`;
  ctx.letterSpacing = '2px';
  ctx.fillText('5% OFF TEM STORE — USE CODE:', W / 2, dy + 20);
  ctx.fillStyle = '#FFD97A';
  ctx.font = `900 20px system-ui, sans-serif`;
  ctx.letterSpacing = '3px';
  ctx.fillText('TEMRUSH5', W / 2, dy + 41);

  // ── Footer ────────────────────────────────────────────────────────────────────
  ctx.letterSpacing = '0px';

  // Signature lines
  const sigY = 556;
  ctx.strokeStyle = 'rgba(200,168,106,0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W/2 - 260, sigY); ctx.lineTo(W/2 - 80, sigY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W/2 + 80,  sigY); ctx.lineTo(W/2 + 260, sigY); ctx.stroke();

  ctx.fillStyle = 'rgba(240,232,216,0.5)';
  ctx.font = `400 12px system-ui, sans-serif`;
  ctx.fillText('Matt Maloy', W/2 - 170, sigY + 16);
  ctx.fillText(date, W/2 + 170, sigY + 16);

  ctx.fillStyle = 'rgba(200,168,106,0.45)';
  ctx.font = `400 10px 'Courier New', monospace`;
  ctx.fillText('Director, Troweled Earth Melbourne', W/2 - 170, sigY + 32);
  ctx.fillText('Date of Completion', W/2 + 170, sigY + 32);

  // ── Watermark ─────────────────────────────────────────────────────────────────
  ctx.fillStyle = 'rgba(200,168,106,0.06)';
  ctx.font = `900 90px system-ui, sans-serif`;
  ctx.save();
  ctx.translate(W/2, H/2 + 20);
  ctx.rotate(-0.18);
  ctx.fillText('CERTIFIED', 0, 0);
  ctx.restore();

  return canvas.toDataURL('image/png');
}
