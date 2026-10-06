import type { ImageAsset } from '@/core/constants/assets';

/* ------------------------------------------------------------------ */
/* Structure (locale-independent): lives in features/case-study/data   */
/* ------------------------------------------------------------------ */

export interface Swatch {
  id: string;
  hex: string;
  /** Optional secondary (tint) color shown as a split swatch */
  tintHex?: string;
  size?: 'hero' | 'md' | 'sm';
}

interface BlockBase<K extends string> {
  id: string;
  kind: K;
}

export type CoverBlock = BlockBase<'cover'>;

export interface InsightBlock extends BlockBase<'insight'> {
  extra?: 'flow' | 'challenges' | { image: ImageAsset };
}

export interface ProcessBlock extends BlockBase<'process'> {
  /** Stat cards from this index on are highlighted with the project accent */
  accentFrom?: number;
  image?: ImageAsset;
  /** "wide" puts the image under the text; "side" places it next to the text on desktop */
  imageLayout?: 'wide' | 'side';
}

export interface GalleryBlock extends BlockBase<'gallery'> {
  images: readonly ImageAsset[];
  tone?: 'light' | 'deep';
}

export interface DecisionBlock extends BlockBase<'decision'> {
  image: ImageAsset;
}

export interface ScreensBlock extends BlockBase<'screens'> {
  image: ImageAsset;
  tone?: 'light' | 'deep';
}

export interface PaletteBlock extends BlockBase<'palette'> {
  swatches: readonly Swatch[];
  image?: ImageAsset;
}

export interface OutcomeBlock extends BlockBase<'outcome'> {
  image?: ImageAsset;
}

export type CaseBlock =
  | CoverBlock
  | InsightBlock
  | ProcessBlock
  | GalleryBlock
  | DecisionBlock
  | ScreensBlock
  | PaletteBlock
  | OutcomeBlock;

export type BlockKind = CaseBlock['kind'];

/* ------------------------------------------------------------------ */
/* Copy (per locale): lives in src/messages/<locale>.ts                */
/* Strings support *italic* emphasis via the RichText atom.            */
/* ------------------------------------------------------------------ */

export interface CoverCopy {
  title: string;
  intro?: string;
  tagline?: string;
}

export interface InsightCopy {
  label: string;
  title: string;
  body: string;
  flow?: { before: readonly string[]; after: readonly string[] };
  challenges?: readonly { label: string; body: string }[];
  imageAlt?: string;
}

export interface ProcessCopy {
  label: string;
  title: string;
  body: string;
  stats: readonly { value: string; label?: string; note: string }[];
  note?: string;
  imageTitle?: string;
  imageCaption?: string;
}

export interface GalleryCopy {
  label?: string;
  title: string;
  subtitle?: string;
  body?: string;
  /** One caption per image */
  captions: readonly string[];
}

export interface DecisionCopy {
  label: string;
  counter: string;
  title: string;
  body: string;
  rationaleTitle: string;
  rationale: string;
  imageAlt: string;
}

export interface ScreensCopy {
  label: string;
  title: string;
  body?: string;
  imageAlt: string;
}

export interface PaletteCopy {
  label: string;
  title: string;
  body: string;
  note?: string;
  imageAlt?: string;
  swatches: Readonly<Record<string, { name: string; role: string; token?: string }>>;
}

export interface OutcomeCopy {
  label: string;
  title: string;
  metrics: readonly { title: string; body: string }[];
  status: string;
  imageAlt?: string;
}

export interface CopyByKind {
  cover: CoverCopy;
  insight: InsightCopy;
  process: ProcessCopy;
  gallery: GalleryCopy;
  decision: DecisionCopy;
  screens: ScreensCopy;
  palette: PaletteCopy;
  outcome: OutcomeCopy;
}

/** Derives the exact copy shape a locale file must provide for a given block list. */
export type BlocksCopy<B extends readonly CaseBlock[]> = {
  [E in B[number] as E['id']]: CopyByKind[E['kind']];
};

export interface CaseMetaCopy {
  region: string;
  role: string;
  product: string;
  scope: string;
  timeline: string;
}

export interface CaseStudyCopy<B extends readonly CaseBlock[]> {
  seoTitle: string;
  seoDescription: string;
  meta: CaseMetaCopy;
  blocks: BlocksCopy<B>;
}

export interface CaseStudy {
  slug: import('@/features/projects/types/project.types').ProjectSlug;
  blocks: readonly CaseBlock[];
}
