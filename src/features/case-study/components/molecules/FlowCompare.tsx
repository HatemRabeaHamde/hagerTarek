import { FlowChip } from '../atoms/FlowChip';

interface FlowCompareProps {
  before: readonly string[];
  after: readonly string[];
  labels: { before: string; after: string };
}

/** Before → after journey comparison. */
export function FlowCompare({ before, after, labels }: FlowCompareProps) {
  const rows = [
    { label: labels.before, steps: before, active: false },
    { label: labels.after, steps: after, active: true },
  ];
  return (
    <div className="mt-10 space-y-5 border-t border-line pt-8">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <span
            className={
              row.active
                ? 'w-20 text-xs uppercase tracking-[0.22em] text-(--p-accent-text) dark:text-(--p-accent)'
                : 'w-20 text-xs uppercase tracking-[0.22em] text-subtle'
            }
          >
            {row.label}
          </span>
          <ol className="flex flex-wrap items-center gap-2">
            {row.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <FlowChip label={step} active={row.active} />
                {i < row.steps.length - 1 && (
                  <span aria-hidden="true" className="text-subtle rtl:-scale-x-100">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
