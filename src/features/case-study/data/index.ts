import type { ProjectSlug } from '@/features/projects/types/project.types';
import type { CaseStudy } from '../types/case-study.types';
import { DIGITALCAR_BLOCKS } from './digitalcar';
import { ROFOOF_BLOCKS } from './rofoof';
import { TOURSTICA_BLOCKS } from './tourstica';

export const CASE_STUDIES: Record<ProjectSlug, CaseStudy> = {
  digitalcar: { slug: 'digitalcar', blocks: DIGITALCAR_BLOCKS },
  rofoof: { slug: 'rofoof', blocks: ROFOOF_BLOCKS },
  tourstica: { slug: 'tourstica', blocks: TOURSTICA_BLOCKS },
};

export { DIGITALCAR_BLOCKS, ROFOOF_BLOCKS, TOURSTICA_BLOCKS };
