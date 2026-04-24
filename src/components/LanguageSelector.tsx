import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <div className="flex gap-1 bg-gray-800/50 rounded-lg p-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            language === 'es'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector
