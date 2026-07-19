

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
        <button className='back-blade' onClick={onClick}>
            <span className='back-blade__label'>Back</span>
            <FaArrowRightLong className='back-blade__arrow' size={15} />
        </button>
    )
}
