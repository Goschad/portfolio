import About from "../seocondary-sections/about/About"
import Contact from "../seocondary-sections/contact/Contact"
import Projects from "../seocondary-sections/projects/Projects"
import Skills from "../seocondary-sections/skills/Skills"
import "./style.css"

interface SectionViewProps {
    id: string
    currentSrc: string
    onSelect: (src: string) => void
}

export default function SectionView({ id }: SectionViewProps) {
    return (
        <div className="section-view">
            <div className="section-view__content">
                {id === 'about' && <About />}
                {id === 'skills' && <Skills />}
                {id === 'projects' && <Projects />}
                {id === 'contact' && <Contact />}
            </div>
        </div>
    )
}