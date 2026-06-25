import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from './../data/portfolio'

export function Skills() {
    const { skillCategories } = portfolioData

    return (
        <section id="skills" className="section">
            <div className="section-inner">
                <AnimatedSection className="section-tag">Stack</AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <p className="skills-intro">
                        Technologies I know and use to build solid products.
                    </p>
                </AnimatedSection>

                {skillCategories.map((category, ci) => (
                    <div key={category.label} className="skills-category">
                        <AnimatedSection delay={0.05 + ci * 0.1} className="skills-category-label">
                            {category.label}
                        </AnimatedSection>

                        <div className="skills-grid">
                            {category.skills.map((skill, i) => (
                                <AnimatedSection key={skill.name} delay={0.05 + i * 0.04} className="skill-card">
                                    <div className="skill-icon">
                                        <img src={skill.icon} alt={skill.name} />
                                    </div>

                                    <div className="skill-name">{skill.name}</div>
                                    
                                    <div className="skill-bar">
                                        <div className="skill-bar-fill" style={{ '--level': `${skill.level}%` } as React.CSSProperties} />
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}