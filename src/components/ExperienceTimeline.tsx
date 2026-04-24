import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
  icon: ReactNode
  type: 'work' | 'education' | 'certification' | 'project'
}

const ExperienceTimeline = () => {
  const { t } = useLanguage()
  const timeline: TimelineItem[] = [
    {
      year: '2026',
      title: t('experienceTimeline.sgc.title'),
      organization: t('experienceTimeline.sgc.organization'),
      description: t('experienceTimeline.sgc.description'),
      icon: <Briefcase className="h-6 w-6" />,
      type: 'work'
    },
    {
      year: '2025',
      title: t('experienceTimeline.education.title'),
      organization: t('experienceTimeline.education.organization'),
      description: t('experienceTimeline.education.description'),
      icon: <GraduationCap className="h-6 w-6" />,
      type: 'education'
    },
    {
      year: '2025',
      title: t('experienceTimeline.edulexis.title'),
      organization: t('experienceTimeline.edulexis.organization'),
      description: t('experienceTimeline.edulexis.description'),
      icon: <Briefcase className="h-6 w-6" />,
      type: 'work'
    },
    {
      year: '2024',
      title: t('experienceTimeline.certification.title'),
      organization: t('experienceTimeline.certification.organization'),
      description: t('experienceTimeline.certification.description'),
      icon: <Award className="h-6 w-6" />,
      type: 'certification'
    },
    {
      year: '2024',
      title: t('experienceTimeline.eva.title'),
      organization: t('experienceTimeline.eva.organization'),
      description: t('experienceTimeline.eva.description'),
      icon: <Code className="h-6 w-6" />,
      type: 'project'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-cyan-500'
      case 'education':
        return 'from-purple-500 to-pink-500'
      case 'certification':
        return 'from-green-500 to-emerald-500'
      case 'project':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/30">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('timeline.title')}</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-8">
            {t('timeline.subtitle')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-500">
            {t('timeline.swipeHint')}
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-x-auto overflow-y-hidden pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-500/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-500/50">
        <div className="flex gap-8 px-4 md:px-8 min-w-max justify-center md:justify-start"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80"
            >
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-gray-800/80 dark:bg-gray-800/80 light:bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 dark:border-gray-700 light:border-gray-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getTypeColor(item.type)} text-white`}>
                      {item.icon}
                    </div>
                    <span className="text-2xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-400 dark:text-blue-400 light:text-blue-600 text-sm mb-3">
                    {item.organization}
                  </p>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
