import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { Locale } from '@/core/i18n/config';
import { SceneDriver } from '@/features/scene3d/components/SceneDriver';
import type { CaseStudyView } from '../services/caseStudyService';
import { blockTone } from '../utils/blockTone';
import { BlockRenderer } from './organisms/BlockRenderer';
import { CoverBlock } from './organisms/CoverBlock';
import { NextProjectSection } from './organisms/NextProjectSection';

/** Station order must match buildCaseStations(): one per block, then "next project". */
export function CaseStudyPage({ locale, dict, view }: { locale: Locale; dict: Dictionary; view: CaseStudyView }) {
  const { project, next, blocks } = view;
  const projectCopy = dict.projects[project.slug];

  return (
    <>
      <SceneDriver config={{ mode: 'case', slug: project.slug }} />
      {blocks.map((block, i) =>
        block.kind === 'cover' ? (
          <CoverBlock
            key={block.id}
            station={i}
            tone={blockTone(block, i)}
            theme={project.theme}
            project={project}
            copy={view.copyOf<'cover'>(block)}
            meta={view.meta}
            common={dict.common}
            projectName={projectCopy.name}
            logoAlt={projectCopy.logoAlt}
            coverAlt={projectCopy.thumbAlt}
          />
        ) : (
          <BlockRenderer key={block.id} block={block} index={i} view={view} common={dict.common} />
        ),
      )}
      <NextProjectSection
        locale={locale}
        project={next}
        copy={dict.projects[next.slug]}
        common={dict.common}
        station={blocks.length}
      />
    </>
  );
}
