import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { RichText } from '@/core/components/atoms/RichText';
import { cn } from '@/core/utils/cn';

interface SectionHeadingProps {
  id: string;
  label?: string;
  title: string;
  body?: string;
  subtitle?: string;
  size?: 'lg' | 'md';
  className?: string;
}

/** Label + display title + optional lead paragraph used by every case-study block. */
export function SectionHeading({ id, label, title, body, subtitle, size = 'lg', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-4xl', className)}>
      {label && <Eyebrow className="mb-5">{label}</Eyebrow>}
      <h2
        id={id}
        className={cn('text-display', size === 'lg' ? 'text-4xl sm:text-5xl xl:text-6xl' : 'text-3xl sm:text-4xl xl:text-5xl')}
      >
        <RichText text={title} />
      </h2>
      {subtitle && <Eyebrow className="mt-5">{subtitle}</Eyebrow>}
      {body && <p className="mt-6 max-w-3xl leading-relaxed text-muted sm:text-lg">{body}</p>}
    </div>
  );
}
