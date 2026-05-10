'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
      return { success: false, error: 'All fields are required' }
    }

    // If Resend API key is not configured, log and return success (for development)
    if (!process.env.RESEND_API_KEY) {
      console.log('Contact form submission:', data)
      return { success: true }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: '3D Ceiling and Plumbings <onboarding@resend.dev>',
      to: ['info@3dceilingandplumbings.co.za'],
      replyTo: data.email,
      subject: `New Quote Request: ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send email' }
    }

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
