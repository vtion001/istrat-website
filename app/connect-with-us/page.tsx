"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

export default function ConnectWithUsPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", subject: "", message: "" })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [sent, setSent] = useState(false)

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const next: { [k: string]: string } = {}
    if (!form.name.trim()) next.name = "Required"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required"
    if (!form.subject.trim()) next.subject = "Required"
    if (!form.message.trim()) next.message = "Required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/services/connect-hero.png"
          alt="Connect With Us"
          fill
          className="object-cover opacity-60 grayscale scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#DC7026] text-[10px] md:text-sm tracking-[0.4em] font-extrabold mb-6 uppercase">Connect / Us</p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2 flex flex-wrap justify-center gap-x-4 md:gap-x-8" style={{ fontFamily: 'var(--font-display)' }}>
              {"Connect With Us".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + (i * 0.2),
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="flex flex-col gap-12 md:gap-20">
            {/* Story & Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#DC7026] text-[10px] font-black uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                LET'S BUILD TOGETHER <div className="h-[1px] w-12 bg-[#DC7026]/40"></div>
              </h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium mb-12">
                Our core and soul. YOU! We take your wisdom seriously even as we learn to innovate. Your being is the cornerstone of our inspiration in giving life to every idea.
              </p>

              <div className="flex flex-col gap-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                  {["Ready to Start", "Your Journey?"].map((line, i) => (
                    <motion.span
                      key={i}
                      className="block"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-lg text-sm md:text-base">
                  Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and innovate.
                </p>

                <ul className="space-y-5">
                  {[
                    "Immediate response within 24 business hours.",
                    "Strategic consultation on your first inquiry.",
                    "End-to-end creative and technical support."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#DC7026]/20 flex items-center justify-center text-[#DC7026] border border-[#DC7026]/20">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-gray-200 font-bold text-sm tracking-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* The Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={onSubmit}>
                <input name="name" value={form.name} onChange={onChange} className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors" placeholder="Name" aria-label="Name" aria-invalid={!!errors.name} />
                <input name="email" value={form.email} onChange={onChange} className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors" placeholder="Email Address" aria-label="Email Address" aria-invalid={!!errors.email} />
                <input name="company" value={form.company} onChange={onChange} className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors" placeholder="Company Name" aria-label="Company Name" />
                <select name="service" value={form.service} onChange={onChange} className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white focus:outline-none focus:border-[#DC7026] transition-colors appearance-none" aria-label="Service">
                  <option value="" disabled className="text-gray-500 bg-black">What services do you want?</option>
                  <option>Integrated Marketing Campaigns</option>
                  <option>Brand Development and Strategy</option>
                  <option>Graphic Design and Animation</option>
                  <option>Market Research</option>
                  <option>Public Relations</option>
                  <option>Advocacy and Social Marketing</option>
                  <option>Crisis Management</option>
                </select>
                <input name="subject" value={form.subject} onChange={onChange} className="w-full md:col-span-2 px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors" placeholder="Subject" aria-label="Subject" aria-invalid={!!errors.subject} />
                <textarea name="message" value={form.message} onChange={onChange} className="w-full md:col-span-2 px-6 py-4 h-40 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors" placeholder="Message" aria-label="Message" aria-invalid={!!errors.message} />

                <div className="md:col-span-2">
                  {Object.keys(errors).length > 0 && (
                    <div className="text-xs text-red-500 mb-4">Please fill in all required fields.</div>
                  )}
                  {sent ? (
                    <div className="px-6 py-4 border border-[#DC7026]/30 bg-[#DC7026]/10 text-[#DC7026] rounded-2xl">
                      Thank you. We’ll get back to you shortly.
                    </div>
                  ) : (
                    <button type="submit" className="w-full md:w-max px-10 py-4 bg-[#DC7026] text-white hover:bg-[#c5621e] transition-all font-bold uppercase text-[10px] tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(220,112,38,0.4)]">
                      Send Message
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column: Visual & Info */}
          <div className="flex flex-col gap-12">
            <motion.div
              className="relative aspect-[3/4] lg:aspect-[4/6] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/services/crew.png"
                alt="Connect With iStrat"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[#DC7026] text-[9px] font-bold tracking-[0.3em] uppercase mb-2">Office Headquarters</p>
                <h4 className="text-white text-2xl font-bold tracking-tight">QUEZON CITY, PH</h4>
              </div>
            </motion.div>

            {/* Quick Contact Info Below Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-white/5 bg-[#080808] rounded-[32px]">
                <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-4">Phone</p>
                <a href="tel:+63283561638" className="text-white hover:text-[#DC7026] transition-colors font-bold">(02) 7119 4130</a>
              </div>
              <div className="p-8 border border-white/5 bg-[#080808] rounded-[32px]">
                <p className="text-[#DC7026] uppercase tracking-widest text-[10px] font-black mb-4">Email</p>
                <a href="mailto:info@istratmc.com" className="text-white hover:text-[#DC7026] transition-colors font-bold">info@istratmc.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed (Full Width Below) */}
        <motion.div
          className="w-full h-96 border border-white/5 rounded-[48px] mt-24 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.200569762696!2d121.0566!3d14.6395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b796aecb8763%3A0x5a5c5c5c5c5c5c5c!2s161%20Kamias%20Rd%2C%20Diliman%2C%20Quezon%20City%2C%201101%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1600000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="iStrat Comms - Quezon City Office"
          />
        </motion.div>
      </section>
    </main>
  )
}
