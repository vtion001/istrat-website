/**
 * useTextPressureAnimation Hook
 * Manages mouse tracking and character animation for text-pressure effect
 */

import { useEffect, useRef } from "react"
import { dist, getFontVariationSettings, getOpacity } from "@/lib/text-pressure-utils"

interface UseTextPressureAnimationProps {
    width: boolean
    weight: boolean
    italic: boolean
    alpha: boolean
    charsLength: number
}

export function useTextPressureAnimation({
    width,
    weight,
    italic,
    alpha,
    charsLength,
}: UseTextPressureAnimationProps) {
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const spansRef = useRef<(HTMLSpanElement | null)[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const cursorRef = useRef({ x: 0, y: 0 })

    // Mouse/Touch tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorRef.current.x = e.clientX
            cursorRef.current.y = e.clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0]
            cursorRef.current.x = t.clientX
            cursorRef.current.y = t.clientY
        }

        if (typeof window !== "undefined") {
            window.addEventListener("mousemove", handleMouseMove)
            window.addEventListener("touchmove", handleTouchMove, { passive: false })
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("mousemove", handleMouseMove)
                window.removeEventListener("touchmove", handleTouchMove)
            }
        }
    }, [])

    // Animation loop
    useEffect(() => {
        let rafId: number

        const animate = () => {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15

            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect()
                const maxDist = titleRect.width / 2

                spansRef.current.forEach(span => {
                    if (!span) return

                    const rect = span.getBoundingClientRect()
                    const charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2,
                    }

                    const d = dist(mouseRef.current, charCenter)

                    const fontVariation = getFontVariationSettings(d, maxDist, width, weight, italic)
                    const opacity = getOpacity(d, maxDist, alpha)

                    span.style.opacity = opacity
                    span.style.fontVariationSettings = fontVariation
                })
            }

            rafId = requestAnimationFrame(animate)
        }

        animate()
        return () => cancelAnimationFrame(rafId)
    }, [width, weight, italic, alpha, charsLength])

    return {
        titleRef,
        spansRef,
        mouseRef,
        cursorRef,
    }
}
