import Link from 'next/link';
import { ArrowIcon } from '@/core/components/atoms/ArrowIcon';

/** Pill CTA tinted with the surrounding project's accent. */
export function CaseStudyLink({ href, label, name }: { href: string; label: string; name: string }) {
  return (
    <Link
      href={href}
      aria-label={`${label}: ${name}`}
      className="group inline-flex items-center gap-3 rounded-full border border-(--p-accent-text) px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-(--p-accent-text) transition-colors hover:bg-(--p-accent) hover:text-white dark:border-(--p-accent) dark:text-(--p-accent) dark:hover:text-black"
    >
      {label}
      <ArrowIcon className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
    </Link>
  );
}
