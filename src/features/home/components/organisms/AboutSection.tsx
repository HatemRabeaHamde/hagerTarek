import { SECTION_IDS } from '@/core/constants/routes';
import { Container } from '@/core/components/atoms/Container';
import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { Reveal } from '@/core/components/atoms/Reveal';
import { RichText } from '@/core/components/atoms/RichText';
import { StationSection } from '@/core/components/molecules/StationSection';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import { ApproachItem } from '../molecules/ApproachItem';

export function AboutSection({ copy, station }: { copy: Dictionary['home']['about']; station: number }) {
  return (
    <StationSection station={station} id={SECTION_IDS.about} labelledBy="about-title">
      <Container className="grid min-h-svh gap-14 py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="flex flex-col justify-between gap-12">
          <Reveal>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2 id="about-title" className="text-display mt-6 text-4xl sm:text-5xl xl:text-6xl">
              <RichText text={copy.title} />
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted sm:text-lg">{copy.body}</p>
          </Reveal>
          <Reveal>
            <ul className="space-y-3 border-t border-ink/60 pt-4 text-[0.7rem] uppercase tracking-[0.2em]">
              {copy.meta.map((line, i) => (
                <li key={line} className={i === 0 ? 'text-ink' : 'text-subtle'}>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:pt-10">
          <Eyebrow as="h3" className="border-b border-ink/60 pb-4">
            {copy.approachTitle}
          </Eyebrow>
          <ol>
            {copy.approach.map((item, i) => (
              <ApproachItem key={item.title} index={i} title={item.title} body={item.body} />
            ))}
          </ol>
        </div>
      </Container>
    </StationSection>
  );
}
