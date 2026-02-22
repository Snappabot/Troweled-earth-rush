import * as THREE from 'three';
/**
 * Module-level loaded image — populated by preloadTEMLogo() before any game
 * objects are constructed. Stays null if the load fails (canvas fallback used).
 */
let _rawImg = null;
/**
 * Call once at startup (await it) before creating VanModel, Characters, Engine, etc.
 * Loads tem-logo.jpg from public/ into memory.
 */
export async function preloadTEMLogo() {
    const base = import.meta.env?.BASE_URL ?? './';
    const img = new Image();
    await new Promise((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => {
            console.warn('[LogoLoader] tem-logo.jpg failed to load — using canvas fallback');
            resolve(); // don't block the game
        };
        img.src = `${base}tem-logo.jpg`;
    });
    if (img.complete && img.naturalWidth > 0) {
        _rawImg = img;
        console.log('[LogoLoader] tem-logo.jpg loaded OK', img.naturalWidth, '×', img.naturalHeight);
    }
}
/** True once preloadTEMLogo() has successfully loaded the image. */
export function isLogoReady() { return _rawImg !== null; }
/**
 * Generate a shirt logo texture for any shirt colour.
 * - Light shirts (Phil, Connie, Mikayla, Joe): black tree on shirt-coloured bg
 * - Dark shirts (Matt, Jose, Jarrad, Tsuyoshi, Fabio): white tree on shirt-coloured bg
 * Falls back to the canvas-drawn simplified tree if image not loaded.
 */
export function makeTEMShirtTexture(shirtColor) {
    const size = 256;
    const cv = document.createElement('canvas');
    cv.width = cv.height = size;
    const ctx = cv.getContext('2d');
    // Fill shirt-colour background
    const hex = `#${shirtColor.toString(16).padStart(6, '0')}`;
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, size, size);
    if (_rawImg) {
        // Determine if shirt is dark (need white tree) or light (keep black tree)
        const r = (shirtColor >> 16) & 0xFF;
        const g = (shirtColor >> 8) & 0xFF;
        const b = shirtColor & 0xFF;
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const isDark = lum < 128;
        // Draw logo onto temp canvas, then extract just the tree as the desired color
        const tmp = document.createElement('canvas');
        tmp.width = tmp.height = size;
        const tc = tmp.getContext('2d');
        tc.drawImage(_rawImg, 0, 0, size, size);
        if (isDark) {
            // Logo is black-on-white; invert so tree is white
            const d = tc.getImageData(0, 0, size, size);
            for (let i = 0; i < d.data.length; i += 4) {
                d.data[i] = 255 - d.data[i];
                d.data[i + 1] = 255 - d.data[i + 1];
                d.data[i + 2] = 255 - d.data[i + 2];
            }
            tc.putImageData(d, 0, 0);
            // Use 'screen' so white tree paints over dark shirt, black bg disappears
            ctx.globalCompositeOperation = 'screen';
        }
        else {
            // Black tree on white image; use 'multiply' so white bg is transparent
            ctx.globalCompositeOperation = 'multiply';
        }
        ctx.drawImage(tmp, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
    }
    else {
        // Fallback: canvas-drawn simplified tree
        _drawFallbackTree(ctx, size, shirtColor);
    }
    return new THREE.CanvasTexture(cv);
}
/**
 * Generate a van-roof / dark-surface logo texture.
 * Result: white tree on black background.
 */
export function makeTEMRoofTexture(size = 512) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = size;
    const ctx = cv.getContext('2d');
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);
    if (_rawImg) {
        // Logo is black-on-white → invert so tree is white on black
        const tmp = document.createElement('canvas');
        tmp.width = tmp.height = size;
        const tc = tmp.getContext('2d');
        tc.drawImage(_rawImg, 0, 0, size, size);
        const d = tc.getImageData(0, 0, size, size);
        for (let i = 0; i < d.data.length; i += 4) {
            d.data[i] = 255 - d.data[i];
            d.data[i + 1] = 255 - d.data[i + 1];
            d.data[i + 2] = 255 - d.data[i + 2];
        }
        tc.putImageData(d, 0, 0);
        // Screen blend: white tree on black bg paints cleanly
        ctx.globalCompositeOperation = 'screen';
        ctx.drawImage(tmp, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
    }
    else {
        _drawFallbackTreeWhite(ctx, size);
    }
    return new THREE.CanvasTexture(cv);
}
// ── Fallbacks (used if image fails to load) ───────────────────────────────────
function _drawFallbackTree(ctx, size, shirtColor) {
    const r = (shirtColor >> 16) & 0xFF;
    const g = (shirtColor >> 8) & 0xFF;
    const b = shirtColor & 0xFF;
    const isDark = 0.299 * r + 0.587 * g + 0.114 * b < 128;
    ctx.strokeStyle = isDark ? '#FFFFFF' : '#111111';
    ctx.fillStyle = isDark ? '#FFFFFF' : '#111111';
    _drawTreeStrokes(ctx, size);
}
function _drawFallbackTreeWhite(ctx, size) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.fillStyle = '#FFFFFF';
    _drawTreeStrokes(ctx, size);
}
function _drawTreeStrokes(ctx, size) {
    const s = size / 256;
    ctx.save();
    ctx.scale(s, s);
    ctx.lineCap = 'round';
    // Circle
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(128, 128, 118, 0, Math.PI * 2);
    ctx.stroke();
    // Trunk
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.moveTo(128, 225);
    ctx.lineTo(128, 148);
    ctx.stroke();
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(128, 148);
    ctx.lineTo(128, 96);
    ctx.stroke();
    const branches = [
        [128, 178, 76, 152], [128, 178, 180, 152],
        [128, 160, 64, 134], [128, 160, 192, 134],
        [128, 142, 76, 116], [128, 142, 180, 116],
        [128, 124, 88, 99], [128, 124, 168, 99],
        [128, 110, 98, 84], [128, 110, 158, 84],
        [128, 98, 110, 70], [128, 98, 146, 70],
        [128, 88, 118, 56], [128, 88, 138, 56],
    ];
    ctx.lineWidth = 4;
    for (const [x1, y1, x2, y2] of branches) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x2, y2, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
}
