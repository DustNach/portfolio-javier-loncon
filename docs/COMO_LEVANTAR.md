# 🚀 CÓMO LEVANTAR EL PORTAFOLIO

## ⚠️ Problema Detectado

npm tiene problemas de permisos en tu sistema Windows. Aquí están las soluciones ordenadas por efectividad:

---

## ✅ SOLUCIÓN 1: PowerShell como Administrador (MÁS EFECTIVA)

### Paso 1: Abrir PowerShell como Administrador

1. Presiona `Windows + X`
2. Selecciona "Windows PowerShell (Administrador)" o "Terminal (Administrador)"
3. Haz clic en "Sí" cuando pida permisos

### Paso 2: Navegar al proyecto

```powershell
cd C:\Users\javier\CascadeProjects\portafolio-javier
```

### Paso 3: Dar permisos completos

```powershell
icacls . /grant ${env:USERNAME}:F /T
```

### Paso 4: Instalar dependencias

```powershell
npm cache clean --force
npm install --legacy-peer-deps
```

### Paso 5: Iniciar el servidor

```powershell
npm run dev
```

**El portafolio estará en:** http://localhost:3000

---

## ✅ SOLUCIÓN 2: Desplegar en Vercel (MÁS RÁPIDA - 5 MINUTOS)

Esta es la forma más rápida de ver tu portafolio funcionando SIN resolver npm:

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `portafolio-javier`
3. Crea el repositorio

### Paso 2: Subir el código

Abre PowerShell normal (no necesita ser administrador):

```powershell
cd C:\Users\javier\CascadeProjects\portafolio-javier

git init
git add .
git commit -m "Portafolio profesional con 17 proyectos reales"

# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/portafolio-javier.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel

1. Ve a https://vercel.com/
2. Haz clic en "Sign Up" y usa tu cuenta de GitHub
3. Haz clic en "New Project"
4. Selecciona `portafolio-javier`
5. Vercel detectará automáticamente que es Vite
6. Haz clic en "Deploy"

**¡LISTO!** En 2-3 minutos tendrás tu portafolio en una URL pública como:
`https://portafolio-javier.vercel.app`

---

## ✅ SOLUCIÓN 3: Usar StackBlitz (ONLINE, SIN INSTALAR)

1. Ve a https://stackblitz.com/
2. Arrastra la carpeta `portafolio-javier` al navegador
3. StackBlitz instalará automáticamente todo
4. Podrás ver y editar el portafolio online

---

## ✅ SOLUCIÓN 4: Reinstalar Node.js

Si quieres arreglar npm permanentemente:

### Paso 1: Desinstalar Node.js

1. Panel de Control → Programas → Desinstalar Node.js
2. Eliminar carpetas residuales:
   - `C:\Program Files\nodejs`
   - `C:\Users\javier\AppData\Roaming\npm`
   - `C:\Users\javier\AppData\Roaming\npm-cache`

### Paso 2: Descargar e Instalar

1. Ve a https://nodejs.org/
2. Descarga la versión LTS
3. Instala como Administrador
4. Reinicia tu PC

### Paso 3: Verificar

```powershell
node --version
npm --version
```

### Paso 4: Instalar el portafolio

```powershell
cd C:\Users\javier\CascadeProjects\portafolio-javier
npm install
npm run dev
```

---

## 🎯 RECOMENDACIÓN

**Para ver tu portafolio YA (5 minutos):**
→ Usa **SOLUCIÓN 2: Vercel**

**Para desarrollo local:**
→ Usa **SOLUCIÓN 1: PowerShell como Administrador**

**Para evitar problemas:**
→ Usa **SOLUCIÓN 3: StackBlitz** (todo online)

---

## 📊 Tu Portafolio Incluye

✅ **17 proyectos profesionales reales**
✅ **5 proyectos de IA/ML** (NNA CNN, Predicción ML, etc.)
✅ **3 proyectos de Big Data** (Hadoop, Power BI, Minería de Datos)
✅ **3 proyectos Web** (Amigo Mascota, IWIE NDA, Vet IA)
✅ **2 proyectos Móviles** (IWIE Drones, Registro Facial)
✅ **4 proyectos de Gestión** (COBIT, PM, Evaluación, Tesis)

Todos con rutas locales a tus proyectos reales en A:\ y E:\

---

## 🆘 Si Nada Funciona

Ejecuta este comando para ver el error específico:

```powershell
npm install --verbose 2>&1 | Select-Object -Last 50
```

Y comparte el error para ayudarte mejor.

---

**¡Tu portafolio está listo! Solo necesitas elegir cómo levantarlo.** 🎉
