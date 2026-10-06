interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export function ContactLink({ label, value, href, external }: ContactLinkProps) {
  return (
    <div className="border-t border-line pt-4">
      <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-subtle">{label}</dt>
      <dd className="mt-2">
        <a
          href={href}
          className="break-all text-base underline decoration-line underline-offset-4 transition-colors hover:decoration-ink sm:text-lg"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {value}
        </a>
      </dd>
    </div>
  );
}
