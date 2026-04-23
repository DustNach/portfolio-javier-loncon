import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Database, Brain, Server } from 'lucide-react'

interface BentoProject {
  id: string
  title: string
  description: string
  stack: string[]
  demoUrl?: string
  githubUrl?: string
  icon: ReactNode
  gradient: string
  size: 'small' | 'medium' | 'large'
}

const BentoGrid = () => {
  const projects: BentoProject[] = [
    {
      id: '1',
      title: 'Sistema Veterinario IA v2.0',
      description: 'Plataforma con IA para diagnóstico veterinario usando FastAPI y ML',
      stack: ['FastAPI', 'TensorFlow', 'PostgreSQL', 'React'],
      demoUrl: '#',
      githubUrl: '#',
      icon: <Brain className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      size: 'large'
    },
    {
      id: '2',
      title: 'Big Data Hadoop Cluster',
      description: 'Procesamiento distribuido de datos masivos',
      stack: ['Hadoop', 'MapReduce', 'HDFS', 'Python'],
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      size: 'medium'
    },
    {
      id: '3',
      title: 'Microservicios IWIE',
      description: 'Arquitectura de microservicios escalable',
      stack: ['Docker', 'Kubernetes', 'Node.js', 'Redis'],
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      size: 'medium'
    },
    {
      id: '4',
      title: 'CNN Clasificador',
      description: 'Red neuronal convolucional para clasificación de imágenes',
      stack: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
      icon: <Code2 className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      size: 'small'
    },
    {
      id: '5',
      title: 'Amigo Mascota',
      description: 'Sistema de gestión veterinaria completo',
      stack: ['Django', 'PostgreSQL', 'Redis', 'Celery'],
      icon: <Code2 className="h-8 w-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      size: 'small'
    }
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2'
      case 'medium':
        return 'col-span-1 row-span-2'
      case 'small':
        return 'col-span-1 row-span-1'
      default:
        return 'col-span-1 row-span-1'
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="text-gradient">Proyectos Destacados</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className={`${getSizeClasses(project.size)} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="h-full w-full bg-gray-900/95 dark:bg-gray-950/95 light:bg-white/95 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 text-gray-300 dark:text-gray-300 light:text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Ver demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-white transition-colors"
                        title="Ver código"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
