"use client"

import { motion } from "framer-motion"

export default function AnimatedI() {
  return (
    <motion.div
      className="inline-block mx-1"
      initial={{
        y: -400,
        opacity: 0,
        rotateZ: 180
      }}
      animate={{
        y: 0,
        opacity: 1,
        rotateZ: 0
      }}
      transition={{
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1], // bouncy easing in Framer Motion format
        delay: 0.3
      }}
    >
      <motion.svg
        viewBox="0 0 100 300"
        width="80"
        height="240"
        className="inline-block"
        animate={{
          rotateZ: [0, 3, -3, 0],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5 // starts after the falling animation completes
        }}
      >
        {/* Top circle */}
        <circle
          cx="50"
          cy="30"
          r="25"
          fill="#DC7026"
        />
        
        {/* Body - rounded rectangle */}
        <rect
          x="30"
          y="70"
          width="40"
          height="200"
          rx="20"
          fill="#DC7026"
        />
      </motion.svg>
    </motion.div>
  )
}
