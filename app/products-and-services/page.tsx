"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import PopupDetail from "@/components/popup-detail"

const services = [
  {
    title: "Integrated Marketing Communications",
    description:
      "Unified brand identity across channels with cohesive strategy, content, media planning and performance optimization.",
  },
  {
    title: "Brand Development, Concept, and Design",
    description:
      "In-depth analysis, identity definition, visual systems and end-to-end creative production across print, digital and video.",
  },
  {
    title: "Event Management",
    description:
      "Comprehensive planning, logistics and technical execution using state-of-the-art AV to deliver memorable experiences.",
  },
  {
    title: "Digital Marketing, Social Media Management and Analytics",
    description:
      "Data-driven strategies, content creation, social management, SEO, PPC, email and community building to drive growth.",
  },
  {
    title: "Public Relations/Crisis PR Management",
    description:
      "Rapid assessment, strategic planning, stakeholder engagement, key messaging and media coordination for decisive action.",
  },
  {
    title: "Advocacy Relations",
    description:
      "Media relations, press office, stakeholder comms, message development and reputation building.",
  },
]

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
  {
    title: "Sen. Guillermo Eleazar Election 2022 TVC",
    url: "https://www.youtube.com/watch?v=DGQV3hIIMs0",
    thumb: "https://i.ytimg.com/vi/DGQV3hIIMs0/maxresdefault.jpg",
  },
  {
    title: "Quezon City Officials Inauguration 2022",
    url: "https://www.youtube.com/watch?v=eQrgT0wrJjY",
    thumb: "https://i.ytimg.com/vi/eQrgT0wrJjY/maxresdefault.jpg",
  },
]

