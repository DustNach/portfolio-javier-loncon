# Portafolio de Javier Loncón

Portafolio web moderno y profesional para presentar proyectos de desarrollo de software, IA y Big Data.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con animaciones suaves usando Framer Motion
- **Responsive**: Totalmente adaptable a dispositivos móviles, tablets y desktop
- **Categorización**: Proyectos organizados por categorías (Web, IA, Big Data, Sistemas)
- **Demos en Vivo**: Enlaces a proyectos locales y demos en línea
- **Información Detallada**: Cada proyecto incluye descripción, tecnologías y características

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos y diseño
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **React Router** - Navegación

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

4. Previsualizar build de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio-javier/
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Datos de proyectos
│   │   └── projects.ts
│   ├── types/          # Definiciones TypeScript
│   │   └── index.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/             # Archivos estáticos
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

## 🌐 Despliegue

El proyecto está listo para ser desplegado en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting estático

## 📄 Licencia

MIT License - Libre para uso personal y comercial

## 👤 Autor

**Javier Loncón**
- Desarrollador Full Stack
- Especializado en IA, Big Data y Microservicios
