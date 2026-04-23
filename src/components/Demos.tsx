import { motion } from 'framer-motion'
import CNNDemo from './demos/CNNDemo'
import MLComparisonDemo from './demos/MLComparisonDemo'
import BigDataDemo from './demos/BigDataDemo'

export default function Demos() {
  return (
    <section id="demos" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📊 Demos Interactivas en Vivo
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explora visualizaciones interactivas de mis proyectos de Machine Learning y Big Data.
            Datos reales, gráficos dinámicos, métricas de rendimiento.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CNNDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MLComparisonDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <BigDataDemo />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            💡 Hover sobre los gráficos para ver detalles interactivos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
