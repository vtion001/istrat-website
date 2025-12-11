"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const clients = ["Maersk", "SGV", "eRase", "V.Ships", "araLabs", "CP Fresh Shop"]

export default function ClientTicker() {
  return (
    <section className="w-full py-16 bg-[#0d1a2b] border-y border-white/10 overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {[...clients, ...clients].map((client, index) => {
          const color = "#c59f43"
          return (
            <div key={`${client}-${index}`} className="flex items-center gap-12 flex-shrink-0">
              <span className="text-2xl font-display font-bold text-[#c59f43] tracking-widest">{client}</span>
              <Star className="w-4 h-4" style={{ color, fill: color }} />
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
