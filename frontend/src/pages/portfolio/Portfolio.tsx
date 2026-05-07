import "./style.css"

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import NavMenu from "../../components/desktop/nav-menu/NavMenu";
import BackButton from "../../components/desktop/back-button/BackButton";
import Background from "./../../components/desktop/background/Background"
import Overlay from "./../../components/desktop/overlay/Overlay"
import ColorFilter from "../../components/desktop/color-filter/ColorFilter";
import Section from "../../components/desktop/section/Section";
import Projects from "../../components/desktop/projects/Projects";

import intro from "./../../assets/video/transition/intro.mp4"
import outro from "./../../assets/video/transition/outro.mp4"
import r_intro from "./../../assets/video/transition/rintro.mp4"
import r_outro from "./../../assets/video/transition/routro.mp4"

import { useTransition } from "./../../components/desktop/hook/useTransition"
// import { useAudio } from "../../components/desktop/hook/useAudio";

export default function Portfolio()
{
    const [started, setStarted] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    // const [currentSrc, setCurrentSrc] = useState("");
    //const { playing, start, toggle } = useAudio(currentSrc);

    const {
        transitioning,
        bgMirrored,
        currentVideoSrc,
        videoRef,
        onVideoEnded,
        goForward,
        goBackward,
    } = useTransition(
        [outro, r_intro],   // forward  : outro → rintro → miroir
        [r_outro, intro],   // backward : routro → intro → normal
    )

    const handleStart = () => {
        setStarted(true);
        setOverlayVisible(false);
    }

    const handleSelect = (id: string) => {
        if (id === "about") {
            goForward(() => setActiveSection("about"))
        } else {
            setActiveSection(id)
        }
    }

    const handleBack = () => {
        if (activeSection === "about") {
            goBackward(() => setActiveSection(null))
        } else {
            setActiveSection(null)
        }
    }

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && activeSection) handleBack()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [activeSection])

    return (
        <>
            {/* Back button — toujours dans le body pour passer au-dessus de tout */}
            {!transitioning && activeSection && createPortal(
                <BackButton activeSection={activeSection} onClick={handleBack} />,
                document.body
            )}

            {/* Projects — rendu dans le body */}
            {!transitioning && activeSection === "projects" && createPortal(
                <Projects />,
                document.body
            )}

            {!transitioning && activeSection === 'playlist' && (
                // <Playlist currentSrc={currentSrc} onSelect={setCurrentSrc} />
                <></>
            )}

            {/* Vidéo de transition — par-dessus tout */}
            {transitioning && currentVideoSrc && createPortal(
                <>
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9998,
                        background: 'white',
                        opacity: 0,
                        animation: 'show 0s 0.05s forwards',
                    }} />
                    <video
                        key={currentVideoSrc}
                        ref={videoRef}
                        src={currentVideoSrc}
                        muted
                        autoPlay
                        className="transition-video"
                        onEnded={onVideoEnded}
                    />
                </>,
                document.body
            )}

            <div className={`app 
                ${started ? "after-click" : ""} 
                ${activeSection === "projects" ? "projects-section" : ""}`}
            >
                {/* bgMirrored passé au Background pour le flip CSS */}
                <Background mirrored={bgMirrored} />

                <Overlay visible={overlayVisible} handleStart={handleStart} />
                <ColorFilter section={activeSection} />

                <NavMenu
                    hidden={!started || activeSection != null}
                    onSelect={handleSelect}
                />

                {!transitioning && activeSection && <Section id={activeSection} />}
            </div>
        </>
    )
}
