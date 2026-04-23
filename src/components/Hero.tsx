import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react'
import TerminalTypewriter from './TerminalTypewriter'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Impact numbers — lo primero que ve el visitante */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { value: '3,000+', label: 'usuarios en producción' },
            { value: '29', label: 'empresas activas' },
            { value: 'OWASP 8.5', label: 'score de seguridad' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm"
            >
              <span className="text-blue-400 font-bold text-sm">{stat.value}</span>
              <span className="text-gray-500 text-sm ml-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Nombre y título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Javier Loncón</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-2">
            Ingeniero Full Stack · IA · Big Data
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-8">
            <MapPin className="h-4 w-4" />
            <span>Chillán, Chile</span>
            <span className="mx-2">·</span>
            <span>Disponible para proyectos remotos</span>
          </div>
        </motion.div>

        {/* Terminal typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8"
        >
          <TerminalTypewriter />
        </motion.div>

        {/* Tagline corta */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Construyo sistemas que van a producción —{' '}
          <span className="text-white font-medium">IA, arquitecturas escalables</span>{' '}
          y seguridad desde el día uno.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
          >
            Ver Proyectos
          </a>
          <a
            href="https://sgc.sycchile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 border border-gray-700 hover:border-blue-500/50"
          >
            Sistema en Vivo →
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-gray-400 hover:text-white rounded-lg font-medium transition-colors"
          >
            Contactar
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
