import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { projects } from '../data/projects'
import { projectsEn } from '../data/projects.en'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState<string>('all')
  
  const currentProjects = language === 'en' ? projectsEn : projects

  const categories = [
    { id: 'all', name: t('projects.all') },
    { id: 'web', name: t('projects.web') },
    { id: 'ai', name: t('projects.ai') },
    { id: 'data', name: t('projects.data') },
    { id: 'system', name: t('projects.security') }
  ]

  const filteredProjects = filter === 'all' 
    ? currentProjects 
    : currentProjects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('projects.title')}</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className="relative px-6 py-2 rounded-lg font-medium transition-all duration-300 overflow-hidden group"
                style={filter === category.id ? {
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
                  border: '1px solid transparent',
                } : {
                  background: 'linear-gradient(#111827, #111827) padding-box, linear-gradient(135deg, #374151, #374151) border-box',
                  border: '1px solid transparent',
                }}
              >
                <span className={filter === category.id
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold'
                  : 'text-gray-400 group-hover:text-gray-200 transition-colors'
                }>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('projects.noProjects')}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
