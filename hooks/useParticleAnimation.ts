/**
 * Custom hook for managing particle animation state
 * Extracted from contact-us/page.tsx for better separation of concerns
 */

import { useState, useEffect } from "react"

export interface Particle {
    x: number
    y: number
    duration: number
    delay: number
}

export function useParticleAnimation(count: number = 6) {
    const [particles, setParticles] = useState<Particle[]>([])

    // Generate random particles only on client side
    useEffect(() => {
        setParticles(
            [...Array(count)].map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: 10 + Math.random() * 20,
                delay: Math.random() * 10
            }))
        )
    }, [count])

    return particles
}
