"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import ThreeHero from "./three-hero"

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
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <a href="/" className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-4" aria-label="Go to Home">
        <Image
          src="https://res.cloudinary.com/dbviya1rj/image/upload/v1765954623/osachccvpb3g3v1untpi.png"
          alt="ISTRAT logo"
          width={600}
          height={240}
          className="h-24 md:h-40 w-auto opacity-90 drop-shadow"
          priority
        />
        <span className="text-[#555555] text-3xl md:text-5xl font-semibold drop-shadow-md mt-6 md:mt-14 -ml-3 md:-ml-6" style={{ fontFamily: 'var(--font-comfortaa)' }}>COMMS</span>
      </a>

      {/* 3D Background */}
      <ThreeHero />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50 z-10" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="text-center w-full max-w-[90vw]">
          <motion.h1
            className="font-semibold tracking-widest leading-none mb-6 text-[#DC7026] drop-shadow-2xl text-4xl md:text-7xl lg:text-[90px]"
            style={{ fontFamily: 'var(--font-label)' }}
            variants={itemVariants}
          >
            IMAGINE. LIVE. SOAR.
          </motion.h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          variants={itemVariants}
        >
          <ChevronDown className="w-6 h-6 text-[#DC7026]" />
        </motion.div>
      </motion.div>
    </div >
  )
}

