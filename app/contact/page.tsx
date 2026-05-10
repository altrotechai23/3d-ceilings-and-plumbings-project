import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactSection } from '@/components/contact/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with 3D Ceiling and Plumbings for a free quote. We offer ceiling installation, plumbing services, and renovations in Cape Town.',
  openGraph: {
    title: 'Contact Us | 3D Ceiling and Plumbings',
    description: 'Get in touch with 3D Ceiling and Plumbings for a free quote. We offer ceiling installation, plumbing services, and renovations in Cape Town.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}
