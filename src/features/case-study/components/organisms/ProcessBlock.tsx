import { Reveal } from '@/core/components/atoms/Reveal';
import { cn } from '@/core/utils/cn';
import type { ProcessBlock as ProcessBlockData, ProcessCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { SectionHeading } from '../molecules/SectionHeading';
import { StatCard } from '../molecules/StatCard';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: ProcessBlockData;
  copy: ProcessCopy;
}

const STAT_COLUMNS: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-2 xl:grid-cols-4',
  5: 'sm:grid-cols-3 xl:grid-cols-5',
};

export function ProcessBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  const side = block.imageLayout === 'side' && block.image;
  const accentFrom = block.accentFrom ?? Number.POSITIVE_INFINITY;

  const text = (
    <Reveal>
      <SectionHeading id={id} label={copy.label} title={copy.title} body={copy.body} />
      <div className={cn('mt-12 grid grid-cols-1 gap-8', !side && STAT_COLUMNS[copy.stats.length], side && 'sm:grid-cols-2')}>
        {copy.stats.map((s, i) => (
          <StatCard key={s.value} value={s.value} label={s.label} note={s.note} accent={i >= accentFrom} />
        ))}
      </div>
      {copy.note && (
        <p className="mt-8 flex gap-3 text-sm text-muted">
          <span aria-hidden="true" className="text-(--p-accent-text) dark:text-(--p-accent)">
            ✦
          </span>
          {copy.note}
        </p>
      )}
    </Reveal>
  );

  if (side && block.image) {
    return (
      <BlockShell {...shell} labelledBy={id}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {text}
          <CaseFigure
            image={block.image}
            alt={copy.imageTitle ?? ''}
            title={copy.imageTitle}
            caption={copy.imageCaption}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </BlockShell>
    );
  }

  return (
    <BlockShell {...shell} labelledBy={id}>
      {text}
      {block.image && (
        <div className="mt-14">
          <CaseFigure image={block.image} alt={copy.imageTitle ?? ''} title={copy.imageTitle} caption={copy.imageCaption} />
        </div>
      )}
    </BlockShell>
  );
}
