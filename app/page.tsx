"use client"

import Hero from "@/components/hero"
import BentoGrid from "@/components/bento-grid"
import ClientTicker from "@/components/client-ticker"
import Footer from "@/components/footer"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const HERO_VIDEO_URL = "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4"

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
  const { scrollYProgress } = useScroll()
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, -30])
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Hero />
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#a0a0a0] mb-4">Imagine • Live • Soar</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 brand-gradient-text bg-clip-text text-transparent">iStrat COMMS INC</h2>
          <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-3xl mb-12">
            We are a one-stop creative marketing communications and IT agency delivering PR, marketing and advertising campaigns anchored by data-driven strategies to help you build your brand today and succeed tomorrow.
          </p>
          <div className="relative w-full aspect-video border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden mb-12">
            <video
              className="w-full h-full object-cover"
              src={HERO_VIDEO_URL}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ccff00]/10 to-[#00c2ff]/10" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Highlights
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "MAERSK Pride Fiesta",
                image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png",
                video: "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4",
              },
              {
                title: "BANAUE Composition Competition",
                image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png",
                video: "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4",
              },
              {
                title: "SGV Got Talent",
                image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png",
                video: "https://res.cloudinary.com/dbviya1rj/video/upload/v1764837494/nvjm7t7xghoxww6woyi1.mp4",
              },
            ].map((h, i) => (
              <motion.div key={h.title} className="group relative border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48">
                  {h.video ? (
                    <video
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      src={h.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => { e.currentTarget.muted = false; e.currentTarget.play() }}
                      onMouseLeave={(e) => { e.currentTarget.muted = true; e.currentTarget.play() }}
                    />
                  ) : (
                    <Image src={h.image} alt={h.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" sizes="(max-width: 768px) 100vw, 33vw" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#00c2ff]/0 group-hover:from-[#ccff00]/15 group-hover:to-[#00c2ff]/15 transition-all" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <p className="text-white text-lg font-semibold">{h.title}</p>
                  <span className="text-xs tracking-widest text-[#ccff00]">VIEW</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full">
            <div className="max-w-7xl mx-auto">
              <motion.div style={{ y: ribbonY }} className="h-px w-full bg-gradient-to-r from-[#ccff00]/50 via-[#00c2ff]/50 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specializations.map((item) => (
              <div key={item} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#ccff00]/30 transition-colors">
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
              <motion.div key={service.title} className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/0 to-[#b700ff]/0 group-hover:from-[#ccff00]/10 group-hover:to-[#b700ff]/10 transition-all duration-500" />
                <h4 className="text-2xl font-display font-semibold text-white mb-4">{service.title}</h4>
                <p className="text-[#a0a0a0]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="flex flex-wrap gap-3 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-white border border-white/10 bg-white/5">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

      <BentoGrid />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Clients & Recognition
        </motion.h3>
        <motion.div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            { name: "MAERSK", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Video-and-Stage-Production.png" },
            { name: "SGV", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Brand-Development-and-Strategy.png" },
            { name: "V.Ships", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Integrated-Marketing-Campaigns.png" },
            { name: "eRase", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Graphic-Design-and-Animation.png" },
            { name: "araLabs", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Market-Research.png" },
            { name: "CP Fresh Shop", image: "https://www.istratmc.com/wp-content/uploads/2022/05/Public-Relations.png" },
          ].map((c) => (
            <div key={c.name} className="flex items-center justify-center p-6 border border-white/10 bg-white/5">
              <div className="relative w-full h-12">
                <Image src={c.image} alt={c.name} fill className="object-contain grayscale opacity-80" sizes="(max-width: 768px) 100vw, 16vw" />
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap gap-3 mb-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {["Best Staging 2024", "Top PR Campaign", "Innovation in AV", "Community Impact Award"].map((a) => (
            <span key={a} className="px-4 py-2 text-xs tracking-widest text-white border border-white/10 bg-white/5">
              {a}
            </span>
          ))}
        </motion.div>
      </section>

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
            <motion.div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#00c2ff]/30" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <p className="text-white">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 text-white" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Event Management and Staging
        </motion.h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {events.map((name) => (
            <motion.div key={name} className="p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#ccff00]/30" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <p className="text-white">{name}</p>
            </motion.div>
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
          <a href="mailto:info@istratmc.com" className="inline-flex items-center gap-3 px-6 py-4 border border-white/10 bg-[#ccff00]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">Email Us<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
        </motion.div>
      </section>

      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div style={{ y: ribbonY }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="h-px w-full bg-gradient-to-r from-[#ccff00]/60 via-[#00c2ff]/60 to-transparent" />
        </div>
      </div>

      <ClientTicker />
      <Footer />
    </main>
  )
}
