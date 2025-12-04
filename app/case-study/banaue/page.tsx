"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

export default function CaseStudyBanaue() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4">
            <Link href="/" className="text-xs uppercase tracking-widest text-[#a0a0a0] hover:text-white">← Back to Home</Link>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#a0a0a0] mb-4">Case Study • Cultural Initiative</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">BANAUE Composition Competition</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-3xl mb-12">A national-scale competition celebrating heritage through contemporary composition, produced with end-to-end creative, AV, and event orchestration.</p>

          <div className="relative w-full aspect-video border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden mb-12">
            <video
              className="w-full h-full object-cover"
              src={HERO_VIDEO}
              poster="https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png"
              title="BANAUE Composition Competition case study"
              preload="metadata"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ccff00]/10 to-[#00c2ff]/10" />
          </div>
        </motion.div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: 'BANAUE Composition Competition',
              description:
                'A national-scale competition celebrating heritage through contemporary composition, produced end-to-end.',
              url: 'https://www.istratmc.com/case-study/banaue',
              inLanguage: 'en',
              isPartOf: {
                '@type': 'WebSite',
                name: 'ART + AMPLITUDE',
                url: 'https://www.istratmc.com',
              },
              video: {
                '@type': 'VideoObject',
                name: 'BANAUE Competition Reel',
                thumbnailUrl:
                  'https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png',
                uploadDate: '2025-01-01',
                contentUrl:
                  'https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4',
              },
            }),
          }}
        />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Participants", value: "500+" },
            { label: "Reach", value: "2.3M" },
            { label: "Satisfaction", value: "95%" },
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
            <p className="text-[#a0a0a0]">Champion Filipino culture through a contemporary lens, designing a program and production that resonates with musicians, audiences, and institutions.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white">Approach</h2>
            <p className="text-[#a0a0a0]">End-to-end: program development, staging, audio engineering, motion graphics, stage management, and content operations across semi-finals and finals.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white">Impact</h2>
            <p className="text-[#a0a0a0]">Elevated awareness and institutional support for heritage initiatives, with strong community engagement and national media coverage.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-full aspect-square border border-white/10 bg-white/5">
                <Image src="https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png" alt="Production still" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#00c2ff]/0" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 flex items-center gap-4">
          <a href="mailto:info@istratmc.com" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#ccff00]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">Discuss a project<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
          <Link href="/#highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Back to Highlights</Link>
        </motion.div>
      </section>
    </main>
  )
}
