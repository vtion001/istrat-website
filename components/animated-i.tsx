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
        <path
          d="M50,0 
             C72.09,0 90,17.91 90,40 
             S72.09,80 50,80 
             c-4,0 -4,14 -4,18 
             0,4 0,18 4,18 
             22.09,0 40,17.91 40,40 
             v124 
             c0,22.09 -17.91,40 -40,40 
             S10,302.09 10,280 
             V156 
             c0,-22.09 17.91,-40 40,-40 
             4,0 4,-14 4,-18 
             0,-4 0,-18 -4,-18 
             C27.91,80 10,62.09 10,40 
             10,17.91 27.91,0 50,0 
             Z"
          fill={color}
        />
      </motion.svg>
    </motion.div>
  )
}
