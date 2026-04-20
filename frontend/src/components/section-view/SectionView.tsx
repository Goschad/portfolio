import About from "./about/About"
import Contact from "./contact/Contact"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"
import "./style.css"

export default function SectionView({ id, onBack }: { id: string, onBack: () => void }) {
    return (
        <div className="section-view">
            <button className="section-view__back" onClick={onBack}>← Back</button>
            <div className="section-view__content">
                {id === 'about' && <About />}
                {id === 'skills' && <Skills />}
                {id === 'projects' && <Projects />}
                {id === 'contact' && <Contact />}
            </div>
        </div>
    )
}