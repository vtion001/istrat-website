"use client"

import { motion } from "framer-motion"
import { useState } from "react"

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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={onSubmit}>
            <input name="name" value={form.name} onChange={onChange} className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Name" aria-label="Name" aria-invalid={!!errors.name} />
            <input name="email" value={form.email} onChange={onChange} className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Email Address" aria-label="Email Address" aria-invalid={!!errors.email} />
            <input name="company" value={form.company} onChange={onChange} className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Company Name" aria-label="Company Name" />
            <select name="service" value={form.service} onChange={onChange} className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white" aria-label="Service">
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
            <input name="subject" value={form.subject} onChange={onChange} className="w-full md:col-span-2 px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Subject" aria-label="Subject" aria-invalid={!!errors.subject} />
            <textarea name="message" value={form.message} onChange={onChange} className="w-full md:col-span-2 px-4 py-3 h-40 border border-white/10 bg-white/5 text-white placeholder-[#a0a0a0]" placeholder="Message" aria-label="Message" aria-invalid={!!errors.message} />
            <div className="md:col-span-2 space-y-3">
              {Object.keys(errors).length > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#ff6b6b]" role="alert" aria-live="polite">
                  {Object.entries(errors).map(([k, v]) => (
                    <div key={k}>{k}: {v}</div>
                  ))}
                </motion.div>
              )}
              {sent ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 py-3 border border-white/10 bg-[#00c2ff]/20 text-white" role="status" aria-live="polite">
                  Thank you. We’ll get back to you shortly.
                </motion.div>
              ) : (
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-block px-6 py-4 border border-white/10 bg-[#ccff00]/30 backdrop-blur-xl text-white hover:text-[#0a0a0a] hover:bg-[#ccff00] transition-colors" aria-label="Send">Send</button>
                  <span className="text-[#a0a0a0]">or email us at info@istratmc.com, istratmkt@gmail.com</span>
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  )
}
