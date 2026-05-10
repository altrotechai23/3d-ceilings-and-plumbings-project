'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What areas do you service?',
    answer: 'We proudly serve Cape Town and all surrounding areas including the Southern Suburbs, Northern Suburbs, Atlantic Seaboard, and Cape Winelands. Contact us to confirm service availability in your specific location.',
  },
  {
    question: 'Do you offer free quotes?',
    answer: 'Yes! We provide free, no-obligation quotes for all our services. Simply contact us via phone, WhatsApp, or our online form, and we will schedule a convenient time to assess your project.',
  },
  {
    question: 'How long does a ceiling installation take?',
    answer: 'Installation time depends on the size and complexity of the project. A standard room typically takes 1-2 days, while larger commercial projects may take longer. We will provide a detailed timeline during your consultation.',
  },
  {
    question: 'Do you handle emergency plumbing?',
    answer: 'Absolutely! We offer 24/7 emergency plumbing services for urgent issues like burst pipes, major leaks, and blocked drains. Call our emergency line anytime and we will respond as quickly as possible.',
  },
  {
    question: 'What materials do you use for ceilings?',
    answer: 'We work with a variety of high-quality materials including gypsum board, PVC panels, mineral fiber tiles, and acoustic panels. We will recommend the best option based on your needs, budget, and aesthetic preferences.',
  },
  {
    question: 'Are your services guaranteed?',
    answer: 'Yes, all our work comes with a quality guarantee. We stand behind our craftsmanship and use only premium materials. If any issues arise after installation, we will address them promptly at no additional cost.',
  },
  {
    question: 'Can you help with building plans and compliance?',
    answer: 'While we focus on installation and construction, we can guide you on compliance requirements and connect you with trusted professionals for plans and permits if needed.',
  },
  {
    question: 'How do I prepare for a ceiling or plumbing project?',
    answer: 'We will provide specific preparation guidelines based on your project. Generally, we recommend clearing the work area and ensuring access for our team. We take care to protect your furniture and flooring during work.',
  },
]

export function ServicesFAQ() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Frequently Asked <span className="text-gradient-green">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Got questions? We have answers. If you don&apos;t find what you&apos;re looking for, 
              feel free to contact us directly.
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
