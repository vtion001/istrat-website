"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Works", href: "/our-works" },
  { label: "Products and Services", href: "/products-and-services" },
  { label: "Be Part of ISTRAT", href: "/be-part-of-istrat" },
  { label: "Connect With Us", href: "/connect-with-us" },
]

export default function FloatingNavbar() {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        className="px-2 py-2 border border-[#c59f43]/20 bg-[#0d1a2b]/80 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[95vw] overflow-x-auto no-scrollbar"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap px-2">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to Home"
            className="flex items-center flex-shrink-0 mr-4 pl-2"
          >
            <Image
              src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
              alt="ISTRAT logo"
              width={100}
              height={28}
              className="h-10 w-auto opacity-90"
              priority
            />
          </motion.a>
          
          <div className="h-6 w-px bg-white/10 mx-2 hidden md:block" />

          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-xs md:text-sm uppercase tracking-widest transition-colors flex-shrink-0 rounded-full ${
                  isActive ? "text-[#c59f43]" : "text-white/80 hover:text-[#c59f43]"
                }`}
                aria-current={isActive ? "page" : undefined}
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
      </motion.div>
    </motion.nav>
  )
}
