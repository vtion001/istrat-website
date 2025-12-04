"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Agency", href: "#agency" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
]

export default function FloatingNavbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        className="px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest text-white hover:text-[#ccff00] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
