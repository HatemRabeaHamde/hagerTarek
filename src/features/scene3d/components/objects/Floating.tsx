'use client';

import { useRef } from 'react';
import type { Group } from 'three';
import { useFrame } from '@react-three/fiber';

interface FloatingProps {
  children: React.ReactNode;
  amplitude?: number;
  speed?: number;
  phase?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

/** Gentle idle bob + sway, independent from frame rate. */
export function Floating({
  children,
  amplitude = 0.06,
  speed = 0.9,
  phase = 0,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: FloatingProps) {
  const ref = useRef<Group>(null);
  useFrame(({ clock }) => {
    const g = ref.current;
    if (!g) return;
    const t = clock.elapsedTime * speed + phase;
    g.position.y = position[1] + Math.sin(t) * amplitude;
    g.rotation.z = rotation[2] + Math.sin(t * 0.7) * 0.012;
  });
  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {children}
    </group>
  );
}
