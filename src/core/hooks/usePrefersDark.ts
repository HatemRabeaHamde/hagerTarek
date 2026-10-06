'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-color-scheme: dark)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => {
    mql.removeEventListener('change', onChange);
    mo.disconnect();
  };
}

function getSnapshot() {
  const forced = document.documentElement.dataset.theme;
  if (forced === 'dark') return true;
  if (forced === 'light') return false;
  return window.matchMedia(QUERY).matches;
}

/** Dark mode = OS preference, unless <html data-theme> forces a theme. */
export const usePrefersDark = () => useSyncExternalStore(subscribe, getSnapshot, () => false);
