import Image from 'next/image';
import Link from 'next/link';
import { ASSETS } from '@/core/constants/assets';
import { ROUTES, SECTION_IDS } from '@/core/constants/routes';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { Locale } from '@/core/i18n/config';

interface SiteHeaderProps {
  locale: Locale;
  nav: Dictionary['nav'];
}

/**
 * Fixed header. `mix-blend-difference` keeps it readable over any section color
 * (cream, project tints and the deep case-study covers) without per-section logic.
 */
export function SiteHeader({ locale, nav }: SiteHeaderProps) {
  const links = [
    { href: ROUTES.section(locale, SECTION_IDS.work), label: nav.work },
    { href: ROUTES.section(locale, SECTION_IDS.about), label: nav.about },
    { href: ROUTES.section(locale, SECTION_IDS.contact), label: nav.contact },
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] text-white mix-blend-difference">
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-5 py-4 sm:px-8 sm:py-6 lg:px-16">
        <Link
          href={ROUTES.home(locale)}
          className="pointer-events-auto flex items-center gap-3"
          aria-label={`${nav.brandName} — ${nav.brandRole}`}
        >
          <Image
            src={ASSETS.common.monogram.src}
            width={ASSETS.common.monogram.width}
            height={ASSETS.common.monogram.height}
            alt=""
            priority
            className="h-7 w-auto invert sm:h-8"
          />
          <span className="hidden border-s border-white/40 ps-3 text-[0.65rem] uppercase leading-snug tracking-[0.24em] sm:block">
            {nav.brandName}
            <br />
            <span className="opacity-70">{nav.brandRole}</span>
          </span>
        </Link>
        <nav aria-label={nav.primaryLabel} className="pointer-events-auto">
          <ul className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] sm:gap-8 sm:text-xs">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-opacity hover:opacity-60">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
