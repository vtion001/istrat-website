/**
 * Work Hero Component
 * Hero section for Our Work page with video background
 */

"use client"

import VideoModal from "@/components/ui/video-modal"

interface WorkHeroProps {
    heroVideo: string
    isOpen: boolean
    onClose: () => void
}

export default function WorkHero({ heroVideo, isOpen, onClose }: WorkHeroProps) {
    return (
        <>
            <VideoModal
                video={{ src: heroVideo }}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}
