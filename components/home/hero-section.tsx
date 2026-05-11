'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const whatsappNumber = '27788620502'

const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in your ceiling and plumbing services. Can you provide a free quote?"
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const AUTO_SLIDE_DURATION = 7000

const slides = [
  {
    id: 1,
    image: '/im1.jpeg',
    eyebrow: 'PREMIUM INTERIOR FINISHES',
    title: (
      <>
        Premium <em className="not-italic text-primary">Ceiling</em>
        <br />
        & Plumbing Solutions
      </>
    ),
    description:
      'Reliable craftsmanship, modern finishes, and trusted plumbing expertise for residential and commercial projects across Cape Town.',
  },

  {
    id: 2,
    image: '/im2.jpeg',
    eyebrow: 'TRUSTED WATER SYSTEMS',
    title: (
      <>
        Modern <em className="not-italic text-primary">Plumbing</em>
        <br />
        & Maintenance
      </>
    ),
    description:
      'Professional pipe fitting, leak repairs and maintenance services built for long-term performance.',
  },

  {
    id: 3,
    image: '/im3.jpeg',
    eyebrow: 'COMMERCIAL & RESIDENTIAL',
    title: (
      <>
        Stylish <em className="not-italic text-primary">Interior</em>
        <br />
        Finishing
      </>
    ),
    description:
      'Elegant ceiling finishes and tailored renovation solutions crafted with precision and care.',
  },

  {
    id: 4,
    image: '/im4.jpeg',
    eyebrow: 'CAPE TOWN SOUTH AFRICA',
    title: (
      <>
        Trusted <em className="not-italic text-primary">Building</em>
        <br />
        Solutions
      </>
    ),
    description:
      'From renovations to plumbing systems, we deliver quality workmanship across every project.',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // used to fully restart progress animation
  const [progressKey, setProgressKey] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const activeSlide = useMemo(
    () => slides[currentSlide],
    [currentSlide]
  )

  // AUTO SLIDER
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)

      // restart progress animation
      setProgressKey((prev) => prev + 1)
    }, AUTO_SLIDE_DURATION)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // RESET TIMER WHEN MANUALLY CHANGING SLIDES
  const resetSlider = (newSlide: number) => {
    setCurrentSlide(newSlide)

    // restart progress animation
    setProgressKey((prev) => prev + 1)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)

      setProgressKey((prev) => prev + 1)
    }, AUTO_SLIDE_DURATION)
  }

  const nextSlide = () => {
    resetSlider((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    resetSlider(
      (currentSlide - 1 + slides.length) % slides.length
    )
  }

  return (
    <section className="relative h-screen min-h-screen overflow-hidden bg-black">
      {/* SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: AUTO_SLIDE_DURATION / 1000,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activeSlide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* LEFT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                {/* EYEBROW */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-primary" />

                  <span className="text-primary uppercase tracking-[0.35em] text-xs font-semibold">
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* TITLE */}
                <h1
                  className="
                    font-serif
                    font-light
                    text-white
                    leading-[0.95]
                    tracking-tight
                    mb-8
                  "
                  style={{
                    fontSize: 'clamp(3.8rem, 8vw, 7rem)',
                  }}
                >
                  {activeSlide.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
                  {activeSlide.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="
                      bg-primary
                      text-white/80
                      hover:bg-primary/90
                      border border-primary
                      px-8
                      h-14
                      uppercase
                      tracking-wider
                    "
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Free Quote →
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="
                      border-primary/80
                      text-primary/80
                      bg-white/5
                      hover:bg-white/10
                      px-8
                      h-14
                      uppercase
                      tracking-wider
                    "
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* SLIDE COUNTER */}
      <div className="absolute bottom-14 left-8 z-30 flex items-end gap-2">
        <span className="text-primary text-5xl font-bold leading-none">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>

        <span className="text-white/40 mb-1 text-lg">
          /{String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* SLIDE DOTS */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => resetSlider(index)}
            className="group"
          >
            <div
              className={`
                transition-all duration-300 rounded-full
                ${
                  currentSlide === index
                    ? 'w-10 h-[5px] bg-primary'
                    : 'w-2 h-2 bg-white/40 group-hover:bg-white/70'
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* NAVIGATION */}
      <div className="absolute bottom-10 right-8 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="
            w-14 h-14 rounded-full
            border border-white/20
            bg-white/5
            backdrop-blur-sm
            flex items-center justify-center
            text-white
            hover:bg-white/10
            transition
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="
            w-14 h-14 rounded-full
            border border-white/20
            bg-white/5
            backdrop-blur-sm
            flex items-center justify-center
            text-white
            hover:bg-white/10
            transition
          "
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* BOTTOM GROWING BORDER */}
      <div className="absolute bottom-0 left-0 w-full z-40">
        <div className="relative h-[4px] w-full bg-black/70 overflow-hidden">
          {/* SEGMENT LINES */}
          <div className="absolute inset-0 flex">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex-1 border-r border-white/5 last:border-r-0"
              />
            ))}
          </div>

          {/* ANIMATED PROGRESS */}
          <motion.div
            key={progressKey}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: AUTO_SLIDE_DURATION / 1000,
              ease: 'linear',
            }}
            className="absolute left-0 top-0 h-full bg-primary"
          />
        </div>
      </div>
    </section>
  )
}