import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Strategic communications, crisis PR, event management, and digital marketing solutions. iStrat Comms delivers integrated campaigns for government and corporate brands.",
  alternates: {
    canonical: "/our-services",
  },
  openGraph: {
    title: "Our Services - Strategic Communications & PR Solutions",
    description: "Strategic communications, crisis PR, event management, and digital marketing solutions for government and corporate brands.",
    url: "/our-services",
    type: "website",
  },
  twitter: {
    title: "Our Services - Strategic Communications & PR Solutions",
    description: "Strategic communications, crisis PR, event management, and digital marketing solutions for government and corporate brands.",
  },
}

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
