/**
 * Every static image used by the app. Paths live here only.
 * Width / height are the intrinsic pixel sizes so next/image can reserve space (no CLS).
 */

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
}

const img = (src: string, width: number, height: number): ImageAsset => ({
  src: `/images/${src}.webp`,
  width,
  height,
});

export const ASSETS = {
  common: {
    portrait: img('common/portrait', 1402, 1874),
    monogram: img('common/monogram', 224, 152),
    og: img('common/og', 1600, 900),
  },
  digitalcar: {
    logo: img('common/logo-digitalcar', 322, 97),
    thumb: img('digitalcar/thumb', 1800, 948),
    cover: img('digitalcar/cover', 1836, 1295),
    processMiro: img('digitalcar/process-miro', 1793, 812),
    wireframesFinancing: img('digitalcar/wireframes-financing', 2400, 952),
    wireframesFlows: img('digitalcar/wireframes-flows', 2400, 750),
    decision1: img('digitalcar/decision-1', 1600, 1605),
    decision2: img('digitalcar/decision-2', 1600, 1605),
    decision3: img('digitalcar/decision-3', 1600, 1605),
    screens: img('digitalcar/screens', 2400, 1224),
    webRedesign: img('digitalcar/web-redesign', 2400, 1156),
    components: img('digitalcar/components', 2400, 1349),
    screenBrowse: img('digitalcar/screen-browse', 574, 1250),
    screenHome: img('digitalcar/screen-home', 574, 1250),
    screenCar: img('digitalcar/screen-car', 810, 1560),
  },
  rofoof: {
    logo: img('common/logo-rofoof', 265, 87),
    thumb: img('rofoof/thumb', 959, 383),
    cover: img('rofoof/cover', 1900, 1857),
    processOnboarding: img('rofoof/process-onboarding', 1600, 1799),
    wireframes: img('rofoof/wireframes', 2400, 1002),
    decision1: img('rofoof/decision-1', 1600, 1589),
    decision2: img('rofoof/decision-2', 1600, 1589),
    decision3: img('rofoof/decision-3', 1600, 1589),
    screens: img('rofoof/screens', 2400, 909),
    driverAdmin: img('rofoof/driver-admin', 2400, 1124),
    brand: img('rofoof/brand', 1600, 1499),
    outcome: img('rofoof/outcome', 2400, 824),
    screenHome: img('rofoof/screen-home', 871, 1808),
    screenOnboarding: img('rofoof/screen-onboarding', 712, 1516),
    screenProduct: img('rofoof/screen-product', 790, 1338),
  },
  tourstica: {
    logo: img('common/logo-tourstica', 357, 75),
    thumb: img('tourstica/cover', 2200, 1384),
    cover: img('tourstica/cover', 2200, 1384),
    insight: img('tourstica/insight', 2400, 875),
    wireframes: img('tourstica/wireframes', 1800, 1727),
    decision1: img('tourstica/decision-1', 1600, 1589),
    decision2: img('tourstica/decision-2', 1600, 1589),
    decision3: img('tourstica/decision-3', 1600, 1589),
    screens: img('tourstica/screens', 2400, 961),
    designSystem: img('tourstica/design-system', 1600, 1589),
    outcome: img('tourstica/outcome', 2400, 577),
    screenHero: img('tourstica/screen-hero', 1600, 997),
    screenCuration: img('tourstica/screen-curation', 1106, 563),
    screenTrust: img('tourstica/screen-trust', 1400, 876),
    screenStories: img('tourstica/screen-stories', 1186, 820),
  },
} as const;
