"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function BePartOfIstratPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a0a0a0] mb-4">Imagine • Live • Soar</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">Be Part of ISTRAT</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl mb-12">
            Join a multidisciplinary team shaping communications, creative production, and digital experiences for visionary brands.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            { title: "Creative", desc: "Conceptual excellence across copy, design, and motion." },
            { title: "Production", desc: "From set to screen with technical mastery." },
            { title: "Digital", desc: "Strategy, content, growth and analytics." },
          ].map((item) => (
            <div key={item.title} className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white text-2xl font-display mb-2">{item.title}</p>
              <p className="text-[#a0a0a0]">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Rally Highlights
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            {
              title: "SBP Mayor Joy Belmonte Grand Rally",
              url: "https://www.youtube.com/watch?v=PuOxa_VdvJk",
              thumb: "https://i.ytimg.com/vi/PuOxa_VdvJk/maxresdefault.jpg",
            },
            {
              title: "SBP Rally Highlights",
              url: "https://www.youtube.com/watch?v=cGxDLx7dHbA",
              thumb: "https://i.ytimg.com/vi/cGxDLx7dHbA/maxresdefault.jpg",
            },
          ].map((v) => (
            <a key={v.title} href={v.url} target="_blank" rel="noreferrer" className="group block border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={v.thumb} alt={v.title} className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <p className="text-white text-sm font-medium">{v.title}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <a href="mailto:info@istratmc.com" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#ccff00]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">
            Apply or Collaborate
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </main>
  )
}
