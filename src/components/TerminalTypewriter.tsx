import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TerminalTypewriter = () => {
  const text = '> Javier Loncon — Full Stack Engineer'
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="font-mono text-sm md:text-base bg-gray-900/90 dark:bg-gray-950/90 light:bg-white/90 border border-gray-700 dark:border-gray-800 light:border-gray-300 rounded-lg p-4 md:p-6 shadow-2xl backdrop-blur-sm max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-500 text-xs">terminal</span>
      </div>
      <div className="text-green-400 dark:text-green-400 light:text-green-600">
        {displayText}
        <span className={`inline-block w-2 h-4 bg-green-400 dark:bg-green-400 light:bg-green-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          |
        </span>
      </div>
    </motion.div>
  )
}

export default TerminalTypewriter
