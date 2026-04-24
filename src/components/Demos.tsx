import { motion } from 'framer-motion'
import { Brain, TrendingUp, Database, CheckCircle, ChevronDown, ChevronUp, Github } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import CodeEditor from './CodeEditor'
import { codeExamples } from '../data/codeExamples'

export default function Demos() {
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null)
  const { t } = useLanguage()

  const demos = [
    {
      id: 'cnn-cats',
      title: 'CNN - Clasificador de Gatos',
      description: 'Red neuronal convolucional con arquitectura optimizada: 2 capas Conv2D (32 y 64 filtros 3×3), MaxPooling2D, Flatten, Dense 128 neuronas + Dropout 0.5 para prevenir overfitting. Modelo compilado con Adam optimizer y binary crossentropy. Alcanza 100% accuracy en 10 epochs. Arquitectura diseñada para clasificación binaria de imágenes 150×150 RGB.',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
      icon: <Brain className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      metrics: [
        { label: 'Epochs', value: '10' },
        { label: 'Arquitectura', value: 'Conv2D + MaxPooling' },
        { label: 'Activación', value: 'ReLU + Sigmoid' }
      ],
      codeExample: codeExamples.cnn,
      githubUrl: 'https://github.com/DustNach/cnn-cat-classifier'
    },
    {
      id: 'decision-tree',
      title: 'Decision Tree - Aprobación de Préstamos',
      description: 'Sistema de scoring crediticio con DecisionTreeClassifier optimizado. Features engineering: ingreso mensual normalizado y monto del préstamo. Pipeline completo: train_test_split (80/20), fit, predict y evaluación con accuracy_score. Logra 100% precisión en train y test. Modelo exportable para integración en sistemas de producción.',
      tech: ['Scikit-learn', 'Python', 'Pandas'],
      icon: <CheckCircle className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      metrics: [
        { label: 'Precisión Train', value: '100%' },
        { label: 'Precisión Test', value: '100%' },
        { label: 'Modelo', value: 'DecisionTreeClassifier' }
      ],
      codeExample: codeExamples.decisionTree,
      githubUrl: 'https://github.com/DustNach/decision-tree-loan-approval'
    },
    {
      id: 'titanic',
      title: 'Titanic Survival Prediction',
      description: 'Pipeline completo de Data Science: EDA + Feature Engineering + Modeling. Procesamiento de 891 registros con 12 features. Data cleaning: imputación de 177 NaN en Age, drop de Cabin (77% missing). Encoding: LabelEncoder para Sex, OneHotEncoder para Embarked. Random Forest Classifier con análisis de feature importance. Visualizaciones con Seaborn: heatmaps de correlación y distribuciones.',
      tech: ['Pandas', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      metrics: [
        { label: 'Registros', value: '891' },
        { label: 'Features', value: '12' },
        { label: 'Encoding', value: 'LabelEncoder + OneHot' }
      ],
      codeExample: codeExamples.titanic,
      githubUrl: 'https://github.com/DustNach/titanic-survival-prediction'
    },
    {
      id: 'mobile-price',
      title: 'Análisis de Precios de Móviles',
      description: 'Análisis comparativo de modelos ML en R: SVM (e1071) vs Linear Regression. Feature analysis identifica RAM como predictor principal (correlación +90%). Pipeline: data split 75/25, model training, evaluation con RMSE/MSE. Visualización 3D interactiva con Plotly (RAM × Battery × Pixels), matriz de correlación con corrplot. Código optimizado para reproducibilidad y deployment.',
      tech: ['R', 'e1071', 'ggplot2', 'Plotly'],
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      metrics: [
        { label: 'Correlación RAM', value: '+90%' },
        { label: 'Modelos', value: 'SVM + LR' },
        { label: 'Visualización', value: '3D Interactiva' }
      ],
      codeExample: codeExamples.mobilePrice,
      githubUrl: 'https://github.com/DustNach/mobile-price-analysis-r'
    }
  ]

  return (
    <section id="demos" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-bebas uppercase">
            <span className="text-image-fill">{t('demos.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('demos.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${demo.gradient} mb-6`}>
                {demo.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {demo.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {demo.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {demo.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {demo.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {demo.githubUrl && (
                  <a
                    href={demo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
                  >
                    <Github className="h-4 w-4" />
                    {t('demos.viewOnGithub')}
                  </a>
                )}
                {demo.codeExample && (
                  <button
                    onClick={() => setExpandedDemo(expandedDemo === demo.id ? null : demo.id)}
                    className={`${demo.githubUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg font-medium transition-all duration-200 border border-blue-500/20 hover:border-blue-500/40`}
                  >
                    {expandedDemo === demo.id ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        {t('demos.hide')}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        {t('demos.viewCode')}
                      </>
                    )}
                  </button>
                )}
              </div>

              {expandedDemo === demo.id && demo.codeExample && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 overflow-hidden"
                >
                  <CodeEditor
                    code={demo.codeExample.code}
                    title={demo.codeExample.title}
                    output={demo.codeExample.output}
                    colabUrl={demo.codeExample.colabUrl}
                    editable={true}
                  />
                </motion.div>
              )}

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            💡 Proyectos académicos desarrollados con datos reales y métricas verificables
          </p>
        </motion.div>
      </div>
    </section>
  )
}
