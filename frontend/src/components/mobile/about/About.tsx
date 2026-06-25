import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from '../data/portfolio'

export function About() {
    const { about } = portfolioData

    return (
        <section id="about" className="section">
            <div className="section-inner">
                <AnimatedSection className="section-tag">About me</AnimatedSection>

                <div className="about-grid">
                    <div>
                        <AnimatedSection delay={0.1}>
                            <h2 className="about-title">
                                Looking for an<br />
                                <em>apprenticeship.</em>
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="about-stats">
                            {about.stats.map((stat) => (
                                <div key={stat.label} className="stat">
                                <div className="stat-num">{stat.num}</div>
                                <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>

                    <div>
                        <AnimatedSection delay={0.1}>
                            <p className="about-text">{about.text1}</p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <p className="about-text">{about.text2}</p>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    )
}