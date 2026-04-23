# 🚀 Guía Rápida - Portafolio de Javier Loncón

## ⚡ Inicio Rápido

### **Opción 1: Instalación Automática (Más Fácil)**

```bash
# Ejecuta el script de instalación
.\install.bat

# Luego inicia el servidor
.\start.bat
```

### **Opción 2: Instalación Manual**

```bash
npm install --legacy-peer-deps
npm run dev
```

## 📍 Ubicación del Proyecto

```
C:\Users\javier\CascadeProjects\portafolio-javier
```

## 📁 Archivos Importantes

### **Documentación**
- `RESUMEN.md` - Resumen completo del proyecto y proyectos catalogados
- `INSTRUCCIONES.md` - Guía detallada de instalación y uso
- `MEJORAS_UI_UX.md` - Mejoras aplicadas con UI UX Pro Max
- `SOLUCION_INSTALACION.md` - Soluciones para problemas de instalación
- `README.md` - Documentación técnica

### **Scripts de Ayuda**
- `install.bat` - Script automático de instalación
- `start.bat` - Script para iniciar el servidor

### **Código Fuente**
- `src/components/` - Componentes React (7 archivos)
- `src/data/projects.ts` - Tus 6 proyectos catalogados
- `src/index.css` - Estilos globales mejorados
- `tailwind.config.js` - Sistema de diseño profesional

## 🎨 Características del Portafolio

### **Proyectos Incluidos (6)**
1. Amigo Mascota - Sistema veterinario (Django, PostgreSQL, AWS, Azure)
2. Sistema Veterinario IA v2.0 - Plataforma con IA (FastAPI, ML)
3. Microservicios IWIE Space - Arquitectura distribuida (Docker, Kubernetes)
4. Machine Learning - Proyectos de IA (TensorFlow, Jupyter)
5. Big Data con Hadoop - Procesamiento masivo (Hadoop, HDFS)
6. Proyecto de Título - Tesis oficial

### **Tecnologías**
- React 18 + TypeScript
- Vite (build tool ultra rápido)
- TailwindCSS (estilos)
- Framer Motion (animaciones)
- Lucide React (iconos)

### **Mejoras UI/UX Aplicadas**
- ✅ Sistema de diseño profesional con colores tech
- ✅ Accesibilidad WCAG AA compliant
- ✅ Animaciones optimizadas (200-300ms)
- ✅ Focus states para navegación por teclado
- ✅ Responsive design (móvil, tablet, desktop)
- ✅ Efectos glassmorphism y sombras suaves

## 🔧 Comandos Útiles

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Limpiar e instalar
npm cache clean --force
npm install --legacy-peer-deps
```

## 🌐 URLs

- **Desarrollo**: http://localhost:3000
- **Producción**: (después de desplegar)

## 📊 Estructura de Secciones

1. **Hero** - Presentación principal con gradientes
2. **Sobre Mí** - Habilidades por categorías (Frontend, Backend, IA, Big Data, Cloud)
3. **Proyectos** - Galería con filtros (Todos, Web, IA, Big Data, Sistemas)
4. **Contacto** - Información de contacto y redes sociales
5. **Footer** - Pie de página

## ⚠️ Problemas Comunes

### npm install falla
**Solución**: Usa `.\install.bat` o `npm install --legacy-peer-deps`

### Puerto 3000 ocupado
**Solución**: Cambia el puerto en `vite.config.ts` o cierra la app que lo usa

### Errores de TypeScript en el IDE
**Solución**: Normal antes de instalar. Ejecuta `npm install`

## 🎯 Próximos Pasos

1. ✅ Ejecutar `.\install.bat` para instalar dependencias
2. ✅ Ejecutar `.\start.bat` para iniciar el servidor
3. ✅ Abrir http://localhost:3000 en tu navegador
4. ✅ Personalizar información de contacto en `src/components/Contact.tsx`
5. ✅ Actualizar enlaces de GitHub/LinkedIn en `src/components/Hero.tsx`
6. ✅ Agregar imágenes de proyectos en `public/projects/`
7. ✅ Desplegar en Vercel o Netlify

## 💡 Tips

- Los errores de lint desaparecen después de `npm install`
- Usa `Ctrl+C` para detener el servidor
- El portafolio se recarga automáticamente al editar archivos
- Revisa `MEJORAS_UI_UX.md` para nuevas clases CSS disponibles

## 📞 Ayuda Adicional

Si necesitas ayuda:
1. Revisa `SOLUCION_INSTALACION.md` para problemas de instalación
2. Consulta `INSTRUCCIONES.md` para guía completa
3. Lee `RESUMEN.md` para entender el proyecto completo

---

**¡Tu portafolio está listo para impresionar!** 🎉
