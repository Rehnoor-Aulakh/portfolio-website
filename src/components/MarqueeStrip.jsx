const ITEMS = [
  'AI Agents', 'GPT-4o', 'React', 'LangChain', 'Python', 'Machine Learning',
  'Chatbots', 'TensorFlow', 'FastAPI', 'LangGraph', 'RAG', 'HuggingFace',
  'Node.js', 'TypeScript', 'Framer Motion', 'Next.js', 'PostgreSQL', 'Figma',
]

// Duplicate for seamless loop
const ALL = [...ITEMS, ...ITEMS]

export default function MarqueeStrip() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {ALL.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
