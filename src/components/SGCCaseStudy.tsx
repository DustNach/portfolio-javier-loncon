import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import {
  Users, Shield, Server, Database, Zap,
  GitBranch, Lock, TrendingUp, CheckCircle, ExternalLink
} from 'lucide-react'

const SGCCaseStudy = () => {
  const { t } = useLanguage()

  const challenges = [
    {
      icon: <Users className="h-5 w-5" />,
      title: t('sgcCase.challenges.multiTenant.title'),
      desc: t('sgcCase.challenges.multiTenant.desc'),
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: t('sgcCase.challenges.realtime.title'),
      desc: t('sgcCase.challenges.realtime.desc'),
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/20'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: t('sgcCase.challenges.security.title'),
      desc: t('sgcCase.challenges.security.desc'),
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/20'
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: t('sgcCase.challenges.cicd.title'),
      desc: t('sgcCase.challenges.cicd.desc'),
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    }
  ]

  const results = [
    { value: '3,570', label: t('sgcCase.results.users'), icon: <Users className="h-5 w-5" /> },
    { value: '29', label: t('sgcCase.results.companies'), icon: <TrendingUp className="h-5 w-5" /> },
    { value: '8.5/10', label: t('sgcCase.results.owasp'), icon: <Shield className="h-5 w-5" /> },
    { value: '~560h', label: t('sgcCase.results.hours'), icon: <CheckCircle className="h-5 w-5" /> }
  ]

  const stack = [
    { layer: 'Frontend', tech: 'React + TypeScript + Tailwind', icon: <Server className="h-4 w-4" /> },
    { layer: 'Backend', tech: 'Django REST + Celery + WebSockets', icon: <Database className="h-4 w-4" /> },
    { layer: 'Database', tech: 'PostgreSQL + Redis (cache)', icon: <Database className="h-4 w-4" /> },
    { layer: 'Infra', tech: 'Docker + Nginx + VPS + CI/CD', icon: <GitBranch className="h-4 w-4" /> },
    { layer: 'Security', tech: 'JWT + OWASP audit + HTTPS', icon: <Lock className="h-4 w-4" /> }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/5">
            {t('sgcCase.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('sgcCase.title')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('sgcCase.subtitle')}
          </p>
        </motion.div>

        {/* Problem + Solution - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                <Zap className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t('sgcCase.problem.title')}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('sgcCase.problem.desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                <CheckCircle className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{t('sgcCase.solution.title')}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('sgcCase.solution.desc')}
            </p>
          </motion.div>
        </div>

        {/* Architecture Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Server className="h-5 w-5 text-blue-400" />
            {t('sgcCase.arch.title')}
          </h3>

          <div className="space-y-3">
            {stack.map((item, i) => (
              <motion.div
                key={item.layer}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                {/* Layer label */}
                <div className="w-24 shrink-0 text-right">
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    {item.layer}
                  </span>
                </div>
                {/* Connector */}
                <div className="w-4 h-px bg-gray-600 shrink-0" />
                {/* Pill */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700/60 text-sm text-gray-300 font-mono">
                  <span className="text-blue-400">{item.icon}</span>
                  {item.tech}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decision note */}
          <div className="mt-6 p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
            <p className="text-blue-300 text-sm leading-relaxed">
              <span className="font-semibold text-blue-400">💡 {t('sgcCase.arch.decision.label')}: </span>
              {t('sgcCase.arch.decision.text')}
            </p>
          </div>
        </motion.div>

        {/* Technical Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {t('sgcCase.challenges.title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-5 rounded-xl border ${c.bg} backdrop-blur-sm`}
              >
                <div className={`mb-3 ${c.color}`}>{c.icon}</div>
                <p className={`text-sm font-semibold mb-1 ${c.color}`}>{c.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/20 via-gray-900/60 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            {t('sgcCase.results.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2 text-blue-400">{r.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{r.value}</div>
                <div className="text-xs text-gray-400">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://sgc.sycchile.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
            style={{
              background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
              border: '1px solid transparent',
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <ExternalLink className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold relative z-10">{t('sgcCase.cta')}</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default SGCCaseStudy
