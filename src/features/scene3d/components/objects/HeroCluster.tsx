'use client';

import { useRef } from 'react';
import type { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { ASSETS } from '@/core/constants/assets';
import { damp } from '@/core/utils/math';
import { PROJECTS } from '@/features/projects/data/projects';
import { SCENE } from '../../config/sceneConfig';
import { useAnchorFit } from '../../hooks/useAnchorFit';
import { usePointer } from '../../hooks/usePointer';
import { BrowserDevice } from './BrowserDevice';
import { PhoneDevice } from './PhoneDevice';
import { SoftShadow } from './SoftShadow';
import { Floating } from './Floating';
import { ImagePanel } from './ImagePanel';

/** Mini devices orbiting the portrait: one per project (center screen). */
const MINIS = [
  { pos: [-1.75, -1.15, 0.7], rotY: 0.38, scale: 0.36 },
  { pos: [1.8, 1.05, -0.5], rotY: -0.4, scale: 0.32 },
  { pos: [1.95, -1.3, 0.55], rotY: -0.3, scale: 0.36 },
] as const;

export function HeroCluster({ station, dark }: { station: number; dark: boolean }) {
  const fitRef = useAnchorFit(station, SCENE.footprint.hero);
  const tilt = useRef<Group>(null);
  const pointer = usePointer();

  useFrame((_, delta) => {
    const g = tilt.current;
    if (!g) return;
    const k = damp(3, delta);
    g.rotation.y += (pointer.current.x * 0.12 - g.rotation.y) * k;
    g.rotation.x += (-pointer.current.y * 0.05 - g.rotation.x) * k;
  });

  return (
    <group ref={fitRef} scale={0}>
      <group ref={tilt}>
        <Floating amplitude={0.035} speed={0.6} rotation={[0, -0.1, 0]}>
          <SoftShadow width={2.6} height={3.5} dark={dark} />
          <ImagePanel image={ASSETS.common.portrait} height={3.5} />
        </Floating>
        {PROJECTS.map((project, i) => {
          const m = MINIS[i];
          const device = project.devices[1];
          return (
            <Floating
              key={project.slug}
              position={[m.pos[0], m.pos[1], m.pos[2]]}
              rotation={[0.06, m.rotY, 0]}
              scale={m.scale}
              amplitude={0.12}
              speed={0.8 + i * 0.2}
              phase={i * 2}
            >
              {device.kind === 'phone' ? (
                <PhoneDevice screen={device.texture} />
              ) : (
                <BrowserDevice screen={device.texture} />
              )}
            </Floating>
          );
        })}
      </group>
    </group>
  );
}
