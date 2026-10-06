import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { ASSETS } from '@/core/constants/assets';
import { SITE_COLORS } from '@/core/constants/colors';
import { bodyFont, displayFont } from '@/core/constants/fonts';
import { SITE } from '@/core/constants/site';
import { InlineScript } from '@/core/components/atoms/InlineScript';
import { SkipLink } from '@/core/components/atoms/SkipLink';
import { SiteHeader } from '@/core/components/molecules/SiteHeader';
import { WEBGL_CLASS } from '@/core/constants/dom';
import { getDirection, isLocale, LOCALES } from '@/core/i18n/config';
import { getDictionary } from '@/core/i18n/dictionaries';
import { SmoothScrollProvider } from '@/core/providers/SmoothScrollProvider';
import { buildThemeCss } from '@/core/utils/themeCss';
import { SceneLayer } from '@/features/scene3d/components/SceneLayer';
import '../globals.css';


/** Runs before first paint: enables the 3D layer only when WebGL works and motion is welcome. */
const CAPABILITY_SCRIPT = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var c=document.createElement('canvas');var g=c.getContext('webgl2')||c.getContext('webgl');if(!g)return;var x=g.getExtension('WEBGL_lose_context');x&&x.loseContext();document.documentElement.classList.add('${WEBGL_CLASS}')}catch(e){}})();`;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: { default: dict.meta.title, template: `%s · ${dict.nav.brandName}` },
    description: dict.meta.description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      type: 'website',
      locale,
      siteName: dict.nav.brandName,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: ASSETS.common.og.src, width: ASSETS.common.og.width, height: ASSETS.common.og.height, alt: dict.meta.ogAlt }],
    },
    twitter: { card: 'summary_large_image', title: dict.meta.title, description: dict.meta.description },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: SITE_COLORS.light.canvas },
    { media: '(prefers-color-scheme: dark)', color: SITE_COLORS.dark.canvas },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: buildThemeCss() }} />
        <InlineScript html={CAPABILITY_SCRIPT} />
      </head>
      <body>
        <SkipLink label={dict.nav.skipToContent} />
        <SceneLayer />
        <SmoothScrollProvider />
        <SiteHeader locale={locale} nav={dict.nav} />
        <main id="main" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
