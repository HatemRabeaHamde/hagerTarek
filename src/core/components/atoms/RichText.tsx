import { Fragment } from 'react';

/** Renders `*text*` segments of a localized string as <em>. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('*') && part.endsWith('*') ? (
          <em key={i} className="font-display italic">
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain-text version (for metadata / alt text). */
export const stripRichText = (text: string) => text.replace(/\*/g, '');
