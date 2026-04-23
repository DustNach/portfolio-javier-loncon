# 🚀 Pasos para Desplegar en Vercel

## ✅ Completado:
- ✅ Git inicializado
- ✅ Commit creado con 34 archivos (17 proyectos reales)

---

## 📝 PASO 1: Crear Repositorio en GitHub

### Opción A: Desde la Web (Más Fácil)

1. Ve a: **https://github.com/new**
2. Completa:
   - **Repository name:** `portafolio-javier`
   - **Description:** `Portafolio profesional con 17 proyectos de IA, Big Data, Web, Mobile y Sistemas`
   - **Visibilidad:** Public (para que Vercel pueda acceder gratis)
   - **NO marques** "Add a README file" (ya lo tenemos)
3. Haz clic en **"Create repository"**

### Opción B: Desde GitHub CLI (Si lo tienes instalado)

```bash
gh repo create portafolio-javier --public --description "Portafolio profesional con 17 proyectos reales"
```

---

## 📝 PASO 2: Conectar y Subir a GitHub

Una vez creado el repositorio, copia estos comandos en PowerShell:

```powershell
cd C:\Users\javier\CascadeProjects\portafolio-javier

# Conectar con tu repositorio (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/portafolio-javier.git

# Cambiar a rama main
git branch -M main

# Subir el código
git push -u origin main
```

**Ejemplo:** Si tu usuario es `DustNach`:
```powershell
git remote add origin https://github.com/DustNach/portafolio-javier.git
git branch -M main
git push -u origin main
```

---

## 📝 PASO 3: Desplegar en Vercel

1. Ve a: **https://vercel.com/**
2. Haz clic en **"Sign Up"** o **"Login"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel
5. Haz clic en **"New Project"** o **"Add New..."** → **"Project"**
6. Busca **`portafolio-javier`** en la lista
7. Haz clic en **"Import"**
8. Vercel detectará automáticamente que es un proyecto Vite
9. **NO cambies nada** en la configuración
10. Haz clic en **"Deploy"**

---

## ⏱️ Tiempo Estimado

- Crear repo en GitHub: **1 minuto**
- Subir código: **30 segundos**
- Desplegar en Vercel: **2-3 minutos**

**Total: ~5 minutos**

---

## 🎉 Resultado

Tu portafolio estará disponible en una URL como:

```
https://portafolio-javier.vercel.app
```

O

```
https://portafolio-javier-tu-usuario.vercel.app
```

---

## 🔧 Configuración de Vercel (Automática)

Vercel detectará automáticamente:
- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

**No necesitas cambiar nada.**

---

## 📊 Lo que se Desplegará

✅ **17 proyectos profesionales:**
- 5 de IA/ML (NNA CNN, Predicción ML, etc.)
- 3 de Big Data/BI (Hadoop, Power BI, Minería)
- 3 Web (Amigo Mascota, IWIE NDA, Vet IA)
- 2 Móviles (IWIE Drones, Registro Facial)
- 4 Gestión/Sistemas (COBIT, PM, Evaluación, Tesis)

✅ **Documentación completa:**
- README.md
- PROYECTOS_CATALOGADOS.md
- COMPARACION_PORTAFOLIOS.md
- Y 8 archivos más de documentación

---

## 🆘 Si Tienes Problemas

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/portafolio-javier.git
```

### Error al hacer push (autenticación)
GitHub te pedirá autenticarte. Opciones:
1. Usar GitHub Desktop
2. Usar Personal Access Token
3. Usar SSH keys

---

## 🎯 Próximos Pasos Después del Despliegue

1. ✅ Compartir la URL en LinkedIn
2. ✅ Agregar la URL a tu CV
3. ✅ Actualizar información de contacto en el portafolio
4. ✅ (Opcional) Mejorar con elementos del portafolio antiguo

---

**¡Estás a 5 minutos de tener tu portafolio en línea!** 🚀
