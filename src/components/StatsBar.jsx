'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/projects'

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div className="stat-item__value">
      {count}
      <span>{suffix}</span>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-bar" aria-label="Agency statistics" ref={ref}>
      <div className="section-wrap">
        <div className="stats-bar__grid">
          {stats.map((stat, i) => (
            <div className="stat-item anim-fade-up" key={stat.label} data-delay={i + 1}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <div className="stat-item__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
