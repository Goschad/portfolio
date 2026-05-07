import './style.css'
import { motion } from "framer-motion"

interface NavMenuProps {
    hidden?: boolean;
    onSelect?: (id: string) => void;
}

const sections = [
    { id: "me", label: "Goschad", href: "/portfolio/" },
    { id: "about", label: "About", href: null },
    { id: "github", label: "GitHub", href: "https://github.com/Goschad" },
    { id: "skills", label: "Skills", href: null },
    { id: "projects", label: "Projects", href: null },
    { id: "contact", label: "Contact", href: 'mailto:bouazamarwen.pro@gmail.com' },
    { id: "playlist", label: "Playlist", href: null },
]

export default function NavMenu({ hidden, onSelect }: NavMenuProps)
{
    function useLink(href: string | null, id: string)
    {
        if (id === "github" && href) 
            window.open(href, '_blank');
        else if (href) 
            window.location.assign(href);
        else
            onSelect?.(id)
    }
    return (
        <nav className={`nav-menu ${ hidden ? 'hidden' : ''}`}>
            {sections.map((s, i) => (
                <div key={s.id} className={`nav-item-wrapper nav-item-wrapper--${i}`}>
                    <div
                        className="nav-item"
                        onClick={() => {useLink(s.href, s.id)}}
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
    )
}