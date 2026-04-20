const projects = [
    {
        title: "Lorem ipsum dolor sit amet",
        year: "2025",
        context: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet",
        techs: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind", "Stripe"],
        link: null,
    },
    {
        title: "",
        year: "2024",
        context: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet",
        techs: ["React", "Node.js"],
        link: null,
    },
]

export default function Projects() {
    return (
        <div className="section projects">
            {projects.map((p) => (
                <div key={p.title} className="project-card">
                    <div className="project-card__header">
                        <span className="project-card__year">{p.year}</span>
                        <span className="project-card__context">{p.context}</span>
                    </div>
                    <h2 className="project-card__title">{p.title}</h2>
                    <p className="project-card__desc">{p.desc}</p>
                    <div className="project-card__techs">
                        {p.techs.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    {p.link && <a href={p.link} target="_blank" className="project-card__link">Lorem ipsum dolor sit amet →</a>}
                </div>
            ))}
        </div>
    )
}