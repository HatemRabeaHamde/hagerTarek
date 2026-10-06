'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { SCENE_COLORS } from '@/core/constants/colors';
import { getLayoutMode } from '@/core/constants/layout';
import { SCENE } from '../../config/sceneConfig';

interface DustProps {
  /** Depth range covered by the stations */
  minZ: number;
  maxZ: number;
  dark: boolean;
}

/** Floating paper-dust particles along the whole camera path (adds depth & motion cues). */
export function Dust({ minZ, maxZ, dark }: DustProps) {
  const ref = useRef<THREE.Points>(null);
  const width = useThree((s) => s.size.width);
  const height = useThree((s) => s.size.height);
  const count = getLayoutMode(width, height) === 'split' ? SCENE.dust.desktop : SCENE.dust.mobile;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    // Deterministic pseudo-random so the field is stable between renders.
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rand() - 0.5) * 30;
      positions[i * 3 + 1] = (rand() - 0.5) * 14;
      positions[i * 3 + 2] = maxZ + 12 - rand() * (maxZ - minZ + 24);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count, minZ, maxZ]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }) => {
    const p = ref.current;
    if (!p) return;
    p.position.y = Math.sin(clock.elapsedTime * 0.15) * 0.25;
    p.rotation.z = Math.sin(clock.elapsedTime * 0.05) * 0.02;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color={dark ? SCENE_COLORS.dustDark : SCENE_COLORS.dustLight}
        size={SCENE.dust.size}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}
