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
      >
        <motion.path
          initial={{
            d: "M50,260 C65,260 75,270 75,290 C75,310 65,320 50,320 C35,320 25,310 25,290 C25,270 35,260 50,260 Z"
          }}
          animate={{
            d: [
              "M50,260 C65,260 75,270 75,290 C75,310 65,320 50,320 C35,320 25,310 25,290 C25,270 35,260 50,260 Z",

              // Phase 2: Growing Plant (sprout shape)
              "M50,100 C70,100 80,120 80,150 C80,180 80,290 80,290 C80,310 70,320 50,320 C30,320 20,310 20,290 C20,290 20,180 20,150 C20,120 30,100 50,100 Z",

              // Phase 3: Final Brand Icon (Pinched Hourglass)
              "M50,0 C75,0 95,20 95,45 C95,68 80,85 62,88 Q55,90 62,92 C80,95 95,112 95,135 V275 C95,300 75,320 50,320 C25,320 5,300 5,275 V135 C5,112 20,95 38,92 Q45,90 38,88 C20,85 5,68 5,45 C5,20 25,0 50,0 Z"
            ]
          }}
          fill={color}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.4, 1]
          }}
        />
      </motion.svg>
    </motion.div>
  )
}
