import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

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
            {(() => {
              const p1 = t('about.paragraph1')
              const p2 = t('about.paragraph2')
              const p3 = t('about.paragraph3')
              const isEN = p1.includes('complete systems independently')

              const p1kb = isEN ? 'complete systems independently' : 'sistemas completos de forma independiente'
              const [p1_pre_city, p1_post_city = ''] = p1.split('Chillán, Chile')
              const [p1_pre_kw, p1_post_kw = ''] = p1_post_city.split(p1kb)

              const p2ka = isEN ? 'Artificial Intelligence' : 'Inteligencia Artificial'
              const p2kc = isEN ? 'Full Stack Development' : 'Desarrollo Full Stack'
              const [p2_pre_ai, p2_post_ai = ''] = p2.split(p2ka)
              const [p2_pre_bd, p2_post_bd = ''] = p2_post_ai.split('Big Data')
              const [p2_pre_fsd, p2_post_fsd = ''] = p2_post_bd.split(p2kc)

              const p3ka = isEN ? 'manage infrastructure' : 'administro infraestructura'
              const p3kb = isEN ? 'security (OWASP)' : 'seguridad (OWASP)'
              const [p3_pre_inf, p3_post_inf = ''] = p3.split(p3ka)
              const [p3_pre_owasp, p3_post_owasp = ''] = p3_post_inf.split(p3kb)

              return (
                <>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {p1_pre_city}
                    <span className="text-blue-400">Chillán, Chile</span>
                    {p1_pre_kw}
                    <span className="font-semibold text-white">{p1kb}</span>
                    {p1_post_kw}
                  </p>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {p2_pre_ai}
                    <span className="text-purple-400 font-semibold">{p2ka}</span>
                    {p2_pre_bd}<span className="text-green-400 font-semibold">Big Data</span>
                    {p2_pre_fsd}
                    <span className="text-blue-400 font-semibold">{p2kc}</span>
                    {p2_post_fsd}
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {p3_pre_inf}
                    <span className="font-semibold text-white">{p3ka}</span>
                    {p3_pre_owasp}
                    <span className="text-orange-400">{p3kb}</span>
                    {p3_post_owasp}
                  </p>
                </>
              )
            })()}
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

          {/* CTA hacia proyectos */}
          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="relative inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 group overflow-hidden"
              style={{
                background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box',
                border: '1px solid transparent',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold relative z-10">
                {t('about.viewAllProjects')} →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
