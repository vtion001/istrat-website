"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Our Vision", href: "/" },
  { label: "Who We Are", href: "/about-us" },
  { label: "Our Work", href: "/our-works" },
  { label: "Our Services", href: "/products-and-services" },
  { label: "Contact Us", href: "/connect-with-us" },
]

export default function FloatingNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-24 left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                      ? "bg-[#DC7026]/10 text-[#DC7026] border border-[#DC7026]/20"
                      : "text-white/80 hover:bg-white/10 hover:text-[#DC7026]"
                      }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] md:max-w-fit"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="px-4 py-3 border border-white/10 bg-black/80 backdrop-blur-2xl rounded-full shadow-lg flex items-center justify-between md:justify-center">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm uppercase tracking-widest transition-colors flex-shrink-0 rounded-full ${isActive ? "text-[#DC7026]" : "text-white/80 hover:text-[#DC7026]"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#DC7026]/10 rounded-full border border-[#DC7026]/20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#DC7026] bg-[#DC7026]/10 rounded-full border border-[#DC7026]/20 hover:bg-[#DC7026]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>
    </>
  )
}
