"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ChevronDown } from "lucide-react"

const LiquidChrome = dynamic(() => import("./liquid-chrome"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0d1a2b]" />,
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0d1a2b]">
      <a href="/" className="absolute top-6 left-6 z-30" aria-label="Go to Home">
        <Image
          src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
          alt="ISTRAT logo"
          width={600}
          height={240}
          className="h-40 w-auto opacity-90 drop-shadow"
          priority
        />
      </a>

      {/* Background Map Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.istratmc.com/wp-content/uploads/2022/05/Map.jpg"
          alt="World Map Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-[#0d1a2b]/60 mix-blend-multiply" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a2b]/40 via-transparent to-[#0d1a2b]/60 z-10" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none mb-6 text-white drop-shadow-2xl"
            variants={itemVariants}
          >
            IMAGINE. LIVE. SOAR
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-display font-bold tracking-widest text-[#c59f43] mt-4"
            variants={itemVariants}
          >
            iStrat COMMS INC.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          variants={itemVariants}
        >
          <ChevronDown className="w-6 h-6 text-[#c59f43]" />
        </motion.div>
      </motion.div>
    </div>
  )
}
import Image from "next/image"
