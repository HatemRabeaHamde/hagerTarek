import { cn } from '@/core/utils/cn';
import type { Swatch } from '../../types/case-study.types';

interface SwatchCardProps {
  swatch: Swatch;
  name: string;
  role: string;
  token?: string;
}

const HEIGHT: Record<NonNullable<Swatch['size']>, string> = {
  hero: 'h-40 sm:h-56 lg:h-64',
  md: 'h-24 sm:h-28',
  sm: 'h-14 sm:h-16',
};

/** Color chip with name, role and hex (optionally split with its tint). */
export function SwatchCard({ swatch, name, role, token }: SwatchCardProps) {
  const size = swatch.size ?? 'md';
  return (
    <figure className={cn(size === 'hero' && 'col-span-full')}>
      <div className={cn('flex overflow-hidden rounded-xl ring-1 ring-line ring-inset', HEIGHT[size])}>
        <span className="flex-1" style={{ backgroundColor: swatch.hex }} />
        {swatch.tintHex && <span className="flex-1" style={{ backgroundColor: swatch.tintHex }} />}
      </div>
      <figcaption className="mt-3 text-sm">
        <span className="font-medium">{name}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">{role}</span>
        {token && <span className="mt-1 block text-xs text-(--p-accent-text) dark:text-(--p-accent)">{token}</span>}
        <span className="mt-1 block font-mono text-[0.7rem] uppercase text-subtle">
          {swatch.hex}
          {swatch.tintHex && ` · ${swatch.tintHex}`}
        </span>
      </figcaption>
    </figure>
  );
}
