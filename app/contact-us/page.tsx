"use client"

import ContactHero from "@/components/contact/ContactHero"
import ContactFormSection from "@/components/contact/ContactFormSection"
import ContactInfoSection from "@/components/contact/ContactInfoSection"
import ContactMap from "@/components/contact/ContactMap"
import { useContactForm } from "@/hooks/useContactForm"

export default function ConnectWithUsPage() {
  const { form, errors, sent, handleChange, handleSubmit } = useContactForm()

  return (
    <main className="w-full overflow-x-hidden bg-black text-white">
      {/* Section 1: Hero Section */}
      <ContactHero />

      {/* Section 2: Contact Form & Info */}
      <section id="section2" className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <ContactFormSection
            form={form}
            errors={errors}
            sent={sent}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <ContactInfoSection />
        </div>
      </section>

      {/* Section 3: Map */}
      <ContactMap />
    </main>
  )
}
