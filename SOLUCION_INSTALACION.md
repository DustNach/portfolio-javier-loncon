# 🔧 Solución para Problemas de Instalación

## Problema Detectado

`npm install` está fallando en tu sistema. Esto puede deberse a:
- Problemas de permisos en Windows
- Caché de npm corrupto
- Conflictos de dependencias

## ✅ Soluciones Disponibles

### **Opción 1: Usar el Script de Instalación Automático (RECOMENDADO)**

He creado un script que intenta múltiples métodos de instalación:

```bash
# Ejecuta este archivo
.\install.bat
```

El script hará:
1. Limpiar instalaciones previas
2. Limpiar caché de npm
3. Intentar instalación normal
4. Si falla, instalar dependencias una por una

### **Opción 2: Instalación Manual Paso a Paso**

Abre PowerShell como **Administrador** y ejecuta:

```powershell
# 1. Navegar al proyecto
cd C:\Users\javier\CascadeProjects\portafolio-javier

# 2. Limpiar todo
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force

# 3. Instalar dependencias de producción
npm install react@^18.2.0 --legacy-peer-deps
npm install react-dom@^18.2.0 --legacy-peer-deps
npm install react-router-dom@^6.22.0 --legacy-peer-deps
npm install lucide-react@^0.344.0 --legacy-peer-deps
npm install framer-motion@^11.0.5 --legacy-peer-deps

# 4. Instalar dependencias de desarrollo
npm install -D @types/react@^18.2.55 --legacy-peer-deps
npm install -D @types/react-dom@^18.2.19 --legacy-peer-deps
npm install -D @vitejs/plugin-react@^4.2.1 --legacy-peer-deps
npm install -D typescript@^5.2.2 --legacy-peer-deps
npm install -D vite@^5.1.0 --legacy-peer-deps
npm install -D tailwindcss@^3.4.1 --legacy-peer-deps
npm install -D postcss@^8.4.35 --legacy-peer-deps
npm install -D autoprefixer@^10.4.17 --legacy-peer-deps
```

### **Opción 3: Usar pnpm (Alternativa a npm)**

```powershell
# Instalar pnpm globalmente
npm install -g pnpm

# Instalar dependencias con pnpm
pnpm install
```

### **Opción 4: Usar Yarn**

```powershell
# Instalar Yarn globalmente
npm install -g yarn

# Instalar dependencias con Yarn
yarn install
```

## 🚀 Iniciar el Portafolio

Una vez instaladas las dependencias, usa uno de estos métodos:

### Método 1: Script Automático
```bash
.\start.bat
```

### Método 2: Comando Manual
```bash
npm run dev
```

El portafolio estará disponible en: **http://localhost:3000**

## 🔍 Verificar Instalación

Para verificar que las dependencias se instalaron correctamente:

```bash
# Ver lista de paquetes instalados
npm list --depth=0

# Verificar que node_modules existe
dir node_modules
```

## ⚠️ Si Nada Funciona

Si ninguna de las opciones anteriores funciona, puedes:

### 1. Verificar Versiones
```bash
node --version  # Debe ser v18 o superior
npm --version   # Debe ser v8 o superior
```

### 2. Actualizar npm
```bash
npm install -g npm@latest
```

### 3. Reinstalar Node.js
- Descarga la última versión LTS de: https://nodejs.org/
- Desinstala Node.js actual
- Instala la nueva versión
- Reinicia tu computadora
- Intenta nuevamente

## 📝 Logs de Error

Si necesitas más información sobre el error, revisa los logs:

```bash
# Ver el último log de error
type "C:\Users\javier\AppData\Local\npm-cache\_logs\*-debug-0.log" | Select-Object -Last 50
```

## 💡 Solución Temporal: Desarrollo sin Instalación

Si necesitas ver el código inmediatamente sin instalar:

1. Abre los archivos en tu editor
2. Revisa el código fuente en `src/`
3. Consulta la documentación en `README.md`, `RESUMEN.md`, `MEJORAS_UI_UX.md`

## 🆘 Contacto

Si el problema persiste:
1. Copia el contenido del log de error
2. Busca el error específico en Google
3. Verifica que no haya antivirus bloqueando npm

---

**Nota**: Los errores de lint en el IDE son normales antes de instalar las dependencias. Desaparecerán después de una instalación exitosa.
