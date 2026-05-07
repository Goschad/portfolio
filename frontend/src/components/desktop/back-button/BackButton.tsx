

import { useEffect } from 'react';
import './style.css'
import { FaArrowRightLong } from "react-icons/fa6";

interface BackButtonProps {
    activeSection: string | null
    onClick: () => void
}

export default function BackButton({ activeSection, onClick }: BackButtonProps)
{
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && activeSection) {
                onClick()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [activeSection])

    return (
        <button className='to_right' onClick={onClick}>
            <span>Back</span>
            <FaArrowRightLong size={16} />
        </button>
    )
}