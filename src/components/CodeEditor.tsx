import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ExternalLink } from 'lucide-react'

interface CodeEditorProps {
  code: string
  language?: string
  title?: string
  colabUrl?: string
  output?: string
  editable?: boolean
}

const CodeEditor = ({ 
  code, 
  language = 'python', 
  title, 
  colabUrl,
  output,
  editable = true 
}: CodeEditorProps) => {
  const [currentCode, setCurrentCode] = useState(code)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setCurrentCode(code)
  }, [code])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (editable) {
      setCurrentCode(e.target.value)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {title && (
            <span className="ml-3 text-sm text-gray-300 font-medium">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-400 hover:text-white"
            title="Copiar código"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
          {colabUrl && (
            <a
              href={colabUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Abrir en Colab
            </a>
          )}
        </div>
      </div>

      {/* Code Area */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={currentCode}
          onChange={handleChange}
          readOnly={!editable}
          className="w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed resize-none focus:outline-none"
          style={{
            minHeight: '300px',
            tabSize: 4,
            fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace"
          }}
          spellCheck={false}
        />
        {!editable && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
            Solo lectura
          </div>
        )}
      </div>

      {/* Output Section */}
      {output && (
        <div className="border-t border-gray-700 bg-gray-950">
          <div className="px-4 py-2 bg-gray-800 text-gray-400 text-xs font-semibold">
            OUTPUT
          </div>
          <pre className="p-4 text-sm text-green-400 font-mono overflow-x-auto">
            {output}
          </pre>
        </div>
      )}
    </motion.div>
  )
}

export default CodeEditor
