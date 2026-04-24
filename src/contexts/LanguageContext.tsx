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
      title: 'Full Stack Engineer · 2+ años · IA · Big Data',
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
      description: 'Con más de 2 años de experiencia desarrollando soluciones empresariales en producción. Especializado en arquitecturas Django REST + React, con expertise en Machine Learning, Big Data y optimización de sistemas que procesan miles de transacciones diarias.',
      skillsTitle: 'Habilidades Técnicas'
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
      title: 'Proyectos Destacados',
      subtitle: 'Sistemas en producción y soluciones empresariales',
      liveDemo: 'Demo en Vivo',
      viewCode: 'Ver Código'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Conversemos sobre tu próximo proyecto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado exitosamente',
      error: 'Error al enviar mensaje'
    },
    footer: {
      rights: 'Todos los derechos reservados',
      madeWith: 'Hecho con',
      by: 'por'
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
      title: 'Full Stack Engineer · 2+ years · AI · Big Data',
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
      description: 'With over 2 years of experience developing enterprise solutions in production. Specialized in Django REST + React architectures, with expertise in Machine Learning, Big Data and optimization of systems processing thousands of daily transactions.',
      skillsTitle: 'Technical Skills'
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
      title: 'Featured Projects',
      subtitle: 'Production systems and enterprise solutions',
      liveDemo: 'Live Demo',
      viewCode: 'View Code'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk about your next project",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully',
      error: 'Error sending message'
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
      by: 'by'
    }
  }
}
