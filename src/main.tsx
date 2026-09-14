import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* No stylesheet import: May UI's components carry their own CSS through React 19
   stylesheet precedence, so the library has none to import. */
import './index.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
