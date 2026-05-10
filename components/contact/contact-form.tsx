'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { submitContactForm } from '@/app/actions/contact'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Ceiling Installation',
  'Drywall Partitioning',
  'Plumbing Repairs',
  'Geyser Installation',
  'Waterproofing',
  'Renovations',
  'Emergency Plumbing',
  'Other',
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(data)
      if (result.success) {
        setIsSuccess(true)
        toast.success('Message sent successfully! We will contact you soon.')
        reset()
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.')
      }
    } catch {
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground">
          Full Name <span className="text-primary">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register('name')}
          className="bg-secondary/50 border-border focus:border-primary h-12"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email Address <span className="text-primary">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className="bg-secondary/50 border-border focus:border-primary h-12"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Phone Number <span className="text-primary">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+27 12 345 6789"
            {...register('phone')}
            className="bg-secondary/50 border-border focus:border-primary h-12"
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-foreground">
          Service Needed <span className="text-primary">*</span>
        </Label>
        <select
          id="service"
          {...register('service')}
          className="w-full h-12 px-4 rounded-md bg-secondary/50 border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Message <span className="text-primary">*</span>
        </Label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          {...register('message')}
          className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : isSuccess ? (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center"
          >
            <CheckCircle className="mr-2 w-5 h-5" />
            Message Sent!
          </motion.span>
        ) : (
          <>
            <Send className="mr-2 w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
