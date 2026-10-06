import { PROJECT_THEMES, SITE_COLORS } from '@/core/constants/colors';
import { CASE_STUDIES } from '@/features/case-study/data';
import { blockTone } from '@/features/case-study/utils/blockTone';
import { getNextProject, getProject, PROJECTS } from '@/features/projects/data/projects';
import type { ProjectSlug } from '@/features/projects/types/project.types';
import type { SceneConfig } from '../store/sceneStore';
import type { Station, Vec3 } from '../types';

const canvas = { light: SITE_COLORS.light.canvas, dark: SITE_COLORS.dark.canvas };
const tint = (slug: ProjectSlug) => ({
  light: PROJECT_THEMES[slug].tintLight,
  dark: PROJECT_THEMES[slug].tintDark,
});
const deep = (slug: ProjectSlug) => ({
  light: PROJECT_THEMES[slug].deep,
  dark: PROJECT_THEMES[slug].deep,
});

/** Stations zig-zag into the depth so the camera always travels sideways and forward. */
const pathPoint = (i: number, swing = 7): Vec3 => [
  i === 0 ? 0 : (i % 2 === 0 ? -1 : 1) * swing,
  Math.sin(i * 1.7) * 0.6,
  -i * 13,
];

/** Home: hero · about · 3 projects · contact */
export function buildHomeStations(): Station[] {
  return [
    { position: pathPoint(0), color: canvas, content: { type: 'hero' } },
    { position: pathPoint(1, 4), color: canvas, content: { type: 'none' } },
    ...PROJECTS.map<Station>((project, i) => ({
      position: pathPoint(i + 2),
      color: tint(project.slug),
      content: { type: 'cluster', project},
    })),
    { position: pathPoint(PROJECTS.length + 2, 3), color: canvas, content: { type: 'none' } },
  ];
}

/** Case study: one station per content block, plus the "next project" station. */
export function buildCaseStations(slug: ProjectSlug): Station[] {
  const project = getProject(slug);
  if (!project) return buildHomeStations();
  const blocks = CASE_STUDIES[slug].blocks;
  const stations = blocks.map<Station>((block, i) => {
    const tone = blockTone(block, i);
    return {
      position: pathPoint(i, 3.5),
      color: tone === 'deep' ? deep(slug) : tone === 'tint' ? tint(slug) : canvas,
      content: block.kind === 'cover' ? { type: 'cluster', project} : { type: 'none' },
    };
  });
  const next = getNextProject(slug);
  stations.push({
    position: pathPoint(blocks.length, 6),
    color: tint(next.slug),
    content: { type: 'cluster', project: next},
  });
  return stations;
}

export function buildStations(config: SceneConfig): Station[] {
  return config.mode === 'case' ? buildCaseStations(config.slug) : buildHomeStations();
}
