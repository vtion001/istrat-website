import type React from "react"
import type { Metadata } from "next"
import { Archivo, IBM_Plex_Sans_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import FloatingNavbar from "@/components/floating-navbar"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
})

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
})

export const metadata: Metadata = {
  title: {
    default: "iStrat Comms | Marketing & PR Agency in Quezon City",
    template: "%s | iStrat Comms - Quezon City",
  },
  description: "Leading integrated marketing and communications agency in Quezon City, Philippines. Specializing in Crisis PR, Event Management, and Digital Strategy for government and corporate brands.",
  generator: "Next.js",
  metadataBase: new URL("https://istrat-website-revamp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "iStrat Comms",
    "Marketing Agency Quezon City",
    "PR Agency Philippines",
    "Crisis Management QC",
    "Event Management Philippines",
    "Digital Marketing Agency QC",
    "Government PR Services",
    "Integrated Marketing Communications",
  ],
  openGraph: {
    title: "iStrat Comms | Strategic Marketing & PR Agency in Quezon City",
    description: "Partner with Quezon City's top communications agency. We deliver high-impact PR, events, and digital campaigns for visionary leaders.",
    url: "https://istrat-website-revamp.vercel.app",
    siteName: "iStrat Comms Inc.",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
        width: 1200,
        height: 630,
        alt: "iStrat Comms Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iStrat Comms | Marketing & PR Agency in Quezon City",
    description: "Premium integrated marketing agency in Quezon City. Crisis PR, Events, and Digital Comms.",
    images: ["https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png"],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
        type: "image/png",
      },
    ],
    apple: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'iStrat Comms Inc.',
            image: "https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png",
            '@id': 'https://istrat-website-revamp.vercel.app',
            url: 'https://istrat-website-revamp.vercel.app',
            telephone: '+63283561638',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Unit 301, Intramuros Corporate Plaza, Recoletos St.',
              addressLocality: 'Quezon City',
              addressRegion: 'Metro Manila',
              postalCode: '1109',
              addressCountry: 'PH'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 14.633,
              longitude: 120.97
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Quezon City'
              },
              {
                '@type': 'City',
                name: 'Metro Manila'
              }
            ],
            sameAs: [
              'https://www.facebook.com/iStratComms',
              'https://www.linkedin.com/company/istrat-comms-inc'
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              telephone: '+63-2-8356-1638',
              contactType: 'customer service',
              areaServed: 'PH',
              availableLanguage: ['en', 'tl'],
            }],
          }),
        }} />
      </head>
      <body className={`${ibmPlexSansCondensed.variable} ${archivo.variable} ${ibmPlexSansCondensed.className} antialiased`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
        <FloatingNavbar />
        <Analytics />
      </body>
    </html>
  )
}
