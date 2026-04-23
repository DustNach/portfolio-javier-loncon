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
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Ingeniero en Informática titulado de INACAP (2025), con base en <span className="text-blue-400">Chillán, Chile</span>. 
              Mi enfoque va más allá de escribir código: construyo <span className="font-semibold text-white">sistemas completos de forma independiente</span> — 
              desde el diseño de arquitectura y bases de datos hasta el despliegue en producción y mantenimiento con usuarios reales.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Me apasiona explorar la intersección entre <span className="text-purple-400 font-semibold">Inteligencia Artificial</span>, 
              <span className="text-green-400 font-semibold"> Big Data</span> y <span className="text-blue-400 font-semibold">Desarrollo Full Stack</span>. 
              He desarrollado desde redes neuronales convolucionales para clasificación de imágenes, hasta clusters Hadoop para procesamiento distribuido, 
              pasando por aplicaciones móviles con reconocimiento facial y sistemas de microservicios con arquitecturas escalables.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Mi diferenciador: no solo desarrollo — también <span className="font-semibold text-white">administro infraestructura</span>, 
              implemento <span className="text-orange-400">seguridad (OWASP)</span>, optimizo rendimiento, y gestiono sistemas en producción. 
              Integro herramientas de IA como <span className="text-purple-300">Claude Code y Cursor</span> en mi flujo de trabajo para maximizar productividad y calidad del código.
            </p>
          </div>

          <div className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Certificaciones Profesionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Arquitectura Cloud</p>
                  <p className="text-gray-400 text-sm">INACAP • 198 horas • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Desarrollador Full Stack</p>
                  <p className="text-gray-400 text-sm">INACAP • 162 horas • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Diseño y Gestión de Bases de Datos</p>
                  <p className="text-gray-400 text-sm">INACAP • 126 horas • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Diseño Ágil de Sistemas</p>
                  <p className="text-gray-400 text-sm">INACAP • 126 horas • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Gestión de Proyectos de IA</p>
                  <p className="text-gray-400 text-sm">Certificate of Attendance • Dic 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">Innovación y Emprendimiento</p>
                  <p className="text-gray-400 text-sm">INACAP • 216 horas • Oct 2025</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Total: <span className="text-blue-400 font-semibold">1,116+ horas</span> de formación certificada
            </p>
          </div>

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

          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Proyectos y Logros Destacados</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">Redes Neuronales Convolucionales (CNN)</p>
                  <p className="text-gray-400 text-sm">Clasificación de imágenes con TensorFlow, Keras y OpenCV. Arquitectura con capas convolucionales, max pooling y dropout para evitar overfitting.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">Cluster Hadoop para Big Data</p>
                  <p className="text-gray-400 text-sm">Procesamiento distribuido de grandes volúmenes de datos con MapReduce, HDFS y ecosistema Hadoop completo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">Sistema Veterinario con IA y Microservicios</p>
                  <p className="text-gray-400 text-sm">Arquitectura de microservicios con FastAPI, validación inteligente de datos, análisis de riesgos con IA, motor de recomendaciones y monitoreo en tiempo real.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">Reconocimiento Facial y Firma Digital</p>
                  <p className="text-gray-400 text-sm">App React con Face-API.js para reconocimiento facial, captura de firma digital, generación de PDFs y encriptación con CryptoJS.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">SGC en Producción (SYC Chile)</p>
                  <p className="text-gray-400 text-sm">Sistema de gestión de calidad con Django + React + TypeScript + PostgreSQL. 3,000+ usuarios activos, WebSockets, Celery, CI/CD con Docker, auditoría OWASP 8.5/10.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-3 text-xl">▹</span>
                <div>
                  <p className="text-white font-semibold mb-1">Business Intelligence y Análisis de Datos</p>
                  <p className="text-gray-400 text-sm">Dashboards interactivos con Power BI y Tableau, análisis de datos con Python, visualizaciones avanzadas y reportes automatizados.</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
