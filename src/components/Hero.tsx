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
          {/* Ver Proyectos */}
          <a
            href="#projects"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
            style={{
              background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
              border: '1px solid transparent',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold relative z-10">
              {t('hero.viewProjects')}
            </span>
          </a>

          {/* Descargar CV */}
          <a
            href="/files/Javier_Loncon_CV(Español).pdf"
            download
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
            style={{
              background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #10b981, #06b6d4) border-box',
              border: '1px solid transparent',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <Download className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors relative z-10" />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold relative z-10">
              {t('hero.downloadCV')}
            </span>
          </a>

          {/* Contactar */}
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
            style={{
              background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #06b6d4, #8b5cf6) border-box',
              border: '1px solid transparent',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <Mail className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors relative z-10" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold relative z-10">
              {t('hero.contact')}
            </span>
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
