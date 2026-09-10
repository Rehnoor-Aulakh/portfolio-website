export default function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-heading__copy">{copy}</p>}</div>
}
