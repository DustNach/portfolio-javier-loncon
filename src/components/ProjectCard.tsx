import { motion } from 'framer-motion'
import { ExternalLink, FolderOpen, Calendar, CheckCircle } from 'lucide-react'
import { Project } from '../types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      web: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      ai: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      data: 'bg-green-500/10 text-green-400 border-green-500/30',
      mobile: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      system: 'bg-red-500/10 text-red-400 border-red-500/30'
    }
    return colors[category as keyof typeof colors] || colors.web
  }

  const handleOpenLocal = () => {
    if (project.localPath) {
      alert(`Ruta local del proyecto:\n${project.localPath}\n\nPuedes abrir esta carpeta en tu explorador de archivos.`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-all card-hover group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <FolderOpen className="h-8 w-8 text-blue-500" />
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
              {project.category.toUpperCase()}
            </span>
          </div>
          {project.status === 'completed' && (
            <CheckCircle className="h-5 w-5 text-green-500" />
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
          
          <div className="flex gap-3">
            {project.localPath && (
              <button
                onClick={handleOpenLocal}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Ver ruta local"
              >
                <FolderOpen className="h-5 w-5" />
              </button>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title="Ver demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 px-6 py-3 border-t border-gray-700">
        <details className="group/details">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-blue-400 transition-colors list-none">
            <span className="flex items-center justify-between">
              <span>Ver más detalles</span>
              <span className="group-open/details:rotate-180 transition-transform">▼</span>
            </span>
          </summary>
          <div className="mt-4 space-y-3">
            <p className="text-gray-300 text-sm">{project.longDescription}</p>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Características:</h4>
              <ul className="space-y-1">
                {project.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </motion.div>
  )
}

export default ProjectCard
