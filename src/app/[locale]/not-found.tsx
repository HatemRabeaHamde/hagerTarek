import Link from 'next/link';
import { Container } from '@/core/components/atoms/Container';
import { DEFAULT_LOCALE } from '@/core/i18n/config';
import { ROUTES } from '@/core/constants/routes';
import { getDictionary } from '@/core/i18n/dictionaries';

export default async function NotFound() {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return (
    <section data-scene-surface className="flex min-h-svh items-center bg-canvas">
      <Container>
        <h1 className="text-display max-w-3xl text-5xl sm:text-7xl">{dict.common.notFoundTitle}</h1>
        <p className="mt-6 max-w-xl text-muted">{dict.common.notFoundBody}</p>
        <Link href={ROUTES.home(DEFAULT_LOCALE)} className="mt-10 inline-block border-b border-current pb-1 text-sm uppercase tracking-[0.2em]">
          {dict.common.notFoundCta}
        </Link>
      </Container>
    </section>
  );
}
