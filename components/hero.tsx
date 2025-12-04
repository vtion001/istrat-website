"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { ChevronDown } from "lucide-react"

const LiquidChrome = dynamic(() => import("./liquid-chrome"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-b from-slate-900 to-black" />,
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      <a href="/" className="absolute top-6 left-6 z-30" aria-label="Go to Home">
        <Image
          src="https://res.cloudinary.com/dbviya1rj/image/upload/v1764835951/yte8v4vubwe6cdvfncas.png"
          alt="ISTRAT logo"
          width={600}
          height={240}
          className="h-10 w-auto opacity-90 drop-shadow"
          priority
        />
      </a>
      {/* Three.js Liquid Chrome Background */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.p
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a0a0a0] mb-6"
            variants={itemVariants}
          >
            NEXT GENERATION CREATIVITY
          </motion.p>
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none mb-6"
            style={{ color: "#ffffff" }}
            variants={itemVariants}
          >
            ART + AMPLITUDE
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Where creative vision meets production excellence. We craft experiences that resonate.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          variants={itemVariants}
        >
          <ChevronDown className="w-6 h-6 text-[#ccff00]" />
        </motion.div>
      </motion.div>
    </div>
  )
}
import Image from "next/image"
