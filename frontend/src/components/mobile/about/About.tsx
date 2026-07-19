import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from '../data/portfolio'

export function About() {
    const { about } = portfolioData

    return (
        <section id="about" className="section">
            <div className="section-inner">
                <AnimatedSection className="blade-tag">About me</AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <h2 className="about-title">
                        <span className="about-title-plate">
                            Looking for an <em>apprenticeship.</em>
                        </span>
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.15} className="about-texts">
                    <p className="about-text">{about.text1}</p>
                    <p className="about-text">{about.text2}</p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="about-dossier">
                    {about.stats.map((stat) => (
                        <div key={stat.label} className="about-strip">
                            <span className="about-strip-inner">
                                <span className="about-strip-num">{stat.num}</span>
                                <span className="about-strip-label">{stat.label}</span>
                            </span>
                        </div>
                    ))}
                </AnimatedSection>
            </div>
        </section>
    )
}
