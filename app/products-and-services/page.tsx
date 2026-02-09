"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal"
import GooeyNav from "@/components/ui/gooey-nav"
import PartnerCarousel from "@/components/partner-carousel"

const services = [
  {
    title: "Strategic Communications & Advisory",
    category: "Strategic Counsel",
    description: "We don't just advise—we architect communication strategies that shape narratives, influence stakeholders, and drive measurable business outcomes for government and private sector leaders.",
    image: "/images/services/marketing.svg",
    height: "h-[500px]",
  },
  {
    title: "Public Relations & Media Influence",
    category: "Media Relations",
    description: "32 years of building credibility through earned media. We secure coverage that matters, manage reputations proactively, and turn media relationships into strategic assets.",
    image: "/images/services/pr.svg",
    height: "h-[550px]",
  },
  {
    title: "Brand Strategy & Positioning",
    category: "Brand Development",
    description: "From identity creation to market positioning—we build brands that command attention, earn trust, and deliver sustainable competitive advantage across all touchpoints.",
    image: "/images/services/design.svg",
    height: "h-[480px]",
  },
  {
    title: "Integrated Marketing Communications",
    category: "Full-Spectrum Marketing",
    description: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences that drive growth.",
    image: "/images/services/digital.svg",
    height: "h-[450px]",
  },
  {
    title: "Advocacy & Stakeholder Engagement",
    category: "Government Relations",
    description: "Trusted by government and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for meaningful social impact.",
    image: "/images/services/advocacy.svg",
    height: "h-[520px]",
  },
  {
    title: "Measurement, Analytics & Insights",
    category: "Data Intelligence",
    description: "DataFusion360 and proprietary analytics turn campaign performance into strategic intelligence. Real-time insights that inform decisions and optimize ROI.",
    image: "/images/services/marketing.svg",
    height: "h-[450px]",
  },
  {
    title: "Corporate & Brand Events Management",
    category: "Event Production",
    description: "Award-winning event execution using state-of-the-art AV technology. From concept to completion—we create brand moments that resonate and deliver impact.",
    image: "/images/services/events.svg",
    height: "h-[500px]",
  },
]

const serviceDetails: Record<string, { summary: string; points: string[]; metrics?: string }> = {
  "Strategic Communications & Advisory": {
    summary: "We architect communication strategies that shape narratives and influence outcomes. Our strategic counsel has guided government agencies, Fortune 500 companies, and advocacy organizations through transformation, crisis, and growth.",
    points: ["Executive positioning", "Narrative architecture", "Stakeholder mapping", "Crisis preparedness"],
    metrics: "32 years advising public and private sector leaders"
  },
  "Public Relations & Media Influence": {
    summary: "We build credibility proactively and protect reputation decisively. Our media relationships span national broadcast, digital, and print—earning coverage that shapes perception and drives outcomes.",
    points: ["Media relations strategy", "Press office operations", "Crisis communication", "Reputation management"],
    metrics: "86K+ followers on managed advocacy channels"
  },
  "Brand Strategy & Positioning": {
    summary: "From naming to visual identity to market positioning—we build brands that command attention and deliver sustainable competitive advantage. Our strategic approach ensures every touchpoint reinforces your brand promise.",
    points: ["Brand architecture", "Visual identity systems", "Positioning strategy", "Brand guidelines"],
    metrics: "Award-winning brand campaigns for government and corporate clients"
  },
  "Integrated Marketing Communications": {
    summary: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences across digital, broadcast, print, and live events.",
    points: ["Campaign strategy", "Channel orchestration", "Creative execution", "Performance optimization"],
    metrics: "1M+ followers on managed government social media accounts"
  },
  "Advocacy & Stakeholder Engagement": {
    summary: "Trusted by government agencies and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for social impact. We turn stakeholders into advocates.",
    points: ["Government relations", "Coalition building", "Community engagement", "Policy communication"],
    metrics: "Trusted partner for Quezon City government advocacy initiatives"
  },
  "Measurement, Analytics & Insights": {
    summary: "Our proprietary DataFusion360 platform and analytics expertise turn campaign performance into strategic intelligence. Real-time insights that inform decisions, optimize spend, and prove ROI.",
    points: ["Campaign analytics", "Social listening", "Sentiment analysis", "ROI measurement"],
    metrics: "Real-time analytics powering data-driven decisions"
  },
  "Corporate & Brand Events Management": {
    summary: "Award-winning event production using state-of-the-art AV technology. From intimate executive briefings to large-scale public events—we create brand moments that resonate and deliver measurable impact.",
    points: ["Event strategy & design", "AV production", "Logistics management", "Post-event analysis"],
    metrics: "PTAA Travel Tour Expo, SGV Got Talent, 18th Gawad Parangal QC"
  },
}

