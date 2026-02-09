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
      <section id="section2" className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        {/* Desktop Tabs */}
        <ServiceTabsDesktop
          services={ourServices}
          serviceDetails={serviceDetails}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Mobile Accordion */}
        <ServiceAccordionMobile
          services={ourServices}
          serviceDetails={serviceDetails}
          openAccordion={openAccordion}
          onToggle={toggleAccordion}
        />
      </section>

      {/* Section 3: Clients Only - Partner Carousel */}
      <section id="section3" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }}>
            Clients Only
          </h3>
          <PartnerCarousel />

          <div className="w-full mt-12">
            <div className="h-px w-full bg-gradient-to-r from-[#DC7026]/60 via-[#3C4699]/60 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  )
}
