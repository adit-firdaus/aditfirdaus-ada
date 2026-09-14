/**
 * The printable documents.
 *
 * These never appear on screen — the website is the site, and these are what
 * the browser lays onto paper. Each <Sheet> is exactly one physical page;
 * App.css gives them the page box and retunes May UI to print scale.
 */
import type { ReactNode } from 'react'
import {
  Badge,
  Card,
  CardDescription,
  CardTitle,
  DescriptionItem,
  Descriptions,
  Heading,
  IconTile,
  List,
  ListRow,
  Separator,
  Stack,
  Statistic,
  Text,
  Avatar,
  MayProvider,
} from '@adit_firdaus/may-ui'
import { IoRocketOutline } from 'react-icons/io5'
import { type Project } from './data'
import { useData } from './content-store'
import { Mark, TechTag } from './ui'
import { asset } from './paths'

function Sheet({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <article className={`sheet ${className}`}>{children}</article>
}

function SheetFoot({ label }: { label: string }) {
  const { profile } = useData()
  return (
    <footer className="sheet-foot">
      <Text variant="caption-2" tone="tertiary">
        {profile.legalName}
      </Text>
      <Text variant="caption-2" tone="tertiary">
        {label}
      </Text>
    </footer>
  )
}

/* ------------------------------------------------------------------ CV -- */

function CurriculumVitae() {
  const { profile, experience, education, awards, extracurricular, skills } = useData()
  return (
    <>
      <Sheet>
        <Stack direction="row" justify="between" align="start" gap={6}>
          <Stack direction="row" gap={4} align="center">
            <Avatar name={profile.knownAs} size="xl" shape="square" hue="blue" />
            <Stack gap={0}>
              <Heading level={1} size="title-1" weight="bold">
                {profile.legalName}
              </Heading>
              <Text variant="subheadline" tone="secondary">
                known as <strong>{profile.knownAs}</strong>
              </Text>
              <Text variant="footnote" tone="tertiary">
                {profile.title}
              </Text>
            </Stack>
          </Stack>
          <Stack gap={0} align="end" className="cv-contact">
            <Text variant="footnote" tone="secondary">
              {profile.email}
            </Text>
            <Text variant="footnote" tone="secondary">
              {profile.phone}
            </Text>
            <Text variant="footnote" tone="secondary">
              {profile.location}
            </Text>
            {profile.links.map((l) => (
              <Text key={l.href} variant="footnote" tone="tint">
                <a href={l.href}>{l.label}</a>
              </Text>
            ))}
          </Stack>
        </Stack>

        <Separator />

        <Card variant="grouped" padding="md">
          <Text variant="callout">{profile.objective}</Text>
        </Card>

        <List variant="inset" header="Experience">
          {experience.map((job) => (
            <ListRow
              key={`${job.org}-${job.period}`}
              leading={<Mark logo={job.logo} name={job.org} />}
              title={
                <Text variant="headline" weight="semibold">
                  {job.role}
                </Text>
              }
              subtitle={
                <Stack gap={0}>
                  <Text variant="footnote" tone="secondary">
                    {job.org}
                    {job.place ? ` · ${job.place}` : ''}
                  </Text>
                  {job.points.map((p) => (
                    <Text key={p} variant="caption-1" tone="tertiary">
                      {p}
                    </Text>
                  ))}
                </Stack>
              }
              detail={
                <Text variant="caption-1" tone="tertiary">
                  {job.period}
                </Text>
              }
            />
          ))}
        </List>

        <SheetFoot label="Curriculum Vitae — page 1 of 2" />
      </Sheet>

      <Sheet>
        <List variant="inset" header="Education">
          {education.map((e) => (
            <ListRow
              key={e.school}
              leading={<Mark logo={e.logo} name={e.school} />}
              title={
                <Text variant="headline" weight="semibold">
                  {e.school}
                </Text>
              }
              subtitle={
                <Text variant="footnote" tone="secondary">
                  {e.detail} · {e.place}
                </Text>
              }
              detail={
                <Text variant="caption-1" tone="tertiary">
                  {e.period}
                </Text>
              }
            />
          ))}
        </List>

        <List variant="inset" header="Awards & Recognition">
          {awards.map((a) => (
            <ListRow
              key={a.title}
              leading={<Mark logo={a.logo} name={a.title} />}
              title={
                <Text variant="headline" weight="semibold">
                  {a.title}
                </Text>
              }
              subtitle={
                <Text variant="footnote" tone="secondary">
                  {a.detail}
                </Text>
              }
              detail={
                <Text variant="caption-1" tone="tertiary">
                  {a.year}
                </Text>
              }
            />
          ))}
        </List>

        <List variant="inset" header="Extra-curricular & Leadership">
          {extracurricular.map((x) => (
            <ListRow
              key={x.role}
              leading={<Mark logo={x.logo} name={x.org} />}
              title={
                <Text variant="headline" weight="semibold">
                  {x.role}
                </Text>
              }
              subtitle={
                <Stack gap={0}>
                  <Text variant="footnote" tone="secondary">
                    {x.org}
                  </Text>
                  <Text variant="caption-1" tone="tertiary">
                    {x.detail}
                  </Text>
                </Stack>
              }
              detail={
                <Text variant="caption-1" tone="tertiary">
                  {x.period}
                </Text>
              }
            />
          ))}
        </List>

        <List variant="inset" header="Skills">
          {skills.map((s) => (
            <ListRow
              key={s.group}
              title={
                <Text variant="headline" weight="semibold">
                  {s.group}
                </Text>
              }
              subtitle={
                <Stack direction="row" gap={1} wrap>
                  {s.items.map((i) => (
                    <TechTag key={i} label={i} />
                  ))}
                </Stack>
              }
            />
          ))}
        </List>

        <SheetFoot label="Curriculum Vitae — page 2 of 2" />
      </Sheet>
    </>
  )
}

/* ----------------------------------------------------------- Portfolio -- */

function ProjectSheet({ project, index, total }: { project: Project; index: number; total: number }) {
  return (
    <Sheet>
      <Stack direction="row" align="center" justify="between" gap={4}>
        <Stack direction="row" align="center" gap={3}>
          {project.logo ? (
            <Mark logo={project.logo} name={project.name} size="lg" />
          ) : (
            <IconTile gradient="orange" size="lg">
              <IoRocketOutline />
            </IconTile>
          )}
          <Stack gap={0}>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.tagline}</CardDescription>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2} align="center">
          {project.award && (
            <Badge tone="success" variant="tinted">
              {project.award}
            </Badge>
          )}
          <Badge tone="neutral" variant="tinted">
            {project.year}
          </Badge>
          <Text variant="title-2" tone="tertiary" weight="bold">
            {project.n}
          </Text>
        </Stack>
      </Stack>

      <Separator />

      <figure className="pj-figure">
        <img src={asset(project.image)} alt={project.imageAlt} />
        <figcaption>
          <Text variant="caption-2" tone="tertiary">
            {project.imageAlt}
          </Text>
        </figcaption>
      </figure>

      <Text variant="callout">{project.summary}</Text>

      <Descriptions variant="inset" layout="stacked" columns={2}>
        <DescriptionItem label="Type" value={project.kind} />
        <DescriptionItem label="My role" value={project.role} />
      </Descriptions>

      <Descriptions variant="inset" layout="stacked" columns={1}>
        <DescriptionItem label="Impact" value={project.impact} />
        <DescriptionItem label="What I learned" value={project.learned} />
      </Descriptions>

      <Stack direction="row" justify="between" align="end" gap={6} className="pj-foot-row">
        <Stack direction="row" gap={1} wrap>
          {project.stack.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </Stack>
        <Stack gap={0} align="end" className="pj-links">
          {project.links.map((l) => (
            <Text key={l.href} variant="caption-1" tone="tint">
              <a href={l.href}>{l.label}</a>
            </Text>
          ))}
        </Stack>
      </Stack>

      <SheetFoot label={`Portfolio — project ${index + 1} of ${total}`} />
    </Sheet>
  )
}

