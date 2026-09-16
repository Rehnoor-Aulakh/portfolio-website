'use client'

import { useState } from 'react'
import { services } from '../data/projects'

const TABS = ['All', 'AI', 'Web']

export default function ServicesSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-wrap">
        <div className="services-section__header">
          <div className="section-heading anim-fade-left">
            <span className="eyebrow">What we do</span>
            <h2 id="services-title">
              Two people.<br /><em>One personal build.</em>
            </h2>
            <p className="section-heading__copy">
              From autonomous AI agents to pixel-perfect React interfaces — we cover
              the full stack of what modern digital products need.
            </p>
          </div>

          <div className="services-tabs anim-fade-right" role="tablist" aria-label="Service categories">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`services-tab${active === tab ? ' active' : ''}`}
                onClick={() => setActive(tab)}
                role="tab"
                aria-selected={active === tab}
                id={`services-tab-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid" role="tabpanel">
          {filtered.map((service, i) => (
            <article
              className="service-card anim-fade-up"
              key={service.number}
              data-category={service.category}
              data-delay={((i % 3) + 1).toString()}
              aria-label={service.title}
            >
              <div className="service-card__top">
                <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
                <div className="service-card__num">{service.number}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
