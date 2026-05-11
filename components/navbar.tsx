'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

import {
  MessageCircle,
  Home,
  Briefcase,
  FolderOpen,
  Phone,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    href: '/',
    label: 'Home',
    icon: Home,
  },

  {
    href: '/services',
    label: 'Services',
    icon: Briefcase,
  },

  {
    href: '/projects',
    label: 'Projects',
    icon: FolderOpen,
  },

  {
    href: '/contact',
    label: 'Contact',
    icon: Phone,
  },
]

const whatsappNumber = '27788620502'

const whatsappMessage = encodeURIComponent(
  "Hi! I'm interested in your ceiling and plumbing services. Can you provide more information?"
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative z-10">
            <div className="leading-none select-none">
              {/* 3D TEXT EFFECT */}
              <h1
                className="
                  relative
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-white
                  text-2xl
                  sm:text-3xl
                "
                style={{
                  textShadow: `
                    0 1px 0 rgba(255,255,255,0.1),
                    0 2px 0 rgba(0,0,0,0.2),
                    0 3px 0 rgba(0,0,0,0.25),
                    0 4px 10px rgba(0,0,0,0.45)
                  `,
                  transform: 'perspective(500px) rotateX(8deg)',
                }}
              >
                <span className="text-primary">3D</span>
                Ceilings
              </h1>

              <div className="flex items-center gap-2 mt-1">
                <div className="w-8 h-px bg-primary" />

                <span
                  className="
                    text-[0.62rem]
                    tracking-[0.35em]
                    uppercase
                    text-white/60
                    font-medium
                  "
                >
                  Plumbing
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span
                  className={cn(
                    'text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300',
                    pathname === link.href
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  )}
                >
                  {link.label}
                </span>

                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300',
                    pathname === link.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              asChild
              size="sm"
              className="
                bg-primary
                text-white
                hover:bg-primary/90
                px-6
                uppercase
                tracking-wider
                shadow-[0_0_30px_rgba(132,204,22,0.35)]
              "
            >
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden relative z-50 p-2"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={cn(
                  'block h-px bg-white transition-all duration-300',
                  isMobileMenuOpen
                    ? 'w-6 rotate-45 translate-y-[6px]'
                    : 'w-6'
                )}
              />

              <span
                className={cn(
                  'block h-px bg-white transition-all duration-300',
                  isMobileMenuOpen
                    ? 'opacity-0 w-0'
                    : 'w-4'
                )}
              />

              <span
                className={cn(
                  'block h-px bg-white transition-all duration-300',
                  isMobileMenuOpen
                    ? 'w-6 -rotate-45 -translate-y-[6px]'
                    : 'w-6'
                )}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* MOBILE DRAWER */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-full
                max-w-[340px]
                bg-black
                border-l
                border-white/10
                z-[110]
                lg:hidden
              "
            >
              <div className="flex flex-col p-8 pt-28">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn('font-serif  text-4xl     font-light      py-4      border-b   border-white/10 transition-all duration-300',
                      pathname === link.href
                        ? 'text-primary'
                        : 'text-white/70 hover:text-primary hover:pl-2'
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-10">
                  <Button
                    asChild
                    className="
                      w-full
                      h-14
                      bg-primary
                      text-primary-foreground
                      hover:bg-primary/90
                    "
                  >
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* IPHONE STYLE MOBILE TAB BAR */}
      <div
        className="
          fixed
          bottom-4
          left-1/2
          -translate-x-1/2
          z-[95]
          lg:hidden
          w-[calc(100%-1.5rem)]
          max-w-107.5
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-4xl
            border
            border-white/10
            bg-black/70
            backdrop-blur-2xl
            shadow-[0_10px_50px_rgba(0,0,0,0.45)]
          "
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-white/5 to-primary/5 pointer-events-none" />

          <div className="relative flex items-center justify-around px-2 py-3">
            {navLinks.map((link) => {
              const Icon = link.icon

              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-1
                    min-w-[60px]
                    py-1
                  "
                >
                  {/* ACTIVE PILL */}
                  {active && (
                    <motion.div
                      layoutId="mobileTabHighlight"
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        bg-primary/15
                        border
                        border-primary/20
                      "
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}

                  <Icon
                    className={cn('relative  z-10  w-5  h-5  transition-colors ',
                      active
                        ? 'text-primary'
                        : 'text-white/60'
                    )}
                  />

                  <span
                    className={cn(
                      'relative z-10  text-[0.65rem]  uppercase  tracking-wide',
                      active
                        ? 'text-primary'
                        : 'text-white/50'
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            })}

            {/* WHATSAPP BUTTON */}
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                gap-1
                min-w-15
                py-1
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-primary
                  shadow-[0_0_25px_rgba(132,204,22,0.45)]
                "
              />

              <MessageCircle className="relative z-10 w-5 h-5 text-white" />

              <span className="relative z-10 text-[0.65rem] uppercase tracking-wide text-white font-medium">
                Chat
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}