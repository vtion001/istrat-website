"use client"

import Hero from "@/components/hero"
import FloatingNavbar from "@/components/floating-navbar"
import BentoGrid from "@/components/bento-grid"
import ClientTicker from "@/components/client-ticker"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Hero />
      <FloatingNavbar />
      <BentoGrid />
      <ClientTicker />
      <Footer />
    </main>
  )
}
