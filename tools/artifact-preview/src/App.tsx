import { SiteHeader } from '@/core/components/molecules/SiteHeader';
import { SkipLink } from '@/core/components/atoms/SkipLink';
import { SmoothScrollProvider } from '@/core/providers/SmoothScrollProvider';
import { CaseStudyPage } from '@/features/case-study/components/CaseStudyPage';
import { getCaseStudyView } from '@/features/case-study/services/caseStudyService';
import { HomePage } from '@/features/home/components/HomePage';
import { SceneLayer } from '@/features/scene3d/components/SceneLayer';
import { en } from '@/messages/en';
import { usePath } from './shims/router';

export function App() {
  const path = usePath();
  const slug = path.match(/^\/en\/work\/([\w-]+)/)?.[1];
  const view = slug ? getCaseStudyView(slug, en) : null;

  return (
    <>
      <SkipLink label={en.nav.skipToContent} />
      <SceneLayer />
      <SmoothScrollProvider />
      <SiteHeader locale="en" nav={en.nav} />
      <main id="main" className="relative z-10" key={path}>
        {view ? <CaseStudyPage locale="en" dict={en} view={view} /> : <HomePage locale="en" dict={en} />}
      </main>
    </>
  );
}
