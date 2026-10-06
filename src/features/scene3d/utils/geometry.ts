import * as THREE from 'three';

/** Rounded rectangle centered on the origin. */
export function roundedRectShape(width: number, height: number, radius: number): THREE.Shape {
  const r = Math.min(radius, width / 2, height / 2);
  const x = -width / 2;
  const y = -height / 2;
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + width - r, y);
  s.quadraticCurveTo(x + width, y, x + width, y + r);
  s.lineTo(x + width, y + height - r);
  s.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  s.lineTo(x + r, y + height);
  s.quadraticCurveTo(x, y + height, x, y + height - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/** Flat rounded plane whose UVs span 0..1 (ShapeGeometry UVs are in shape units by default). */
export function roundedPlaneGeometry(width: number, height: number, radius: number, segments = 12) {
  const geo = new THREE.ShapeGeometry(roundedRectShape(width, height, radius), segments);
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, (pos.getX(i) + width / 2) / width, (pos.getY(i) + height / 2) / height);
  }
  uv.needsUpdate = true;
  return geo;
}

/** Rounded slab used as a device body. Front face sits at z = 0. */
export function roundedSlabGeometry(width: number, height: number, radius: number, depth: number) {
  const bevel = Math.min(0.03, depth / 3);
  const geo = new THREE.ExtrudeGeometry(roundedRectShape(width - bevel * 2, height - bevel * 2, radius), {
    depth,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 10,
  });
  geo.translate(0, 0, -depth - bevel);
  return geo;
}
