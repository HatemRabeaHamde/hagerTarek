'use client';

import { forwardRef, useEffect, useMemo } from 'react';
import type { Group } from 'three';
import type { ImageAsset } from '@/core/constants/assets';
import { DEVICE } from '../../config/deviceConfig';
import { roundedPlaneGeometry, roundedSlabGeometry } from '../../utils/geometry';
import { useScreenTexture } from './useScreenTexture';

const B = DEVICE.browser;

/** Width of a browser window for a screenshot, keeping its natural aspect. */
export const browserSize = (screen: ImageAsset) => {
  const screenW = B.screenHeight * (screen.width / screen.height);
  return { width: screenW + B.frame * 2, height: B.screenHeight + B.bar + B.frame };
};

/** Desktop browser window: light frame, traffic lights and an address bar. */
export const BrowserDevice = forwardRef<Group, { screen: ImageAsset }>(function BrowserDevice({ screen }, ref) {
  const { width, height } = browserSize(screen);
  const screenW = width - B.frame * 2;
  const map = useScreenTexture(screen, screenW / B.screenHeight);

  const geo = useMemo(
    () => ({
      frame: roundedSlabGeometry(width, height, B.cornerRadius, B.depth),
      bar: roundedPlaneGeometry(width - 0.004, B.bar + 0.06, B.cornerRadius, 8),
      address: roundedPlaneGeometry(Math.min(width * 0.42, 1.6), B.bar * 0.5, B.bar * 0.25, 8),
      screen: roundedPlaneGeometry(screenW, B.screenHeight, 0.012, 4),
    }),
    [width, height, screenW],
  );
  useEffect(() => () => Object.values(geo).forEach((g) => g.dispose()), [geo]);

  const barY = height / 2 - B.bar / 2;
  const screenY = -height / 2 + B.frame + B.screenHeight / 2;

  return (
    <group ref={ref}>
      <mesh geometry={geo.frame}>
        <meshStandardMaterial color={DEVICE.colors.browserFrame} metalness={0.05} roughness={0.55} />
      </mesh>
      <mesh geometry={geo.bar} position={[0, barY - 0.03, 0.002]}>
        <meshBasicMaterial color={DEVICE.colors.browserBar} toneMapped={false} />
      </mesh>
      {DEVICE.colors.dots.map((c, i) => (
        <mesh key={c} position={[-width / 2 + 0.13 + i * 0.09, barY, 0.004]}>
          <circleGeometry args={[0.026, 16]} />
          <meshBasicMaterial color={c} toneMapped={false} />
        </mesh>
      ))}
      <mesh geometry={geo.address} position={[0, barY, 0.004]}>
        <meshBasicMaterial color={DEVICE.colors.browserAddress} toneMapped={false} />
      </mesh>
      <mesh geometry={geo.screen} position={[0, screenY, 0.004]}>
        <meshBasicMaterial map={map} toneMapped={false} />
      </mesh>
    </group>
  );
});
