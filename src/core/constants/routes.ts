import type { Locale } from '@/core/i18n/config';

/** All app paths are built here — never hardcode a URL in a component. */
export const ROUTES = {
  home: (locale: Locale) => `/${locale}`,
  caseStudy: (locale: Locale, slug: string) => `/${locale}/work/${slug}`,
  section: (locale: Locale, id: SectionId) => `/${locale}#${id}`,
} as const;

export const SECTION_IDS = {
  top: 'top',
  about: 'about',
  work: 'work',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
