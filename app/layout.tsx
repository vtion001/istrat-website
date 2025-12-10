import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import FloatingNavbar from "@/components/floating-navbar"
import PageTransition from "@/components/page-transition"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ART + AMPLITUDE | Creative & Production Agency",
  description: "Award-winning luxury creative and production agency for visionary brands",
  generator: "v0.app",
  metadataBase: new URL("https://www.istratmc.com"),
  keywords: [
    "iStrat",
    "Creative Agency",
    "Event Production",
    "Digital Marketing",
    "Public Relations",
    "Brand Strategy",
  ],
  openGraph: {
    title: "ART + AMPLITUDE | Creative & Production Agency",
    description: "Award-winning luxury creative and production agency for visionary brands",
    url: "https://www.istratmc.com",
    siteName: "ART + AMPLITUDE",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png",
        width: 1200,
        height: 630,
        alt: "ISTRAT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ART + AMPLITUDE | Creative & Production Agency",
    description: "Award-winning luxury creative and production agency for visionary brands",
    images: ["https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"],
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png",
        type: "image/png",
      },
    ],
    apple: "https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ART + AMPLITUDE',
            url: 'https://www.istratmc.com',
            logo: 'https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png',
            sameAs: [
              'https://www.instagram.com',
              'https://www.twitter.com',
              'https://www.linkedin.com',
            ],
            contactPoint: [{
              '@type': 'ContactPoint',
              telephone: '+63-961-609-6008',
              contactType: 'customer service',
              areaServed: 'PH',
              availableLanguage: ['en'],
            }],
          }),
        }} />
      </head>
      <body className={`${inter.className} antialiased bg-[#0d1a2b]`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        <PageTransition>{children}</PageTransition>
        <FloatingNavbar />
        <Analytics />
      </body>
    </html>
  )
}
