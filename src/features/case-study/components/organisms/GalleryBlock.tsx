import type { GalleryBlock as GalleryBlockData, GalleryCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { CaseFigure } from '../molecules/CaseFigure';
import { SectionHeading } from '../molecules/SectionHeading';

interface Props extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  block: GalleryBlockData;
  copy: GalleryCopy;
}

export function GalleryBlock({ block, copy, ...shell }: Props) {
  const id = `${block.id}-title`;
  return (
    <BlockShell {...shell} labelledBy={id}>
      <SectionHeading id={id} label={copy.label} title={copy.title} subtitle={copy.subtitle} body={copy.body} />
      <div className="mt-12 space-y-12">
        {block.images.map((image, i) => (
          <CaseFigure key={image.src} image={image} alt={copy.captions[i] ?? copy.title} caption={copy.captions[i]} />
        ))}
      </div>
    </BlockShell>
  );
}
