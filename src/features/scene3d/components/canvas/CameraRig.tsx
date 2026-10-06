'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { clamp, damp } from '@/core/utils/math';
import { SCENE } from '../../config/sceneConfig';
import { usePointer } from '../../hooks/usePointer';
import { stationFocus, TRANSITION_MS, useSceneStore } from '../../store/sceneStore';
import type { Station } from '../../types';

/** Moves the camera along a smooth path through the stations, driven by scroll progress. */
export function CameraRig({ stations }: { stations: Station[] }) {
  const pointer = usePointer();
  const look = useRef(new THREE.Vector3());
  const initialized = useRef(false);
  // Scratch vectors (refs: mutated every frame without re-rendering)
  const scratch = useRef({ target: new THREE.Vector3(), lookTarget: new THREE.Vector3(), fly: new THREE.Vector3() });

  const curves = useMemo(() => {
    const cam = stations.map((s) => new THREE.Vector3(s.position[0], s.position[1], s.position[2] + SCENE.camera.distance));
    const at = stations.map((s) => new THREE.Vector3(...s.position));
    // A curve needs at least two points.
    if (cam.length === 1) {
      cam.push(cam[0].clone());
      at.push(at[0].clone());
    }
    return {
      cam: new THREE.CatmullRomCurve3(cam, false, 'catmullrom', 0.5),
      look: new THREE.CatmullRomCurve3(at, false, 'catmullrom', 0.5),
      segments: Math.max(stations.length - 1, 1),
    };
  }, [stations]);

  // Arriving on a new page right after a fly-in: cut to the new world instead of travelling back.
  useEffect(() => {
    if (useSceneStore.getState().transition) {
      initialized.current = false;
      useSceneStore.setState({ transition: null });
    }
  }, [curves]);

  useFrame(({ camera }, delta) => {
    const { target, lookTarget } = scratch.current;
    const { progress, transition } = useSceneStore.getState();
    const t = clamp(progress / curves.segments, 0, 1);
    curves.cam.getPoint(t, target);
    curves.look.getPoint(t, lookTarget);
    target.x += pointer.current.x * SCENE.parallax.x;
    target.y += pointer.current.y * SCENE.parallax.y;

    let lambda: number = SCENE.followLambda;
    const focus = transition ? stationFocus.get(transition.station) : undefined;
    if (transition && focus) {
      // Fly-in: ease into the hovered devices.
      const p = clamp((performance.now() - transition.startedAt) / TRANSITION_MS, 0, 1);
      const e = p * p * p;
      target.lerp(scratch.current.fly.set(focus.x, focus.y, focus.z + SCENE.camera.distance * 0.28), e);
      lookTarget.lerp(focus, e);
      lambda = 9;
    }

    if (!initialized.current) {
      camera.position.copy(target);
      look.current.copy(lookTarget);
      initialized.current = true;
    } else {
      const k = damp(lambda, Math.min(delta, 0.25));
      camera.position.lerp(target, k);
      look.current.lerp(lookTarget, k);
    }
    camera.lookAt(look.current);
  });

  return null;
}
