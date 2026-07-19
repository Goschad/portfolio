import { AnimatedSection } from './../ui/AnimatedSection'
import { portfolioData } from '../data/portfolio'

const IconGithub = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
)

const IconExternal = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
)

export function Projects() {
    const { projects } = portfolioData

    return (
        <section id="projects" className="section">
            <div className="section-inner section-inner--wide">
                <AnimatedSection className="blade-tag">Work & projects</AnimatedSection>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.num} delay={i * 0.08} className="project-card">
                            {project.status && (
                                <span className="project-flag">{project.status}</span>
                            )}

                            <div className="project-titlebar">
                                <h3 className="project-title">{project.title}</h3>
                            </div>

                            <p className="project-wire">{project.num} // {project.year}</p>

                            <p className="project-desc">{project.desc}</p>

                            <p className="project-stack">
                                <span className="project-stack-label">stack //</span> {project.stack.join(' / ')}
                            </p>

                            <div className="project-links">
                                <a
                                    href={project.github ?? '#'}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ visibility: project.github ? 'visible' : 'hidden' }}
                                >
                                    <IconGithub /> GitHub
                                </a>
                                <a
                                    href={project.demo ?? '#'}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ visibility: project.demo ? 'visible' : 'hidden' }}
                                >
                                    <IconExternal /> Demo
                                </a>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
