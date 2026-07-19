import './style.css'

import { Fragment } from 'react'

const skills = [
    { cat: "Front", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Angular"] },
    { cat: "Back", items: ["Node.js"] },
    { cat: "Languages", items: ["C", "C++", "Python", "Bash"] },
    { cat: "Outils", items: ["Git", "GitHub", "Trello", "Figma", "Photoshop", "VSCode", "Vim"] },
    { cat: "Currently learning", items: ["C#", "F#", "GDScript"] }
]

export default function Skills() {
    return (
        <div className="section skills">
            <div className="skills__panel">
                {skills.map((g) => (
                    <section key={g.cat} className="skills__group">
                        <h2 className="skills__cat">{g.cat}</h2>
                        <p className="skills__items">
                            {g.items.map((item, i) => (
                                <Fragment key={item}>
                                    {i > 0 && <span className="skills__slash" aria-hidden="true">/</span>}
                                    <span className="skills__item">{item}</span>
                                </Fragment>
                            ))}
                        </p>
                    </section>
                ))}
            </div>
        </div>
    )
}
