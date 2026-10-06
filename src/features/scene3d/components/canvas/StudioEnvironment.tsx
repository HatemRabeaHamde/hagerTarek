'use client';

import { Environment, Lightformer } from '@react-three/drei';

/**
 * Procedural studio reflections for the metal and glass of the devices.
 * Rendered once into a small cube map — no HDR file download.
 */
export function StudioEnvironment() {
  return (
    <Environment resolution={64} frames={1}>
      <Lightformer form="rect" intensity={2.2} position={[0, 4, 5]} scale={[10, 2.5, 1]} />
      <Lightformer form="rect" intensity={1.2} position={[-6, 0, 3]} rotation-y={Math.PI / 2.5} scale={[6, 4, 1]} />
      <Lightformer form="rect" intensity={0.8} position={[6, -1, 2]} rotation-y={-Math.PI / 2.5} scale={[6, 3, 1]} />
      <Lightformer form="ring" intensity={0.6} position={[0, -5, -3]} scale={4} />
    </Environment>
  );
}
