import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="loader-inner">
            <div className="loader-bar" />
            <span className="loader-label">Loading</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}