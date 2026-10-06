import { ASSETS } from '@/core/constants/assets';
import { VisualAnchor } from '@/core/components/atoms/VisualAnchor';
import { SECTION_IDS } from '@/core/constants/routes';
import { Container } from '@/core/components/atoms/Container';
import { RichText } from '@/core/components/atoms/RichText';
import { StationSection } from '@/core/components/molecules/StationSection';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import { FallbackVisual } from '../atoms/FallbackVisual';

export function HeroSection({ copy, station }: { copy: Dictionary['home']['hero']; station: number }) {
  return (
    <StationSection station={station} id={SECTION_IDS.top} labelledBy="hero-title">
      <Container className="flex min-h-svh flex-col justify-center pt-28 pb-10 split:pb-12 short:pt-20">
        <div className="grid items-center gap-10 split:grid-cols-2">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl short:text-4xl">
              <RichText text={copy.title} />
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{copy.subtitle}</p>
            <div className="mt-10 flex flex-col gap-2 border-t border-ink/60 pt-4 text-[0.65rem] uppercase tracking-[0.2em] text-ink sm:flex-row sm:justify-between sm:text-[0.7rem]">
              <span>{copy.tags}</span>
              <span className="text-muted">{copy.meta}</span>
            </div>
          </div>
          <VisualAnchor station={station}>
            <FallbackVisual
              image={ASSETS.common.portrait}
              alt={copy.portraitAlt}
              priority
              className="mx-auto w-full max-w-sm split:max-w-md"
            />
          </VisualAnchor>
        </div>
      </Container>
    </StationSection>
  );
}
