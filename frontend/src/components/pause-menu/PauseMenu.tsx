import "./style.css"

const sections = [
    { id: "me", label: "Goschad", href: "/" },
    { id: "about", label: "About", href: null },
    { id: "github", label: "GitHub", href: "https://github.com/Goschad" },
    { id: "skills", label: "Skills", href: null },
    { id: "projects", label: "Projects", href: null },
    { id: "contact", label: "Contact", href: null },
]

interface PauseMenuProps {
    blurred?: boolean
    started?: boolean
    onSelect?: (id: string) => void
}

export default function PauseMenu({ blurred = false, started = false, onSelect }: PauseMenuProps) {
    return (
        <aside className={`pause-menu ${blurred ? 'pause-menu--blurred' : ''} ${started ? 'pause-menu--intro' : ''}`}>
            <nav className="pause-menu__nav">
                {sections.map((s, i) => (
                    <div key={s.id} className={`nav-item-wrapper nav-item-wrapper--${i}`}>
                        <div
                            className="nav-item"
                            style={{ '--dur': `${3.1 + i * 0.3}s`, '--delay': `${i * 0.2}s` } as React.CSSProperties}
                            onClick={() => {
                                if (s.href) window.location.assign(s.href)
                                else onSelect?.(s.id)
                            }}
                        >
                            <span className="nav-item__label">
                                <span className="nav-item__label-base">{s.label}</span>
                                <span className="nav-item__label-clip">{s.label}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    )
}