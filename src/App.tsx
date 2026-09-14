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
  IoCreateOutline,
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoPersonOutline,
  IoPrintOutline,
  IoRefreshOutline,
  IoSchoolOutline,
  IoSparklesOutline,
} from 'react-icons/io5'
import { SiItchdotio } from 'react-icons/si'
import { Ed } from './content'
import { useContent, useData } from './content-store'
import { PrintDocuments } from './Documents'
import { Mark, TechTag } from './ui'
import { asset } from './paths'
import './App.css'

const TABS = [
  { value: 'overview', label: 'Me', icon: <IoPersonOutline /> },
  { value: 'projects', label: 'Projects', icon: <IoSparklesOutline /> },
  { value: 'experience', label: 'Experience', icon: <IoBriefcaseOutline /> },
  { value: 'contact', label: 'Call me', icon: <IoMailOutline /> },
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
  const { profile, experience, skills } = useData()
  const current = experience.filter((j) => j.period.includes('Present'))

  return (
    <Stack gap={6}>
      <Card variant="elevated" padding="lg">
        <Stack direction="row" gap={6} align="center" wrap className="hero">
          <Mark logo="github" name={profile.knownAs} size="xl" />
          <Stack gap={2} className="hero-copy">
            <Heading level={1} size="title-1" weight="bold">
              <Ed p="profile.knownAs">{profile.knownAs}</Ed>
            </Heading>
            <Text variant="callout" tone="secondary">
              <Ed p="profile.location">{profile.location}</Ed>
            </Text>
            <Text variant="body">
              <Ed p="profile.objective">{profile.objective}</Ed>
            </Text>
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
              key={job.id}
              leading={<Mark logo={job.logo} name={job.org} size="md" />}
              title={<Ed p={`experience.${job.id}.role`}>{job.role}</Ed>}
              subtitle={<Ed p={`experience.${job.id}.org`}>{job.org}</Ed>}
              detail={
                <Text variant="footnote" tone="tertiary">
                  <Ed p={`experience.${job.id}.period`}>{job.period}</Ed>
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
              <Stack key={group.id} gap={2}>
                {/* Uppercased in CSS rather than in JS, so edit mode shows the
                    text as it is actually stored. */}
                <Text variant="footnote" tone="tertiary" weight="semibold" className="caps">
                  <Ed p={`skills.${group.id}.group`}>{group.group}</Ed>
                </Text>
                <Stack direction="row" gap={2} wrap>
                  {group.items.map((i, index) => (
                    <TechTag key={i} label={i} p={`skills.${group.id}.items.${index}`} size="md" />
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
  const { projects } = useData()
  return (
    <Stack gap={5}>
      <Stack gap={1}>
        <Heading level={2} size="title-3" weight="semibold">
          Selected projects
        </Heading>
        <Text variant="footnote" tone="secondary">
          Two competition winners, one design system, and the games that started it.
        </Text>
      </Stack>

      {projects.map((p) => (
        <Card key={p.id} variant="elevated" padding="none" className="project">
          <img className="project-shot" src={asset(p.image)} alt={p.imageAlt} />
          <CardHeader
            accessory={
              <Stack direction="row" gap={2} align="center">
                {p.award && (
                  <Badge tone="success" variant="tinted">
                    <Ed p={`projects.${p.id}.award`}>{p.award}</Ed>
                  </Badge>
                )}
                <Badge tone="neutral" variant="tinted">
                  <Ed p={`projects.${p.id}.year`}>{p.year}</Ed>
                </Badge>
              </Stack>
            }
          >
            <Stack direction="row" gap={3} align="center">
              <Mark logo={p.logo} name={p.name} size="lg" />
              <Stack gap={0}>
                <CardTitle>
                  <Ed p={`projects.${p.id}.name`}>{p.name}</Ed>
                </CardTitle>
                <CardDescription>
                  <Ed p={`projects.${p.id}.tagline`}>{p.tagline}</Ed>
                </CardDescription>
              </Stack>
            </Stack>
          </CardHeader>

          <CardBody>
            <Stack gap={4}>
              <Text variant="body">
                <Ed p={`projects.${p.id}.summary`}>{p.summary}</Ed>
              </Text>
              <Descriptions variant="inset" layout="stacked" columns={2}>
                <DescriptionItem label="Type" value={<Ed p={`projects.${p.id}.kind`}>{p.kind}</Ed>} />
                <DescriptionItem label="My role" value={<Ed p={`projects.${p.id}.role`}>{p.role}</Ed>} />
              </Descriptions>
              <Descriptions variant="inset" layout="stacked" columns={1}>
                <DescriptionItem label="Impact" value={<Ed p={`projects.${p.id}.impact`}>{p.impact}</Ed>} />
                <DescriptionItem
                  label="What I learned"
                  value={<Ed p={`projects.${p.id}.learned`}>{p.learned}</Ed>}
                />
              </Descriptions>
              <Stack direction="row" gap={2} wrap>
                {p.stack.map((t, index) => (
                  <TechTag key={t} label={t} p={`projects.${p.id}.stack.${index}`} />
                ))}
              </Stack>
            </Stack>
          </CardBody>

          <CardFooter>
            <Stack direction="row" gap={2} wrap>
              {p.links.map((l, index) => (
                <Button
                  key={l.href}
                  size="sm"
                  variant="tinted"
                  trailingIcon={<IoArrowForward />}
                  onClick={() => window.open(l.href, '_blank', 'noreferrer')}
                >
                  <Ed p={`projects.${p.id}.links.${index}.label`}>{l.label}</Ed>
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
  const { experience, education, awards, extracurricular } = useData()
  return (
    <Stack gap={6}>
      <Stack gap={3}>
        <Heading level={2} size="title-3" weight="semibold">
          Experience
        </Heading>
        <List variant="inset">
          {experience.map((job) => (
            <ListRow
              key={job.id}
              leading={<Mark logo={job.logo} name={job.org} size="md" />}
              title={<Ed p={`experience.${job.id}.role`}>{job.role}</Ed>}
              subtitle={
                <Stack gap={1}>
                  <Text variant="footnote" tone="secondary">
                    <Ed p={`experience.${job.id}.org`}>{job.org}</Ed>
                    {job.place && (
                      <>
                        {' · '}
                        <Ed p={`experience.${job.id}.place`}>{job.place}</Ed>
                      </>
                    )}
                  </Text>
                  {job.points.map((point, index) => (
                    <Text key={point} variant="footnote" tone="tertiary">
                      <Ed p={`experience.${job.id}.points.${index}`}>{point}</Ed>
                    </Text>
                  ))}
                </Stack>
              }
              detail={
                <Text variant="footnote" tone="tertiary">
                  <Ed p={`experience.${job.id}.period`}>{job.period}</Ed>
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
              key={e.id}
              leading={<Mark logo={e.logo} name={e.school} size="md" />}
              title={<Ed p={`education.${e.id}.school`}>{e.school}</Ed>}
              subtitle={
                <>
                  <Ed p={`education.${e.id}.detail`}>{e.detail}</Ed>
                  {' · '}
                  <Ed p={`education.${e.id}.place`}>{e.place}</Ed>
                </>
              }
              detail={
                <Text variant="footnote" tone="tertiary">
                  <Ed p={`education.${e.id}.period`}>{e.period}</Ed>
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
              key={a.id}
              leading={<Mark logo={a.logo} name={a.title} size="md" />}
              title={<Ed p={`awards.${a.id}.title`}>{a.title}</Ed>}
              subtitle={<Ed p={`awards.${a.id}.detail`}>{a.detail}</Ed>}
              detail={
                <Text variant="footnote" tone="tertiary">
                  <Ed p={`awards.${a.id}.year`}>{a.year}</Ed>
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
              key={x.id}
              leading={<Mark logo={x.logo} name={x.org} size="md" />}
              title={<Ed p={`extracurricular.${x.id}.role`}>{x.role}</Ed>}
              subtitle={
                <Stack gap={1}>
                  <Text variant="footnote" tone="secondary">
                    <Ed p={`extracurricular.${x.id}.org`}>{x.org}</Ed>
                  </Text>
                  <Text variant="footnote" tone="tertiary">
                    <Ed p={`extracurricular.${x.id}.detail`}>{x.detail}</Ed>
                  </Text>
                </Stack>
              }
              detail={
                <Text variant="footnote" tone="tertiary">
                  <Ed p={`extracurricular.${x.id}.period`}>{x.period}</Ed>
                </Text>
              }
            />
          ))}
        </List>
      </Stack>
    </Stack>
  )
}

function Contact({ onPrint }: { onPrint: (doc: 'cv' | 'portfolio') => void }) {
  const { profile } = useData()
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
              <Ed p="profile.email">{profile.email}</Ed>
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
  const { profile } = useData()
  const { editing, setEditing, patch, resetAll } = useContent()
  const edits = Object.keys(patch).length
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
    <MayProvider theme={{ mode: 'system' }}>
      <style>{`
        @page { size: ${PAPER[paper].css}; margin: 0; }
        :root { --sheet-w: ${PAPER[paper].width}; --sheet-h: ${PAPER[paper].height}; }
      `}</style>

      <div className="site">
        <NavigationBar
          title={profile.knownAs}
          subtitle={profile.title}
          /* The iOS large title: it sits left and full-size at the top of the
             page and collapses into the inline bar title as you scroll. With
             no scrollRef the bar listens on the window, which is what a
             whole-page scroll like this one wants. */
          largeTitle
          sticky
          trailing={
            <Stack direction="row" gap={2} align="center">
              <Button
                size="sm"
                variant={editing ? 'filled' : 'gray'}
                leadingIcon={<IoCreateOutline />}
                onClick={() => setEditing(!editing)}
              >
                {editing ? 'Done' : 'Edit'}
              </Button>
              {editing && edits > 0 && (
                <Button size="sm" variant="plain" leadingIcon={<IoRefreshOutline />} onClick={resetAll}>
                  Reset {edits}
                </Button>
              )}
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
            <TabPanel value="contact">
              <Contact onPrint={print} />
            </TabPanel>
          </Tabs>

          <Separator />

          <footer className="site-foot">
            <Text variant="footnote" tone="tertiary">
              <Ed p="profile.knownAs">{profile.knownAs}</Ed> ·{' '}
              <Ed p="profile.location">{profile.location}</Ed>
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
