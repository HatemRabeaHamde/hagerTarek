import { ASSETS } from '@/core/constants/assets';
import type { CaseBlock } from '../types/case-study.types';

const A = ASSETS.digitalcar;

export const DIGITALCAR_BLOCKS = [
  { id: 'cover', kind: 'cover' },
  { id: 'insight', kind: 'insight', extra: 'flow' },
  { id: 'process', kind: 'process', accentFrom: 3, image: A.processMiro, imageLayout: 'wide' },
  { id: 'wireframes', kind: 'gallery', images: [A.wireframesFinancing, A.wireframesFlows] },
  { id: 'decision1', kind: 'decision', image: A.decision1 },
  { id: 'decision2', kind: 'decision', image: A.decision2 },
  { id: 'decision3', kind: 'decision', image: A.decision3 },
  { id: 'screens', kind: 'screens', image: A.screens },
  { id: 'webRedesign', kind: 'gallery', images: [A.webRedesign] },
  {
    id: 'palette',
    kind: 'palette',
    swatches: [
      { id: 'primary', hex: '#FF8937', size: 'hero' },
      { id: 'hover', hex: '#F27C29', size: 'md' },
      { id: 'onLight', hex: '#C7601C', size: 'md' },
      { id: 'tint', hex: '#FFE7D3', size: 'md' },
      { id: 'ink', hex: '#2A2B28', size: 'md' },
      { id: 'background', hex: '#FAFAF9', size: 'md' },
      { id: 'success', hex: '#2E9E5B', tintHex: '#E6F4E8', size: 'sm' },
      { id: 'warning', hex: '#D19A1E', tintHex: '#FBF1DA', size: 'sm' },
      { id: 'error', hex: '#D14343', tintHex: '#FBE9E9', size: 'sm' },
    ],
  },
  { id: 'components', kind: 'gallery', images: [A.components], tone: 'deep' },
  { id: 'outcome', kind: 'outcome' },
] as const satisfies readonly CaseBlock[];
