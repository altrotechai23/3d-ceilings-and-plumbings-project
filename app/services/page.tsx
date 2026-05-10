import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'
import { ServicesFAQ } from '@/components/services/services-faq'
import { FinalCTA } from '@/components/home/final-cta'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional ceiling installation, drywall partitioning, plumbing repairs, geyser installation, waterproofing, and renovation services in Cape Town. Quality workmanship guaranteed.',
  openGraph: {
    title: 'Our Services | 3D Ceiling and Plumbings',
    description: 'Professional ceiling installation, drywall partitioning, plumbing repairs, geyser installation, waterproofing, and renovation services in Cape Town.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesFAQ />
      <FinalCTA />
    </>
  )
}
