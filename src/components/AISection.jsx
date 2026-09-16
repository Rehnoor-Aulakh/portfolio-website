const AI_FEATURES = [
  { icon: '🤖', title: 'Custom AI Agents', desc: 'Autonomous agents that research, plan, and execute multi-step tasks with minimal human oversight.' },
  { icon: '🧠', title: 'LLM Integration', desc: 'GPT-4, Claude, Gemini, Llama — we integrate the right model into your product with fine-tuning and RAG.' },
  { icon: '💬', title: 'Intelligent Chatbots', desc: 'Context-aware chatbots that remember, reason, and resolve — not just keyword-matching FAQ bots.' },
  { icon: '📊', title: 'ML Pipelines', desc: 'End-to-end machine learning from data ingestion to model deployment, monitoring, and retraining.' },
]

export default function AISection() {
  return (
    <section className="ai-section" id="ai" aria-labelledby="ai-title">
      <div className="ai-section__bg" aria-hidden="true" />

      <div className="section-wrap">
        <div className="ai-section__inner">
          {/* Left copy */}
          <div className="anim-fade-left">
            <span className="eyebrow">AI &amp; Machine Learning</span>
            <h2 id="ai-title">
              We build the<br /><em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>intelligence</em><br />behind your product.
            </h2>
            <p>
              AI isn't a buzzword for us — it's the core of what we ship. We've built
              production AI systems for sales, support, recruitment, legal, and data
              analytics — all delivering measurable ROI from day one.
            </p>

            <a className="btn btn--accent" href="#contact" id="ai-cta-btn">
              Discuss Your AI Project <span className="btn__arrow" aria-hidden="true">→</span>
            </a>

            <div style={{ marginTop: 40 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['GPT-4o', 'LangChain', 'LangGraph', 'Python', 'TensorFlow', 'HuggingFace', 'FastAPI', 'RAG'].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: '5px 12px',
                      border: '1px solid rgba(230,101,71,.35)',
                      borderRadius: '100px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '.6rem',
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,240,233,.7)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: features + neural visual */}
          <div className="anim-fade-right">
            {/* Neural net animation */}
            <div className="ai-visual" aria-hidden="true">
              <div className="neural-net">
                <div className="neural-ring neural-ring--1">
                  <div className="neural-dot neural-dot--1" />
                  <div className="neural-dot neural-dot--3" />
                </div>
                <div className="neural-ring neural-ring--2">
                  <div className="neural-dot neural-dot--2" />
                  <div className="neural-dot neural-dot--4" />
                </div>
                <div className="neural-ring neural-ring--3" />
                <div className="neural-center">🤖</div>
              </div>
            </div>

            {/* Feature grid */}
            <div className="ai-features" style={{ marginTop: 32 }}>
              {AI_FEATURES.map((f, i) => (
                <div className="ai-feature anim-fade-up" key={f.title} data-delay={(i + 1).toString()}>
                  <div className="ai-feature__icon" aria-hidden="true">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
