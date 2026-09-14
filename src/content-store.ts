/**
 * Editable content.
 *
 * Every word on this site comes from data.ts. This layer lets the page be
 * rewritten in the browser and remembers it, WITHOUT taking a copy of the
 * data: what localStorage holds is a sparse patch keyed by field path —
 * `profile.objective`, `experience.hexcore-labs-pte-ltd.role` — and nothing
 * else. A field nobody edited is not in there at all.
 *
 * That is what keeps edits and code changes out of each other's way. Editing
 * data.ts moves every field the reader never touched; the ones they did keep
 * their own text. Paths run through each record's `id` rather than its index,
 * so reordering or inserting records does not slide an edit onto its
 * neighbour — which is why those ids must never be reused or renumbered.
 */
import { createContext, useContext } from 'react'
import {
  awards,
  education,
  experience,
  extracurricular,
  profile,
  projects,
  publications,
  skills,
} from './data'

export const STORAGE_KEY = 'aditfirdaus-ada:content:v1'

export type Patch = Record<string, string>

export const BASE = { profile, experience, education, awards, extracurricular, skills, projects, publications }

/** Walks the data and swaps in any edited string, keyed by its path. */
export function applyPatch<T>(value: T, path: string, patch: Patch): T {
  if (typeof value === 'string') return (patch[path] ?? value) as T
  if (Array.isArray(value)) {
    return value.map((item, index) => {
      /* Keyed by id where a record has one, so the path survives reordering. */
      const key = item && typeof item === 'object' && 'id' in item ? (item as { id: string }).id : index
      return applyPatch(item, `${path}.${key}`, patch)
    }) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, inner] of Object.entries(value)) {
      out[key] = applyPatch(inner, path ? `${path}.${key}` : key, patch)
    }
    return out as T
  }
  return value
}

/** The value a path carries in data.ts, before any edit. */
export function baseAt(path: string): string | undefined {
  let node: unknown = BASE
  for (const step of path.split('.')) {
    if (Array.isArray(node)) {
      node = node.find((item) => item && typeof item === 'object' && 'id' in item && item.id === step)
        ?? node[Number(step)]
    } else if (node && typeof node === 'object') {
      node = (node as Record<string, unknown>)[step]
    } else {
      return undefined
    }
  }
  return typeof node === 'string' ? node : undefined
}

export const read = (): Patch => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Patch) : {}
  } catch {
    /* A private window with storage denied, or somebody's half-typed JSON. */
    return {}
  }
}

export interface ContentValue {
  data: typeof BASE
  patch: Patch
  editing: boolean
  setEditing: (on: boolean) => void
  set: (path: string, value: string) => void
  reset: (path: string) => void
  resetAll: () => void
}

export const ContentContext = createContext<ContentValue | null>(null)

export function useContent(): ContentValue {
  const value = useContext(ContentContext)
  if (!value) throw new Error('useContent must be used inside <ContentProvider>')
  return value
}

/** The patched data. Documents read through this so print matches the page. */
export const useData = () => useContent().data

