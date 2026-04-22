

import './style.css'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface BackButtonProps {
    projects_section?: boolean,
    onClick: () => void
}

export default function BackButton({ onClick, projects_section = false }: BackButtonProps) {
    return (
        <button className={`${projects_section ? 'section--view__project' : 'section-view__back'}`} onClick={onClick}>
            { !projects_section && <FaArrowLeftLong size={16} />}
            <span>Back</span>
            { projects_section && <FaArrowRightLong size={16} />}
        </button>
    )
}