import { motion } from 'framer-motion'
import { Code, Database, Brain, Cloud, Server, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend',
      items: ['React', 'TypeScript', 'TailwindCSS', 'Vite']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend',
      items: ['Django', 'FastAPI', 'Node.js', 'PostgreSQL']
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'IA & ML',
      items: ['TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Big Data',
      items: ['Hadoop', 'MapReduce', 'HDFS', 'Data Analysis']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      items: ['Docker', 'Kubernetes', 'AWS', 'Azure']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Otros',
      items: ['Redis', 'Celery', 'Firebase', 'Microservicios']
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Sobre Mí</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
            Especializado en sistemas inteligentes, procesamiento de datos y arquitecturas escalables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all card-hover"
              >
                <div className="text-blue-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Experiencia Destacada</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Desarrollo de sistemas veterinarios con IA para análisis predictivo de salud
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Implementación de arquitecturas de microservicios escalables
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Procesamiento de grandes volúmenes de datos con Hadoop y ecosistema Big Data
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Desarrollo de modelos de Machine Learning para clasificación y predicción
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">▹</span>
                Integración de servicios cloud (AWS, Azure) y sistemas de notificaciones
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
