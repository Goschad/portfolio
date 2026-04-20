

import './style.css'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton({ onClick }: { onClick: () => void }) {
    return (
        <button className="section-view__back" onClick={onClick}>
            <FaArrowLeftLong size={16} />
            <span>Back</span>
        </button>
    )
}