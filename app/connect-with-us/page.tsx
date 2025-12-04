"use client"

import { motion } from "framer-motion"

export default function ConnectWithUsPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white">Connect With Us</h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-4xl mb-12">
            Our core and soul. YOU! We take your wisdom seriously even as we learn to innovate. Your being is the cornerstone of our inspiration in giving life to every idea.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
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

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Name" />
            <input className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Email Address" />
            <input className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Company Name" />
            <select className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white" defaultValue="">
              <option value="" disabled className="text-[#a0a0a0]">What services do you want to know?</option>
              <option>Integrated Marketing Campaigns</option>
              <option>Brand Development and Strategy</option>
              <option>Graphic Design and Animation</option>
              <option>Market Research</option>
              <option>Public Relations</option>
              <option>Advocacy and Social Marketing</option>
              <option>Crisis Management</option>
              <option>Video and Stage Production</option>
              <option>Information Technology</option>
            </select>
            <input className="w-full md:col-span-2 px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Subject" />
            <textarea className="w-full md:col-span-2 px-4 py-3 h-40 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Message" />
            <div className="md:col-span-2 flex items-center gap-3">
              <a href="mailto:info@istratmc.com" className="inline-block px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors">Send Email</a>
              <span className="text-[#a0a0a0]">or email us at info@istratmc.com, istratmkt@gmail.com</span>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  )
}
