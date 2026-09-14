import { useState } from 'react'
import { Button, MayProvider, SegmentedControl } from '@adit_firdaus/may-ui'
import { IoDownloadOutline, IoLogoGithub, IoPrintOutline } from 'react-icons/io5'
import {
  awards,
  education,
  experience,
  extracurricular,
  profile,
  projects,
  skills,
  type Project,
} from './data'
import './App.css'

type DocKey = 'portfolio' | 'cv'
type PaperKey = 'a4' | 'letter'

const PAPER: Record<PaperKey, { label: string; css: string; width: string; height: string }> = {
  a4: { label: 'A4', css: 'A4 portrait', width: '210mm', height: '297mm' },
  letter: { label: 'US Letter', css: 'Letter portrait', width: '8.5in', height: '11in' },
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

/** One physical page. Everything inside is sized in mm/in so screen matches paper. */
function Sheet({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <article className={`sheet ${className}`}>{children}</article>
}

function DocFooter({ label }: { label: string }) {
  return (
    <footer className="sheet-foot">
      <span>{profile.legalName}</span>
      <span>{label}</span>
    </footer>
  )
}

/* ------------------------------------------------------------------ CV -- */

function CurriculumVitae() {
  return (
    <>
      <Sheet>
        <header className="cv-head">
          <div>
            <h1 className="cv-name">{profile.legalName}</h1>
            <p className="cv-known">
              known as <strong>{profile.knownAs}</strong> — {profile.title}
            </p>
          </div>
          <ul className="cv-contact">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
            {profile.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </header>

        <section className="cv-block">
          <h2 className="cv-h2">Objective</h2>
          <p className="cv-objective">{profile.objective}</p>
        </section>

        <section className="cv-block">
          <h2 className="cv-h2">Experience</h2>
          {experience.map((job) => (
            <div className="entry" key={`${job.org}-${job.period}`}>
              <div className="entry-top">
                <h3 className="entry-title">
                  {job.role} <span className="entry-org">· {job.org}</span>
                  {job.place && <span className="entry-place"> · {job.place}</span>}
                </h3>
                <span className="entry-period">{job.period}</span>
              </div>
              <ul className="entry-points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <DocFooter label="Curriculum Vitae — page 1 of 2" />
      </Sheet>

      <Sheet>
        <section className="cv-block">
          <h2 className="cv-h2">Education</h2>
          {education.map((e) => (
            <div className="entry" key={e.school}>
              <div className="entry-top">
                <h3 className="entry-title">
                  {e.school} <span className="entry-place">· {e.place}</span>
                </h3>
                <span className="entry-period">{e.period}</span>
              </div>
              <p className="entry-note">{e.detail}</p>
            </div>
          ))}
        </section>

        <section className="cv-block">
          <h2 className="cv-h2">Awards & Recognition</h2>
          {awards.map((a) => (
            <div className="entry" key={a.title}>
              <div className="entry-top">
                <h3 className="entry-title">{a.title}</h3>
                <span className="entry-period">{a.year}</span>
              </div>
              <p className="entry-note">{a.detail}</p>
            </div>
          ))}
        </section>

        <section className="cv-block">
          <h2 className="cv-h2">Extra-curricular & Leadership</h2>
          {extracurricular.map((x) => (
            <div className="entry" key={x.role}>
              <div className="entry-top">
                <h3 className="entry-title">
                  {x.role} <span className="entry-org">· {x.org}</span>
                </h3>
                <span className="entry-period">{x.period}</span>
              </div>
              <p className="entry-note">{x.detail}</p>
            </div>
          ))}
        </section>

        <section className="cv-block">
          <h2 className="cv-h2">Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div className="skill-row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <DocFooter label="Curriculum Vitae — page 2 of 2" />
      </Sheet>
    </>
  )
}

/* ----------------------------------------------------------- Portfolio -- */

function ProjectSheet({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <Sheet>
      <div className="pj-head">
        <span className="pj-n">{project.n}</span>
        <div>
          <h2 className="pj-name">{project.name}</h2>
          <p className="pj-tagline">{project.tagline}</p>
        </div>
        <span className="pj-year">{project.year}</span>
      </div>

      <figure className="pj-figure">
        <img src={asset(project.image)} alt={project.imageAlt} />
        <figcaption>{project.imageAlt}</figcaption>
      </figure>

      <p className="pj-summary">{project.summary}</p>

      <div className="pj-meta">
        <div>
          <span className="pj-label">Type</span>
          <p>{project.kind}</p>
        </div>
        <div>
          <span className="pj-label">My role</span>
          <p>{project.role}</p>
        </div>
      </div>

      <div className="pj-block">
        <span className="pj-label">Impact</span>
        <p>{project.impact}</p>
      </div>

      <div className="pj-block">
        <span className="pj-label">What I learned</span>
        <p>{project.learned}</p>
      </div>

      <div className="pj-foot-row">
        <ul className="pj-stack">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ul className="pj-links">
          {project.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <DocFooter label={`Portfolio — project ${index + 1} of ${total}`} />
    </Sheet>
  )
}

function Portfolio() {
  return (
    <>
      <Sheet className="cover">
        <div className="cover-top">
          <p className="cover-kicker">Apple Developer Academy Indonesia — Application</p>
        </div>
        <div className="cover-mid">
          <h1 className="cover-title">Portfolio</h1>
          <p className="cover-name">{profile.legalName}</p>
          <p className="cover-known">known as {profile.knownAs}</p>
          <p className="cover-blurb">{profile.objective}</p>
        </div>
        <div className="cover-bottom">
          <ol className="cover-index">
            {projects.map((p) => (
              <li key={p.n}>
                <span>{p.n}</span>
                <strong>{p.name}</strong>
                <em>{p.tagline}</em>
              </li>
            ))}
          </ol>
          <ul className="cover-contact">
            <li>{profile.email}</li>
            <li>{profile.location}</li>
            {profile.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Sheet>

      {projects.map((p, i) => (
        <ProjectSheet key={p.n} project={p} index={i} total={projects.length} />
      ))}
    </>
  )
}

/* ----------------------------------------------------------------- App -- */

/** Deep-linkable: ?doc=cv&paper=letter opens straight to that document. */
function initial<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  const value = new URLSearchParams(window.location.search).get(key) as T | null
  return value && allowed.includes(value) ? value : fallback
}

export function App() {
  const [doc, setDoc] = useState<DocKey>(() => initial('doc', ['portfolio', 'cv'] as const, 'portfolio'))
  const [paper, setPaper] = useState<PaperKey>(() => initial('paper', ['a4', 'letter'] as const, 'a4'))
  const sheet = PAPER[paper]

  const fileName =
    doc === 'cv'
      ? 'RadityaRakhaFirdausMuliyoto_CV_Academy'
      : 'RadityaRakhaFirdausMuliyoto_Portfolio_Academy'

  return (
    <MayProvider theme="light">
      {/* Paper geometry lives in one place: the page box and the on-screen sheet. */}
      <style>{`
        @page { size: ${sheet.css}; margin: 0; }
        :root { --sheet-w: ${sheet.width}; --sheet-h: ${sheet.height}; }
      `}</style>

      <div className="toolbar no-print">
        <div className="toolbar-inner">
          <div className="toolbar-id">
            <strong>{profile.knownAs}</strong>
            <span>{profile.title}</span>
          </div>

          <div className="toolbar-controls">
            <SegmentedControl<DocKey>
              size="sm"
              value={doc}
              onValueChange={setDoc}
              options={[
                { label: 'Portfolio', value: 'portfolio' },
                { label: 'CV', value: 'cv' },
              ]}
            />
            <SegmentedControl<PaperKey>
              size="sm"
              value={paper}
              onValueChange={setPaper}
              options={[
                { label: 'A4', value: 'a4' },
                { label: 'Letter', value: 'letter' },
              ]}
            />
            <Button size="sm" variant="filled" leadingIcon={<IoPrintOutline />} onClick={() => window.print()}>
              Print / Save as PDF
            </Button>
            <Button
              size="sm"
              variant="gray"
              leadingIcon={<IoLogoGithub />}
              onClick={() => window.open('https://github.com/adit-firdaus', '_blank', 'noreferrer')}
            >
              GitHub
            </Button>
          </div>
        </div>
        <p className="toolbar-hint">
          <IoDownloadOutline aria-hidden /> Print, then choose <strong>Save as PDF</strong> — set margins to{' '}
          <strong>None</strong> and enable <strong>Background graphics</strong>. Save as{' '}
          <code>{fileName}.pdf</code>.
        </p>
      </div>

      <main className="stage">{doc === 'cv' ? <CurriculumVitae /> : <Portfolio />}</main>
    </MayProvider>
  )
}
