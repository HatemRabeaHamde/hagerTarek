import type {
  DIGITALCAR_BLOCKS,
  ROFOOF_BLOCKS,
  TOURSTICA_BLOCKS,
} from '@/features/case-study/data';
import type { CaseStudyCopy } from '@/features/case-study/types/case-study.types';
import type { ProjectSlug } from '@/features/projects/types/project.types';

export interface ProjectSummaryCopy {
  name: string;
  category: string;
  summary: string;
  logoAlt: string;
  thumbAlt: string;
}

export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    brandName: string;
    brandRole: string;
    work: string;
    about: string;
    contact: string;
    backToWork: string;
    skipToContent: string;
    primaryLabel: string;
  };
  common: {
    viewCaseStudy: string;
    caseStudy: string;
    nextProject: string;
    role: string;
    product: string;
    scope: string;
    timeline: string;
    before: string;
    after: string;
    scrollHint: string;
    notFoundTitle: string;
    notFoundBody: string;
    notFoundCta: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      tags: string;
      meta: string;
      portraitAlt: string;
    };
    about: {
      eyebrow: string;
      title: string;
      body: string;
      meta: readonly string[];
      approachTitle: string;
      approach: readonly { title: string; body: string }[];
    };
    work: { eyebrow: string; outro: string };
    contact: {
      title: string;
      body: string;
      labels: { email: string; linkedin: string; behance: string; whatsapp: string };
    };
  };
  projects: Record<ProjectSlug, ProjectSummaryCopy>;
  caseStudies: {
    digitalcar: CaseStudyCopy<typeof DIGITALCAR_BLOCKS>;
    rofoof: CaseStudyCopy<typeof ROFOOF_BLOCKS>;
    tourstica: CaseStudyCopy<typeof TOURSTICA_BLOCKS>;
  };
}
