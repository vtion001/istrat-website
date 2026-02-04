"use client"

import { motion } from "framer-motion"

interface AnimatedIProps {
  color?: string;
  className?: string;
}

export default function AnimatedI({ color = "#DC7026", className = "" }: AnimatedIProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
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
        ease: [0.34, 1.56, 0.64, 1], // bouncy easing
        delay: 0.3
      }}
    >
      <motion.svg
        viewBox="0 0 100 320"
        width="46"
        height="142"
        className="inline-block align-middle"
        animate={{
          rotateZ: [0, 3, -3, 0],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <motion.path
          d="M 50 0 
             A 45 45 0 1 1 88.97 67.5 
             C 88.97 80 70 90 56 90 
             C 70 90 88.97 100 88.97 112.5 
             A 45 45 0 0 1 95 138 
             V 275 
             A 45 45 0 0 1 5 275 
             V 138 
             A 45 45 0 0 1 11.03 112.5 
             C 11.03 100 30 90 44 90 
             C 30 90 11.03 80 11.03 67.5 
             A 45 45 0 0 1 50 0 
             Z"
          fill={color}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 1.5, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }
            }
          }}
        />
      </motion.svg>
    </motion.div>
  )
}
