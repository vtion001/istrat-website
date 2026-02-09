"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const longRoutes = ["/about-us", "/our-work"]
  const isLong = longRoutes.some((r) => pathname?.startsWith(r))
  const duration = isLong ? 0.8 : 0.5
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  )
}
