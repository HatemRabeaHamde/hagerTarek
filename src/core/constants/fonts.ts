import localFont from 'next/font/local';

/**
 * Self-hosted fonts (SIL Open Font License, see src/assets/fonts).
 * Self-hosting avoids build-time network calls and third-party requests at runtime.
 */
export const displayFont = localFont({
  src: [
    { path: '../../assets/fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../assets/fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display-face',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const bodyFont = localFont({
  src: [{ path: '../../assets/fonts/hanken-grotesk-latin-wght-normal.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
