'use client'

import { useEffect } from 'react'
import './index.css'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeStrip from './components/MarqueeStrip'
import StatsBar from './components/StatsBar'
import ServicesSection from './components/ServicesSection'
import AISection from './components/AISection'
import ProjectsSection from './components/ProjectsSection'
import TeamSection from './components/TeamSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import FloatingCTA from './components/FloatingCTA'
import Footer from './components/Footer'

export default function App() {
  // Boot scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale')
        .forEach((el) => observer.observe(el))
    }

    // Initial pass
    observe()

    // Re-observe after short delay to catch dynamically rendered elements
    const t = setTimeout(observe, 300)

    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <div className="site-shell">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero — typewriter + floating cards */}
        <HeroSection />

        {/* 2. Infinite scrolling tech stack strip */}
        <MarqueeStrip />

        {/* 3. Animated stats counters */}
        <StatsBar />

        {/* 4. Services grid (filterable All/AI/Web) */}
        <ServicesSection />

        {/* 5. AI & ML dark showcase section */}
        <AISection />

        {/* 6. Projects grid (filterable All/AI/ML/Web) */}
        <ProjectsSection />

        {/* 7. Team — Rehnoor & Jatin */}
        <TeamSection />

        {/* 9. Process — 5 steps */}
        <ProcessSection />

        {/* 10. Contact form + WhatsApp CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <FloatingCTA />
    </div>
  )
}
