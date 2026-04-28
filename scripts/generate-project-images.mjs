import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const OUT = join(process.cwd(), 'public', 'projects')
mkdirSync(OUT, { recursive: true })

const projects = [
  {
    id: 'edulexis',
    name: 'EduLexis',
    sub: 'Plataforma Legal Educacional',
    badge: 'PRODUCCIÓN ACTIVA',
    badgeColor: '#22c55e',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    accent: ['#3b82f6', '#06b6d4'],
    icon: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
  {
    id: 'sgc-syc',
    name: 'SGC SYC Chile',
    sub: 'Sistema de Gestión de Capacitación',
    badge: 'FREELANCE · 560h',
    badgeColor: '#f59e0b',
    tags: ['Django 5.2', 'React 18', 'PostgreSQL', 'Redis', 'Docker'],
    accent: ['#8b5cf6', '#06b6d4'],
    icon: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 9h18M9 21V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    id: 'amigo-mascota',
    name: 'Amigo Mascota',
    sub: 'Sistema Veterinario',
    badge: 'COMPLETADO',
    badgeColor: '#06b6d4',
    tags: ['Django', 'Celery', 'Redis', 'AWS S3', 'Firebase'],
    accent: ['#10b981', '#06b6d4'],
    icon: `<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'vet-ia',
    name: 'Veterinary AI v2.0',
    sub: 'Microservicios con ML',
    badge: 'IA · ML',
    badgeColor: '#a855f7',
    tags: ['FastAPI', 'Python', 'Machine Learning', 'Docker', 'React'],
    accent: ['#a855f7', '#ec4899'],
    icon: `<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'nna-cnn',
    name: 'NNA — CNN Classifier',
    sub: 'Red Neuronal Convolucional',
    badge: '96% ACCURACY',
    badgeColor: '#ef4444',
    tags: ['TensorFlow', 'Keras', 'Python', 'OpenCV', 'CNN'],
    accent: ['#ef4444', '#f97316'],
    icon: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    id: 'ml-phones',
    name: 'SVM vs Regresión Lineal',
    sub: 'Predicción de Precios',
    badge: 'SVM 92% ACC',
    badgeColor: '#f97316',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'SVM', 'Jupyter'],
    accent: ['#f97316', '#eab308'],
    icon: `<path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
  {
    id: 'eva',
    name: 'EVA — Big Data Educacional',
    sub: '217,013 Registros Procesados',
    badge: 'BIG DATA',
    badgeColor: '#06b6d4',
    tags: ['Hadoop', 'R', 'Python', 'Power BI', 'MapReduce'],
    accent: ['#0ea5e9', '#6366f1'],
    icon: `<path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 12h8M8 8h8M8 16h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    id: 'hadoop-cluster',
    name: 'Hadoop Cluster',
    sub: 'Big Data Distribuido',
    badge: '100GB · 3 NODOS',
    badgeColor: '#eab308',
    tags: ['Hadoop', 'HDFS', 'MapReduce', 'YARN', 'Python'],
    accent: ['#eab308', '#f97316'],
    icon: `<rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    id: 'chile-abogados',
    name: 'ChileAbogados',
    sub: 'Plataforma Legal',
    badge: '2025',
    badgeColor: '#3b82f6',
    tags: ['Django', 'React', 'WebSockets', 'Celery', 'Redis'],
    accent: ['#1d4ed8', '#3b82f6'],
    icon: `<path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'syc-chile',
    name: 'SYC Chile',
    sub: 'Sitio Web Corporativo',
    badge: 'NEXT.JS',
    badgeColor: '#6366f1',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'SEO'],
    accent: ['#6366f1', '#8b5cf6'],
    icon: `<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'bioclean',
    name: 'BioClean Pro',
    sub: 'E-commerce',
    badge: 'WOOCOMMERCE',
    badgeColor: '#7c3aed',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Elementor', 'SEO'],
    accent: ['#7c3aed', '#a855f7'],
    icon: `<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'iwie-nda',
    name: 'IWIE NDA',
    sub: 'Firma Digital + Reconocimiento Facial',
    badge: 'FACE-API.JS',
    badgeColor: '#06b6d4',
    tags: ['React', 'TypeScript', 'Face-API.js', 'CryptoJS', 'jsPDF'],
    accent: ['#06b6d4', '#3b82f6'],
    icon: `<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    id: 'seguridad',
    name: 'IT Security',
    sub: 'Pentesting con Kali Linux',
    badge: 'OWASP',
    badgeColor: '#ef4444',
    tags: ['Kali Linux', 'Pentesting', 'OWASP', 'Cybersecurity'],
    accent: ['#ef4444', '#f97316'],
    icon: `<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
]

