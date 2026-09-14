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

### Working on May UI at the same time

May UI is both a dependency here and something I am still writing. `npm run dev`
looks for a checkout at `../../mayui` and, when it finds one, builds straight
from its `src` — edit a component there and this page updates, with no build,
publish or version bump in between. The startup line says which source is in
use:

```
May UI: local source — /Users/af/Documents/Projects/mayui
May UI: npm package
```

Production builds deliberately keep using the npm package, so what I preview
locally is what CI deploys. Two environment variables change that:

| Variable | Effect |
|---|---|
| `MAY_UI_SRC=/path/to/mayui` | Use a checkout somewhere other than `../../mayui` |
| `MAY_UI_LOCAL=1` | Build from the checkout too, not just serve from it |

The library source attaches each component's CSS itself through React 19
stylesheet precedence, so while the alias is active the published aggregate
`styles.css` is swapped for an empty file. Nothing in the app may depend on API
that only the checkout has — that is why there is no `MayHost` here even though
the published package still exports one.

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
