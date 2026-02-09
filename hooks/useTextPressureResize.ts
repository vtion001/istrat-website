/**
 * useTextPressureResize Hook
 * Manages font sizing and scaling for text-pressure component
 */

import { useState, useEffect, useRef } from "react"

interface UseTextPressureResizeProps {
    charsLength: number
    minFontSize: number
    charWidth: number
    scale: boolean
}

export function useTextPressureResize({
    charsLength,
    minFontSize,
    charWidth,
    scale,
}: UseTextPressureResizeProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)

    const [fontSize, setFontSize] = useState(minFontSize)
    const [scaleY, setScaleY] = useState(1)
    const [lineHeight, setLineHeight] = useState(1)

    const calculateSize = () => {
        if (!(containerRef.current && titleRef.current)) return

        const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()

        let newFontSize = containerW / (charsLength * charWidth)
        newFontSize = Math.max(newFontSize, minFontSize)

        setFontSize(newFontSize)
        setScaleY(1)
        setLineHeight(1)

        requestAnimationFrame(() => {
            if (!titleRef.current) return

            const textRect = titleRef.current.getBoundingClientRect()

            if (scale && textRect.height > 0) {
                const yRatio = containerH / textRect.height
                setScaleY(yRatio)
                setLineHeight(yRatio)
            }
        })
    }

    useEffect(() => {
        calculateSize()
        window.addEventListener("resize", calculateSize)
        return () => window.removeEventListener("resize", calculateSize)
    }, [scale, charsLength])

    return {
        containerRef,
        titleRef,
        fontSize,
        scaleY,
        lineHeight,
    }
}
