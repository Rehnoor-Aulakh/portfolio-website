'use client'

import { useState, useEffect } from 'react'

const WORDS = ['AI Agents', 'Chatbots', 'ML Models', 'Web Apps', 'Automation']

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIndex]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {/* Background elements */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid-lines" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>

      <div className="hero__inner section-wrap">
        {/* Left: Copy */}
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Independent AI &amp; Digital Studio · 2024
          </span>

          <h1 className="hero__title" id="hero-title">
            We build{' '}
            <span className="hero__typewriter-wrap" aria-live="polite" aria-label={`We build ${WORDS[wordIndex]}`}>
              <span className="hero__typewriter">{displayed}</span>
              <span className="hero__cursor" aria-hidden="true">|</span>
            </span>
            <br />that work.
          </h1>

          <p className="hero__subtitle">
            Loom Digital — a two-person studio turning complex ideas into AI agents,
            chatbots, ML pipelines, and premium web experiences for ambitious teams
            across USA, UK, EU &amp; Australia.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work" id="hero-see-work-btn">
              See Our Work <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--secondary" href="#contact" id="hero-consult-btn">
              Free Consultation
            </a>
          </div>

          {/* Trust signals */}
          <div className="hero__trust" aria-label="Client trust signals">
            <div className="hero__trust-avatars" aria-hidden="true">
              {['SM', 'JT', 'LM', 'EC', 'MR'].map((initials) => (
                <div className="hero__trust-avatar" key={initials}>{initials}</div>
              ))}
            </div>
            <p className="hero__trust-text">
              <strong>50+ projects</strong> delivered across 🇺🇸 🇬🇧 🇪🇺 🇦🇺
            </p>
          </div>
        </div>

        {/* Right: Floating cards */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card-stack">
            {/* Stat card top-left */}
            <div className="hero__card hero__card--stat">
              <div className="hero__card-label">Satisfaction Rate</div>
              <div className="hero__card-value" style={{ color: 'var(--accent)' }}>98%</div>
              <div className="hero__card-sub">Across all projects</div>
            </div>

            {/* Main tech card */}
            <div className="hero__card hero__card--main">
              <div className="hero__card-label">Tech Stack</div>
              <div className="hero__card-value" style={{ fontSize: '1.3rem', marginBottom: 4 }}>
                AI + Web + ML
              </div>
              <div className="hero__card-sub">Production-ready solutions</div>
              <div className="hero__card-tech">
                {['GPT-4', 'LangChain', 'React', 'Python', 'FastAPI', 'TensorFlow'].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* AI badge card bottom-right */}
            <div className="hero__card hero__card--ai">
              <div className="hero__card-label" style={{ color: 'rgba(255,255,255,.7)' }}>
                Latest delivery
              </div>
              <div style={{ fontSize: '1.5rem', margin: '8px 0 4px' }}>🤖</div>
              <div style={{ fontWeight: 700, fontSize: '.95rem' }}>AI Sales Agent</div>
              <div style={{ fontSize: '.75rem', opacity: .8, marginTop: 4 }}>
                80% less manual work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
