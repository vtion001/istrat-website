"use client"

import { useRef, useLayoutEffect, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronRight, ChevronLeft, Play, ChevronDown } from "lucide-react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PopupDetail from "@/components/popup-detail"
import GSAPPanelScroll from "@/components/gsap-panel-scroll"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Strategic Communications & Advisory",
    category: "Strategic Counsel",
    description: "We don't just advise—we architect communication strategies that shape narratives, influence stakeholders, and drive measurable business outcomes for government and private sector leaders.",
    image: "/images/services/marketing.svg",
    height: "h-[500px]",
    delay: 0.1
  },
  {
    title: "Public Relations & Media Influence",
    category: "Media Relations",
    description: "32 years of building credibility through earned media. We secure coverage that matters, manage reputations proactively, and turn media relationships into strategic assets.",
    image: "/images/services/pr.svg",
    height: "h-[550px]",
    delay: 0.2
  },
  {
    title: "Brand Strategy & Positioning",
    category: "Brand Development",
    description: "From identity creation to market positioning—we build brands that command attention, earn trust, and deliver sustainable competitive advantage across all touchpoints.",
    image: "/images/services/design.svg",
    height: "h-[480px]",
    delay: 0.3
  },
  {
    title: "Integrated Marketing Communications",
    category: "Full-Spectrum Marketing",
    description: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences that drive growth.",
    image: "/images/services/digital.svg",
    height: "h-[450px]",
    delay: 0.4
  },
  {
    title: "Advocacy & Stakeholder Engagement",
    category: "Government Relations",
    description: "Trusted by government and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for meaningful social impact.",
    image: "/images/services/advocacy.svg",
    height: "h-[520px]",
    delay: 0.5
  },
  {
    title: "Measurement, Analytics & Insights",
    category: "Data Intelligence",
    description: "DataFusion360 and proprietary analytics turn campaign performance into strategic intelligence. Real-time insights that inform decisions and optimize ROI.",
    image: "/images/services/marketing.svg",
    height: "h-[450px]",
    delay: 0.6
  },
  {
    title: "Corporate & Brand Events Management",
    category: "Event Production",
    description: "Award-winning event execution using state-of-the-art AV technology. From concept to completion—we create brand moments that resonate and deliver impact.",
    image: "/images/services/events.svg",
    height: "h-[500px]",
    delay: 0.7
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

const videoHighlights = [
  {
    title: "V. Group crew guide animation",
    url: "https://youtu.be/EahkpF69mS4",
    thumb: "https://www.istratmc.com/wp-content/uploads/2022/06/img024.png",
  },
  {
    title: "QC New Year’s Countdown 2022",
    url: "https://www.youtube.com/watch?v=EdkKgTfsxiQ",
    thumb: "https://i.ytimg.com/vi/EdkKgTfsxiQ/maxresdefault.jpg",
  },
  {
    title: "New Greenland Urban Farming in Quezon City",
    url: "https://www.youtube.com/watch?v=35vrOJ0S1_Q",
    thumb: "https://www.istratmc.com/wp-content/uploads/2022/06/img026.png",
  },
  {
    title: "Quezon City Virtual Countdown to 2021",
    url: "https://www.youtube.com/watch?v=b9hQQ5w9Uhs&t=3s",
    thumb: "https://i.ytimg.com/vi/b9hQQ5w9Uhs/maxresdefault.jpg",
  },
]

export default function ProductsAndServicesPage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [detailData, setDetailData] = useState({ title: "", summary: "", points: [] as string[], metrics: undefined as string | undefined })
  const [activeTab, setActiveTab] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Bubble animation for tabs on mount
  useEffect(() => {
    const tabs = tabRefs.current.filter(Boolean)
    if (!tabs.length) return

    gsap.set(tabs, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })

    tabs.forEach((tab, i) => {
      const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05)
      gsap.to(tab, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay,
        ease: 'back.out(1.5)'
      })
    })
  }, [])

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <GSAPPanelScroll>
        {/* Panel 1: Hero Section */}
        <div className="section">
          <div className="section-inner">
            <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-black">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left max-w-5xl"
                >
                  <p className="text-[#DC7026] text-xs md:text-sm tracking-[0.3em] font-bold mb-8 uppercase">How We Help You Win</p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      We Don't Follow Conversations.
                    </motion.span>
                    <motion.span
                      className="block text-[#DC7026] mt-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      We Shape Them.
                    </motion.span>
                  </h1>
                  <motion.p
                    className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    For 32 years, we've delivered strategic communications that build influence, shape narratives, and drive measurable results for government and corporate leaders.
                  </motion.p>
                </motion.div>
              </div>
            </section>
          </div>
        </div>

        {/* Panel 2: Services Tabs/Accordion */}
        <div className="section">
          <div className="section-inner">
            <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8 py-32" id="portfolio">
              
              {/* Desktop Tabs */}
              <div className="hidden lg:block">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-3 justify-center items-center mb-16 max-w-5xl mx-auto">
                  {services.map((service, index) => (
                    <button
                      key={service.title}
                      ref={(el) => { tabRefs.current[index] = el }}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                        activeTab === index
                          ? 'text-white bg-[#DC7026]/10'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex justify-center">
                  <div
                    className={`relative ${services[activeTab].height} w-full max-w-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#DC7026]/40 hover:shadow-[0_0_40px_rgba(220,112,38,0.2)]`}
                    onClick={() => {
                      const d = serviceDetails[services[activeTab].title]
                      if (d) {
                        setDetailData({ title: services[activeTab].title, summary: d.summary, points: d.points, metrics: d.metrics })
                        setDetailOpen(true)
                      }
                    }}
                  >
                    <Image
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      fill
                      className="object-cover opacity-50 grayscale contrast-110 group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                      <div className="w-12 h-[2px] bg-[#DC7026] mb-6" />
                      <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DC7026] mb-3" style={{ fontFamily: 'var(--font-label)' }}>{services[activeTab].category}</p>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>{services[activeTab].title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{services[activeTab].description}</p>
                    </div>
                  </div>
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
                        className={`text-[#DC7026] transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openAccordion === index ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openAccordion === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className={`relative ${service.height} w-full cursor-pointer`}
                        onClick={() => {
                          const d = serviceDetails[service.title]
                          if (d) {
                            setDetailData({ title: service.title, summary: d.summary, points: d.points, metrics: d.metrics })
                            setDetailOpen(true)
                          }
                        }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover opacity-50 grayscale contrast-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                          <div className="w-12 h-[2px] bg-[#DC7026] mb-4" />
                          <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </section>

            <PopupDetail
              open={detailOpen}
              onClose={() => setDetailOpen(false)}
              title={detailData.title}
              summary={detailData.summary}
              points={detailData.points}
              metrics={detailData.metrics}
              ctaLabel="Discuss Project"
              ctaHref="/connect-with-us"
            />
          </div>
        </div>
      </GSAPPanelScroll>
    </main>
  )
}
