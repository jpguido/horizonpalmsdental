import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { businessConfig } from '@/lib/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${businessConfig.name} | Family Dentistry in Lake Worth, FL`,
    template: `%s | ${businessConfig.name}`
  },
  description: `Experience personalized family dental care in Lake Worth, FL. Dr. Linda Nguyen provides comprehensive dental services including preventive care, cosmetic dentistry, and emergency visits. Call ${businessConfig.phone.office}.`,
  keywords: [
    'dentist Lake Worth',
    'family dentistry West Palm Beach',
    'emergency dentist 33462',
    'Dr. Linda Nguyen',
    'Horizon Palms Family Dentistry',
    'Lake Worth dental care',
    'West Palm Beach family dentist',
    'cosmetic dentistry Lake Worth',
    'preventive dental care',
    'root canals Lake Worth',
    'dental implants West Palm Beach'
  ],
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://horizonpalmsdental.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${businessConfig.name} | Family Dentistry in Lake Worth, FL`,
    description: `Experience personalized family dental care in Lake Worth, FL. Dr. Linda Nguyen provides comprehensive dental services including preventive care, cosmetic dentistry, and emergency visits. Call ${businessConfig.phone.office}.`,
    url: 'https://horizonpalmsdental.com',
    siteName: businessConfig.name,
    images: [
      {
        url: 'https://horizonpalmsdental.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Horizon Palms Family Dentistry - Your Family Smile Destination',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessConfig.name} | Family Dentistry in Lake Worth, FL`,
    description: `Experience personalized family dental care in Lake Worth, FL. Dr. Linda Nguyen provides comprehensive dental services including preventive care, cosmetic dentistry, and emergency visits. Call ${businessConfig.phone.office}.`,
    images: ['https://horizonpalmsdental.com/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org markup for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessConfig.name,
              "legalName": businessConfig.legalName,
              "description": "Family dentistry practice in Lake Worth, FL providing comprehensive dental care including preventive, cosmetic, and emergency services.",
              "url": "https://horizonpalmsdental.com",
              "telephone": businessConfig.phone.office,
              "email": businessConfig.email,
              "address": {
                "streetAddress": businessConfig.address.street,
                "addressLocality": businessConfig.address.city,
                "addressRegion": businessConfig.address.state,
                "postalCode": businessConfig.address.zipCode,
                "addressCountry": "US"
              },
              "geo": {
                "latitude": 26.6168,
                "longitude": -80.0684
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Tuesday",
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Wednesday",
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Thursday",
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "08:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Check, Insurance",
              "currenciesAccepted": "USD",
              "hasMap": "https://maps.google.com/?q=5909+S+Congress+Ave+Lake+Worth+FL+33462",
              "sameAs": [
                "https://www.facebook.com/horizonpalmsdental",
                "https://www.instagram.com/horizonpalmsdental",
                "https://www.google.com/search?q=Horizon+Palms+Family+Dentistry"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />
        
        {/* Dentist Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr. Linda Nguyen",
              "jobTitle": "General Dentist",
              "worksFor": {
                "@type": "LocalBusiness",
                "name": businessConfig.name
              },
              "alumniOf": [
                "Virginia Commonwealth University",
                "NYU Langone Health"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": businessConfig.address.street,
                "addressLocality": businessConfig.address.city,
                "addressRegion": businessConfig.address.state,
                "postalCode": businessConfig.address.zipCode,
                "addressCountry": "US"
              },
              "telephone": businessConfig.phone.office,
              "email": businessConfig.email,
              "medicalSpecialty": "General Dentistry"
            })
          }}
        />
        
        {/* Medical Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": businessConfig.name,
              "legalName": businessConfig.legalName,
              "description": "Family dentistry practice providing comprehensive dental care in Lake Worth, Florida",
              "url": "https://horizonpalmsdental.com",
              "telephone": businessConfig.phone.office,
              "email": businessConfig.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": businessConfig.address.street,
                "addressLocality": businessConfig.address.city,
                "addressRegion": businessConfig.address.state,
                "postalCode": businessConfig.address.zipCode,
                "addressCountry": "US"
              },
              "medicalSpecialty": "Dentistry",
              "services": businessConfig.services.map(service => service.name)
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}