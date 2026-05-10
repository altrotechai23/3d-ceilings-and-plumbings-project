'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const whatsappNumber = '27788620502'
const whatsappMessage = encodeURIComponent("Hi! I'm interested in your ceiling and plumbing services. Can you provide more information?")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass py-4 border-b border-border'
            : 'bg-transparent py-6'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold text-foreground">3D Ceiling</span>
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-primary font-sans mt-0.5">& Plumbings</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span className={cn(
                  'text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}>
                  {link.label}
                </span>
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - WhatsApp Only */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium tracking-wide uppercase px-6"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-3.5 h-3.5 mr-2" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-foreground flex flex-col gap-[5px]"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={cn(
              'block h-px bg-foreground transition-all duration-300 origin-center',
              isMobileMenuOpen ? 'w-[22px] translate-y-[6px] rotate-45' : 'w-[22px]'
            )} />
            <span className={cn(
              'block h-px bg-foreground transition-all duration-300',
              isMobileMenuOpen ? 'w-0 opacity-0' : 'w-[16px]'
            )} />
            <span className={cn(
              'block h-px bg-foreground transition-all duration-300 origin-center',
              isMobileMenuOpen ? 'w-[22px] -translate-y-[6px] -rotate-45' : 'w-[22px]'
            )} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-[199] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 w-full max-w-[360px] h-screen bg-card border-l border-border z-[200] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-2 p-10 pt-24">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-serif text-3xl font-light py-2 border-b border-border transition-all duration-300',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary hover:pl-2'
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button 
              asChild 
              className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>12 Coatbridge Crescent</p>
            <p>Parklands, Milnerton 7441</p>
            <p>Cape Town</p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[90] glass border-t border-border p-3 flex gap-3 lg:hidden">
        <Button 
          asChild 
          className="flex-1 justify-center bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium"
        >
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Us
          </Link>
        </Button>
      </div>
    </>
  )
}
