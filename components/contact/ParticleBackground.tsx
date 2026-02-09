/**
 * Particle Background Component
 * Cinematic particle animation background for Contact section
 */

"use client"

import { motion } from "framer-motion"
import type { Particle } from "@/hooks/useParticleAnimation"

interface ParticleBackgroundProps {
    particles: Particle[]
}

export default function ParticleBackground({ particles }: ParticleBackgroundProps) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Main Throw Light */}
            <div className="absolute -top-[20%] -right-[10%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.08)_0%,transparent_60%)] blur-[100px]" />

            {/* Subtle Projector Beam lines */}
            <div
                className="absolute top-0 right-0 w-full h-full opacity-20"
                style={{
                    background: 'conic-gradient(from 240deg at 85% 35%, transparent 0deg, rgba(255,255,255,0.05) 15deg, transparent 30deg)'
                }}
            />

            {/* Micro-Dust Particles Drift */}
            <div className="absolute inset-0">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{
                            x: particle.x + "%",
                            y: particle.y + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-20%"],
                            x: [null, "-10%"],
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
