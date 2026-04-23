import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

// Datos de comparación SVM vs Regresión Lineal
const comparisonData = [
  { model: 'SVM', accuracy: 0.92, precision: 0.89, recall: 0.91, f1: 0.90 },
  { model: 'Linear Reg', accuracy: 0.85, precision: 0.83, recall: 0.84, f1: 0.83 },
];

// Datos de predicción vs real
const predictionData = [
  { real: 10, svm: 10.2, linear: 11.5 },
  { real: 20, svm: 19.8, linear: 21.2 },
  { real: 30, svm: 30.5, linear: 29.8 },
  { real: 40, svm: 39.7, linear: 42.1 },
  { real: 50, svm: 50.3, linear: 48.9 },
  { real: 60, svm: 59.8, linear: 62.3 },
  { real: 70, svm: 70.1, linear: 69.5 },
  { real: 80, svm: 79.9, linear: 81.8 },
];

export default function MLComparisonDemo() {
  return (
    <div className="glass rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">
          SVM vs Regresión Lineal - Comparación en Vivo
        </h3>
        <p className="text-sm text-slate-400 font-body">
          Análisis comparativo de rendimiento entre Support Vector Machine y Regresión Lineal
          en un problema de predicción.
        </p>
      </div>

      {/* Comparación de métricas */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 font-heading">
          Comparación de Métricas
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="model" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              domain={[0, 1]}
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
            />
            <Bar dataKey="accuracy" fill="#a855f7" name="Accuracy" />
            <Bar dataKey="precision" fill="#00d4ff" name="Precision" />
            <Bar dataKey="recall" fill="#10b981" name="Recall" />
            <Bar dataKey="f1" fill="#f59e0b" name="F1-Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Predicciones vs Real */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 font-heading">
          Predicciones vs Valores Reales
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="real" 
              name="Real" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Valor Real', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
            />
            <YAxis 
              name="Predicción" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Predicción', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              cursor={{ strokeDasharray: '3 3' }}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
            />
            <Scatter 
              name="SVM" 
              data={predictionData.map(d => ({ x: d.real, y: d.svm }))} 
              fill="#a855f7"
              line={{ stroke: '#a855f7', strokeWidth: 2 }}
            />
            <Scatter 
              name="Linear Regression" 
              data={predictionData.map(d => ({ x: d.real, y: d.linear }))} 
              fill="#00d4ff"
              line={{ stroke: '#00d4ff', strokeWidth: 2 }}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div className="bg-gradient-to-r from-purple-900/20 to-purple-900/10 p-4 rounded-lg border border-purple-500/30">
          <h4 className="text-sm font-semibold text-white mb-2 font-heading">
            🏆 SVM (Ganador)
          </h4>
          <div className="space-y-1 text-xs text-slate-400 font-body">
            <p>✓ Accuracy: <span className="text-purple-400 font-semibold">92%</span></p>
            <p>✓ Mejor en datos no lineales</p>
            <p>✓ Kernel RBF optimizado</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/10 p-4 rounded-lg border border-blue-500/30">
          <h4 className="text-sm font-semibold text-white mb-2 font-heading">
            Regresión Lineal
          </h4>
          <div className="space-y-1 text-xs text-slate-400 font-body">
            <p>✓ Accuracy: <span className="text-blue-400 font-semibold">85%</span></p>
            <p>✓ Más rápido de entrenar</p>
            <p>✓ Interpretable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
