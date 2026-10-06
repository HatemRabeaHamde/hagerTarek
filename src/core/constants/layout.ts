/**
 * Layout rules shared by CSS and the WebGL scene.
 * "split"  → text on one side, 3D visual on the other (landscape-ish viewports).
 * "stack"  → text on top, 3D visual below it (portrait viewports).
 * The 3D objects follow their HTML anchor boxes, so only these thresholds are shared.
 *
 * Keep in sync with the `split` custom variant in src/app/globals.css.
 */
export const LAYOUT = {
  splitMinAspect: 1,
  splitMinWidth: 640,
} as const;

export type LayoutMode = 'split' | 'stack';

export const getLayoutMode = (width: number, height: number): LayoutMode =>
  width >= LAYOUT.splitMinWidth && width / Math.max(height, 1) >= LAYOUT.splitMinAspect
    ? 'split'
    : 'stack';
