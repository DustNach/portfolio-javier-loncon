import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useLanguage()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isProjects = location.pathname === '/projects'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  type NavItem = { name: string; href: string; isLink?: boolean }

  const navItems: NavItem[] = [
    { name: t('nav.about'),    href: isHome ? '#about' : '/#about' },
    { name: t('nav.projects'), href: '/projects', isLink: true },
    { name: t('nav.demos'),    href: isProjects ? '#demos' : '/projects#demos' },
    { name: t('nav.contact'),  href: '#contact' },
  ]

  const desktopCls = 'text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const mobileCls  = 'text-gray-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium'

  const NavLink = ({ item, mobile = false }: { item: NavItem; mobile?: boolean }) => {
    const cls = mobile ? mobileCls : desktopCls
    const handleClick = () => { if (mobile) setIsOpen(false) }
    if (item.isLink) {
      return <Link to={item.href} className={cls} onClick={handleClick}>{item.name}</Link>
    }
    return <a href={item.href} className={cls} onClick={handleClick}>{item.name}</a>
  }

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — clickable, goes home */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Javier Loncón</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-4">
              {navItems.map(item => <NavLink key={item.name} item={item} />)}
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
            {navItems.map(item => <NavLink key={item.name} item={item} mobile />)}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

