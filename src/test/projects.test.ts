import { describe, it, expect } from 'vitest'
import { projectsBase } from '../data/projectsBase'
import { projectTranslations } from '../data/projectsTranslations'
import { getProjects } from '../utils/getProjects'

describe('projectsBase integrity', () => {
  it('should have at least 1 project', () => {
    expect(projectsBase.length).toBeGreaterThan(0)
  })

  it('every project should have a unique id', () => {
    const ids = projectsBase.map((p) => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every project id should be a non-empty string', () => {
    projectsBase.forEach((p) => {
      expect(typeof p.id).toBe('string')
      expect(p.id.length).toBeGreaterThan(0)
    })
  })

  it('every project should have a valid status', () => {
    const validStatuses = ['completed', 'in-progress', 'planned']
    projectsBase.forEach((p) => {
      expect(validStatuses).toContain(p.status)
    })
  })

  it('every project should have a valid category', () => {
    const validCategories = ['web', 'mobile', 'ai', 'data', 'system']
    projectsBase.forEach((p) => {
      expect(validCategories).toContain(p.category)
    })
  })

  it('every project should have a non-empty technologies array', () => {
    projectsBase.forEach((p) => {
      expect(Array.isArray(p.technologies)).toBe(true)
      expect(p.technologies.length).toBeGreaterThan(0)
    })
  })

  it('every project should have a valid year', () => {
    projectsBase.forEach((p) => {
      expect(typeof p.year).toBe('number')
      expect(p.year).toBeGreaterThanOrEqual(2020)
      expect(p.year).toBeLessThanOrEqual(new Date().getFullYear() + 1)
    })
  })
})

describe('projectTranslations integrity', () => {
  it('every projectsBase id should have a translation entry', () => {
    projectsBase.forEach((p) => {
      expect(projectTranslations).toHaveProperty(p.id)
    })
  })

  it('every translation should have es and en keys', () => {
    Object.entries(projectTranslations).forEach(([id, trans]) => {
      expect(trans).toHaveProperty('es')
      expect(trans).toHaveProperty('en')
    })
  })

  it('every translation entry should have required fields', () => {
    const requiredFields = ['title', 'description', 'longDescription', 'features']
    Object.entries(projectTranslations).forEach(([id, trans]) => {
      (['es', 'en'] as const).forEach((lang) => {
        requiredFields.forEach((field) => {
          expect(trans[lang]).toHaveProperty(field)
        })
      })
    })
  })

  it('every features array should be non-empty', () => {
    Object.entries(projectTranslations).forEach(([id, trans]) => {
      (['es', 'en'] as const).forEach((lang) => {
        expect(Array.isArray(trans[lang].features)).toBe(true)
        expect(trans[lang].features.length).toBeGreaterThan(0)
      })
    })
  })

  it('every title should be a non-empty string', () => {
    Object.entries(projectTranslations).forEach(([id, trans]) => {
      (['es', 'en'] as const).forEach((lang) => {
        expect(typeof trans[lang].title).toBe('string')
        expect(trans[lang].title.length).toBeGreaterThan(0)
      })
    })
  })
})

describe('getProjects()', () => {
  it('should return the same number of projects as projectsBase', () => {
    const projects = getProjects('es')
    expect(projects.length).toBe(projectsBase.length)
  })

  it('should merge base and translation fields for es', () => {
    const projects = getProjects('es')
    projects.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('title')
      expect(p).toHaveProperty('description')
      expect(p).toHaveProperty('technologies')
      expect(p).toHaveProperty('features')
    })
  })

  it('should merge base and translation fields for en', () => {
    const projects = getProjects('en')
    projects.forEach((p) => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('title')
      expect(p).toHaveProperty('description')
      expect(p).toHaveProperty('technologies')
      expect(p).toHaveProperty('features')
    })
  })

  it('should return different titles for es and en', () => {
    const esProjects = getProjects('es')
    const enProjects = getProjects('en')
    // At least one project should have a different title between languages
    const hasDifference = esProjects.some(
      (esp, i) => esp.title !== enProjects[i].title
    )
    expect(hasDifference).toBe(true)
  })

  it('should default to es when no lang is passed', () => {
    const defaultProjects = getProjects()
    const esProjects = getProjects('es')
    expect(defaultProjects.length).toBe(esProjects.length)
    defaultProjects.forEach((p, i) => {
      expect(p.title).toBe(esProjects[i].title)
    })
  })

  it('should preserve base fields unchanged', () => {
    const projects = getProjects('es')
    projects.forEach((p, i) => {
      const base = projectsBase[i]
      expect(p.id).toBe(base.id)
      expect(p.technologies).toEqual(base.technologies)
      expect(p.category).toBe(base.category)
      expect(p.status).toBe(base.status)
      expect(p.year).toBe(base.year)
    })
  })
})