function makeSVG(p) {
  const tags = p.tags.slice(0, 4)
  const tagWidth = 80
  const tagSpacing = 8
  const totalTagsWidth = tags.length * (tagWidth + tagSpacing) - tagSpacing
  const tagsStartX = (800 - totalTagsWidth) / 2

  const tagPills = tags.map((tag, i) => {
    const x = tagsStartX + i * (tagWidth + tagSpacing)
    return `
      <rect x="${x}" y="310" width="${tagWidth}" height="26" rx="13" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="${x + tagWidth / 2}" y="327" text-anchor="middle" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.55)">${tag}</text>
    `
  }).join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${p.accent[0]}"/>
      <stop offset="100%" style="stop-color:${p.accent[1]}"/>
    </linearGradient>
    <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${p.accent[0]};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${p.accent[1]};stop-opacity:0.15"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="420" fill="url(#bg)"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="800" height="3" fill="url(#accent)"/>

  <!-- Glow blob -->
  <ellipse cx="400" cy="200" rx="220" ry="140" fill="${p.accent[0]}" opacity="0.05" filter="url(#glow)"/>

  <!-- Grid dots pattern -->
  ${Array.from({length: 8}, (_, row) =>
    Array.from({length: 20}, (_, col) =>
      `<circle cx="${col * 44 + 4}" cy="${row * 55 + 30}" r="1" fill="rgba(255,255,255,0.04)"/>`
    ).join('')
  ).join('')}

  <!-- Icon container -->
  <rect x="356" y="80" width="88" height="88" rx="20" fill="url(#iconBg)" stroke="${p.accent[0]}" stroke-width="1" stroke-opacity="0.4"/>
  <svg x="368" y="92" width="64" height="64" viewBox="0 0 24 24" color="${p.accent[1]}">
    ${p.icon}
  </svg>

  <!-- Badge -->
  <rect x="${400 - (p.badge.length * 6.5)}" y="182" width="${p.badge.length * 13 + 20}" height="22" rx="11" fill="${p.badgeColor}" opacity="0.2" stroke="${p.badgeColor}" stroke-width="1" stroke-opacity="0.5"/>
  <text x="400" y="197" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="${p.badgeColor}" letter-spacing="1">${p.badge}</text>

  <!-- Title -->
  <text x="400" y="245" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="28" font-weight="800" fill="white">${p.name}</text>

  <!-- Subtitle -->
  <text x="400" y="275" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="15" fill="rgba(255,255,255,0.45)">${p.sub}</text>

  <!-- Divider -->
  <line x1="320" y1="295" x2="480" y2="295" stroke="url(#accent)" stroke-width="1" stroke-opacity="0.4"/>

  <!-- Tech tags -->
  ${tagPills}

  <!-- Bottom bar -->
  <rect x="0" y="395" width="800" height="25" fill="rgba(0,0,0,0.3)"/>
  <text x="400" y="411" text-anchor="middle" font-family="monospace" font-size="11" fill="rgba(255,255,255,0.2)" letter-spacing="2">jloncon.dev</text>
</svg>`
}

let count = 0
for (const p of projects) {
  const svg = makeSVG(p)
  // Write as SVG
  writeFileSync(join(OUT, `${p.id}.svg`), svg, 'utf-8')
  count++
  console.log(`✅ ${p.id}.svg`)
}
console.log(`\n🎨 Generated ${count} project images`)
