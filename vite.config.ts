import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * May UI is both a dependency and something I am still writing, so `npm run
 * dev` builds straight from a local checkout when one sits next to this repo:
 * edit a component there and the page updates, with no build, publish or
 * version bump in between.
 *
 * Production builds keep using the npm package, so what I preview locally is
 * what CI deploys. Set MAY_UI_LOCAL=1 to build from the checkout as well, and
 * MAY_UI_SRC to point at a checkout somewhere other than ../../mayui.
 */
const mayUi = process.env.MAY_UI_SRC ?? resolve(import.meta.dirname, '../../mayui')

export default defineConfig(({ command }) => {
  const local =
    existsSync(resolve(mayUi, 'src/index.ts')) &&
    (command === 'serve' || process.env.MAY_UI_LOCAL === '1')

  console.log(local ? `May UI: local source — ${mayUi}` : 'May UI: npm package')

  return {
    plugins: [react()],
    base: '/aditfirdaus-ada/',
    ...(local && {
      resolve: {
        alias: [
          /* The source attaches each component's CSS itself through React 19
             stylesheet precedence, so the published aggregate stylesheet is
             deliberately swapped for an empty file. */
          {
            find: '@adit_firdaus/may-ui/styles.css',
            replacement: resolve(import.meta.dirname, 'src/may-ui-local.css'),
          },
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
