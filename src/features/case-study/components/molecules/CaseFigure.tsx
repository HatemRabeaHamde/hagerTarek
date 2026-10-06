import type { ImageAsset } from '@/core/constants/assets';
import { Reveal } from '@/core/components/atoms/Reveal';
import { cn } from '@/core/utils/cn';
import { CaseImage } from '../atoms/CaseImage';

/** Wide boards (many screens side by side) become swipeable on phones instead of shrinking. */
const WIDE_ASPECT = 1.8;

interface CaseFigureProps {
  image: ImageAsset;
  alt: string;
  title?: string;
  caption?: string;
  sizes?: string;
}

export function CaseFigure({ image, alt, title, caption, sizes }: CaseFigureProps) {
  const wide = image.width / image.height > WIDE_ASPECT;
  return (
    <Reveal as="figure">
      <div
        className={cn(wide && 'max-sm:-mx-5 max-sm:overflow-x-auto max-sm:px-5 max-sm:pb-2')}
        tabIndex={wide ? 0 : undefined}
        data-lenis-prevent-touch={wide ? '' : undefined}
      >
        <CaseImage
          image={image}
          alt={alt}
          sizes={wide ? '(max-width: 639px) 200vw, (min-width: 1440px) 1300px, 100vw' : sizes}
          className={cn(wide && 'max-sm:w-[200%] max-sm:max-w-none')}
        />
      </div>
      {(title || caption) && (
        <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {title && <span className="me-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink">{title}</span>}
          {caption}
        </figcaption>
      )}
    </Reveal>
  );
}
