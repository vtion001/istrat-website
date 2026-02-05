"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import AnimatedI from "./animated-i"
import { useEffect, useRef } from "react"
import TextPressure from "./ui/text-pressure"

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
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <a href="/" className="absolute top-2 md:-top-8 w-full z-30 flex items-start justify-center px-4" aria-label="Go to Home">
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
            className="h-[120px] md:h-[400px] w-auto opacity-100 object-contain object-top lg:mb-0 mix-blend-screen"
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
        className="absolute inset-0 w-full h-full object-cover object-top mix-blend-screen opacity-90 filter contrast-[1.4] brightness-[1.1] saturate-[1.3]"
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
        className="relative z-20 h-full flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline - Matches exactly the provided photo */}
        <div
          ref={wrapperRef}
          className="Horizontal text-center w-full max-w-[95vw]"
        >
          <h1
            ref={textRef}
            className="font-bold leading-none mb-6 text-[#DC7026] text-5xl md:text-8xl lg:text-[110px] flex flex-wrap items-end justify-center gap-x-5 md:gap-x-10 gap-y-4"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            <div className="h-[110px] w-[200px] md:h-[135px] md:w-[280px] relative inline-block">
              <TextPressure
                text="LEAD"
                fontFamily="var(--font-archivo)"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#DC7026"
                minFontSize={36}
                charWidth={0.8}
              />
            </div>
            <span className="inline-block text-[#DC7026] scale-150 relative bottom-[40px] md:bottom-[60px] mx-4">.</span>
            <span className="inline-flex items-center">
              <AnimatedI color="#DC7026" className="mr-5 md:mr-10 rotate-3 -translate-y-1" />
              <div className="h-[110px] w-[400px] md:h-[135px] md:w-[560px] relative inline-block">
                <TextPressure
                  text="NFLUENCE"
                  fontFamily="var(--font-archivo)"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#DC7026"
                  minFontSize={36}
                  charWidth={0.8}
                />
              </div>
            </span>
            <span className="inline-block text-[#DC7026] scale-150 relative bottom-[40px] md:bottom-[60px] mx-4">.</span>
            <span className="inline-flex items-center">
              <div className="h-[110px] w-[50px] md:h-[135px] md:w-[70px] relative inline-block">
                <TextPressure
                  text="W"
                  fontFamily="var(--font-archivo)"
                  flex={false}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#DC7026"
                  minFontSize={36}
                  charWidth={0.8}
                />
              </div>
              <AnimatedI color="#3C4699" className="mx-5 md:mx-10 rotate-3 -translate-y-1" />
              <div className="h-[110px] w-[50px] md:h-[135px] md:w-[70px] relative inline-block">
                <TextPressure
                  text="N"
                  fontFamily="var(--font-archivo)"
                  flex={false}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#DC7026"
                  minFontSize={36}
                  charWidth={0.8}
                />
              </div>
            </span>
          </h1>
        </div>

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

