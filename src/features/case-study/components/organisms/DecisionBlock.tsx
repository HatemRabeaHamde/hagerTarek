import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { Reveal } from '@/core/components/atoms/Reveal';
import type { DecisionBlock as DecisionBlockData, DecisionCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: DecisionBlockData;
  copy: DecisionCopy;
}

export function DecisionBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <Reveal>
          <Eyebrow>{copy.label}</Eyebrow>
          <p aria-hidden="true" className="mt-6 font-display text-7xl leading-none text-(--p-accent-text) sm:text-8xl dark:text-(--p-accent)">
            {copy.counter}
          </p>
          <h2 id={id} className="text-display mt-6 text-3xl sm:text-4xl xl:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 leading-relaxed text-muted sm:text-lg">{copy.body}</p>
          <div className="mt-8 border-t border-(--p-accent-text)/50 pt-5 dark:border-(--p-accent)/50">
            <Eyebrow accent>{copy.rationaleTitle}</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{copy.rationale}</p>
          </div>
        </Reveal>
        <CaseFigure image={block.image} alt={copy.imageAlt} sizes="(min-width: 1024px) 55vw, 100vw" />
      </div>
    </BlockShell>
  );
}
