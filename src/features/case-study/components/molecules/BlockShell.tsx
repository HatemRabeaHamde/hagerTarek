import type { ProjectThemeKey } from '@/core/constants/colors';
import { Container } from '@/core/components/atoms/Container';
import { StationSection, type SectionTone } from '@/core/components/molecules/StationSection';
import { cn } from '@/core/utils/cn';

export interface BlockShellProps {
  station: number;
  tone: SectionTone;
  theme: ProjectThemeKey;
  labelledBy: string;
  className?: string;
  children: React.ReactNode;
}

/** Section frame shared by all case-study blocks. */
export function BlockShell({ station, tone, theme, labelledBy, className, children }: BlockShellProps) {
  return (
    <StationSection station={station} tone={tone} theme={theme} labelledBy={labelledBy}>
      <Container className={cn('flex min-h-[85svh] flex-col justify-center py-24 sm:py-32', className)}>
        {children}
      </Container>
    </StationSection>
  );
}
