import { navigate } from './router';

/** Minimal useRouter for the single-file preview. */
export function useRouter() {
  return { push: navigate, replace: navigate, prefetch: () => {}, back: () => history.back(), refresh: () => {} };
}

export function notFound(): never {
  throw new Error('Not found');
}
