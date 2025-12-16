"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Works", href: "/our-works" },
  { label: "Services", href: "/products-and-services" },
  { label: "Connect", href: "/connect-with-us" },
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
            className="fixed bottom-24 left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-[#0d1a2b]/95 backdrop-blur-3xl border border-[#c59f43]/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                      ? "bg-[#c59f43]/20 text-[#c59f43] border border-[#c59f43]/20"
                      : "text-white/80 hover:bg-white/5 hover:text-[#c59f43]"
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
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] md:max-w-fit"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="px-4 py-3 border border-[#c59f43]/20 bg-[#0d1a2b]/80 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between md:justify-center">

          {/* Logo (Visible on both, but refined for mobile) */}
          <a
            href="/"
            className="flex items-center flex-shrink-0 mr-4 pl-2"
            aria-label="Go to Home"
          >
            <Image
              src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
              alt="ISTRAT logo"
              width={100}
              height={28}
              className="h-8 md:h-10 w-auto opacity-90"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="h-6 w-px bg-white/10 mx-2" />
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm uppercase tracking-widest transition-colors flex-shrink-0 rounded-full ${isActive ? "text-[#c59f43]" : "text-white/80 hover:text-[#c59f43]"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#c59f43]/10 rounded-full border border-[#c59f43]/20"
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
            className="md:hidden p-2 text-[#c59f43] bg-[#c59f43]/10 rounded-full border border-[#c59f43]/20 hover:bg-[#c59f43]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>
    </>
  )
}
