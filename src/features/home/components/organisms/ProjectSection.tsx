import Image from 'next/image';
import { ROUTES } from '@/core/constants/routes';
import { Container } from '@/core/components/atoms/Container';
import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { Reveal } from '@/core/components/atoms/Reveal';
import { RichText } from '@/core/components/atoms/RichText';
import { StationSection } from '@/core/components/molecules/StationSection';
import type { Dictionary, ProjectSummaryCopy } from '@/core/i18n/dictionary.types';
import type { Locale } from '@/core/i18n/config';
import type { Project } from '@/features/projects/types/project.types';
import { SceneLink } from '@/features/scene3d/components/SceneLink';
import { FallbackVisual } from '../atoms/FallbackVisual';
import { CaseStudyLink } from '../molecules/CaseStudyLink';

interface ProjectSectionProps {
  locale: Locale;
  project: Project;
  copy: ProjectSummaryCopy;
  common: Dictionary['common'];
  station: number;
  id?: string;
  eyebrow?: string;
  outro?: string;
}

export function ProjectSection({ locale, project, copy, common, station, id, eyebrow, outro }: ProjectSectionProps) {
  const titleId = `project-${project.slug}`;
  return (
    <StationSection station={station} tone="tint" theme={project.theme} id={id} labelledBy={titleId}>
      <Container className="flex min-h-svh flex-col justify-center gap-12 pt-28 pb-12 short:pt-20">
        <div className="grid items-center gap-10 split:grid-cols-2">
          <Reveal className="max-w-xl">
            {eyebrow && <Eyebrow className="mb-10">{eyebrow}</Eyebrow>}
            <div className="flex items-baseline gap-5">
              <span className="font-display text-lg text-subtle">{project.index}</span>
              <h2 id={titleId} className="text-display text-6xl sm:text-7xl xl:text-8xl short:text-5xl">
                {copy.name}
              </h2>
            </div>
            <Image
              src={project.logo.src}
              width={project.logo.width}
              height={project.logo.height}
              alt={copy.logoAlt}
              className="ms-11 mt-4 h-7 w-auto dark:brightness-0 dark:invert"
            />
            <Eyebrow accent className="mt-10">
              {copy.category}
            </Eyebrow>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{copy.summary}</p>
            <div className="mt-10">
              <CaseStudyLink href={ROUTES.caseStudy(locale, project.slug)} label={common.viewCaseStudy} name={copy.name} />
            </div>
          </Reveal>
          <SceneLink
            href={ROUTES.caseStudy(locale, project.slug)}
            station={station}
            label={`${common.viewCaseStudy}: ${copy.name}`}
            hint={common.viewCaseStudy}
          >
            <FallbackVisual image={project.thumb} alt={copy.thumbAlt} className="w-full" />
          </SceneLink>
        </div>
        {outro && (
          <p className="max-w-3xl font-display text-xl leading-snug text-muted sm:text-2xl">
            <RichText text={outro} />
          </p>
        )}
      </Container>
    </StationSection>
  );
}
