'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'ceilings', label: 'Ceilings' },
  { id: 'plumbing', label: 'Plumbing' },
  { id: 'renovations', label: 'Renovations' },
]

const projects = [
  {
    id: 1,
    title: 'Modern Office Ceiling',
    category: 'commercial',
    tags: ['ceilings', 'commercial'],
    location: 'Claremont, Cape Town',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.32%20PM-aKk29heQrSUs0LM8JTUr83uhDcEYpd.jpeg',
    description: 'Complete suspended ceiling installation for a modern office space with integrated lighting.',
  },
  {
    id: 2,
    title: 'Residential Ceiling Installation',
    category: 'residential',
    tags: ['ceilings', 'residential'],
    location: 'Constantia, Cape Town',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.22.21%20PM-Az7lVB8fH5ckDPFxKQgpYwKc7jfsqf.jpeg',
    description: 'Premium plastered ceiling with smooth finish for residential property.',
  },
  {
    id: 3,
    title: 'Drywall Partitioning Project',
    category: 'commercial',
    tags: ['ceilings', 'commercial'],
    location: 'Sea Point, Cape Town',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%209.23.49%20PM-Vcif7AjMDXTijoGW6WknLWhajH0ikn.jpeg',
    description: 'Professional drywall installation with expert finishing.',
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-09%20at%209.23.53%20PM-VKZU9B8oqbYlSPb0B38oaGPN9xEZun.mp4',
  },
  {
    id: 4,
    title: 'Commercial Plumbing Installation',
    category: 'commercial',
    tags: ['plumbing', 'commercial'],
    location: 'Cape Town CBD',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full plumbing system installation for a commercial building.',
  },
  {
    id: 5,
    title: 'Bathroom Renovation',
    category: 'residential',
    tags: ['plumbing', 'renovations', 'residential'],
    location: 'Camps Bay, Cape Town',
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete bathroom renovation with modern fixtures and waterproofing.',
  },
  {
    id: 6,
    title: 'Geyser Installation',
    category: 'residential',
    tags: ['plumbing', 'residential'],
    location: 'Pinelands, Cape Town',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Solar geyser installation with compliance certificate.',
  },
  {
    id: 7,
    title: 'Office Complex Renovation',
    category: 'commercial',
    tags: ['ceilings', 'renovations', 'commercial'],
    location: 'Century City, Cape Town',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full office renovation including ceilings, partitions, and lighting.',
  },
  {
    id: 8,
    title: 'Residential Waterproofing',
    category: 'residential',
    tags: ['renovations', 'residential'],
    location: 'Hout Bay, Cape Town',
    image: 'https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive waterproofing treatment for roof and walls.',
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<typeof projects[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'all' ||
      project.category === activeCategory ||
      project.tags.includes(activeCategory)
  )

  const openLightbox = (project: typeof projects[0], index: number) => {
    setCurrentProject(project)
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentProject(null)
    document.body.style.overflow = 'unset'
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % filteredProjects.length
        : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    setCurrentIndex(newIndex)
    setCurrentProject(filteredProjects[newIndex])
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(project, index)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Video indicator */}
                  {project.video && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                    </div>
                  )}

                  {/* Zoom indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/0 group-hover:bg-primary/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-xs font-medium mb-3 capitalize">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>

                  {/* Hover border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden glass-card">
                {currentProject.video ? (
                  <video
                    src={currentProject.video}
                    controls
                    autoPlay
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
                      {currentProject.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{currentProject.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {currentProject.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
