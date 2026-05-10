import type { Metadata } from 'next'
import { ProjectsHero } from '@/components/projects/projects-hero'
import { ProjectsGallery } from '@/components/projects/projects-gallery'
import { FinalCTA } from '@/components/home/final-cta'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'View our portfolio of completed ceiling installations, plumbing projects, and renovations across Cape Town. See the quality of our work firsthand.',
  openGraph: {
    title: 'Our Projects | 3D Ceiling and Plumbings',
    description: 'View our portfolio of completed ceiling installations, plumbing projects, and renovations across Cape Town.',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <FinalCTA />
    </>
  )
}
