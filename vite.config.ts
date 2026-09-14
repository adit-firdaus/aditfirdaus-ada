import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * May UI never comes from a registry here. Builds resolve it from
 * vendor/may-ui, a path dependency holding a local build — committed, so CI
 * resolves it too, and no release or publish stands between a library change
 * and this site. `npm run sync:may-ui` refreshes it.
 *
 * `npm run dev` goes one step further and reads the checkout's `src`, so while
 * iterating on the library there is no vendor step at all: save a component
 * there and this page hot-reloads. Set MAY_UI_LOCAL=1 to build that way too,
 * and MAY_UI_SRC to point at a checkout somewhere other than ../../mayui.
 */
const mayUi = process.env.MAY_UI_SRC ?? resolve(import.meta.dirname, '../../mayui')

export default defineConfig(({ command }) => {
  const local =
    existsSync(resolve(mayUi, 'src/index.ts')) &&
    (command === 'serve' || process.env.MAY_UI_LOCAL === '1')

  console.log(local ? `May UI: checkout source — ${mayUi}` : 'May UI: vendor/may-ui')

  return {
    plugins: [react()],
    base: '/aditfirdaus-ada/',
    ...(local && {
      resolve: {
        alias: [
          { find: /^@adit_firdaus\/may-ui$/, replacement: resolve(mayUi, 'src/index.ts') },
          {
            find: /^@adit_firdaus\/may-ui\/(desktop|mobile|examples)$/,
            replacement: resolve(mayUi, 'src/$1.ts'),
          },
        ],
      },
      /* Pre-bundling would freeze a copy of the package and defeat the alias. */
      optimizeDeps: { exclude: ['@adit_firdaus/may-ui'] },
      /* Vite only serves files under the project root unless told otherwise. */
      server: { fs: { allow: [resolve(import.meta.dirname, '..'), mayUi] } },
    }),
  }
})
