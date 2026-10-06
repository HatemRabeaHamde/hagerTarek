import type { ScreensBlock as ScreensBlockData, ScreensCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { SectionHeading } from '../molecules/SectionHeading';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: ScreensBlockData;
  copy: ScreensCopy;
}

export function ScreensBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <SectionHeading id={id} label={copy.label} title={copy.title} body={copy.body} />
      <div className="mt-12">
        <CaseFigure image={block.image} alt={copy.imageAlt} />
      </div>
    </BlockShell>
  );
}
