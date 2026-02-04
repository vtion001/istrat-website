"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

interface GSAPPanelScrollProps {
    children: React.ReactNode
    className?: string
}

export default function GSAPPanelScroll({ children, className = "" }: GSAPPanelScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Get all panels, but exclude ones with custom horizontal scrolling
        const allPanels = gsap.utils.toArray<HTMLElement>(".section")
        const panels = allPanels.filter(panel => !panel.hasAttribute("data-horizontal-scroll"))

        // Remove last panel from array (so it doesn't animate out)
        panels.pop()

        panels.forEach((panel) => {
            // Get the element holding the content inside the panel
            const innerpanel = panel.querySelector<HTMLElement>(".section-inner")
            if (!innerpanel) return

            // Get the Height of the content inside the panel
            const panelHeight = innerpanel.offsetHeight

            // Get the window height
            const windowHeight = window.innerHeight

            const difference = panelHeight - windowHeight

            // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling
            const fakeScrollRatio = difference > 0 ? difference / (difference + windowHeight) : 0

            // if we need to fake scroll (because the panel is taller than the window), add margin to bottom
            if (fakeScrollRatio) {
                panel.style.marginBottom = panelHeight * fakeScrollRatio + "px"
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "top top",
                    end: () => (fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top"),
                    pinSpacing: false,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                },
            })

            // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
            if (fakeScrollRatio) {
                tl.to(innerpanel, {
                    yPercent: -100,
                    y: window.innerHeight,
                    duration: 1 / (1 - fakeScrollRatio) - 1,
                    ease: "none",
                })
            }

            // Add a pause to let content be fully visible before animating out
            tl.to({}, { duration: 0.3 })
                .fromTo(panel, { scale: 1, opacity: 1 }, { scale: 0.9, opacity: 0.6, duration: 0.6 })
                .to(panel, {
                    opacity: 0,
                    duration: 0.1,
                })
        })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}
