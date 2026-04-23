import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hola, soy </span>
            <span className="text-gradient">Javier Loncón</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Ingeniero en Informática | Creador de Soluciones Tecnológicas
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Apasionado por crear proyectos que combinan <span className="text-blue-400 font-semibold">Inteligencia Artificial</span>, 
            <span className="text-purple-400 font-semibold"> Big Data</span> y <span className="text-green-400 font-semibold">Desarrollo Full Stack</span>.
            Desde redes neuronales convolucionales hasta clusters Hadoop, desde apps móviles con reconocimiento facial hasta sistemas de microservicios.
            <span className="block mt-3 text-gray-400">Exploro, aprendo y construyo soluciones innovadoras.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700"
            >
              Contactar
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/DustNach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/javier-loncon-20bb2b175/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:jaloncon95@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <div className="inline-block animate-float">
            <div className="text-gray-600">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
