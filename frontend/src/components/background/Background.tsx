import "./style.css"
import hero_loop from '../../assets/media/hero_loop.mp4'

interface BackgroundProps {
    started?: boolean
    rotated?: boolean
    hidden?: boolean
}

export default function Background({ started, rotated, hidden }: BackgroundProps) {
    return (
        <video
            src={hero_loop}
            autoPlay loop muted
            className={`video ${rotated ? 'video--rotated' : ''} ${started && hidden ? 'video--hidden' : ''}`}
            onContextMenu={(e) => e.preventDefault()}
        />
    )
}