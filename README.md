# Portafolio — Javier Loncón

Portafolio profesional de Javier Loncón, Ingeniero en Informática especializado en IA, Machine Learning, Big Data y Desarrollo Full Stack.

**[jloncon.dev](https://www.jloncon.dev)**

---

## Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Estilos:** TailwindCSS + Framer Motion
- **i18n:** Context API (ES / EN) con datos tipados por idioma
- **Tests:** Vitest + jsdom + Testing Library
- **CI/CD:** GitHub Actions → Vercel

---

## Correr localmente

```bash
git clone https://github.com/DustNach/portfolio-javier-loncon.git
cd portfolio-javier-loncon
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run typecheck` | Verificación de tipos TypeScript |
| `npm test` | Correr tests (Vitest) |
| `npm run test:watch` | Tests en modo watch |
| `npm run test:coverage` | Cobertura de tests |

---

## Estructura

```
src/
├── components/       # Componentes React (Hero, Projects, Skills, etc.)
├── context/          # LanguageContext (ES/EN)
├── data/
│   ├── projectsBase.ts          # Datos no traducibles (tech, urls, año)
│   └── projectsTranslations.ts  # Traducciones ES+EN por proyecto
├── utils/
│   └── getProjects.ts           # Merge base + traducción en runtime
├── types/            # Tipos TypeScript compartidos
└── test/             # Tests con Vitest
```

---

## Tests

```bash
npm test
```

18 tests cubriendo:
- Integridad de `projectsBase` (ids únicos, campos requeridos, valores válidos)
- Completitud de traducciones ES/EN
- Comportamiento de `getProjects(lang)`

---

## CI/CD

Cada push a `main` ejecuta en GitHub Actions:

1. `npm run typecheck` — verificación de tipos
2. `npm test` — suite de tests
3. `npm run build` — build de producción

Si todo pasa, Vercel despliega automáticamente a [jloncon.dev](https://www.jloncon.dev).

---

## Contacto

**Javier Loncón** · Ingeniero en Informática  
[jloncon.dev](https://www.jloncon.dev) · [LinkedIn](https://linkedin.com/in/javier-loncon) · jaloncon95@gmail.com
