/**
 * Contact Hero Component
 * Hero section for Contact Us page
 */

import Image from "next/image"

export default function ContactHero() {
    return (
        <section id="section1" className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
            <Image
                src="/images/services/connect-hero.svg"
                alt="Connect With Us"
                fill
                className="object-cover opacity-40 grayscale contrast-110 scale-105"
                priority
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="text-left max-w-5xl">
                    <p className="text-[#DC7026] text-xs md:text-sm tracking-[0.3em] font-bold mb-8 uppercase">Connect / With / Us</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                        Connect With Us
                    </h1>
                </div>
            </div>
        </section>
    )
}
