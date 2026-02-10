import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore iStrat Comms' portfolio of successful PR campaigns, events, and digital projects. See how we deliver measurable results for our clients in the Philippines.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work - Case Studies & Portfolio",
    description: "Explore iStrat Comms' portfolio of successful PR campaigns, events, and digital projects with measurable results.",
    url: "/our-work",
    type: "website",
  },
  twitter: {
    title: "Our Work - Case Studies & Portfolio",
    description: "Explore iStrat Comms' portfolio of successful PR campaigns, events, and digital projects with measurable results.",
  },
}

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
