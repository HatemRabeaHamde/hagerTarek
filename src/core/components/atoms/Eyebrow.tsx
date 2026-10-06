import { cn } from '@/core/utils/cn';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
  as?: 'p' | 'span' | 'h2' | 'h3';
}

/** Small spaced-out uppercase label. */
export function Eyebrow({ children, className, accent, as: Tag = 'p' }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'text-[0.7rem] font-medium uppercase tracking-[0.22em] sm:text-xs',
        accent ? 'text-(--p-accent-text) dark:text-(--p-accent)' : 'text-subtle',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
