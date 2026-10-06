import 'server-only';
import type { Dictionary } from './dictionary.types';
import type { Locale } from './config';

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/messages/en').then((m) => m.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
