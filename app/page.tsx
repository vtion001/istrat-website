"use client"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import ClientTicker from "@/components/client-ticker"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const specializations = [
  "Advertising",
  "Event Management and Staging",
  "Creative Production",
  "Public Relations",
  "Digital Marketing",
  "Crisis PR Management",
]

const services = [
  {
    title: "Integrated Marketing Communications",
    description:
      "Unified brand identity across channels with cohesive strategy and optimization.",
  },
  {
    title: "Brand Development, Concept, Design and Production",
    description:
      "Identity definition, visual systems, and end-to-end creative production.",
  },
  {
    title: "Event Management and Staging",
    description:
      "Planning, logistics and technical execution using state-of-the-art AV.",
  },
  {
    title: "Digital Marketing, Social Media Management and Analytics",
    description:
      "Data-driven strategies, content creation, SEO, PPC, email and community.",
  },
  {
    title: "Public Relations/Crisis PR Management and Advocacy",
    description:
      "Rapid assessment, strategic planning, stakeholder engagement and messaging.",
  },
  {
    title: "Applications and IT Systems",
    description:
      "DataFusion360, real-time analytics, InfoBlast and Anti-Drone solutions.",
  },
]

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

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a0a0a0] mb-4">Imagine • Live • Soar</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">iStrat COMMS INC</h2>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl mb-12">
            We are a one-stop creative marketing communications and IT agency delivering PR, marketing and advertising campaigns anchored by data-driven strategies to help you build your brand today and succeed tomorrow.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specializations.map((item) => (
              <div key={item} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
                <p className="text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          What We Do
        </motion.h3>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#b700ff]/0 group-hover:from-[#ccff00]/10 group-hover:to-[#b700ff]/10 transition-all duration-500" />
                <h4 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h4>
                <p className="text-[#a0a0a0]">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <BentoGrid />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Social Media Management
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {socialMedia.map((item) => (
            <div key={item.name} className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white text-xl font-semibold mb-2">{item.name}</p>
              <p className="text-[#ccff00] uppercase tracking-widest text-sm">{item.stat}</p>
            </div>
          ))}
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Audio Visual Productions
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {audioVisual.map((name) => (
            <div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white">{name}</p>
            </div>
          ))}
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Event Management and Staging
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {events.map((name) => (
            <div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl">
              <p className="text-white">{name}</p>
            </div>
          ))}
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Get in Touch
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-[#ccff00] uppercase tracking-widest text-sm mb-2">Phone</p>
            <p className="text-white">09616096008</p>
            <p className="text-white">09561324918</p>
          </div>
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-[#ccff00] uppercase tracking-widest text-sm mb-2">Email</p>
            <p className="text-white"><a href="mailto:info@istratmc.com">info@istratmc.com</a></p>
            <p className="text-white"><a href="mailto:istratmkt@gmail.com">istratmkt@gmail.com</a></p>
          </div>
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-[#ccff00] uppercase tracking-widest text-sm mb-2">Address</p>
            <p className="text-white">161 Kamias Road, Sikatuna Village</p>
            <p className="text-white">Quezon City, Philippines</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <a href="mailto:info@istratmc.com" className="inline-block px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">Email Us</a>
        </motion.div>
      </section>

      <ClientTicker />
      <Footer />
    </main>
  )
}
