# Portafolio de Javier Loncón

Portafolio web moderno y profesional para presentar proyectos de desarrollo de software, IA y Big Data.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con animaciones suaves usando Framer Motion
- **Responsive**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Tema Claro/Oscuro**: Toggle entre temas con persistencia en localStorage
- **Categorización**: Proyectos organizados por categorías (Web, IA, Big Data, Sistemas)
- **Demos en Vivo**: Enlaces a proyectos locales y demos en línea
- **Información Detallada**: Cada proyecto incluye descripción, tecnologías y características
- **SEO Optimizado**: Meta tags completos para Open Graph y Twitter Cards
- **CI/CD**: GitHub Actions configurado para deploy automático
- **Analytics Ready**: Preparado para Google Analytics

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos y diseño
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **React Router** - Navegación
- **Context API** - Gestión de estado (tema)

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/DustNach/portfolio-javier-loncon.git
cd portafolio-javier
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno (opcional):
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

6. Previsualizar build de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio-javier/
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
│       ├── ci.yml
│       └── deploy.yml
├── docs/               # Documentación adicional
├── public/
│   ├── projects/       # Imágenes de proyectos
│   ├── favicon.svg     # Favicon personalizado
│   └── og-image.jpg    # Imagen Open Graph
├── src/
│   ├── components/     # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Background.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Demos.tsx
│   ├── context/        # React Context
│   │   └── ThemeContext.tsx
│   ├── data/           # Datos de proyectos
│   │   └── projects.ts
│   ├── types/          # Definiciones TypeScript
│   │   └── index.ts
│   ├── utils/          # Utilidades
│   │   └── analytics.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── .env.example        # Variables de entorno ejemplo
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Proyectos Incluidos

1. **Amigo Mascota** - Sistema de gestión veterinaria (Django, PostgreSQL, Redis)
2. **Sistema Veterinario IA v2.0** - Plataforma con IA (FastAPI, ML)
3. **Microservicios IWIE Space** - Arquitectura de microservicios
4. **Proyectos de Machine Learning** - IA y análisis de datos
5. **Big Data con Hadoop** - Procesamiento de datos masivos
6. **Proyecto de Título** - Tesis oficial

## 🔧 Personalización

Para agregar o modificar proyectos, edita el archivo `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'tu-proyecto',
    title: 'Tu Proyecto',
    description: 'Descripción corta',
    longDescription: 'Descripción detallada',
    technologies: ['Tech1', 'Tech2'],
    category: 'web', // web | ai | data | mobile | system
    localPath: 'C:\\ruta\\al\\proyecto',
    features: ['Feature 1', 'Feature 2'],
    status: 'completed',
    year: 2024
  }
]
```

## 📱 Secciones

- **Hero**: Presentación principal con llamados a la acción
- **Sobre Mí**: Habilidades y experiencia destacada
- **Proyectos**: Galería de proyectos con filtros por categoría
- **Contacto**: Información de contacto y redes sociales

## � Tema Claro/Oscuro

El portafolio incluye un sistema de temas con toggle flotante:
- Tema oscuro (por defecto)
- Tema claro
- Persistencia en localStorage
- Transiciones suaves entre temas

## 📊 Google Analytics (Opcional)

Para habilitar Google Analytics:

1. Crear una cuenta en Google Analytics
2. Obtener el Measurement ID
3. Agregar al archivo `.env`:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 CI/CD

El proyecto incluye GitHub Actions configurado:
- **CI**: Verificación de tipos y build en cada push/PR
- **Deploy**: Deploy automático a Vercel en push a main

Para configurar el deploy automático:
1. Crear cuenta en Vercel
2. Agregar secrets en GitHub:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## �🌐 Despliegue

El proyecto está listo para ser desplegado en:
- **Vercel** (Recomendado)
- Netlify
- GitHub Pages
- Cualquier hosting estático

### Deploy en Vercel

```bash
npm install -g vercel
vercel
```

## 🔧 Configuración Avanzada

### Variables de Entorno

Copia `.env.example` a `.env` y configura:
- `VITE_GA_MEASUREMENT_ID`: Google Analytics ID
- Otras variables según necesidad

### Personalización de Proyectos

Edita `src/data/projects.ts` para agregar/modificar proyectos.

## 📄 Licencia

MIT License - Libre para uso personal y comercial

## 👤 Autor

**Javier Loncón**
- Desarrollador Full Stack
- Especializado en IA, Big Data y Microservicios
