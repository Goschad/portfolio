import './style.css'
/*import { useEffect, useState } from 'react'
import MobileBackground from '../../components/mobile/mobile-background/MobileBackground'
import Divider from '../../components/mobile/divider/Divider'
import SectionTitle from '../../components/mobile/section-title/SectionTitle'

export default function Mobile()
{
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const hours = time.getHours().toString().padStart(2, "0")
    const minutes = time.getMinutes().toString().padStart(2, "0")

    return (
        <div className="phone">
            <MobileBackground />

            <div className="status-bar">
                <span>{hours}:{minutes}</span>
                <span>SYS_OK <span className="blink">_</span></span>
            </div>

            <div className="top-accent"></div>

            <div className="hero">
                <div className="avatar-wrap">
                <img src='https://avatars.githubusercontent.com/u/139184731?s=400&u=0dc6e09995e2e231113e7cb49e58e6e72a5582d1&v=4' className="avatar"></img>
                <div className="avatar-ring"></div>
                </div>
                <div className="name">VOTRE NOM</div>
                <div className="title-label">Fullstack Developer</div>
                <div className="bio">Passionné par les interfaces web, les systèmes bas-niveau et l'architecture logicielle. En constante évolution.</div>
            </div>

            <Divider />

            <div className="section" style={{ marginTop: '20px' }}> 
                <SectionTitle title='competence' />
                <div className="skills-grid">

                <div className="skill-cat front">
                    <div className="cat-name">Front-end</div>
                    <div className="chips">
                    <span className="chip cyan">HTML/CSS</span>
                    <span className="chip cyan">JavaScript</span>
                    <span className="chip cyan">TypeScript</span>
                    <span className="chip cyan">React</span>
                    <span className="chip cyan">Next.js</span>
                    <span className="chip cyan">Tailwind</span>
                    <span className="chip cyan">Angular</span>
                    </div>
                </div>

                <div className="skill-cat back">
                    <div className="cat-name">Back-end</div>
                    <div className="chips">
                    <span className="chip mag">Node.js</span>
                    </div>
                </div>

                <div className="skill-cat lang">
                    <div className="cat-name">Langages</div>
                    <div className="chips">
                    <span className="chip vio">C</span>
                    <span className="chip vio">C++</span>
                    <span className="chip vio">Python</span>
                    <span className="chip vio">Bash</span>
                    </div>
                </div>

                <div className="skill-cat tools">
                    <div className="cat-name">Outils</div>
                    <div className="chips">
                    <span className="chip amb">Git</span>
                    <span className="chip amb">GitHub</span>
                    <span className="chip amb">Figma</span>
                    <span className="chip amb">Trello</span>
                    <span className="chip amb">Photoshop</span>
                    <span className="chip amb">VSCode</span>
                    <span className="chip amb">Vim</span>
                    </div>
                </div>

                <div className="skill-cat learning">
                    <div className="cat-name">En cours</div>
                    <div className="chips">
                    <span className="chip grn">C#</span>
                    <span className="chip grn">F#</span>
                    </div>
                </div>

                </div>
            </div>

            <div className="divider"></div>

            <div className="section" style={{ marginTop: '20px' }}>
                <div className="section-title">Projets</div>
                <div className="projects-list">

                <div className="project-card">
                    <div className="project-header">
                    <div className="project-name">Projet Alpha</div>
                    <span className="project-badge badge-react">REACT</span>
                    </div>
                    <div className="project-desc">Application web de gestion de tâches avec synchronisation en temps réel.</div>
                    <div className="project-stack">
                    <span className="stack-tag">TypeScript</span>
                    <span className="stack-tag">Next.js</span>
                    <span className="stack-tag">Tailwind</span>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                    <div className="project-name">Projet Beta</div>
                    <span className="project-badge badge-node">NODE</span>
                    </div>
                    <div className="project-desc">API REST avec authentification JWT et base de données NoSQL.</div>
                    <div className="project-stack">
                    <span className="stack-tag">Node.js</span>
                    <span className="stack-tag">JavaScript</span>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                    <div className="project-name">Projet Gamma</div>
                    <span className="project-badge badge-ts">TS</span>
                    </div>
                    <div className="project-desc">Outil CLI en C++ pour l'automatisation de scripts Bash.</div>
                    <div className="project-stack">
                    <span className="stack-tag">C++</span>
                    <span className="stack-tag">Bash</span>
                    </div>
                </div>

                </div>
            </div>

            <div className="divider"></div>

            <div className="section" style={{ marginTop: '20px' }}>
                <div className="section-title">Contact</div>
                <div className="contact-grid">
                <div className="contact-btn">
                    <span className="contact-icon">&#9993;</span>
                    <span className="contact-label">Email</span>
                </div>
                <div className="contact-btn">
                    <span className="contact-icon">&#9671;</span>
                    <span className="contact-label">GitHub</span>
                </div>
                <div className="contact-btn">
                    <span className="contact-icon">&#9724;</span>
                    <span className="contact-label">LinkedIn</span>
                </div>
                <div className="contact-btn">
                    <span className="contact-icon">&#9632;</span>
                    <span className="contact-label">CV PDF</span>
                </div>
                </div>
            </div>

            <div className="footer">
                &lt; PORTFOLIO v1.0 / SYS_ONLINE &gt;
            </div>
            </div>
    )
}
    */

export default function Mobile() {
    return (
        <div>
            <div>
                <h1>Mobile version coming soon</h1>
                <p>The portfolio is best viewed on a desktop for now.</p>
            </div>
        </div>
    )
}