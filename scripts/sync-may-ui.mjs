/**
 * Vendors a local May UI build into vendor/may-ui.
 *
 * The app depends on that folder by path, so the library reaches production
 * without ever passing through GitHub or npm. It is also what makes CI work:
 * a symlink to ~/Documents/Projects/mayui resolves on this Mac and nowhere
 * else, whereas a committed folder resolves everywhere.
 *
 * Day to day you do not need this — `npm run dev` reads the checkout's `src`
 * directly, so library edits hot-reload. Run this when a library change should
 * reach the built site:
 *
 *   npm run sync:may-ui       # rebuild the library, re-vendor, reinstall
 *   MAY_UI_SRC=/elsewhere npm run sync:may-ui
 */
import { execFileSync } from 'node:child_process'
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const app = resolve(import.meta.dirname, '..')
const source = process.env.MAY_UI_SRC ?? resolve(app, '../../mayui')
const vendor = resolve(app, 'vendor/may-ui')

if (!existsSync(resolve(source, 'package.json'))) {
  console.error(`No May UI checkout at ${source}. Set MAY_UI_SRC to point at one.`)
  process.exit(1)
}

/* --include=dev because a shell with NODE_ENV=production makes npm drop the
   dev tree, which takes the build and the linter with it. */
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: 'inherit' })

console.log(`Building May UI in ${source}`)
run('npm', ['run', 'build'], source)

rmSync(vendor, { recursive: true, force: true })
mkdirSync(vendor, { recursive: true })

/* Mirror the published tarball: dist without its sourcemaps, which are a third
   of the bytes and mean nothing once the library is not being debugged here. */
cpSync(resolve(source, 'dist'), resolve(vendor, 'dist'), {
  recursive: true,
  filter: (path) => !path.endsWith('.map'),
})
for (const file of ['LICENSE', 'README.md']) {
  const from = resolve(source, file)
  if (existsSync(from)) cpSync(from, resolve(vendor, file))
}

/* npm runs `prepare` for a dependency installed from a directory, and May UI's
   prepare is `npm run build` — which would try to build from a source tree the
   vendor folder deliberately does not contain. Shipping the manifest without
   its scripts is what keeps `npm install` from reaching for them. */
const manifest = JSON.parse(readFileSync(resolve(source, 'package.json'), 'utf8'))
delete manifest.scripts
delete manifest.devDependencies
manifest.vendoredFrom = source
manifest.vendoredCommit = execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: source })
  .toString()
  .trim()
writeFileSync(resolve(vendor, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)

console.log(`Vendored ${manifest.name}@${manifest.version} (${manifest.vendoredCommit}) into vendor/may-ui`)
run('npm', ['install', '--include=dev'], app)
