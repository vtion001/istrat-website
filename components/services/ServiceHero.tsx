/**
 * Service Hero Component
 * Hero section for Our Services page
 */

export default function ServiceHero() {
    return (
        <section id="section1" className="relative min-h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center overflow-hidden bg-black pt-32 sm:pt-8">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-16 sm:py-0 mt-12">
                <div className="text-center max-w-5xl mx-auto">
                    {/* 1. Top Section - White Label */}
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                        HOW WE HELP YOU WIN
                    </h3>

                    {/* 2. Middle Section - Orange Heading */}
                    <h2 className="text-[#DC7026] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-8 sm:mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="block">WE SHAPE NARRATIVES.</span>
                        <span className="block">WE BUILD INFLUENCE.</span>
                        <span className="block">WE DELIVER RESULTS.</span>
                    </h2>

                    {/* 3. Bottom Section - White Big Text (Description) */}
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                        32 YEARS OF STRATEGIC COMMUNICATIONS EXCELLENCE
                    </h2>
                </div>
            </div>
        </section>
    )
}
