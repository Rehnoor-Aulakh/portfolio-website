import { useEffect, useRef } from 'react'

export default function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const elements = document.querySelectorAll(
      '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale'
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ref])

  return ref
}
