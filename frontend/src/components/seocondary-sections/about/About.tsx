import "./style.css"
import { useEffect, useRef } from 'react'

export default function About() {
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
            <div className="about__card" ref={cardRef}>
                <h1 className="about__name">Goschad</h1>
                <p className="about__role">Fullstack Web Developer</p>

                <div className="about__divider" />

                <div className="about__items">
                    <div className="about__item">
                        <span className="about__label">Education</span>
                        <span className="about__value">42 School Mulhouse</span>
                    </div>
                    <div className="about__item">
                        <span className="about__label">Looking for</span>
                        <span className="about__value">12 to 24 month apprenticeship</span>
                    </div>
                    <div className="about__item">
                        <span className="about__label">Current stack</span>
                        <span className="about__value">React, Next.js, Node.js</span>
                    </div>
                    <div className="about__item">
                        <span className="about__label">Focus</span>
                        <span className="about__value">.NET — software development</span>
                    </div>
                </div>
            </div>
        </div>
    )
}