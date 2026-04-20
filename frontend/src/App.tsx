import "./App.css"
import Background from "./components/background/Background";
import Overlay from "./components/overlay/Overlay";
import AudioButton from "./components/audio-button/AudioButton";
import SectionView from "./components/section-view/SectionView";
import PauseMenu from "./components/pause-menu/PauseMenu";
import { useState } from "react";
import { useAudio } from "./components/hook/UseAudio";
import reincarnated from "./assets/audio/reincarnated.mp3";

function App() {
    const [started, setStarted] = useState(false)
    const [currentSrc, setCurrentSrc] = useState(reincarnated)
    const { playing, start, toggle } = useAudio(currentSrc)
    const [overlayVisible, setOverlayVisible] = useState(true)
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const handleStart = () => {
        start()
        setStarted(true)
        setOverlayVisible(false)
    }
    
    return (
        <div className="app">
            <Background started={started} />
            <Overlay visible={overlayVisible} handleStart={handleStart} />

            {started && 
                <AudioButton playing={playing} onToggle={toggle} />
            }

            {activeSection ? (
                <SectionView 
                    id={activeSection} 
                    onBack={() => setActiveSection(null)} 
                    currentSrc={currentSrc}
                    onSelect={setCurrentSrc}
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

export default App
