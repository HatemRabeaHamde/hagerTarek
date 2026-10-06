'use client';

import { useRef } from 'react';
import type { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { damp } from '@/core/utils/math';

/** Scales its children from 0.82 → 1 when mounted, so world swaps feel like a transition. */
export function MountIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  const value = useRef(0.82);
  useFrame((_, delta) => {
    const g = ref.current;
    if (!g || value.current > 0.999) return;
    value.current += (1 - value.current) * damp(4, delta);
    g.scale.setScalar(value.current);
  });
  return (
    <group ref={ref} scale={0.82}>
      {children}
    </group>
  );
}
