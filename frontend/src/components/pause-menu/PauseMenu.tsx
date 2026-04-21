import "./style.css"
import { motion } from "framer-motion"

const sections = [
    { id: "me", label: "Goschad", href: "/portfolio/" },
    { id: "about", label: "About", href: null },
    { id: "github", label: "GitHub", href: "https://github.com/Goschad" },
    { id: "skills", label: "Skills", href: null },
    { id: "projects", label: "Projects", href: null },
    { id: "contact", label: "Contact", href: 'mailto:bouazamarwen.pro@gmail.com' },
    { id: "playlist", label: "Playlist", href: null },
]

interface PauseMenuProps {
    blurred?: boolean
    started?: boolean
    hidden?: boolean
    onSelect?: (id: string) => void
}

export default function PauseMenu({ blurred = false, started = false, hidden, onSelect }: PauseMenuProps) {
    return (
        <aside className={`pause-menu ${blurred ? 'pause-menu--blurred' : ''} ${started ? 'pause-menu--intro' : ''} ${hidden ? 'video--hidden' : ''}`}>
            <nav className="pause-menu__nav">
                {sections.map((s, i) => (
                    <div key={s.id} className={`nav-item-wrapper nav-item-wrapper--${i}`}>
                        <div
                            className="nav-item"
                            style={{ '--dur': `${3.1 + i * 0.3}s`, '--delay': `${i * 0.2}s` } as React.CSSProperties}
                            onClick={() => {
                                if (s.href === "/portfolio/" || s.href === "mailto:bouazamarwen.pro@gmail.com") window.location.assign(s.href)
                                else if (s.href) window.open(s.href, '_blank')
                                else onSelect?.(s.id)
                            }}
                        >
                            <motion.span 
                                className="nav-item__label"
                                whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 1.1 }}
                            >
                                <span className="nav-item__label-base">{s.label}</span>
                                <span className="nav-item__label-clip">{s.label}</span>
                            </motion.span>
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    )
}