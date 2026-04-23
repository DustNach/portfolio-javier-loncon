@echo off
echo ========================================
echo Instalando Portafolio de Javier Loncon
echo ========================================
echo.

echo Limpiando instalaciones previas...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo.
echo Limpiando cache de npm...
call npm cache clean --force

echo.
echo Instalando dependencias con npm...
call npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install fallo. Intentando con metodo alternativo...
    echo.
    echo Instalando dependencias una por una...
    
    call npm install react@^18.2.0 --legacy-peer-deps
    call npm install react-dom@^18.2.0 --legacy-peer-deps
    call npm install react-router-dom@^6.22.0 --legacy-peer-deps
    call npm install lucide-react@^0.344.0 --legacy-peer-deps
    call npm install framer-motion@^11.0.5 --legacy-peer-deps
    
    call npm install -D @types/react@^18.2.55 --legacy-peer-deps
    call npm install -D @types/react-dom@^18.2.19 --legacy-peer-deps
    call npm install -D @vitejs/plugin-react@^4.2.1 --legacy-peer-deps
    call npm install -D typescript@^5.2.2 --legacy-peer-deps
    call npm install -D vite@^5.1.0 --legacy-peer-deps
    call npm install -D tailwindcss@^3.4.1 --legacy-peer-deps
    call npm install -D postcss@^8.4.35 --legacy-peer-deps
    call npm install -D autoprefixer@^10.4.17 --legacy-peer-deps
)

echo.
echo ========================================
echo Instalacion completada!
echo ========================================
echo.
echo Para iniciar el servidor de desarrollo, ejecuta:
echo npm run dev
echo.
pause
