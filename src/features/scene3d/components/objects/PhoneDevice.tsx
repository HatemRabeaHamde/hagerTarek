'use client';

import { forwardRef, useEffect, useMemo } from 'react';
import type { Group } from 'three';
import type { ImageAsset } from '@/core/constants/assets';
import { DEVICE } from '../../config/deviceConfig';
import { roundedPlaneGeometry, roundedSlabGeometry } from '../../utils/geometry';
import { getGlareTexture } from '../../utils/textures';
import { useScreenTexture } from './useScreenTexture';

const P = DEVICE.phone;
export const PHONE_WIDTH = P.screenHeight * P.screenAspect + P.bezel * 2;
export const PHONE_HEIGHT = P.screenHeight + P.bezel * 2;

/** Modern phone: metal rim, black bezel, dynamic island, side buttons and a glass glare. */
export const PhoneDevice = forwardRef<Group, { screen: ImageAsset }>(function PhoneDevice({ screen }, ref) {
  const screenW = P.screenHeight * P.screenAspect;
  const map = useScreenTexture(screen, P.screenAspect);

  const geo = useMemo(
    () => ({
      rim: roundedSlabGeometry(PHONE_WIDTH + 0.03, PHONE_HEIGHT + 0.03, P.cornerRadius + 0.015, P.depth),
      bezel: roundedPlaneGeometry(PHONE_WIDTH - 0.01, PHONE_HEIGHT - 0.01, P.cornerRadius, 16),
      screen: roundedPlaneGeometry(screenW, P.screenHeight, P.screenRadius, 16),
      island: roundedPlaneGeometry(P.island.width, P.island.height, P.island.height / 2, 8),
    }),
    [screenW],
  );
  useEffect(() => () => Object.values(geo).forEach((g) => g.dispose()), [geo]);

  const glare = getGlareTexture();
  const sideX = PHONE_WIDTH / 2 + 0.012;

  return (
    <group ref={ref}>
      <mesh geometry={geo.rim}>
        <meshStandardMaterial color={DEVICE.colors.phoneRim} metalness={0.85} roughness={0.32} />
      </mesh>
      <mesh geometry={geo.bezel} position={[0, 0, 0.002]}>
        <meshStandardMaterial color={DEVICE.colors.bezel} metalness={0.2} roughness={0.15} />
      </mesh>
      <mesh geometry={geo.screen} position={[0, 0, 0.004]}>
        <meshBasicMaterial map={map} toneMapped={false} />
      </mesh>
      <mesh geometry={geo.island} position={[0, P.screenHeight / 2 - P.island.top, 0.006]}>
        <meshBasicMaterial color={DEVICE.colors.bezel} toneMapped={false} />
      </mesh>
      <mesh geometry={geo.screen} position={[0, 0, 0.008]}>
        <meshBasicMaterial map={glare} transparent depthWrite={false} toneMapped={false} />
      </mesh>
      {/* Side buttons */}
      {[
        { x: -sideX, y: 0.85, h: 0.22 },
        { x: -sideX, y: 0.5, h: 0.36 },
        { x: -sideX, y: 0.08, h: 0.36 },
        { x: sideX, y: 0.55, h: 0.55 },
      ].map((b, i) => (
        <mesh key={i} position={[b.x, b.y, -P.depth / 2]}>
          <boxGeometry args={[0.025, b.h, P.depth * 0.45]} />
          <meshStandardMaterial color={DEVICE.colors.phoneRim} metalness={0.85} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
});
