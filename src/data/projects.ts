import { Project } from '../types'

// PROYECTOS REALES DE JAVIER LONCÓN - INGENIERO EN INFORMÁTICA
// Portafolio profesional con 17+ proyectos de IA, Big Data, Web, Mobile y Sistemas

export const projects: Project[] = [
  // ==================== INTELIGENCIA ARTIFICIAL Y MACHINE LEARNING ====================
  
  {
    id: 'nna-cnn-clasificador',
    title: 'NNA - Clasificador de Imágenes con CNN',
    description: 'Red Neuronal Convolucional para clasificación binaria de imágenes usando TensorFlow y Keras',
    longDescription: 'Proyecto de Deep Learning que implementa una Red Neuronal Convolucional (CNN) para clasificación de imágenes. Utiliza TensorFlow 2.17, Keras, OpenCV y Pillow para procesamiento de imágenes. El modelo incluye capas convolucionales, max pooling, dropout para evitar overfitting, y alcanza alta precisión en clasificación binaria.',
    technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'Pillow', 'NumPy', 'Deep Learning', 'CNN', 'Jupyter Notebook'],
    category: 'ai',
    image: '/projects/nna-cnn.jpg',
    localPath: 'A:\\nna.ipynb',
    features: [
      'Red Neuronal Convolucional con 32 y 64 filtros',
      'Capas de MaxPooling para reducción dimensional',
      'Dropout (50%) para prevenir overfitting',
      'Preprocesamiento de imágenes 128x128 RGB',
      'Normalización de píxeles (0-1)',
      'Validación cruzada con 20% de datos',
      'Optimizador Adam con binary crossentropy',
      'Exportación del modelo entrenado (.h5)'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'prediccion-telefonos-ml',
    title: 'Predicción de Precios - SVM vs Regresión Lineal',
    description: 'Análisis comparativo entre SVM y Regresión Lineal para predecir precios de teléfonos móviles',
    longDescription: 'Proyecto de Machine Learning que compara dos técnicas de predicción: Support Vector Machine (SVM) y Regresión Lineal. Incluye análisis exploratorio de datos, identificación de características importantes, preprocesamiento y evaluación de modelos para determinar cuál es más efectivo en la predicción de precios.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SVM', 'Linear Regression', 'Jupyter'],
    category: 'ai',
    image: '/projects/ml-phones.jpg',
    localPath: 'E:\\Minería de datos\\Evaluación N 2',
    features: [
      'Análisis exploratorio de datos (EDA)',
      'Comparación SVM vs Regresión Lineal',
      'Identificación de características importantes',
      'Preprocesamiento y normalización de datos',
      'Visualización de resultados con Matplotlib',
      'Evaluación de métricas de rendimiento',
      'Análisis de correlaciones entre variables',
      'Documentación detallada del proceso'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'ml-collection',
    title: 'Colección de Proyectos de Machine Learning',
    description: 'Suite completa de proyectos ML: Iris, Titanic, NLP, Overfitting/Underfitting',
    longDescription: 'Colección profesional de proyectos de Machine Learning que demuestran dominio de diferentes técnicas y algoritmos. Incluye clasificación con Iris dataset, predicción de supervivencia en Titanic, procesamiento de lenguaje natural, y estudios de overfitting/underfitting para optimización de modelos.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'NLTK', 'Pandas', 'Jupyter', 'Matplotlib', 'Seaborn'],
    category: 'ai',
    image: '/projects/ml-collection.jpg',
    localPath: 'A:\\ia',
    features: [
      'Clasificación con Iris Dataset (flores)',
      'Predicción Titanic (supervivencia)',
      'Procesamiento de Lenguaje Natural (NLP)',
      'Análisis de Overfitting y soluciones',
      'Análisis de Underfitting y mejoras',
      'Múltiples algoritmos de clasificación',
      'Visualización de datos y resultados',
      'Notebooks interactivos documentados'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'mineria-datos-cnn',
    title: 'Minería de Datos con CNN',
    description: 'Proyecto avanzado de minería de datos utilizando Redes Neuronales Convolucionales',
    longDescription: 'Proyecto de Minería de Datos que implementa Redes Neuronales Convolucionales para análisis avanzado. Incluye preprocesamiento de datos, feature engineering, y aplicación de técnicas de deep learning para extracción de patrones complejos en grandes volúmenes de datos.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'R', 'Pandas', 'NumPy', 'CNN', 'Data Mining'],
    category: 'data',
    image: '/projects/mineria-cnn.jpg',
    localPath: 'E:\\Minería de datos',
    features: [
      'Implementación de CNN para minería de datos',
      'Análisis exploratorio con R y Python',
      'Preprocesamiento de grandes datasets',
      'Feature engineering avanzado',
      'Algoritmo Apriori para reglas de asociación',
      'Visualización de patrones descubiertos',
      'Evaluación de modelos con métricas',
      'Documentación técnica completa'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== BIG DATA ====================

  {
    id: 'big-data-hadoop-cluster',
    title: 'Cluster Hadoop para Big Data',
    description: 'Configuración y despliegue de cluster Apache Hadoop para procesamiento distribuido',
    longDescription: 'Proyecto completo de Big Data que implementa un cluster Apache Hadoop 3.4.0 para procesamiento distribuido. Incluye configuración de HDFS, MapReduce, análisis de casos de éxito globales, y procesamiento de grandes volúmenes de datos con arquitectura escalable.',
    technologies: ['Apache Hadoop', 'HDFS', 'MapReduce', 'Ubuntu', 'Linux', 'Python', 'Big Data', 'Distributed Systems'],
    category: 'data',
    image: '/projects/hadoop-cluster.jpg',
    localPath: 'A:\\inacap ultimo semestre\\big_data',
    features: [
      'Cluster Hadoop 3.4.0 configurado',
      'Sistema de archivos distribuido HDFS',
      'Procesamiento MapReduce',
      'Análisis de casos de éxito globales',
      'Procesamiento de datos masivos',
      'Arquitectura escalable y distribuida',
      'Optimización de rendimiento',
      'Documentación técnica detallada'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== DESARROLLO WEB ====================

  {
    id: 'amigo-mascota-veterinaria',
    title: 'Amigo Mascota - Sistema Veterinario',
    description: 'Plataforma completa de gestión veterinaria con notificaciones, QR e integración cloud',
    longDescription: 'Sistema integral de gestión veterinaria desarrollado con Django que incluye registro de mascotas, historial médico, sistema de notificaciones SMS/Push, integración con Google Calendar, generación de PDFs, códigos QR únicos, y almacenamiento en AWS S3 y Azure. Implementa Celery para tareas asíncronas y Redis para caché.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Twilio', 'Firebase', 'AWS S3', 'Azure Storage', 'Docker', 'Google Calendar API'],
    category: 'web',
    image: '/projects/amigo-mascota.jpg',
    localPath: 'A:\\inacap ultimo semestre\\amigo-mascota',
    features: [
      'Gestión completa de mascotas y dueños',
      'Historial médico con seguimiento de peso',
      'Notificaciones SMS vía Twilio',
      'Push notifications con Firebase',
      'Integración Google Calendar',
      'Generación de PDFs con historial',
      'Códigos QR únicos por mascota',
      'Almacenamiento cloud (AWS S3 + Azure)',
      'Tareas asíncronas con Celery',
      'Caché con Redis'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'vet-ia-v2',
    title: 'Sistema Veterinario con IA v2.0',
    description: 'Plataforma veterinaria con IA para análisis de riesgos y recomendaciones',
    longDescription: 'Sistema avanzado de gestión veterinaria que utiliza IA para validación de datos, análisis de riesgos de salud, generación de recomendaciones personalizadas y monitoreo continuo. Arquitectura de microservicios con FastAPI, PostgreSQL y modelos de Machine Learning integrados.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'AI/ML', 'Docker', 'Microservicios', 'React'],
    category: 'ai',
    image: '/projects/vet-ia.jpg',
    localPath: 'A:\\inacap ultimo semestre\\vet_v.2',
    features: [
      'Validación inteligente de datos veterinarios',
      'Análisis de riesgos con IA',
      'Motor de recomendaciones personalizado',
      'Monitoreo de salud en tiempo real',
      'Arquitectura de microservicios',
      'API RESTful con FastAPI',
      'Análisis predictivo con GPT',
      'Frontend moderno con React'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'iwie-nda-facial-recognition',
    title: 'IWIE NDA - Firma Digital con Reconocimiento Facial',
    description: 'Aplicación React con reconocimiento facial, firma digital y generación de PDFs',
    longDescription: 'Aplicación web sofisticada desarrollada con React y TypeScript que implementa reconocimiento facial usando Face-API.js, captura de firma digital, generación de documentos PDF, encriptación de datos con CryptoJS, y validación de formularios con Formik y Yup. Incluye Material-UI para interfaz profesional.',
    technologies: ['React', 'TypeScript', 'Face-API.js', 'Material-UI', 'Formik', 'Yup', 'jsPDF', 'CryptoJS', 'Webcam'],
    category: 'web',
    image: '/projects/iwie-nda.jpg',
    localPath: 'A:\\inacap ultimo semestre\\iwie\\iwie-nda',
    features: [
      'Reconocimiento facial con Face-API.js',
      'Captura de firma digital en canvas',
      'Generación de PDFs con jsPDF',
      'Encriptación de datos con CryptoJS',
      'Validación de formularios (Formik + Yup)',
      'Interfaz Material-UI profesional',
      'Captura de webcam en tiempo real',
      'Autenticación con JWT (Jose)',
      'Generación de UUIDs únicos',
      'TypeScript para type safety'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== DESARROLLO MÓVIL ====================

  {
    id: 'iwie-drones-mobile',
    title: 'IWIE Drones - App Móvil de Control',
    description: 'App móvil multiplataforma con Expo para monitoreo y control de drones',
    longDescription: 'Aplicación móvil desarrollada con React Native y Expo que permite monitoreo y control de drones. Integra Firebase para autenticación y base de datos en tiempo real, navegación con React Navigation, y funcionalidades nativas como haptics, blur effects y webview.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore', 'React Navigation', 'Metro', 'Jest'],
    category: 'mobile',
    image: '/projects/iwie-drones.jpg',
    localPath: 'A:\\inacap ultimo semestre\\iwie\\iwie-drones-new',
    features: [
      'App multiplataforma (iOS/Android/Web)',
      'Autenticación con Firebase Auth',
      'Base de datos en tiempo real (Firestore)',
      'Navegación con React Navigation',
      'Efectos nativos (haptics, blur)',
      'WebView para contenido externo',
      'Markdown rendering',
      'Auditoría de seguridad automatizada',
      'Testing con Jest',
      'Hot reload con Metro'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'iwie-register-face',
    title: 'IWIE - Registro Facial',
    description: 'App móvil con Expo para registro y verificación facial',
    longDescription: 'Aplicación móvil especializada en registro y verificación facial desarrollada con Expo y TypeScript. Implementa captura de rostros, procesamiento de imágenes y almacenamiento seguro de datos biométricos.',
    technologies: ['Expo', 'React Native', 'TypeScript', 'Face Recognition', 'Camera API'],
    category: 'mobile',
    image: '/projects/face-register.jpg',
    localPath: 'A:\\inacap ultimo semestre\\iwie\\iwie-register-face-app',
    features: [
      'Captura facial con cámara nativa',
      'Procesamiento de imágenes faciales',
      'Almacenamiento seguro de datos biométricos',
      'Interfaz intuitiva para registro',
      'Verificación facial en tiempo real',
      'TypeScript para robustez'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== BUSINESS INTELLIGENCE ====================

  {
    id: 'inteligencia-negocios-powerbi',
    title: 'Inteligencia de Negocios - Power BI & Tableau',
    description: 'Dashboards interactivos y análisis de datos educativos con Power BI y Tableau',
    longDescription: 'Proyecto completo de Business Intelligence que analiza datos del sistema educativo chileno (matrículas, sostenedores, empleabilidad). Incluye dashboards interactivos en Power BI y Tableau, análisis de frecuencias, visualizaciones avanzadas, y procesamiento de grandes datasets.',
    technologies: ['Power BI', 'Tableau', 'Python', 'Orange', 'Excel', 'CSV', 'Data Visualization', 'BI'],
    category: 'data',
    image: '/projects/bi-powerbi.jpg',
    localPath: 'A:\\15-06-2024\\Inteligencia de Negocios',
    features: [
      'Dashboards interactivos en Power BI',
      'Visualizaciones con Tableau',
      'Análisis de 9M+ registros de matrícula',
      'Análisis de 3M+ sostenedores educativos',
      'Análisis de empleabilidad e ingresos',
      'Procesamiento con Orange Data Mining',
      'Gobierno de datos implementado',
      'Informes ejecutivos detallados'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== GESTIÓN Y AUDITORÍA ====================

  {
    id: 'auditoria-software-cobit',
    title: 'Auditoría de Software - COBIT 2019',
    description: 'Auditoría completa de sistema usando framework COBIT 2019',
    longDescription: 'Proyecto de auditoría de software aplicando el framework COBIT 2019 para evaluar el gobierno de TI de un sistema de librería. Incluye análisis de áreas focales, implementación de objetivos COBIT, evaluación de controles, y generación de informes con recomendaciones.',
    technologies: ['COBIT 2019', 'IT Governance', 'Audit', 'Risk Management', 'Compliance'],
    category: 'system',
    image: '/projects/auditoria-cobit.jpg',
    localPath: 'A:\\15-06-2024\\Auditoria de Software',
    features: [
      'Aplicación de framework COBIT 2019',
      'Evaluación de gobierno de TI',
      'Análisis de áreas focales',
      'Implementación de objetivos COBIT',
      'Evaluación de riesgos y controles',
      'Informe de auditoría completo',
      'Recomendaciones de mejora'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'gestion-proyectos-libreria',
    title: 'Gestión de Proyectos - Librería Mistral',
    description: 'Planificación completa con Carta Gantt, KickOff y metodologías ágiles',
    longDescription: 'Proyecto de gestión que incluye planificación completa con Carta Gantt en MS Project, presentación KickOff, plan de planificación detallado, gestión de recursos, cronogramas, y seguimiento de hitos. Aplicación de metodologías ágiles.',
    technologies: ['MS Project', 'Excel', 'PowerPoint', 'Agile', 'Scrum', 'Project Management'],
    category: 'system',
    image: '/projects/gestion-proyectos.jpg',
    localPath: 'A:\\15-06-2024\\Gestion de Proyectos',
    features: [
      'Carta Gantt detallada en MS Project',
      'Presentación KickOff profesional',
      'Plan de planificación completo',
      'Gestión de recursos y presupuesto',
      'Cronogramas y entregables',
      'Metodologías ágiles aplicadas'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'evaluacion-proyectos-financiera',
    title: 'Evaluación de Proyectos - Análisis Financiero',
    description: 'Evaluación financiera con VAN, TIR y análisis de viabilidad',
    longDescription: 'Proyecto de evaluación financiera que incluye análisis de viabilidad económica, cálculo de VAN y TIR, análisis de sensibilidad, evaluación de riesgos, y determinación de factibilidad técnica y legal de proyectos de inversión.',
    technologies: ['Excel', 'Financial Analysis', 'VAN', 'TIR', 'Risk Analysis'],
    category: 'system',
    image: '/projects/eval-proyectos.jpg',
    localPath: 'A:\\15-06-2024\\Evaluación de Proyectos',
    features: [
      'Análisis de viabilidad económica',
      'Cálculo de VAN y TIR',
      'Análisis de sensibilidad',
      'Evaluación de riesgos',
      'Factibilidad técnica y legal',
      'Proyecciones financieras'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== PROYECTO DE TÍTULO ====================

  {
    id: 'proyecto-titulo-tesis',
    title: 'Proyecto de Título - Ingeniería en Informática',
    description: 'Tesis oficial con análisis de factibilidad técnica, legal e implementación',
    longDescription: 'Proyecto de titulación completo que incluye investigación formal, análisis de factibilidad técnica y legal, implementación práctica del sistema Amigo Mascota, documentación exhaustiva, presentación oficial, y defensa de tesis.',
    technologies: ['Research', 'Documentation', 'Analysis', 'Implementation', 'Presentation'],
    category: 'system',
    image: '/projects/tesis.jpg',
    localPath: 'A:\\inacap ultimo semestre\\Proyecto_titulo',
    features: [
      'Investigación académica formal',
      'Análisis de factibilidad técnica',
      'Estudio de factibilidad legal',
      'Implementación práctica',
      'Documentación exhaustiva (753 páginas)',
      'Presentación oficial PowerPoint',
      'Defensa de tesis',
      'Carta Gantt del proyecto'
    ],
    status: 'completed',
    year: 2024
  },

  // ==================== SEGURIDAD ====================

  {
    id: 'seguridad-informatica-kali',
    title: 'Seguridad Informática - Kali Linux',
    description: 'Proyectos de seguridad, pentesting y análisis de vulnerabilidades',
    longDescription: 'Conjunto de proyectos de seguridad informática que incluyen pentesting, análisis de vulnerabilidades, configuración de Kali Linux, y evaluaciones de seguridad. Implementación de mejores prácticas de ciberseguridad.',
    technologies: ['Kali Linux', 'Pentesting', 'Security Audit', 'Vulnerability Analysis', 'Cybersecurity'],
    category: 'system',
    image: '/projects/seguridad.jpg',
    localPath: 'E:\\Seguridad INF',
    features: [
      'Pentesting con Kali Linux',
      'Análisis de vulnerabilidades',
      'Auditorías de seguridad',
      'Evaluación de riesgos',
      'Implementación de controles',
      'Recomendaciones de seguridad'
    ],
    status: 'completed',
    year: 2023
  }
]

export default projects
