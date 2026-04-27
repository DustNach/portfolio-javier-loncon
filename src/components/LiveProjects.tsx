import { motion } from 'framer-motion'
import { ExternalLink, Server, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LiveProjects = () => {
  const { t } = useLanguage()

  const stats = [
    { label: t('liveProjects.edulexis.completeness'), value: '92%' },
    { label: t('liveProjects.edulexis.djangoApps'),   value: '12'  },
    { label: t('liveProjects.edulexis.apis'),          value: '150+'},
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('liveProjects.subtitle')}
          </p>
        </motion.div>

        {/* EduLexis — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative rounded-2xl p-[1px] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          }}
        >
          <div className="relative bg-gray-900/95 backdrop-blur-sm rounded-2xl p-10">

            {/* Live badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-semibold tracking-widest uppercase">
                {t('liveProjects.liveBadge')}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left */}
              <div className="flex-1">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-5">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-3">EduLexis</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {t('liveProjects.edulexis.description')}
                </p>

                <a
                  href="https://edulexis.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden group/btn"
                  style={{
                    background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <ExternalLink className="h-4 w-4 text-blue-400 group-hover/btn:text-blue-300 transition-colors relative z-10" />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold relative z-10">
                    {t('liveProjects.visitLive')}
                  </span>
                </a>
              </div>

              {/* Right — stats */}
              <div className="flex flex-col gap-4 md:min-w-[180px]">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-gray-800/60 rounded-xl px-5 py-3 border border-gray-700/50"
                  >
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-white font-bold text-lg leading-none">{s.value}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default LiveProjects
