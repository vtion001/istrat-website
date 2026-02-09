"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // GSAP SplitText removed to avoid conflict with TextPressure
  }, [])
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black">
      {/* Logo - Responsive sizing with better mobile positioning */}
      <a href="/" className="absolute top-4 sm:top-2 md:-top-8 w-full z-30 flex items-start justify-center px-4" aria-label="Go to Home">
        <motion.div
          animate={{
            scale: [1, 1.15, 1.15],
          }}
          transition={{
            duration: 6,
            times: [0, 0.5, 1],
            repeat: 0,
            ease: "easeInOut"
          }}
        >
          <Image
            src="https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png"
            alt="iStrat Comms Logo"
            width={1200}
            height={480}
            className="h-[80px] sm:h-[100px] md:h-[200px] lg:h-[300px] xl:h-[400px] w-auto opacity-100 object-contain object-top mix-blend-screen"
            priority
          />
        </motion.div>
      </a>

      {/* Cinematic High-Definition Video Background with Enhanced Color Pop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-top mix-blend-screen opacity-90 filter contrast-[1.4] brightness-[1.1] saturate-[1.3]"
      >
        <source src="https://res.cloudinary.com/dbviya1rj/video/upload/v1769732555/apjuunxsxqx1wlwwgqqj.mp4" type="video/mp4" />
      </video>

      {/* Aesthetic Overlays (To mask pixelation and deepen blacks) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Layer 1: Micro-Grain (Masks compression artifacts) */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Layer 2: 70% Dark Overlay for Premium Cinematic Feel */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Layer 3: Black Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline - Replaced with SVG - Better responsive sizing */}
        <div
          ref={wrapperRef}
          className="text-center w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] flex items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dbviya1rj/image/upload/v1770678223/z5zirztxoaw1hqlibn3o.svg"
            alt="Lead. Influence. Win."
            width={1200}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Scroll Indicator - Better mobile positioning */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          variants={itemVariants}
        >
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#DC7026]" />
        </motion.div>
      </motion.div>
    </div >
  )
}

