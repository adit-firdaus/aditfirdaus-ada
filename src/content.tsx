/**
 * The editing surface: the provider that holds the patch, and the one
 * component that makes a run of text typeable. The store it reads from —
 * paths, merging, persistence — lives in content-store.ts.
 */
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  applyPatch,
  baseAt,
  BASE,
  ContentContext,
  read,
  STORAGE_KEY,
  useContent,
  type ContentValue,
  type Patch,
} from './content-store'

export function ContentProvider({ children }: { children: ReactNode }) {
  const [patch, setPatch] = useState<Patch>(read)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    try {
      if (Object.keys(patch).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(patch))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* Storage can be full or blocked; the edit still applies for this visit. */
    }
  }, [patch])

  const set = useCallback((path: string, value: string) => {
    setPatch((current) => {
      if (current[path] === value) return current
      /* Typing the original text back drops the override rather than pinning
         it, so that field follows data.ts again from then on. */
      if (value === baseAt(path)) {
        const { [path]: _same, ...rest } = current
        return rest
      }
      return { ...current, [path]: value }
    })
  }, [])

  const reset = useCallback((path: string) => {
    setPatch(({ [path]: _gone, ...rest }) => rest)
  }, [])

  const resetAll = useCallback(() => setPatch({}), [])

  const data = useMemo(() => applyPatch(BASE, '', patch), [patch])

  const value = useMemo<ContentValue>(
    () => ({ data, patch, editing, setEditing, set, reset, resetAll }),
    [data, patch, editing, set, reset, resetAll],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

/**
 * One editable run of text.
 *
 * Outside edit mode it is a plain span and costs nothing. Inside it, the text
 * is directly typeable: `contentEditable` is deliberately `plaintext-only`, so
 * a paste from anywhere lands as words rather than as somebody else's markup.
 */
export function Ed({ p, children }: { p: string; children: ReactNode }) {
  const { editing, set, reset, patch } = useContent()
  if (!editing) return <>{children}</>

  return (
    <span
      role="textbox"
      tabIndex={0}
      aria-label={`Edit ${p}`}
      className="ed"
      data-edited={p in patch ? 'true' : undefined}
      contentEditable="plaintext-only"
      suppressContentEditableWarning
      /* Enter commits rather than opening a second line: every field here is a
         single run of text, and a stray <br> would reach the printed page. */
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          event.currentTarget.blur()
        }
        if (event.key === 'Escape') {
          event.preventDefault()
          reset(p)
          event.currentTarget.blur()
        }
      }}
      onBlur={(event) => set(p, event.currentTarget.textContent?.trim() ?? '')}
    >
      {children}
    </span>
  )
}
