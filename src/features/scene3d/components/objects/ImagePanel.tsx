'use client';

import { useEffect, useMemo } from 'react';
import type { ImageAsset } from '@/core/constants/assets';
import { roundedPlaneGeometry } from '../../utils/geometry';
import { useImageTexture } from './useImageTexture';

interface ImagePanelProps {
  image: ImageAsset;
  height: number;
  radius?: number;
}

/** Rounded photo card (used for the portrait). */
export function ImagePanel({ image, height, radius = 0.14 }: ImagePanelProps) {
  const map = useImageTexture(image.src);
  const width = height * (image.width / image.height);
  const geometry = useMemo(() => roundedPlaneGeometry(width, height, radius), [width, height, radius]);
  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial map={map} toneMapped={false} />
    </mesh>
  );
}
