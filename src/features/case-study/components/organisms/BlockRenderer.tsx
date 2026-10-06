import type { ProjectThemeKey } from '@/core/constants/colors';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { CaseStudyView } from '../../services/caseStudyService';
import type { CaseBlock } from '../../types/case-study.types';
import { blockTone } from '../../utils/blockTone';
import { DecisionBlock } from './DecisionBlock';
import { GalleryBlock } from './GalleryBlock';
import { InsightBlock } from './InsightBlock';
import { OutcomeBlock } from './OutcomeBlock';
import { PaletteBlock } from './PaletteBlock';
import { ProcessBlock } from './ProcessBlock';
import { ScreensBlock } from './ScreensBlock';

interface BlockRendererProps {
  block: Exclude<CaseBlock, { kind: 'cover' }>;
  index: number;
  view: CaseStudyView;
  common: Dictionary['common'];
}

/** Maps a block's `kind` to its section component. Station index = block index. */
export function BlockRenderer({ block, index, view, common }: BlockRendererProps) {
  const shell = { station: index, tone: blockTone(block, index), theme: view.project.theme as ProjectThemeKey };

  switch (block.kind) {
    case 'insight':
      return <InsightBlock {...shell} block={block} copy={view.copyOf<'insight'>(block)} common={common} />;
    case 'process':
      return <ProcessBlock {...shell} block={block} copy={view.copyOf<'process'>(block)} />;
    case 'gallery':
      return <GalleryBlock {...shell} block={block} copy={view.copyOf<'gallery'>(block)} />;
    case 'decision':
      return <DecisionBlock {...shell} block={block} copy={view.copyOf<'decision'>(block)} />;
    case 'screens':
      return <ScreensBlock {...shell} block={block} copy={view.copyOf<'screens'>(block)} />;
    case 'palette':
      return <PaletteBlock {...shell} block={block} copy={view.copyOf<'palette'>(block)} />;
    case 'outcome':
      return <OutcomeBlock {...shell} block={block} copy={view.copyOf<'outcome'>(block)} />;
  }
}
