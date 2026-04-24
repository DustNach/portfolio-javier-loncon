import { motion } from 'framer-motion'
import { Code, Database, Brain, Cloud, Server, Smartphone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion']
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend',
      items: ['Django', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'IA & ML',
      items: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NLP', 'Computer Vision']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Big Data & Analytics',
      items: ['Hadoop', 'MapReduce', 'HDFS', 'Python', 'R', 'Power BI']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud & DevOps',
      items: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Nginx', 'Git/GitHub']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Arquitectura & Otros',
      items: ['Microservicios', 'REST/GraphQL', 'Redis', 'Celery', 'OWASP', 'Design Patterns']
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
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('about.title')}</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t('about.paragraph1').split('Chillán, Chile')[0]}
              <span className="text-blue-400">Chillán, Chile</span>
              {t('about.paragraph1').split('Chillán, Chile')[1]?.split('sistemas completos de forma independiente')[0]}
              <span className="font-semibold text-white">
                {t('about.paragraph1').includes('complete systems independently') ? 'complete systems independently' : 'sistemas completos de forma independiente'}
              </span>
              {t('about.paragraph1').split('sistemas completos de forma independiente')[1] || t('about.paragraph1').split('complete systems independently')[1]}
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t('about.paragraph2').split('Inteligencia Artificial')[0] || t('about.paragraph2').split('Artificial Intelligence')[0]}
              <span className="text-purple-400 font-semibold">
                {t('about.paragraph2').includes('Artificial Intelligence') ? 'Artificial Intelligence' : 'Inteligencia Artificial'}
              </span>
              {(t('about.paragraph2').split('Inteligencia Artificial')[1] || t('about.paragraph2').split('Artificial Intelligence')[1])?.split('Big Data')[0]}, 
              <span className="text-green-400 font-semibold"> Big Data</span>
              {t('about.paragraph2').split('Big Data')[1]?.split('Desarrollo Full Stack')[0] || t('about.paragraph2').split('Big Data')[1]?.split('Full Stack Development')[0]} 
              <span className="text-blue-400 font-semibold">
                {t('about.paragraph2').includes('Full Stack Development') ? 'Full Stack Development' : 'Desarrollo Full Stack'}
              </span>
              {t('about.paragraph2').split('Desarrollo Full Stack')[1] || t('about.paragraph2').split('Full Stack Development')[1]}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.paragraph3').split('administro infraestructura')[0] || t('about.paragraph3').split('manage infrastructure')[0]}
              <span className="font-semibold text-white">
                {t('about.paragraph3').includes('manage infrastructure') ? 'manage infrastructure' : 'administro infraestructura'}
              </span>
              {(t('about.paragraph3').split('administro infraestructura')[1] || t('about.paragraph3').split('manage infrastructure')[1])?.split('seguridad (OWASP)')[0] || (t('about.paragraph3').split('administro infraestructura')[1] || t('about.paragraph3').split('manage infrastructure')[1])?.split('security (OWASP)')[0]}
              <span className="text-orange-400">
                {t('about.paragraph3').includes('security (OWASP)') ? 'security (OWASP)' : 'seguridad (OWASP)'}
              </span>
              {t('about.paragraph3').split('seguridad (OWASP)')[1] || t('about.paragraph3').split('security (OWASP)')[1]}
            </p>
          </div>

          <div className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('about.certifications')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.cloudArchitecture')}</p>
                  <p className="text-gray-400 text-sm">INACAP • 198 {t('certifications.hours')} • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.fullStack')}</p>
                  <p className="text-gray-400 text-sm">INACAP • 162 {t('certifications.hours')} • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.database')}</p>
                  <p className="text-gray-400 text-sm">INACAP • 126 {t('certifications.hours')} • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.agile')}</p>
                  <p className="text-gray-400 text-sm">INACAP • 126 {t('certifications.hours')} • Oct 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.aiProjects')}</p>
                  <p className="text-gray-400 text-sm">Certificate of Attendance • Dic 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.innovation')}</p>
                  <p className="text-gray-400 text-sm">INACAP • 216 {t('certifications.hours')} • Oct 2025</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              {t('about.certTotal').split('1,116+')[0]}<span className="text-blue-400 font-semibold">1,116+</span>{t('about.certTotal').split('1,116+')[1]}
            </p>
          </div>

          <div className="mb-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-lg border border-green-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('about.devPractices')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.gitWorkflow')}</p>
                  <p className="text-gray-400 text-sm">{t('certifications.gitWorkflowDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.deployment')}</p>
                  <p className="text-gray-400 text-sm">{t('certifications.deploymentDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.apiDesign')}</p>
                  <p className="text-gray-400 text-sm">{t('certifications.apiDesignDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <p className="text-white font-semibold">{t('certifications.dbOptimization')}</p>
                  <p className="text-gray-400 text-sm">{t('certifications.dbOptimizationDesc')}</p>
                </div>
              </div>
            </div>
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

          {/* CTA hacia proyectos */}
          <div className="mt-16 text-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              {t('about.viewAllProjects')} →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
