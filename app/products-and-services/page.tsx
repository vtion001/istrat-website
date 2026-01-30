"use client"

import { useRef, useLayoutEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronRight, ChevronLeft, Play } from "lucide-react"
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
    image: "/images/services/marketing.png",
    height: "h-[500px]",
    delay: 0.1
  },
  {
    title: "Public Relations & Media Influence",
    category: "Media Relations",
    description: "32 years of building credibility through earned media. We secure coverage that matters, manage reputations proactively, and turn media relationships into strategic assets.",
    image: "/images/services/pr.png",
    height: "h-[550px]",
    delay: 0.2
  },
  {
    title: "Brand Strategy & Positioning",
    category: "Brand Development",
    description: "From identity creation to market positioning—we build brands that command attention, earn trust, and deliver sustainable competitive advantage across all touchpoints.",
    image: "/images/services/design.png",
    height: "h-[480px]",
    delay: 0.3
  },
  {
    title: "Integrated Marketing Communications",
    category: "Full-Spectrum Marketing",
    description: "Unified campaigns that convert attention into results. We orchestrate paid, owned, and earned channels to deliver cohesive brand experiences that drive growth.",
    image: "/images/services/digital.png",
    height: "h-[450px]",
    delay: 0.4
  },
  {
    title: "Advocacy & Stakeholder Engagement",
    category: "Government Relations",
    description: "Trusted by government and advocacy organizations to build coalitions, influence policy dialogue, and engage communities for meaningful social impact.",
    image: "/images/services/advocacy.png",
    height: "h-[520px]",
    delay: 0.5
  },
  {
    title: "Measurement, Analytics & Insights",
    category: "Data Intelligence",
    description: "DataFusion360 and proprietary analytics turn campaign performance into strategic intelligence. Real-time insights that inform decisions and optimize ROI.",
    image: "/images/services/marketing.png",
    height: "h-[450px]",
    delay: 0.6
  },
  {
    title: "Corporate & Brand Events Management",
    category: "Event Production",
    description: "Award-winning event execution using state-of-the-art AV technology. From concept to completion—we create brand moments that resonate and deliver impact.",
    image: "/images/services/events.png",
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
  const scrollRef = useRef<HTMLDivElement>(null)

  // Removed GSAP scroll animation - using simple grid layout instead

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <GSAPPanelScroll>
        {/* Panel 1: Hero Section */}
        <div className="section">
          <div className="section-inner">
            <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
              <Image
                src="/images/services/services-hero.png"
                alt="My Services"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/70"></div>
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

        {/* Panel 2: Services Carousel */}
        <div className="section">
          <div className="section-inner">
            <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8 py-32" id="portfolio">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {services.map((service) => (
                    <div
                      key={service.title}
                      className={`relative flex-shrink-0 ${service.height} w-[85%] sm:w-[350px] lg:w-[400px] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#DC7026]/40 hover:shadow-[0_0_40px_rgba(220,112,38,0.2)]`}
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
                        className="object-cover opacity-50 grayscale contrast-110 group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-8 text-left bg-gradient-to-t from-black via-black/90 to-transparent">
                        <div className="w-12 h-[2px] bg-[#DC7026] mb-6" />
                        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#DC7026] mb-3" style={{ fontFamily: 'var(--font-label)' }}>{service.category}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <motion.div
                className="flex items-center justify-center gap-3 text-[#DC7026]"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em]">Scroll to view all</p>
                <ChevronRight size={18} />
              </motion.div>
            </section>
          </div>
        </div>

        {/* Panel 3: Testimonial */}
        <div className="section">
          <div className="section-inner">
            <section className="relative min-h-screen flex items-end overflow-hidden border-t border-white/5">
              <Image
                src="/images/services/arnold-cinematic.png"
                alt="Arnold Santos Argano"
                fill
                className="object-cover object-top opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#DC7026] text-[10px] font-black tracking-[0.5em] uppercase mb-4" style={{ fontFamily: 'var(--font-label)' }}>Creative Lead</p>
                  <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Arnold Santos Argano</h2>
                  <div className="max-w-2xl mx-auto">
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-medium mb-12 italic">
                      "I am a storyteller and communication strategist who believes that great design is not just what it looks like, but how it works for the brand's long-term legacy."
                    </p>
                    <div className="flex justify-center gap-6">
                      <button className="px-10 py-4 bg-[#DC7026] text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(220,112,38,0.4)]">
                        Start Journey
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>

        {/* Panel 4: Highlights (no animation) */}
        <div className="section">
          <div className="section-inner">
            <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
              <div className="flex items-center justify-between mb-20">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Recent Work
                </motion.h2>
                <div className="h-[1px] flex-grow mx-8 bg-white/5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoHighlights.map((v, i) => (
                  <motion.a
                    key={v.title}
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group border border-white/5 bg-[#0a0a0a] rounded-[32px] overflow-hidden flex flex-col h-full hover:border-[#DC7026]/30 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image src={v.thumb} alt={v.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-[#DC7026] flex items-center justify-center text-black">
                          <Play fill="currentColor" size={20} className="ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 pb-10">
                      <h4 className="text-white font-bold tracking-tight mb-4 line-clamp-2 min-h-[3rem]">{v.title}</h4>
                      <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#DC7026]">
                        WATCH PROJECT <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
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
