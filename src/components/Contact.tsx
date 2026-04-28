import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  
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
      title: t('contact.location'),
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
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('contact.title')}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
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
            <h3 className="text-2xl font-bold text-white mb-4">{t('contact.readyToWork')}</h3>
            <p className="text-gray-300 mb-6">
              {t('contact.available')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:jaloncon95@gmail.com"
                className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
                style={{
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
                  border: '1px solid transparent',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <Mail className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold relative z-10">
                  {t('contact.sendMessage')}
                </span>
              </a>
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
                  {t('contact.downloadCV')}
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
