/**
 * Service Hero Component
 * Hero section for Our Services page
 */

export default function ServiceHero() {
    return (
        <section id="section1" className="relative min-h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-16 sm:py-0">
                <div className="text-left max-w-5xl">
                    <p className="text-[#DC7026] text-[10px] font-bold mb-6 sm:mb-8 uppercase tracking-[0.3em]">How We Help You Win</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="block text-white">
                            We Don't Follow Conversations.
                        </span>
                        <span className="block text-[#DC7026] mt-3 sm:mt-4">
                            We Shape Them.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mt-6 sm:mt-8 max-w-3xl leading-relaxed">
                        For 32 years, we've delivered strategic communications that build influence, shape narratives, and drive measurable results for government and corporate leaders.
                    </p>
                </div>
            </div>
        </section>
    )
}
