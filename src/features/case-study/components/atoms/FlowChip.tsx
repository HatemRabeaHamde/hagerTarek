import { cn } from '@/core/utils/cn';

export function FlowChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border px-3.5 py-2 text-sm sm:text-base',
        active
          ? 'border-(--p-accent-text) text-(--p-accent-text) dark:border-(--p-accent) dark:text-(--p-accent)'
          : 'border-dashed border-subtle text-subtle',
      )}
    >
      {label}
    </span>
  );
}
