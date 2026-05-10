'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Wallet, Shield, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'We deliver projects on time without compromising on quality. Your deadlines are our priority.',
  },
  {
    icon: Users,
    title: 'Experienced Professionals',
    description: 'Our team of skilled tradesmen brings years of expertise to every project we undertake.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Competitive rates with transparent pricing. No hidden costs or surprise fees.',
  },
  {
    icon: Shield,
    title: 'Guaranteed Workmanship',
    description: 'All our work comes with a quality guarantee. Your satisfaction is our commitment.',
  },
  {
    icon: Clock,
    title: 'Emergency Support',
    description: '24/7 emergency plumbing services available. We are here when you need us most.',
  },
  {
    icon: MapPin,
    title: 'Local Cape Town Specialists',
    description: 'Proudly serving Cape Town and surrounding areas with local expertise and knowledge.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, oklch(0.55 0.18 145 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Building Trust Through{' '}
            <span className="text-gradient-green">Quality & Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground text-pretty"
          >
            We combine years of experience with modern techniques to deliver 
            exceptional results that exceed expectations.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 group cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
