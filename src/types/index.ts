export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web' | 'mobile' | 'ai' | 'data' | 'system'
  image: string
  localPath?: string
  demoUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
  features: string[]
  status: 'completed' | 'in-progress' | 'planned'
  year: number
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'ai' | 'data' | 'devops'
}
