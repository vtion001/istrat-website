/**
 * Custom hook for managing contact form state and logic
 * Extracted from contact-us/page.tsx for better separation of concerns
 */

import { useState } from "react"

interface FormData {
    name: string
    email: string
    company: string
    service: string
    subject: string
    message: string
}

interface FormErrors {
    [key: string]: string
}

export function useContactForm() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        service: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
    }

    const validate = (): boolean => {
        const next: FormErrors = {}
        if (!form.name.trim()) next.name = "Required"
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            next.email = "Valid email required"
        }
        if (!form.subject.trim()) next.subject = "Required"
        if (!form.message.trim()) next.message = "Required"
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        const recipient = "info@istratmc.com"
        const subject = `[Website Inquiry] ${form.subject}`
        const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Service: ${form.service || "General Inquiry"}

Message:
${form.message}
    `.trim()

        // Construct the Gmail Web URL for direct browser navigation
        const encodedSubject = encodeURIComponent(subject)
        const encodedBody = encodeURIComponent(body)
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`

        // Redirect the current browser window/tab to the Gmail compose screen
        window.location.href = gmailUrl

        setSent(true)
        setTimeout(() => {
            setSent(false)
            setForm({ name: "", email: "", company: "", service: "", subject: "", message: "" })
        }, 3000)
    }

    return {
        form,
        errors,
        sent,
        handleChange,
        handleSubmit,
    }
}
