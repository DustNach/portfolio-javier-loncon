import { Project } from '../types'

export const projectsEn: Project[] = [

  // ── ACTIVE PRODUCTION ─────────────────────────────────────────
  {
    id: 'edulexis',
    title: 'EduLexis — Legal Education Platform',
    description: '🟢 Personal project in production · 12 Django apps · 150+ APIs · Co-founder with specialist lawyer',
    longDescription: 'Personal project: legal platform for educational administrators, built with my lawyer brother. Modular Django architecture with 12 independent applications, 150+ documented REST API endpoints, optimized PostgreSQL with select_related/prefetch_related. I designed the full architecture, built backend and frontend, and deployed with Docker + Nginx. Live in production at edulexis.cl.',
    technologies: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API', 'Nginx', 'Redis'],
    category: 'web',
    image: '/projects/edulexis.svg',
    demoUrl: 'https://edulexis.cl',
    features: [
      '🟢 Personal project live in production (edulexis.cl)',
      '👤 Co-founder: developer + specialist lawyer brother',
      '🏗️ 12 modular Django apps with separation of concerns',
      '📡 150+ documented REST API endpoints',
      '⚡ Query optimization with select_related/prefetch_related',
      '🔑 JWT authentication with role-based access control',
      '🐳 Docker + Nginx + automated CI/CD deployment',
      '📐 Architecture designed for horizontal scaling'
    ],
    status: 'completed',
    year: 2025
  },

  // ── PRODUCTION ────────────────────────────────────────────────
  {
    id: 'sgc-syc-chile',
    title: 'SGC SYC Chile — Training Management System',
    description: '💼 Freelance · Nov 2025–Mar 2026 · 3,570 real participants · 29 clients · OWASP 8.5/10',
    longDescription: 'Training management system developed as freelance for SYC Chile (Nov 2025 – Mar 2026, ~560 hours). 3-layer architecture: Django REST + React SPA + PostgreSQL. Legacy system migration with zero downtime. Live in production with 29 real clients (AQUACHILE, AUSTRALIS, CAMANCHACA, MOWI and others), 47 companies, 3,570 participants and 3,957 active enrollments. Security audit using OWASP Top 10 methodology: 8.5/10 score, 0 critical vulnerabilities.',
    technologies: ['Django 5.2', 'React 18', 'TypeScript 5.8', 'PostgreSQL 15', 'Redis 7', 'Celery', 'Docker', 'Traefik', 'Dokploy', 'Zod'],
    category: 'web',
    image: '/projects/sgc-syc.svg',
    demoUrl: 'https://sgc.sycchile.com',
    caseStudyUrl: '/projects/sgc-case-study',
    githubUrl: 'https://github.com/DustNach/sgc-project',
    features: [
      '💼 Paid freelance work · Nov 2025 – Mar 2026 · ~560 hours',
      '📊 3,570 real participants · 3,957 enrollments · 29 clients',
      '🏗️ 3-layer architecture with separation of concerns',
      '🔒 OWASP Top 10 audit: 8.5/10 · 0 critical vulnerabilities',
      '🔑 JWT with automatic rotation (30min access, 7 days refresh)',
      '🐳 Docker multi-stage builds + Traefik + automatic SSL',
      '📦 Legacy system migration to PostgreSQL with zero downtime',
      '⚡ Query optimization with select_related/prefetch_related'
    ],
    status: 'completed',
    year: 2025
  },

  {
    id: 'amigo-mascota-veterinaria',
    title: 'Amigo Mascota — Veterinary System',
    description: 'Complete veterinary management platform with AI, notifications and cloud',
    longDescription: 'Comprehensive veterinary management system with Django. Pet registration, medical history, SMS/Push notifications, Google Calendar integration, PDF generation, unique QR codes and storage on AWS S3 and Azure. Celery for async tasks and Redis for caching.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Twilio', 'Firebase', 'AWS S3', 'Azure', 'Docker'],
    category: 'web',
    image: '/projects/amigo-mascota.svg',
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
    image: '/projects/vet-ia.svg',
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
    image: '/projects/nna-cnn.svg',
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
    image: '/projects/ml-phones.svg',
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
    id: 'eva-big-data',
    title: 'EVA — Educational Data Analysis',
    description: '217,013 records processed · Hadoop + R + Python · Complete Big Data Pipeline',
    longDescription: 'Educational data analysis pipeline processing 217,013 student records. Full stack: Hadoop for distributed processing, R for statistical analysis, Python for transformations and Power BI for interactive dashboards. Query optimization achieving 60% reduction in processing time.',
    technologies: ['Hadoop', 'R', 'Python', 'Power BI', 'HDFS', 'MapReduce', 'Pandas', 'Data Analysis'],
    category: 'data',
    image: '/projects/eva.svg',
    features: [
      '217,013 student records processed',
      'Full ETL pipeline with Hadoop + R + Python',
      '60% reduction in processing time',
      'Interactive dashboards with Power BI',
      'Statistical analysis with R and visualizations',
      'Actionable insights for decision making',
      'Distributed processing with HDFS + MapReduce',
      'Automated report export'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'big-data-hadoop-cluster',
    title: 'Hadoop Cluster — Distributed Big Data',
    description: '100GB processed · 3 nodes · 275 jobs · 99.8% uptime',
    longDescription: 'Apache Hadoop 3.4.0 cluster for distributed processing of large data volumes. HDFS, MapReduce and YARN configuration. Processing up to 100GB with 3-node architecture and replication factor 3.',
    technologies: ['Apache Hadoop', 'HDFS', 'MapReduce', 'YARN', 'Ubuntu', 'Python', 'Big Data'],
    category: 'data',
    image: '/projects/hadoop-cluster.svg',
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
    id: 'chile-abogados',
    title: 'ChileAbogados — Legal Platform',
    description: 'Django + React + WebSockets · Legal platform with AI, advanced search and real-time',
    longDescription: 'Complete legal platform with Django REST + React + TypeScript. Advanced lawyer search with filters, detailed profiles, booking system, real-time notifications with WebSockets (Channels), Celery integration for async tasks and Redis as broker.',
    technologies: ['Django', 'DRF', 'React', 'TypeScript', 'Tailwind', 'WebSockets', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'web',
    image: '/projects/chile-abogados.svg',
    features: [
      'Advanced lawyer search with dynamic filters',
      'Real-time notifications with WebSockets (Django Channels)',
      'Booking system and appointment management',
      'Celery + Redis for async tasks',
      'JWT authentication with react-hook-form + Zod',
      'Dashboards with Recharts and visualizations',
      'Automated tests with Playwright',
      'Scalable architecture with Docker + CI/CD'
    ],
    status: 'completed',
    year: 2025
  },

  {
    id: 'syc-chile-web',
    title: 'SYC Chile — Corporate Website',
    description: 'Next.js · Corporate site for training and consulting company',
    longDescription: 'Corporate website for SYC Chile, a business training and consulting company. Built with Next.js for optimal performance and SEO. Content management, course catalog and contact forms.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Docker', 'SEO'],
    category: 'web',
    image: '/projects/syc-chile.svg',
    demoUrl: 'https://sycchile.com',
    features: [
      'Next.js for SSR and optimized SEO',
      'Complete course and training catalog',
      'Contact and quote forms',
      'Responsive design for all devices',
      'Integration with SYC Chile internal systems',
      'Deploy with Docker + Nginx'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'bioclean-pro',
    title: 'BioClean Pro — E-commerce',
    description: 'WordPress + WooCommerce · Online store for cleaning products in production',
    longDescription: 'E-commerce store in production built with WordPress and WooCommerce. Professional cleaning products catalog, payment gateway, inventory management and order system. SEO optimization and performance with cache and CDN.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Elementor', 'SEO', 'WooCommerce Payments'],
    category: 'web',
    image: '/projects/bioclean.svg',
    features: [
      'Complete e-commerce store with WooCommerce',
      'Product catalog with filters and search',
      'Integrated payment gateway',
      'Inventory and order management',
      'Design with Elementor Pro',
      'SEO optimized with Yoast',
      'Coupon and discount system',
      'Sales and analytics dashboard'
    ],
    status: 'completed',
    year: 2024
  },

  {
    id: 'iwie-nda-facial-recognition',
    title: 'IWIE NDA — Digital Signature + Facial Recognition',
    description: 'React + Face-API.js · digital signature · signed PDF · CryptoJS encryption',
    longDescription: 'Web app with React and TypeScript combining facial recognition (Face-API.js), digital signature on canvas, signed PDF generation, CryptoJS encryption and form validation with Formik/Yup.',
    technologies: ['React', 'TypeScript', 'Face-API.js', 'Material-UI', 'jsPDF', 'CryptoJS', 'Formik', 'Yup'],
    category: 'web',
    image: '/projects/iwie-nda.svg',
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
    image: '/projects/seguridad.svg',
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
