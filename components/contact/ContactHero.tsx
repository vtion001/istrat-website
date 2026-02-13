/**
 * Contact Hero Component
 * Hero section for Contact Us page
 */

export default function ContactHero() {
    return (
        <section id="section1" className="py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="text-left max-w-5xl">
                    <p className="text-[#DC7026] text-[10px] font-bold mb-6 sm:mb-8 uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                        Connect / With / Us
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                        Connect With Us
                    </h1>
                </div>
            </div>
        </section>
    )
}