export default function ProductsAndServicesPage() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [detailData, setDetailData] = useState<{ title: string; summary: string; points: string[]; images?: string[]; ctaLabel?: string; ctaHref?: string }>({ title: "", summary: "", points: [] })
  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-widest mb-6 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }}>Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12">
            A full suite of communications solutions designed to elevate your brand and deliver measurable impact.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.button
                key={service.title}
                className="group relative p-8 border border-white/10 bg-white/5 overflow-hidden text-left hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  const details: Record<string, { summary: string; points: string[]; images?: string[] }> = {
                    "Integrated Marketing Communications": {
                      summary:
                        "We orchestrate paid, owned and earned channels so your brand speaks with one voice everywhere it shows up. By aligning message, creative and media into a single plan, we lift recognition, trust and conversion while reducing waste. The result is a continuous growth loop powered by data and clear KPIs. We set quarterly growth targets and iterate weekly, integrating creative testing with media mix modeling and market feedback to compound gains in reach, recall and CAC efficiency.",
                      points: [
                        "Audience segmentation and journey mapping to focus effort where it matters.",
                        "Message hierarchy and creative system applied across web, social, email and PR.",
                        "Integrated media plan and flighting with budget control and ROI tracking.",
                        "Always-on analytics, A/B testing and weekly optimization cadences.",
                        "Executive dashboards that show lift in reach, engagement and conversion.",
                        "Playbooks that enable repeatability for future campaigns.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Omnichannel%20integrated%20marketing%20communications%20brand%20strategy%20creative%20system%20media%20mix%20modeling%20analytics%20dashboard%20modern%20corporate%20style&seed=1&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Marketing%20analytics%20dashboard%20KPI%20lift%20A%2FB%20testing%20creative%20variations%20digital%20channels%20premium%20design&seed=2&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Unified%20brand%20messaging%20across%20paid%2C%20owned%20and%20earned%20channels%20clean%20grid%20system%20data-driven&seed=3&width=800&height=600",
                      ],
                    },
                    "Brand Development, Concept, and Design": {
                      summary:
                        "We define the core of your brand—strategy, story and system—and bring it to life across every artifact. From identity and guidelines to high-quality production, we ensure consistency and premium execution that builds memorability and equity over time. We codify behaviors and voice so teams express the brand consistently, benchmark perception pre/post launch, and refresh on structured cycles to stay current without drift.",
                      points: [
                        "Brand strategy, naming and narrative that clarifies positioning and promise.",
                        "Visual system: logo, typography, color, grid and motion principles.",
                        "Guidelines and components that scale to print, digital, video and events.",
                        "Creative production with quality control and asset management.",
                        "Launch toolkits to enable teams and partners to implement correctly.",
                        "Periodic brand audits to keep standards strong while evolving.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Brand%20identity%20system%20logo%20grid%20typography%20color%20palette%20motion%20guidelines%20premium%20design&seed=11&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Design%20system%20components%20brand%20guidelines%20presentation%20modern%20minimal%20art%20direction&seed=12&width=800&height=600",
                        "https://image.pollinations.ai/prompt=High-quality%20creative%20production%20storyboards%20print%20digital%20video%20assets%20studio%20setup&seed=13&width=800&height=600",
                      ],
                    },
                    "Event Management": {
                      summary:
                        "We deliver seamless end-to-end events—planning, staging and live operations—so your brand moment lands flawlessly. Our team integrates AV, content ops and talent flow to create experiences that feel premium and run on schedule. We design audience flow and tactile moments to create an emotional arc, with post-show data, NPS and content reuse plans extending value well beyond the day.",
                      points: [
                        "Run-of-show, logistics and vendor orchestration with detailed timelines.",
                        "Stage, lighting, sound and screen integration for immersive impact.",
                        "Live content operations: cueing, playback, capture and streaming.",
                        "Backstage management for talent, VIP and stakeholder coordination.",
                        "Risk assessment and contingency planning to eliminate surprises.",
                        "Post-event reporting with highlights, learnings and next-step recommendations.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Premium%20event%20stage%20design%20lighting%20sound%20LED%20screens%20immersive%20experience%20AV%20production&seed=21&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Backstage%20operations%20cueing%20playback%20talent%20management%20live%20streaming%20control%20room&seed=22&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Audience%20flow%20memorable%20brand%20event%20emotional%20arc%20NPS%20moments%20photography&seed=23&width=800&height=600",
                      ],
                    },
                    "Digital Marketing, Social Media Management and Analytics": {
                      summary:
                        "We grow your audience and pipeline using data-driven content, performance ads and search. With channel-specific strategies and continuous optimization, we turn attention into action while building a durable owned community. We build first‑party audiences and governance so experimentation turns insights into compounding growth despite platform volatility.",
                      points: [
                        "Channel strategies for search, social, email and web with clear goals per channel.",
                        "Editorial calendars, modular creative and community management.",
                        "SEO foundations, content clustering and technical fixes to lift discovery.",
                        "Performance marketing: targeting, creatives, bidding and landing page CRO.",
                        "Analytics stack and dashboards; attribution and cohort analysis.",
                        "Quarterly growth reviews translating insights into roadmap updates.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Digital%20marketing%20analytics%20growth%20dashboard%20SEO%20social%20media%20content%20calendar%20performance%20ads&seed=31&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Paid%20media%20campaign%20creative%20variations%20landing%20page%20CRO%20modern%20UI&seed=32&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Community%20management%20owned%20audience%20first-party%20data%20governance%20strategy&seed=33&width=800&height=600",
                      ],
                    },
                    "Public Relations/Crisis PR Management and Advocacy": {
                      summary:
                        "We build credibility proactively and protect reputation decisively. From stakeholder mapping and message discipline to crisis playbooks and rapid response, we help you earn attention when things go right—and retain trust when challenges arise. We prepare decision trees, shadow statements and stakeholder packets ahead of time; after stabilizing, we rebuild narrative with proof points and community engagement.",
                      points: [
                        "Stakeholder mapping, narrative architecture and key message development.",
                        "Media relations, spokesperson preparation and interview training.",
                        "Crisis detection, assessment and response with escalation protocols.",
                        "War room operations: timelines, roles, channels and approval flows.",
                        "Recovery plans: post-crisis narrative and community re-engagement.",
                        "Measurement of sentiment, coverage quality and reputation lift.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Crisis%20PR%20war%20room%20strategic%20communications%20stakeholder%20mapping%20media%20briefing%20rapid%20response&seed=41&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Press%20conference%20spokesperson%20training%20key%20messages%20reputation%20management%20modern%20scene&seed=42&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Sentiment%20analysis%20coverage%20monitoring%20reputation%20dashboard%20clean%20UI&seed=43&width=800&height=600",
                      ],
                    },
                    "Public Relations": {
                      summary:
                        "We earn attention through consistent storytelling and strong media relationships. Our press office approach ensures preparedness, precision and follow-through so coverage builds both awareness and trust. Calendar discipline, beat cultivation and thought leadership convert visibility into durable credibility.",
                      points: [
                        "Press office setup, calendars, releases and briefing materials.",
                        "Spokesperson training and message discipline for consistent delivery.",
                        "Outlet targeting and pitch development to reach the right audiences.",
                        "Coverage monitoring and amplification across owned channels.",
                        "Quarterly PR reviews with outcomes mapped to business goals.",
                      ],
                      images: [
                        "https://image.pollinations.ai/prompt=Public%20relations%20press%20office%20media%20relations%20newsroom%20briefing%20materials%20modern%20design&seed=51&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Editorial%20calendar%20pitching%20target%20outlets%20PR%20strategy%20documents&seed=52&width=800&height=600",
                        "https://image.pollinations.ai/prompt=Media%20coverage%20monitoring%20dashboard%20owned%20channel%20amplification%20UI&seed=53&width=800&height=600",
                      ],
                    },
                  }
                  const d = details[service.title]
                  setDetailData({ title: service.title, summary: d.summary, points: d.points, images: d.images, ctaLabel: "Discuss how this helps", ctaHref: "/connect-with-us" })
                  setDetailOpen(true)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC7026]/0 to-[#3C4699]/0 group-hover:from-[#DC7026]/10 group-hover:to-[#3C4699]/10 transition-all duration-500" />
                <h3 className="text-2xl font-semibold text-[#DC7026] mb-4 tracking-widest" style={{ fontFamily: 'var(--font-label)' }}>{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-semibold tracking-widest mb-6 mt-16 text-[#DC7026]" style={{ fontFamily: 'var(--font-label)' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Highlights
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {videoHighlights.map((v) => (
            <a key={v.title} href={v.url} target="_blank" rel="noreferrer" className="group block border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
              <img src={v.thumb} alt={v.title} className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <p className="text-white text-sm font-medium group-hover:text-[#DC7026] transition-colors">{v.title}</p>
              </div>
            </a>
          ))}
        </motion.div>
        <PopupDetail open={detailOpen} onClose={() => setDetailOpen(false)} title={detailData.title} summary={detailData.summary} points={detailData.points} images={detailData.images} ctaLabel={detailData.ctaLabel} ctaHref={detailData.ctaHref} />
      </section>
    </main>
  )
}
