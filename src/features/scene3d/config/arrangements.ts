import type { Vec3 } from '../types';

/** One device pose: position + Y rotation + uniform scale. */
export interface Pose {
  position: Vec3;
  rotY: number;
  scale: number;
}

/** Poses for the 3 devices of a cluster in three states. Index 1 is the hero (center) device. */
export interface ArrangementPoses {
  closed: readonly [Pose, Pose, Pose];
  open: readonly [Pose, Pose, Pose];
  hover: readonly [Pose, Pose, Pose];
}

const pose = (x: number, y: number, z: number, rotY: number, scale = 1): Pose => ({
  position: [x, y, z],
  rotY,
  scale,
});

/** Phones fanned around the center one. `w` = phone width. */
export const fanPoses = (w: number): ArrangementPoses => ({
  closed: [pose(-w * 0.42, -0.05, -0.4, 0.5), pose(0, 0.05, 0.1, 0), pose(w * 0.42, -0.05, -0.4, -0.5)],
  open: [pose(-w * 0.9, -0.1, -0.45, 0.3), pose(0, 0.08, 0.25, 0), pose(w * 0.9, -0.1, -0.45, -0.3)],
  hover: [pose(-w * 1.05, -0.14, -0.3, 0.2), pose(0, 0.14, 0.6, 0), pose(w * 1.05, -0.14, -0.3, -0.2)],
});

/** Browser windows cascading in depth: back-top-left, hero, front-bottom-right. */
export const cascadePoses = (): ArrangementPoses => ({
  closed: [pose(-0.4, 0.35, -0.9, 0.12, 0.8), pose(0, 0, 0, 0), pose(0.45, -0.4, 0.7, -0.12, 0.62)],
  open: [pose(-1.05, 0.8, -1, 0.16, 0.8), pose(0, -0.02, 0, -0.04), pose(1.1, -0.82, 0.8, -0.14, 0.62)],
  hover: [pose(-1.3, 0.95, -0.8, 0.1, 0.82), pose(0, 0.05, 0.4, 0), pose(1.35, -0.98, 1, -0.08, 0.66)],
});
