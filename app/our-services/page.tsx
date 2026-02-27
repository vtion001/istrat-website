"use client"

import PartnerCarousel from "@/components/partner-carousel"
import ServiceHero from "@/components/services/ServiceHero"
import ServiceTabsDesktop from "@/components/services/ServiceTabsDesktop"
import ServiceAccordionMobile from "@/components/services/ServiceAccordionMobile"
import { ourServices, serviceDetails } from "@/data"
import { useServiceTabs } from "@/hooks/useServiceTabs"

export default function OurServicesPage() {
  const { activeTab, setActiveTab, openAccordion, toggleAccordion } = useServiceTabs(0)

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Section 1: Hero Section */}
      <ServiceHero />

      {/* Section 2: Services Tabs/Accordion */}
      {/* Section 2: Services Tabs/Accordion */}
      <section id="section2" className="min-h-screen flex flex-col w-full">
        {/* Desktop Tabs (Handles its own layout/widths) */}
        <ServiceTabsDesktop
          services={ourServices}
          serviceDetails={serviceDetails}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Mobile Accordion (Needs specific constraints) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <ServiceAccordionMobile
            services={ourServices}
            serviceDetails={serviceDetails}
            openAccordion={openAccordion}
            onToggle={toggleAccordion}
          />
        </div>
      </section>

      {/* Section 3: Clients Only - Partner Carousel */}
      <section id="section3" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">
          <p className="text-2xl md:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-[0.3em]">
            Trusted By Global Brands
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="block text-white">Clients Only</span>
          </h2>
          <PartnerCarousel />

          <div className="w-full mt-12">
            <div className="h-px w-full bg-gradient-to-r from-[#DC7026]/60 via-[#3C4699]/60 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  )
}
