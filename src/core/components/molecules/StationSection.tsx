import type { CSSProperties } from 'react';
import type { ProjectThemeKey } from '@/core/constants/colors';
import { cn } from '@/core/utils/cn';
import { projectThemeVars } from '@/core/utils/themeCss';

export type SectionTone = 'canvas' | 'tint' | 'deep';

interface StationSectionProps {
  /** Index of the matching 3D station (scroll → camera mapping) */
  station: number;
  tone?: SectionTone;
  theme?: ProjectThemeKey;
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  canvas: 'bg-canvas',
  tint: 'bg-(--p-tint-light) dark:bg-(--p-tint-dark)',
  deep: 'tone-deep bg-(--p-deep)',
};

/**
 * A page section bound to a scene station. Its background is painted only when WebGL is off;
 * otherwise the 3D scene behind it provides the (animated) background.
 */
export function StationSection({
  station,
  tone = 'canvas',
  theme,
  id,
  className,
  children,
  labelledBy,
}: StationSectionProps) {
  return (
    <section
      id={id}
      data-station={station}
      data-scene-surface
      aria-labelledby={labelledBy}
      style={theme ? (projectThemeVars(theme) as CSSProperties) : undefined}
      className={cn('relative', TONE_CLASSES[tone], className)}
    >
      {children}
    </section>
  );
}
