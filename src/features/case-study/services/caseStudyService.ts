import type { Dictionary } from '@/core/i18n/dictionary.types';
import { getNextProject, getProject } from '@/features/projects/data/projects';
import type { Project, ProjectSlug } from '@/features/projects/types/project.types';
import { CASE_STUDIES } from '../data';
import type { BlockKind, CaseBlock, CaseMetaCopy, CopyByKind } from '../types/case-study.types';

export interface CaseStudyView {
  project: Project;
  next: Project;
  blocks: readonly CaseBlock[];
  meta: CaseMetaCopy;
  seo: { title: string; description: string };
  copyOf: <K extends BlockKind>(block: Extract<CaseBlock, { kind: K }>) => CopyByKind[K];
}

/** Joins locale-independent structure with the locale's copy for one case study. */
export function getCaseStudyView(slug: string, dict: Dictionary): CaseStudyView | null {
  const project = getProject(slug);
  if (!project) return null;
  const key: ProjectSlug = project.slug;
  const copy = dict.caseStudies[key];
  // The dictionary type guarantees one entry per block id with the right shape (see BlocksCopy).
  const blocksCopy = copy.blocks as unknown as Record<string, CopyByKind[BlockKind]>;

  return {
    project,
    next: getNextProject(key),
    blocks: CASE_STUDIES[key].blocks,
    meta: copy.meta,
    seo: { title: copy.seoTitle, description: copy.seoDescription },
    copyOf: <K extends BlockKind>(block: Extract<CaseBlock, { kind: K }>) =>
      blocksCopy[block.id] as CopyByKind[K],
  };
}
