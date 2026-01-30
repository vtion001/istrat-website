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
      <a href="/" className="absolute top-[-2rem] md:top-[-10rem] w-full z-30 flex items-start justify-center px-4" aria-label="Go to Home">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            times: [0, 0.5, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="https://res.cloudinary.com/dbviya1rj/image/upload/v1766595309/nufdx6xpymsgxwth91zh.png"
            alt="iStrat Comms Logo"
            width={1200}
            height={480}
            className="h-[168px] md:h-[640px] w-auto opacity-100 object-contain object-top lg:-mb-52 mix-blend-screen"
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
        <source src="https://res.cloudinary.com/dbviya1rj/video/upload/q_auto:best,e_vibrance:50,e_contrast:30/v1766593270/floxsf1ztkxyxgtdjhcw.mp4" type="video/mp4" />
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
        {/* Main Headline - Synced to 8s Video Loop */}
        <motion.div
          variants={itemVariants}
          className="text-center w-full max-w-[90vw]"
          animate={{
            y: [0, -10, 0],
            x: [-3, 3, -3],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 8, // Exact sync with the 8s video duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h1
            className="font-bold leading-none mb-6 text-[#DC7026] text-5xl md:text-8xl lg:text-[110px] flex flex-wrap justify-center gap-x-6 md:gap-x-12"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {"LEAD. INFLUENCE. WIN.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(20px)", letterSpacing: "0.5em" }}
                animate={{
                  opacity: [0, 1, 1, 0.9, 1],
                  y: [40, 0, 0, 0, 0],
                  filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(1px)", "blur(0px)"],
                  letterSpacing: ["0.5em", "0.15em", "0.15em", "0.2em", "0.15em"],
                  textShadow: [
                    "0 0 0px rgba(220,112,38,0)",
                    "0 0 40px rgba(220,112,38,0.4)",
                    "0 0 20px rgba(220,112,38,0.2)",
                    "0 0 60px rgba(220,112,38,0.6)",
                    "0 0 40px rgba(220,112,38,0.4)"
                  ]
                }}
                transition={{
                  duration: 8, // Exact sync with the 8s video duration
                  repeat: Infinity,
                  delay: i * 0.15,
                  times: [0, 0.15, 0.4, 0.7, 1], // Entrance + Rhythmic pulse
                  ease: "easeInOut"
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

