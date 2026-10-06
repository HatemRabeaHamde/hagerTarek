import Image from 'next/image';
import type { ImageAsset } from '@/core/constants/assets';
import { cn } from '@/core/utils/cn';

interface CaseImageProps {
  image: ImageAsset;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

/** Responsive, CLS-free case-study image. */
export function CaseImage({ image, alt, sizes = '(min-width: 1440px) 1300px, 100vw', className, priority }: CaseImageProps) {
  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      quality={85}
      className={cn('h-auto w-full rounded-xl sm:rounded-2xl', className)}
    />
  );
}
