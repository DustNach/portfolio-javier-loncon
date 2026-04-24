import { motion } from 'framer-motion'
import { Brain, TrendingUp, Activity } from 'lucide-react'

export default function CNNVisualization() {
  const epochs = [
    { epoch: 1, accuracy: 0.6364, loss: 0.6492, val_accuracy: 0.5000, val_loss: 0.5942 },
    { epoch: 2, accuracy: 0.9091, loss: 0.4429, val_accuracy: 0.5000, val_loss: 2.6793 },
    { epoch: 3, accuracy: 0.5455, loss: 2.9164, val_accuracy: 0.5000, val_loss: 1.7254 },
    { epoch: 4, accuracy: 0.7273, loss: 0.5377, val_accuracy: 0.5000, val_loss: 2.5927 },
    { epoch: 5, accuracy: 0.5455, loss: 1.8236, val_accuracy: 0.5000, val_loss: 0.9621 },
    { epoch: 6, accuracy: 0.7273, loss: 0.6335, val_accuracy: 1.0000, val_loss: 0.3963 },
    { epoch: 7, accuracy: 0.6364, loss: 0.5856, val_accuracy: 0.5000, val_loss: 0.3976 },
    { epoch: 8, accuracy: 0.5455, loss: 1.2260, val_accuracy: 1.0000, val_loss: 0.2217 },
    { epoch: 9, accuracy: 1.0000, loss: 0.0765, val_accuracy: 0.5000, val_loss: 0.4031 },
    { epoch: 10, accuracy: 1.0000, loss: 0.0590, val_accuracy: 0.5000, val_loss: 0.6800 }
  ]

  const architecture = [
    { layer: 'Input', size: '128x128x3', neurons: 49152 },
    { layer: 'Conv2D', size: '32 filters', neurons: 32 },
    { layer: 'MaxPooling', size: '2x2', neurons: 0 },
    { layer: 'Conv2D', size: '64 filters', neurons: 64 },
    { layer: 'MaxPooling', size: '2x2', neurons: 0 },
    { layer: 'Flatten', size: '-', neurons: 0 },
    { layer: 'Dense', size: '128 units', neurons: 128 },
    { layer: 'Dropout', size: '0.5', neurons: 0 },
    { layer: 'Output', size: '1 unit', neurons: 1 }
  ]

  return (
    <div className="space-y-6">
      {/* Training Progress */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-6 w-6 text-purple-400" />
          <h4 className="text-xl font-bold text-white">Progreso de Entrenamiento</h4>
        </div>
        
        <div className="grid grid-cols-10 gap-2">
          {epochs.map((e) => (
            <motion.div
              key={e.epoch}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: e.epoch * 0.1 }}
              className="flex flex-col items-center"
            >
              <div 
                className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                style={{ height: `${e.accuracy * 100}px` }}
              />
              <span className="text-xs text-gray-500 mt-1">{e.epoch}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-400">Accuracy Final</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">0.059</div>
            <div className="text-sm text-gray-400">Loss Final</div>
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-pink-400" />
          <h4 className="text-xl font-bold text-white">Arquitectura de Red</h4>
        </div>
        
        <div className="space-y-2">
          {architecture.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg"
            >
              <div className="w-32 font-mono text-sm text-purple-400">{layer.layer}</div>
              <div className="flex-1 h-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: layer.neurons > 0 ? `${Math.min((layer.neurons / 500) * 100, 100)}%` : '10%' }}
                />
              </div>
              <div className="w-24 text-right text-sm text-gray-400">{layer.size}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">10</div>
          <div className="text-sm text-gray-400">Epochs</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <Brain className="h-8 w-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">11</div>
          <div className="text-sm text-gray-400">Imágenes Train</div>
        </div>
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center">
          <Activity className="h-8 w-8 text-pink-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">2</div>
          <div className="text-sm text-gray-400">Clases</div>
        </div>
      </div>
    </div>
  )
}
