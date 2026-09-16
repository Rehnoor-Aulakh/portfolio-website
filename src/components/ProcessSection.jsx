import { processSteps } from '../data/projects'

export default function ProcessSection() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="section-wrap">
        <div className="section-heading anim-fade-up" style={{ margin: '0 auto 0', textAlign: 'center', maxWidth: '100%' }}>
          <span className="eyebrow" style={{ display: 'flex', justifyContent: 'center' }}>
            How We Work
          </span>
          <h2 id="process-title">
            Good things, in <em>five acts.</em>
          </h2>
          <p className="section-heading__copy" style={{ margin: '0 auto', textAlign: 'center' }}>
            A clear process means fewer surprises, faster delivery, and better outcomes.
            Here's exactly how we work — every time.
          </p>
        </div>

        <div className="process-steps" style={{ marginTop: 64 }}>
          {processSteps.map(([num, title, desc], i) => (
            <div
              className="process-step anim-fade-up"
              key={num}
              data-delay={(i + 1).toString()}
              aria-label={`Step ${num}: ${title}`}
            >
              <span className="process-step__num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
