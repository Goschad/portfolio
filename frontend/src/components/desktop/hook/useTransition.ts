import { useRef, useState } from "react"

interface UseTransitionReturn {
    transitioning: boolean
    bgMirrored: boolean
    currentVideoSrc: string | null
    videoRef: React.RefCallback<HTMLVideoElement>
    onVideoEnded: () => void
    goForward: (onComplete: () => void) => void
    goBackward: (onComplete: () => void) => void
}

export function useTransition(
    forwardVideos: string[],
    backwardVideos: string[]
): UseTransitionReturn {
    const [queue, setQueue] = useState<string[]>([])
    const [index, setIndex] = useState(0)
    const [bgMirrored, setBgMirrored] = useState(false)
    const onCompleteRef = useRef<(() => void) | null>(null)
    const videoElRef = useRef<HTMLVideoElement | null>(null)

    const transitioning = queue.length > 0
    const currentVideoSrc = transitioning ? queue[index] : null

    const videoRef: React.RefCallback<HTMLVideoElement> = (el) => {
        videoElRef.current = el
        if (el) el.play().catch(() => {})
    }

    const startQueue = (videos: string[], onComplete: () => void) => {
        onCompleteRef.current = onComplete
        setQueue(videos)
        setIndex(0)
    }

    const handleTransitionEnd = () => {
        const next = index + 1
        if (next < queue.length) {
            setIndex(next)
        } else {
            const cb = onCompleteRef.current
            onCompleteRef.current = null
            setQueue([])
            setIndex(0)
            cb?.()
        }
    }

    const preloadVideos = (videos: string[]): Promise<void[]> => {
        return Promise.all(videos.map(src => new Promise<void>(resolve => {
            const v = document.createElement('video')
            v.src = src
            v.preload = 'auto'
            v.oncanplaythrough = () => resolve()
        })))
    }

    const goForward = (onComplete: () => void) => {
        preloadVideos(forwardVideos).then(() => {
            startQueue(forwardVideos, () => {
                setBgMirrored(true)
                onComplete()
            })
        })
    }

    const goBackward = (onComplete: () => void) => {
        preloadVideos(backwardVideos).then(() => {
            startQueue(backwardVideos, () => {
                setBgMirrored(false)
                onComplete()
            })
        })
    }

    return {
        transitioning,
        bgMirrored,
        currentVideoSrc,
        videoRef,
        onVideoEnded: handleTransitionEnd,
        goForward,
        goBackward,
    }
}