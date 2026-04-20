import './style.css'
import hero_loop from '../../assets/media/hero_loop.mp4'
import reincarnated from '../../assets/audio/reincarnated.mp3'
import { useState } from 'react'
import { useAudio } from '../hook/UseAudio'
import AudioButton from '../audio-button/AudioButton'
import PauseMenu from '../pause-menu/PauseMenu'
import SectionView from '../section-view/SectionView'

interface HeroProps {
    musicSrc?: string
}

export default function Hero({ musicSrc = reincarnated }: HeroProps) {
    const [started, setStarted] = useState(false)
    const { playing, start, toggle } = useAudio(musicSrc)
    const [overlayVisible, setOverlayVisible] = useState(true)
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const handleStart = () => {
        start()
        setStarted(true)
        setOverlayVisible(false)
    }

    return (
        <div className="hero-container">
            <video
                src={hero_loop}
                autoPlay loop muted
                className={`hero-video ${started ? 'hero-video--started' : ''}`}
                onContextMenu={(e) => e.preventDefault()}
            />

            <div
                className={`click-overlay ${!overlayVisible ? 'click-overlay--hidden' : ''}`}
                onClick={handleStart}
            >
                <span className="click-label">Click anywhere</span>
            </div>

            {started && <AudioButton playing={playing} onToggle={toggle} />}

            {activeSection ? (
                <SectionView
                    id={activeSection} 
                    onBack={() => setActiveSection(null)}
                />
            ) : (
                <PauseMenu
                    blurred={!started}
                    started={started}
                    onSelect={(id) => setActiveSection(id)}
                />
            )}
        </div>
    )
}
