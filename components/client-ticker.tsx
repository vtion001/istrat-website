"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const clients = ["Maersk", "SGV", "eRase", "V.Ships", "araLabs", "CP Fresh Shop"]

export default function ClientTicker() {
  return (
    <section className="w-full py-16 bg-black border-y border-white/10 overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, index) => {
          const color = "#DC7026"
          return (
            <div key={`${client}-${index}`} className="flex items-center gap-12 flex-shrink-0">
              <span className="text-2xl font-bold text-[#DC7026] tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>{client}</span>
              <Star className="w-4 h-4" style={{ color, fill: color }} />
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
