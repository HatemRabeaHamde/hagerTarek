'use client';

import { useEffect } from 'react';
import { useHasWebGL } from '@/core/hooks/useHasWebGL';
import { useScrollStations } from '../hooks/useScrollStations';
import { useSceneStore, type SceneConfig } from '../store/sceneStore';

/**
 * Placed once per page. Tells the persistent scene which world to show and
 * feeds it the scroll position. Renders nothing.
 */
export function SceneDriver({ config }: { config: SceneConfig }) {
  const setConfig = useSceneStore((s) => s.setConfig);
  const webgl = useHasWebGL();
  const key = config.mode === 'case' ? `case:${config.slug}` : 'home';

  useEffect(() => {
    setConfig(config);
    // `key` captures every field of config
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setConfig]);

  useScrollStations(webgl);
  return null;
}
