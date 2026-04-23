import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Datos de procesamiento Hadoop
const processingData = [
  { size: '1 GB', time: 12, nodes: 3 },
  { size: '10 GB', time: 45, nodes: 3 },
  { size: '50 GB', time: 180, nodes: 3 },
  { size: '100 GB', time: 320, nodes: 3 },
];

// Distribución de datos en cluster
const clusterData = [
  { name: 'Node 1', value: 35, color: '#a855f7' },
  { name: 'Node 2', value: 32, color: '#00d4ff' },
  { name: 'Node 3', value: 33, color: '#10b981' },
];

// Métricas de MapReduce
const mapReduceData = [
  { phase: 'Map', tasks: 150, time: 45 },
  { phase: 'Shuffle', tasks: 75, time: 30 },
  { phase: 'Reduce', tasks: 50, time: 25 },
];

export default function BigDataDemo() {
  return (
    <div className="glass rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">
          Cluster Hadoop - Procesamiento Distribuido en Vivo
        </h3>
        <p className="text-sm text-slate-400 font-body">
          Análisis de rendimiento del cluster Hadoop con HDFS y MapReduce para procesamiento
          de grandes volúmenes de datos.
        </p>
      </div>

      {/* Tiempo de procesamiento por tamaño */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 font-heading">
          Tiempo de Procesamiento vs Tamaño de Datos
        </h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={processingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="size" 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#94a3b8"
              style={{ fontSize: '12px' }}
              label={{ value: 'Tiempo (seg)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
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
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="time" fill="#10b981" name="Tiempo (segundos)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Grid con distribución y MapReduce */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Distribución en cluster */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 font-heading">
            Distribución de Datos en Cluster
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={clusterData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {clusterData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Fases MapReduce */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 font-heading">
            Fases de MapReduce
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={mapReduceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis dataKey="phase" type="category" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="tasks" fill="#00d4ff" name="Tareas" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Métricas del cluster */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">3</p>
          <p className="text-xs text-slate-500 font-body">Nodos Activos</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">100GB</p>
          <p className="text-xs text-slate-500 font-body">Datos Procesados</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">275</p>
          <p className="text-xs text-slate-500 font-body">Jobs Completados</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gradient font-heading">99.8%</p>
          <p className="text-xs text-slate-500 font-body">Uptime</p>
        </div>
      </div>

      {/* Configuración */}
      <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 rounded-lg border border-green-500/30">
        <h4 className="text-sm font-semibold text-white mb-2 font-heading">
          Configuración del Cluster
        </h4>
        <div className="text-xs text-slate-400 font-mono space-y-1">
          <p>• HDFS: 3 DataNodes + 1 NameNode</p>
          <p>• Replication Factor: 3</p>
          <p>• Block Size: 128 MB</p>
          <p>• MapReduce Framework: YARN</p>
        </div>
      </div>
    </div>
  );
}
