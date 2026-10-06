'use client';

import { useRef } from 'react';
import { Vector3, type Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { VISUAL_ANCHOR_ATTR } from '@/core/constants/dom';
import { SCENE } from '../config/sceneConfig';
import { stationFocus, useSceneStore } from '../store/sceneStore';

export interface Footprint {
  width: number;
  height: number;
}

const HALF_FOV = (SCENE.camera.fov / 2) * (Math.PI / 180);
/** Visible world height at the station distance */
const VISIBLE_H = 2 * SCENE.camera.distance * Math.tan(HALF_FOV);
/** Only track anchors of stations near the camera */
const TRACK_RANGE = 1.6;
/** Breathing room inside the anchor box */
const FILL = 0.94;

/**
 * Keeps a content group glued to its HTML anchor box (`data-visual-anchor`):
 * the box's on-screen rect is converted to world units at the station distance every frame,
 * so the CSS layout (any size, orientation or text direction) decides where the 3D object sits.
 */
export function useAnchorFit(station: number, footprint: Footprint) {
  const ref = useRef<Group>(null);
  const anchor = useRef<HTMLElement | null>(null);

  useFrame(({ size }) => {
    const group = ref.current;
    if (!group) return;
    if (Math.abs(useSceneStore.getState().progress - station) > TRACK_RANGE && group.userData.placed) return;

    if (!anchor.current?.isConnected) {
      anchor.current = document.querySelector<HTMLElement>(`[${VISUAL_ANCHOR_ATTR}="${station}"]`);
    }
    const el = anchor.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const k = VISIBLE_H / size.height; // world units per CSS pixel
    group.position.set(
      (rect.left + rect.width / 2 - size.width / 2) * k,
      -(rect.top + rect.height / 2 - size.height / 2) * k,
      0,
    );
    group.scale.setScalar(
      Math.min((rect.width * k) / footprint.width, (rect.height * k) / footprint.height) * FILL,
    );
    group.userData.placed = true;

    const focus = stationFocus.get(station) ?? new Vector3();
    group.updateWorldMatrix(true, false);
    stationFocus.set(station, group.getWorldPosition(focus));
  });

  return ref;
}
