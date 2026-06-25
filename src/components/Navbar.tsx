import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // After route change, scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const attempt = (tries: number) => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 150)
        }
      }
      setTimeout(() => attempt(5), 100)
    }
  }, [location.pathname, location.hash])

  // Navigate to a section, crossing pages if needed
  const goTo = (page: string, section: string, mobile = false) => {
    if (mobile) setIsOpen(false)
    if (location.pathname === page) {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`${page}#${section}`)
    }
  }

  const cls = 'text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer'
  const mCls = 'text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium bg-transparent border-0 cursor-pointer w-full text-left'

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Javier Loncón</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-4">
              <button onClick={() => goTo('/', 'about')} className={cls}>{t('nav.about')}</button>
              <Link to="/projects" className={cls}>{t('nav.projects')}</Link>
              <button onClick={() => goTo('/projects', 'demos')} className={cls}>{t('nav.demos')}</button>
              <button onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className={cls}>{t('nav.contact')}</button>
            </div>
            <LanguageSelector />
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <button onClick={() => goTo('/', 'about', true)} className={mCls}>{t('nav.about')}</button>
            <Link to="/projects" className={mCls} onClick={() => setIsOpen(false)}>{t('nav.projects')}</Link>
            <button onClick={() => goTo('/projects', 'demos', true)} className={mCls}>{t('nav.demos')}</button>
            <button onClick={() => { setIsOpen(false); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className={mCls}>{t('nav.contact')}</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
