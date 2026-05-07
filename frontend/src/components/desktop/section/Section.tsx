import './style.css'

import About from '../about/About'
import Skills from '../skills/Skills'

interface SectionProps {
    id: string | null;
}

export default function Section({ id }: SectionProps)
{
    return (
        <>
            {id === 'about' && <About />}
            {id === 'skills' && <Skills />}
        </>
    )
}