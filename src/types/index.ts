export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web' | 'ai' | 'data' | 'mobile' | 'system'
  image: string
  demoUrl?: string
  githubUrl?: string
  localPath?: string
  features: string[]
  status: 'completed' | 'in-progress' | 'archived'
  year: number
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'ai' | 'data' | 'devops'
}
