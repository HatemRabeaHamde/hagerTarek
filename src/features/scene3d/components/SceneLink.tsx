'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { VISUAL_ANCHOR_ATTR } from '@/core/constants/dom';
import { ArrowIcon } from '@/core/components/atoms/ArrowIcon';
import { useHasWebGL } from '@/core/hooks/useHasWebGL';
import { usePrefersReducedMotion } from '@/core/hooks/usePrefersReducedMotion';
import { cn } from '@/core/utils/cn';
import { TRANSITION_MS, useSceneStore } from '../store/sceneStore';

interface SceneLinkProps {
  href: string;
  /** Station of the 3D devices displayed in this box */
  station: number;
  /** Accessible name, e.g. "View case study: DigitalCar" */
  label: string;
  /** Visible hint shown on hover / always on touch screens */
  hint: string;
  className?: string;
  /** Static fallback rendered inside when WebGL is off */
  children?: React.ReactNode;
}

/**
 * The 3D visual's anchor box as a link: hovering spreads the devices, clicking flies the camera
 * into them and then navigates. Falls back to a plain link without WebGL or with reduced motion.
 */
export function SceneLink({ href, station, label, hint, className, children }: SceneLinkProps) {
  const router = useRouter();
  const webgl = useHasWebGL();
  const reduced = usePrefersReducedMotion();
  const setHovered = useSceneStore((s) => s.setHoveredStation);
  const startTransition = useSceneStore((s) => s.startTransition);

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!webgl || reduced || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    startTransition(station);
    window.setTimeout(() => router.push(href), TRANSITION_MS);
  };

  return (
    <Link
      href={href}
      aria-label={label}
      {...{ [VISUAL_ANCHOR_ATTR]: station }}
      onPointerEnter={() => {
        setHovered(station);
        router.prefetch(href);
      }}
      onPointerLeave={() => setHovered(null)}
      onFocus={() => setHovered(station)}
      onBlur={() => setHovered(null)}
      onClick={onClick}
      className={cn('visual-anchor group relative block w-full rounded-3xl', className)}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 start-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-canvas opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 rtl:translate-x-1/2 [@media(hover:none)]:opacity-90"
      >
        {hint}
        <ArrowIcon className="size-3.5" />
      </span>
    </Link>
  );
}
