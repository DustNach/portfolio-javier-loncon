// ── Campos compartidos (no traducibles) ─────────────────────
export interface ProjectBase {
  id: string
  technologies: string[]
  category: 'web' | 'mobile' | 'ai' | 'data' | 'system'
  image: string
  localPath?: string
  demoUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  status: 'completed' | 'in-progress' | 'planned'
  year: number
}

// ── Campos traducibles ────────────────────────────────────────
export interface ProjectTranslation {
  title: string
  description: string
  longDescription: string
  features: string[]
}

// ── Tipo completo (lo que usan los componentes) ───────────────
export type Project = ProjectBase & ProjectTranslation

// ── Skills ───────────────────────────────────────────────────
export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'ai' | 'data' | 'devops'
}
