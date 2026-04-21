import "./App.css"
import Background from "./components/background/Background";
import Overlay from "./components/overlay/Overlay";
import AudioButton from "./components/audio-button/AudioButton";
import SectionView from "./components/section-view/SectionView";
import PauseMenu from "./components/pause-menu/PauseMenu";
import { useRef, useState } from "react";
import { useAudio } from "./components/hook/UseAudio";
import { createPortal } from "react-dom";
import umla from "./assets/audio/umla.mp3";
import BackButton from "./components/back-button/BackButton";
import Playlist from "./components/seocondary-sections/playlist/Playlist";

import outro from "./assets/media/hero_outro.mp4"
import r_intro from "./assets/media/hero_r_intro.mp4"
import r_outro from "./assets/media/hero_r_outro.mp4"
import intro from "./assets/media/hero_intro.mp4"

function App() {
    const [started, setStarted] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(umla);
    const { playing, start, toggle } = useAudio(currentSrc);
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const [transitionQueue, setTransitionQueue] = useState<string[]>([])
    const [transitionIndex, setTransitionIndex] = useState(0)
    const [bgRotated, setBgRotated] = useState(false)
    const [onTransitionComplete, setOnTransitionComplete] = useState<(() => void) | null>(null)

    const runTransition = (videos: string[], onComplete: () => void) => {
        setTransitionQueue(videos)
        setTransitionIndex(0)
        setOnTransitionComplete(() => onComplete)
    }

    const transitionRefs = useRef<(HTMLVideoElement | null)[]>([])

    const handleTransitionEnd = () => {
        const next = transitionIndex + 1
        if (next < transitionQueue.length) {
            setTransitionIndex(next)
            transitionRefs.current[next]?.play()
        } else {
            setTransitionQueue([])
            onTransitionComplete?.()
        }
    }

    const handleSelect = (id: string) => {
        if (id === 'about') {
            runTransition([outro, r_intro], () => {
                setActiveSection('about')
                setBgRotated(true)
            })
        } else {
            setActiveSection(id)
        }
    }

    const handleBack = () => {
        if (activeSection === 'about') {
            runTransition([r_outro, intro], () => {
                setActiveSection(null)
                setBgRotated(false)
            })
        } else {
            setActiveSection(null)
        }
    }

    const handleStart = () => {
        start();
        setStarted(true);
        setOverlayVisible(false);
    }

    const sectionColors: Record<string, string> = {
        about:    'rgba(255, 143, 183, 0)',
        skills:   'rgba(200, 0, 0, 0.85)',
        projects: 'rgba(160, 213, 133, 0.85)',
        contact:  'rgba(147, 112, 219, 0.85)',
        playlist: 'rgba(0, 0, 70, 0.85)',
    }

    const transitioning = transitionQueue.length > 0

    return (
        <>
            {transitioning && createPortal(
                <>
                    {transitionQueue.map((src, i) => (
                        <video
                            key={i}
                            ref={el => { transitionRefs.current[i] = el }}
                            src={src}
                            muted
                            autoPlay={i === 0}
                            className="transition-video"
                            style={{ opacity: i === transitionIndex ? 1 : 0 }}
                            onEnded={i === transitionIndex ? handleTransitionEnd : undefined}
                        />
                    ))}
                </>,
                document.body
            )}

            <div className={`app ${started ? 'app--started' : ''}`}>

                <Background started={started} rotated={bgRotated} />

                {transitioning && (
                    <video
                        key={transitionIndex}
                        src={transitionQueue[transitionIndex]}
                        autoPlay
                        muted
                        className="transition-video"
                        onEnded={handleTransitionEnd}
                    />
                )}

                {!transitioning && activeSection === 'playlist' && (
                    <Playlist currentSrc={currentSrc} onSelect={setCurrentSrc} />
                )}

                <div
                    className="section-tint"
                    style={{ background: !transitioning && activeSection ? sectionColors[activeSection] : 'transparent' }}
                />

                <Overlay visible={overlayVisible} handleStart={handleStart} />

                {started && !transitioning &&
                    <AudioButton playing={playing} onToggle={toggle} />
                }

                {!transitioning && activeSection && (
                    <BackButton onClick={handleBack} />
                )}

                {!transitioning && (
                    activeSection ? (
                        <SectionView
                            id={activeSection}
                            currentSrc={currentSrc}
                            onSelect={setCurrentSrc}
                        />
                    ) : (
                        <PauseMenu
                            blurred={!started}
                            started={started}
                            onSelect={(id) => handleSelect(id)}
                        />
                    )
                )}
            </div>
        </>
    )
}

export default App
