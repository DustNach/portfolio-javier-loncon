import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Building2, Shield, BookOpen } from 'lucide-react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

const Counter = ({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const AnimatedCounter = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10" />,
      value: 3000,
      suffix: '+',
      label: 'Usuarios Activos',
      description: 'En sistemas en producción',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      value: 29,
      suffix: '',
      label: 'Empresas',
      description: 'Utilizando mis soluciones',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      value: 8,
      suffix: '.5 / 10',
      label: 'OWASP Score',
      description: 'Auditoría de seguridad aprobada',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      value: 1116,
      suffix: '+',
      label: 'Horas Certificadas',
      description: 'Formación en Cloud, Full Stack y Agile',
      gradient: 'from-orange-500 to-amber-500'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Impacto Real</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Números que demuestran el alcance de mis proyectos en producción
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-gray-800/50 dark:bg-gray-800/50 light:bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 dark:border-gray-700 light:border-gray-300">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-6`}>
                  {stat.icon}
                </div>
                <div className="mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedCounter
