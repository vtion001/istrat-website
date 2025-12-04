"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">Page Not Found</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-2xl mb-8">The page you’re looking for does not exist. Explore our latest highlights and case studies.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#ccff00]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">Go Home</Link>
            <Link href="/#highlights" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-white/80 transition-colors">View Highlights</Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
