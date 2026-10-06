import { SECTION_IDS } from '@/core/constants/routes';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import type { Locale } from '@/core/i18n/config';
import { PROJECTS } from '@/features/projects/data/projects';
import { SceneDriver } from '@/features/scene3d/components/SceneDriver';
import { AboutSection } from './organisms/AboutSection';
import { ContactSection } from './organisms/ContactSection';
import { HeroSection } from './organisms/HeroSection';
import { ProjectSection } from './organisms/ProjectSection';

/** Station order must match buildHomeStations(): hero · about · projects · contact */
export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const firstProjectStation = 2;
  return (
    <>
      <SceneDriver config={{ mode: 'home' }} />
      <HeroSection copy={dict.home.hero} station={0} />
      <AboutSection copy={dict.home.about} station={1} />
      {PROJECTS.map((project, i) => (
        <ProjectSection
          key={project.slug}
          locale={locale}
          project={project}
          copy={dict.projects[project.slug]}
          common={dict.common}
          station={firstProjectStation + i}
          id={i === 0 ? SECTION_IDS.work : undefined}
          eyebrow={i === 0 ? dict.home.work.eyebrow : undefined}
          outro={i === PROJECTS.length - 1 ? dict.home.work.outro : undefined}
        />
      ))}
      <ContactSection copy={dict.home.contact} station={firstProjectStation + PROJECTS.length} />
    </>
  );
}
