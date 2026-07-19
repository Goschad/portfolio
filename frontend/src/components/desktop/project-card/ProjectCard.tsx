import './style.css'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react';

interface ProjectCardProps {
    icon?: ReactNode
    title: string
    description: string
    tags: string[]
    status?: string
}

export default function ProjectCard({ icon, title, description, tags, status }: ProjectCardProps) {
    return (
        <motion.div
            className='project-card'
            animate={{ rotate: 0 }}
            whileHover={{ scale: 1.25, rotate: -2, zIndex: 999 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
            {status && <span className='project-card__status'>{status}</span>}
            <div className='project-card__titlebar'>
                {icon && <span className='project-card__glyph'>{icon}</span>}
                <h2 className='project-card__title'>{title}</h2>
            </div>
            <p className='project-card__description'>{description}</p>
            <p className='project-card__stack'>
                <span className='project-card__stack-label'>stack //</span> {tags.join(' / ')}
            </p>
        </motion.div>
    )
}
