import { motion } from 'framer-motion'
import { Users, TrendingUp, Database } from 'lucide-react'

export default function TitanicVisualization() {
  const features = [
    { name: 'Age', missing: 177, total: 891, importance: 85 },
    { name: 'Sex', missing: 0, total: 891, importance: 95 },
    { name: 'Pclass', missing: 0, total: 891, importance: 80 },
    { name: 'Fare', missing: 0, total: 891, importance: 70 },
    { name: 'Embarked', missing: 2, total: 891, importance: 60 },
    { name: 'SibSp', missing: 0, total: 891, importance: 50 },
    { name: 'Parch', missing: 0, total: 891, importance: 45 }
  ]

  const survival = [
    { class: '1st Class', survived: 136, died: 80, rate: 63 },
    { class: '2nd Class', survived: 87, died: 97, rate: 47 },
    { class: '3rd Class', survived: 119, died: 372, rate: 24 }
  ]

  return (
    <div className="space-y-6">
      {/* Dataset Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <Database className="h-8 w-8 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">891</div>
          <div className="text-sm text-gray-400">Pasajeros</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">342</div>
          <div className="text-sm text-gray-400">Sobrevivientes</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <TrendingUp className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">38%</div>
          <div className="text-sm text-gray-400">Tasa Supervivencia</div>
        </div>
      </div>

      {/* Feature Importance */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
        <h4 className="text-xl font-bold text-white mb-4">Importancia de Features</h4>
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="space-y-1"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">{feature.name}</span>
                <span className="text-blue-400">{feature.importance}%</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${feature.importance}%` }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                />
              </div>
              {feature.missing > 0 && (
                <div className="text-xs text-orange-400">
                  {feature.missing} valores faltantes (imputados)
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Survival by Class */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
        <h4 className="text-xl font-bold text-white mb-4">Supervivencia por Clase</h4>
        <div className="space-y-4">
          {survival.map((item, i) => (
            <motion.div
              key={item.class}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{item.class}</span>
                <span className="text-lg font-bold text-cyan-400">{item.rate}%</span>
              </div>
              <div className="flex gap-2 h-8">
                <div 
                  className="bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold"
                  style={{ width: `${(item.survived / (item.survived + item.died)) * 100}%` }}
                >
                  {item.survived}
                </div>
                <div 
                  className="bg-red-500 rounded flex items-center justify-center text-xs text-white font-bold"
                  style={{ width: `${(item.died / (item.survived + item.died)) * 100}%` }}
                >
                  {item.died}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded" />
            <span className="text-gray-400">Sobrevivieron</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span className="text-gray-400">Fallecieron</span>
          </div>
        </div>
      </div>
    </div>
  )
}
