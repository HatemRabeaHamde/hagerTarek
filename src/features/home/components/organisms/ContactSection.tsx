import { SECTION_IDS } from '@/core/constants/routes';
import { SITE } from '@/core/constants/site';
import { Container } from '@/core/components/atoms/Container';
import { Reveal } from '@/core/components/atoms/Reveal';
import { RichText } from '@/core/components/atoms/RichText';
import { StationSection } from '@/core/components/molecules/StationSection';
import type { Dictionary } from '@/core/i18n/dictionary.types';
import { ContactLink } from '../molecules/ContactLink';

export function ContactSection({ copy, station }: { copy: Dictionary['home']['contact']; station: number }) {
  const { contact } = SITE;
  const links = [
    { label: copy.labels.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: copy.labels.linkedin, value: contact.linkedin.handle, href: contact.linkedin.url, external: true },
    { label: copy.labels.behance, value: contact.behance.handle, href: contact.behance.url, external: true },
    { label: copy.labels.whatsapp, value: contact.whatsapp.display, href: contact.whatsapp.url, external: true },
  ];

  return (
    <StationSection station={station} id={SECTION_IDS.contact} labelledBy="contact-title">
      <Container className="flex min-h-svh flex-col justify-center py-28">
        <Reveal>
          <h2 id="contact-title" className="text-display max-w-6xl text-5xl sm:text-7xl xl:text-8xl short:text-5xl">
            <RichText text={copy.title} />
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-12 max-w-3xl leading-relaxed text-muted sm:text-lg">{copy.body}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((l) => (
              <ContactLink key={l.label} {...l} />
            ))}
          </dl>
        </Reveal>
      </Container>
    </StationSection>
  );
}
