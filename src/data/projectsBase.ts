import type { ProjectBase } from '../types'

export const projectsBase: ProjectBase[] = [
  { id: 'edulexis', technologies: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API', 'Nginx', 'Redis'], category: 'web', image: '/projects/edulexis.svg', demoUrl: 'https://edulexis.cl', status: 'completed', year: 2025 },
  { id: 'sgc-syc-chile', technologies: ['Django 5.2', 'React 18', 'TypeScript 5.8', 'PostgreSQL 15', 'Redis 7', 'Celery', 'Docker', 'Traefik', 'Dokploy', 'Zod'], category: 'web', image: '/projects/sgc-syc.svg', demoUrl: 'https://sgc.sycchile.com', caseStudyUrl: '/projects/sgc-case-study', githubUrl: 'https://github.com/DustNach/sgc-public-clean', status: 'completed', year: 2025 },
  { id: 'amigo-mascota-veterinaria', technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Twilio', 'Firebase', 'AWS S3', 'Azure', 'Docker'], category: 'web', image: '/projects/amigo-mascota.svg', status: 'completed', year: 2024 },
  { id: 'vet-ia-v2', technologies: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Machine Learning', 'Docker', 'Microservicios', 'React'], category: 'ai', image: '/projects/vet-ia.svg', status: 'completed', year: 2024 },
  { id: 'nna-cnn-clasificador', technologies: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'NumPy', 'CNN', 'Deep Learning', 'Jupyter Notebook'], category: 'ai', image: '/projects/nna-cnn.svg', status: 'completed', year: 2024 },
  { id: 'prediccion-telefonos-ml', technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SVM', 'Jupyter'], category: 'ai', image: '/projects/ml-phones.svg', status: 'completed', year: 2024 },
  { id: 'eva-big-data', technologies: ['Hadoop', 'R', 'Python', 'Power BI', 'HDFS', 'MapReduce', 'Pandas', 'Data Analysis'], category: 'data', image: '/projects/eva.svg', status: 'completed', year: 2024 },
  { id: 'big-data-hadoop-cluster', technologies: ['Apache Hadoop', 'HDFS', 'MapReduce', 'YARN', 'Ubuntu', 'Python', 'Big Data'], category: 'data', image: '/projects/hadoop-cluster.svg', status: 'completed', year: 2024 },
  { id: 'chile-abogados', technologies: ['Django', 'DRF', 'React', 'TypeScript', 'Tailwind', 'WebSockets', 'Celery', 'Redis', 'PostgreSQL', 'Docker'], category: 'web', image: '/projects/chile-abogados.svg', status: 'completed', year: 2025 },
  { id: 'syc-chile-web', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Docker', 'SEO'], category: 'web', image: '/projects/syc-chile.svg', demoUrl: 'https://sycchile.com', status: 'completed', year: 2024 },
  { id: 'bioclean-pro', technologies: ['WordPress', 'WooCommerce', 'PHP', 'Elementor', 'SEO', 'WooCommerce Payments'], category: 'web', image: '/projects/bioclean.svg', status: 'completed', year: 2024 },
  { id: 'iwie-nda-facial-recognition', technologies: ['React', 'TypeScript', 'Face-API.js', 'Material-UI', 'jsPDF', 'CryptoJS', 'Formik', 'Yup'], category: 'web', image: '/projects/iwie-nda.svg', status: 'completed', year: 2024 },
  { id: 'seguridad-informatica-kali', technologies: ['Kali Linux', 'Pentesting', 'OWASP', 'Vulnerability Analysis', 'Security Audit', 'Cybersecurity'], category: 'system', image: '/projects/seguridad.svg', status: 'completed', year: 2023 },
]
