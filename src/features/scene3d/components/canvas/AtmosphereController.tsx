'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { clamp, damp } from '@/core/utils/math';
import { SCENE } from '../../config/sceneConfig';
import { useSceneStore } from '../../store/sceneStore';
import type { Station } from '../../types';

/** Blends background + fog color between stations as you scroll. */
export function AtmosphereController({ stations, dark }: { stations: Station[]; dark: boolean }) {
  const get = useThree((s) => s.get);
  const palette = useMemo(
    () => stations.map((s) => new THREE.Color(dark ? s.color.dark : s.color.light)),
    [stations, dark],
  );
  const scratch = useRef(new THREE.Color());

  useEffect(() => {
    const { scene } = get();
    const initial = palette[0]?.clone() ?? new THREE.Color();
    scene.background = initial;
    const d = SCENE.camera.distance;
    scene.fog = new THREE.Fog(initial.clone(), d * SCENE.fog.nearFactor, d * SCENE.fog.farFactor);
    return () => {
      scene.background = null;
      scene.fog = null;
    };
  }, [get, palette]);

  useFrame(({ scene }, delta) => {
    const target = scratch.current;
    if (!(scene.background instanceof THREE.Color) || !scene.fog || !palette.length) return;
    const p = clamp(useSceneStore.getState().progress, 0, palette.length - 1);
    const i = Math.floor(p);
    const next = palette[Math.min(i + 1, palette.length - 1)];
    target.copy(palette[i]).lerp(next, p - i);
    const k = damp(6, Math.min(delta, 0.25));
    scene.background.lerp(target, k);
    scene.fog.color.copy(scene.background);
  });

  return null;
}
