import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function useRedirectOnMobile(breakpoint = 768) {
    const navigate = useNavigate()
    
    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth < breakpoint)
                navigate('/portfolio/m');
        }
 
        checkSize();
        window.addEventListener('resize', checkSize);
    }, [navigate, breakpoint])
}
 