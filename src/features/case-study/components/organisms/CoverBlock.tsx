import Image from 'next/image';
import { VisualAnchor } from '@/core/components/atoms/VisualAnchor';
import { Eyebrow } from '@/core/components/atoms/Eyebrow';
import { RichText } from '@/core/components/atoms/RichText';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { Project } from '@/features/projects/types/project.types';
import { FallbackVisual } from '@/features/home/components/atoms/FallbackVisual';
import type { CaseMetaCopy, CoverCopy } from '../../types/case-study.types';
import { BlockShell, type BlockShellProps } from '../molecules/BlockShell';
import { MetaGrid } from '../molecules/MetaGrid';

interface CoverBlockProps extends Omit<BlockShellProps, 'children' | 'labelledBy'> {
  project: Project;
  copy: CoverCopy;
  meta: CaseMetaCopy;
  common: Dictionary['common'];
  projectName: string;
  logoAlt: string;
  coverAlt: string;
}

export function CoverBlock({ project, copy, meta, common, projectName, logoAlt, coverAlt, ...shell }: CoverBlockProps) {
  return (
    <BlockShell {...shell} labelledBy="cover-title" className="min-h-svh pt-28">
      <div className="grid items-center gap-12 split:grid-cols-2">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Image
              src={project.logo.src}
              width={project.logo.width}
              height={project.logo.height}
              alt={logoAlt}
              priority
              className="h-6 w-auto brightness-0 invert sm:h-7"
            />
            <Eyebrow className="text-subtle">
              {common.caseStudy} {project.index}
            </Eyebrow>
            <span className="rounded-full border border-line px-3 py-1 text-xs">{meta.region}</span>
          </div>
          <h1 id="cover-title" className="text-display mt-8 text-4xl sm:text-5xl xl:text-6xl short:text-3xl">
            <span className="sr-only">{projectName}: </span>
            <RichText text={copy.title} />
          </h1>
          {copy.intro && <p className="mt-6 leading-relaxed text-muted sm:text-lg">{copy.intro}</p>}
          <div className="mt-10">
            <MetaGrid meta={meta} labels={common} />
          </div>
          {copy.tagline && (
            <p className="mt-8 font-display text-xl text-(--p-accent)">
              <RichText text={copy.tagline} />
            </p>
          )}
        </div>
        <VisualAnchor station={shell.station}>
          <FallbackVisual image={project.cover} alt={coverAlt} priority className="w-full" />
        </VisualAnchor>
      </div>
    </BlockShell>
  );
}
