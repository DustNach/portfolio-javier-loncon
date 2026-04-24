import { motion } from 'framer-motion'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { useLanguage } from '../contexts/LanguageContext'

const SkillsRadar = () => {
  const { t } = useLanguage()
  const data = [
    { skill: 'React/Frontend', value: 90, fullMark: 100 },
    { skill: 'Backend/APIs', value: 85, fullMark: 100 },
    { skill: 'IA/ML', value: 80, fullMark: 100 },
    { skill: 'Big Data', value: 75, fullMark: 100 },
    { skill: 'DevOps', value: 70, fullMark: 100 },
    { skill: 'Cloud/AWS', value: 75, fullMark: 100 }
  ]

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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 dark:border-gray-700 light:border-gray-300"
        >
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={data}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ fill: '#9CA3AF' }}
              />
              <Radar
                name="Skills"
                dataKey="value"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {data.map((item) => (
              <div key={item.skill} className="text-center">
                <div className="text-2xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600">
                  {item.value}%
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                  {item.skill}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsRadar
