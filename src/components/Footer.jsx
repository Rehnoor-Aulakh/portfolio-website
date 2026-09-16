const FOOTER_LINKS = {
  Services: [
    ['AI Agent Development', '#services'],
    ['Chatbot Development', '#services'],
    ['Machine Learning', '#services'],
    ['Web Development', '#services'],
    ['E-commerce', '#services'],
    ['SEO & Growth', '#services'],
  ],
  Company: [
    ['Our Work', '#work'],
    ['About Us', '#about'],
    ['Our Process', '#about'],
    ['Contact', '#contact'],
  ],
  Connect: [
    ['GitHub — Rehnoor', 'https://github.com/Rehnoor-Aulakh'],
    ['GitHub — Jatin', 'https://github.com/jatinkalra1710'],
    ['LinkedIn', '#contact'],
    ['WhatsApp', '#contact'],
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="section-wrap">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <a className="footer__wordmark" href="#top" aria-label="Loom Digital home">
              Loom<span>.</span>
            </a>
            <p>
              A two-person AI &amp; digital studio building autonomous agents,
              intelligent chatbots, and premium web experiences for ambitious
              teams across USA, UK, EU &amp; Australia.
            </p>
            <div className="footer__available">
              <span className="footer__available-dot" aria-hidden="true" />
              Available for new projects
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div className="footer__col" key={heading}>
              <h4>{heading}</h4>
              <ul role="list">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span>© {year} Loom Digital. Built with care.</span>
          <span>
            Rehnoor Aulakh &amp; Jatin Kalra — AI &amp; Web Studio
          </span>
          <a href="#top" className="footer__back-top" aria-label="Back to top">
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
