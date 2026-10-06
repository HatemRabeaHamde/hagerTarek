'use client';

import { getShadowTexture } from '../../utils/textures';

interface SoftShadowProps {
  width: number;
  height: number;
  dark: boolean;
}

/** Blurred drop shadow behind a device (a textured quad: no shadow maps, almost free). */
export function SoftShadow({ width, height, dark }: SoftShadowProps) {
  return (
    <mesh position={[0.08, -0.22, -0.32]} scale={[width * 1.35, height * 1.18, 1]} renderOrder={-1}>
      <planeGeometry />
      <meshBasicMaterial
        map={getShadowTexture()}
        transparent
        opacity={dark ? 0.75 : 0.42}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}
