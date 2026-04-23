import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Datos simulados de entrenamiento de la CNN
const trainingData = [
  { epoch: 1, accuracy: 0.65, loss: 0.85, val_accuracy: 0.62, val_loss: 0.88 },
  { epoch: 2, accuracy: 0.72, loss: 0.68, val_accuracy: 0.70, val_loss: 0.72 },
  { epoch: 3, accuracy: 0.78, loss: 0.55, val_accuracy: 0.75, val_loss: 0.60 },
  { epoch: 4, accuracy: 0.83, loss: 0.45, val_accuracy: 0.80, val_loss: 0.52 },
  { epoch: 5, accuracy: 0.87, loss: 0.38, val_accuracy: 0.84, val_loss: 0.46 },
  { epoch: 6, accuracy: 0.90, loss: 0.32, val_accuracy: 0.87, val_loss: 0.41 },
  { epoch: 7, accuracy: 0.92, loss: 0.28, val_accuracy: 0.89, val_loss: 0.38 },
  { epoch: 8, accuracy: 0.94, loss: 0.24, val_accuracy: 0.91, val_loss: 0.35 },
  { epoch: 9, accuracy: 0.95, loss: 0.21, val_accuracy: 0.92, val_loss: 0.33 },
  { epoch: 10, accuracy: 0.96, loss: 0.18, val_accuracy: 0.93, val_loss: 0.31 },
];

export default function CNNDemo() {
  return (
    <div className="glass rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">
          NNA - Clasificador CNN en Vivo
        </h3>
        <p className="text-sm text-slate-400 font-body">
          Resultados de entrenamiento de la red neuronal convolucional para clasificación binaria de imágenes.
          Arquitectura: Conv2D → MaxPooling → Dropout → Dense.
        </p>
      </div>

      {/* Accuracy Chart */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 font-heading">
          Accuracy durante el entrenamiento
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trainingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="epoch" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Epoch', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              domain={[0, 1]}
              label={{ value: 'Accuracy', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="accuracy" 
              stroke="#a855f7" 
              strokeWidth={2}
              name="Training Accuracy"
              dot={{ fill: '#a855f7', r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="val_accuracy" 
              stroke="#00d4ff" 
              strokeWidth={2}
              name="Validation Accuracy"
              dot={{ fill: '#00d4ff', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Loss Chart */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 font-heading">
          Loss durante el entrenamiento
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trainingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="epoch" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Epoch', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              domain={[0, 1]}
              label={{ value: 'Loss', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="loss" 
              stroke="#ef4444" 
              strokeWidth={2}
              name="Training Loss"
              dot={{ fill: '#ef4444', r: 3 }}
            />
            <Line 
              type="monotone" 
              dataKey="val_loss" 
              stroke="#f59e0b" 
              strokeWidth={2}
              name="Validation Loss"
              dot={{ fill: '#f59e0b', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Métricas finales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">96%</p>
          <p className="text-xs text-slate-500 font-body">Final Accuracy</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">93%</p>
          <p className="text-xs text-slate-500 font-body">Val Accuracy</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">0.18</p>
          <p className="text-xs text-slate-500 font-body">Final Loss</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">10</p>
          <p className="text-xs text-slate-500 font-body">Epochs</p>
        </div>
      </div>

      {/* Arquitectura */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4 rounded-lg border border-purple-500/30">
        <h4 className="text-sm font-semibold text-white mb-2 font-heading">
          Arquitectura del Modelo
        </h4>
        <div className="text-xs text-slate-400 font-mono space-y-1">
          <p>Conv2D(32, 3x3) → ReLU → MaxPooling(2x2)</p>
          <p>Conv2D(64, 3x3) → ReLU → MaxPooling(2x2)</p>
          <p>Flatten → Dense(128) → ReLU → Dropout(0.5)</p>
          <p>Dense(1) → Sigmoid</p>
        </div>
      </div>
    </div>
  );
}
