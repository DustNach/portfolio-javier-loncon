import { Project } from '../types'

export const projects: Project[] = [

  // ── PRODUCCIÓN ────────────────────────────────────────────────
  {
    id: 'sgc-syc-chile',
    title: 'SGC SYC Chile — Sistema de Gestión de Calidad',
    description: '🏗️ Arquitectura 3 capas · 🔒 OWASP 8.5/10 · 🚀 99.8% uptime · 3,000+ usuarios activos',
    longDescription: 'Sistema empresarial completo en producción con arquitectura de 3 capas (Django REST + React SPA + PostgreSQL). Seguridad OWASP 8.5/10: JWT con rotación automática, CSRF/XSS protection, rate limiting, HSTS. DevOps: Docker multi-stage builds, Traefik reverse proxy, SSL automático con Let\'s Encrypt, deployment con Dokploy. Migración automática de sistema legacy sin downtime. 200+ archivos, auditoría senior 8.5/10, 0 vulnerabilidades críticas.',
    technologies: ['Django 5.2', 'React 18', 'TypeScript 5.8', 'PostgreSQL 15', 'Redis 7', 'Celery', 'Docker', 'Traefik', 'Dokploy', 'Zod'],
    category: 'web',
    image: '/projects/sgc-syc.jpg',
    demoUrl: 'https://sgc.sycchile.com',
    features: [
      '🏗️ Arquitectura 3 capas con separación de responsabilidades',
      '🔒 Seguridad OWASP 8.5/10 - 0 vulnerabilidades críticas',
      '🔑 JWT con rotación automática (30min access, 7 días refresh)',
      '🐳 Docker multi-stage builds + health checks',
      '🚀 99.8% uptime · 3,000+ usuarios activos · 29 empresas',
      '📊 Migración legacy automática sin downtime',
      '⚡ Optimización queries: 40% reducción tiempo respuesta',
      '🔧 200+ archivos · Auditoría senior 8.5/10'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'amigo-mascota-veterinaria',
    title: 'Amigo Mascota — Sistema Veterinario',
    description: 'Plataforma completa de gestión veterinaria con IA, notificaciones y cloud',
    longDescription: 'Sistema integral de gestión veterinaria con Django. Registro de mascotas, historial médico, notificaciones SMS/Push, integración Google Calendar, generación de PDFs, códigos QR únicos y almacenamiento en AWS S3 y Azure. Celery para tareas asíncronas y Redis para caché.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Twilio', 'Firebase', 'AWS S3', 'Azure', 'Docker'],
    category: 'web',
    image: '/projects/amigo-mascota.jpg',
    features: [
      'Gestión completa de mascotas y dueños',
      'Historial médico con seguimiento de peso',
      'Notificaciones SMS vía Twilio',
      'Push notifications con Firebase',
      'Integración con Google Calendar',
      'Generación de PDFs con historial',
      'Códigos QR únicos por mascota',
      'Almacenamiento cloud AWS S3 + Azure'
    ],
    status: 'completed',
    year: 2024
  },

  // ── INTELIGENCIA ARTIFICIAL ───────────────────────────────────
  {
    id: 'vet-ia-v2',
    title: 'Sistema Veterinario con IA v2.0',
    description: 'Microservicios con FastAPI + ML para diagnóstico, análisis de riesgos y recomendaciones',
    longDescription: 'Sistema avanzado de gestión veterinaria con IA integrada para validación de datos, análisis de riesgos de salud, recomendaciones personalizadas y monitoreo continuo. Arquitectura de microservicios con FastAPI, PostgreSQL y modelos de Machine Learning.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Machine Learning', 'Docker', 'Microservicios', 'React'],
    category: 'ai',
    image: '/projects/vet-ia.jpg',
    features: [
      'Validación inteligente de datos veterinarios',
      'Análisis de riesgos de salud con IA',
      'Motor de recomendaciones personalizado',
      'Monitoreo continuo en tiempo real',
      'Arquitectura de microservicios escalable',
      'API RESTful con FastAPI y JWT',
      'Análisis predictivo integrado',
      'Frontend React con dashboard clínico'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'nna-cnn-clasificador',
    title: 'NNA — Clasificador de Imágenes con CNN',
    description: '96% accuracy · Red Neuronal Convolucional con TensorFlow y Keras',
    longDescription: 'Proyecto de Deep Learning que implementa una CNN para clasificación binaria de imágenes. TensorFlow 2.17, Keras, OpenCV y Pillow. Capas convolucionales, max pooling y dropout. 96% accuracy en entrenamiento, 93% en validación.',
    technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'NumPy', 'CNN', 'Deep Learning', 'Jupyter Notebook'],
    category: 'ai',
    image: '/projects/nna-cnn.jpg',
    features: [
      '96% accuracy en entrenamiento final',
      '93% accuracy en validación',
      'CNN con 32 y 64 filtros convolucionales',
      'MaxPooling para reducción dimensional',
      'Dropout (50%) contra overfitting',
      'Imágenes 128x128 RGB normalizadas',
      'Optimizador Adam + binary crossentropy',
      'Modelo exportado en formato .h5'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'prediccion-telefonos-ml',
    title: 'SVM vs Regresión Lineal — Predicción de Precios',
    description: 'Comparación de modelos ML: SVM 92% accuracy vs Regresión Lineal 85%',
    longDescription: 'Proyecto de ML que compara SVM y Regresión Lineal para predecir precios de teléfonos. Análisis exploratorio de datos, feature engineering, evaluación con métricas de rendimiento y visualizaciones interactivas.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SVM', 'Jupyter'],
    category: 'ai',
    image: '/projects/ml-phones.jpg',
    features: [
      'SVM con kernel RBF: 92% accuracy',
      'Regresión Lineal: 85% accuracy',
      'Análisis exploratorio de datos (EDA)',
      'Feature engineering y selección de variables',
      'Evaluación con Precision, Recall y F1-Score',
      'Visualizaciones comparativas interactivas',
      'Análisis de correlaciones entre variables',
      'Notebook documentado paso a paso'
    ],
    status: 'completed',
    year: 2024
  },

  // ── BIG DATA ──────────────────────────────────────────────────
  {
    id: 'big-data-hadoop-cluster',
    title: 'Cluster Hadoop — Big Data Distribuido',
    description: '100GB procesados · 3 nodos · 275 jobs · 99.8% uptime',
    longDescription: 'Cluster Apache Hadoop 3.4.0 para procesamiento distribuido de grandes volúmenes de datos. Configuración de HDFS, MapReduce y YARN. Procesamiento de hasta 100GB con arquitectura de 3 nodos y replication factor 3.',
    technologies: ['Apache Hadoop', 'HDFS', 'MapReduce', 'YARN', 'Ubuntu', 'Python', 'Big Data'],
    category: 'data',
    image: '/projects/hadoop-cluster.jpg',
    features: [
      '100GB de datos procesados en producción',
      'Cluster 3 nodos con replication factor 3',
      '275 jobs MapReduce completados',
      '99.8% uptime del cluster',
      'Sistema HDFS distribuido configurado',
      'Framework YARN para gestión de recursos',
      'Block size optimizado 128MB',
      'Monitoreo de nodos en tiempo real'
    ],
    status: 'completed',
    year: 2024
  },

  // ── WEB / MOBILE ──────────────────────────────────────────────
  {
    id: 'iwie-nda-facial-recognition',
    title: 'IWIE NDA — Firma Digital + Reconocimiento Facial',
    description: 'React + Face-API.js · firma digital · PDF firmado · encriptación CryptoJS',
    longDescription: 'App web con React y TypeScript que combina reconocimiento facial (Face-API.js), firma digital en canvas, generación de PDFs firmados, encriptación con CryptoJS y validación de formularios con Formik/Yup.',
    technologies: ['React', 'TypeScript', 'Face-API.js', 'Material-UI', 'jsPDF', 'CryptoJS', 'Formik', 'Yup'],
    category: 'web',
    image: '/projects/iwie-nda.jpg',
    features: [
      'Reconocimiento facial en tiempo real con Face-API.js',
      'Captura de firma digital en canvas',
      'Generación de PDF firmado con jsPDF',
      'Encriptación de datos con CryptoJS',
      'Validación robusta con Formik + Yup',
      'Interfaz profesional con Material-UI',
      'Autenticación JWT (Jose)',
      'TypeScript end-to-end'
    ],
    status: 'completed',
    year: 2024
  },

  // ── SEGURIDAD ─────────────────────────────────────────────────
  {
    id: 'seguridad-informatica-kali',
    title: 'Seguridad Informática — Pentesting con Kali Linux',
    description: 'Auditorías de seguridad, análisis de vulnerabilidades y pentesting ético',
    longDescription: 'Proyectos de seguridad informática con Kali Linux: pentesting, análisis de vulnerabilidades, evaluación de controles y generación de informes. Complementa la auditoría OWASP aplicada en SGC SYC Chile.',
    technologies: ['Kali Linux', 'Pentesting', 'OWASP', 'Vulnerability Analysis', 'Security Audit', 'Cybersecurity'],
    category: 'system',
    image: '/projects/seguridad.jpg',
    features: [
      'Pentesting ético con Kali Linux',
      'Análisis y explotación controlada de vulnerabilidades',
      'Informes de auditoría con recomendaciones',
      'Aplicación de metodología OWASP Top 10',
      'Evaluación de controles de seguridad',
      'Configuración de entornos seguros'
    ],
    status: 'completed',
    year: 2023
  }

]

export default projects
