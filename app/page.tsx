import { HeroSection } from '@/components/home/hero-section'
import { Marquee } from '@/components/home/marquee'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { Testimonials } from '@/components/home/testimonials'
import { FinalCTA } from '@/components/home/final-cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
