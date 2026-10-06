'use client';

import { useRef } from 'react';
import type { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { DeviceCluster } from '../objects/DeviceCluster';
import { HeroCluster } from '../objects/HeroCluster';
import { MountIn } from '../objects/MountIn';
import { useSceneStore } from '../../store/sceneStore';
import type { Station } from '../../types';

/** Stations further than this (in stations) from the camera are not drawn at all. */
const VISIBLE_RANGE = 1.35;

export function StationContent({ station, index, dark }: { station: Station; index: number; dark: boolean }) {
  const ref = useRef<Group>(null);
  const { content, position } = station;

  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    const { progress, transition } = useSceneStore.getState();
    g.visible = Math.abs(progress - index) < VISIBLE_RANGE || transition?.station === index;
  });

  if (content.type === 'none') return null;
  return (
    <group ref={ref} position={[position[0], position[1], position[2]]}>
      <MountIn>
        {content.type === 'hero' ? (
          <HeroCluster station={index} dark={dark} />
        ) : (
          <DeviceCluster project={content.project} station={index} dark={dark} />
        )}
      </MountIn>
    </group>
  );
}
