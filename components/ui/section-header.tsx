"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
    title: string
    className?: string
    /** Font family CSS variable, defaults to --font-label */
    fontFamily?: string
    /** Enable word-by-word blur animation */
    animated?: boolean
}

export default function SectionHeader({
    title,
    className = "",
    fontFamily = "var(--font-label)",
    animated = true,
}: SectionHeaderProps) {
    if (!animated) {
        return (
            <h2
                className={`text-2xl md:text-3xl font-semibold tracking-[0.2em] mb-4 text-[#DC7026] ${className}`}
                style={{ fontFamily }}
            >
                {title}
            </h2>
        )
    }

    const words = title.split(" ")

    return (
        <motion.h2
            className={`text-2xl md:text-3xl font-semibold tracking-[0.2em] mb-4 text-[#DC7026] flex flex-wrap gap-x-4 ${className}`}
            style={{ fontFamily }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    )
}
