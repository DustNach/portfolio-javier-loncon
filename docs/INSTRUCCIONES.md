# Instrucciones de Instalación y Uso del Portafolio

## ✅ Lo que se ha creado

He creado un **portafolio web completo y profesional** con las siguientes características:

### 📁 Estructura del Proyecto
```
portafolio-javier/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navbar.tsx      # Barra de navegación
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── About.tsx       # Sobre mí y habilidades
│   │   ├── Projects.tsx    # Galería de proyectos
│   │   ├── ProjectCard.tsx # Tarjeta individual de proyecto
│   │   ├── Contact.tsx     # Información de contacto
│   │   └── Footer.tsx      # Pie de página
│   ├── data/
│   │   └── projects.ts     # Datos de tus 6 proyectos
│   ├── types/
│   │   └── index.ts        # Definiciones TypeScript
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales con Tailwind
├── public/                 # Archivos estáticos
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

### 🎨 Proyectos Incluidos

1. **Amigo Mascota** - Sistema de gestión veterinaria
   - Ruta: `A:\inacap ultimo semestre\amigo-mascota`
   - Tecnologías: Django, PostgreSQL, Redis, Celery, AWS, Azure

2. **Sistema Veterinario IA v2.0** - Plataforma con IA
   - Ruta: `A:\inacap ultimo semestre\vet_v.2`
   - Tecnologías: FastAPI, Python, IA/ML, Microservicios

3. **Microservicios IWIE Space** - Arquitectura distribuida
   - Ruta: `A:\inacap ultimo semestre\iwie`
   - Tecnologías: Node.js, Python, Docker, Kubernetes

4. **Proyectos de Machine Learning** - IA y análisis
   - Ruta: `A:\inacap ultimo semestre\machine_learning`
   - Tecnologías: TensorFlow, Scikit-learn, Jupyter

5. **Big Data con Hadoop** - Procesamiento masivo de datos
   - Ruta: `A:\inacap ultimo semestre\big_data`
   - Tecnologías: Apache Hadoop, HDFS, MapReduce

6. **Proyecto de Título** - Tesis oficial
   - Ruta: `A:\inacap ultimo semestre\Proyecto_titulo`
   - Documentación completa y presentación

## 🔧 Instalación

### Opción 1: Instalación Normal (Recomendada)

```bash
# 1. Navegar al directorio
cd C:\Users\javier\CascadeProjects\portafolio-javier

# 2. Instalar dependencias (puede tomar varios minutos)
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Opción 2: Si npm install falla

```bash
# Limpiar caché y reinstalar
npm cache clean --force
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install --legacy-peer-deps
```

### Opción 3: Usar Yarn (alternativa)

```bash
# Instalar Yarn si no lo tienes
npm install -g yarn

# Instalar dependencias con Yarn
yarn install

# Iniciar servidor
yarn dev
```

### Opción 4: Instalación Manual de Dependencias

Si las opciones anteriores fallan, instala las dependencias una por una:

```bash
# Dependencias principales
npm install react react-dom react-router-dom lucide-react framer-motion

# Dependencias de desarrollo
npm install -D @types/react @types/react-dom @vitejs/plugin-react typescript vite tailwindcss postcss autoprefixer
```

## 🚀 Uso

### Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

El portafolio estará disponible en: `http://localhost:3000`

### Construir para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

### Previsualizar Build de Producción

```bash
npm run preview
```

## 🎯 Características del Portafolio

### Secciones

1. **Hero** - Presentación principal con tu nombre y especialidades
2. **Sobre Mí** - Habilidades organizadas por categorías:
   - Frontend (React, TypeScript, TailwindCSS)
   - Backend (Django, FastAPI, Node.js)
   - IA & ML (TensorFlow, Scikit-learn)
   - Big Data (Hadoop, MapReduce)
   - Cloud & DevOps (Docker, Kubernetes, AWS, Azure)
   - Otros (Redis, Celery, Firebase)

3. **Proyectos** - Galería con filtros por categoría:
   - Todos
   - Web
   - IA
   - Big Data
   - Sistemas

4. **Contacto** - Información de contacto y redes sociales

### Funcionalidades

- ✅ **Diseño Responsive** - Se adapta a móviles, tablets y desktop
- ✅ **Animaciones Suaves** - Usando Framer Motion
- ✅ **Filtros de Proyectos** - Por categoría
- ✅ **Detalles Expandibles** - Cada proyecto muestra más información
- ✅ **Rutas Locales** - Botón para ver la ruta local de cada proyecto
- ✅ **Modo Oscuro** - Diseño moderno con tema oscuro
- ✅ **Navegación Suave** - Scroll suave entre secciones

## 📝 Personalización

### Modificar Proyectos

Edita el archivo `src/data/projects.ts` para agregar, modificar o eliminar proyectos:

```typescript
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  description: 'Descripción corta',
  longDescription: 'Descripción detallada',
  technologies: ['Tech1', 'Tech2'],
  category: 'web', // web | ai | data | mobile | system
  localPath: 'C:\\ruta\\al\\proyecto',
  features: ['Feature 1', 'Feature 2'],
  status: 'completed',
  year: 2024
}
```

### Modificar Información Personal

Edita los siguientes archivos:

- `src/components/Hero.tsx` - Nombre y descripción principal
- `src/components/About.tsx` - Habilidades y experiencia
- `src/components/Contact.tsx` - Información de contacto

### Cambiar Colores

Edita `tailwind.config.js` para modificar el esquema de colores.

## 🌐 Despliegue

El portafolio puede desplegarse en:

- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **Cualquier hosting estático**

### Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
```

## ❓ Solución de Problemas

### Error: Cannot find module 'react'

```bash
npm install
```

### Error: Port 3000 already in use

```bash
# Cambiar puerto en vite.config.ts
server: {
  port: 3001
}
```

### Errores de TypeScript

Los errores de TypeScript desaparecerán después de instalar las dependencias.

## 📞 Próximos Pasos

1. ✅ Instalar dependencias con `npm install`
2. ✅ Iniciar servidor con `npm run dev`
3. ✅ Personalizar información de contacto
4. ✅ Agregar imágenes de proyectos en `public/projects/`
5. ✅ Actualizar enlaces de GitHub y LinkedIn
6. ✅ Desplegar en Vercel o Netlify

## 🎨 Capturas de Pantalla

Una vez que el servidor esté corriendo, verás:

- Página principal con animaciones
- Sección de habilidades con iconos
- Galería de 6 proyectos con filtros
- Tarjetas de proyecto con información detallada
- Formulario de contacto

## 📦 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra rápido
- **TailwindCSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos modernos
- **React Router** - Navegación

---

**¡Tu portafolio está listo para usar!** 🎉

Solo necesitas ejecutar `npm install` y luego `npm run dev` para verlo en acción.
