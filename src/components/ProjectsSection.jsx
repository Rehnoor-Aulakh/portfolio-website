'use client'

import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

const FILTERS = [
  { id: 'All', label: 'All Projects' },
  { id: 'AI', label: 'AI & Agents' },
  { id: 'ML', label: 'Machine Learning' },
  { id: 'Web', label: 'Web & SaaS' },
]

function getBadgeStyle(badge) {
  if (badge === 'AI') {
    return { bg: 'rgba(230, 101, 71, 0.15)', text: '#e66547', border: '1px solid rgba(230, 101, 71, 0.3)' }
  }
  if (badge === 'ML') {
    return { bg: 'rgba(56, 161, 105, 0.15)', text: '#2f855a', border: '1px solid rgba(56, 161, 105, 0.3)' }
  }
  return { bg: 'rgba(49, 130, 206, 0.15)', text: '#2b6cb0', border: '1px solid rgba(49, 130, 206, 0.3)' }
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageIndexes, setActiveImageIndexes] = useState({})
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // Filter projects
  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'AI') return p.badge === 'AI'
          if (activeFilter === 'ML') return p.badge === 'ML'
          return p.badge === 'Web'
        })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      setModalImageIndex(0)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const nextCardImage = (e, projectId, count) => {
    e.stopPropagation()
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % count,
    }))
  }

  const prevCardImage = (e, projectId, count) => {
    e.stopPropagation()
    setActiveImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + count) % count,
    }))
  }

  const handleSelectProjectForContact = (project) => {
    setSelectedProject(null)
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="projects-section" id="work" aria-labelledby="work-title">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="projects-section__header">
          <div className="section-heading anim-fade-left">
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span className="eyebrow-pulse" aria-hidden="true" />
              Selected Portfolio
            </span>
            <h2 id="work-title">
              Things we've<br /><em>shipped.</em>
            </h2>
            <p className="section-heading__copy">
              Production-tested AI agents, enterprise ML engines, and modern digital platforms.
              Engineered for speed, measurable business impact, and global client scale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="project-filters anim-fade-right" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => {
              const count =
                f.id === 'All'
                  ? projects.length
                  : projects.filter((p) => (f.id === 'AI' ? p.badge === 'AI' : f.id === 'ML' ? p.badge === 'ML' : p.badge === 'Web')).length

              return (
                <button
                  key={f.id}
                  className={`filter-btn${activeFilter === f.id ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f.id)}
                  role="tab"
                  aria-selected={activeFilter === f.id}
                  id={`filter-${f.id.toLowerCase()}`}
                >
                  <span>{f.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => {
            const badgeStyle = getBadgeStyle(project.badge)
            const currentImgIdx = activeImageIndexes[project.id] || 0
            const currentImg = project.images[currentImgIdx] || project.images[0]

            return (
              <article
                key={project.id}
                className={`project-card anim-fade-up${project.featured && i === 0 ? ' project-card--featured' : ''}`}
                data-delay={((i % 3) + 1).toString()}
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedProject(project)
                  }
                }}
              >
                {/* Visual Banner & Media */}
                <div className="project-card__image-wrap">
                  <img
                    src={currentImg}
                    alt={`${project.title} screenshot ${currentImgIdx + 1}`}
                    loading="lazy"
                    width="800"
                    height="450"
                    className="project-card__image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('project-card__image--fallback')
                    }}
                  />

                  {/* Fallback pattern */}
                  <div className="project-card__fallback-banner" aria-hidden="true">
                    <span>{project.category}</span>
                  </div>

                  {/* Top Badges */}
                  <div className="project-card__badge-row">
                    <span
                      className="project-card__pill"
                      style={{
                        background: badgeStyle.bg,
                        color: badgeStyle.text,
                        border: badgeStyle.border,
                      }}
                    >
                      {project.category}
                    </span>
                    {project.impact && (
                      <span className="project-card__impact-pill">
                        {project.impact}
                      </span>
                    )}
                  </div>

                  {/* Multi-image navigation controls if images > 1 */}
                  {project.images.length > 1 && (
                    <div className="project-card__slider-controls" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="project-card__nav-btn"
                        onClick={(e) => prevCardImage(e, project.id, project.images.length)}
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <span className="project-card__counter">
                        {currentImgIdx + 1} / {project.images.length}
                      </span>
                      <button
                        className="project-card__nav-btn"
                        onClick={(e) => nextCardImage(e, project.id, project.images.length)}
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </div>
                  )}

                  {/* Hover action overlay */}
                  <div className="project-card__hover-overlay">
                    <span className="project-card__inspect-btn">
                      View Case Study <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card__body">
                  <div className="project-card__client-meta">
                    <span className="project-card__client-name">{project.client}</span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>

                  <p className="project-card__desc">{project.description}</p>

                  {/* Tech stack chips */}
                  <div className="project-card__tags" aria-label="Technologies used">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-chip tech-chip--more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card footer with action */}
                  <div className="project-card__footer">
                    <span className="project-card__cta-link">
                      Explore Architecture &amp; Results <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="project-modal__header">
              <div>
                <span className="project-modal__category">{selectedProject.category} • {selectedProject.client}</span>
                <h2 id="modal-project-title" className="project-modal__title">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                className="project-modal__close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="project-modal__content">
              {/* Image Preview Gallery */}
              <div className="project-modal__gallery">
                <div className="project-modal__main-image-wrap">
                  <img
                    src={selectedProject.images[modalImageIndex] || selectedProject.images[0]}
                    alt={`${selectedProject.title} high resolution view ${modalImageIndex + 1}`}
                    className="project-modal__main-image"
                  />
                  {selectedProject.images.length > 1 && (
                    <div className="project-modal__gallery-arrows">
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (modalImageIndex - 1 + selectedProject.images.length) %
                              selectedProject.images.length
                          )
                        }
                        className="modal-arrow-btn"
                        aria-label="Previous screenshot"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (modalImageIndex + 1) % selectedProject.images.length
                          )
                        }
                        className="modal-arrow-btn"
                        aria-label="Next screenshot"
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="project-modal__thumbs">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        className={`project-modal__thumb-btn${modalImageIndex === idx ? ' active' : ''}`}
                        onClick={() => setModalImageIndex(idx)}
                        aria-label={`View screenshot ${idx + 1}`}
                      >
                        <img src={img} alt={`Thumb ${idx + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Impact Banner */}
              {selectedProject.impact && (
                <div className="project-modal__impact-banner">
                  <span className="impact-icon" aria-hidden="true">🚀</span>
                  <div>
                    <strong>Demonstrated Business Outcome:</strong>
                    <p>{selectedProject.impact}</p>
                  </div>
                </div>
              )}

              {/* Breakdown Grid */}
              <div className="project-modal__grid">
                <div className="project-modal__col">
                  <h4>The Business Problem</h4>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="project-modal__col">
                  <h4>Our Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              {/* Deliverables */}
              {selectedProject.deliverables && (
                <div className="project-modal__deliverables">
                  <h4>Key Deliverables</h4>
                  <ul className="project-modal__deliverables-list">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-bullet" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="project-modal__tech-section">
                <h4>Architecture &amp; Tech Stack</h4>
                <div className="project-modal__tech-chips">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-chip tech-chip--modal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA Footer */}
            <div className="project-modal__footer">
              <button
                className="btn btn--secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close Preview
              </button>
              <button
                className="btn btn--primary"
                onClick={() => handleSelectProjectForContact(selectedProject)}
              >
                Start a Similar Project <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
