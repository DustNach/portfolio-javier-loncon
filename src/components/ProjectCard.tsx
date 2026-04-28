import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Calendar, CheckCircle, Github } from 'lucide-react'
import { Project } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

const categoryColors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  web:    { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/30',   accent: '#3b82f6' },
  ai:     { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', accent: '#a855f7' },
  data:   { bg: 'bg-emerald-500/10',text: 'text-emerald-400',border: 'border-emerald-500/30',accent: '#10b981' },
  mobile: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30', accent: '#eab308' },
  system: { bg: 'bg-red-500/10',    text: 'text-red-400',    border: 'border-red-500/30',    accent: '#ef4444' },
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useLanguage()
  const color = categoryColors[project.category] ?? categoryColors.web

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-opacity-80 transition-all duration-300"
      style={{ '--accent': color.accent } as React.CSSProperties}
    >
      {/* Project image */}
      <div className="relative h-44 overflow-hidden bg-gray-800/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* Category badge over image */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${color.bg} ${color.text} ${color.border}`}>
            {project.category.toUpperCase()}
          </span>
        </div>
        {project.status === 'completed' && (
          <div className="absolute top-3 right-3">
            <CheckCircle className="h-5 w-5 text-green-400 drop-shadow" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-800 text-gray-500 rounded text-xs border border-gray-700/60">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Calendar className="h-3.5 w-3.5" />
            <span>{project.year}</span>
          </div>

          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 overflow-hidden group/gh"
                style={{
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #6b7280, #9ca3af) border-box',
                  border: '1px solid transparent',
                }}
                title="Ver en GitHub"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-400/10 opacity-0 group-hover/gh:opacity-100 transition-opacity rounded-lg" />
                <Github className="h-3.5 w-3.5 text-gray-400 relative z-10" />
                <span className="text-gray-300 relative z-10">GitHub</span>
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 overflow-hidden group/cs"
                style={{
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #8b5cf6, #06b6d4) border-box',
                  border: '1px solid transparent',
                }}
                title="Ver Case Study"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover/cs:opacity-100 transition-opacity rounded-lg" />
                <BookOpen className="h-3.5 w-3.5 text-purple-400 relative z-10" />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
                  Case Study
                </span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 overflow-hidden group/demo"
                style={{
                  background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box',
                  border: '1px solid transparent',
                }}
                title={t('projectCard.viewLiveDemo')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/demo:opacity-100 transition-opacity rounded-lg" />
                <ExternalLink className="h-3.5 w-3.5 text-blue-400 relative z-10" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative z-10">Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Expandable details */}
        <details className="mt-3 group/details">
          <summary className="cursor-pointer text-xs text-gray-500 hover:text-blue-400 transition-colors list-none flex items-center justify-between pt-3 border-t border-gray-800">
            <span>{t('projectCard.viewMoreDetails')}</span>
            <span className="group-open/details:rotate-180 transition-transform duration-200">▼</span>
          </summary>
          <div className="mt-3 space-y-3">
            <p className="text-gray-300 text-xs leading-relaxed">{project.longDescription}</p>
            <div>
              <h4 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">{t('projectCard.features')}</h4>
              <ul className="space-y-1">
                {project.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-blue-400 shrink-0 mt-0.5">▹</span>
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
