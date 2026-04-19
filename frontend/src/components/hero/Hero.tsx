import './style.css'
import hero_loop from '../../assets/media/hero_loop.mp4'
import reincarnated from '../../assets/audio/reincarnated.mp3'
import { FaPause, FaPlay } from "react-icons/fa6";
import { useRef, useState, useEffect } from 'react'
import PauseMenu from '../pause-menu/PauseMenu';

interface HeroProps {
    musicSrc?: string
}

export default function Hero({ musicSrc = reincarnated }: HeroProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const playingRef = useRef(false)
    const [started, setStarted] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [overlayVisible, setOverlayVisible] = useState(true)

    const setPlayingState = (val: boolean) => {
        playingRef.current = val
        setPlaying(val)
    }

    const fadeInRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const fadeOutRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const fadeIn = (audio: HTMLAudioElement) => {
        if (fadeOutRef.current) { clearInterval(fadeOutRef.current); fadeOutRef.current = null }
        audio.play()
        fadeInRef.current = setInterval(() => {
            if (audio.volume < 0.95) audio.volume += 0.05
            else { audio.volume = 1; clearInterval(fadeInRef.current!); fadeInRef.current = null }
        }, 50)
    }

    const fadeOut = (audio: HTMLAudioElement) => {
        if (fadeInRef.current) { clearInterval(fadeInRef.current); fadeInRef.current = null }
        fadeOutRef.current = setInterval(() => {
            if (audio.volume > 0.05) audio.volume -= 0.05
            else { audio.volume = 0; audio.pause(); clearInterval(fadeOutRef.current!); fadeOutRef.current = null }
        }, 50)
    }

    const handleStart = () => {
        if (!audioRef.current) return
        fadeIn(audioRef.current)
        setStarted(true)
        setOverlayVisible(false)
        setPlayingState(true)
    }

    const toggleSound = () => {
        if (!audioRef.current) return
        if (playing) {
            fadeOut(audioRef.current)
        } else {
            fadeIn(audioRef.current)
        }
        setPlayingState(!playing)
    }

    useEffect(() => {
        const handleVisibility = () => {
            if (!audioRef.current || !playingRef.current) return
            if (document.hidden) {
                fadeOut(audioRef.current)
            } else {
                fadeIn(audioRef.current)
            }
        }

        document.addEventListener('visibilitychange', handleVisibility)
        return () => document.removeEventListener('visibilitychange', handleVisibility)
    }, [])

    return (
        <div className="hero-container">
            <audio ref={audioRef} src={musicSrc} loop />
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

            {started && (
                <button className="sound-btn" onClick={toggleSound}>
                    {playing ? <FaPause /> : <FaPlay />}
                </button>
            )}
            
            <PauseMenu blurred={!started} started={started} />
        </div>
    )
}