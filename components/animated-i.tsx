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
        viewBox="0 0 120 300"
        width="96"
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
          cx="60"
          cy="35"
          r="28"
          fill="#DC7026"
        />
        
        {/* Body - smooth rounded shape */}
        <path
          d="M 40 85 Q 40 75, 50 75 L 70 75 Q 80 75, 80 85 L 80 270 Q 80 280, 70 280 L 50 280 Q 40 280, 40 270 Z"
          fill="#DC7026"
        />
      </motion.svg>
    </motion.div>
  )
}
