import './style.css'

import { motion } from 'framer-motion'
import ProjectCard from '../project-card/ProjectCard'
import { LuDog } from "react-icons/lu";
import { FiBriefcase } from 'react-icons/fi';
import { SiGamebanana } from "react-icons/si";
import { Si42 } from "react-icons/si";

const projects = [
    { 
        icon: <Si42 />,
        title: "School Cursus", 
        status: "Mastery phase",
        description: "Peer-to-peer coding school with no teachers. Projects range from low-level C (memory, processes, sockets) to C++ OOP, system administration, Docker, and full-stack web development. Everything is learned by doing and reviewing each other's code.",
        tags: ['C', 'C++', 'Docker', 'Web', 'Unix'] 
    },
    { 
        icon: <LuDog />,
        title: "Animal Shelter", 
        description: "Full-stack web application for an animal shelter, featuring a Node.js back-end and React front-end with animal management and an admin interface for staff.", 
        tags: ['React', 'Node.js', 'Express', 'MySQL'] 
    },
    { 
        icon: <FiBriefcase />,
        title: "AGE DIGITAL — Internship", 
        description: "Built a full booking website autonomously with Next.js, React and Tailwind CSS. Integrated Stripe for payment processing, pixel-perfect UI/UX implementation, and custom back-end later migrated to a CMS.", 
        tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Stripe', 'Tailwind'] 
    },
    {
        icon: <SiGamebanana />,
        title: "Balatro Clone", 
        status: "In progress",
        description: "Partial recreation of the roguelike poker card game Balatro, built in Godot. Includes core card mechanics, hand scoring and basic deck management.", 
        tags: ['Godot', 'GDScript'] 
    },
]

const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.9 + i * 0.25,
            ease: [0, 0.71, 0.2, 1.01] as [number, number, number, number],
        }
    })
}

export default function Projects() {
    return (
        <div className='projects'>
            <div className='items-1'>
                {projects.slice(0, 2).map((p, i) => (
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover={{ 
                            transition: { type: 'spring', stiffness: 300, damping: 30 } 
                        }}
                        transition={{ duration: 0.15 }} // ← retour rapide
                        style={{ zIndex: 0 }}
                    >
                        <ProjectCard {...p} />
                    </motion.div>
                ))}
            </div>
            <div className='items-2'>
                {projects.slice(2, 4).map((p, i) => (
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover={{ 
                            transition: { type: 'spring', stiffness: 300, damping: 30 } 
                        }}
                        transition={{ duration: 0.15 }} // ← retour rapide
                        style={{ zIndex: 0 }}
                    >
                        <ProjectCard {...p} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}