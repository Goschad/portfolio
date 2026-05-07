import './style.css'

interface OverlayProps {
    visible: boolean
    handleStart: () => void
}

export default function Overlay({ visible, handleStart }: OverlayProps) {
    return (
        <div
            className={`overlay ${!visible ? 'hidden' : ''}`}
            onClick={handleStart}
        >
            <span className="text">
                Click anywhere
            </span>
        </div>
    )
}