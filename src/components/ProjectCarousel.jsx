import { useEffect, useRef, useState } from 'react'

export default function ProjectCarousel({ project }) {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateControls = () => {
    const track = trackRef.current
    if (!track) return
    setCanScrollLeft(track.scrollLeft > 4)
    setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }

  useEffect(() => {
    updateControls()
    const track = trackRef.current
    window.addEventListener('resize', updateControls)
    track?.addEventListener('scroll', updateControls, { passive: true })
    return () => { window.removeEventListener('resize', updateControls); track?.removeEventListener('scroll', updateControls) }
  }, [])

  const move = (direction) => {
    const track = trackRef.current
    const firstImage = track?.querySelector('.project-carousel__item')
    if (!track || !firstImage) return
    track.scrollBy({ left: direction * (firstImage.getBoundingClientRect().width + 16), behavior: 'smooth' })
  }

  return <div className="project-carousel">
    <div className="project-carousel__topline"><span>{project.images.length} views</span><div className="carousel-controls" aria-label={`${project.title} carousel controls`}><button type="button" onClick={() => move(-1)} disabled={!canScrollLeft} aria-label="Previous project image">Prev</button><button type="button" onClick={() => move(1)} disabled={!canScrollRight} aria-label="Next project image">Next</button></div></div>
    <div ref={trackRef} className="project-carousel__track" tabIndex="0">
      {project.images.map((image, index) => <figure className="project-carousel__item" key={image}><img src={image} alt={`${project.title}, view ${index + 1}`} loading={index === 0 ? 'eager' : 'lazy'} /></figure>)}
    </div>
    <p className="carousel-hint">Swipe to explore</p>
  </div>
}
