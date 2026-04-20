import "./style.css"
import hero_loop from '../../assets/media/hero_loop.mp4'

interface BackgroundProps {
    started?: boolean
}

export default function Background({ started }: BackgroundProps) {
    return (
        <video
            src={hero_loop}
            autoPlay loop muted
            className={`video ${started ? 'video--started' : ''}`}
            onContextMenu={(e) => e.preventDefault()}
        />
    )
}