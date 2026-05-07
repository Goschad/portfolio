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
            whileHover={{ scale: 1.3, rotate: 4, zIndex: 999 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
            <div className='project-card__header'>
                <div className='project-card__icon'>
                    {icon}
                </div>
                <h2 className='project-card__title'>{title}</h2>
                {status && <span className='project-card__status'>{status}</span>}
            </div>
            <p className='project-card__description'>{description}</p>
            <div className='project-card__tags'>
                {tags.map((tag) => (
                    <span key={tag} className='project-card__tag'>{tag}</span>
                ))}
            </div>
        </motion.div>
    )
}
