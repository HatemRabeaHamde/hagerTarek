import type { ImgHTMLAttributes } from 'react';
import { DATA_URIS } from '../dataUris.gen';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  priority?: boolean;
  quality?: number;
};

export default function Image({ src, priority, quality: _q, ...rest }: Props) {
  void _q;
  return <img src={DATA_URIS[src] ?? src} loading={priority ? 'eager' : 'lazy'} decoding="async" {...rest} />;
}
