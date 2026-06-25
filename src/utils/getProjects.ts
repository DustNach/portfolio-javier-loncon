import { projectsBase } from '../data/projectsBase'
import { projectTranslations } from '../data/projectsTranslations'
import type { Project } from '../types'

type Lang = 'es' | 'en'

/**
 * Devuelve los proyectos completos en el idioma dado.
 * Reemplaza el patron: language === 'en' ? projectsEn : projects
 *
 * Uso en componentes:
 *   import { getProjects } from '../utils/getProjects'
 *   const projects = getProjects(language as Lang)
 */
export function getProjects(lang: Lang = 'es'): Project[] {
  return projectsBase.map((base) => {
    const translation = projectTranslations[base.id]
    if (!translation) {
      console.warn(`[getProjects] Sin traduccion para proyecto: "${base.id}"`)
      const fallback = projectTranslations[base.id]?.es
      return { ...base, ...(fallback ?? { title: base.id, description: '', longDescription: '', features: [] }) }
    }
    return { ...base, ...translation[lang] }
  })
}