const STATS = [
  { label: 'Public repositories', value: '45' },
  { label: 'Games published', value: '5' },
  { label: 'Competition awards', value: '3' },
  { label: 'May UI components', value: '74' },
]

function Portfolio() {
  const { profile, projects } = useData()
  return (
    <>
      <MayProvider theme={{ mode: 'dark' }}>
        <Sheet className="cover">
          <Text variant="caption-1" tone="tertiary" weight="semibold">
            APPLE DEVELOPER ACADEMY INDONESIA — APPLICATION
          </Text>

          <Stack gap={4}>
            <Heading level={1} size="large-title" weight="bold" className="cover-title">
              Portfolio
            </Heading>
            <Stack gap={0}>
              <Heading level={2} size="title-3" weight="semibold">
                {profile.legalName}
              </Heading>
              <Text variant="subheadline" tone="tertiary">
                known as {profile.knownAs} · {profile.location}
              </Text>
            </Stack>
            <Text variant="body" tone="secondary" className="cover-blurb">
              {profile.objective}
            </Text>
          </Stack>

          <Stack direction="row" gap={4} justify="between" className="cover-stats">
            {STATS.map((s) => (
              <Statistic key={s.label} label={s.label} value={s.value} size="sm" />
            ))}
          </Stack>

          <List variant="plain">
            {projects.map((p) => (
              <ListRow
                key={p.n}
                leading={<Mark logo={p.logo} name={p.name} />}
                title={
                  <Text variant="subheadline" weight="semibold">
                    {p.name}
                  </Text>
                }
                subtitle={
                  <Text variant="caption-1" tone="tertiary">
                    {p.tagline}
                  </Text>
                }
                detail={
                  <Text variant="caption-2" tone="tertiary">
                    {p.n}
                  </Text>
                }
              />
            ))}
          </List>

          <Stack direction="row" gap={4} wrap className="cover-contact">
            <Text variant="caption-1" tone="tertiary">
              {profile.email}
            </Text>
            {profile.links.map((l) => (
              <Text key={l.href} variant="caption-1" tone="tint">
                <a href={l.href}>{l.label}</a>
              </Text>
            ))}
          </Stack>
        </Sheet>
      </MayProvider>

      {projects.map((p, i) => (
        <ProjectSheet key={p.n} project={p} index={i} total={projects.length} />
      ))}
    </>
  )
}

/* --------------------------------------------------------------- mount -- */

/**
 * Both documents stay in the DOM. Which one reaches the printer is decided by
 * `data-print` on <body>, so printing never depends on which tab is open.
 */
export function PrintDocuments() {
  return (
    /* One hidden wrapper: MayProvider renders its own full-height root, which
       would otherwise paint a light slab under the site. */
    <div className="print-docs">
      <MayProvider theme={{ mode: 'light' }}>
        <div className="print-doc print-cv">
          <CurriculumVitae />
        </div>
        <div className="print-doc print-portfolio">
          <Portfolio />
        </div>
      </MayProvider>
    </div>
  )
}
