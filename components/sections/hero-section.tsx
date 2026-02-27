"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface HeroSectionProps {
    title: string
    breadcrumb?: string
    backgroundImage?: string
    backgroundVideo?: string
    className?: string
}

export default function HeroSection({
    title,
    breadcrumb,
    backgroundImage,
    backgroundVideo,
    className = "",
}: HeroSectionProps) {
    const words = title.split(" ")
    const formattedBreadcrumb = breadcrumb || title.split(" ").join(" / ")

    return (
        <section className={`relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden ${className}`}>
            {/* Background Media */}
            {backgroundVideo && (
                <video
                    src={backgroundVideo}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-110 scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-110 scale-105"
                    priority
                />
            )}

            {/* Enhanced Overlays - Hero Brand Standard */}
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

            {/* Content - Left Aligned */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left max-w-5xl"
                >
                    <p className="text-[#DC7026] text-sm md:text-base tracking-[0.3em] font-bold mb-8 uppercase">
                        {formattedBreadcrumb}
                    </p>
                    <h1
                        id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                className="inline-block mr-4 md:mr-6"
                                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + (i * 0.15),
                                    ease: [0.2, 0.65, 0.3, 0.9]
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}
