import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://3dceilingandplumbings.co.za'),
  title: {
    default: '3D Ceiling & Plumbings | Premium Ceiling & Plumbing Solutions Cape Town',
    template: '%s | 3D Ceiling & Plumbings'
  },
  description: 'Cape Town\'s leading ceiling installation and plumbing specialists. Suspended ceilings, drywall, geyser installation, waterproofing, and emergency plumbing. WhatsApp us for a free quote!',
  keywords: [
    'Ceiling contractors Cape Town',
    'Plumbing services Cape Town',
    'Drywall installation Cape Town',
    'Emergency plumber Cape Town',
    'Suspended ceilings Cape Town',
    'Waterproofing services Cape Town',
    'Ceiling installation Milnerton',
    'Plumbing repairs Parklands',
    'Geyser installation',
    'Bulkheads Cape Town',
    'Cornices Cape Town'
  ],
  authors: [{ name: '3D Ceiling & Plumbings' }],
  creator: '3D Ceiling & Plumbings',
  publisher: '3D Ceiling & Plumbings',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://3dceilingandplumbings.co.za',
    siteName: '3D Ceiling & Plumbings',
    title: '3D Ceiling & Plumbings | Premium Ceiling & Plumbing Solutions Cape Town',
    description: 'Premium ceiling installation, drywall partitioning, and plumbing services in Cape Town. Expert craftsmanship for residential and commercial projects.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '3D Ceiling & Plumbings - Premium Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Ceiling & Plumbings | Premium Ceiling & Plumbing Solutions Cape Town',
    description: 'Premium ceiling installation, drywall partitioning, and plumbing services in Cape Town.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://3dceilingandplumbings.co.za',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "3D Ceiling & Plumbings",
              description: "Premium ceiling installation and plumbing services in Cape Town",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Coatbridge Crescent",
                addressLocality: "Parklands, Milnerton",
                postalCode: "7441",
                addressRegion: "Western Cape",
                addressCountry: "ZA",
              },
              telephone: "+27788620502",
              email: "Kilf750@gmail.com",
              url: "https://3dceilingandplumbings.co.za",
              areaServed: "Cape Town",
              serviceType: ["Ceiling Installation", "Plumbing", "Drywall", "Waterproofing"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              background: 'oklch(0.22 0.03 220)',
              border: '1px solid oklch(0.55 0.16 155 / 0.3)',
              color: 'oklch(0.98 0.005 145)',
            },
          }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
