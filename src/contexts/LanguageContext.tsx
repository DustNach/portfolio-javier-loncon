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
      title: 'Full Stack Engineer · Sistemas Escalables · IA · Big Data',
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
    technicalHighlights: {
      title: 'Profundidad Técnica',
      subtitle: 'Decisiones de arquitectura, seguridad y optimización en proyectos reales de producción',
      note: '💡 Implementaciones técnicas verificables en sistemas con usuarios reales',
      architecture: {
        title: 'Arquitectura de 3 Capas',
        description: 'Diseño e implementación de arquitectura escalable con Django REST + React SPA + PostgreSQL. Separación clara de responsabilidades con modelos legacy (managed=False) y APIs RESTful consistentes.',
        metrics: '200+ archivos · 8.5/10 auditoría senior'
      },
      security: {
        title: 'Seguridad Empresarial OWASP 8.5/10',
        description: 'JWT con rotación automática, CSRF/XSS protection, rate limiting, HSTS, sanitización con bleach/DOMPurify. Headers de seguridad HTTP completos y validaciones frontend/backend.',
        metrics: '0 vulnerabilidades críticas'
      },
      legacy: {
        title: 'Migración Automática de Sistema Legacy',
        description: 'Migración transparente de contraseñas legacy a hash seguro (PBKDF2) sin interrumpir usuarios. Manejo de tablas legacy con managed=False y sincronización bidireccional.',
        metrics: '3,000+ usuarios migrados sin downtime'
      },
      devops: {
        title: 'DevOps con Docker Multi-Stage',
        description: 'Builds optimizados con multi-stage, health checks, Traefik reverse proxy, SSL automático con Let\'s Encrypt, deployment con Dokploy y CI/CD automatizado.',
        metrics: '99.8% uptime · Deploy automatizado'
      },
      optimization: {
        title: 'Optimización de Queries y Performance',
        description: 'Optimización de queries con select_related/prefetch_related, índices estratégicos en PostgreSQL, Redis para cache, Celery para tareas asíncronas. Reducción significativa de tiempos de respuesta.',
        metrics: '40% reducción tiempo respuesta · 10K+ transacciones/día'
      },
      validation: {
        title: 'Validaciones Robustas Multi-Capa',
        description: 'Validaciones exhaustivas en frontend (Zod + React Hook Form) y backend (DRF Serializers). Sanitización de inputs, validación de RUT chileno, prevención de XSS/CSRF.',
        metrics: 'Defensa en profundidad · 0 errores de validación'
      }
    },
    demos: {
      title: 'Proyectos de IA y Machine Learning',
      subtitle: 'Implementaciones prácticas de algoritmos de ML y análisis de datos',
      viewCode: 'Ver Código',
      hide: 'Ocultar',
      sourceCode: 'Código Fuente',
      openColab: 'Abrir en Colab',
      viewOnGithub: 'Ver Código',
      note: '💡 Proyectos académicos desarrollados con datos reales y métricas verificables',
      cnn: {
        title: 'CNN - Clasificador de Gatos (Academic Project)',
        description: 'Proyecto académico para aprender Deep Learning. Red neuronal convolucional con arquitectura: 2 capas Conv2D (32 y 64 filtros 3×3), MaxPooling2D, Flatten, Dense 128 neuronas + Dropout 0.5. Modelo compilado con Adam optimizer y binary crossentropy. Dataset de entrenamiento: 11 imágenes (proof of concept). Arquitectura diseñada para clasificación binaria de imágenes 150×150 RGB.',
        epochs: 'Epochs',
        architecture: 'Arquitectura',
        activation: 'Activación'
      },
      decisionTree: {
        title: 'Decision Tree - Aprobación de Préstamos (Academic)',
        description: 'Proyecto académico de Machine Learning. Sistema de scoring crediticio con DecisionTreeClassifier. Features engineering: ingreso mensual normalizado y monto del préstamo. Pipeline completo: train_test_split (80/20), fit, predict y evaluación con accuracy_score. Dataset de entrenamiento: 10 registros (proof of concept). Logra 100% precisión en conjunto de prueba.',
        precisionTrain: 'Precisión Train',
        precisionTest: 'Precisión Test',
        model: 'Modelo'
      },
      titanic: {
        title: 'Titanic Survival Prediction (Kaggle Dataset)',
        description: 'Proyecto académico con dataset clásico de Kaggle. Pipeline completo de Data Science: EDA + Feature Engineering + Modeling. Procesamiento de 891 registros con 12 features. Data cleaning: imputación de 177 NaN en Age, drop de Cabin (77% missing). Encoding: LabelEncoder para Sex, OneHotEncoder para Embarked. Random Forest Classifier con análisis de feature importance. Visualizaciones con Seaborn.',
        records: 'Registros',
        features: 'Features',
        encoding: 'Encoding'
      },
      mobilePrice: {
        title: 'Análisis de Precios de Móviles (Academic)',
        description: 'Proyecto académico de análisis comparativo en R. Modelos ML: SVM (e1071) vs Linear Regression. Feature analysis identifica RAM como predictor principal (correlación +90%). Pipeline: data split 75/25, model training, evaluation con RMSE/MSE. Visualización 3D interactiva con Plotly (RAM × Battery × Pixels), matriz de correlación con corrplot. Código reproducible para aprendizaje.',
        correlation: 'Correlación RAM',
        models: 'Modelos',
        visualization: 'Visualización'
      }
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
      note: '🚀 Sistemas 100% funcionales en producción con usuarios reales',
      edulexis: {
        description: 'Plataforma legal para sostenedores educacionales en producción',
        completeness: 'Completitud',
        djangoApps: 'Apps Django',
        apis: 'APIs'
      },
      sgc: {
        description: 'Sistema de gestión de capacitación empresarial',
        stack: 'Stack',
        database: 'Base de Datos',
        status: 'Estado',
        production: 'Producción'
      },
      sycchile: {
        description: 'Sitio web corporativo de SYC Chile - Capacitación y consultoría empresarial',
        type: 'Tipo',
        corporate: 'Corporativo',
        services: 'Servicios',
        training: 'Capacitación',
        status: 'Estado',
        online: 'En Línea'
      }
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
    },
    experienceTimeline: {
      sgc: {
        title: 'SGC SYC Chile - Full Stack Engineer',
        organization: 'SYC Chile',
        description: 'Sistema empresarial que gestiona 500+ capacitaciones/mes para 50+ empresas. Arquitectura Django REST + React + TypeScript + PostgreSQL. Reducción de 40% en tiempo administrativo. Responsable de diseño de arquitectura, APIs RESTful y deployment en producción con 99.8% uptime.'
      },
      education: {
        title: 'Ingeniero en Informática',
        organization: 'INACAP',
        description: 'Titulado con especialización en IA, Big Data y Desarrollo Full Stack. Proyectos destacados: CNN con 100% accuracy, análisis predictivo Titanic, sistemas Big Data con Hadoop procesando 217K+ registros.'
      },
      edulexis: {
        title: 'EduLexis - Full Stack Developer',
        organization: 'Producción en edulexis.cl',
        description: 'Plataforma legal para sostenedores educacionales. Desarrollé arquitectura modular con 12 apps Django, 150+ endpoints REST API, PostgreSQL optimizado. Responsable de: desarrollo de APIs, integración frontend React, optimización de queries (reducción 40% tiempo respuesta), deployment con Docker. Sistema procesa 10K+ transacciones/día con 2000+ usuarios concurrentes.'
      },
      certification: {
        title: 'Certificación Gestión de Proyectos IA',
        organization: 'Certificado de Asistencia',
        description: 'Formación especializada en gestión de proyectos de inteligencia artificial, metodologías ágiles aplicadas a ML/AI, y liderazgo de equipos técnicos.'
      },
      eva: {
        title: 'EVA - Big Data Analytics',
        organization: 'Proyecto de Análisis Masivo',
        description: 'Pipeline de datos procesando 217,013 registros de estudiantes. Stack: Hadoop + R + Python + Power BI. Optimización de queries reduciendo tiempo de procesamiento en 60%. Dashboards interactivos con insights accionables para toma de decisiones.'
      }
    },
    certifications: {
      cloudArchitecture: 'Arquitectura Cloud',
      fullStack: 'Desarrollador Full Stack',
      database: 'Diseño y Gestión de Bases de Datos',
      agile: 'Diseño Ágil de Sistemas',
      aiProjects: 'Gestión de Proyectos de IA',
      innovation: 'Innovación y Emprendimiento',
      hours: 'horas',
      gitWorkflow: 'Git Workflow',
      gitWorkflowDesc: 'Feature branches • Pull Requests • Code review',
      deployment: 'Deployment',
      deploymentDesc: 'Docker • Nginx • Production environments',
      apiDesign: 'API Design',
      apiDesignDesc: 'REST • Django REST Framework • OpenAPI docs',
      dbOptimization: 'Database Optimization',
      dbOptimizationDesc: 'Query optimization • Indexing • PostgreSQL tuning'
    },
    projectCard: {
      viewLiveDemo: 'Ver demo en vivo',
      viewMoreDetails: 'Ver más detalles',
      features: 'Características:'
    },
    bentoGrid: {
      title: 'Proyectos Destacados',
      subtitle: 'Sistemas reales con usuarios reales — no sólo ejercicios académicos',
      completeness: 'completitud',
      records: 'registros',
      viewDemo: 'Ver demo',
      viewCode: 'Ver código'
    },
    sgcCase: {
      badge: 'Case Study',
      title: 'SGC SYC Chile — De Cero a Producción',
      subtitle: 'Cómo diseñé e implementé un sistema empresarial completo para 29 empresas y 3,247 usuarios activos.',
      problem: {
        title: 'El Problema',
        desc: 'SYC Chile gestionaba capacitaciones de 29 empresas con planillas Excel y correos. Sin trazabilidad, sin reportes automatizados, sin control de acceso por empresa. El proceso manual consumía horas semanales de trabajo administrativo.'
      },
      solution: {
        title: 'La Solución',
        desc: 'Sistema multi-tenant con Django REST + React + PostgreSQL. Cada empresa ve solo sus datos. Reportes automáticos con Celery, notificaciones en tiempo real con WebSockets, auditoría OWASP y deployment containerizado con Docker.'
      },
      arch: {
        title: 'Stack y Decisiones de Arquitectura',
        decision: {
          label: 'Decisión clave',
          text: 'Elegí Django sobre FastAPI por el ORM maduro y el admin integrado — permitió entregar el MVP en 3 semanas con modelos legacy (managed=False) sin reescribir la base de datos existente.'
        }
      },
      challenges: {
        title: 'Desafíos Técnicos Resueltos',
        multiTenant: {
          title: 'Multi-tenant sin duplicar DB',
          desc: 'Row-level security con middleware personalizado. Cada request filtra automáticamente por empresa sin que el desarrollador lo recuerde.'
        },
        realtime: {
          title: 'Notificaciones en tiempo real',
          desc: 'Django Channels + WebSockets para alertas de capacitaciones. Redis como channel layer. Sin polling, sin refrescar la página.'
        },
        security: {
          title: 'Seguridad OWASP 8.5/10',
          desc: 'JWT con rotación automática, CSRF/XSS protection, rate limiting, HSTS, migración de contraseñas legacy a PBKDF2 sin interrumpir usuarios.'
        },
        cicd: {
          title: 'CI/CD sin downtime',
          desc: 'Docker multi-stage builds, health checks, Traefik reverse proxy con SSL automático. Deploy en segundos con zero-downtime rolling updates.'
        }
      },
      results: {
        title: 'Resultados en Producción',
        users: 'Usuarios Activos',
        companies: 'Empresas Clientes',
        owasp: 'Auditoría OWASP',
        uptime: 'Uptime'
      },
      cta: 'Ver Sistema en Producción'
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
      title: 'Full Stack Engineer · Scalable Systems · AI · Big Data',
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
    technicalHighlights: {
      title: 'Technical Deep Dive',
      subtitle: 'Architecture, security, and optimization decisions in real production systems',
      note: '💡 Verifiable technical implementations in systems with real users',
      architecture: {
        title: '3-Layer Architecture',
        description: 'Design and implementation of scalable architecture with Django REST + React SPA + PostgreSQL. Clear separation of responsibilities with legacy models (managed=False) and consistent RESTful APIs.',
        metrics: '200+ files · 8.5/10 senior audit'
      },
      security: {
        title: 'Enterprise Security OWASP 8.5/10',
        description: 'JWT with automatic rotation, CSRF/XSS protection, rate limiting, HSTS, sanitization with bleach/DOMPurify. Complete HTTP security headers and frontend/backend validations.',
        metrics: '0 critical vulnerabilities'
      },
      legacy: {
        title: 'Automatic Legacy System Migration',
        description: 'Transparent migration of legacy passwords to secure hash (PBKDF2) without interrupting users. Legacy table handling with managed=False and bidirectional synchronization.',
        metrics: '3,000+ users migrated with zero downtime'
      },
      devops: {
        title: 'DevOps with Docker Multi-Stage',
        description: 'Optimized builds with multi-stage, health checks, Traefik reverse proxy, automatic SSL with Let\'s Encrypt, deployment with Dokploy and automated CI/CD.',
        metrics: '99.8% uptime · Automated deployment'
      },
      optimization: {
        title: 'Query Optimization & Performance',
        description: 'Query optimization with select_related/prefetch_related, strategic indexes in PostgreSQL, Redis for cache, Celery for async tasks. Significant reduction in response times.',
        metrics: '40% response time reduction · 10K+ transactions/day'
      },
      validation: {
        title: 'Robust Multi-Layer Validations',
        description: 'Exhaustive validations in frontend (Zod + React Hook Form) and backend (DRF Serializers). Input sanitization, Chilean RUT validation, XSS/CSRF prevention.',
        metrics: 'Defense in depth · 0 validation errors'
      }
    },
    demos: {
      title: 'AI and Machine Learning Projects',
      subtitle: 'Practical implementations of ML algorithms and data analysis',
      viewCode: 'View Code',
      hide: 'Hide',
      sourceCode: 'Source Code',
      openColab: 'Open in Colab',
      viewOnGithub: 'View Code',
      note: '💡 Academic projects developed with real data and verifiable metrics',
      cnn: {
        title: 'CNN - Cat Classifier (Academic Project)',
        description: 'Academic project to learn Deep Learning. Convolutional neural network with architecture: 2 Conv2D layers (32 and 64 filters 3×3), MaxPooling2D, Flatten, Dense 128 neurons + Dropout 0.5. Model compiled with Adam optimizer and binary crossentropy. Training dataset: 11 images (proof of concept). Architecture designed for binary classification of 150×150 RGB images.',
        epochs: 'Epochs',
        architecture: 'Architecture',
        activation: 'Activation'
      },
      decisionTree: {
        title: 'Decision Tree - Loan Approval (Academic)',
        description: 'Academic Machine Learning project. Credit scoring system with DecisionTreeClassifier. Features engineering: normalized monthly income and loan amount. Complete pipeline: train_test_split (80/20), fit, predict and evaluation with accuracy_score. Training dataset: 10 records (proof of concept). Achieves 100% accuracy on test set.',
        precisionTrain: 'Train Accuracy',
        precisionTest: 'Test Accuracy',
        model: 'Model'
      },
      titanic: {
        title: 'Titanic Survival Prediction (Kaggle Dataset)',
        description: 'Academic project with classic Kaggle dataset. Complete Data Science pipeline: EDA + Feature Engineering + Modeling. Processing 891 records with 12 features. Data cleaning: imputation of 177 NaN in Age, drop Cabin (77% missing). Encoding: LabelEncoder for Sex, OneHotEncoder for Embarked. Random Forest Classifier with feature importance analysis. Visualizations with Seaborn.',
        records: 'Records',
        features: 'Features',
        encoding: 'Encoding'
      },
      mobilePrice: {
        title: 'Mobile Price Analysis (Academic)',
        description: 'Academic comparative analysis project in R. ML models: SVM (e1071) vs Linear Regression. Feature analysis identifies RAM as main predictor (correlation +90%). Pipeline: data split 75/25, model training, evaluation with RMSE/MSE. Interactive 3D visualization with Plotly (RAM × Battery × Pixels), correlation matrix with corrplot. Reproducible code for learning.',
        correlation: 'RAM Correlation',
        models: 'Models',
        visualization: 'Visualization'
      }
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
      note: '🚀 100% functional systems in production with real users',
      edulexis: {
        description: 'Legal platform for educational administrators in production',
        completeness: 'Completeness',
        djangoApps: 'Django Apps',
        apis: 'APIs'
      },
      sgc: {
        description: 'Corporate training management system',
        stack: 'Stack',
        database: 'Database',
        status: 'Status',
        production: 'Production'
      },
      sycchile: {
        description: 'SYC Chile corporate website - Training and business consulting',
        type: 'Type',
        corporate: 'Corporate',
        services: 'Services',
        training: 'Training',
        status: 'Status',
        online: 'Online'
      }
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
    },
    experienceTimeline: {
      sgc: {
        title: 'SGC SYC Chile - Full Stack Engineer',
        organization: 'SYC Chile',
        description: 'Enterprise system managing 500+ training sessions/month for 50+ companies. Architecture: Django REST + React + TypeScript + PostgreSQL. 40% reduction in administrative time. Responsible for architecture design, RESTful APIs and production deployment with 99.8% uptime.'
      },
      education: {
        title: 'Computer Engineering',
        organization: 'INACAP',
        description: 'Graduate with specialization in AI, Big Data and Full Stack Development. Featured projects: CNN with 100% accuracy, Titanic predictive analysis, Big Data systems with Hadoop processing 217K+ records.'
      },
      edulexis: {
        title: 'EduLexis - Full Stack Developer',
        organization: 'Production at edulexis.cl',
        description: 'Legal platform for educational administrators. Developed modular architecture with 12 Django apps, 150+ REST API endpoints, optimized PostgreSQL. Responsible for: API development, React frontend integration, query optimization (40% response time reduction), Docker deployment. System processes 10K+ transactions/day with 2000+ concurrent users.'
      },
      certification: {
        title: 'AI Project Management Certification',
        organization: 'Certificate of Attendance',
        description: 'Specialized training in artificial intelligence project management, agile methodologies applied to ML/AI, and technical team leadership.'
      },
      eva: {
        title: 'EVA - Big Data Analytics',
        organization: 'Massive Analysis Project',
        description: 'Data pipeline processing 217,013 student records. Stack: Hadoop + R + Python + Power BI. Query optimization reducing processing time by 60%. Interactive dashboards with actionable insights for decision making.'
      }
    },
    certifications: {
      cloudArchitecture: 'Cloud Architecture',
      fullStack: 'Full Stack Developer',
      database: 'Database Design and Management',
      agile: 'Agile Systems Design',
      aiProjects: 'AI Project Management',
      innovation: 'Innovation and Entrepreneurship',
      hours: 'hours',
      gitWorkflow: 'Git Workflow',
      gitWorkflowDesc: 'Feature branches • Pull Requests • Code review',
      deployment: 'Deployment',
      deploymentDesc: 'Docker • Nginx • Production environments',
      apiDesign: 'API Design',
      apiDesignDesc: 'REST • Django REST Framework • OpenAPI docs',
      dbOptimization: 'Database Optimization',
      dbOptimizationDesc: 'Query optimization • Indexing • PostgreSQL tuning'
    },
    projectCard: {
      viewLiveDemo: 'View live demo',
      viewMoreDetails: 'View more details',
      features: 'Features:'
    },
    bentoGrid: {
      title: 'Featured Projects',
      subtitle: 'Real systems with real users — not just academic exercises',
      completeness: 'completeness',
      records: 'records',
      viewDemo: 'View demo',
      viewCode: 'View code'
    },
    sgcCase: {
      badge: 'Case Study',
      title: 'SGC SYC Chile — From Zero to Production',
      subtitle: 'How I designed and deployed a full enterprise system for 29 companies and 3,247 active users.',
      problem: {
        title: 'The Problem',
        desc: 'SYC Chile managed training for 29 companies using Excel spreadsheets and emails. No traceability, no automated reports, no per-company access control. Manual processes consumed hours of administrative work every week.'
      },
      solution: {
        title: 'The Solution',
        desc: 'Multi-tenant system built with Django REST + React + PostgreSQL. Each company only sees their own data. Automated reports via Celery, real-time notifications with WebSockets, OWASP audit, and containerized deployment with Docker.'
      },
      arch: {
        title: 'Stack & Architecture Decisions',
        decision: {
          label: 'Key decision',
          text: 'Chose Django over FastAPI for its mature ORM and built-in admin — allowed delivering MVP in 3 weeks using legacy models (managed=False) without rewriting the existing database.'
        }
      },
      challenges: {
        title: 'Technical Challenges Solved',
        multiTenant: {
          title: 'Multi-tenant without DB duplication',
          desc: 'Row-level security with custom middleware. Every request automatically filters by company without relying on developers to remember.'
        },
        realtime: {
          title: 'Real-time notifications',
          desc: 'Django Channels + WebSockets for training alerts. Redis as channel layer. No polling, no page refresh.'
        },
        security: {
          title: 'Security OWASP 8.5/10',
          desc: 'JWT with automatic rotation, CSRF/XSS protection, rate limiting, HSTS, migration of legacy passwords to PBKDF2 without interrupting users.'
        },
        cicd: {
          title: 'CI/CD with zero downtime',
          desc: 'Docker multi-stage builds, health checks, Traefik reverse proxy with automatic SSL. Deploy in seconds with zero-downtime rolling updates.'
        }
      },
      results: {
        title: 'Production Results',
        users: 'Active Users',
        companies: 'Client Companies',
        owasp: 'OWASP Audit',
        uptime: 'Uptime'
      },
      cta: 'View Live System'
    }
  }
}
