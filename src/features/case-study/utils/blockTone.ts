import type { SectionTone } from '@/core/components/molecules/StationSection';
import type { CaseBlock } from '../types/case-study.types';

/**
 * Background tone of a case-study block. Shared by the HTML sections and the 3D stations,
 * so the scene color always matches the content on top of it.
 */
export function blockTone(block: CaseBlock, index: number): SectionTone {
  if (block.kind === 'cover') return 'deep';
  if ((block.kind === 'gallery' || block.kind === 'screens') && block.tone === 'deep') return 'deep';
  return index % 2 === 0 ? 'tint' : 'canvas';
}
