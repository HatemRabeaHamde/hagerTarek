import Image from 'next/image';
import type { ImageAsset } from '@/core/constants/assets';
import { cn } from '@/core/utils/cn';

interface FallbackVisualProps {
  image: ImageAsset;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** Static image shown in place of the 3D visual when WebGL is off or motion is reduced. */
export function FallbackVisual({ image, alt, className, priority, sizes = '(min-aspect-ratio: 1/1) 50vw, 100vw' }: FallbackVisualProps) {
  return (
    <div className={cn('webgl-fallback', className)}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );
}
