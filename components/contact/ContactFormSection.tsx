/**
 * Contact Form Section Component
 * Left column with story, benefits, and contact form
 */

import { Check } from "lucide-react"

interface ContactFormSectionProps {
    form: {
        name: string
        email: string
        company: string
        service: string
        subject: string
        message: string
    }
    errors: { [key: string]: string }
    sent: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    onSubmit: (e: React.FormEvent) => void
}

export default function ContactFormSection({ form, errors, sent, onChange, onSubmit }: ContactFormSectionProps) {
    const benefits = [
        "IMMEDIATE RESPONSE WITHIN 24 BUSINESS HOURS.",
        "STRATEGIC CONSULTATION ON YOUR FIRST INQUIRY.",
        "END-TO-END CREATIVE AND TECHNICAL SUPPORT."
    ]

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            {/* Story & Context */}
            <div>
                <h3 className="text-[#DC7026] text-base md:text-lg font-bold uppercase mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                    LET'S BUILD TOGETHER
                </h3>
                <p className="text-gray-100 text-xl md:text-2xl leading-[1.4] font-semibold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                    Our core and soul. YOU! We take your wisdom seriously even as we learn to innovate. Your being is the cornerstone of our inspiration in giving life to every idea.
                </p>

                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="block">Ready to Start</span>
                        <span className="block">Your Journey?</span>
                    </h2>
                    <p className="text-white leading-relaxed max-w-lg text-sm md:text-base uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                        WHETHER YOU HAVE A SPECIFIC PROJECT IN MIND OR JUST WANT TO EXPLORE POSSIBILITIES, OUR TEAM IS READY TO LISTEN AND INNOVATE.
                    </p>

                    <ul className="space-y-3">
                        {benefits.map((text, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-[#DC7026]/20 flex items-center justify-center text-[#DC7026] border border-[#DC7026]/20">
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                <span className="text-white font-bold text-sm tracking-tight uppercase" style={{ fontFamily: 'var(--font-display)' }}>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* The Form */}
            <div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
                    <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        placeholder="Name"
                        aria-label="Name"
                        aria-invalid={!!errors.name}
                    />
                    <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-invalid={!!errors.email}
                    />
                    <input
                        name="company"
                        value={form.company}
                        onChange={onChange}
                        className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        placeholder="Company Name"
                        aria-label="Company Name"
                    />
                    <select
                        name="service"
                        value={form.service}
                        onChange={onChange}
                        className="w-full px-6 py-4 border border-white/10 bg-black rounded-2xl text-white focus:outline-none focus:border-[#DC7026] transition-colors appearance-none"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        aria-label="Service"
                    >
                        <option value="" disabled className="text-gray-500 bg-black">What services do you want?</option>
                        <option>Integrated Marketing Campaigns</option>
                        <option>Brand Development and Strategy</option>
                        <option>Graphic Design and Animation</option>
                        <option>Market Research</option>
                        <option>Public Relations</option>
                        <option>Advocacy and Social Marketing</option>
                        <option>Crisis Management</option>
                    </select>
                    <input
                        name="subject"
                        value={form.subject}
                        onChange={onChange}
                        className="w-full md:col-span-2 px-6 py-4 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        placeholder="Subject"
                        aria-label="Subject"
                        aria-invalid={!!errors.subject}
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        className="w-full md:col-span-2 px-6 py-4 h-40 border border-white/10 bg-black rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#DC7026] transition-colors"
                        style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                        placeholder="Message"
                        aria-label="Message"
                        aria-invalid={!!errors.message}
                    />

                    <div className="md:col-span-2">
                        {Object.keys(errors).length > 0 && (
                            <div className="text-xs text-red-500 mb-4" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>Please fill in all required fields.</div>
                        )}
                        {sent ? (
                            <div className="px-6 py-4 border border-[#DC7026]/30 bg-[#DC7026]/10 text-[#DC7026] rounded-2xl" style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}>
                                Thank you. We'll get back to you shortly.
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="w-full md:w-max px-10 py-4 bg-[#DC7026] text-white hover:bg-[#c5621e] transition-all font-bold uppercase text-[10px] tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(220,112,38,0.4)]"
                                style={{ fontFamily: 'var(--font-ibm-plex)', fontWeight: 700 }}
                            >
                                Send Message
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
