import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import TerminalTypewriter from './TerminalTypewriter'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Nombre y título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-wider font-bebas uppercase">
            <span className="text-image-fill">
              Javier Loncón
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-2">
            {t('hero.title')}
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-8">
            <MapPin className="h-4 w-4" />
            <span>{t('hero.location')}</span>
            <span className="mx-2">·</span>
            <span>{t('hero.availability')}</span>
          </div>
        </motion.div>

        {/* Terminal typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <TerminalTypewriter />
        </motion.div>

        {/* Tagline corta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-600/40 hover:shadow-blue-500/60 hover:shadow-xl"
          >
            {t('hero.viewProjects')}
          </a>
          <a
            href="/files/Javier_Loncon_CV(Español).pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-green-600/40 hover:shadow-green-500/60 hover:shadow-xl"
          >
            <Download className="h-4 w-4" />
            {t('hero.downloadCV')}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-gray-400 hover:text-blue-400 rounded-lg font-medium transition-all duration-200 hover:bg-blue-500/10"
          >
            {t('hero.contact')}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-5 mb-16"
        >
          <a
            href="https://github.com/DustNach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/javier-loncon-20bb2b175/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:jaloncon95@gmail.com"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-1 text-gray-600"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
