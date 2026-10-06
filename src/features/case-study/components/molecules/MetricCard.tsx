export function MetricCard({ index, title, body }: { index: number; title: string; body: string }) {
  return (
    <div className="border-t border-(--p-accent-text) pt-5 dark:border-(--p-accent)">
      <p className="font-display text-3xl text-(--p-accent-text) dark:text-(--p-accent)">{String(index + 1).padStart(2, '0')}</p>
      <h3 className="mt-3 font-display text-2xl leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
    </div>
  );
}
