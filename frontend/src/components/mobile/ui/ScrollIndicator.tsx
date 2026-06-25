import { useEffect, useState } from 'react'

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'contact']

export function ScrollIndicator() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SECTIONS.indexOf(e.target.id)
            if (idx >= 0) setActive(idx)
          }
        })
      },
      { threshold: 0.4 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="scroll-indicator">
      {SECTIONS.map((id, i) => (
        <button
          key={id}
          className={`scroll-dot${active === i ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Aller à ${id}`}
        />
      ))}
    </div>
  )
}