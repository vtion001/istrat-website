"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const HERO_VIDEO = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

export default function CaseStudyMaersk() {
  return (
    <main id="main" className="w-full overflow-x-hidden bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div id="top" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4">
            <Link href="/" className="text-xs uppercase tracking-widest text-[#a0a0a0] hover:text-white">← Back to Home</Link>
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#DC7026] mb-4">Case Study • Event Management</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">MNL GSC Pride Fiesta</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">A full-spectrum execution integrating stage, live visuals, audio, and on-site experience design to celebrate inclusion with global brand standards.</p>

          <div className="relative w-full aspect-video border border-white/5 bg-black rounded-[32px] overflow-hidden mb-12">
            <video
              className="w-full h-full object-cover"
              src={HERO_VIDEO}
              poster="https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png"
              title="MAERSK Pride Fiesta case study"
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
              name: 'MAERSK Pride Fiesta',
              description:
                'A full-spectrum execution integrating stage, live visuals, audio, and on-site experience design to celebrate inclusion with global brand standards.',
              url: 'https://www.istratmc.com/case-study/maersk',
              inLanguage: 'en',
              isPartOf: {
                '@type': 'WebSite',
                name: 'ART + AMPLITUDE',
                url: 'https://www.istratmc.com',
              },
              video: {
                '@type': 'VideoObject',
                name: 'MAERSK Pride Fiesta Reel',
                thumbnailUrl:
                  'https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png',
                uploadDate: '2025-01-01',
                contentUrl:
                  'https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4',
              },
            }),
          }}
        />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Attendees", value: "5,000+" },
            { label: "Engagement", value: "+38%" },
            { label: "Satisfaction", value: "97%" },
          ].map((kpi) => (
            <div key={kpi.label} className="p-8 border border-white/5 bg-black rounded-[32px]">
              <p className="text-xs uppercase tracking-widest text-[#DC7026] mb-2">{kpi.label}</p>
              <p className="text-3xl font-display text-white">{kpi.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-[#DC7026]">Objectives</h2>
            <p className="text-gray-300">Deliver an inclusive, high-energy brand event that aligns with global guidelines while resonating locally. Ensure seamless stage management, AV integration, and on-ground experience.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-[#DC7026]">Approach</h2>
            <p className="text-gray-300">We orchestrated end-to-end management: stage and set design, lighting, sound engineering, motion graphics, and live content operations. The team coordinated talent flow and audience engagement.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-[#DC7026]">Impact</h2>
            <p className="text-gray-300">Elevated brand perception with measurable engagement uplift and outstanding satisfaction scores. The event delivered a premium experience consistent with global luxury standards.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative w-full aspect-video border border-white/5 bg-black rounded-2xl overflow-hidden hover:border-[#DC7026]/30 transition-colors group">
                <Image src="https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png" alt="Event still" fill className="object-cover opacity-90 transition-transform group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC7026]/0 to-[#3C4699]/0 group-hover:from-[#DC7026]/15 group-hover:to-[#3C4699]/15 transition-all" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 flex items-center gap-4">
          <a href="mailto:info@istratmc.com" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#DC7026]/30 backdrop-blur-xl text-white hover:text-white hover:bg-[#DC7026] transition-colors">Discuss a project<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
          <Link href="/#highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Back to Highlights</Link>
        </motion.div>
        <Link href="#top" className="fixed bottom-6 right-6 px-4 py-3 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">Back to Top</Link>
      </section>
    </main>
  )
}
