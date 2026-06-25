import './style.css'
import { useState } from 'react'
import { useAudio } from './../hook/useAudio'

import umla from './../../../assets/audio/umla.mp3'
import reincarnated from './../../../assets/audio/reincarnated.mp3'
import zappy from './../../../assets/audio/zappy.mp3'

const tracks = [
    { title: 'une main lave l\'autre', src: umla },
    { title: 'reincarnated',     src: reincarnated },
    { title: 'zappy',    src: zappy },
]

export default function Playlist() {
    const [index, setIndex] = useState(0)
    const { playing, toggle } = useAudio(tracks[index].src)

    const prev = () => setIndex(i => (i - 1 + tracks.length) % tracks.length)
    const next = () => setIndex(i => (i + 1) % tracks.length)

    return (
        <div className="playlist">
            <button className="playlist__arrow" onClick={prev} aria-label="Previous">
                ‹
            </button>

            <button
                className={`playlist__title ${!playing ? 'playlist__title--paused' : ''}`}
                onClick={toggle}
                aria-label={playing ? 'Pause' : 'Play'}
            >
                <span className="playlist__title-text">{tracks[index].title}</span>
                <span className="playlist__status">{playing ? '▮▮' : '▶'}</span>
            </button>

            <button className="playlist__arrow" onClick={next} aria-label="Next">
                ›
            </button>
        </div>
    )
}