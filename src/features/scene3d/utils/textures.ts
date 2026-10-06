import * as THREE from 'three';

/**
 * Clones a shared texture and maps it like CSS `object-fit: cover; object-position: top`
 * onto a surface of the given aspect (width / height).
 */
export function coverTexture(source: THREE.Texture, surfaceAspect: number): THREE.Texture {
  const tex = source.clone();
  const image = source.image as { width: number; height: number } | undefined;
  const imageAspect = image ? image.width / image.height : surfaceAspect;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  if (imageAspect > surfaceAspect) {
    // Wider than the surface: crop the sides equally.
    const r = surfaceAspect / imageAspect;
    tex.repeat.set(r, 1);
    tex.offset.set((1 - r) / 2, 0);
  } else {
    // Taller than the surface: keep the top (headers matter most), crop the bottom.
    const r = imageAspect / surfaceAspect;
    tex.repeat.set(1, r);
    tex.offset.set(0, 1 - r);
  }
  tex.needsUpdate = true;
  return tex;
}

let glare: THREE.CanvasTexture | null = null;

/** Diagonal soft highlight used as a glass reflection (created once, shared). */
export function getGlareTexture(): THREE.CanvasTexture {
  if (glare) return glare;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 256, 256);
  grad.addColorStop(0, 'rgba(255,255,255,0.0)');
  grad.addColorStop(0.38, 'rgba(255,255,255,0.0)');
  grad.addColorStop(0.46, 'rgba(255,255,255,0.16)');
  grad.addColorStop(0.58, 'rgba(255,255,255,0.0)');
  grad.addColorStop(1, 'rgba(255,255,255,0.05)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  glare = new THREE.CanvasTexture(c);
  return glare;
}

let shadow: THREE.CanvasTexture | null = null;

/** Radial blurred blob for cheap soft shadows (created once, shared). */
export function getShadowTexture(): THREE.CanvasTexture {
  if (shadow) return shadow;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(0,0,0,0.55)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0.22)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  shadow = new THREE.CanvasTexture(c);
  return shadow;
}
