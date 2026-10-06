import { Reveal } from '@/core/components/atoms/Reveal';

interface ApproachItemProps {
  index: number;
  title: string;
  body: string;
}

export function ApproachItem({ index, title, body }: ApproachItemProps) {
  return (
    <Reveal as="li" delay={index * 60} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-5 sm:grid-cols-[3rem_14rem_1fr] sm:gap-x-6">
      <span className="font-display text-xl text-subtle">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink sm:pt-1.5">{title}</h3>
      <p className="col-start-2 mt-2 text-sm leading-relaxed text-muted sm:col-start-3 sm:mt-0 sm:text-base">{body}</p>
    </Reveal>
  );
}
