import { useRef, useState, useEffect } from 'react'

export function useAudio(src: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const playingRef = useRef(false)
    const [playing, setPlaying] = useState(false)

    const fadeInRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const fadeOutRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const setPlayingState = (val: boolean) => {
        playingRef.current = val
        setPlaying(val)
    }

    const fadeIn = (audio: HTMLAudioElement) => {
        if (fadeOutRef.current) { clearInterval(fadeOutRef.current); fadeOutRef.current = null }
        audio.volume = 0
        audio.play()
        fadeInRef.current = setInterval(() => {
            if (audio.volume < 0.95) audio.volume += 0.05
            else { audio.volume = 1; clearInterval(fadeInRef.current!); fadeInRef.current = null }
        }, 50)
    }

    const fadeOut = (audio: HTMLAudioElement, onDone?: () => void) => {
        if (fadeInRef.current) { clearInterval(fadeInRef.current); fadeInRef.current = null }
        fadeOutRef.current = setInterval(() => {
            if (audio.volume > 0.05) audio.volume -= 0.05
            else {
                audio.volume = 0
                audio.pause()
                clearInterval(fadeOutRef.current!)
                fadeOutRef.current = null
                onDone?.()
            }
        }, 50)
    }

    useEffect(() => {
        const wasPlaying = playingRef.current
        const prev = audioRef.current

        if (prev) {
            if (fadeInRef.current) { clearInterval(fadeInRef.current); fadeInRef.current = null }
            if (fadeOutRef.current) { clearInterval(fadeOutRef.current); fadeOutRef.current = null }
            prev.pause()
        }

        const audio = new Audio(src)
        audio.loop = true
        audioRef.current = audio

        if (wasPlaying) fadeIn(audio)

        return () => {
            audio.pause()
        }
    }, [src])

    const toggle = () => {
        const audio = audioRef.current
        if (!audio) return
        if (playingRef.current) {
            fadeOut(audio)
        } else {
            fadeIn(audio)
        }
        setPlayingState(!playingRef.current)
    }

    const start = () => {
        const audio = audioRef.current
        if (!audio) return
        fadeIn(audio)
        setPlayingState(true)
    }

    useEffect(() => {
        const handleVisibility = () => {
            const audio = audioRef.current
            if (!audio || !playingRef.current) return
            if (document.hidden) fadeOut(audio)
            else fadeIn(audio)
        }
        document.addEventListener('visibilitychange', handleVisibility)
        return () => document.removeEventListener('visibilitychange', handleVisibility)
    }, [])

    return { playing, start, toggle }
}
