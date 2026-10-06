import { cn } from '@/core/utils/cn';

interface StatCardProps {
  value: string;
  label?: string;
  note: string;
  accent?: boolean;
}

export function StatCard({ value, label, note, accent }: StatCardProps) {
  return (
    <div className={cn('border-t pt-4', accent ? 'border-(--p-accent-text) dark:border-(--p-accent)' : 'border-line')}>
      <p className={cn('font-display text-3xl sm:text-4xl', accent && 'text-(--p-accent-text) dark:text-(--p-accent)')}>
        {value}
      </p>
      {label && (
        <p
          className={cn(
            'mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em]',
            accent ? 'text-(--p-accent-text) dark:text-(--p-accent)' : 'text-ink',
          )}
        >
          {label}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p>
    </div>
  );
}
