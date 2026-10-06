import type { ImageAsset } from '@/core/constants/assets';
import type { ProjectThemeKey } from '@/core/constants/colors';

export type ProjectSlug = 'digitalcar' | 'rofoof' | 'tourstica';

/** A device rendered in the 3D scene, showing one product screen. */
export interface SceneDevice {
  kind: 'phone' | 'browser';
  texture: ImageAsset;
}

export interface Project {
  slug: ProjectSlug;
  /** Display index, e.g. "01" */
  index: string;
  theme: ProjectThemeKey;
  logo: ImageAsset;
  /** Used by the no-WebGL fallback on the home page */
  thumb: ImageAsset;
  /** Used by the no-WebGL fallback on the case-study cover */
  cover: ImageAsset;
  /** How the devices are composed in 3D: phones fan out, browser windows cascade in depth */
  arrangement: 'fan' | 'cascade';
  /** Exactly three devices; the middle one is the hero screen */
  devices: readonly [SceneDevice, SceneDevice, SceneDevice];
}
