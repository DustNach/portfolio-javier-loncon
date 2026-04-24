import { motion } from 'framer-motion'
import { ExternalLink, Server, Database } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LiveProjects = () => {
  const { t } = useLanguage()
  const liveProjects = [
    {
      id: 'edulexis',
      title: 'EduLexis',
      description: t('liveProjects.edulexis.description'),
      url: 'https://edulexis.cl',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      stats: [
        { label: t('liveProjects.edulexis.completeness'), value: '92%' },
        { label: t('liveProjects.edulexis.djangoApps'), value: '12' },
        { label: t('liveProjects.edulexis.apis'), value: '150+' }
      ]
    },
    {
      id: 'sgc',
      title: 'SGC SYC Chile',
      description: t('liveProjects.sgc.description'),
      url: 'https://sgc.sycchile.com',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      stats: [
        { label: t('liveProjects.sgc.stack'), value: 'Django + React' },
        { label: t('liveProjects.sgc.database'), value: 'PostgreSQL' },
        { label: t('liveProjects.sgc.status'), value: t('liveProjects.sgc.production') }
      ]
    },
    {
      id: 'sycchile',
      title: 'SYC Chile',
      description: t('liveProjects.sycchile.description'),
      url: 'https://sycchile.com',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      stats: [
        { label: t('liveProjects.sycchile.type'), value: t('liveProjects.sycchile.corporate') },
        { label: t('liveProjects.sycchile.services'), value: t('liveProjects.sycchile.training') },
        { label: t('liveProjects.sycchile.status'), value: t('liveProjects.sycchile.online') }
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
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('liveProjects.title')}</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            {t('liveProjects.subtitle')}
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
                {t('liveProjects.visitLive')}
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
            {t('liveProjects.note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveProjects
