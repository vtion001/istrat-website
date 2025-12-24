"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

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
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <a href="/" className="absolute top-6 w-full z-30 flex items-center justify-center px-4" aria-label="Go to Home">
        <Image
          src="/images/istrat-comms-logo-transparent.png"
          alt="iStrat Comms Logo"
          width={1000}
          height={400}
          className="h-24 md:h-56 w-auto opacity-100 object-contain lg:-mb-14 mix-blend-screen"
          priority
        />
      </a>

      {/* Ultra HD Cinematic Video Background - Cropped to hide watermark */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 origin-top"
      >
        <source src="https://res.cloudinary.com/dbviya1rj/video/upload/q_auto:best/v1766593270/floxsf1ztkxyxgtdjhcw.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline with Rhythmic Floating Animation */}
        <motion.div
          variants={itemVariants}
          className="text-center w-full max-w-[90vw]"
          animate={{
            y: [0, -12, 0],
            rotate: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h1
            className="font-semibold tracking-[0.2em] leading-none mb-6 text-[#DC7026] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-4xl md:text-7xl lg:text-[90px] flex flex-wrap justify-center gap-x-4 md:gap-x-8"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {"IMAGINE. LIVE. SOAR.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 2,
                  delay: 0.8 + (i * 0.4),
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
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

