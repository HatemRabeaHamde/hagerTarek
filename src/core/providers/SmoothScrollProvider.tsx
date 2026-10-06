'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion } from '@/core/hooks/usePrefersReducedMotion';

/** Inertia scrolling that keeps native scroll position (so all scroll listeners keep working). */
export function SmoothScrollProvider() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.1 });
    return () => lenis.destroy();
  }, [reduced]);

  return null;
}
