import { useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DescriptionItem,
  Descriptions,
  Grid,
  Heading,
  List,
  ListRow,
  MayProvider,
  NavigationBar,
  NoticeBar,
  Separator,
  Stack,
  Statistic,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
} from '@adit_firdaus/may-ui'
import {
  IoArrowForward,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoLibraryOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoPersonOutline,
  IoPrintOutline,
  IoSchoolOutline,
  IoSparklesOutline,
} from 'react-icons/io5'
import { SiItchdotio } from 'react-icons/si'
import {
  awards,
  education,
  experience,
  extracurricular,
  profile,
  projects,
  publications,
  skills,
} from './data'
import { PrintDocuments } from './Documents'
import { Mark, TechTag } from './ui'
import { asset } from './paths'
import './App.css'

const TABS = [
  { value: 'overview', label: 'Overview', icon: <IoPersonOutline /> },
  { value: 'projects', label: 'Projects', icon: <IoSparklesOutline /> },
  { value: 'experience', label: 'Experience', icon: <IoBriefcaseOutline /> },
  { value: 'publications', label: 'Publications', icon: <IoLibraryOutline /> },
  { value: 'contact', label: 'Get in Touch', icon: <IoMailOutline /> },
] as const

type TabKey = (typeof TABS)[number]['value']

const STATS = [
  { label: 'Public repositories', value: '45' },
  { label: 'Games published', value: '5' },
  { label: 'Competition awards', value: '3' },
  { label: 'May UI components', value: '74' },
]

const PAPER = {
  a4: { css: 'A4 portrait', width: '210mm', height: '297mm' },
  letter: { css: 'Letter portrait', width: '8.5in', height: '11in' },
}

type PaperKey = keyof typeof PAPER

const isTab = (v: string): v is TabKey => TABS.some((t) => t.value === v)

/* -------------------------------------------------------------- panels -- */

