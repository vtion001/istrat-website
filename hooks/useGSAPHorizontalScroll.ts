/**
 * useGSAPHorizontalScroll Hook
 * Creates horizontal scroll effect with section snapping using GSAP ScrollTrigger
 */

"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPHorizontalScroll(itemCount: number) {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current || !scrollRef.current) return

        const container = containerRef.current
        const scrollContainer = scrollRef.current

        // Calculate scroll distance based on number of items
        const scrollWidth = scrollContainer.scrollWidth
        const containerWidth = container.offsetWidth
        const scrollDistance = scrollWidth - containerWidth

        // Create horizontal scroll animation with snapping
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${scrollDistance * 1.5}`, // Extended for smoother snapping
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 1 / (itemCount - 1), // Snap to each section
                    duration: 0.5,
                    ease: "power2.inOut",
                },
            },
        })

        tl.to(scrollContainer, {
            x: -scrollDistance,
            ease: "none",
        })

        // Animate individual sections on scroll
        const sections = scrollContainer.querySelectorAll("[data-scroll-section]")
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                {
                    opacity: 0.4,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: tl,
                        start: "left 80%",
                        end: "left 20%",
                        scrub: true,
                    },
                }
            )
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [itemCount])

    return {
        containerRef,
        scrollRef,
    }
}
