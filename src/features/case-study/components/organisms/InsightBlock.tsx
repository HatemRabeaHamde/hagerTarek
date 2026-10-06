import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { Reveal } from '@/core/components/atoms/Reveal';
import { RichText } from '@/core/components/atoms/RichText';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { InsightBlock as InsightBlockData, InsightCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { FlowCompare } from '../molecules/FlowCompare';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: InsightBlockData;
  copy: InsightCopy;
  common: Dictionary['common'];
}

export function InsightBlock({ block, copy, common, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] lg:gap-12">
        <Eyebrow className="lg:pt-4">{copy.label}</Eyebrow>
        <Reveal>
          <h2 id={id} className="text-display text-4xl sm:text-5xl xl:text-6xl">
            <RichText text={copy.title} />
          </h2>
          <p className="mt-8 max-w-3xl leading-relaxed text-muted sm:text-lg">{copy.body}</p>

          {block.extra === 'flow' && copy.flow && (
            <FlowCompare before={copy.flow.before} after={copy.flow.after} labels={{ before: common.before, after: common.after }} />
          )}

          {block.extra === 'challenges' && copy.challenges && (
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.challenges.map((c) => (
                <div key={c.label} className="rounded-2xl border border-line bg-paper/70 p-6">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-(--p-accent-text) dark:text-(--p-accent)">
                    {c.label}
                  </p>
                  <p className="mt-3 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>

      {typeof block.extra === 'object' && (
        <div className="mt-14">
          <CaseFigure image={block.extra.image} alt={copy.imageAlt ?? ''} />
        </div>
      )}
    </BlockShell>
  );
}
