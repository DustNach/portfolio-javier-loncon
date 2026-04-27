import { motion } from 'framer-motion'
import { Shield, Layers, Database, Rocket, Code2, Lock } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface Highlight {
  icon: React.ReactNode
  title: string
  project: string
  description: string
  tech: string[]
  metrics: string
  gradient: string
}

export default function TechnicalHighlights() {
  const { t } = useLanguage()

  const highlights: Highlight[] = [
    {
      icon: <Layers className="h-8 w-8" />,
      title: t('technicalHighlights.architecture.title'),
      project: 'SGC SYC Chile',
      description: t('technicalHighlights.architecture.description'),
      tech: ['Django 5.2', 'React 18', 'PostgreSQL 15', 'Redis 7'],
      metrics: t('technicalHighlights.architecture.metrics'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('technicalHighlights.security.title'),
      project: 'SGC SYC Chile',
      description: t('technicalHighlights.security.description'),
      tech: ['JWT', 'OWASP', 'bleach', 'DOMPurify'],
      metrics: t('technicalHighlights.security.metrics'),
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: t('technicalHighlights.legacy.title'),
      project: 'SGC SYC Chile',
      description: t('technicalHighlights.legacy.description'),
      tech: ['Django ORM', 'PostgreSQL', 'PBKDF2'],
      metrics: t('technicalHighlights.legacy.metrics'),
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: t('technicalHighlights.devops.title'),
      project: 'SGC SYC Chile',
      description: t('technicalHighlights.devops.description'),
      tech: ['Docker', 'Traefik', 'Dokploy', "Let's Encrypt"],
      metrics: t('technicalHighlights.devops.metrics'),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: t('technicalHighlights.optimization.title'),
      project: 'EduLexis',
      description: t('technicalHighlights.optimization.description'),
      tech: ['Django REST', 'PostgreSQL', 'Redis', 'Celery'],
      metrics: t('technicalHighlights.optimization.metrics'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: t('technicalHighlights.validation.title'),
      project: 'SGC SYC Chile',
      description: t('technicalHighlights.validation.description'),
      tech: ['Zod', 'React Hook Form', 'DRF Serializers'],
      metrics: t('technicalHighlights.validation.metrics'),
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section id="technical-highlights" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('technicalHighlights.title')}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            {t('technicalHighlights.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Icon with gradient */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${highlight.gradient} mb-4`}>
                  {highlight.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {highlight.title}
                </h3>

                {/* Project badge */}
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-3">
                  <span className="text-xs text-blue-400 font-medium">{highlight.project}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {highlight.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-sm font-semibold text-blue-400">
                    {highlight.metrics}
                  </p>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              {t('technicalHighlights.note')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
