import { notFound } from 'next/navigation';
import { isLocale } from '@/core/i18n/config';
import { getDictionary } from '@/core/i18n/dictionaries';
import { HomePage } from '@/features/home/components/HomePage';

export default async function Page({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  return <HomePage locale={locale} dict={dict} />;
}
