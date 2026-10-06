'use client';

import { Suspense, useMemo } from 'react';
import { buildStations } from '../../config/stations';
import { useSceneStore } from '../../store/sceneStore';
import { AtmosphereController } from '../canvas/AtmosphereController';
import { CameraRig } from '../canvas/CameraRig';
import { StudioEnvironment } from '../canvas/StudioEnvironment';
import { Dust } from '../objects/Dust';
import { StationContent } from './StationContent';

/** Builds the station list for the active page and renders everything placed on it. */
export function World({ dark }: { dark: boolean }) {
  const config = useSceneStore((s) => s.config);
  const key = config.mode === 'case' ? `case:${config.slug}` : 'home';
  const stations = useMemo(() => buildStations(config), [config]);
  const zs = stations.map((s) => s.position[2]);

  return (
    <>
      <CameraRig stations={stations} />
      <AtmosphereController stations={stations} dark={dark} />
      <StudioEnvironment />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 8]} intensity={1.1} />
      <Dust minZ={Math.min(...zs)} maxZ={Math.max(...zs)} dark={dark} />
      <group key={key}>
        {stations.map((station, i) => (
          <Suspense key={i} fallback={null}>
            <StationContent station={station} index={i} dark={dark} />
          </Suspense>
        ))}
      </group>
    </>
  );
}
