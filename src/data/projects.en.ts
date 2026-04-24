import { Project } from '../types'

export const projectsEn: Project[] = [

  // ── PRODUCTION ────────────────────────────────────────────────
  {
    id: 'sgc-syc-chile',
    title: 'SGC SYC Chile — Quality Management System',
    description: '3,000+ active users · 29 companies · OWASP 8.5/10 · Production system',
    longDescription: 'Quality Management System developed for SYC Chile. Full stack with Django REST Framework, React, TypeScript and PostgreSQL. Manages over 3,000 active participants from 29 client companies. WebSockets for real-time, Celery for async tasks, automated CI/CD with Docker, and OWASP 8.5/10 security audit.',
    technologies: ['Django', 'Django REST Framework', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets', 'Docker', 'Nginx'],
    category: 'web',
    image: '/projects/sgc-syc.jpg',
    demoUrl: 'https://sgc.sycchile.com',
    features: [
      '3,000+ active users in production',
      '29 managed client companies',
      'OWASP 8.5/10 security audit',
      'WebSockets for real-time communication',
      'Celery + Redis for async tasks',
      'Automated CI/CD with Docker and Nginx',
      'VPS administration and high availability',
      'REST API with JWT authentication'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'amigo-mascota-veterinaria',
    title: 'Amigo Mascota — Veterinary System',
    description: 'Complete veterinary management platform with AI, notifications and cloud',
    longDescription: 'Comprehensive veterinary management system with Django. Pet registration, medical history, SMS/Push notifications, Google Calendar integration, PDF generation, unique QR codes and storage on AWS S3 and Azure. Celery for async tasks and Redis for caching.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Twilio', 'Firebase', 'AWS S3', 'Azure', 'Docker'],
    category: 'web',
    image: '/projects/amigo-mascota.jpg',
    features: [
      'Complete pet and owner management',
      'Medical history with weight tracking',
      'SMS notifications via Twilio',
      'Push notifications with Firebase',
      'Google Calendar integration',
      'PDF generation with medical history',
      'Unique QR codes per pet',
      'Cloud storage AWS S3 + Azure'
    ],
    status: 'completed',
    year: 2024
  },

  // ── ARTIFICIAL INTELLIGENCE ───────────────────────────────────
  {
    id: 'vet-ia-v2',
    title: 'Veterinary System with AI v2.0',
    description: 'Microservices with FastAPI + ML for diagnosis, risk analysis and recommendations',
    longDescription: 'Advanced veterinary management system with integrated AI for data validation, health risk analysis, personalized recommendations and continuous monitoring. Microservices architecture with FastAPI, PostgreSQL and Machine Learning models.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Machine Learning', 'Docker', 'Microservices', 'React'],
    category: 'ai',
    image: '/projects/vet-ia.jpg',
    features: [
      'Intelligent veterinary data validation',
      'AI-powered health risk analysis',
      'Personalized recommendation engine',
      'Real-time continuous monitoring',
      'Scalable microservices architecture',
      'RESTful API with FastAPI and JWT',
      'Integrated predictive analysis',
      'React frontend with clinical dashboard'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'nna-cnn-clasificador',
    title: 'NNA — Image Classifier with CNN',
    description: '96% accuracy · Convolutional Neural Network with TensorFlow and Keras',
    longDescription: 'Deep Learning project implementing a CNN for binary image classification. TensorFlow 2.17, Keras, OpenCV and Pillow. Convolutional layers, max pooling and dropout. 96% accuracy in training, 93% in validation.',
    technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'NumPy', 'CNN', 'Deep Learning', 'Jupyter Notebook'],
    category: 'ai',
    image: '/projects/nna-cnn.jpg',
    features: [
      '96% accuracy in final training',
      '93% accuracy in validation',
      'CNN with 32 and 64 convolutional filters',
      'MaxPooling for dimensional reduction',
      'Dropout (50%) against overfitting',
      'Normalized 128x128 RGB images',
      'Adam optimizer + binary crossentropy',
      'Model exported in .h5 format'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'prediccion-telefonos-ml',
    title: 'SVM vs Linear Regression — Price Prediction',
    description: 'ML model comparison: SVM 92% accuracy vs Linear Regression 85%',
    longDescription: 'ML project comparing SVM and Linear Regression to predict phone prices. Exploratory data analysis, feature engineering, performance metrics evaluation and interactive visualizations.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SVM', 'Jupyter'],
    category: 'ai',
    image: '/projects/ml-phones.jpg',
    features: [
      'SVM with RBF kernel: 92% accuracy',
      'Linear Regression: 85% accuracy',
      'Exploratory Data Analysis (EDA)',
      'Feature engineering and variable selection',
      'Evaluation with Precision, Recall and F1-Score',
      'Interactive comparative visualizations',
      'Variable correlation analysis',
      'Step-by-step documented notebook'
    ],
    status: 'completed',
    year: 2024
  },

  // ── BIG DATA ──────────────────────────────────────────────────
  {
    id: 'big-data-hadoop-cluster',
    title: 'Hadoop Cluster — Distributed Big Data',
    description: '100GB processed · 3 nodes · 275 jobs · 99.8% uptime',
    longDescription: 'Apache Hadoop 3.4.0 cluster for distributed processing of large data volumes. HDFS, MapReduce and YARN configuration. Processing up to 100GB with 3-node architecture and replication factor 3.',
    technologies: ['Apache Hadoop', 'HDFS', 'MapReduce', 'YARN', 'Ubuntu', 'Python', 'Big Data'],
    category: 'data',
    image: '/projects/hadoop-cluster.jpg',
    features: [
      '100GB of data processed in production',
      '3-node cluster with replication factor 3',
      '275 completed MapReduce jobs',
      '99.8% cluster uptime',
      'Configured distributed HDFS system',
      'YARN framework for resource management',
      'Optimized 128MB block size',
      'Real-time node monitoring'
    ],
    status: 'completed',
    year: 2024
  },

  // ── WEB / MOBILE ──────────────────────────────────────────────
  {
    id: 'iwie-nda-facial-recognition',
    title: 'IWIE NDA — Digital Signature + Facial Recognition',
    description: 'React + Face-API.js · digital signature · signed PDF · CryptoJS encryption',
    longDescription: 'Web app with React and TypeScript combining facial recognition (Face-API.js), digital signature on canvas, signed PDF generation, CryptoJS encryption and form validation with Formik/Yup.',
    technologies: ['React', 'TypeScript', 'Face-API.js', 'Material-UI', 'jsPDF', 'CryptoJS', 'Formik', 'Yup'],
    category: 'web',
    image: '/projects/iwie-nda.jpg',
    features: [
      'Real-time facial recognition with Face-API.js',
      'Digital signature capture on canvas',
      'Signed PDF generation with jsPDF',
      'Data encryption with CryptoJS',
      'Robust validation with Formik + Yup',
      'Professional interface with Material-UI',
      'JWT authentication (Jose)',
      'End-to-end TypeScript'
    ],
    status: 'completed',
    year: 2024
  },

  // ── SECURITY ─────────────────────────────────────────────────
  {
    id: 'seguridad-informatica-kali',
    title: 'IT Security — Pentesting with Kali Linux',
    description: 'Security audits, vulnerability analysis and ethical pentesting',
    longDescription: 'IT security projects with Kali Linux: pentesting, vulnerability analysis, control assessment and report generation. Complements the OWASP audit applied in SGC SYC Chile.',
    technologies: ['Kali Linux', 'Pentesting', 'OWASP', 'Vulnerability Analysis', 'Security Audit', 'Cybersecurity'],
    category: 'system',
    image: '/projects/seguridad.jpg',
    features: [
      'Ethical pentesting with Kali Linux',
      'Controlled vulnerability analysis and exploitation',
      'Audit reports with recommendations',
      'OWASP Top 10 methodology application',
      'Security control assessment',
      'Secure environment configuration'
    ],
    status: 'completed',
    year: 2023
  }

]

export default projectsEn
