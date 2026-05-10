'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, MessageCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const whatsappNumber = '27788620502'
const whatsappMessage = encodeURIComponent("Hi! I'm interested in your ceiling and plumbing services. Can you provide more information?")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const businessHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export function ContactSection() {
  return (
    <section className="py-12 md:py-20 pb-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center mb-12"
          >
            <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us on WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The fastest way to reach us! Send us a message on WhatsApp and we&apos;ll respond within minutes during business hours.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-lg px-10 h-14 shadow-lg shadow-[#25D366]/30"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              078 862 0502
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emergency Banner */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border-l-4 border-l-destructive"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Emergency Service</h3>
                  <p className="text-muted-foreground mb-3">
                    Burst pipe or urgent plumbing issue? We offer 24/7 emergency support via WhatsApp.
                  </p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Emergency Line
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    12 Coatbridge Crescent<br />
                    Parklands, Milnerton<br />
                    7441, Cape Town<br />
                    South Africa
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    For documents and formal inquiries
                  </p>
                  <Link
                    href="mailto:Kilf750@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    Kilf750@gmail.com
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden mt-8"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.5!3d-33.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5!2sParklands%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1650000000000!5m2!1sen!2sza"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3D Ceiling and Plumbings Location - Parklands, Milnerton"
              className="opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
