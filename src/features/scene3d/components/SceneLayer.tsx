'use client';

import dynamic from 'next/dynamic';
import { useHasWebGL } from '@/core/hooks/useHasWebGL';

const SceneCanvas = dynamic(() => import('./canvas/SceneCanvas').then((m) => m.SceneCanvas), {
  ssr: false,
});

/** Fixed, full-viewport WebGL layer behind the page. Only loads three.js when WebGL is usable. */
export function SceneLayer() {
  const webgl = useHasWebGL();
  if (!webgl) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <SceneCanvas />
    </div>
  );
}
