import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import { WEBGL_CLASS } from '@/core/constants/dom';
import { buildThemeCss } from '@/core/utils/themeCss';
import { App } from './App';
import { DATA_URIS } from './dataUris.gen';
import './styles.css';

// Same pre-paint capability check as the Next.js root layout.
try {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gl = document.createElement('canvas').getContext('webgl2') ?? document.createElement('canvas').getContext('webgl');
  if (gl && !reduced) document.documentElement.classList.add(WEBGL_CLASS);
} catch {
  /* no WebGL: static fallback */
}

const style = document.createElement('style');
style.textContent = buildThemeCss();
document.head.appendChild(style);

// three.js textures resolve /images/* paths to inlined data URIs.
THREE.DefaultLoadingManager.setURLModifier((url) => DATA_URIS[url] ?? url);

createRoot(document.getElementById('root')!).render(<App />);
