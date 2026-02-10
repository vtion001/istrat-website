import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Meet the strategic minds behind iStrat Comms. Our team of PR experts and communications professionals in Quezon City delivers results-driven campaigns.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "Who We Are - About iStrat Comms",
    description: "Meet the strategic minds behind iStrat Comms. Our team of PR experts and communications professionals delivers results-driven campaigns.",
    url: "/about-us",
    type: "website",
  },
  twitter: {
    title: "Who We Are - About iStrat Comms",
    description: "Meet the strategic minds behind iStrat Comms. Our team of PR experts and communications professionals delivers results-driven campaigns.",
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
