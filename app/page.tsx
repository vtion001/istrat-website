"use client"

import Hero from "@/components/hero"
import HomeTagline from "@/components/home/HomeTagline"
import HomeVision from "@/components/home/HomeVision"
import HomeMission from "@/components/home/HomeMission"
import HomeCoreValues from "@/components/home/HomeCoreValues"

export default function Home() {
  return (
    <main id="main" className="w-full overflow-x-hidden bg-black text-white">
      {/* Section 1: Hero */}
      <section id="section1" className="min-h-screen">
        <Hero />
      </section>

      {/* Section 2: Tagline */}
      <HomeTagline />

      {/* Section 3: The Vision */}
      <HomeVision />

      {/* Section 4: Our Mission */}
      <HomeMission />

      {/* Section 5: Core Values */}
      <HomeCoreValues />
    </main>
  )
}
