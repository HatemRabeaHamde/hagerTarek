import { Reveal } from '@/core/components/atoms/Reveal';
import type { PaletteBlock as PaletteBlockData, PaletteCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { SectionHeading } from '../molecules/SectionHeading';
import { SwatchCard } from '../molecules/SwatchCard';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: PaletteBlockData;
  copy: PaletteCopy;
}

export function PaletteBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <SectionHeading id={id} label={copy.label} title={copy.title} body={copy.body} size="md" />
          {copy.note && <p className="mt-6 text-sm leading-relaxed text-subtle">{copy.note}</p>}
        </div>
        <Reveal className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
          {block.swatches.map((swatch) => {
            const s = copy.swatches[swatch.id];
            return <SwatchCard key={swatch.id} swatch={swatch} name={s?.name ?? swatch.id} role={s?.role ?? ''} token={s?.token} />;
          })}
        </Reveal>
      </div>
      {block.image && (
        <div className="mt-14 lg:ms-auto lg:w-7/12">
          <CaseFigure image={block.image} alt={copy.imageAlt ?? copy.title} sizes="(min-width: 1024px) 58vw, 100vw" />
        </div>
      )}
    </BlockShell>
  );
}
