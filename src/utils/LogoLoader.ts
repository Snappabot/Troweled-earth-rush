import * as THREE from 'three';

// ── Loaded images ─────────────────────────────────────────────────────────────
// tem-logo.jpg     = black tree on white background  (light shirts, light surfaces)
// tem-logo-white.jpg = white tree on black background (dark shirts, van roof, HQ, map)
let _imgBlackOnWhite: HTMLImageElement | null = null;
let _imgWhiteOnBlack: HTMLImageElement | null = null;

/**
 * Preload both logo variants before any game objects are constructed.
 * Must be awaited in main() — guarantees textures are available synchronously.
 */
export async function preloadTEMLogo(): Promise<void> {
  const base = (import.meta as any).env?.BASE_URL ?? './';

  async function load(src: string): Promise<HTMLImageElement | null> {
    const img = new Image();
    return new Promise((resolve) => {
      img.onload  = () => resolve(img.naturalWidth > 0 ? img : null);
      img.onerror = () => { console.warn('[LogoLoader] failed:', src); resolve(null); };
      img.src = src;
    });
  }

  [_imgBlackOnWhite, _imgWhiteOnBlack] = await Promise.all([
    load(`${base}tem-logo.jpg`),
    load(`${base}tem-logo-white.jpg`),
  ]);

  console.log('[LogoLoader] black-on-white:', !!_imgBlackOnWhite, '| white-on-black:', !!_imgWhiteOnBlack);
}

// ── Public texture factories ──────────────────────────────────────────────────

/**
 * Shirt logo — transparent background, only the tree is opaque.
 * - Light shirts: black tree from tem-logo.jpg (white bg → alpha 0)
 * - Dark shirts: white tree from tem-logo-white.jpg (black bg → alpha 0)
 * The shirt mesh colour shows through the transparent pixels naturally.
 */
export function makeTEMShirtTexture(shirtColor: number): THREE.Texture {
  const size = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d')!;
  // Canvas starts fully transparent — no background fill

  const r = (shirtColor >> 16) & 0xFF;
  const g = (shirtColor >>  8) & 0xFF;
  const b =  shirtColor        & 0xFF;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const isDark = lum < 128;

  const src = isDark ? _imgWhiteOnBlack : _imgBlackOnWhite;

  if (src) {
    ctx.drawImage(src, 0, 0, size, size);
    const imgData = ctx.getImageData(0, 0, size, size);
    const d = imgData.data;

    for (let i = 0; i < d.length; i += 4) {
      const brightness = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      if (isDark) {
        // White-on-black: bright = tree (keep), dark = background (transparent)
        d[i + 3] = Math.round(Math.min(255, brightness * 1.4));
      } else {
        // Black-on-white: dark = tree (keep), bright = background (transparent)
        d[i + 3] = Math.round(Math.min(255, (255 - brightness) * 1.4));
      }
    }
    ctx.putImageData(imgData, 0, 0);
  } else {
    // Fallback — canvas-drawn tree on transparent bg
    _drawFallbackTree(ctx, size, isDark);
  }

  return new THREE.CanvasTexture(cv);
}

/**
 * Van roof / workshop / map surface logo.
 * White tree on black — uses the white variant directly.
 */
export function makeTEMRoofTexture(size = 512): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d')!;

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);

  if (_imgWhiteOnBlack) {
    ctx.drawImage(_imgWhiteOnBlack, 0, 0, size, size);
  } else {
    ctx.strokeStyle = '#FFFFFF';
    ctx.fillStyle   = '#FFFFFF';
    _drawFallbackTreeStrokes(ctx, size);
  }

  return new THREE.CanvasTexture(cv);
}

// ── Fallback canvas tree (if images fail to load) ─────────────────────────────

function _drawFallbackTree(ctx: CanvasRenderingContext2D, size: number, isDark: boolean): void {
  ctx.strokeStyle = isDark ? '#FFFFFF' : '#111111';
  ctx.fillStyle   = isDark ? '#FFFFFF' : '#111111';
  _drawFallbackTreeStrokes(ctx, size);
}

function _drawFallbackTreeStrokes(ctx: CanvasRenderingContext2D, size: number): void {
  const s = size / 256;
  ctx.save(); ctx.scale(s, s);
  ctx.lineCap = 'round';
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.arc(128, 128, 118, 0, Math.PI * 2); ctx.stroke();
  ctx.lineWidth = 11;
  ctx.beginPath(); ctx.moveTo(128, 225); ctx.lineTo(128, 148); ctx.stroke();
  ctx.lineWidth = 7;
  ctx.beginPath(); ctx.moveTo(128, 148); ctx.lineTo(128, 96); ctx.stroke();
  const brs: [number,number,number,number][] = [
    [128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],
    [128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],
    [128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],
    [128,88,118,56],[128,88,138,56],
  ];
  ctx.lineWidth = 4;
  for (const [x1,y1,x2,y2] of brs) {
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    ctx.beginPath(); ctx.arc(x2,y2,5,0,Math.PI*2); ctx.fill();
  }
  ctx.restore();
}
