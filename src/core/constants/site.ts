/**
 * Public, non-secret site configuration.
 * The only environment value is the public site URL (used for absolute metadata URLs).
 */

const FALLBACK_SITE_URL = 'http://localhost:3000';

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) {
    if (process.env.NODE_ENV === 'production') {
      // Fail fast: production metadata (OG, sitemap, canonical) must not point to localhost.
      throw new Error('NEXT_PUBLIC_SITE_URL is required for production builds. See .env.example');
    }
    return FALLBACK_SITE_URL;
  }
  try {
    return new URL(value).origin;
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL is not a valid URL: "${value}"`);
  }
}

export const SITE = {
  url: resolveSiteUrl(),
  contact: {
    email: 'hagertarekjamal7@gmail.com',
    linkedin: { handle: 'hager-tarek', url: 'https://www.linkedin.com/in/hager-tarek-7003b73a6/' },
    behance: { handle: 'hagertarek22', url: 'https://www.behance.net/hagertarek22' },
    whatsapp: { display: '+20 15 56065592', url: 'https://wa.me/201556065592' },
  },
} as const;
