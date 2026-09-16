'use client'

import { useState, useRef } from 'react'

// ============================================================
// FORMSUBMIT CONFIGURATION — no account/API key needed.
// Step 1: Put your real email address below.
// Step 2: Deploy the site and submit the form once yourself.
// Step 3: Check that inbox for a "Confirm your email" message from
//         FormSubmit and click the confirmation link — until you do
//         this, submissions are silently discarded, not delivered.
// After that one-time confirmation, every future submission is
// emailed to you automatically.
// ============================================================
const FORMSUBMIT_EMAIL = 'jatinkalra0111@gmail.com'

// ============================================================
// WHATSAPP — Replace with your WhatsApp Business number (with country code, no +)
// Example: '919876543210' for India +91 9876543210
// ============================================================
const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER'

const COUNTRIES = ['United States', 'United Kingdom', 'Australia', 'Germany', 'Canada', 'France', 'Netherlands', 'Singapore', 'UAE', 'India', 'Other']
const BUDGETS   = ['Less than $500 USD', '$500 – $1,000 USD', '$1,000 – $2,000 USD', '$2,000 – $5,000 USD', '$5,000+ USD']
const SERVICES_LIST = ['AI Agent Development', 'Chatbot / Conversational AI', 'Machine Learning & Data', 'LLM Integration & RAG', 'Web Design & UI/UX', 'React / Frontend Dev', 'E-commerce', 'API & Backend', 'SEO & Growth', 'Full Project (All of above)']

export default function ContactSection() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', country: '', budget: '', service: '', message: '', honeypot: ''
  })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!formData.name.trim())    e.name    = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!formData.service)        e.service = 'Please select a service'
    if (!formData.message.trim()) e.message = 'Tell us a bit about your project'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot — if filled, it's a bot
    if (formData.honeypot) return

    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name:      formData.name,
          Email:     formData.email,
          Company:   formData.company || 'Not provided',
          Country:   formData.country || 'Not specified',
          Budget:    formData.budget  || 'Not specified',
          Service:   formData.service,
          Message:   formData.message,
          _subject:  `New inquiry from ${formData.name} — ${formData.service}`,
          _template: 'table',
          _captcha:  false,
          _honey:    formData.honeypot,
        }),
      })

      if (!response.ok) throw new Error('FormSubmit request failed')

      setStatus('success')
      setFormData({ name: '', email: '', company: '', country: '', budget: '', service: '', message: '', honeypot: '' })
    } catch (err) {
      console.error('FormSubmit error:', err)
      setStatus('error')
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Hi Loom Digital! I found you online and I'm interested in ${formData.service || 'your services'}. Can we connect?`
  )

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <div className="contact-section__inner">
          {/* Left: Info */}
          <div className="contact-info anim-fade-left">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="contact-info__title" id="contact-title">
              Let's make it <em>real.</em>
            </h2>
            <p>
              Tell us what you're building, what's broken, or what you can't stop thinking about.
              We respond to every serious inquiry within <strong>24 hours</strong>.
            </p>

            <ul className="contact-info__list" aria-label="Contact details">
              <li className="contact-info__item">
                <span className="contact-info__item-icon" aria-hidden="true">✉️</span>
                <span>jatinkalra0111@gmail.com</span>
              </li>
              <li className="contact-info__item">
                <span className="contact-info__item-icon" aria-hidden="true">⚡</span>
                <span>Response within 24 hours</span>
              </li>
              <li className="contact-info__item">
                <span className="contact-info__item-icon" aria-hidden="true">🌍</span>
                <div>
                  <div style={{ marginBottom: 8 }}>Serving clients in:</div>
                  <div className="contact-info__flags" aria-label="Countries we serve">
                    <span className="contact-info__flag" role="img" aria-label="USA" title="United States">🇺🇸</span>
                    <span className="contact-info__flag" role="img" aria-label="UK" title="United Kingdom">🇬🇧</span>
                    <span className="contact-info__flag" role="img" aria-label="EU" title="European Union">🇪🇺</span>
                    <span className="contact-info__flag" role="img" aria-label="Australia" title="Australia">🇦🇺</span>
                    <span className="contact-info__flag" role="img" aria-label="Canada" title="Canada">🇨🇦</span>
                  </div>
                </div>
              </li>
            </ul>

            <a
              className="contact-info__whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              aria-label="Chat on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="anim-fade-right">
            <div className="contact-form-wrap">
              {status === 'success' ? (
                <div className="form-success show" role="alert">
                  <div className="form-success__icon" aria-hidden="true">🎉</div>
                  <h3>Message received!</h3>
                  <p>
                    Thanks for reaching out. We'll review your project details and
                    get back to you within <strong>24 hours</strong>.
                  </p>
                  <button
                    className="btn btn--primary"
                    onClick={() => setStatus('idle')}
                    style={{ margin: '20px auto 0', display: 'inline-flex' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="contact-form-title">Start a Project</h3>
                  <p className="contact-form-sub">Free consultation · No commitment</p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    id="contact-form"
                  >
                    {/* Honeypot — hidden from humans, catches bots */}
                    <input
                      className="form-honeypot"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="form-grid">
                      <div className="form-field">
                        <label htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Sarah Mitchell"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <span className="form-error show" id="name-error" role="alert">{errors.name}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <span className="form-error show" id="email-error" role="alert">{errors.email}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-company">Company / Brand</label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          placeholder="NovaTech Solutions"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-country">Country</label>
                        <select
                          id="contact-country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                        >
                          <option value="">Select country…</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-service">Service Needed *</label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.service}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES_LIST.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <span className="form-error show" role="alert">{errors.service}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-budget">Budget Range</label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget…</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-field form-field--full">
                        <label htmlFor="contact-message">Project Description *</label>
                        <textarea
                          id="contact-message"
                          name="message"
                          placeholder="Tell us about your project — what you're building, what problem you're solving, and what success looks like for you…"
                          value={formData.message}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          rows={4}
                        />
                        {errors.message && <span className="form-error show" id="message-error" role="alert">{errors.message}</span>}
                      </div>
                    </div>

                    <div className="form-submit">
                      {status === 'error' && (
                        <p style={{ color: '#c0392b', fontSize: '.8rem', marginBottom: 12, fontFamily: 'var(--font-mono)' }} role="alert">
                          ⚠ Send failed. Please try emailing us directly at jatinkalra0111@gmail.com
                        </p>
                      )}
                      <button
                        type="submit"
                        className="btn btn--primary"
                        disabled={status === 'sending'}
                        id="contact-submit-btn"
                        aria-live="polite"
                      >
                        {status === 'sending' ? (
                          <>Sending… <span aria-hidden="true">⏳</span></>
                        ) : (
                          <>Send Message <span className="btn__arrow" aria-hidden="true">→</span></>
                        )}
                      </button>
                      <p style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.04em' }}>
                        🔒 Your information is safe. We never share or sell your data.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
