const skills = [
    { cat: "Front", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { cat: "Back", items: ["Node.js"] },
    { cat: "Languages", items: ["C", "C++", "Python", "Bash"] },
    { cat: "Outils", items: ["Git", "GitHub", "Trello", "Figma", "Photoshop", "VSCode", "Vim"] },
]

export default function Skills() {
    return (
        <div className="section skills">
            {skills.map((g) => (
                <div key={g.cat} className="skills__group">
                    <h2 className="skills__cat">{g.cat}</h2>
                    <div className="skills__items">
                        {g.items.map((item) => (
                            <span key={item} className="tag">{item}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}