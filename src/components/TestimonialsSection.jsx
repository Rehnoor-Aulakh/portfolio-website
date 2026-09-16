import { useState, useEffect, useRef } from 'react'
import { testimonials } from '../data/projects'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => {
    setCurrent(i)
    startTimer()
  }

  // Show 3 testimonials at a time on desktop, 1 on mobile
  const visible = testimonials.slice(current, current + 3).concat(
    testimonials.slice(0, Math.max(0, current + 3 - testimonials.length))
  )

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-wrap">
        <div className="testimonials-section__header anim-fade-up">
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            Client Stories
          </span>
          <h2 id="testimonials-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 4.2rem)', letterSpacing: '-.075em', marginBottom: 12 }}>
            Don't take our word for it.<br /><em>Take theirs.</em>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
            Real results from real clients across the USA, UK, EU, and Australia.
          </p>
        </div>

        <div
          className="testimonials-track-wrap"
          style={{ margin: '0 -12px' }}
          aria-live="polite"
          aria-label="Testimonials carousel"
        >
          <div className="testimonials-track" style={{ padding: '8px 12px 16px' }}>
            {visible.map((t, i) => (
              <article className="testimonial-card anim-fade-up" key={`${t.name}-${i}`} data-delay={(i + 1).toString()} aria-label={`Testimonial from ${t.name}`}>
                <div className="testimonial-card__quote" aria-hidden="true">"</div>
                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} aria-hidden="true">★</span>
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                    <div className="testimonial-card__country">{t.country}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-nav" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${current === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={current === i}
              aria-label={`Testimonial ${i + 1}`}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
