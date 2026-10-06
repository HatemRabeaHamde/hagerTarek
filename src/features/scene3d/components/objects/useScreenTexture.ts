'use client';

import { useEffect, useMemo } from 'react';
import type { ImageAsset } from '@/core/constants/assets';
import { coverTexture } from '../../utils/textures';
import { useImageTexture } from './useImageTexture';

/** Loads a screen image and fits it to a screen of the given aspect (cover, top-anchored). */
export function useScreenTexture(asset: ImageAsset, screenAspect: number) {
  const source = useImageTexture(asset.src);
  const texture = useMemo(() => coverTexture(source, screenAspect), [source, screenAspect]);
  useEffect(() => () => texture.dispose(), [texture]);
  return texture;
}
