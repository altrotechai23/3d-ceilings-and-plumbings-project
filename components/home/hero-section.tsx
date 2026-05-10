'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const whatsappNumber = '27788620502'
const whatsappMessage = encodeURIComponent("Hi! I'm interested in your ceiling and plumbing services. Can you provide a free quote?")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(target * easeOutQuart))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      <span className="text-primary">{suffix}</span>
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.55 0.16 155 / 0.06) 0%, transparent 70%),
              linear-gradient(160deg, oklch(0.22 0.03 220) 0%, oklch(0.18 0.03 220) 40%, oklch(0.15 0.03 220) 100%)
            `
          }}
        />
        
        {/* Background video/image */}
        <motion.div style={{ y }} className="absolute inset-0 opacity-12 mix-blend-luminosity">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.23.49%20PM-Vcif7AjMDXTijoGW6WknLWhajH0ikn.jpeg"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-09%20at%209.23.53%20PM-VKZU9B8oqbYlSPb0B38oaGPN9xEZun.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Left overlay gradient for text readability */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to right, oklch(0.22 0.03 220 / 0.95) 0%, oklch(0.22 0.03 220 / 0.7) 50%, oklch(0.22 0.03 220 / 0.4) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-px bg-primary" />
            <span className="label">Cape Town, South Africa</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif font-light text-foreground mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Premium <em className="not-italic text-primary">Ceiling</em> &<br />
            Plumbing Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Reliable craftsmanship, modern finishes, and trusted plumbing expertise 
            for residential and commercial projects across Cape Town.
          </motion.p>

          {/* CTA Buttons - WhatsApp Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 border border-primary px-8 h-12 text-sm font-medium tracking-wide uppercase"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>Get Free Quote &rarr;</span>
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white/25 text-foreground hover:bg-white/5 hover:border-white/50 px-8 h-12 text-sm font-medium tracking-wide uppercase"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp Us</span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap border-t border-border pt-8"
          >
            <div className="pr-6 sm:pr-10 mr-6 sm:mr-10 border-r border-border mb-4 sm:mb-0">
              <div className="font-serif text-3xl sm:text-4xl font-light text-foreground leading-none">
                <AnimatedCounter target={200} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1">Projects Completed</div>
            </div>
            <div className="pr-6 sm:pr-10 mr-6 sm:mr-10 border-r border-border mb-4 sm:mb-0">
              <div className="font-serif text-3xl sm:text-4xl font-light text-foreground leading-none">
                <AnimatedCounter target={10} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1">Years Experience</div>
            </div>
            <div className="pr-6 sm:pr-10 mr-6 sm:mr-10 border-r border-border mb-4 sm:mb-0">
              <div className="font-serif text-3xl sm:text-4xl font-light text-foreground leading-none">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-light text-primary leading-none">24/7</div>
              <div className="text-xs text-muted-foreground tracking-wide mt-1">Emergency Support</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-scroll-pulse" />
      </motion.div>
    </section>
  )
}
