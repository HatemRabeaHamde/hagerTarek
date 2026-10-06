'use client';

import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { clamp, damp, lerp, smoothstep } from '@/core/utils/math';
import type { Project } from '@/features/projects/types/project.types';
import { cascadePoses, fanPoses, type Pose } from '../../config/arrangements';
import { useAnchorFit } from '../../hooks/useAnchorFit';
import { usePointer } from '../../hooks/usePointer';
import { useSceneStore } from '../../store/sceneStore';
import { BrowserDevice, browserSize } from './BrowserDevice';
import { Floating } from './Floating';
import { PHONE_HEIGHT, PHONE_WIDTH, PhoneDevice } from './PhoneDevice';
import { SoftShadow } from './SoftShadow';

interface DeviceClusterProps {
  project: Project;
  station: number;
  dark: boolean;
}

const mix = (a: Pose, b: Pose, t: number): Pose => ({
  position: [
    lerp(a.position[0], b.position[0], t),
    lerp(a.position[1], b.position[1], t),
    lerp(a.position[2], b.position[2], t),
  ],
  rotY: lerp(a.rotY, b.rotY, t),
  scale: lerp(a.scale, b.scale, t),
});

/**
 * Three devices that open as you scroll onto their section, spread further on hover,
 * and lift the device under the cursor. Fitted to the section's HTML anchor box.
 */
export function DeviceCluster({ project, station, dark }: DeviceClusterProps) {
  const pointer = usePointer();
  const tilt = useRef<THREE.Group>(null);
  const slots = useRef<(THREE.Group | null)[]>([]);
  const state = useRef({ open: 0, hover: 0, lift: [0, 0, 0], raycaster: new THREE.Raycaster(), ndc: new THREE.Vector2() });

  const layout = useMemo(() => {
    const sizes = project.devices.map((d) =>
      d.kind === 'phone' ? { width: PHONE_WIDTH, height: PHONE_HEIGHT } : browserSize(d.texture),
    );
    const poses = project.arrangement === 'fan' ? fanPoses(PHONE_WIDTH) : cascadePoses();
    // Footprint of the widest (hover) state, so hovering never rescales the group.
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    poses.hover.forEach((p, i) => {
      const w = (sizes[i].width * p.scale) / 2;
      const h = (sizes[i].height * p.scale) / 2;
      minX = Math.min(minX, p.position[0] - w);
      maxX = Math.max(maxX, p.position[0] + w);
      minY = Math.min(minY, p.position[1] - h);
      maxY = Math.max(maxY, p.position[1] + h);
    });
    return {
      sizes,
      poses,
      center: [(minX + maxX) / 2, (minY + maxY) / 2] as const,
      footprint: { width: maxX - minX + 0.3, height: maxY - minY + 0.3 },
    };
  }, [project]);

  const fitRef = useAnchorFit(station, layout.footprint);

  useFrame(({ camera }, delta) => {
    if (!fitRef.current?.parent?.parent?.visible) return;
    const s = state.current;
    const { progress, hoveredStation } = useSceneStore.getState();
    const dt = Math.min(delta, 0.25);

    // Open as the section arrives, spread more while its visual is hovered.
    const arrive = 1 - smoothstep(clamp(Math.abs(progress - station) * 1.3, 0, 1));
    const hovered = hoveredStation === station;
    s.open += (arrive - s.open) * damp(4, dt);
    s.hover += ((hovered ? 1 : 0) - s.hover) * damp(5, dt);

    // Which device is under the cursor (only while the visual is hovered).
    let hit = -1;
    if (hovered) {
      s.ndc.set(pointer.current.x, pointer.current.y);
      s.raycaster.setFromCamera(s.ndc, camera);
      const targets = slots.current.filter((g): g is THREE.Group => !!g);
      const first = s.raycaster.intersectObjects(targets, true)[0];
      if (first) {
        hit = targets.findIndex((g) => {
          let o: THREE.Object3D | null = first.object;
          while (o) {
            if (o === g) return true;
            o = o.parent;
          }
          return false;
        });
      }
    }

    slots.current.forEach((g, i) => {
      if (!g) return;
      s.lift[i] += ((hit === i ? 1 : 0) - s.lift[i]) * damp(8, dt);
      const p = mix(mix(layout.poses.closed[i], layout.poses.open[i], s.open), layout.poses.hover[i], s.hover);
      g.position.set(p.position[0], p.position[1] + s.lift[i] * 0.08, p.position[2] + s.lift[i] * 0.35);
      g.rotation.y = p.rotY * (1 - s.lift[i] * 0.5);
      g.scale.setScalar(p.scale * (1 + s.lift[i] * 0.04));
    });

    const t = tilt.current;
    if (t) {
      const k = damp(3, dt);
      t.rotation.y += (pointer.current.x * 0.14 - t.rotation.y) * k;
      t.rotation.x += (-pointer.current.y * 0.06 - t.rotation.x) * k;
    }
  });

  return (
    <group ref={fitRef} scale={0}>
      <group ref={tilt}>
        <group position={[-layout.center[0], -layout.center[1], 0]}>
          {project.devices.map((device, i) => (
            <group key={device.texture.src} ref={(g) => void (slots.current[i] = g)}>
              <Floating phase={i * 1.7} amplitude={0.05} speed={0.8 + i * 0.15}>
                <SoftShadow width={layout.sizes[i].width} height={layout.sizes[i].height} dark={dark} />
                {device.kind === 'phone' ? (
                  <PhoneDevice screen={device.texture} />
                ) : (
                  <BrowserDevice screen={device.texture} />
                )}
              </Floating>
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}
