import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'es'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  es: {
    nav: {
      about: 'Sobre Mí',
      projects: 'Proyectos',
      demos: 'Demos ML/IA',
      contact: 'Contacto'
    },
    hero: {
      title: 'Full Stack Engineer · 1+ año en producción · IA · Big Data',
      location: 'Chillán, Chile',
      availability: 'Disponible Remoto y presencial',
      tagline: 'Diseño y lidero arquitecturas escalables que procesan 10K+ transacciones/día. Especializado en Django REST, React y ML/AI con sistemas en producción soportando 2000+ usuarios concurrentes.',
      viewProjects: 'Ver Proyectos',
      downloadCV: 'Descargar CV',
      contact: 'Contactar'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Ingeniero Full Stack especializado en desarrollo de sistemas escalables',
      paragraph1: 'Ingeniero en Informática titulado de INACAP (2025), con base en Chillán, Chile. Mi enfoque va más allá de escribir código: construyo sistemas completos de forma independiente — desde el diseño de arquitectura y bases de datos hasta el despliegue en producción y mantenimiento con usuarios reales.',
      paragraph2: 'Me apasiona explorar la intersección entre Inteligencia Artificial, Big Data y Desarrollo Full Stack. He desarrollado desde redes neuronales convolucionales para clasificación de imágenes, hasta clusters Hadoop para procesamiento distribuido, pasando por aplicaciones móviles con reconocimiento facial y sistemas de microservicios con arquitecturas escalables.',
      paragraph3: 'Mi diferenciador: no solo desarrollo — también administro infraestructura, implemento seguridad (OWASP), optimizo rendimiento, y gestiono sistemas en producción con usuarios reales.',
      certifications: 'Certificaciones Profesionales',
      certTotal: 'Total: 1,116+ horas de formación certificada',
      devPractices: 'Development Practices',
      skillsTitle: 'Habilidades Técnicas',
      viewAllProjects: 'Ver todos los proyectos'
    },
    timeline: {
      title: 'Trayectoria',
      subtitle: 'Mi recorrido profesional y académico en desarrollo de software',
      swipeHint: '← Desliza horizontalmente para ver más →'
    },
    demos: {
      title: 'Proyectos de IA y Machine Learning',
      subtitle: 'Implementaciones prácticas de algoritmos de ML y análisis de datos',
      viewCode: 'Ver Código',
      hide: 'Ocultar',
      sourceCode: 'Código Fuente',
      openColab: 'Abrir en Colab',
      viewOnGithub: 'Ver Código'
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una colección de proyectos que demuestran mis habilidades en desarrollo web, inteligencia artificial, big data y arquitecturas de sistemas.',
      all: 'Todos',
      web: 'Web & Cloud',
      ai: 'IA & ML',
      data: 'Big Data',
      security: 'Seguridad',
      noProjects: 'No hay proyectos en esta categoría',
      liveDemo: 'Demo en Vivo',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme a través de cualquiera de estos medios.',
      location: 'Ubicación',
      readyToWork: '¿Listo para trabajar juntos?',
      available: 'Estoy disponible para proyectos de desarrollo, colaboraciones técnicas y oportunidades laborales en el área de tecnología.',
      sendMessage: 'Enviar Mensaje',
      downloadCV: 'Descargar CV'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      using: 'usando React, TypeScript, Vite, TailwindCSS, Framer Motion y Recharts'
    },
    liveProjects: {
      title: 'Proyectos en Vivo',
      subtitle: 'Sistemas reales en producción que puedes visitar ahora mismo',
      visitLive: 'Visitar Sistema en Vivo',
      note: '🚀 Sistemas 100% funcionales en producción con usuarios reales'
    },
    skillsRadar: {
      title: 'Stack Técnico',
      subtitle: 'Visualización interactiva de mis habilidades técnicas principales'
    },
    counter: {
      title: 'Impacto Real',
      subtitle: 'Números que demuestran el alcance de mis proyectos en producción',
      linesOfCode: 'Líneas de Código',
      linesDesc: 'En proyectos de producción',
      projectsCompleted: 'Proyectos Completados',
      projectsDesc: 'Sistemas en producción real',
      recordsProcessed: 'Registros Procesados',
      recordsDesc: 'Análisis de datos educacionales',
      hoursCertified: 'Horas Certificadas',
      hoursDesc: 'Formación en Cloud, Full Stack y Agile'
    }
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      demos: 'ML/AI Demos',
      contact: 'Contact'
    },
    hero: {
      title: 'Full Stack Engineer · 1+ year in production · AI · Big Data',
      location: 'Chillán, Chile',
      availability: 'Available Remote and On-site',
      tagline: 'I design and lead scalable architectures processing 10K+ transactions/day. Specialized in Django REST, React and ML/AI with production systems supporting 2000+ concurrent users.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      contact: 'Contact'
    },
    about: {
      title: 'About Me',
      subtitle: 'Full Stack Engineer specialized in scalable systems development',
      paragraph1: 'Computer Engineering graduate from INACAP (2025), based in Chillán, Chile. My approach goes beyond writing code: I build complete systems independently — from architecture and database design to production deployment and maintenance with real users.',
      paragraph2: 'I am passionate about exploring the intersection between Artificial Intelligence, Big Data and Full Stack Development. I have developed everything from convolutional neural networks for image classification, to Hadoop clusters for distributed processing, including mobile applications with facial recognition and microservices systems with scalable architectures.',
      paragraph3: 'My differentiator: I don\'t just develop — I also manage infrastructure, implement security (OWASP), optimize performance, and manage production systems with real users.',
      certifications: 'Professional Certifications',
      certTotal: 'Total: 1,116+ hours of certified training',
      devPractices: 'Development Practices',
      skillsTitle: 'Technical Skills',
      viewAllProjects: 'View all projects'
    },
    timeline: {
      title: 'Experience',
      subtitle: 'My professional and academic journey in software development',
      swipeHint: '← Swipe horizontally to see more →'
    },
    demos: {
      title: 'AI and Machine Learning Projects',
      subtitle: 'Practical implementations of ML algorithms and data analysis',
      viewCode: 'View Code',
      hide: 'Hide',
      sourceCode: 'Source Code',
      openColab: 'Open in Colab',
      viewOnGithub: 'View Code'
    },
    projects: {
      title: 'Projects',
      subtitle: 'A collection of projects demonstrating my skills in web development, artificial intelligence, big data and system architectures.',
      all: 'All',
      web: 'Web & Cloud',
      ai: 'AI & ML',
      data: 'Big Data',
      security: 'Security',
      noProjects: 'No projects in this category',
      liveDemo: 'Live Demo',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in collaborating or have any questions? Feel free to contact me through any of these channels.',
      location: 'Location',
      readyToWork: 'Ready to work together?',
      available: 'I am available for development projects, technical collaborations and job opportunities in the technology area.',
      sendMessage: 'Send Message',
      downloadCV: 'Download CV'
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
      using: 'using React, TypeScript, Vite, TailwindCSS, Framer Motion and Recharts'
    },
    liveProjects: {
      title: 'Live Projects',
      subtitle: 'Real production systems you can visit right now',
      visitLive: 'Visit Live System',
      note: '🚀 100% functional systems in production with real users'
    },
    skillsRadar: {
      title: 'Technical Stack',
      subtitle: 'Interactive visualization of my main technical skills'
    },
    counter: {
      title: 'Real Impact',
      subtitle: 'Numbers demonstrating the reach of my production projects',
      linesOfCode: 'Lines of Code',
      linesDesc: 'In production projects',
      projectsCompleted: 'Completed Projects',
      projectsDesc: 'Real production systems',
      recordsProcessed: 'Records Processed',
      recordsDesc: 'Educational data analysis',
      hoursCertified: 'Certified Hours',
      hoursDesc: 'Training in Cloud, Full Stack and Agile'
    }
  }
}
