# Portfolio & CV — Raditya Rakha Firdaus Muliyoto (Adit Firdaus)

A live site that is also a print master. Every page on screen is one physical sheet of
paper, so `⌘P → Save as PDF` produces the submission documents for the
**Apple Developer Academy Indonesia** application with no separate export step.

**Live:** https://adit-firdaus.github.io/aditfirdaus-ada/

## The two documents

| Document | Deep link | Pages |
|---|---|---|
| Portfolio — 5 projects | `?doc=portfolio` (default) | cover + 5 |
| Curriculum Vitae | `?doc=cv` | 2 |

Paper size is switchable at `?paper=a4` (default) or `?paper=letter`. The choice drives
both the on-screen sheet and the `@page` box, so preview and print always agree.

## Printing

Press **Print / Save as PDF**, then in the browser dialog:

- **Margins: None** — the sheets carry their own 16 mm margin, and the portfolio cover bleeds to the edge.
- **Background graphics: on** — otherwise the cover prints white.

Save the files under the names the Academy asks for:

```
RadityaRakhaFirdausMuliyoto_CV_Academy.pdf
RadityaRakhaFirdausMuliyoto_Portfolio_Academy.pdf
```

## Editing the content

All copy lives in [`src/data.ts`](src/data.ts) — profile, experience, education, awards,
skills and the five projects. Nothing else needs touching to change what the documents say.
Project images are plain files in [`public/media`](public/media).

Layout is [`src/App.css`](src/App.css); the one rule that matters is that a `.sheet` is a
page, sized from `--sheet-w` / `--sheet-h`, which `App.tsx` sets next to the matching
`@page size`. In print a sheet gets a fixed height and `break-after: page`, so one sheet
can never spill onto a second page.

The interface chrome is built on [May UI](https://github.com/adit-firdaus/may-ui).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/aditfirdaus-ada/
npm run build    # tsc -b && vite build
npm run lint     # oxlint
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
