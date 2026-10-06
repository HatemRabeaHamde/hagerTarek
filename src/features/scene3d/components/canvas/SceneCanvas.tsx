'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { usePrefersDark } from '@/core/hooks/usePrefersDark';
import { SCENE } from '../../config/sceneConfig';
import { World } from '../worlds/World';

/** The single, persistent WebGL canvas. Lowers resolution automatically on slow devices. */
export function SceneCanvas() {
  const dark = usePrefersDark();
  const [dpr, setDpr] = useState<number>(SCENE.dpr.max);

  return (
    <Canvas
      flat
      dpr={[SCENE.dpr.min, dpr]}
      camera={{
        fov: SCENE.camera.fov,
        near: SCENE.camera.near,
        far: SCENE.camera.far,
        position: [0, 0, SCENE.camera.distance],
      }}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr(SCENE.dpr.min)}
        onIncline={() => setDpr(SCENE.dpr.max)}
        flipflops={3}
        onFallback={() => setDpr(SCENE.dpr.min)}
      />
      <World dark={dark} />
    </Canvas>
  );
}