function Overview({ onGo }: { onGo: (tab: TabKey) => void }) {
  const current = experience.filter((j) => j.period.includes('Present'))

  return (
    <Stack gap={6}>
      <Card variant="elevated" padding="lg">
        <Stack direction="row" gap={6} align="center" wrap className="hero">
          <Mark logo="github" name={profile.knownAs} size="xl" />
          <Stack gap={2} className="hero-copy">
            <Stack direction="row" gap={2} align="center" wrap>
              <Heading level={1} size="title-1" weight="bold">
                {profile.knownAs}
              </Heading>
              <Badge tone="tint" variant="tinted">
                Open to the Academy
              </Badge>
            </Stack>
            <Text variant="callout" tone="secondary">
              {profile.legalName} · {profile.location}
            </Text>
            <Text variant="body">{profile.objective}</Text>
            <Stack direction="row" gap={2} wrap>
              <Button variant="filled" leadingIcon={<IoSparklesOutline />} onClick={() => onGo('projects')}>
                See the work
              </Button>
              <Button variant="tinted" leadingIcon={<IoMailOutline />} onClick={() => onGo('contact')}>
                Get in touch
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>

      <Grid minColumnWidth={180} gap={4}>
        {STATS.map((s) => (
          <Card key={s.label} variant="grouped" padding="md">
            <Statistic label={s.label} value={s.value} size="lg" />
          </Card>
        ))}
      </Grid>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Where I am now
        </Heading>
        <List variant="inset">
          {current.map((job) => (
            <ListRow
              key={job.org}
              leading={<Mark logo={job.logo} name={job.org} size="md" />}
              title={job.role}
              subtitle={job.org}
              detail={
                <Text variant="footnote" tone="tertiary">
                  {job.period}
                </Text>
              }
            />
          ))}
        </List>
      </Stack>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          What I work with
        </Heading>
        <Card variant="grouped" padding="md">
          <Stack gap={4}>
            {skills.map((group) => (
              <Stack key={group.group} gap={2}>
                <Text variant="footnote" tone="tertiary" weight="semibold">
                  {group.group.toUpperCase()}
                </Text>
                <Stack direction="row" gap={2} wrap>
                  {group.items.map((i) => (
                    <TechTag key={i} label={i} size="md" />
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Stack>
    </Stack>
  )
}

function Projects() {
  return (
    <Stack gap={5}>
      <NoticeBar tone="tint" icon={<IoSparklesOutline />}>
        Five selected projects — two competition winners, one design system, and the games that started it.
      </NoticeBar>

      {projects.map((p) => (
        <Card key={p.n} variant="elevated" padding="none" className="project">
          <img className="project-shot" src={asset(p.image)} alt={p.imageAlt} />
          <CardHeader
            accessory={
              <Stack direction="row" gap={2} align="center">
                {p.award && (
                  <Badge tone="success" variant="tinted">
                    {p.award}
                  </Badge>
                )}
                <Badge tone="neutral" variant="tinted">
                  {p.year}
                </Badge>
              </Stack>
            }
          >
            <Stack direction="row" gap={3} align="center">
              <Mark logo={p.logo} name={p.name} size="lg" />
              <Stack gap={0}>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.tagline}</CardDescription>
              </Stack>
            </Stack>
          </CardHeader>

          <CardBody>
            <Stack gap={4}>
              <Text variant="body">{p.summary}</Text>
              <Descriptions variant="inset" layout="stacked" columns={2}>
                <DescriptionItem label="Type" value={p.kind} />
                <DescriptionItem label="My role" value={p.role} />
              </Descriptions>
              <Descriptions variant="inset" layout="stacked" columns={1}>
                <DescriptionItem label="Impact" value={p.impact} />
                <DescriptionItem label="What I learned" value={p.learned} />
              </Descriptions>
              <Stack direction="row" gap={2} wrap>
                {p.stack.map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </Stack>
            </Stack>
          </CardBody>

          <CardFooter>
            <Stack direction="row" gap={2} wrap>
              {p.links.map((l) => (
                <Button
                  key={l.href}
                  size="sm"
                  variant="tinted"
                  trailingIcon={<IoArrowForward />}
                  onClick={() => window.open(l.href, '_blank', 'noreferrer')}
                >
                  {l.label}
                </Button>
              ))}
            </Stack>
          </CardFooter>
        </Card>
      ))}
    </Stack>
  )
}

function Experience() {
  return (
    <Stack gap={6}>
      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Experience
        </Heading>
        <List variant="inset">
          {experience.map((job) => (
            <ListRow
              key={`${job.org}-${job.period}`}
              leading={<Mark logo={job.logo} name={job.org} size="md" />}
              title={job.role}
              subtitle={
                <Stack gap={1}>
                  <Text variant="footnote" tone="secondary">
                    {job.org}
                    {job.place ? ` · ${job.place}` : ''}
                  </Text>
                  {job.points.map((p) => (
                    <Text key={p} variant="footnote" tone="tertiary">
                      {p}
                    </Text>
                  ))}
                </Stack>
              }
              detail={
                <Text variant="footnote" tone="tertiary">
                  {job.period}
                </Text>
              }
            />
          ))}
        </List>
      </Stack>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          <IoSchoolOutline /> Education
        </Heading>
        <List variant="inset">
          {education.map((e) => (
            <ListRow
              key={e.school}
              leading={<Mark logo={e.logo} name={e.school} size="md" />}
              title={e.school}
              subtitle={`${e.detail} · ${e.place}`}
              detail={
                <Text variant="footnote" tone="tertiary">
                  {e.period}
                </Text>
              }
            />
          ))}
        </List>
      </Stack>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Awards & recognition
        </Heading>
        <List variant="inset">
          {awards.map((a) => (
            <ListRow
              key={a.title}
              leading={<Mark logo={a.logo} name={a.title} size="md" />}
              title={a.title}
              subtitle={a.detail}
              detail={
                <Text variant="footnote" tone="tertiary">
                  {a.year}
                </Text>
              }
            />
          ))}
        </List>
      </Stack>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Extra-curricular & leadership
        </Heading>
        <List variant="inset">
          {extracurricular.map((x) => (
            <ListRow
              key={x.role}
              leading={<Mark logo={x.logo} name={x.org} size="md" />}
              title={x.role}
              subtitle={
                <Stack gap={1}>
                  <Text variant="footnote" tone="secondary">
                    {x.org}
                  </Text>
                  <Text variant="footnote" tone="tertiary">
                    {x.detail}
                  </Text>
                </Stack>
              }
              detail={
                <Text variant="footnote" tone="tertiary">
                  {x.period}
                </Text>
              }
            />
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

function Publications() {
  const groups = ['Package', 'Game', 'Talk', 'Code'] as const
  const heading: Record<(typeof groups)[number], string> = {
    Package: 'Packages',
    Game: 'Released games',
    Talk: 'Talks & presentations',
    Code: 'Open source',
  }

  return (
    <Stack gap={6}>
      <NoticeBar tone="neutral" icon={<IoLibraryOutline />}>
        Things I have put into the world — published packages, released games and public presentations,
        each with a link you can open.
      </NoticeBar>

      {groups.map((kind) => {
        const items = publications.filter((p) => p.kind === kind)
        if (!items.length) return null
        return (
          <Stack key={kind} gap={3}>
            <Heading level={2} size="title-3" weight="semibold">
              {heading[kind]}
            </Heading>
            <List variant="inset">
              {items.map((p) => (
                <ListRow
                  key={p.href}
                  leading={<Mark logo={p.logo} name={p.title} size="md" />}
                  title={p.title}
                  subtitle={
                    <Stack gap={1}>
                      <Text variant="footnote" tone="secondary">
                        {p.venue}
                      </Text>
                      <Text variant="footnote" tone="tertiary">
                        {p.detail}
                      </Text>
                    </Stack>
                  }
                  detail={
                    <Text variant="footnote" tone="tertiary">
                      {p.year}
                    </Text>
                  }
                  chevron
                  onClick={() => window.open(p.href, '_blank', 'noreferrer')}
                />
              ))}
            </List>
          </Stack>
        )
      })}
    </Stack>
  )
}

function Contact({ onPrint }: { onPrint: (doc: 'cv' | 'portfolio') => void }) {
  return (
    <Stack gap={6}>
      <Card variant="elevated" padding="lg">
        <Stack gap={4}>
          <Heading level={2} size="title-2" weight="bold">
            Get in touch
          </Heading>
          <Text variant="body" tone="secondary">
            I read every message. The fastest way to reach me is email — say what you are building and I
            will reply with something useful.
          </Text>
          <Stack direction="row" gap={2} wrap>
            <Button
              variant="filled"
              leadingIcon={<IoMailOutline />}
              onClick={() => window.open(`mailto:${profile.email}`)}
            >
              {profile.email}
            </Button>
            <Button
              variant="tinted"
              leadingIcon={<IoLogoLinkedin />}
              onClick={() => window.open('https://www.linkedin.com/in/adit-firdaus/', '_blank', 'noreferrer')}
            >
              LinkedIn
            </Button>
            <Button
              variant="gray"
              leadingIcon={<IoLogoGithub />}
              onClick={() => window.open('https://github.com/adit-firdaus', '_blank', 'noreferrer')}
            >
              GitHub
            </Button>
            <Button
              variant="gray"
              leadingIcon={<SiItchdotio />}
              onClick={() => window.open('https://adit-firdaus.itch.io/', '_blank', 'noreferrer')}
            >
              itch.io
            </Button>
          </Stack>
        </Stack>
      </Card>

      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Take a copy with you
        </Heading>
        <Text variant="footnote" tone="secondary">
          Both documents are typeset for paper by this site itself. Choose one, then pick{' '}
          <strong>Save as PDF</strong> in the print dialog — margins <strong>None</strong>, background
          graphics <strong>on</strong>.
        </Text>
        <Grid minColumnWidth={260} gap={4}>
          <Card variant="grouped" padding="md">
            <Stack gap={3}>
              <Stack gap={0}>
                <CardTitle>Curriculum Vitae</CardTitle>
                <CardDescription>Two pages — experience, education, awards, skills.</CardDescription>
              </Stack>
              <Button variant="filled" leadingIcon={<IoDocumentTextOutline />} onClick={() => onPrint('cv')}>
                Print CV
              </Button>
            </Stack>
          </Card>
          <Card variant="grouped" padding="md">
            <Stack gap={3}>
              <Stack gap={0}>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Cover plus five projects, one per page.</CardDescription>
              </Stack>
              <Button variant="filled" leadingIcon={<IoPrintOutline />} onClick={() => onPrint('portfolio')}>
                Print portfolio
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Stack>
    </Stack>
  )
}

/* ----------------------------------------------------------------- App -- */

export function App() {
  const [tab, setTab] = useState<TabKey>(() => {
    const hash = window.location.hash.replace('#', '')
    return isTab(hash) ? hash : 'overview'
  })
  const [paper, setPaper] = useState<PaperKey>('a4')

  useEffect(() => {
    window.history.replaceState(null, '', `#${tab}`)
  }, [tab])

  /* ?print=cv / ?print=portfolio preselects the paper target, which makes the
     print output reachable from a plain link. */
  useEffect(() => {
    const target = new URLSearchParams(window.location.search).get('print')
    if (target === 'cv' || target === 'portfolio') document.body.dataset.print = target
  }, [])

  const go = (next: TabKey) => {
    setTab(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /**
   * The website never prints. `data-print` chooses which hidden document the
   * print stylesheet reveals, so the output does not depend on the open tab.
   */
  const print = (doc: 'cv' | 'portfolio') => {
    document.body.dataset.print = doc
    window.print()
  }

  return (
    <MayProvider theme="system">
      <style>{`
        @page { size: ${PAPER[paper].css}; margin: 0; }
        :root { --sheet-w: ${PAPER[paper].width}; --sheet-h: ${PAPER[paper].height}; }
      `}</style>

      <div className="site">
        <NavigationBar
          title={profile.knownAs}
          subtitle={profile.title}
          sticky
          trailing={
            <Stack direction="row" gap={2} align="center">
              <Button
                size="sm"
                variant={paper === 'a4' ? 'tinted' : 'plain'}
                onClick={() => setPaper('a4')}
                aria-label="A4 paper"
              >
                A4
              </Button>
              <Button
                size="sm"
                variant={paper === 'letter' ? 'tinted' : 'plain'}
                onClick={() => setPaper('letter')}
                aria-label="US Letter paper"
              >
                Letter
              </Button>
              <Button size="sm" variant="filled" leadingIcon={<IoDocumentTextOutline />} onClick={() => print('cv')}>
                CV
              </Button>
              <Button
                size="sm"
                variant="tinted"
                leadingIcon={<IoPrintOutline />}
                onClick={() => print('portfolio')}
              >
                Portfolio
              </Button>
            </Stack>
          }
        />

        <main className="site-main">
          <Tabs value={tab} onValueChange={(v) => go(v as TabKey)} variant="pill" size="md">
            <TabList fullWidth>
              {TABS.map((t) => (
                <Tab key={t.value} value={t.value} icon={t.icon}>
                  {t.label}
                </Tab>
              ))}
            </TabList>

            <TabPanel value="overview">
              <Overview onGo={go} />
            </TabPanel>
            <TabPanel value="projects">
              <Projects />
            </TabPanel>
            <TabPanel value="experience">
              <Experience />
            </TabPanel>
            <TabPanel value="publications">
              <Publications />
            </TabPanel>
            <TabPanel value="contact">
              <Contact onPrint={print} />
            </TabPanel>
          </Tabs>

          <Separator />

          <footer className="site-foot">
            <Text variant="footnote" tone="tertiary">
              {profile.legalName} · {profile.location}
            </Text>
            <Text variant="footnote" tone="tertiary">
              Built with May UI — a design system of mine.
            </Text>
          </footer>
        </main>
      </div>

      <PrintDocuments />
    </MayProvider>
  )
}
