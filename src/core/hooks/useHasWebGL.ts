'use client';

import { useSyncExternalStore } from 'react';

import { WEBGL_CLASS } from '@/core/constants/dom';

const noopSubscribe = () => () => {};

/** True when the device supports WebGL and the user has not asked for reduced motion. */
export function useHasWebGL(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => document.documentElement.classList.contains(WEBGL_CLASS),
    () => false,
  );
}
