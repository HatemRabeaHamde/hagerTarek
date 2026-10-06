import type { MetadataRoute } from 'next';
import { SITE } from '@/core/constants/site';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE.url}/sitemap.xml` };
}
