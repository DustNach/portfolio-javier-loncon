# Guía de Despliegue - Portafolio Javier Loncón

## 🚀 Deploy en Vercel (Recomendado)

### Opción 1: Deploy desde la interfaz web

1. Ir a [vercel.com](https://vercel.com)
2. Conectar con GitHub
3. Importar el repositorio `portfolio-javier-loncon`
4. Configurar variables de entorno (opcional):
   - `VITE_GA_MEASUREMENT_ID`
5. Click en "Deploy"

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 🔧 Configuración de Variables de Entorno

En Vercel Dashboard:
1. Settings → Environment Variables
2. Agregar:
   - `VITE_GA_MEASUREMENT_ID` = tu Google Analytics ID

## 🤖 GitHub Actions (CI/CD Automático)

El proyecto incluye workflows configurados en `.github/workflows/`:

### CI (Continuous Integration)
- Se ejecuta en cada push/PR
- Verifica tipos TypeScript
- Ejecuta build

### Deploy Automático
Para habilitar deploy automático:

1. Obtener tokens de Vercel:
   - Ir a Vercel → Settings → Tokens
   - Crear nuevo token

2. Agregar secrets en GitHub:
   - Ir a repo → Settings → Secrets and variables → Actions
   - Agregar:
     - `VERCEL_TOKEN`: Token de Vercel
     - `VERCEL_ORG_ID`: ID de organización
     - `VERCEL_PROJECT_ID`: ID del proyecto

3. Los deploys se ejecutarán automáticamente en cada push a `main`

## 📊 Otras Plataformas

### Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

### GitHub Pages

1. Actualizar `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio-javier-loncon/',
  // ...
})
```

2. Build:
```bash
npm run build
```

3. Deploy con gh-pages:
```bash
npm install -g gh-pages
gh-pages -d dist
```

## ✅ Checklist Pre-Deploy

- [ ] Actualizar información personal en componentes
- [ ] Verificar que todos los proyectos tienen datos correctos
- [ ] Agregar imágenes reales de proyectos (reemplazar placeholders)
- [ ] Configurar Google Analytics (opcional)
- [ ] Probar build local: `npm run build && npm run preview`
- [ ] Verificar responsive en diferentes dispositivos
- [ ] Revisar meta tags SEO en `index.html`
- [ ] Actualizar URLs en meta tags Open Graph

## 🔍 Troubleshooting

### Error: Build falla
- Verificar que todas las dependencias estén instaladas
- Ejecutar `npm run build` localmente para ver errores
- Revisar que no haya imports faltantes

### Error: Variables de entorno no funcionan
- Asegurarse que empiecen con `VITE_`
- Reiniciar el servidor de desarrollo después de agregar variables
- En producción, configurarlas en el dashboard de la plataforma

### Error: Rutas no funcionan después del deploy
- Verificar configuración de SPA en la plataforma
- Para Vercel, crear `vercel.json` con rewrites si es necesario
