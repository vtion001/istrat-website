/**
 * Custom hook for managing video filtering with GSAP Flip animations
 * Extracted from our-work/page.tsx for better separation of concerns
 */

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { Flip } from "gsap/dist/Flip"
import type { VideoData } from "@/data"
import { workCategories } from "@/data"

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip)
}

export function useVideoFilter(videos: Record<string, VideoData>) {
    const [activeFilter, setActiveFilter] = useState<string>("all")
    const gridRef = useRef<HTMLDivElement>(null)

    // Get filtered videos based on active category
    const getFilteredVideos = () => {
        const category = workCategories[activeFilter as keyof typeof workCategories]
        if (!category) return []

        return category.videos
            .map(title => ({ key: title, ...videos[title] }))
            .filter(video => video.src)
    }

    // GSAP Flip animation effect
    useEffect(() => {
        if (!gridRef.current) return

        const cards = gridRef.current.querySelectorAll("[data-video-card]")
        if (cards.length === 0) return

        // Capture the current state
        const state = Flip.getState(cards)

        // Update the filter (this happens in the component)
        // Then animate to the new state
        Flip.from(state, {
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.05,
            absolute: true,
            onEnter: (elements) => {
                gsap.fromTo(
                    elements,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.4 }
                )
            },
            onLeave: (elements) => {
                gsap.to(elements, { opacity: 0, scale: 0.8, duration: 0.3 })
            },
        })
    }, [activeFilter])

    return {
        activeFilter,
        setActiveFilter,
        filteredVideos: getFilteredVideos(),
        gridRef,
    }
}
