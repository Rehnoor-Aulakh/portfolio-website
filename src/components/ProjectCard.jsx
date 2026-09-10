import ProjectCarousel from './ProjectCarousel'

export default function ProjectCard({ project, index }) {
  return <article className="project-card">
    <ProjectCarousel project={project} />
    <div className="project-card__details"><div><p className="eyebrow">0{index + 1} / {project.category}</p><h3>{project.title}</h3><p className="project-card__description">{project.description}</p></div><div className="project-card__footer"><div className="tag-list" aria-label="Technologies used">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">-&gt;</span></a>}</div></div>
  </article>
}
