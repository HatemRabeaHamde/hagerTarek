import { ROUTES } from '@/core/constants/routes';
import { Container } from '@/core/components/atoms/Container';
import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { StationSection } from '@/core/components/molecules/StationSection';
import type { Dictionary, ProjectSummaryCopy } from '@/core/i18n/dictionary.types';
import type { Locale } from '@/core/i18n/config';
import type { Project } from '@/features/projects/types/project.types';
import { SceneLink } from '@/features/scene3d/components/SceneLink';
import { FallbackVisual } from '@/features/home/components/atoms/FallbackVisual';
import { CaseStudyLink } from '@/features/home/components/molecules/CaseStudyLink';

interface Props {
  locale: Locale;
  project: Project;
  copy: ProjectSummaryCopy;
  common: Dictionary['common'];
  station: number;
}

/** Last station: the next project's devices fly in, inviting the reader onward. */
export function NextProjectSection({ locale, project, copy, common, station }: Props) {
  return (
    <StationSection station={station} tone="tint" theme={project.theme} labelledBy="next-title">
      <Container className="flex min-h-svh flex-col justify-center pt-28 pb-12">
        <div className="grid items-center gap-10 split:grid-cols-2">
          <div>
            <Eyebrow>{common.nextProject}</Eyebrow>
            <h2 id="next-title" className="text-display mt-6 text-6xl sm:text-7xl xl:text-8xl short:text-5xl">
              {copy.name}
            </h2>
            <Eyebrow accent className="mt-8">
              {copy.category}
            </Eyebrow>
            <p className="mt-4 max-w-lg font-display text-2xl leading-snug">{copy.summary}</p>
            <div className="mt-10">
              <CaseStudyLink href={ROUTES.caseStudy(locale, project.slug)} label={common.viewCaseStudy} name={copy.name} />
            </div>
          </div>
          <SceneLink
            href={ROUTES.caseStudy(locale, project.slug)}
            station={station}
            label={`${common.viewCaseStudy}: ${copy.name}`}
            hint={common.viewCaseStudy}
          >
            <FallbackVisual image={project.thumb} alt={copy.thumbAlt} className="w-full" />
          </SceneLink>
        </div>
      </Container>
    </StationSection>
  );
}
