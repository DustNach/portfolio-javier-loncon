import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder, FolderOpen } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'ai', name: 'IA' },
    { id: 'data', name: 'Big Data' },
    { id: 'system', name: 'Sistemas' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web, 
            inteligencia artificial, big data y arquitecturas de sistemas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category.name}
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
              <p className="text-gray-500 text-lg">No hay proyectos en esta categoría</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
