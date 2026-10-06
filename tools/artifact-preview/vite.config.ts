import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const here = path.dirname(fileURLToPath(import.meta.url));
const app = path.resolve(here, '../..');
const shim = (f: string) => path.resolve(here, 'src/shims', f);
// One copy of every runtime dependency: the app's own node_modules.
const dep = (name: string) => path.resolve(app, 'node_modules', name);

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.NEXT_PUBLIC_SITE_URL': JSON.stringify('https://preview.local'),
  },
  resolve: {
    alias: [
      { find: /^next\/link$/, replacement: shim('next-link.tsx') },
      { find: /^next\/image$/, replacement: shim('next-image.tsx') },
      { find: /^next\/dynamic$/, replacement: shim('next-dynamic.tsx') },
      { find: /^next\/navigation$/, replacement: shim('next-navigation.ts') },
      { find: /^next\/font\/local$/, replacement: shim('next-font-local.ts') },
      { find: /^server-only$/, replacement: shim('empty.ts') },
      { find: /^@\//, replacement: `${app}/src/` },
      { find: /^react$/, replacement: dep('react') },
      { find: /^react\/(.*)$/, replacement: `${dep('react')}/$1` },
      { find: /^react-dom$/, replacement: dep('react-dom') },
      { find: /^react-dom\/(.*)$/, replacement: `${dep('react-dom')}/$1` },
      { find: /^three$/, replacement: dep('three') },
      { find: /^three\/(.*)$/, replacement: `${dep('three')}/$1` },
      { find: /^@react-three\/fiber$/, replacement: dep('@react-three/fiber') },
      { find: /^@react-three\/drei$/, replacement: dep('@react-three/drei') },
      { find: /^zustand$/, replacement: dep('zustand') },
      { find: /^lenis$/, replacement: dep('lenis') },
    ],
    dedupe: ['react', 'react-dom', 'three'],
  },
  build: { assetsInlineLimit: 100_000_000, chunkSizeWarningLimit: 20_000, cssCodeSplit: false },
});
