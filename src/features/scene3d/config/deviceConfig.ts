/** Physical proportions of the 3D devices (world units). */
export const DEVICE = {
  phone: {
    screenHeight: 3,
    /** iPhone-like 19.5:9 screen */
    screenAspect: 0.462,
    bezel: 0.055,
    depth: 0.15,
    cornerRadius: 0.26,
    screenRadius: 0.21,
    island: { width: 0.36, height: 0.1, top: 0.09 },
  },
  browser: {
    screenHeight: 2.05,
    bar: 0.17,
    frame: 0.035,
    depth: 0.05,
    cornerRadius: 0.07,
  },
  colors: {
    phoneBody: '#1B1C1F',
    phoneRim: '#5D6066',
    bezel: '#050506',
    browserFrame: '#F3F1ED',
    browserBar: '#E6E3DD',
    browserAddress: '#FFFFFF',
    dots: ['#E36A5D', '#E6B54A', '#6BBF6A'],
  },
} as const;
