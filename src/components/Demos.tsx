import { motion } from 'framer-motion'
import { Brain, TrendingUp, Database, CheckCircle, ChevronDown, ChevronUp, Github } from 'lucide-react'
import { useState } from 'react'
import CodeEditor from './CodeEditor'
import { codeExamples } from '../data/codeExamples'

export default function Demos() {
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null)

  const demos = [
    {
      id: 'cnn-cats',
      title: 'CNN - Clasificador de Gatos',
      description: 'Red neuronal convolucional profunda con arquitectura secuencial: 2 capas Conv2D (32 y 64 filtros), MaxPooling, Flatten, Dense de 128 neuronas con Dropout 0.5, y capa de salida con activación sigmoid. Entrenada durante 10 epochs alcanzando 100% de accuracy en el conjunto de entrenamiento con 11 imágenes.',
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
      description: 'Modelo de clasificación binaria usando DecisionTreeClassifier de Scikit-learn para predecir aprobación de préstamos basado en ingreso y monto solicitado. Implementa división train/test (80/20) logrando 100% de precisión en ambos conjuntos. Dataset de 10 registros con features: ingreso mensual y monto del préstamo.',
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
      description: 'Análisis exploratorio y predictivo del dataset Titanic con 891 pasajeros y 12 features. Incluye limpieza de datos (imputación de 177 valores faltantes en Age con media), eliminación de columna Cabin (77% missing), encoding de variables categóricas (LabelEncoder para Sex, OneHotEncoder para Embarked), y análisis de correlación entre features. Visualizaciones con Seaborn y Matplotlib.',
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
      description: 'Estudio comparativo de modelos SVM (Support Vector Machine) y Regresión Lineal Múltiple en R para predicción de rangos de precio. Análisis de correlación revela RAM como feature más importante (+90%). Incluye visualización 3D interactiva con Plotly (RAM × Battery Power × Pixel Height), matriz de correlación con corrplot, y evaluación mediante RMSE y MSE. Dataset con división 75/25 train/test.',
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
            <span className="text-image-fill">Proyectos de IA y ML</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Proyectos reales de Machine Learning, Deep Learning y Análisis de Datos desarrollados durante mi formación
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
                    Ver Código
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
                        Ocultar
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Ver Código
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
