import type { MetadataRoute } from 'next';
import { ROUTES } from '@/core/constants/routes';
import { SITE } from '@/core/constants/site';
import { LOCALES } from '@/core/i18n/config';
import { PROJECT_SLUGS } from '@/features/projects/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) => [
    { url: `${SITE.url}${ROUTES.home(locale)}`, priority: 1 },
    ...PROJECT_SLUGS.map((slug) => ({ url: `${SITE.url}${ROUTES.caseStudy(locale, slug)}`, priority: 0.8 })),
  ]);
}
