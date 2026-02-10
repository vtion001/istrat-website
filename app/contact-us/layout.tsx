import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with iStrat Comms for PR, events, and digital marketing inquiries. Visit our Quezon City office or send us a message to start your project.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us - Get in Touch with iStrat Comms",
    description: "Get in touch with iStrat Comms for PR, events, and digital marketing inquiries. Visit our Quezon City office or send us a message.",
    url: "/contact-us",
    type: "website",
  },
  twitter: {
    title: "Contact Us - Get in Touch with iStrat Comms",
    description: "Get in touch with iStrat Comms for PR, events, and digital marketing inquiries. Visit our Quezon City office or send us a message.",
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
