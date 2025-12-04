"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { usePathname } from "next/navigation"

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
        className="px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-8">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to Home"
            className="flex items-center"
          >
            <img
              src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
              alt="ISTRAT logo"
              className="h-7 w-auto opacity-90"
            />
          </motion.a>
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`text-sm uppercase tracking-widest transition-colors ${pathname === item.href ? "text-[#ccff00]" : "text-white hover:text-[#ccff00]"}`}
              aria-current={pathname === item.href ? "page" : undefined}
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
