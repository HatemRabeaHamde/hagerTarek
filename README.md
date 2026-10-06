# Hager Tarek — Portfolio

Immersive portfolio built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + three.js (React Three Fiber)**.
A single persistent WebGL scene sits behind the page; scrolling moves the camera between "stations"
(one per section) and every 3D object is glued to an HTML anchor box, so the CSS layout controls where it appears on any screen.

## Run

```bash
cp .env.example .env.local      # set NEXT_PUBLIC_SITE_URL
npm install
npm run dev                     # http://localhost:3000  →  /en
npm run build && npm start      # production (fails fast if NEXT_PUBLIC_SITE_URL is missing)
```

## Structure

```
src/
├── app/[locale]/                 # routes only (scaffold): layout, home, work/[slug], not-found
├── assets/fonts/                 # self-hosted fonts (OFL)
├── core/
│   ├── components/atoms|molecules  # shared UI: RichText, Reveal, VisualAnchor, SiteHeader, StationSection…
│   ├── constants/                # colors, assets, routes, site, layout, fonts, dom  ← no hardcoded values elsewhere
│   ├── hooks/                    # useMediaQuery, usePrefersDark, useHasWebGL, useInView…
│   ├── i18n/                     # locale config, Dictionary type, loader
│   ├── providers/                # Lenis smooth scroll
│   └── utils/
├── features/
│   ├── home/                     # HomePage + organisms (Hero, About, Project, Contact)
│   ├── case-study/               # data (block structure per project), types, service, block components
│   ├── projects/                 # project list (theme, logo, 3D device screens)
│   └── scene3d/                  # canvas, camera rig, atmosphere, devices, stations, zustand store
└── messages/en.ts                # all copy (typed against Dictionary)
tools/artifact-preview/           # optional single-file HTML build of the same components (Vite)
```

### Data flow
`features/*/data` (structure, images, hex values) + `messages/<locale>.ts` (copy) → `caseStudyService` → page components.
`SceneDriver` (one per page) tells the scene which world to show and maps scroll → station progress (zustand, read inside `useFrame`, no React re-renders).

## Localization (Arabic ready)
1. Copy `src/messages/en.ts` → `ar.ts` and translate (the `Dictionary` type enforces completeness).
2. Add `'ar'` to `LOCALES` in `src/core/i18n/config.ts` and register the loader in `dictionaries.ts`.
`dir="rtl"` is set automatically, layouts use logical properties (`ms-`, `ps-`, `start-`), arrows mirror, and the 3D visuals follow their anchors so they flip sides too.

## Performance & accessibility
- three.js is loaded only when WebGL works and the user has not asked for reduced motion; otherwise static images render (no layout shift).
- `PerformanceMonitor` drops the pixel ratio on slow devices; fewer particles on small screens.
- Every page is statically prerendered; images are WebP via `next/image` with intrinsic sizes.
- Security headers + CSP in `next.config.ts`. No secrets in the codebase.

## Content notes
- Images were extracted from the PDF portfolio (`public/images`). Replace them with Figma exports for sharper results — keep the same file names, or update sizes in `core/constants/assets.ts`.
- Behance URL in `core/constants/site.ts` was built from the handle in the PDF — verify it.
