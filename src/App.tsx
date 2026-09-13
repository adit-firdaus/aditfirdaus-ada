import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  Alert,
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
  IoHardwareChipOutline,
  IoInformationCircleOutline,
  IoLogoApple,
  IoLogoGithub,
  IoMoonOutline,
  IoNotificationsOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
  IoRocketOutline,
  IoSparklesOutline,
  IoSunnyOutline,
  IoTerminalOutline,
  IoTimeOutline,
} from 'react-icons/io5'
import './App.css'

type TabKey = 'overview' | 'projects' | 'components' | 'settings'
type ThemeMode = 'system' | 'light' | 'dark'

export function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system')
  const [activeTab, setActiveTab] = useState<TabKey>('overview')
  const [sampleText, setSampleText] = useState('Apple Developer Academy')
  const [hapticEnabled, setHapticEnabled] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [counter, setCounter] = useState(42)
  const [showAlert, setShowAlert] = useState(true)

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode)
    toast(`Switched theme to ${mode} mode`)
  }

  return (
    <MayProvider theme={themeMode}>
      <div className="app-container">
        <NavigationBar
          title="Apple Developer Academy"
          subtitle="Portfolio & Hub · aditfirdaus-ada"
          largeTitle
          trailing={
            <div className="theme-button-group">
              <Button
                variant={themeMode === 'system' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('system')}
                aria-label="System theme"
              >
                <IoSparklesOutline />
              </Button>
              <Button
                variant={themeMode === 'light' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('light')}
                aria-label="Light theme"
              >
                <IoSunnyOutline />
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'filled' : 'gray'}
                size="sm"
                onClick={() => handleThemeChange('dark')}
                aria-label="Dark theme"
              >
                <IoMoonOutline />
              </Button>
              <Button
                variant="tinted"
                size="sm"
                onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
                aria-label="View May UI on GitHub"
              >
                <IoLogoGithub />
              </Button>
            </div>
          }
        />

        <div className="content-wrapper">
          <NoticeBar
            tone="tint"
            icon={<IoLogoApple />}
            action={
              <Button
                variant="plain"
                size="sm"
                onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
              >
                GitHub
              </Button>
            }
          >
            Powered by May UI (<a href="https://github.com/adit-firdaus/may-ui" target="_blank" rel="noreferrer" style={{ color: 'inherit', fontWeight: 600 }}>adit-firdaus/may-ui</a>) — Apple's design language as a React library.
          </NoticeBar>

          <SegmentedControl<TabKey>
            fullWidth
            size="lg"
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            options={[
              { label: 'Overview', value: 'overview' },
              { label: 'Projects', value: 'projects' },
              { label: 'May UI Lab', value: 'components' },
              { label: 'Settings', value: 'settings' },
            ]}
          />

          {activeTab === 'overview' && (
            <Stack gap={5}>
              <div className="stat-grid">
                <Card padding="md">
                  <Statistic
                    label="Nano Challenges"
                    value="3 / 3"
                    delta="Completed"
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
                <CardHeader accessory={<Badge tone="success" variant="tinted">78% Milestones</Badge>}>
                  <CardTitle>Academy Graduation Journey</CardTitle>
                  <CardDescription>
                    Progress through Challenge Based Learning (CBL) milestones, domain competencies, and team deliverables.
                  </CardDescription>
                </CardHeader>
                <CardBody>
                  <Progress value={78} max={100} label="Curriculum & Challenge Completion" showValue />
                </CardBody>
              </Card>

              <Accordion
                type="single"
                collapsible
                header={<Text variant="caption-1" weight="semibold">CHALLENGE BASED LEARNING (CBL) FRAMEWORK</Text>}
                footer={<Text variant="footnote" tone="secondary">Apple's pedagogical framework guiding all academy project cycles.</Text>}
              >
                <AccordionItem
                  value="engage"
                  title="1. Engage Phase"
                  subtitle="Big Idea & Essential Question"
                  leading={<IconTile gradient="pink"><IoCompassOutline /></IconTile>}
                  detail="Defined"
                >
                  <Text tone="secondary">
                    Learners identify a global challenge and formulate an actionable Essential Question. Through community interviews and problem validation, the team converges on a single challenge statement.
                  </Text>
                </AccordionItem>

                <AccordionItem
                  value="investigate"
                  title="2. Investigate Phase"
                  subtitle="Guiding Questions & Research"
                  leading={<IconTile gradient="teal"><IoTerminalOutline /></IconTile>}
                  detail="Validated"
                >
                  <Text tone="secondary">
                    In-depth user research, competitor bench-marking, accessibility evaluations, and rapid prototyping using Swift, SwiftUI, and HIG principles.
                  </Text>
                </AccordionItem>

                <AccordionItem
                  value="act"
                  title="3. Act Phase"
                  subtitle="Solution Design, Implementation & Pitch"
                  leading={<IconTile gradient="indigo"><IoRocketOutline /></IconTile>}
                  detail="Current"
                >
                  <Text tone="secondary">
                    Developing the production iOS/visionOS application, conducting usability testing sessions, submitting TestFlight builds, and presenting the final showcase to industry leaders.
                  </Text>
                </AccordionItem>
              </Accordion>

              <List
                header={<Text variant="caption-1" weight="semibold">CORE ACADEMY PILLARS</Text>}
                footer={<Text variant="footnote" tone="secondary">Competencies evaluated throughout the 10-month program.</Text>}
              >
                <ListRow
                  leading={<IconTile gradient="blue"><IoCodeSlashOutline /></IconTile>}
                  title="Technical Proficiency"
                  subtitle="Swift, SwiftUI, UIKit, CoreML, Spatial Computing"
                  detail="Advanced"
                />
                <ListRow
                  leading={<IconTile gradient="purple"><IoColorPaletteOutline /></IconTile>}
                  title="Design & HIG"
                  subtitle="Apple Design Awards principles, iOS/macOS human factors"
                  detail="Exemplary"
                />
                <ListRow
                  leading={<IconTile gradient="orange"><IoPersonOutline /></IconTile>}
                  title="Professional Skills"
                  subtitle="Agile sprint cadence, cross-functional pitching & storytelling"
                  detail="Active"
                />
              </List>
            </Stack>
          )}

          {activeTab === 'projects' && (
            <Stack gap={5}>
              <div>
                <CardTitle>Cohort Applications & Prototypes</CardTitle>
                <Text tone="secondary">
                  Native Apple ecosystem applications built during individual and collaborative academy sprints.
                </Text>
              </div>

              <div className="project-grid">
                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="tint" variant="tinted">visionOS</Badge>}>
                    <IconTile gradient="purple" size="lg"><IoSparklesOutline /></IconTile>
                    <CardTitle>SpatialFlow</CardTitle>
                    <CardDescription>Mind-mapping & collaborative spatial canvas for Apple Vision Pro.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      Leverages RealityKit and Spatial Audio to arrange multi-window thoughts in physical space with hand-tracking gestures.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="tint" size="sm">SwiftUI</Tag>
                      <Tag tone="neutral" size="sm">RealityKit</Tag>
                      <Tag tone="neutral" size="sm">ARKit</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="tinted"
                      size="sm"
                      fullWidth
                      onClick={() => toast.success('SpatialFlow visionOS preview initialized!')}
                    >
                      Explore Prototype
                    </Button>
                  </CardFooter>
                </Card>

                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="success" variant="tinted">iOS 18</Badge>}>
                    <IconTile gradient="blue" size="lg"><IoPhonePortraitOutline /></IconTile>
                    <CardTitle>PulseHabit</CardTitle>
                    <CardDescription>Intelligent habit builder synchronized with Apple Health data.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      Analyzes HRV and circadian cycles to suggest optimal time windows for deep work and mindfulness rituals.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="success" size="sm">HealthKit</Tag>
                      <Tag tone="neutral" size="sm">SwiftData</Tag>
                      <Tag tone="neutral" size="sm">Widgets</Tag>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant="tinted"
                      size="sm"
                      fullWidth
                      onClick={() => toast.success('TestFlight invitation requested!')}
                    >
                      Request TestFlight
                    </Button>
                  </CardFooter>
                </Card>

                <Card padding="lg" className="project-card">
                  <CardHeader accessory={<Badge tone="warning" variant="tinted">Web & HIG</Badge>}>
                    <IconTile gradient="orange" size="lg"><IoTerminalOutline /></IconTile>
                    <CardTitle>aditfirdaus-ada</CardTitle>
                    <CardDescription>Academy hub powered by Vite, React 19, and May UI design system.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Text tone="secondary">
                      This exact web app! Deployed automatically to GitHub Pages via GitHub Actions with pure Apple design cues.
                    </Text>
                    <div className="project-tags">
                      <Tag tone="warning" size="sm">React 19</Tag>
                      <Tag tone="neutral" size="sm">May UI</Tag>
                      <Tag tone="neutral" size="sm">TypeScript</Tag>
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

          {activeTab === 'components' && (
            <Stack gap={5}>
              {showAlert && (
                <Alert
                  tone="tint"
                  title="May UI Interactive Sandbox"
                  icon={<IoInformationCircleOutline />}
                  onDismiss={() => setShowAlert(false)}
                >
                  May UI components feature zero external CSS imports, native spring physics, and strict Apple HIG tokens.
                </Alert>
              )}

              <div className="showcase-grid">
                <Card padding="md">
                  <CardHeader>
                    <CardTitle>Buttons & Variants</CardTitle>
                    <CardDescription>iOS-standard corner curvatures and press states.</CardDescription>
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
                    <CardTitle>Live Inputs & Form Controls</CardTitle>
                    <CardDescription>Connected with May UI Field wrapper.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={3}>
                      <Field label="Interactive Text Field" description="Updates the live preview container below">
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
                            toast(e.target.checked ? 'Haptic feedback enabled' : 'Haptic feedback disabled')
                          }}
                        >
                          Enable Haptic Feedback
                        </Switch>
                        <Checkbox
                          checked={reducedMotion}
                          onChange={(e) => {
                            setReducedMotion(e.target.checked)
                            toast(e.target.checked ? 'Reduced motion enabled' : 'Reduced motion disabled')
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
                    <CardTitle>Indicators & Progress</CardTitle>
                    <CardDescription>Activity indicators and status badges.</CardDescription>
                  </CardHeader>
                  <CardBody>
                    <Stack gap={4}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <CircularProgress value={counter % 100} size="lg" showValue />
                        <CircularProgress indeterminate size="md" />
                      </div>
                      <Progress value={counter % 100} label="Dynamic Spring Meter" showValue />
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

          {activeTab === 'settings' && (
            <Stack gap={5}>
              <List
                header={<Text variant="caption-1" weight="semibold">PREFERENCES & APPEARANCE</Text>}
                footer={<Text variant="footnote" tone="secondary">Theme overrides can be configured globally or per-subtree.</Text>}
              >
                <ListRow
                  leading={<IconTile gradient="blue"><IoColorPaletteOutline /></IconTile>}
                  title="Interface Appearance"
                  subtitle="Controlled by MayProvider theme config"
                  detail={themeMode.toUpperCase()}
                  onClick={() => {
                    const next: ThemeMode = themeMode === 'system' ? 'light' : themeMode === 'light' ? 'dark' : 'system'
                    handleThemeChange(next)
                  }}
                  chevron
                />
                <ListRow
                  leading={<IconTile gradient="green"><IoNotificationsOutline /></IconTile>}
                  title="Academy Notifications"
                  subtitle="Daily standup reminders & challenge alerts"
                  accessory={
                    <Switch
                      checked={notificationsEnabled}
                      onChange={(e) => {
                        setNotificationsEnabled(e.target.checked)
                        toast(e.target.checked ? 'Notifications active' : 'Notifications muted')
                      }}
                      aria-label="Toggle notifications"
                    />
                  }
                />
                <ListRow
                  leading={<IconTile gradient="purple"><IoTimeOutline /></IconTile>}
                  title="Simulate Spring Latency"
                  subtitle="Damped-oscillator CSS linear() curves"
                  detail="Active"
                />
              </List>

              <List
                header={<Text variant="caption-1" weight="semibold">REPOSITORY & RUNTIME</Text>}
                footer={<Text variant="footnote" tone="secondary">Vite 8 · React 19 · @adit_firdaus/may-ui 0.2.0 · GitHub Pages CI/CD</Text>}
              >
                <ListRow
                  leading={<IconTile gradient="gray"><IoLogoGithub /></IconTile>}
                  title="May UI Repository"
                  subtitle="adit-firdaus/may-ui"
                  detail="GitHub"
                  onClick={() => window.open('https://github.com/adit-firdaus/may-ui', '_blank')}
                  chevron
                />
                <ListRow
                  leading={<IconTile gradient="blue"><IoLogoGithub /></IconTile>}
                  title="This App Repository"
                  subtitle="adit-firdaus/aditfirdaus-ada"
                  detail="GitHub"
                  onClick={() => window.open('https://github.com/adit-firdaus/aditfirdaus-ada', '_blank')}
                  chevron
                />
                <ListRow
                  leading={<IconTile gradient="indigo"><IoRocketOutline /></IconTile>}
                  title="May UI npm Package"
                  subtitle="@adit_firdaus/may-ui"
                  detail="v0.2.0"
                  onClick={() => window.open('https://www.npmjs.com/package/@adit_firdaus/may-ui', '_blank')}
                  chevron
                />
              </List>
            </Stack>
          )}
        </div>
      </div>
    </MayProvider>
  )
}

export default App
