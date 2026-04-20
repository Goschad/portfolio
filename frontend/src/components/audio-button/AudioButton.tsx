import './style.css'
import { FaPause, FaPlay } from "react-icons/fa6";

interface AudioButtonProps {
    playing: boolean
    onToggle: () => void
}

export default function AudioButton({ playing, onToggle }: AudioButtonProps) {
    return (
        <button className="sound-btn" onClick={onToggle}>
            {playing ? <FaPause /> : <FaPlay />}
        </button>
    )
}
