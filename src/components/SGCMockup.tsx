import { motion } from 'framer-motion'
import { Activity, Users, FileText, Calendar, TrendingUp, Shield } from 'lucide-react'

const SGCMockup = () => {
  const stats = [
    { label: 'Usuarios Activos', value: '3,247', icon: <Users className="h-5 w-5" />, trend: '+12%' },
    { label: 'Consultas Hoy', value: '156', icon: <Activity className="h-5 w-5" />, trend: '+8%' },
    { label: 'Documentos', value: '1,892', icon: <FileText className="h-5 w-5" />, trend: '+5%' },
    { label: 'Citas Programadas', value: '89', icon: <Calendar className="h-5 w-5" />, trend: '+15%' }
  ]

  const recentActivity = [
    { user: 'Dr. García', action: 'Registró consulta', time: 'Hace 2 min', status: 'success' },
    { user: 'Dra. Martínez', action: 'Actualizó historial', time: 'Hace 5 min', status: 'info' },
    { user: 'Sistema', action: 'Backup completado', time: 'Hace 10 min', status: 'success' },
    { user: 'Dr. López', action: 'Programó cita', time: 'Hace 15 min', status: 'warning' }
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Sistema en Producción</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Vista en vivo del Sistema de Gestión Clínica con 3000+ usuarios activos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-700 dark:border-gray-700 light:border-gray-300 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Sistema de Gestión Clínica</h3>
                <p className="text-blue-100">Dashboard en tiempo real</p>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">En línea</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700/30 dark:bg-gray-700/30 light:bg-gray-100/30 rounded-xl p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <TrendingUp className="h-3 w-3" />
                    <span>{stat.trend}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="p-6 border-t border-gray-700 dark:border-gray-700 light:border-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">
                Actividad Reciente
              </h4>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-700/20 dark:bg-gray-700/20 light:bg-gray-100/20 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-400' :
                      activity.status === 'warning' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`} />
                    <div>
                      <p className="text-white dark:text-white light:text-gray-900 text-sm font-medium">
                        {activity.user}
                      </p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
                        {activity.action}
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-xs">
                    {activity.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Security Badge */}
          <div className="p-6 border-t border-gray-700 dark:border-gray-700 light:border-gray-300 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-white dark:text-white light:text-gray-900 font-semibold">
                  Sistema Seguro
                </p>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                  Auditoría OWASP completada • Score 8.5/10 • 0 vulnerabilidades críticas activas
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SGCMockup
