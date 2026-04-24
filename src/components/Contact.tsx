import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'jaloncon95@gmail.com',
      link: 'mailto:jaloncon95@gmail.com'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/javier-loncon-20bb2b175',
      link: 'https://linkedin.com/in/javier-loncon-20bb2b175/'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      value: 'github.com/DustNach',
      link: 'https://github.com/DustNach'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Ubicación',
      value: 'Chillán, Chile',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            ¿Interesado en colaborar o tienes alguna pregunta? 
            No dudes en contactarme a través de cualquiera de estos medios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all card-hover"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-blue-500">{method.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                        <p className="text-gray-400 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className="text-blue-500">{method.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                        <p className="text-gray-400 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Listo para trabajar juntos?</h3>
            <p className="text-gray-300 mb-6">
              Estoy disponible para proyectos de desarrollo, colaboraciones técnicas y oportunidades laborales en el área de tecnología.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jaloncon95@gmail.com"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20"
              >
                Enviar Mensaje
              </a>
              <a
                href="/files/Javier_Loncon_CV(Español).pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg font-medium transition-all border border-gray-600 hover:border-green-500/60"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