export default function ProductsAndServicesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Section 1: Hero Section */}
      <section id="section1" className="relative min-h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-16 sm:py-0">
          <div className="text-left max-w-5xl">
            <p className="text-[#DC7026] text-[10px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-bold mb-6 sm:mb-8 uppercase">How We Help You Win</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="block text-white">
                We Don't Follow Conversations.
              </span>
              <span className="block text-[#DC7026] mt-3 sm:mt-4">
                We Shape Them.
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-3xl leading-relaxed">
              For 32 years, we've delivered strategic communications that build influence, shape narratives, and drive measurable results for government and corporate leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Services Tabs/Accordion */}
      <section id="section2" className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          {/* SVG Filter for Gooey Effect */}
          <svg style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}>
            <defs>
              <filter id="gooey" colorInterpolationFilters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="gooey"
                />
                <feBlend in="SourceGraphic" in2="gooey" />
              </filter>
            </defs>
          </svg>

          {/* Tab Navigation */}
          <div className="mb-16">
            <GooeyNav
              items={services.map(service => ({ label: service.title, href: '#' }))}
              initialActiveIndex={activeTab}
              onItemClick={(index) => setActiveTab(index)}
              colors={[1, 2, 3, 4]}
              animationTime={400}
              particleCount={20}
              particleDistances={[80, 15]}
              particleR={120}
            />
          </div>

          {/* Tab Content */}
          <div className="flex justify-center">
            <Modal>
              <ModalTrigger className="w-full flex justify-center">
                <div className={`relative ${services[activeTab].height} w-full max-w-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#DC7026]/40 hover:shadow-[0_0_40px_rgba(220,112,38,0.2)]`}>
                  <Image
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    fill
                    className="object-cover opacity-50 grayscale contrast-110 group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                    
                    <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DC7026] mb-3" style={{ fontFamily: 'var(--font-label)' }}>{services[activeTab].category}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>{services[activeTab].title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{services[activeTab].description}</p>
                  </div>
                </div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-3xl md:text-4xl text-white font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    {services[activeTab].title}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {serviceDetails[services[activeTab].title]?.summary}
                  </p>
                  <div className="space-y-4 mb-8">
                    {serviceDetails[services[activeTab].title]?.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DC7026] mt-2 shrink-0" />
                        <p className="text-gray-300 text-base leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                  {serviceDetails[services[activeTab].title]?.metrics && (
                    <div className="p-6 bg-[#DC7026]/10 border border-[#DC7026]/20 rounded-2xl">
                      <p className="text-[#DC7026] font-bold text-sm uppercase tracking-wider mb-2">Key Metric</p>
                      <p className="text-white text-lg font-medium">{serviceDetails[services[activeTab].title]?.metrics}</p>
                    </div>
                  )}
                </ModalContent>
                <ModalFooter className="gap-4">
                  <a
                    href="/connect-with-us"
                    className="px-8 py-3 bg-[#DC7026] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#DC7026]/90 transition-all"
                  >
                    Discuss Project
                  </a>
                </ModalFooter>
              </ModalBody>
            </Modal>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-black/20 hover:bg-black/40 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DC7026] mb-2" style={{ fontFamily: 'var(--font-label)' }}>{service.category}</p>
                  <h3 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{service.title}</h3>
                </div>
                <ChevronRight
                  size={20}
                  className={`text-[#DC7026] transition-transform duration-300 flex-shrink-0 ml-4 ${openAccordion === index ? 'rotate-90' : ''
                    }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${openAccordion === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <Modal>
                  <ModalTrigger className="w-full">
                    <div className={`relative ${service.height} w-full cursor-pointer`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-50 grayscale contrast-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                        
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h4 className="text-3xl md:text-4xl text-white font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {serviceDetails[service.title]?.summary}
                      </p>
                      <div className="space-y-4 mb-8">
                        {serviceDetails[service.title]?.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#DC7026] mt-2 shrink-0" />
                            <p className="text-gray-300 text-base leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      {serviceDetails[service.title]?.metrics && (
                        <div className="p-6 bg-[#DC7026]/10 border border-[#DC7026]/20 rounded-2xl">
                          <p className="text-[#DC7026] font-bold text-sm uppercase tracking-wider mb-2">Key Metric</p>
                          <p className="text-white text-lg font-medium">{serviceDetails[service.title]?.metrics}</p>
                        </div>
                      )}
                    </ModalContent>
                    <ModalFooter className="gap-4">
                      <a
                        href="/connect-with-us"
                        className="px-8 py-3 bg-[#DC7026] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#DC7026]/90 transition-all"
                      >
                        Discuss Project
                      </a>
                    </ModalFooter>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          ))}
        </div>

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
