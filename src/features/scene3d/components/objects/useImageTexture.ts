'use client';

import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

/** Loads a screen texture with correct color space and crisp sampling (cached by src). */
export function useImageTexture(src: string): THREE.Texture {
  return useTexture(src, (tex) => {
    const t = Array.isArray(tex) ? tex[0] : tex;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
  });
}
