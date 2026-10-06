import { useSyncExternalStore } from 'react';

/** In-memory router for the single-file preview (artifact pages have one URL). */
let path = '/en';
const listeners = new Set<() => void>();

export function navigate(href: string) {
  const [p, hash] = href.split('#');
  const changed = p && p !== path;
  if (changed) path = p;
  listeners.forEach((l) => l());
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash) : null;
      if (target) target.scrollIntoView({ behavior: changed ? 'auto' : 'smooth' });
      else if (changed) window.scrollTo(0, 0);
    }),
  );
}

export function usePath() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => path,
  );
}
