import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

interface SkillGroup {
  category: string
  skills: string[]
  accent: string
  chipClass: string
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React 18', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion', 'Next.js'],
    accent: 'text-blue-400',
    chipClass: 'bg-blue-500/10 border-blue-500/20 text-blue-200',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'REST APIs', 'PostgreSQL'],
    accent: 'text-emerald-400',
    chipClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200',
  },
  {
    category: 'AI / ML',
    skills: ['TensorFlow', 'OpenCV', 'scikit-learn', 'LangChain', 'Hugging Face', 'CNN'],
    accent: 'text-violet-400',
    chipClass: 'bg-violet-500/10 border-violet-500/20 text-violet-200',
  },
  {
    category: 'Big Data',
    skills: ['Apache Spark', 'Hadoop', 'BigQuery', 'Pandas', 'Power BI', 'ETL'],
    accent: 'text-orange-400',
    chipClass: 'bg-orange-500/10 border-orange-500/20 text-orange-200',
  },
  {
    category: 'DevOps / Cloud',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Git', 'CI/CD'],
    accent: 'text-cyan-400',
    chipClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-200',
  },
]

const SkillsRadar = () => {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gray-900/50 dark:bg-gray-900/50 light:bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('skillsRadar.title')}</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            {t('skillsRadar.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/60 rounded-xl p-5 border border-gray-700/40 dark:border-gray-700/40 light:border-gray-200/60"
            >
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${group.accent}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${group.chipClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsRadar
