"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const socialMedia = [
  { name: "General Eleazar", stat: "1M Followers" },
  { name: "Aksyon QC", stat: "86K Followers" },
  { name: "Matatag", stat: "866 Followers" },
]

const audioVisual = [
  "BANAUE International Composition Competition",
  "State of the Women Address",
  "New Greenland Urban Farming in Quezon City",
  "BUHAY AT PAG-ASA",
  "MNL GSC Pride Fiesta MAERSK",
]

const events = [
  "PTAA Travel Tour Expo",
  "ISSUP Philippines 3rd National Conference",
  "SGV Got Talent",
  "18th Gawad Parangal Quezon City",
  "Pista sa QC",
]

const externalServices = [
  {
    title: "Integrated Marketing Campaigns",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png",
  },
  {
    title: "Market Research",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Information-Technology.png",
  },
  {
    title: "Graphic Design and Animation",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Market-Research.png",
  },
  {
    title: "Brand Development and Strategy",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png",
  },
  {
    title: "Advocacy and Social Marketing",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Crisis-Management.png",
  },
  {
    title: "Crisis Management",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png",
  },
  {
    title: "Public Relations",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png",
  },
  {
    title: "Video and Stage Production",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Advocacy-and-Social-Marketing.png",
  },
  {
    title: "Information Technology",
    image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png",
  },
]

export default function OurWorksPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">Our Works</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl mb-12">
            A selection of social, audiovisual, and event projects showcasing our craft and impact.
          </p>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Our Services
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {externalServices.map((s) => (
            <div key={s.title} className="group relative p-0 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#00c2ff]/30">
              <Image
                src={s.image}
                alt={s.title}
                width={640}
                height={192}
                className="w-full h-48 object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <p className="text-white text-lg font-semibold">{s.title}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Social Media Management
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {socialMedia.map((item) => (
            <div key={item.name} className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white text-xl font-semibold mb-2">{item.name}</p>
              <p className="text-[#ccff00] uppercase tracking-widest text-sm">{item.stat}</p>
            </div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Audio Visual Productions
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {audioVisual.map((name) => (
            <div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white">{name}</p>
            </div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Event Management and Staging
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {events.map((name) => (
            <div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white">{name}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
