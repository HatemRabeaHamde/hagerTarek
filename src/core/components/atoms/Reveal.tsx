'use client';

import { useInView } from '@/core/hooks/useInView';
import { cn } from '@/core/utils/cn';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger in ms */
  delay?: number;
  as?: 'div' | 'li' | 'figure';
}

/** Fade + rise on first view. CSS-only transition, disabled for reduced motion in globals.css. */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal={inView ? 'in' : 'out'}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  );
}
