import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { getProjects } from '../utils/getProjects'
import ProjectCard from './ProjectCard'

const ITEMS_PER_PAGE = 6

const Projects = () => {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const currentProjects = getProjects(language as 'es' | 'en')

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

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setCurrentPage(1)
  }

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
                onClick={() => handleFilterChange(category.id)}
                className="relative px-6 py-2 rounded-lg font-medium transition-all duration-300 overflow-hidden group"
                style={filter === category.id ? {
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3882f6, #06b6d4) border-box',
                  border: '1px solid transparent',
                } : {
                  background: 'linear-gradient(#111827, #111827) padding-box, linear-gradient(135deg, #374151, #374151) border-box',
                  border: '1px solid transparent',
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">{t('projects.noProjects')}</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                →
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
