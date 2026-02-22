import * as THREE from 'three';
/**
 * Loads the actual TEM logo PNG (white tree on black) as a Three.js texture.
 * The PNG is the real logo from the TEM website/assets.
 */
export function makeTEMTreeTexture() {
    const loader = new THREE.TextureLoader();
    // Black canvas placeholder while the real texture loads
    const fallback = document.createElement('canvas');
    fallback.width = 4;
    fallback.height = 4;
    const fCtx = fallback.getContext('2d');
    fCtx.fillStyle = '#000';
    fCtx.fillRect(0, 0, 4, 4);
    const tex = new THREE.CanvasTexture(fallback);
    // Load the real logo PNG from public folder
    const img = new Image();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const base = import.meta.env?.BASE_URL ?? '/';
    img.src = `${base}tem-logo.png`;
    img.onload = () => {
        // Draw white-tree-on-black onto a canvas
        const c = document.createElement('canvas');
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext('2d');
        // Black background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, c.width, c.height);
        // Draw logo (it's already white-on-black after ImageMagick -negate)
        ctx.drawImage(img, 0, 0);
        tex.image = c;
        tex.needsUpdate = true;
    };
    return tex;
}
