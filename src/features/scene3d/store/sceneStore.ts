import { create } from 'zustand';
import type { Vector3 } from 'three';
import type { ProjectSlug } from '@/features/projects/types/project.types';

export type SceneConfig = { mode: 'home' } | { mode: 'case'; slug: ProjectSlug };

export interface SceneTransition {
  /** Station whose devices the camera flies into */
  station: number;
  /** performance.now() when it started */
  startedAt: number;
}

interface SceneState {
  config: SceneConfig;
  /**
   * Continuous station position driven by scroll: 0 = first station, 1.5 = halfway between 2nd and 3rd.
   * Read with getState() inside useFrame — never subscribe React components to it (60fps updates).
   */
  progress: number;
  /** Station whose visual is hovered in the page (desktop) */
  hoveredStation: number | null;
  /** Active "fly into the devices" transition before a route change */
  transition: SceneTransition | null;
  setConfig: (config: SceneConfig) => void;
  setProgress: (progress: number) => void;
  setHoveredStation: (station: number | null) => void;
  startTransition: (station: number) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  config: { mode: 'home' },
  progress: 0,
  hoveredStation: null,
  transition: null,
  setConfig: (config) => set({ config, hoveredStation: null }),
  setProgress: (progress) => set({ progress }),
  setHoveredStation: (hoveredStation) => set({ hoveredStation }),
  startTransition: (station) => set({ transition: { station, startedAt: performance.now() } }),
}));

/**
 * World-space center of each station's content group, written every frame by useAnchorFit.
 * Mutable on purpose (no React state): the camera reads it during a transition.
 */
export const stationFocus = new Map<number, Vector3>();

/** Duration of the fly-in before navigating (ms) */
export const TRANSITION_MS = 650;
