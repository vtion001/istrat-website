"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Integrated Marketing Communications",
    description:
      "Unified brand identity across channels with cohesive strategy, content, media planning and performance optimization.",
  },
  {
    title: "Brand Development, Concept, Design and Production",
    description:
      "In-depth analysis, identity definition, visual systems and end-to-end creative production across print, digital and video.",
  },
  {
    title: "Event Management and Staging",
    description:
      "Comprehensive planning, logistics and technical execution using state-of-the-art AV to deliver memorable experiences.",
  },
  {
    title: "Digital Marketing, Social Media Management and Analytics",
    description:
      "Data-driven strategies, content creation, social management, SEO, PPC, email and community building to drive growth.",
  },
  {
    title: "Public Relations/Crisis PR Management and Advocacy",
    description:
      "Rapid assessment, strategic planning, stakeholder engagement, key messaging and media coordination for decisive action.",
  },
  {
    title: "Public Relations",
    description:
      "Media relations, press office, stakeholder comms, message development and reputation building.",
  },
  {
    title: "Video and Stage Production",
    description:
      "End-to-end production across live events and video content with creative direction and technical execution.",
  },
  {
    title: "Applications and IT Systems",
    description:
      "Bespoke tech solutions including DataFusion360, real-time analytics, InfoBlast and Anti-Drone systems.",
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
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">Products and Services</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl mb-12">
            A full suite of communications solutions designed to elevate your brand and deliver measurable impact.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#00c2ff]/0 group-hover:from-[#ccff00]/10 group-hover:to-[#00c2ff]/10 transition-all duration-500" />
                <h3 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-[#a0a0a0]">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 mt-16 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Highlights
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {videoHighlights.map((v) => (
            <a key={v.title} href={v.url} target="_blank" rel="noreferrer" className="group block border border-white/10 bg-white/5 backdrop-blur-xl">
              <img src={v.thumb} alt={v.title} className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <p className="text-white text-sm font-medium">{v.title}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
