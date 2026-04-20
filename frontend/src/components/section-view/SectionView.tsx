import About from "../seocondary-sections/about/About"
import Contact from "../seocondary-sections/contact/Contact"
import Playlist from "../seocondary-sections/playlist/Playlist"
import Projects from "../seocondary-sections/projects/Projects"
import Skills from "../seocondary-sections/skills/Skills"
import BackButton from "./back-button/BackButton"
import "./style.css"

interface SectionViewProps {
    id: string
    onBack: () => void
    currentSrc: string
    onSelect: (src: string) => void
}

export default function SectionView({ id, onBack, currentSrc, onSelect }: SectionViewProps) {
    return (
        <div className="section-view">
            <BackButton onClick={onBack} />
            <div className="section-view__content">
                {id === 'about' && <About />}
                {id === 'skills' && <Skills />}
                {id === 'projects' && <Projects />}
                {id === 'contact' && <Contact />}
                {id === 'playlist' && <Playlist currentSrc={currentSrc} onSelect={onSelect} />}
            </div>
        </div>
    )
}