"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

export default function CaseStudySGV() {
  return (
    <main id="main" className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div id="top" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4">
            <Link href="/" className="text-xs uppercase tracking-widest text-[#a0a0a0] hover:text-white">← Back to Home</Link>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#a0a0a0] mb-4">Case Study • Corporate Event</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">SGV Got Talent</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-3xl mb-12">A high-energy talent showcase for a leading professional services firm, produced with premium staging, live content, and audience engagement.</p>

          <div className="relative w-full aspect-video border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden mb-12">
            <video
              className="w-full h-full object-cover"
              src={HERO_VIDEO}
              poster="https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png"
              title="SGV Got Talent case study"
              preload="metadata"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c59f43]/10 to-[#0d71a3]/10" />
          </div>
        </motion.div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: 'SGV Got Talent',
              description:
                'A high-energy corporate talent showcase produced with premium staging, live content, and engagement.',
              url: 'https://www.istratmc.com/case-study/sgv',
              inLanguage: 'en',
              isPartOf: {
                '@type': 'WebSite',
                name: 'ART + AMPLITUDE',
                url: 'https://www.istratmc.com',
              },
              video: {
                '@type': 'VideoObject',
                name: 'SGV Got Talent Reel',
                thumbnailUrl:
                  'https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png',
                uploadDate: '2025-01-01',
                contentUrl:
                  'https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4',
              },
            }),
          }}
        />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Attendees", value: "1,200+" },
            { label: "Engagement", value: "+42%" },
            { label: "Satisfaction", value: "96%" },
          ].map((kpi) => (
            <div key={kpi.label} className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-2">{kpi.label}</p>
              <p className="text-3xl font-display text-white">{kpi.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white">Objectives</h2>
            <p className="text-[#a0a0a0]">Deliver a polished corporate showcase with seamless flow, AV integration, and interactive audience experience, aligned with brand standards.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white">Approach</h2>
            <p className="text-[#a0a0a0]">Comprehensive production: stage and set design, lighting, sound, motion graphics, and live content operations with precise stage management.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white">Impact</h2>
            <p className="text-[#a0a0a0]">Boosted internal morale and brand equity with exceptional satisfaction and measurable engagement uplift.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-full aspect-square border border-white/10 bg-white/5">
                <Image src="https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png" alt="Production still" fill className="object-cover opacity-90" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c59f43]/0 to-[#0d71a3]/0" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 flex items-center gap-4">
          <a href="mailto:info@istratmc.com" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#c59f43]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#c59f43] transition-colors">Discuss a project<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
          <Link href="/#highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Back to Highlights</Link>
        </motion.div>
        <Link href="#top" className="fixed bottom-6 right-6 px-4 py-3 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Back to Top</Link>
      </section>
    </main>
  )
}
