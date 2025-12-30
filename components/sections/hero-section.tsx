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
        <section className={`relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Media */}
            {backgroundVideo && (
                <video
                    src={backgroundVideo}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-105"
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
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-105"
                    priority
                />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[#DC7026] text-[10px] md:text-sm tracking-[0.4em] font-extrabold mb-6 uppercase">
                        {formattedBreadcrumb}
                    </p>
                    <h1
                        id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
                        className="text-5xl md:text-8xl font-bold tracking-tight mb-2 flex flex-wrap justify-center gap-x-4 md:gap-x-8"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.3 + (i * 0.2),
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
