"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronRight, ChevronLeft, Play } from "lucide-react"
import { useRef } from "react"
import PopupDetail from "@/components/popup-detail"

const services = [
  {
    title: "Integrated Marketing",
    category: "Communications",
    description: "Unified brand identity across channels with cohesive strategy, content, and performance optimization.",
    image: "/images/services/marketing.png",
    height: "h-[450px]",
    delay: 0.1
  },
  {
    title: "Brand Strategy",
    category: "Design",
    description: "In-depth analysis, identity definition, and end-to-end creative execution across all media.",
    image: "/images/services/design.png",
    height: "h-[550px]",
    delay: 0.2
  },
  {
    title: "Event Staging",
    category: "Management",
    description: "Comprehensive planning and technical execution using state-of-the-art AV experiences.",
    image: "/images/services/events.png",
    height: "h-[400px]",
    delay: 0.3
  },
  {
    title: "Public Relations",
    category: "Crisis PR",
    description: "Rapid assessment, strategic planning, and media coordination for decisive brand protection.",
    image: "/images/services/pr.png",
    height: "h-[500px]",
    delay: 0.4
  },
  {
    title: "Digital Marketing",
    category: "Social Media",
    description: "Data-driven strategies, community management, and performance analytics to drive digital growth.",
    image: "/images/services/digital.png",
    height: "h-[450px]",
    delay: 0.5
  },
  {
    title: "Advocacy Relations",
    category: "Community",
    description: "Media relations, press office setup, and reputation building for meaningful social influence.",
    image: "/images/services/advocacy.png",
    height: "h-[480px]",
    delay: 0.6
  },
]

const serviceDetails: Record<string, { summary: string; points: string[] }> = {
  "Integrated Marketing": {
    summary: "A unified approach to audience engagement and brand growth. We orchestrate paid, owned and earned channels so your brand speaks with one voice everywhere it shows up.",
    points: ["Journey mapping", "Creative systems", "Media planning", "Performance tracking"]
  },
  "Brand Strategy": {
    summary: "Defining the core of your brand through story and system. From identity and guidelines to high-quality execution.",
    points: ["Naming & Narrative", "Visual Systems", "Brand Toolkits", "Asset Audits"]
  },
  "Event Staging": {
    summary: "We deliver seamless end-to-end events—planning, staging and live operations—so your brand moment lands flawlessly.",
    points: ["Run-of-show", "AV integration", "Backstage management", "Post-event analytics"]
  },
  "Public Relations": {
    summary: "We build credibility proactively and protect reputation decisively. Strategic planning and stakeholder engagement for decisive action.",
    points: ["Stakeholder mapping", "Media relations", "Crisis protocols", "Sentiment measurement"]
  },
  "Digital Marketing": {
    summary: "Data-driven strategies and community building to drive growth across digital landscapes.",
    points: ["Content strategy", "Social management", "Performance ads", "Growth analytics"]
  },
  "Advocacy Relations": {
    summary: "Earning attention through consistent storytelling and strong media relationships for long-term influence.",
    points: ["Press office", "Message discipline", "Stakeholder comms", "Reputation audits"]
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
  const [detailData, setDetailData] = useState({ title: "", summary: "", points: [] as string[] })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services/services-hero.png"
          alt="My Services"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#DC7026] text-[10px] md:text-sm tracking-[0.4em] font-extrabold mb-6 uppercase">What / We Do</p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2" style={{ fontFamily: 'var(--font-display)' }}>My Services</h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Carousel Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-32">
        <div className="flex items-center justify-end mb-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#DC7026] hover:text-black transition-all group active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#DC7026] hover:text-black transition-all group active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto no-scrollbar items-end pb-12 snap-x snap-mandatory"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`relative flex-shrink-0 ${service.height} w-[85%] sm:w-[350px] lg:w-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl transition-all duration-500 snap-start`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.delay }}
              onClick={() => {
                const d = serviceDetails[service.title]
                if (d) {
                  setDetailData({ title: service.title, summary: d.summary, points: d.points })
                  setDetailOpen(true)
                }
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="w-10 h-[1px] bg-[#DC7026] mx-auto mb-6" />
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-[#DC7026] mb-2" style={{ fontFamily: 'var(--font-label)' }}>{service.category}</p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center md:justify-end mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <a href="/our-works" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#DC7026] transition-colors group">
            View All Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* 2. Portrait Testimonial / Profile Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden border-t border-white/5">
        <Image
          src="/images/services/leader.png"
          alt="Creative Direction"
          fill
          className="object-cover opacity-50 grayscale"
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

      {/* 3. Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Recent Work</h2>
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
        ctaLabel="Discuss Project"
        ctaHref="/connect-with-us"
      />
    </main>
  )
}
