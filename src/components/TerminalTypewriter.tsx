import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const lines = [
  '> sgc.sycchile.com — 3,247 usuarios activos',
  '> stack: Django · React · FastAPI · PostgreSQL',
  '> OWASP audit: 8.5/10 — 0 critical vulnerabilities',
  '> deploy: Docker · Nginx · CI/CD · VPS',
  '> models: CNN 96% acc · SVM 92% acc · NLP',
]

const TerminalTypewriter = () => {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [pausing, setPausing] = useState(false)

  // Type characters
  useEffect(() => {
    if (pausing) return
    const current = lines[lineIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 38)
      return () => clearTimeout(t)
    } else {
      // Finished line — pause then move to next
      const t = setTimeout(() => {
        setPausing(true)
        setTimeout(() => {
          setLineIndex(i => (i + 1) % lines.length)
          setDisplayText('')
          setCharIndex(0)
          setPausing(false)
        }, 1800)
      }, 100)
      return () => clearTimeout(t)
    }
  }, [charIndex, lineIndex, pausing])

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="font-mono text-sm md:text-base bg-gray-900/90 dark:bg-gray-950/90 border border-gray-700/60 rounded-lg p-4 md:p-5 max-w-2xl mx-auto backdrop-blur-sm"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-gray-600 text-xs ml-1">javier@portfolio ~ bash</span>
      </div>

      {/* Output */}
      <div className="text-green-400 min-h-[1.5rem]">
        {displayText}
        <span
          className={`inline-block w-[2px] h-4 bg-green-400 ml-0.5 align-middle transition-opacity duration-100 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </motion.div>
  )
}

export default TerminalTypewriter
