/**
 * Single source of truth for every color in the app.
 * - CSS variables are generated from these tokens (see core/utils/themeCss.ts)
 * - The WebGL scene reads the same values directly.
 */

export const SITE_COLORS = {
  light: {
    canvas: '#F2EEE7',
    paper: '#F8F5EF',
    ink: '#1C1B19',
    muted: '#5E5A53',
    subtle: '#8C877E',
    line: '#D9D2C6',
    accent: '#B9552E',
  },
  dark: {
    canvas: '#121110',
    paper: '#1B1A18',
    ink: '#F2EEE7',
    muted: '#B3ADA3',
    subtle: '#7F7A72',
    line: '#2F2C28',
    accent: '#E07A4F',
  },
} as const;

export type ThemeMode = keyof typeof SITE_COLORS;
export type SiteColorToken = keyof (typeof SITE_COLORS)['light'];

export interface ProjectTheme {
  /** Brand action color */
  accent: string;
  /** Accent that passes AA on light surfaces */
  accentText: string;
  /** Deep brand surface used on the case-study cover */
  deep: string;
  /** Text color on the deep surface */
  onDeep: string;
  /** Scene / section tint in light mode */
  tintLight: string;
  /** Scene / section tint in dark mode */
  tintDark: string;
}

export const PROJECT_THEMES = {
  digitalcar: {
    accent: '#FF8937',
    accentText: '#C7601C',
    deep: '#1C1A18',
    onDeep: '#F2EEE7',
    tintLight: '#F4E6D9',
    tintDark: '#1F1914',
  },
  rofoof: {
    accent: '#384E85',
    accentText: '#384E85',
    deep: '#0E1426',
    onDeep: '#E7EAF3',
    tintLight: '#E5E9F1',
    tintDark: '#111624',
  },
  tourstica: {
    accent: '#C45D3D',
    accentText: '#B4532F',
    deep: '#0F2621',
    onDeep: '#F6F1E4',
    tintLight: '#ECE5D6',
    tintDark: '#101C18',
  },
} as const satisfies Record<string, ProjectTheme>;

export type ProjectThemeKey = keyof typeof PROJECT_THEMES;

/** Colors used only inside the WebGL scene */
export const SCENE_COLORS = {
  deviceBody: '#141414',
  deviceFrame: '#2A2A2A',
  dustLight: '#8A7F70',
  dustDark: '#6E675D',
  keyLight: '#FFFFFF',
} as const;
