import { cn } from '@/core/utils/cn';

/** Horizontal page gutter + max width. */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-16', className)}>{children}</div>;
}
