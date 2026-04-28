import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ImpactMetrics() {
  const { t } = useLanguage()

  const metrics = [
    {
      icon: <Users className="h-6 w-6" />,
      value: '5,000+',
      label: t('impactMetrics.activeUsers'),
      description: t('impactMetrics.activeUsersDesc'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: '40%',
      label: t('impactMetrics.performance'),
      description: t('impactMetrics.performanceDesc'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: '99.8%',
      label: t('impactMetrics.uptime'),
      description: t('impactMetrics.uptimeDesc'),
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: '8.5/10',
      label: t('impactMetrics.security'),
      description: t('impactMetrics.securityDesc'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('impactMetrics.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('impactMetrics.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full">
                {/* Icon with gradient */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${metric.gradient} mb-4`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl font-black text-white mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-gray-300 mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {metric.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            {t('impactMetrics.note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
