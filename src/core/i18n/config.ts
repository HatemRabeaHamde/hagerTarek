/**
 * Locale configuration. To ship Arabic: add 'ar' to LOCALES, add src/messages/ar.json
 * and register it in dictionaries.ts — direction and fonts already switch automatically.
 */
export const LOCALES = ['en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const RTL_LOCALES: readonly string[] = ['ar'];

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const getDirection = (locale: string): 'rtl' | 'ltr' =>
  RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
