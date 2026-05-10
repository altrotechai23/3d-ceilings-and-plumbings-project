'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: 'Modern Office Ceiling',
    category: 'Commercial',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.32%20PM-aKk29heQrSUs0LM8JTUr83uhDcEYpd.jpeg',
    large: true,
  },
  {
    id: 2,
    title: 'Residential Ceiling Installation',
    category: 'Residential',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.21%20PM-Az7lVB8fH5ckDPFxKQgpYwKc7jfsqf.jpeg',
    large: false,
  },
  {
    id: 3,
    title: 'Drywall Partitioning',
    category: 'Commercial',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.23.49%20PM-Vcif7AjMDXTijoGW6WknLWhajH0ikn.jpeg',
    large: false,
  },
  {
    id: 4,
    title: 'Bathroom Renovation',
    category: 'Renovation',
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
    large: false,
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-09%20at%209.23.53%20PM-VKZU9B8oqbYlSPb0B38oaGPN9xEZun.mp4',
  },
  {
    id: 5,
    title: 'Commercial Plumbing',
    category: 'Plumbing',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    large: true,
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Our Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            >
              Showcasing Our{' '}
              <span className="text-gradient-green">Best Work</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.large ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <Link href="/projects" className="block">
                <div className={`relative ${project.large ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Video indicator */}
                  {project.video && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
