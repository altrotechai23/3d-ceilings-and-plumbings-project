'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, MessageCircle } from 'lucide-react'

const services = [
  { label: 'Ceiling Installation', href: '/services#ceilings' },
  { label: 'Drywall Partitioning', href: '/services#drywall' },
  { label: 'Plumbing Repairs', href: '/services#plumbing' },
  { label: 'Geyser Installation', href: '/services#geyser' },
  { label: 'Waterproofing', href: '/services#waterproofing' },
  { label: 'Renovations', href: '/services#renovations' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const whatsappNumber = '27788620502'
const whatsappMessage = encodeURIComponent("Hi! I'm interested in your ceiling and plumbing services. Can you provide more information?")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-[280px]"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold text-foreground">3D Ceiling</span>
                <span className="text-primary font-serif text-2xl font-semibold">& Plumbings</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Cape Town&apos;s trusted specialists for premium ceiling installations and professional plumbing solutions. 
              Quality craftsmanship for residential and commercial projects.
            </p>
            <div className="flex gap-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:Kilf750@gmail.com"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="label mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="label mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="label mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 border-b border-border">
                <div className="w-10 h-10 border border-border/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="label text-muted-foreground mb-1">Address</div>
                  <div className="text-foreground/80 text-sm">
                    12 Coatbridge Crescent<br />
                    Parklands, Milnerton 7441<br />
                    Cape Town
                  </div>
                </div>
              </li>
              <li className="flex gap-4 p-4 border-b border-border">
                <div className="w-10 h-10 border border-border/50 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="label text-muted-foreground mb-1">WhatsApp</div>
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                    078 862 0502
                  </Link>
                </div>
              </li>
              <li className="flex gap-4 p-4 border-b border-border">
                <div className="w-10 h-10 border border-border/50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="label text-muted-foreground mb-1">Hours</div>
                  <div className="text-foreground/80 text-sm">
                    Mon-Fri: 7AM - 6PM<br />
                    <span className="text-primary">24/7 Emergency</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground/60 text-xs">
              &copy; {new Date().getFullYear()} 3D Ceiling & Plumbings. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs">
              Proudly serving Cape Town and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
