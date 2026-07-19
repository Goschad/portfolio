import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from './../data/portfolio'

export function Skills() {
    const { skillCategories } = portfolioData

    return (
        <section id="skills" className="section">
            <div className="section-inner">
                <AnimatedSection className="blade-tag">Stack</AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <p className="skills-intro">
                        Technologies I know and use to build solid products.
                    </p>
                </AnimatedSection>

                {skillCategories.map((category, ci) => (
                    <div key={category.label} className="skills-category">
                        <AnimatedSection delay={0.05 + ci * 0.1} className="skills-band">
                            {category.label}
                        </AnimatedSection>

                        <div className="skills-list">
                            {category.skills.map((skill, i) => (
                                <AnimatedSection key={skill.name} delay={0.05 + i * 0.04} className="skill-row">
                                    <img className="skill-glyph" src={skill.icon} alt="" />
                                    <span className="skill-name">{skill.name}</span>
                                    <span
                                        className="skill-wire"
                                        style={{ '--level': `${skill.level}%` } as React.CSSProperties}
                                        aria-label={`${skill.level}%`}
                                    />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
