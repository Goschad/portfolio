import './style.css'

import { useEffect, useRef } from 'react'

const dossier = [
    { label: 'Education', value: '42 School Mulhouse' },
    { label: 'Looking for', value: '12 to 24 month apprenticeship' },
    { label: 'Languages', value: 'French, English' },
    { label: 'Current stack', value: 'React, Next.js, Node.js, C#' },
    { label: 'Focus', value: '.NET — software development' },
]

export default function About()
{
        const cardRef = useRef<HTMLDivElement>(null)

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                if (!cardRef.current) return
                const rect = cardRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const dx = (e.clientX - centerX) * 0.08
                const dy = (e.clientY - centerY) * 0.08
                cardRef.current.style.transform = `translate(${dx}px, ${dy}px)`
            }

            const handleMouseLeave = () => {
                if (!cardRef.current) return
                cardRef.current.style.transform = 'translate(0px, 0px)'
            }

            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseleave', handleMouseLeave)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseleave', handleMouseLeave)
            }
        }, [])

    return (
        <div className="about">
            <div className="about__plate" ref={cardRef}>
                <header className="about__id">
                    <h1 className="about__name">Goschad</h1>
                </header>
                <p className="about__role">Fullstack Web Developer</p>

                <ul className="about__dossier">
                    {dossier.map((row) => (
                        <li key={row.label} className="about__row">
                            <span className="about__row-inner">
                                <span className="about__label">{row.label}</span>
                                <span className="about__value">{row.value}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
