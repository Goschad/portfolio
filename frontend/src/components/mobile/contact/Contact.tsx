import { useState } from 'react'
import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from '../data/portfolio'
import { FaArrowRightLong } from "react-icons/fa6";

export function Contact() {
    const { socials, email } = portfolioData
    const [form, setForm] = useState({ name: '', message: '' })
    const [errors, setErrors] = useState({ name: false })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!form.name.trim()) {
            setErrors({ name: true })
            return
        }

        const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
        const body = encodeURIComponent(`${form.message}`)
        
        window.open(`mailto:${email}?subject=${subject}&body=${body}`)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (e.target.name === 'name') setErrors({ name: false })
    }

    return (
        <section id="contact" className="section">
            <div className="section-inner">
                <AnimatedSection className="section-tag">Contact</AnimatedSection>

                <div className="contact-grid">
                    <div className="contact-left">
                        <AnimatedSection delay={0.05}>
                            <h2 className="contact-title">
                                Say<br />
                                <span className="contact-title-muted">hello.</span>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <p className="contact-sub">
                                Did I mention I'm looking for an apprenticeship ?
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <a href={`mailto:${email}`} className="contact-email">
                                {email}
                            </a>
                        </AnimatedSection>

                        <AnimatedSection delay={0.25} className="socials">
                            {socials.map((s) => (
                                <a key={s.label} href={s.url} className="social-link" target="_blank" rel="noopener noreferrer">
                                    {s.label}
                                </a>
                            ))}
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.1} className="contact-right">
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    className={`form-input${errors.name ? ' form-input--error' : ''}`}
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="form-error">Name is required</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell me more..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="form-submit">
                                <span>Send</span>
                                <FaArrowRightLong />
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}