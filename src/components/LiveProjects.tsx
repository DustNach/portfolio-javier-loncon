import { motion } from 'framer-motion'
import { ExternalLink, Server, Database } from 'lucide-react'

const LiveProjects = () => {
  const liveProjects = [
    {
      id: 'edulexis',
      title: 'EduLexis',
      description: 'Plataforma legal para sostenedores educacionales en producción',
      url: 'https://edulexis.cl',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      stats: [
        { label: 'Completitud', value: '92%' },
        { label: 'Apps Django', value: '12' },
        { label: 'APIs', value: '150+' }
      ]
    },
    {
      id: 'sgc',
      title: 'SGC SYC Chile',
      description: 'Sistema de gestión de capacitación empresarial',
      url: 'https://sgc.sycchile.com',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      stats: [
        { label: 'Stack', value: 'Django + React' },
        { label: 'Base de Datos', value: 'PostgreSQL' },
        { label: 'Estado', value: 'Producción' }
      ]
    },
    {
      id: 'sycchile',
      title: 'SYC Chile',
      description: 'Sitio web corporativo de SYC Chile - Capacitación y consultoría empresarial',
      url: 'https://sycchile.com',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      stats: [
        { label: 'Tipo', value: 'Corporativo' },
        { label: 'Servicios', value: 'Capacitación' },
        { label: 'Estado', value: 'En Línea' }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Proyectos en Vivo</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Sistemas reales en producción que puedes visitar ahora mismo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.gradient} mb-6`}>
                {project.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {project.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-white dark:text-white light:text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visit Button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 group-hover:scale-105"
              >
                <ExternalLink className="h-4 w-4" />
                Visitar Sistema en Vivo
              </a>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-500 light:text-gray-600 text-sm">
            🚀 Sistemas 100% funcionales en producción con usuarios reales
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveProjects
