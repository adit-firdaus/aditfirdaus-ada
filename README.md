# Adit Firdaus — portfolio & CV

A personal site built on [May UI](https://github.com/adit-firdaus/may-ui), my own
React design system. It is a website first; printing it produces the two PDFs the
**Apple Developer Academy Indonesia** application asks for.

**Live:** https://adit-firdaus.github.io/aditfirdaus-ada/

## The site

Five tabs, each deep-linkable by hash:

| Tab | `#hash` | What is there |
|---|---|---|
| Overview | `#overview` | Intro, stats, current roles, skills |
| Projects | `#projects` | The five portfolio projects in full |
| Experience | `#experience` | Work, education, awards, leadership |
| Publications | `#publications` | Packages, released games, talks, open source |
| Get in Touch | `#contact` | Contact links and the two print actions |

## The documents

The printable CV and portfolio are separate components in
[`src/Documents.tsx`](src/Documents.tsx). They never render on screen — the print
stylesheet hides the site and reveals whichever document `data-print` on `<body>`
names, so the paper output never depends on which tab is open.

| Document | Reach it | Pages |
|---|---|---|
| Curriculum Vitae | **CV** button, or `?print=cv` | 2 |
| Portfolio | **Portfolio** button, or `?print=portfolio` | cover + 5 |

Paper is switchable between A4 and US Letter; the choice sets both the on-screen
sheet size and the `@page` box, so preview and print agree.

In the browser print dialog choose **Margins: None** and switch **Background
graphics** on, then save as:

```
RadityaRakhaFirdausMuliyoto_CV_Academy.pdf
RadityaRakhaFirdausMuliyoto_Portfolio_Academy.pdf
```

## Editing

- [`src/data.ts`](src/data.ts) — every word: profile, experience, education, awards,
  skills, projects, publications. The site and both documents read from it.
- [`public/logo`](public/logo) — organisation and project marks as 256px squares,
  each taken from its owner's own site. `Mark` falls back to May UI's initials
  avatar when an entry has no `logo`.
- [`public/media`](public/media) — project screenshots.
- [`src/App.css`](src/App.css) — site layout, then the paper block. A `.sheet` is a
  page, sized from `--sheet-w`/`--sheet-h`; in print it takes a fixed height and
  `break-after: page` so one sheet can never spill onto two. The same block retunes
  May UI's `--may-*` space and text tokens to print scale.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/aditfirdaus-ada/
npm run build    # tsc -b && vite build
npm run lint     # oxlint
```

### May UI comes from this Mac, not a registry

May UI never passes through npm or a GitHub release. The dependency is a path:

```json
"@adit_firdaus/may-ui": "file:vendor/may-ui"
```

`vendor/may-ui` holds a build of the local checkout and is committed, which is
the part that matters — a symlink to `~/Documents/Projects/mayui` resolves on
this Mac and nowhere else, so CI could never build from it. `npm install`
symlinks `node_modules/@adit_firdaus/may-ui` at that folder.

Refresh it after a library change that should reach the built site:

```bash
npm run sync:may-ui          # rebuild the checkout, re-vendor, reinstall
MAY_UI_SRC=/elsewhere npm run sync:may-ui
```

Day to day you do not need it. `npm run dev` aliases the package straight to
the checkout's `src`, so editing a component there hot-reloads this page with
no vendor step at all. The startup line says which source is in use:

```
May UI: checkout source — /Users/af/Documents/Projects/mayui
May UI: vendor/may-ui
```

`MAY_UI_LOCAL=1` makes a production build read the checkout too.

The library carries every component's CSS itself through React 19 stylesheet
precedence, so there is no stylesheet to import and `MayProvider` takes a theme
object — `theme={{ mode: 'system' }}`, not `theme="system"`.