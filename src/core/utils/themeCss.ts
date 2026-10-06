import { PROJECT_THEMES, SITE_COLORS, type ThemeMode } from '@/core/constants/colors';

const toVars = (mode: ThemeMode) =>
  Object.entries(SITE_COLORS[mode])
    .map(([token, hex]) => `--c-${token}:${hex};`)
    .join('');

/**
 * Generates the root CSS variables from colors.ts so CSS and WebGL share one palette.
 * Dark mode follows the OS preference; an explicit data-theme attribute on <html> wins both ways.
 */
export function buildThemeCss(): string {
  const dark = `${toVars('dark')}color-scheme:dark;`;
  return (
    `:root{${toVars('light')}color-scheme:light;}` +
    `@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dark}}}` +
    `:root[data-theme="dark"]{${dark}}`
  );
}

/** Inline style object that exposes a project's palette as CSS variables to a subtree. */
export function projectThemeVars(key: keyof typeof PROJECT_THEMES): Record<string, string> {
  const t = PROJECT_THEMES[key];
  return {
    '--p-accent': t.accent,
    '--p-accent-text': t.accentText,
    '--p-deep': t.deep,
    '--p-on-deep': t.onDeep,
    '--p-tint-light': t.tintLight,
    '--p-tint-dark': t.tintDark,
  };
}
