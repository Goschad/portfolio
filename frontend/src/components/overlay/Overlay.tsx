import './style.css'

interface OverlayProps {
    visible: boolean
    handleStart: () => void
}

export default function Overlay({ visible, handleStart }: OverlayProps) {
    return (
        <div
            className={`click-overlay ${!visible ? 'click-overlay--hidden' : ''}`}
            onClick={handleStart}
        >
            <span className="click-label">
                Click anywhere
            </span>
        </div>
    )
}