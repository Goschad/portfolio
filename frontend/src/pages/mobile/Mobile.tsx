import './../../components/mobile/styles/mobile.css'
import { useLenis } from './../../components/mobile/hook/useLenis'
import { Skills } from '../../components/mobile/skills/Skills'
import { Loader } from '../../components/mobile/ui/Loader'
import { CustomCursor } from '../../components/mobile/ui/CustomCursor'
import { ScrollIndicator } from '../../components/mobile/ui/ScrollIndicator'
import { Hero } from '../../components/mobile/hero/Hero'
import { About } from '../../components/mobile/about/About'
import { Projects } from '../../components/mobile/projects/Projects'
import { Contact } from '../../components/mobile/contact/Contact'

export default function Mobile()
{
    useLenis()

    return (
        <div className="mobile-portfolio">
            <Loader />
            <CustomCursor />
            <ScrollIndicator />
        
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        
            <footer className="footer">
                <span className="footer-copy">© {new Date().getFullYear()} Goschad</span>
                <span className="footer-copy">/* hello from the bottom */</span>
            </footer>
        </div>
    )
}