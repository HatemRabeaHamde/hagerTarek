'use client';

import { useEffect } from 'react';
import { clamp, smoothstep } from '@/core/utils/math';
import { useSceneStore } from '../store/sceneStore';

export const STATION_ATTR = 'data-station';

interface Span {
  top: number;
  height: number;
}

/**
 * Maps the page scroll to a continuous station value.
 * A station is "reached" when its section is centered in the viewport; the camera eases in and
 * out around that point (smoothstep), so it lingers on content and travels between sections.
 */
export function useScrollStations(enabled: boolean) {
  const setProgress = useSceneStore((s) => s.setProgress);

  useEffect(() => {
    if (!enabled) return;
    let spans: Span[] = [];
    let frame = 0;

    const measure = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(`[${STATION_ATTR}]`));
      spans = nodes
        .sort((a, b) => Number(a.getAttribute(STATION_ATTR)) - Number(b.getAttribute(STATION_ATTR)))
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return { top: rect.top + window.scrollY, height: Math.max(rect.height, 1) };
        });
      update();
    };

    const update = () => {
      frame = 0;
      if (!spans.length) return;
      const center = window.scrollY + window.innerHeight / 2;
      let i = spans.findIndex((s) => center < s.top + s.height);
      if (i === -1) i = spans.length - 1;
      const span = spans[i];
      const f = clamp((center - (span.top + span.height / 2)) / span.height, -0.5, 0.5);
      const eased = Math.sign(f) * 0.5 * smoothstep(Math.abs(f) / 0.5);
      setProgress(clamp(i + eased, 0, spans.length - 1));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener('scroll', onScroll, { passive: true });
    measure();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled, setProgress]);
}
