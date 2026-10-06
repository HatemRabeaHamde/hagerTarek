import { VISUAL_ANCHOR_ATTR } from '@/core/constants/dom';
import { cn } from '@/core/utils/cn';

interface VisualAnchorProps {
  /** Station index of the 3D content that should fill this box */
  station: number;
  className?: string;
  /** Static fallback rendered inside when WebGL is off */
  children?: React.ReactNode;
}

/** Reserves layout space for a 3D visual (fixed height with WebGL, content height without). */
export function VisualAnchor({ station, className, children }: VisualAnchorProps) {
  return (
    <div {...{ [VISUAL_ANCHOR_ATTR]: station }} className={cn('visual-anchor relative w-full', className)}>
      {children}
    </div>
  );
}
