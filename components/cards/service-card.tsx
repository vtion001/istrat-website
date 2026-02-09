"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceCardProps {
    title: string
    description: string
    image: string
    tag?: string
    href?: string
    className?: string
    delay?: number
}

export default function ServiceCard({
    title,
    description,
    image,
    tag = "SERVICE",
    href = "/our-services",
    className,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            className={`group relative rounded-[32px] overflow-hidden bg-[#080808] border border-white/5 flex flex-col h-[400px] hover:border-[#DC7026]/30 transition-all duration-300 transform-gpu ${className || ""}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -2 }}
        >
            {/* Stacked Visuals (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-3/5 h-4/5 pointer-events-none pr-4 pb-4">
                <div className="relative w-full h-full">
                    {/* Background Visual */}
                    <div className="absolute bottom-4 right-4 w-4/5 h-3/5 opacity-10 translate-x-4 translate-y-4 rotate-6 group-hover:rotate-12 transition-transform duration-700">
                        <Image src={image} alt="" fill className="object-contain grayscale" />
                    </div>
                    {/* Primary Visual */}
                    <div className="absolute bottom-0 right-0 w-4/5 h-3/5 opacity-40 translate-x-0 translate-y-0 rotate-3 group-hover:rotate-6 transition-transform duration-700 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#DC7026]/80 uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                            {tag}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-white leading-[1.2]">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-[220px] line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="mt-8">
                    <a
                        href={href}
                        className="inline-block px-6 py-2.5 rounded-full border border-white/15 text-[10px] font-bold text-white uppercase hover:bg-[#DC7026] hover:text-black hover:border-[#DC7026] transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
