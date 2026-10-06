/** Tunables for the scene. Units are world units unless noted. */
export const SCENE = {
  camera: { fov: 36, near: 0.1, far: 120, distance: 9 },
  /** Damping speed for camera follow (higher = snappier) */
  followLambda: 3.2,
  /** Pointer parallax amplitude */
  parallax: { x: 0.5, y: 0.3 },
  fog: { nearFactor: 1.1, farFactor: 1.95 },
  dpr: { min: 1, max: 1.75 },
  dust: { desktop: 650, mobile: 260, size: 0.035 },
  /** Natural (unscaled) footprint of content groups, used to fit them into the viewport */
  footprint: {
    hero: { width: 4.6, height: 3.9 },
  },
} as const;
