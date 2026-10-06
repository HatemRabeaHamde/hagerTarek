import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { CaseMetaCopy } from '../../types/case-study.types';

/** Role · Product · Scope · Timeline */
export function MetaGrid({ meta, labels }: { meta: CaseMetaCopy; labels: Dictionary['common'] }) {
  const rows = [
    [labels.role, meta.role],
    [labels.product, meta.product],
    [labels.scope, meta.scope],
    [labels.timeline, meta.timeline],
  ] as const;
  return (
    <dl className="grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-subtle">{label}</dt>
          <dd className="mt-2 text-sm leading-relaxed sm:text-base">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
