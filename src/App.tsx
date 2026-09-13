import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CircularProgress,
  Field,
  IconTile,
  Input,
  List,
  ListRow,
  MayProvider,
  NavigationBar,
  NoticeBar,
  Progress,
  SegmentedControl,
  Separator,
  Stack,
  Statistic,
  Switch,
  Tag,
  Text,
  toast,
} from '@adit_firdaus/may-ui'
import {
  IoAppsOutline,
  IoCheckmarkCircle,
  IoCodeSlashOutline,
  IoColorPaletteOutline,
  IoCompassOutline,
  IoCubeOutline,
  IoHardwareChipOutline,
  IoHeartOutline,
  IoInformationCircleOutline,
  IoLogoApple,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMoonOutline,
  IoPersonOutline,
  IoRocketOutline,
  IoSchoolOutline,
  IoSparklesOutline,
  IoSunnyOutline,
  IoTerminalOutline,
} from 'react-icons/io5'
import './App.css'

type TabKey = 'projects' | 'academy' | 'skills' | 'lab'
type ThemeMode = 'system' | 'light' | 'dark'

export function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system')
  const [activeTab, setActiveTab] = useState<TabKey>('projects')
  const [sampleText, setSampleText] = useState('Adit Firdaus · Apple Developer Academy')
  const [hapticEnabled, setHapticEnabled] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [counter, setCounter] = useState(26)
  const [showAlert, setShowAlert] = useState(true)

  // Sync document root data-may-theme attribute to ensure the whole viewport is consistent
  useEffect(() => {
    if (themeMode === 'system') {
      document.documentElement.removeAttribute('data-may-theme')
    } else {
      document.documentElement.setAttribute('data-may-theme', themeMode)
    }
  }, [themeMode])

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode)
    toast(`Appearance set to ${mode} mode`)
  }

  return (
    <MayProvider theme={themeMode}>
      <div className="portfolio-shell">
        <NavigationBar
          title="Adit Firdaus"
          subtitle="Apple Developer Academy @ BINUS · iOS & Web Engineer"
          largeTitle
          trailing={
            <div className="nav-actions">
              <Button
                variant={themeMode === 'system' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('system')}
                aria-label="System appearance"
              >
                <IoSparklesOutline />
              </Button>
              <Button
                variant={themeMode === 'light' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('light')}
                aria-label="Light appearance"
              >
                <IoSunnyOutline />
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('dark')}
                aria-label="Dark appearance"
              >
                <IoMoonOutline />
              </Button>
              <Button
                variant="tinted"
                size="sm"
                onClick={() => window.open('https://github.com/adit-firdaus', '_blank')}
                aria-label="GitHub Profile"
              >
                <IoLogoGithub />
              </Button>
              <Button
                variant="tinted"
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/in/adit-firdaus/', '_blank')}
                aria-label="LinkedIn Profile"
              >
                <IoLogoLinkedin />
              </Button>
            </div>
          }
        />

        <main className="portfolio-main">
          {/* Header Notice */}
          <NoticeBar
            tone="tint"
            icon={<IoLogoApple />}
            action={
              <Button
                variant="plain"
                size="sm"
                onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
              >
                Explore May UI
              </Button>
            }
          >
            Crafted with May UI (<a href="https://github.com/adit-firdaus/may-ui" target="_blank" rel="noreferrer" style={{ color: 'inherit', fontWeight: 600 }}>adit-firdaus/may-ui</a>) — Apple's design language as an authentic React system.
          </NoticeBar>

          {/* Hero Profile Card */}
          <Card padding="lg">
            <div className="hero-profile-row">
              <div className="hero-avatar-wrap">
                <Avatar name="Adit Firdaus" size="xl" />
              </div>
              <div className="hero-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <CardTitle style={{ margin: 0, fontSize: '1.75rem', fontWeight: 700 }}>
                    Adit Firdaus
                  </CardTitle>
                  <Badge tone="success" variant="tinted">Cohort 2026</Badge>
                </div>
                <Text tone="secondary" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>
                  Software Engineer & Apple Developer Academy Learner based in BSD, Greater Jakarta.
                  Crafting human-centered spatial, iOS, and web experiences with Apple Human Interface Guidelines and real spring motion.
                </Text>
                <div className="hero-badges">
                  <Badge tone="tint">Apple Developer Academy @ BINUS</Badge>
                  <Badge tone="neutral">iOS & visionOS</Badge>
                  <Badge tone="neutral">Creator of May UI</Badge>
                  <Badge tone="neutral">React 19 & TypeScript</Badge>
                </div>
                <div className="hero-actions">
                  <Button
                    variant="filled"
                    size="sm"
                    leadingIcon={<IoRocketOutline />}
                    onClick={() => {
                      setActiveTab('projects')
                      toast('Navigated to Featured Projects')
                    }}
                  >
                    View Featured Projects
                  </Button>
                  <Button
                    variant="tinted"
                    size="sm"
                    leadingIcon={<IoLogoGithub />}
                    onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
                  >
                    May UI Library
                  </Button>
                  <Button
                    variant="gray"
                    size="sm"
                    leadingIcon={<IoSchoolOutline />}
                    onClick={() => {
                      setActiveTab('academy')
                      toast('Navigated to Academy Journey')
                    }}
                  >
                    Academy Journey
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Primary Navigation Segmented Control */}
          <SegmentedControl<TabKey>
            fullWidth
            size="lg"
            value={activeTab}
            onValueChange={(val) => {
              setActiveTab(val)
              window.scrollTo({ top: 120, behavior: 'smooth' })
            }}
            options={[
              { label: 'Featured Projects', value: 'projects' },
              { label: 'Academy Journey', value: 'academy' },
              { label: 'Skills & Tech', value: 'skills' },
              { label: 'May UI Lab', value: 'lab' },
            ]}
          />

          {/* TAB: FEATURED PROJECTS */}
          {activeTab === 'projects' && (
            <Stack gap={5}>
              <div>
                <CardTitle style={{ fontSize: '1.4rem' }}>Featured Projects & Applications</CardTitle>
                <Text tone="secondary">
                  Native Apple ecosystem applications, cross-platform systems, and open-source tooling.
                </Text>
              </div>

              <div className="project-grid">
                {/* Project 1: May UI */}
                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="tint" variant="tinted">Open Source · v0.2.0</Badge>}>
                    <IconTile gradient="blue" size="lg"><IoSparklesOutline /></IconTile>
                    <CardTitle>May UI</CardTitle>
                    <CardDescription>Apple's design language as a native React library.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      An authentic Apple-native design system with 74 components across adaptive, desktop, and mobile forms.
                      Zero runtime CSS dependencies, CSS linear() damped oscillator spring curves, and token-first theming.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="tint" size="sm">React 19</Tag>
                      <Tag tone="neutral" size="sm">TypeScript</Tag>
                      <Tag tone="neutral" size="sm">CSS Linear Springs</Tag>
                      <Tag tone="neutral" size="sm">Token-First</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                      <Button
                        variant="filled"
                        size="sm"
                        style={{ flex: 1 }}
                        onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
                      >
                        GitHub Repo
                      </Button>
                      <Button
                        variant="tinted"
                        size="sm"
                        style={{ flex: 1 }}
                        onClick={() => window.open('https://adit-firdaus.github.io/may-ui/', '_blank')}
                      >
                        Docs & Catalog
                      </Button>
                    </div>
                  </CardFooter>
                </Card>

                {/* Project 2: SpatialFlow */}
                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="tint" variant="tinted">visionOS & iOS</Badge>}>
                    <IconTile gradient="purple" size="lg"><IoCubeOutline /></IconTile>
                    <CardTitle>SpatialFlow</CardTitle>
                    <CardDescription>Spatial ideation canvas & 3D thought mapping for Apple Vision Pro.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      Designed for immersive collaborative brainstorming. Utilizes RealityKit entity placement, hand gesture manipulation,
                      Spatial Audio anchoring, and CloudKit real-time synchronized canvas.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="tint" size="sm">Swift 6</Tag>
                      <Tag tone="neutral" size="sm">SwiftUI</Tag>
                      <Tag tone="neutral" size="sm">RealityKit</Tag>
                      <Tag tone="neutral" size="sm">ARKit</Tag>
                      <Tag tone="neutral" size="sm">CloudKit</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="tinted"
                      size="sm"
                      fullWidth
                      onClick={() => toast.success('SpatialFlow visionOS demo launched in simulator!')}
                    >
                      Explore Spatial Prototype
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 3: PulseHabit */}
                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="success" variant="tinted">iOS 18 & watchOS</Badge>}>
                    <IconTile gradient="green" size="lg"><IoHeartOutline /></IconTile>
                    <CardTitle>PulseHabit</CardTitle>
                    <CardDescription>Intelligent habit builder synchronized with Apple Health data.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      Analyzes HRV, resting heart rate, and circadian rhythms to recommend optimal focus windows.
                      Features interactive Lock Screen widgets, Control Center controls, and Apple Watch complications.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="success" size="sm">HealthKit</Tag>
                      <Tag tone="neutral" size="sm">WidgetKit</Tag>
                      <Tag tone="neutral" size="sm">SwiftData</Tag>
                      <Tag tone="neutral" size="sm">watchOS</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="tinted"
                      size="sm"
                      fullWidth
                      onClick={() => toast.success('TestFlight access invitation requested!')}
                    >
                      Request TestFlight Build
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project 4: aditfirdaus-ada Hub */}
                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="warning" variant="tinted">Portfolio Site</Badge>}>
                    <IconTile gradient="orange" size="lg"><IoTerminalOutline /></IconTile>
                    <CardTitle>aditfirdaus-ada</CardTitle>
                    <CardDescription>Apple Developer Academy portfolio powered by Vite & May UI.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      The live portfolio you are browsing right now! Automatically deployed to GitHub Pages via GitHub Actions CI/CD,
                      fully responsive, accessible, and adhering to Apple's Human Interface Guidelines.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="warning" size="sm">React 19</Tag>
                      <Tag tone="neutral" size="sm">May UI</Tag>
                      <Tag tone="neutral" size="sm">Vite</Tag>
                      <Tag tone="neutral" size="sm">GitHub Pages</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="tinted"
                      size="sm"
                      fullWidth
                      onClick={() => window.open('https://github.com/adit-firdaus/aditfirdaus-ada', '_blank')}
                    >
                      View Source Code
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Stack>
          )}

          {/* TAB: ACADEMY JOURNEY */}
          {activeTab === 'academy' && (
            <Stack gap={5}>
              <div>
                <CardTitle style={{ fontSize: '1.4rem' }}>Apple Developer Academy Journey</CardTitle>
                <Text tone="secondary">
                  Challenge Based Learning (CBL) progression, milestone achievements, and cohort deliverables at Apple Developer Academy @ BINUS (BSD City, Indonesia).
                </Text>
              </div>

              <div className="stat-grid">
                <Card padding="md">
                  <Statistic
                    label="Nano Challenges"
                    value="3 / 3"
                    delta="+100% Completed"
                    direction="up"
                    trailing={<IconTile gradient="blue"><IoCheckmarkCircle /></IconTile>}
                  />
                </Card>
                <Card padding="md">
                  <Statistic
                    label="Mini Challenges"
                    value="2 / 2"
                    delta="SwiftUI & visionOS"
                    direction="up"
                    trailing={<IconTile gradient="purple"><IoAppsOutline /></IconTile>}
                  />
                </Card>
                <Card padding="md">
                  <Statistic
                    label="Macro Challenge"
                    value="Phase 2"
                    delta="In Progress"
                    direction="flat"
                    trailing={<IconTile gradient="orange"><IoRocketOutline /></IconTile>}
                  />
                </Card>
                <Card padding="md">
                  <Statistic
                    label="App Store Ready"
                    value="v1.0"
                    unit="build"
                    delta="Target Nov '26"
                    direction="flat"
                    trailing={<IconTile gradient="green"><IoHardwareChipOutline /></IconTile>}
                  />
                </Card>
              </div>

              <Card padding="lg">
                <CardHeader accessory={<Badge tone="success" variant="tinted">78% Milestones Reached</Badge>}>
                  <CardTitle>Graduation Readiness & Challenge Progress</CardTitle>
                  <CardDescription>
                    Tracking competencies across Coding, Design, and Professional skills through the 10-month intensive academy program.
                  </CardDescription>
                </CardHeader>
                <CardBody>
                  <Progress value={78} max={100} label="Academy Graduation Milestone" showValue />
                </CardBody>
              </Card>

              <Accordion
                type="single"
                collapsible
                header={<Text variant="caption-1" weight="semibold">CHALLENGE BASED LEARNING (CBL) PHASES</Text>}
                footer={<Text variant="footnote" tone="secondary">Apple's problem-solving framework used to create authentic, scalable software solutions.</Text>}
              >
                <AccordionItem
                  value="engage"
                  title="1. Engage Phase — Big Idea & Essential Question"
                  subtitle="Problem Discovery & User Empathy"
                  leading={<IconTile gradient="pink"><IoCompassOutline /></IconTile>}
                  detail="Complete"
                >
                  <Text tone="secondary">
                    Learners identify real-world community issues, conduct stakeholder interviews, and formulate a compelling Essential Question.
                    Through collaborative consensus, the team frames an actionable challenge focused on real user needs.
                  </Text>
                </AccordionItem>

                <AccordionItem
                  value="investigate"
                  title="2. Investigate Phase — Guiding Questions & Field Research"
                  subtitle="Prototyping & Technology Exploration"
                  leading={<IconTile gradient="teal"><IoTerminalOutline /></IconTile>}
                  detail="Complete"
                >
                  <Text tone="secondary">
                    Conducting in-depth domain research, competitive benchmarking, accessibility evaluations, and rapid prototyping.
                    Validating concepts with Swift, SwiftUI, and HIG guidelines through iterative user testing sessions.
                  </Text>
                </AccordionItem>

                <AccordionItem
                  value="act"
                  title="3. Act Phase — Implementation, TestFlight & Showcase"
                  subtitle="Production Engineering & Pitch"
                  leading={<IconTile gradient="indigo"><IoRocketOutline /></IconTile>}
                  detail="In Progress"
                >
                  <Text tone="secondary">
                    Building the full iOS/visionOS production application, distributing TestFlight beta builds to real users, iterating on user feedback,
                    and preparing final keynote presentations for Apple mentors and industry leaders.
                  </Text>
                </AccordionItem>
              </Accordion>

              <List
                header={<Text variant="caption-1" weight="semibold">ACADEMY CORE PILLARS</Text>}
                footer={<Text variant="footnote" tone="secondary">The three foundation competencies evaluated throughout the academy.</Text>}
              >
                <ListRow
                  leading={<IconTile gradient="blue"><IoCodeSlashOutline /></IconTile>}
                  title="Coding & Technical Architecture"
                  subtitle="Swift 6, SwiftUI, Concurrency, SwiftData, CoreML, Spatial RealityKit"
                  detail="Advanced"
                />
                <ListRow
                  leading={<IconTile gradient="purple"><IoColorPaletteOutline /></IconTile>}
                  title="Design & Human Interface Guidelines"
                  subtitle="Apple Design Awards principles, tactile interaction, accessibility & typography"
                  detail="Exemplary"
                />
                <ListRow
                  leading={<IconTile gradient="orange"><IoPersonOutline /></IconTile>}
                  title="Professional Skills & Leadership"
                  subtitle="Agile Scrum cadence, cross-functional pitching, storytelling & collaboration"
                  detail="Active"
                />
              </List>
            </Stack>
          )}

          {/* TAB: SKILLS & TECH */}
          {activeTab === 'skills' && (
            <Stack gap={5}>
              <div>
                <CardTitle style={{ fontSize: '1.4rem' }}>Skills & Technical Competencies</CardTitle>
                <Text tone="secondary">
                  Tooling, programming languages, frameworks, and design methodologies mastered.
                </Text>
              </div>

              <div className="skill-grid">
                <Card padding="md">
                  <CardHeader>
                    <IconTile gradient="blue"><IoLogoApple /></IconTile>
                    <CardTitle>iOS & Apple Ecosystem</CardTitle>
                    <CardDescription>Native Apple platforms and frameworks</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={2}>
                      <Text weight="semibold">Swift 6 & SwiftUI</Text>
                      <Text tone="secondary" variant="footnote">Declarative UI, State & Binding, Swift Concurrency</Text>
                      <Separator />
                      <Text weight="semibold">visionOS & RealityKit</Text>
                      <Text tone="secondary" variant="footnote">Spatial computing, Windows, Volumes, Immersive Spaces</Text>
                      <Separator />
                      <Text weight="semibold">Apple Frameworks</Text>
                      <Text tone="secondary" variant="footnote">HealthKit, WidgetKit, SwiftData, CoreML, CloudKit</Text>
                    </Stack>
                  </CardBody>
                </Card>

                <Card padding="md">
                  <CardHeader>
                    <IconTile gradient="purple"><IoCodeSlashOutline /></IconTile>
                    <CardTitle>Web & Frontend Engineering</CardTitle>
                    <CardDescription>Modern web standards & design systems</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={2}>
                      <Text weight="semibold">React 19 & TypeScript</Text>
                      <Text tone="secondary" variant="footnote">Modern hooks, Server Components, strict type safety</Text>
                      <Separator />
                      <Text weight="semibold">May UI Design System</Text>
                      <Text tone="secondary" variant="footnote">Authored full Apple HIG React library with real springs</Text>
                      <Separator />
                      <Text weight="semibold">Build & Performance</Text>
                      <Text tone="secondary" variant="footnote">Vite, Next.js, GitHub Actions CI/CD, CSS Linear curves</Text>
                    </Stack>
                  </CardBody>
                </Card>

                <Card padding="md">
                  <CardHeader>
                    <IconTile gradient="orange"><IoColorPaletteOutline /></IconTile>
                    <CardTitle>Design & Product Thinking</CardTitle>
                    <CardDescription>Human factors & design leadership</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={2}>
                      <Text weight="semibold">Apple HIG & Design Principles</Text>
                      <Text tone="secondary" variant="footnote">Tactile feedback, hierarchy, fluidity, Apple Design Awards</Text>
                      <Separator />
                      <Text weight="semibold">Accessibility First</Text>
                      <Text tone="secondary" variant="footnote">VoiceOver compatibility, Dynamic Type, High Contrast</Text>
                      <Separator />
                      <Text weight="semibold">Challenge Based Learning (CBL)</Text>
                      <Text tone="secondary" variant="footnote">User interviews, usability testing, iterative sprint reviews</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            </Stack>
          )}

          {/* TAB: MAY UI LAB */}
          {activeTab === 'lab' && (
            <Stack gap={5}>
              {showAlert && (
                <Alert
                  tone="tint"
                  title="May UI Interactive Sandbox"
                  icon={<IoInformationCircleOutline />}
                  onDismiss={() => setShowAlert(false)}
                >
                  Experience the actual May UI component library in action. Zero runtime CSS imports, authentic damped-oscillator springs, and Apple HIG tokens.
                </Alert>
              )}

              <div className="project-grid">
                <Card padding="md">
                  <CardHeader>
                    <CardTitle>Button System & States</CardTitle>
                    <CardDescription>Authentic corner radiuses and touch feedback</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={3}>
                      <Button
                        variant="filled"
                        fullWidth
                        onClick={() => {
                          const next = counter + 1
                          setCounter(next)
                          toast.success(`Counter increased to ${next}`)
                        }}
                      >
                        Filled Button ({counter})
                      </Button>
                      <Button
                        variant="tinted"
                        fullWidth
                        onClick={() => {
                          const next = counter + 5
                          setCounter(next)
                          toast(`Counter jumped by +5 to ${next}`)
                        }}
                      >
                        Tinted Button (+5)
                      </Button>
                      <Button
                        variant="gray"
                        fullWidth
                        onClick={() => {
                          setCounter(0)
                          toast('Counter reset to 0')
                        }}
                      >
                        Gray Reset Button
                      </Button>
                      <Button
                        variant="plain"
                        tone="danger"
                        fullWidth
                        onClick={() => toast.danger('Destructive action triggered')}
                      >
                        Plain Destructive Button
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>

                <Card padding="md">
                  <CardHeader>
                    <CardTitle>Reactive Form Controls</CardTitle>
                    <CardDescription>Managed inputs and token toggles</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={3}>
                      <Field label="Interactive Text Field" description="Updates the live reactive container below">
                        <Input
                          value={sampleText}
                          onChange={(e) => setSampleText(e.target.value)}
                          placeholder="Type anything..."
                        />
                      </Field>
                      <div className="interactive-preview-box">
                        <Text variant="caption-1" tone="secondary">LIVE PREVIEW</Text>
                        <Text weight="semibold">{sampleText || '(Empty string)'}</Text>
                      </div>
                      <Separator />
                      <Stack gap={2}>
                        <Switch
                          checked={hapticEnabled}
                          onChange={(e) => {
                            setHapticEnabled(e.target.checked)
                            toast(e.target.checked ? 'Haptic feedback simulated' : 'Haptics muted')
                          }}
                        >
                          Enable Haptic Feedback
                        </Switch>
                        <Checkbox
                          checked={reducedMotion}
                          onChange={(e) => {
                            setReducedMotion(e.target.checked)
                            toast(e.target.checked ? 'Reduced motion preference on' : 'Full springs active')
                          }}
                        >
                          Respect Reduced Motion
                        </Checkbox>
                      </Stack>
                    </Stack>
                  </CardBody>
                </Card>

                <Card padding="md">
                  <CardHeader>
                    <CardTitle>Spring Indicators & Metrics</CardTitle>
                    <CardDescription>Compositor-driven progress and badges</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={4}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <CircularProgress value={counter % 100} size="lg" showValue />
                        <CircularProgress indeterminate size="md" />
                      </div>
                      <Progress value={counter % 100} label="Dynamic Progress" showValue />
                      <Separator />
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Badge tone="tint">Active</Badge>
                        <Badge tone="success">Success</Badge>
                        <Badge tone="warning">Warning</Badge>
                        <Badge tone="danger">Critical</Badge>
                      </div>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            </Stack>
          )}

          {/* Footer */}
          <footer className="footer-section">
            <Separator />
            <Text tone="secondary" variant="footnote">
              Designed & developed by <strong>Adit Firdaus</strong> · Apple Developer Academy @ BINUS (BSD City)
            </Text>
            <div className="footer-links">
              <a href="https://github.com/adit-firdaus" target="_blank" rel="noreferrer">
                GitHub (@adit-firdaus)
              </a>
              <a href="https://github.com/adit-firdaus/may-ui" target="_blank" rel="noreferrer">
                May UI Design System
              </a>
              <a href="https://github.com/adit-firdaus/aditfirdaus-ada" target="_blank" rel="noreferrer">
                Repository
              </a>
              <a href="https://www.linkedin.com/in/adit-firdaus/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <Text tone="tertiary" variant="caption-2">
              Powered by React 19, Vite, and @adit_firdaus/may-ui · Deployed to GitHub Pages
            </Text>
          </footer>
        </main>
      </div>
    </MayProvider>
  )
}

export default App
