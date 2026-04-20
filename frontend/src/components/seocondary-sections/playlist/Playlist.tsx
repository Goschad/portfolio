import './style.css'
import { AnimatePresence, motion, usePresenceData, wrap } from 'motion/react'
import { forwardRef, useState } from 'react'
import reincarnated from '../../../assets/audio/reincarnated.mp3'
import umla from '../../../assets/audio/umla.mp3'
import gimme from '../../../assets/audio/gimme_gimme.mp3'
import temptation from '../../../assets/audio/temptation.mp3'

import GNX from '../../../assets/cover/GNX.jpg'
import UMLA from '../../../assets/cover/UMLA.jpg'
import MCB from '../../../assets/cover/MCB.jpg'
import TEMPTATION from '../../../assets/cover/TEMPTATION.jpg'

interface Track {
    name: string
    src: string
    cover: string
}

const tracks: Track[] = [
    { name: 'Kendrick Lamar - reincarnated', src: reincarnated, cover: GNX },
    { name: 'Alpha Wann - UNE MAIN LAVE L\'AUTRE', src: umla, cover: UMLA },
    { name: 'Echo Thrills - Temptation', src: temptation, cover: TEMPTATION },
    { name: 'Nelick - GIMME GIMME', src: gimme, cover: MCB },
]

const Slide = forwardRef(function Slide(
    { cover, name }: { cover: string; name: string },
    ref: React.Ref<HTMLDivElement>
) {
    const direction = usePresenceData()
    return (
        <motion.div
            ref={ref}
            className="playlist-slide"
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{
                opacity: 1, x: 0,
                transition: { delay: 0.15, type: 'spring', visualDuration: 0.3, bounce: 0.35 },
            }}
            exit={{ opacity: 0, x: direction * -60 }}
        >
            <img src={cover} alt={name} />
        </motion.div>
    )
})

interface PlaylistProps {
    currentSrc: string
    onSelect: (src: string) => void
}

export default function Playlist({ currentSrc, onSelect }: PlaylistProps) {
    const [index, setIndex] = useState(() => {
        const i = tracks.findIndex(t => t.src === currentSrc)
        return i === -1 ? 0 : i
    })
    const [direction, setDirection] = useState<1 | -1>(1)

    const slide = (newDirection: 1 | -1) => {
        const next = wrap(0, tracks.length, index + newDirection)
        setIndex(next)
        setDirection(newDirection)
    }

    const track = tracks[index]

    const handlePlay = () => {
        onSelect(track.src)
    }

    return (
        <div className="playlist">
            <button className="playlist__arrow" onClick={() => slide(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                </svg>
            </button>

            <motion.div 
                className="playlist__stage"
                onClick={handlePlay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                <AnimatePresence custom={direction} initial={false} mode="popLayout">
                    <Slide key={index} cover={track.cover} name={track.name} />
                </AnimatePresence>

                <span className="playlist__name">{track.name}</span>
            </motion.div>

            <button className="playlist__arrow" onClick={() => slide(1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}