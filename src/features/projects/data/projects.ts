import { ASSETS } from '@/core/constants/assets';
import type { Project, ProjectSlug } from '../types/project.types';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'digitalcar',
    index: '01',
    theme: 'digitalcar',
    logo: ASSETS.digitalcar.logo,
    thumb: ASSETS.digitalcar.thumb,
    cover: ASSETS.digitalcar.cover,
    arrangement: 'fan',
    devices: [
      { kind: 'phone', texture: ASSETS.digitalcar.screenBrowse },
      { kind: 'phone', texture: ASSETS.digitalcar.screenHome },
      { kind: 'phone', texture: ASSETS.digitalcar.screenCar },
    ],
  },
  {
    slug: 'rofoof',
    index: '02',
    theme: 'rofoof',
    logo: ASSETS.rofoof.logo,
    thumb: ASSETS.rofoof.cover,
    cover: ASSETS.rofoof.cover,
    arrangement: 'fan',
    devices: [
      { kind: 'phone', texture: ASSETS.rofoof.screenOnboarding },
      { kind: 'phone', texture: ASSETS.rofoof.screenHome },
      { kind: 'phone', texture: ASSETS.rofoof.screenProduct },
    ],
  },
  {
    slug: 'tourstica',
    index: '03',
    theme: 'tourstica',
    logo: ASSETS.tourstica.logo,
    thumb: ASSETS.tourstica.thumb,
    cover: ASSETS.tourstica.cover,
    arrangement: 'cascade',
    devices: [
      { kind: 'browser', texture: ASSETS.tourstica.screenCuration },
      { kind: 'browser', texture: ASSETS.tourstica.screenHero },
      { kind: 'browser', texture: ASSETS.tourstica.screenTrust },
    ],
  },
] as const;

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: ProjectSlug): Project {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
