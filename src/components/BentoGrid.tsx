import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Database, Server, Shield, Code2, Cpu } from 'lucide-react'

interface BentoProject {
  id: string
  title: string
  description: string
  stack: string[]
  stat?: { value: string; label: string }
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
      title: 'SGC SYC Chile',
      description: 'Sistema de gestión de calidad empresarial en producción real con 3,000+ usuarios activos y 29 empresas clientes.',
      stack: ['Django', 'React', 'PostgreSQL', 'Docker'],
      stat: { value: '3,247', label: 'usuarios activos' },
      demoUrl: 'https://sgc.sycchile.com',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      size: 'large'
    },
    {
      id: '2',
      title: 'CNN Clasificador',
      description: 'Red neuronal convolucional para clasificación binaria de imágenes con 96% de accuracy.',
      stack: ['TensorFlow', 'Keras', 'Python'],
      stat: { value: '96%', label: 'accuracy' },
      icon: <Brain className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      size: 'medium'
    },
    {
      id: '3',
      title: 'Hadoop Big Data',
      description: 'Cluster distribuido HDFS + MapReduce procesando hasta 100GB con 99.8% uptime.',
      stack: ['Hadoop', 'MapReduce', 'Python'],
      stat: { value: '100GB', label: 'procesados' },
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      size: 'medium'
    },
    {
      id: '4',
      title: 'Vet IA v2.0',
      description: 'Microservicios FastAPI con IA para diagnóstico y análisis de riesgos veterinarios.',
      stack: ['FastAPI', 'ML', 'Docker'],
      icon: <Cpu className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      size: 'small'
    },
    {
      id: '5',
      title: 'IWIE NDA',
      description: 'Reconocimiento facial + firma digital + PDF encriptado en React.',
      stack: ['React', 'Face-API.js', 'CryptoJS'],
      icon: <Code2 className="h-8 w-8" />,
      gradient: 'from-indigo-500 to-purple-500',
      size: 'small'
    },
    {
      id: '6',
      title: 'Pentesting OWASP',
      description: 'Auditoría de seguridad con Kali Linux. Score final 8.5/10.',
      stack: ['Kali Linux', 'OWASP', 'Pentesting'],
      stat: { value: '8.5/10', label: 'OWASP score' },
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-red-500 to-orange-500',
      size: 'small'
    },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':  return 'col-span-2 row-span-2'
      case 'medium': return 'col-span-1 row-span-2'
      case 'small':  return 'col-span-1 row-span-1'
      default:       return 'col-span-1 row-span-1'
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Proyectos Destacados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sistemas reales con usuarios reales — no sólo ejercicios académicos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`${getSizeClasses(project.size)} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}
            >
              <div className="h-full w-full bg-gray-900/95 rounded-2xl p-5 flex flex-col backdrop-blur-sm">
                {/* Header con icono y título */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                    {project.stat && (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent">{project.stat.value}</span>
                        <span className="text-gray-500 text-xs">{project.stat.label}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-400 text-sm leading-relaxed mb-auto line-clamp-3">{project.description}</p>

                {/* Footer con stack y links */}
                <div className="mt-4 pt-3 border-t border-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-800/70 text-gray-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        title="Ver demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors"
                        title="Ver código"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    </div>
                  </div>
                </div>

                {/* Glow hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
