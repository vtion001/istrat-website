"use client"

import { motion } from "framer-motion"

const specializations = [
  "Advertising",
  "Event Management and Staging",
  "Creative Design and Concepts",
  "Public Relations",
  "Digital Marketing",
  "Crisis PR Management",
]

const team = [
  {
    name: "Arnold Santos Argano",
    title: "Chief Executive Officer",
    bio:
      "Creative powerhouse and leader across writing, directing, events, social media strategy, and production with three decades of experience.",
  },
  {
    name: "Erwyn Claudio",
    title: "PR Consultant",
    bio:
      "Award-winning communications specialist with Anvil and IABC Quill Awards for global automotive brands.",
  },
  {
    name: "Ric Lopez",
    title: "Operations Head",
    bio:
      "20 years in creative production producing radio and TV commercials for private and government institutions, including international advertising productions.",
  },
  {
    name: "Eugenio S. Aguilar",
    title: "Social Media Strategy Consultant",
    bio:
      "Storyteller and strategist crafting viral digital content, consultant and digital strategist for Lahi.PH.",
  },
  {
    name: "Ferdie Aboga",
    title: "Content and Creative Consultant",
    bio:
      "Media leader with broadcast journalism expertise, previously at CNN Philippines and ABS-CBN overseeing news operations.",
  },
  {
    name: "Ela Marie Teodosio",
    title: "Admin Head",
    bio:
      "17+ years in administration and HR in government and private sectors, ensuring efficient operations and compliance.",
  },
  {
    name: "Lou Bognot",
    title: "Accounts and Media Consultant",
    bio:
      "30 years in brand building and retail marketing, strategic thinker and CRM advocate driving impactful marketing strategies.",
  },
]

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0d1a2b]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#c59f43] mb-4">Imagine • Live • Soar</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-[#c59f43]">iStrat COMMS INC</h1>
          <p className="text-lg md:text-xl text-[#c59f43] max-w-3xl mb-12">
            We are a one-stop creative marketing communications delivering advertising, PR campaigns, and data-driven strategies for brand building towards sales growth.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specializations.map((item) => (
              <div key={item} className="p-6 border border-[#0d71a3]/30 bg-[#0d71a3]/10 backdrop-blur-xl rounded-none hover:border-[#c59f43]/30 transition-colors">
                <p className="text-[#c59f43] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <img src="https://www.istratmc.com/wp-content/uploads/2022/05/Map.jpg" alt="iStrat Location Map" className="w-full h-96 object-cover border border-white/10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
          <div className="p-8 border border-[#0d71a3]/30 bg-[#0d71a3]/10 backdrop-blur-xl">
            <p className="text-4xl md:text-5xl font-display text-[#c59f43] mb-4">Communication has the power to influence real change.</p>
            <p className="text-[#c59f43] max-w-4xl">
              Communications can make or break a brand, help a company grow or fail, and guide a country through peaceful social change. With every brief, we deliver communication strategies that help you put your best foot forward in achieving your brand integrity and sales growth.
              <br />
              <span className="font-bold mt-4 block">— Ric Lopez</span>
            </p>
          </div>
        </motion.div>

        <motion.h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-10 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Our Team
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {team.map((member) => (
            <div key={member.name} className="p-6 border border-[#0d71a3]/30 bg-[#0d71a3]/10 backdrop-blur-xl">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0d71a3&color=ffffff&size=256&bold=true&rounded=false`}
                alt={`${member.name} avatar`}
                className="w-24 h-24 border border-white/10 object-cover mb-4"
                loading="lazy"
              />
              <p className="text-[#c59f43] text-xl font-semibold">{member.name}</p>
              <p className="text-[#c59f43] text-sm uppercase tracking-widest mb-3">{member.title}</p>
              <p className="text-[#c59f43]">{member.bio}</p>
            </div>
          ))}
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter mb-6 mt-16 text-[#c59f43]" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Highlights
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {[
            {
              title: "Pista sa QC",
              url: "https://www.youtube.com/watch?v=ys7EulEQAhU&t=15s",
              thumb: "https://i.ytimg.com/vi/ys7EulEQAhU/maxresdefault.jpg",
            },
            {
              title: "Alab",
              url: "https://www.youtube.com/watch?v=s_DFhmMFmU8",
              thumb: "https://www.istratmc.com/wp-content/uploads/2022/07/alab.jpg",
            },
            {
              title: "QC New Year’s Countdown 2022",
              url: "https://www.youtube.com/watch?v=EdkKgTfsxiQ",
              thumb: "https://i.ytimg.com/vi/EdkKgTfsxiQ/maxresdefault.jpg",
            },
          ].map((v) => (
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
