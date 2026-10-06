import { lazy, Suspense, type ComponentType } from 'react';

export default function dynamic<P extends object>(loader: () => Promise<ComponentType<P>>) {
  const Lazy = lazy(() => loader().then((c) => ({ default: c })));
  return function Dynamic(props: P) {
    return (
      <Suspense fallback={null}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
