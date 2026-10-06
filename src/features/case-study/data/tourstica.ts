import { ASSETS } from '@/core/constants/assets';
import type { CaseBlock } from '../types/case-study.types';

const A = ASSETS.tourstica;

export const TOURSTICA_BLOCKS = [
  { id: 'cover', kind: 'cover' },
  { id: 'insight', kind: 'insight', extra: { image: A.insight } },
  { id: 'process', kind: 'process', accentFrom: 1, image: A.wireframes, imageLayout: 'side' },
  { id: 'decision1', kind: 'decision', image: A.decision1 },
  { id: 'decision2', kind: 'decision', image: A.decision2 },
  { id: 'decision3', kind: 'decision', image: A.decision3 },
  { id: 'screens', kind: 'screens', image: A.screens, tone: 'deep' },
  {
    id: 'palette',
    kind: 'palette',
    image: A.designSystem,
    swatches: [
      { id: 'darkGreen', hex: '#0F2621', size: 'md' },
      { id: 'terracotta', hex: '#C45D3D', size: 'md' },
      { id: 'cream', hex: '#F6F1E4', size: 'md' },
      { id: 'sectionGreen', hex: '#1F3D3A', size: 'md' },
      { id: 'page', hex: '#FBF9F4', size: 'md' },
      { id: 'terracottaLight', hex: '#F5C59A', size: 'md' },
    ],
  },
  { id: 'outcome', kind: 'outcome', image: A.outcome },
] as const satisfies readonly CaseBlock[];
