import type { Project } from '@/features/projects/types/project.types';

export type Vec3 = readonly [number, number, number];

export type StationContent =
  | { type: 'none' }
  | { type: 'hero' }
  | { type: 'cluster'; project: Project };

export interface Station {
  position: Vec3;
  /** Background / fog tint for this station */
  color: { light: string; dark: string };
  content: StationContent;
}
