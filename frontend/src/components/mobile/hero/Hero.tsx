import { motion, useAnimationControls } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { useState } from 'react'

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 1.4 } },
}

const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export function Hero() {
    const avatarControls = useAnimationControls()
    const [isHovered, setIsHovered] = useState(false)
    const { name, intro, availability, avatar, avatarCaption, avatar_alt, firstnameCaption } = portfolioData

    const handleHoverStart = () => {
        avatarControls.start({
            rotate: 360,
            transition: { duration: 3, ease: 'linear', repeat: Infinity },
        })
    }

    const handleHoverEnd = () => {
        avatarControls.stop()
        avatarControls.start({
            rotate: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        })
    }

    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg" />
            <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
                <motion.div variants={item} className="hero-tag">
                    {availability ? <span className="hero-dot" /> : <span className="hero-dot2" />}
                    {availability ? 'Available for work' : 'Open to opportunities'}
                </motion.div>

                <motion.div variants={item} className="hero-identity">
                    <h1 className="hero-title">
                        <span className="hero-title-muted">{name.last}</span>
                        <br />
                        <div className='hero-firstname'>
                            {name.first}
                            <span className="hero-firstname-caption">{firstnameCaption}</span>
                        </div>
                    </h1>
                    
                    <div className="hero-avatar-wrap">
                        <motion.div
                            className="hero-avatar"
                            animate={avatarControls}
                            onHoverStart={() => { handleHoverStart(); setIsHovered(true) }}
                            onHoverEnd={() => { handleHoverEnd(); setIsHovered(false) }}
                        >
                            <img src={avatar} alt={avatar_alt} />
                        </motion.div>
                        <span className="hero-avatar-caption">{isHovered ? '/* Whoooaaaaaaaaaaaaaaa */' : avatarCaption}</span>
                    </div>
                </motion.div>

                <motion.p variants={item} className="hero-desc">
                    {intro}
                </motion.p>

                <motion.div variants={item} className="hero-ctas">
                    <a href="#projects" className="btn-primary">Projects</a>
                    <a href="#contact" className="btn-ghost">Get in touch</a>
                </motion.div>
            </motion.div>
        </section>
  )
}