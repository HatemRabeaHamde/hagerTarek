import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ROUTES } from '@/core/constants/routes';
import { isLocale, LOCALES } from '@/core/i18n/config';
import { getDictionary } from '@/core/i18n/dictionaries';
import { CaseStudyPage } from '@/features/case-study/components/CaseStudyPage';
import { getCaseStudyView } from '@/features/case-study/services/caseStudyService';
import { PROJECT_SLUGS } from '@/features/projects/data/projects';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PROJECT_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps<'/[locale]/work/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const view = getCaseStudyView(slug, await getDictionary(locale));
  if (!view) return {};
  return {
    title: view.seo.title,
    description: view.seo.description,
    alternates: { canonical: ROUTES.caseStudy(locale, slug) },
    openGraph: {
      title: view.seo.title,
      description: view.seo.description,
      images: [{ url: view.project.cover.src, width: view.project.cover.width, height: view.project.cover.height }],
    },
  };
}

export default async function Page({ params }: PageProps<'/[locale]/work/[slug]'>) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const view = getCaseStudyView(slug, dict);
  if (!view) notFound();
  return <CaseStudyPage locale={locale} dict={dict} view={view} />;
}
