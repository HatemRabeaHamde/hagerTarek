import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { Reveal } from '@/core/components/atoms/Reveal';
import type { OutcomeBlock as OutcomeBlockData, OutcomeCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { MetricCard } from '../molecules/MetricCard';
import { SectionHeading } from '../molecules/SectionHeading';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: OutcomeBlockData;
  copy: OutcomeCopy;
}

export function OutcomeBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <SectionHeading id={id} label={copy.label} title={copy.title} />
      {block.image && (
        <div className="mt-12">
          <CaseFigure image={block.image} alt={copy.imageAlt ?? copy.title} />
        </div>
      )}
      <Reveal className="mt-12 grid gap-10 rounded-2xl bg-paper/70 p-6 sm:p-10 md:grid-cols-3">
        {copy.metrics.map((m, i) => (
          <MetricCard key={m.title} index={i} title={m.title} body={m.body} />
        ))}
      </Reveal>
      <Eyebrow className="mt-10">{copy.status}</Eyebrow>
    </BlockShell>
  );
}
