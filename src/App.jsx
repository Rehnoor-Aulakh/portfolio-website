import { processSteps, projects, services, team } from './data/projects'
import ProjectCard from './components/ProjectCard'
import SectionHeading from './components/SectionHeading'

const navItems = [['Work', '#work'], ['Services', '#services'], ['About', '#about'], ['Contact', '#contact']]

function SocialLinks({ person }) {
  return <div className="social-links"><a href={person.linkedin} title="Replace this placeholder with a LinkedIn URL">LinkedIn</a><a href={person.github} title="Replace this placeholder with a GitHub URL">GitHub</a></div>
}

export default function App() {
  const featuredProject = projects[0]
  return <div className="site-shell">
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Rehnoor Aulakh home">RA<span>.</span></a><nav aria-label="Main navigation">{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><a className="header-availability" href="#contact">Available for select work</a></header>
    <main id="top">
      <section className="hero section-wrap" aria-labelledby="hero-title"><div className="hero__copy"><p className="eyebrow">Independent creative studio / 2026</p><h1 id="hero-title">Digital work with a little more <em>feeling.</em></h1><p className="hero__intro">Rehnoor Aulakh and a creative partner make thoughtful websites and digital experiences for people building something worth remembering.</p><a className="button button--dark" href="#work">See selected work <span aria-hidden="true">-&gt;</span></a></div><div className="hero__visual"><div className="hero__image-frame"><img src={featuredProject.images[0]} alt="Featured project preview" /><span className="hero__image-label">Selected / 01</span></div><p className="hero__caption">Good work should feel clear before it feels clever.</p></div><div className="hero__marker" aria-hidden="true">Scroll to explore <span>-&gt;</span></div></section>
      <section className="work section-wrap" id="work" aria-labelledby="work-title"><SectionHeading eyebrow="Selected work" title="A few things we have made." copy="Every project starts with a question, then earns its way into the details." /><div className="projects-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div></section>
      <section className="services section-wrap" id="services" aria-labelledby="services-title"><SectionHeading eyebrow="What we do" title="Small team. Wide range." /><div className="services-grid" id="services-title">{services.map((service) => <article className="service-item" key={service.number}><span className="service-item__number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section>
      <section className="about section-wrap" id="about" aria-labelledby="about-title"><div className="about__statement"><p className="eyebrow">A little about us</p><h2 id="about-title">We like the part where an idea becomes <em>real.</em></h2></div><div className="about__copy"><p>We are a small, flexible studio for thoughtful founders, teams, and people with a point of view. The work can be quiet or expressive, but it should always be useful, honest, and distinctly yours.</p><a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">-&gt;</span></a></div><div className="team-grid">{team.map((person) => <article className="person" key={person.name}><div className="person__initials" aria-hidden="true">{person.initials}</div><div><p className="person__role">{person.role}</p><h3>{person.name}</h3><p>{person.description}</p><SocialLinks person={person} /></div></article>)}</div></section>
      <section className="process section-wrap" aria-labelledby="process-title"><SectionHeading eyebrow="How we work" title="Good things, in three acts." /><div className="process-list" id="process-title">{processSteps.map(([number, title, description]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="contact section-wrap" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">Have a good one?</p><h2 id="contact-title">Let&apos;s make it <em>real.</em></h2></div><div className="contact__action"><p>Tell us what you are working on, what feels stuck, or what you cannot stop thinking about.</p><a className="button button--light" href="mailto:hello@rehnooraulakh.com">hello@rehnooraulakh.com <span aria-hidden="true">-&gt;</span></a></div></section>
    </main>
    <footer className="site-footer section-wrap"><span>RA<span className="accent">.</span> / Rehnoor Aulakh</span><span>Made with care, wherever we are.</span><a href="#top">Back to top <span aria-hidden="true">^</span></a></footer>
  </div>
}
