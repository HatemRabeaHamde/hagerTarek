import type { AnchorHTMLAttributes } from 'react';
import { navigate } from './router';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; prefetch?: boolean };

export default function Link({ href, onClick, prefetch: _prefetch, ...rest }: Props) {
  void _prefetch;
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    />
  );
}
