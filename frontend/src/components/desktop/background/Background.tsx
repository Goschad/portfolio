import './style.css'
import { useEffect, useRef } from 'react'
import background from '/src/assets/video/loop/persona_loop.mp4'

interface BackgroundProps {
    mirrored: boolean;
}

export default function Background({ mirrored }: BackgroundProps)
{
    const videoRef = useRef<HTMLVideoElement>(null)

    // Pause the video when it's not visible to save resources
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting ? video.play() : video.pause()
        })
        observer.observe(video)

        return () => observer.disconnect()
    }, [])

    return (
        <video 
            ref={videoRef}
            autoPlay loop muted
            className="background-video"
            style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
            onContextMenu={(e) => e.preventDefault()}
        >
            <source src={background} type="video/mp4" />
        </video>
    )
}