/**
 * Work Hero Component
 * Hero section for Our Work page with video background
 */

"use client"

import VideoModal from "@/components/ui/video-modal"
import type { Video } from "@/data"

interface WorkHeroProps {
    heroVideo: Video
    isOpen: boolean
    onClose: () => void
}

export default function WorkHero({ heroVideo, isOpen, onClose }: WorkHeroProps) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <VideoModal
                videoKey={heroVideo.key}
                title={heroVideo.title}
                description={heroVideo.description}
                isHero={true}
                isOpen={isOpen}
                onClose={onClose}
            />
        </section>
    )
}
