'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Layers, Grid3X3, Wrench, Flame, Droplets, Hammer, Home, Building2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'ceilings',
    icon: Layers,
    title: 'Suspended Ceilings',
    description: 'Transform your space with our premium suspended ceiling installations. We work with various materials including gypsum, PVC, and acoustic panels to create stunning, functional ceilings for any environment.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.21%20PM-Az7lVB8fH5ckDPFxKQgpYwKc7jfsqf.jpeg',
    benefits: [
      'Professional installation with premium materials',
      'Acoustic and thermal insulation options',
      'Custom designs for any space',
      'Quick turnaround time',
    ],
    reverse: false,
  },
  {
    id: 'bulkheads',
    icon: Home,
    title: 'Bulkheads & Cornices',
    description: 'Add architectural elegance to your home or office with custom bulkheads and cornices. Our skilled craftsmen create seamless transitions between ceilings and walls, adding depth and character to any room.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.32%20PM-aKk29heQrSUs0LM8JTUr83uhDcEYpd.jpeg',
    benefits: [
      'Custom design options',
      'LED lighting integration',
      'Modern and classic styles',
      'Professional finishing',
    ],
    reverse: true,
  },
  {
    id: 'drywall',
    icon: Grid3X3,
    title: 'Drywall Systems',
    description: 'Professional drywall partitioning and installation for offices, homes, and commercial spaces. We create versatile, durable wall systems that meet your specific requirements for privacy, sound insulation, and aesthetics.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.23.49%20PM-Vcif7AjMDXTijoGW6WknLWhajH0ikn.jpeg',
    benefits: [
      'Fast, clean installation',
      'Soundproofing options available',
      'Fire-rated systems',
      'Minimal disruption to your space',
    ],
    reverse: false,
  },
  {
    id: 'plumbing',
    icon: Wrench,
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions for residential and commercial properties. From leak repairs and pipe installations to bathroom renovations, our licensed plumbers handle all your plumbing needs with expertise.',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      '24/7 emergency service',
      'Licensed and insured plumbers',
      'Competitive pricing',
      'Quality parts and materials',
    ],
    reverse: true,
  },
  {
    id: 'geyser',
    icon: Flame,
    title: 'Geyser Installation & Repairs',
    description: 'Expert geyser installation, maintenance, and repair services. We work with all major brands and provide energy-efficient solutions to keep your hot water running reliably and efficiently.',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'All major brands serviced',
      'Energy-efficient options',
      'Compliance certificates',
      'Fast emergency response',
    ],
    reverse: false,
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    title: 'Waterproofing Solutions',
    description: 'Protect your property from water damage with our comprehensive waterproofing services. We treat roofs, walls, foundations, and bathrooms using industry-leading products and techniques.',
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Long-lasting protection',
      'Multiple treatment options',
      'Preventive maintenance',
      'Warranty on all work',
    ],
    reverse: true,
  },
  {
    id: 'renovations',
    icon: Hammer,
    title: 'Renovations',
    description: 'Complete renovation services to transform your space. Whether it is a bathroom update, kitchen remodel, or full property renovation, we manage your project from start to finish with attention to detail.',
    image: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Full project management',
      'Quality materials',
      'Experienced craftsmen',
      'On-time delivery',
    ],
    reverse: false,
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Maintenance',
    description: 'Reliable maintenance services for commercial properties. We offer ongoing contracts and emergency call-outs to keep your business running smoothly with minimal downtime.',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
    benefits: [
      'Flexible maintenance contracts',
      'Priority emergency response',
      'Comprehensive inspections',
      'Cost-effective solutions',
    ],
    reverse: true,
  },
]

export function ServicesList() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                service.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${service.reverse ? 'lg:order-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${service.reverse ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
