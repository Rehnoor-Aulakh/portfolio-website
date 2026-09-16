'use client'

import { useState, useEffect } from 'react'

const navItems = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['AI & ML', '#ai'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          <a className="wordmark" href="#top" aria-label="Loom Digital home">
            Loom<span>.</span>
          </a>
          <ul className="navbar__nav" role="list">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
            <li>
              <a className="navbar__cta" href="#contact" id="nav-cta-btn">
                Get a Free Quote
              </a>
            </li>
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{ position: 'absolute', top: 28, right: 24, background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--ink)' }}
        >✕</button>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          style={{ background: 'var(--accent)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontSize: '1rem' }}
        >
          Get a Free Quote
        </a>
      </div>
    </>
  )
}
