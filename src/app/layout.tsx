import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Save Time Now with Done-For-You Web Design | SaveTime.Now',
  description: 'I build your high-converting, SEO-ready website so you can focus on clients—not code. Save Time Now.',
  keywords: 'Save Time Now, web design for busy entrepreneurs, done-for-you website service, professional website that saves time, hire web designer to build my site',
  authors: [{ name: 'imrulo.eth' }],
  creator: 'imrulo.eth',
  publisher: 'SaveTime.Now',
  openGraph: {
    title: 'Save Time Now with Done-For-You Web Design | SaveTime.Now',
    description: 'I build your high-converting, SEO-ready website so you can focus on clients—not code. Save Time Now.',
    url: 'https://savetime.now',
    siteName: 'SaveTime.Now',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Save Time Now with Done-For-You Web Design | SaveTime.Now',
    description: 'I build your high-converting, SEO-ready website so you can focus on clients—not code. Save Time Now.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SaveTime.Now',
  description: 'Done-for-you web design service for busy entrepreneurs',
  url: 'https://savetime.now',
  provider: {
    '@type': 'Person',
    name: 'imrulo.eth',
    email: 'imrulo.eth@proton.me',
  },
  serviceType: 'Web Design',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Design',
          description: 'Professional, SEO-optimized websites built from scratch',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}