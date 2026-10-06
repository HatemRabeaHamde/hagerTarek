import { ASSETS } from '@/core/constants/assets';
import type { CaseBlock } from '../types/case-study.types';

const A = ASSETS.rofoof;

export const ROFOOF_BLOCKS = [
  { id: 'cover', kind: 'cover' },
  { id: 'insight', kind: 'insight', extra: 'challenges' },
  { id: 'process', kind: 'process', accentFrom: 2, image: A.processOnboarding, imageLayout: 'side' },
  { id: 'wireframes', kind: 'gallery', images: [A.wireframes] },
  { id: 'decision1', kind: 'decision', image: A.decision1 },
  { id: 'decision2', kind: 'decision', image: A.decision2 },
  { id: 'decision3', kind: 'decision', image: A.decision3 },
  { id: 'screens', kind: 'screens', image: A.screens },
  { id: 'driverAdmin', kind: 'gallery', images: [A.driverAdmin], tone: 'deep' },
  {
    id: 'palette',
    kind: 'palette',
    swatches: [
      { id: 'primary', hex: '#384E85', size: 'hero' },
      { id: 'hover', hex: '#2E4272', size: 'md' },
      { id: 'tint', hex: '#E7EAF3', size: 'md' },
      { id: 'ink', hex: '#0D1320', size: 'md' },
      { id: 'darkSurface', hex: '#151F33', size: 'md' },
      { id: 'darkPrimary', hex: '#5C7DDB', size: 'md' },
      { id: 'darkText', hex: '#C7D2E3', size: 'md' },
      { id: 'success', hex: '#16A36A', size: 'sm' },
      { id: 'warning', hex: '#C98A06', size: 'sm' },
      { id: 'danger', hex: '#D9383B', size: 'sm' },
      { id: 'info', hex: '#7C5CD6', size: 'sm' },
    ],
  },
  { id: 'brand', kind: 'gallery', images: [A.brand] },
  { id: 'outcome', kind: 'outcome', image: A.outcome },
] as const satisfies readonly CaseBlock[];
