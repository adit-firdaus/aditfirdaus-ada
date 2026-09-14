/**
 * Single source of truth for the CV and the Portfolio documents.
 * Edit here — both the live site and the printed PDF read from this file.
 */

export const profile = {
  legalName: 'Raditya Rakha Firdaus Muliyoto',
  knownAs: 'Adit Firdaus',
  title: 'SWE @ AutoBricksAI and HexCore Labs Pte. Ltd.',
  location: 'Central Jakarta, ID',
  email: 'aditfirdaus.dml@gmail.com',
  phone: '[PHONE]',
  links: [
    { label: 'linkedin.com/in/adit-firdaus', href: 'https://www.linkedin.com/in/adit-firdaus/' },
    { label: 'github.com/adit-firdaus', href: 'https://github.com/adit-firdaus' },
    { label: 'adit-firdaus.itch.io', href: 'https://adit-firdaus.itch.io/' },
  ],
  objective:
    'Hi, nice to meet you :). Call me Adit. I have passion in technology since 4th Elementary, I like to build and re-create things on my own to understand them better. I create my own tools and projects, mainly for the dev community. I do freelance and full-time. If you’re interested to know me better, don’t hesitate to call me. I’m available at any time',
}

/** The plate a transparent logo was drawn for. */
export type LogoBackground = 'white' | 'black' | 'yellow'

export type Job = {
  /** Stable key for saved edits. Never reuse or renumber it. */
  id: string
  role: string
  org: string
  /** File in public/logo, without extension. Omit to show no mark at all. */
  logo?: string
  /** The plate the mark was drawn for. */
  logoBg?: LogoBackground
  place?: string
  period: string
  points: string[]
}

export const experience: Job[] = [
  {
    id: 'autobricks-ai',
    logoBg: 'white',
    role: 'Software Engineer',
    org: 'Autobricks AI',
    logo: 'autobricks',
    place: 'Remote',
    period: '2026 — Present',
    points: [
      'Engineering work across an IT services and agentic-AI consultancy.',
      'Maintain the public container registry and installer for the in-house agent family.',
    ],
  },
  {
    id: 'hexcore-labs-pte-ltd',
    logoBg: 'black',
    role: 'Software Developer',
    org: 'Hexcore Labs Pte. Ltd.',
    logo: 'hexcore',
    place: 'Singapore',
    period: 'Dec 2025 — Present',
    points: [
      'Build software for gamified cybersecurity education, including the AgentHex platform.',
      'Work on CTF infrastructure and the tooling that supports it.',
    ],
  },
  {
    id: 'pt-mastah-digital-indonesia',
    logoBg: 'white',
    role: 'Software Developer',
    org: 'PT Mastah Digital Indonesia',
    logo: 'mastah',
    period: 'Oct — Dec 2025',
    points: ['Delivered client-facing product work on a short engagement.'],
  },
  {
    id: 'pt-altern-digital-technologies',
    role: 'Founder & Chief Executive Officer',
    org: 'PT Altern Digital Technologies',
    period: 'Mar 2023 — Present',
    points: [
      'Founded a studio delivering custom software, web platforms and IT consulting.',
      'Responsible for technical direction and for shipping client work end to end.',
    ],
  },
  {
    id: 'global-multimedia-school',
    logoBg: 'white',
    role: 'Flutter Developer',
    org: 'Global Multimedia School',
    logo: 'gmcs',
    period: 'Jul 2023 — Jul 2024',
    points: ['Built cross-platform mobile applications in Flutter for the school’s own products.'],
  },
  {
    id: 'pt-halo-industri-digital',
    logoBg: 'white',
    role: 'XR Developer',
    org: 'PT Halo Industri Digital (HiDigi)',
    logo: 'hidigi',
    period: 'Oct 2022 — Jul 2024',
    points: [
      'Developed extended-reality experiences — 3D interaction, spatial interfaces and real-time rendering.',
    ],
  },
  {
    id: 'floramis',
    logoBg: 'white',
    role: 'Multimedia Intern',
    org: 'Floramis',
    logo: 'floramis',
    place: 'Singapore · Remote',
    period: 'Aug — Oct 2024',
    points: ['Produced multimedia assets for a Singapore-based team while working remotely from Indonesia.'],
  },
]

export type School = {
  id: string
  school: string
  logo?: string
  logoBg?: LogoBackground
  place: string
  detail: string
  period: string
}

export const education: School[] = [
  {
    id: 'nexford-university',
    logoBg: 'yellow',
    school: 'Nexford University',
    logo: 'nexford',
    place: 'United States · Online',
    detail: 'Current programme',
    period: 'Present',
  },
  {
    id: 'global-multimedia-creative-school',
    logoBg: 'white',
    school: 'Global Multimedia Creative School',
    logo: 'gmcs',
    place: 'Indonesia',
    detail: 'Multimedia · Grades 10–12',
    period: '2022 — 2025',
  },
  {
    id: 'smk-prestasi-prima',
    logoBg: 'white',
    school: 'SMK Prestasi Prima',
    logo: 'prestasiprima',
    place: 'Jakarta, Indonesia',
    detail: 'Game Development — KKSI 2021 national programme',
    period: '2021',
  },
  {
    id: 'mtsn-2-jepara',
    logoBg: 'white',
    school: 'MTsN 2 Jepara',
    logo: 'mtsn2jepara',
    place: 'Jepara, Indonesia',
    detail: 'Lower secondary',
    period: 'to 2020',
  },
]

export type Award = {
  id: string
  title: string
  logo?: string
  logoBg?: LogoBackground
  detail: string
  year: string
}

export const awards: Award[] = [
  {
    id: '3rd-place-kksi',
    logoBg: 'white',
    title: '3rd Place — KKSI 2021 National Game Development',
    logo: 'prestasiprima',
    detail: 'For LOSARY, a two-person team I led as project leader.',
    year: 'Dec 2021',
  },
  {
    id: '2nd-winner-gacci',
    logoBg: 'white',
    title: '2nd Winner — GACCI 2022',
    logo: 'binus',
    detail: 'Bina Nusantara University (BINUS) creative competition.',
    year: 'Nov 2022',
  },
  {
    id: '3rd-place-lomba-cipta',
    logoBg: 'white',
    title: '3rd Place — Lomba Cipta Game Edukasi Pelatihan Vokasi',
    logo: 'kemnaker',
    detail: 'Ministry of Manpower, Republic of Indonesia (Kemnaker), for SOURCE.',
    year: 'Jul 2022',
  },
  {
    id: 'registrant-binus-high-school',
    logoBg: 'white',
    title: 'Registrant — BINUS High School Programming Competition',
    logo: 'binus',
    detail: 'Representing Global Multimedia Creative School.',
    year: '2024 — 2025',
  },
]

export type Extracurricular = {
  id: string
  role: string
  org: string
  logo?: string
  logoBg?: LogoBackground
  period: string
  detail: string
}

export const extracurricular: Extracurricular[] = [
  {
    id: 'marketing-communications',
    logoBg: 'white',
    role: 'Marketing Communications',
    org: 'Lions Clubs International, District 307-B1',
    logo: 'lions',
    period: 'Jul 2025 — Present',
    detail: 'Communications for a volunteer service organisation across the district.',
  },
  {
    id: 'participant-madrasah-vlog-competition',
    logoBg: 'white',
    role: 'Participant, Madrasah Vlog Competition 2020',
    org: 'MTsN 2 Jepara',
    logo: 'mtsn2jepara',
    period: '2020',
    detail: 'Entrant no. 444 — my first public piece of creative work.',
  },
]

/**
 * Built from two scans, not from memory.
 *
 * Every repository the account can reach — 251 of them, his own and the
 * Autobricks, Hexcore, Hi Klik, Mastah and HiDigi organisations — was read for
 * its languages by byte count and its manifests for their real dependencies.
 * Then the eleven servers he administers were checked for what is actually
 * running on them. Infra and Database below come from that second scan, so
 * they are things in production rather than things on a CV.
 */
export const skills = [
  {
    id: 'languages',
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C#', 'Dart', 'Go', 'Python'],
  },
  {
    id: 'web-front-end',
    group: 'Web Front End',
    items: [
      'React',
      'Next.js',
      'TanStack Start',
      'TanStack Query',
      'Tailwind CSS',
      'Ant Design',
      'Vite',
      'Storybook',
    ],
  },
  {
    id: 'web-backend',
    group: 'Web Backend',
    items: ['NestJS', 'tRPC', 'Hono', 'Express', 'Better Auth', 'Inngest', 'BullMQ'],
  },
  {
    id: 'games-xr',
    group: 'Games & XR',
    items: ['Unity', 'Three.js', 'Phaser', 'WebGL', 'HLSL shaders'],
  },
  { id: 'desktop', group: 'Desktop', items: ['Wails', 'Tauri', 'Electron'] },
  { id: 'mobile', group: 'Mobile', items: ['Flutter'] },
  {
    id: 'infra',
    group: 'Infra',
    items: [
      'Docker',
      'Traefik',
      'Nginx',
      'WireGuard',
      'Tailscale',
      'Portainer',
      'Cloudflare',
      'Vercel',
      'Debian',
    ],
  },
  {
    id: 'database',
    group: 'Database',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Drizzle ORM',
      'Prisma',
      'Redis',
      'pgvector',
      'Neon',
      'Supabase',
      'Firebase',
    ],
  },
  {
    id: 'ci-cd',
    group: 'CI/CD',
    items: ['GitHub Actions', 'Docker', 'GHCR', 'Inngest', 'Vitest', 'Playwright', 'Biome'],
  },
]

export type Project = {
  /** Stable key for saved edits. Never reuse or renumber it. */
  id: string
  n: string
  name: string
  /** Official mark in public/logo; falls back to an IconTile when absent. */
  logo?: string
  tagline: string
  year: string
  /** Short award ribbon shown on the project sheet. */
  award?: string
  /** The public repository, when there is one. Drives the open-source tag. */
  repo?: string
  /** Whether the source can be read. Private work is described, never linked. */
  visibility?: 'public' | 'private'
  /**
   * Carried into the printed portfolio. The Academy allows five projects, so
   * the site can grow past that while the document stays within the rule.
   */
  academy?: boolean
  image: string
  imageAlt: string
  kind: string
  role: string
  summary: string
  impact: string
  learned: string
  stack: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'smartschool',
    n: '01',
    name: 'SmartSchool',
    visibility: 'private',
    tagline: 'One platform for everything a school runs on',
    year: '2026 · Ongoing',
    image: 'media/smartschool.jpg',
    imageAlt: 'SmartSchool — school management platform',
    kind: 'Work · Hi Klik, for an education client',
    role: 'Sole engineer — architecture and every service, 717 commits',
    summary:
      'A school runs on more than a timetable, so SmartSchool carries the lot: messaging, attendance, grades, classwork, finance, admin timetabling and a canteen that takes orders and payments — on the web and as a Flutter progressive web app for phones.',
    impact:
      'Built and maintained alone across a Bun monorepo with its own internal packages for the database, the UI, the API contract, translations, push and storage. Migrations are gated at boot and a smoke suite runs against the real thing, so a bad deploy stops before it reaches a school rather than after.',
    learned:
      'That being the only engineer on something schools depend on daily changes what you build. The boot-time migration gate and the smoke suite exist because there is nobody else to catch a mistake — the system has to catch it for me.',
    stack: ['TypeScript', 'Next.js', 'tRPC', 'Drizzle ORM', 'PostgreSQL', 'Better Auth', 'Inngest', 'Flutter'],
    links: [],
  },
  {
    id: 'agent-lockdown',
    n: '02',
    name: 'Agent Lockdown',
    visibility: 'private',
    tagline: 'A cybersecurity competition you play rather than read',
    year: '2026',
    image: 'media/lockdown.jpg',
    imageAlt: 'Agent Lockdown — CTF competition platform',
    kind: 'Work · Hexcore Labs',
    role: 'Sole author of both halves — 380 of 381 web commits, and the Unity client',
    summary:
      'Competitors browse events and leaderboards, then drop into a full-screen multiplayer game where the security challenges actually live. Organisers run their own tenant: schedules, branding, participants.',
    impact:
      'Two products that have to agree — a Next.js platform and a Unity 6 game embedded in it — written end to end by one person, including the netcode, the JavaScript-to-Unity bridge and the map loading that joins them.',
    learned:
      'Where a web app ends and a game begins is a design decision, not a technical one. Getting the bridge between them right mattered more than anything inside either side.',
    stack: ['TypeScript', 'Next.js', 'C#', 'Unity', 'WebGL', 'Phaser', 'Drizzle ORM', 'PostgreSQL', 'Cloudflare'],
    links: [],
  },
  {
    id: 'arlo-ai',
    n: '03',
    name: 'Arlo AI',
    visibility: 'private',
    tagline: 'An assistant that answers customers, and says where it got the answer',
    year: '2026 · Ongoing',
    image: 'media/arlo.jpg',
    imageAlt: 'Arlo AI — customer service assistant',
    kind: 'Work · Autobricks AI',
    role: 'Lead contributor — messaging connectors and channel integrations',
    summary:
      'A workspace points Arlo at its own documents and website; Arlo then answers customers on whatever channel they arrived through, quoting the passage it relied on and handing over to a person when it should.',
    impact:
      'Answers are grounded in the workspace\u2019s own material through pgvector search, and every tenant is separated by row-level security rather than by application code remembering to filter. The citation and the handover are what make it safe to put in front of a customer.',
    learned:
      'An assistant that cannot show its source is not trustworthy, and one that cannot admit defeat is worse. Both are product decisions long before they are model decisions.',
    stack: ['TypeScript', 'TanStack Start', 'React', 'PostgreSQL', 'pgvector', 'Supabase', 'Zod'],
    links: [],
  },
  {
    id: 'altc',
    n: '04',
    name: 'altc',
    visibility: 'private',
    tagline: 'A coding workspace that keeps running when you close it',
    year: '2026 · Ongoing',
    image: 'media/altc.jpg',
    imageAlt: 'altc — local-first coding workspace',
    kind: 'Self-initiated',
    role: 'Sole author — server, three clients, and the agent protocol between them',
    summary:
      'One Bun process owns the terminals, the database and the coding-agent sessions; the web app, a Go desktop shell and a Flutter client are all just windows onto it. Terminals are detached, so they outlive the app that opened them.',
    impact:
      'Around 195 commits across a server, a web SPA, a Wails desktop shell and a Flutter client, with an Agent Client Protocol supervisor driving Claude, Codex and OpenCode sessions, and 40-odd architecture notes written alongside the code.',
    learned:
      'Local-first is mostly a question about ownership: who holds the process, and what survives a restart. Once terminals outlive the UI, everything above them gets simpler.',
    stack: ['TypeScript', 'Go', 'Hono', 'SQLite', 'React', 'TanStack Start', 'Flutter', 'Wails'],
    links: [],
  },
  {
    id: 'gmc-uncaged',
    n: '05',
    name: 'Uncaged Thyrios 2026',
    visibility: 'private',
    tagline: 'Registration for a school event, in production',
    year: '2026',
    image: 'media/uncaged.jpg',
    imageAlt: 'Uncaged Thyrios 2026 — event poster',
    kind: 'Work · Global Multimedia Creative School',
    role: 'Sole author — landing page, school portal and committee admin',
    summary:
      'A bilingual landing page, school registration, a portal for the schools taking part and an admin panel for the committee, live at uncaged.globalmultimedia.sch.id with a Flutter shell for Android.',
    impact:
      'Carries a build gate of its own that fails the bundle if server code ever leaks into the client, forward-only migrations, and audit-logged admin boundaries — discipline usually skipped on a project this size.',
    learned:
      'A check that fails the build is worth more than a rule nobody remembers. The server-code audit caught things review would have waved through.',
    stack: ['TypeScript', 'TanStack Start', 'React', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Better Auth', 'Flutter'],
    links: [],
  },
  {
    id: 'webxr',
    n: '06',
    name: 'WebXR Apartment Preview',
    visibility: 'private',
    tagline: 'Walk through a flat before it is built, with no app to install',
    year: '2026',
    image: 'media/webxr.jpg',
    imageAlt: 'WebXR apartment preview — panoramic living room',
    kind: 'Work · Hi Klik',
    role: 'Sole author — viewer, editor and dashboard',
    summary:
      'Buyers tour a unit in the browser on a phone, and staff build those tours themselves through an editor and dashboard rather than filing a ticket with a 3D team.',
    impact:
      'Mobile-first from the start: touch movement through an on-screen stick, panoramas streamed from object storage, and no install step between a listing and a walkthrough.',
    learned:
      'Three-dimensional work on the web lives or dies on the phone. Deciding that first ruled out most of the obvious approaches, which saved rebuilding it later.',
    stack: ['TypeScript', 'Next.js', 'Three.js', 'React', 'Drizzle ORM', 'PostgreSQL', 'Neon', 'Tailwind CSS'],
    links: [],
  },
  {
    id: 'audition',
    n: '07',
    name: 'Audition',
    visibility: 'private',
    tagline: 'A rhythm-game engine written from scratch',
    year: '2024',
    image: 'media/audition.jpg',
    imageAlt: 'Audition — Unity rhythm-game engine',
    kind: 'Self-initiated',
    role: 'Sole author',
    summary:
      'Not a rhythm game so much as the machinery under one: a chart format, a chart player, note sequences and generators, note skins, beat lines, scoring and a leaderboard, across lobby, menu and player scenes.',
    impact:
      'Twenty-six C# systems that together make new songs a data problem rather than a programming one — the point of an engine, and the part most rhythm games skip by hard-coding.',
    learned:
      'Building the engine rather than the game teaches you where the timing really lives. Everything hard about rhythm games is in the few milliseconds around the note.',
    stack: ['C#', 'Unity', 'HLSL shaders'],
    links: [],
  },
  {
    id: 'onecn',
    n: '08',
    name: 'onecn',
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/onecn',
    tagline: 'Every shadcn/ui component, in one install',
    year: '2026',
    image: 'media/onecn.jpg',
    imageAlt: 'onecn — shadcn/ui as one package',
    kind: 'Self-initiated · Open source',
    role: 'Sole author',
    summary:
      'shadcn/ui is copied in component by component through a CLI. onecn publishes the whole set as one installable package with per-component subpath exports and its CSS variables already shipped.',
    impact:
      'Published to npm as @coolaf/onecn with Storybook, a changelog, CI and a contributing guide — a small package, but a finished one rather than a gist.',
    learned:
      'The annoyance worth packaging is usually the one you hit on every new project. This one took an afternoon to name and a week to make properly shippable.',
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'Storybook', 'Biome', 'GitHub Actions'],
    links: [{ label: 'npm — @coolaf/onecn', href: 'https://www.npmjs.com/package/@coolaf/onecn' }],
  },
  {
    id: 'dmcp',
    n: '09',
    name: 'dmcp',
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/dmcp',
    tagline: 'One MCP server that stands in front of all the others',
    year: '2026',
    image: 'media/dmcp.jpg',
    imageAlt: 'dmcp — dynamic MCP meta-server',
    kind: 'Self-initiated · Open source',
    role: 'Sole author',
    summary:
      'Registers, proxies and aggregates the tools of many child MCP servers at runtime, so an agent sees one surface instead of a dozen: stdio, HTTP and SSE transports, tool chaining that passes output along, and a fallback server when one goes down.',
    impact:
      'Per-call credential injection, SQLite logs and metrics, and a dmcpctl command line — the operational parts that decide whether a proxy is usable in anger.',
    learned:
      'Aggregating tools is easy; deciding what happens when one of them is down is the actual design. The fallback path shaped the rest.',
    stack: ['TypeScript', 'Hono', 'SQLite', 'Drizzle ORM', 'Docker'],
    links: [{ label: 'Source — github.com/adit-firdaus/dmcp', href: 'https://github.com/adit-firdaus/dmcp' }],
  },
  {
    id: 'ctfd-sdk',
    n: '10',
    name: 'ctfd-sdk',
    visibility: 'public',
    repo: 'https://github.com/Hexcore-Labs/ctfd-sdk',
    tagline: 'A typed client for the CTFd competition API',
    year: '2026',
    image: 'media/ctfdsdk.jpg',
    imageAlt: 'ctfd-sdk — TypeScript SDK for CTFd',
    kind: 'Work · Hexcore Labs · Open source',
    role: 'Sole author',
    summary:
      'Covers challenges, users, teams, submissions and awards, with both API-token and session authentication, written for server-side use from Next.js server actions.',
    impact:
      'Published as @hexcore-labs/ctfd-sdk with no runtime dependencies at all — small enough to read in one sitting, which is the point of an SDK.',
    learned:
      'A good SDK is mostly subtraction. Zero dependencies was a constraint that kept making the API simpler.',
    stack: ['TypeScript'],
    links: [{ label: 'Source — github.com/Hexcore-Labs/ctfd-sdk', href: 'https://github.com/Hexcore-Labs/ctfd-sdk' }],
  },
  {
    id: 'autobricks-desktop',
    n: '11',
    name: 'Autobricks Desktop',
    visibility: 'private',
    tagline: 'Setting up an agent runtime, without the terminal',
    year: '2026',
    image: 'media/abdesktop.jpg',
    imageAlt: 'Autobricks Desktop — Go and Wails onboarding app',
    kind: 'Work · Autobricks AI',
    role: 'Sole author',
    summary:
      'Walks a user through standing up the Hermes agent runtime — Docker, WSL, the install script, a Telegram bot, Google Workspace OAuth — as a checklist that knows which operating system it is on and actually checks each step rather than trusting the user.',
    impact:
      'A Go backend bound straight to a React frontend through Wails, with the Windows and Linux branches covered by unit tests, since those are exactly the paths that cannot be tried by hand on a Mac.',
    learned:
      'Onboarding is a product. Every step that checks itself is a support conversation that never happens.',
    stack: ['Go', 'Wails', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    links: [],
  },
  {
    id: 'may-ui',
    academy: true,
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/may-ui',
    n: '12',
    name: 'May UI',
    logo: 'mayui',
    tagline: 'Apple’s design language as a React library',
    year: '2026 · Ongoing',
    image: 'media/mayui.jpg',
    imageAlt: 'May UI documentation site — “A design system that feels native.”',
    kind: 'Self-initiated · Open source',
    role: 'Sole author — design, engineering, documentation and release',
    summary:
      'May UI is an open-source React library that reproduces Apple’s design language on the web: iOS and macOS shapes, real damped-oscillator spring motion, and a token layer you can theme. It is published on npm as @adit_firdaus/may-ui.',
    impact:
      '74 components across three families — adaptive, desktop-only and mobile-only. No runtime CSS dependency: spring curves are sampled into CSS linear() so motion costs nothing at runtime, and every colour, space, radius, shadow and duration is a --may-* custom property. The document you are reading is built on it.',
    learned:
      'That a design system is mostly an argument about constraints, not a pile of components. Sampling real spring physics into static CSS taught me to read Apple’s motion as maths rather than as taste — and writing the docs forced me to defend every prop to a reader who is not me.',
    stack: ['React 19', 'TypeScript', 'CSS linear() springs', 'Token-first theming'],
    links: [
      { label: 'Gallery — adit-firdaus.github.io/may-ui', href: 'https://adit-firdaus.github.io/may-ui/' },
      { label: 'Source — github.com/adit-firdaus/may-ui', href: 'https://github.com/adit-firdaus/may-ui' },
    ],
  },
  {
    id: 'source',
    academy: true,
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/Source',
    n: '13',
    name: 'SOURCE',
    logo: 'source',
    tagline: 'Assemble a drone. Find water. Make us multiplanetary.',
    year: '2022',
    award: '3rd place · Kemnaker RI',
    image: 'media/source.jpg',
    imageAlt: 'SOURCE title screen — a modular drone hovering above an alien ridge at dusk',
    kind: 'Competition entry · Vocational training programme',
    role: 'Developer and game designer — published under my own itch.io account',
    summary:
      'SOURCE is a first-person exploration game in which the player builds a drone from modular parts and flies it across an alien surface, photographing sites in the search for water — humanity’s first step toward becoming a multiplanetary species.',
    impact:
      'Won 3rd place in Lomba Cipta Game Edukasi Pelatihan Vokasi, run by the Indonesian Ministry of Manpower, in July 2022. Its centrepiece is Drone Assembly, a robotics-simulation system: battery, camera, lights, propeller, processor and sensor each carry an effect, and the player must trade them against a fixed space and power budget.',
    learned:
      'That a constraint is a better teacher than a tutorial. Once space and power were genuinely scarce, players started reasoning about engineering trade-offs on their own — no explanation needed. I have designed for scarcity ever since.',
    stack: ['Unity', 'C#', '3D real-time rendering', 'Systems design'],
    links: [{ label: 'Play — adit-firdaus.itch.io/source', href: 'https://adit-firdaus.itch.io/source' }],
  },
  {
    id: 'delis',
    academy: true,
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/Delis',
    n: '14',
    name: 'DELIS',
    logo: 'delis',
    tagline: 'Digital Education, Learning and Information System',
    year: '2021',
    image: 'media/delis.jpg',
    imageAlt: 'DELIS gameplay — the folk song “Bebilin” from North Kalimantan',
    kind: 'GROUP PROJECT · KKSI 2021 programme, SMK Prestasi Prima',
    role: 'Game Designer — credited as Game Designer 2 in the official programme video',
    summary:
      'DELIS is an Android rhythm game that introduces Indonesian regional culture through traditional folk songs. Each province arrives as its own track, crest and landscape, so playing a song is also meeting a place.',
    impact:
      'Released on 28 September 2021 for Android. Code is MIT-licensed and assets are CC BY 4.0, so teachers and other developers can take the work further — the point was a reusable cultural resource, not a closed demo. The project was presented publicly as part of the national KKSI 2021 programme.',
    learned:
      'My first real team. I learned that a design decision only exists once someone else can build from it — and that a folk song is a tighter design brief than any spec, because the rhythm is already written and the game has to earn its place around it.',
    stack: ['Unity', 'C#', '2D', 'Rhythm design', 'Android'],
    links: [
      { label: 'Play — adit-firdaus.itch.io/delis', href: 'https://adit-firdaus.itch.io/delis' },
      { label: 'KKSI 2021 programme video', href: 'https://www.youtube.com/watch?v=8n4ZecDWeG8' },
    ],
  },
  {
    id: 'losary',
    academy: true,
    visibility: 'public',
    repo: 'https://github.com/adit-firdaus/Losary',
    n: '15',
    name: 'LOSARY',
    logo: 'losary',
    tagline: 'Local Sea Delivery — a rhythm game about a cargo ship',
    year: '2021',
    award: '3rd place · KKSI 2021',
    image: 'media/losary.jpg',
    imageAlt: 'LOSARY — a container ship crossing open sea under a low sun',
    kind: 'GROUP PROJECT · Two-person team',
    role: 'Project leader — direction, design and development',
    summary:
      'LOSARY follows a cargo ship carrying goods across open water. The player keeps time with the music while the sea and the light change around them; the calm is the mechanic, not the backdrop.',
    impact:
      'Took 3rd place in the KKSI 2021 national game-development competition in December 2021, built by a team of two that I led. Released for both Windows and Android.',
    learned:
      'Leading two people is still leading. I learned to cut scope out loud — we shipped because we agreed early on what the game would not do — and that pacing a rhythm game is really about pacing the player’s attention.',
    stack: ['Unity', 'C#', 'Rhythm design', 'Windows', 'Android'],
    links: [{ label: 'Play — adit-firdaus.itch.io/losary', href: 'https://adit-firdaus.itch.io/losary' }],
  },
  {
    id: 'pops',
    academy: true,
    visibility: 'private',
    n: '16',
    name: 'POPs',
    logo: 'pops',
    tagline: 'Unlimited bubbles, for when something has to break',
    year: '2022',
    image: 'media/pops.jpg',
    imageAlt: 'POPs — a minimalist field of bubbles',
    kind: 'Self-initiated',
    role: 'Sole designer and developer',
    summary:
      'POPs is a deliberately minimal Android game about bursting bubbles. Stress makes you want to break something; this gives you an endless supply of something harmless to break.',
    impact:
      'Released on Android as a small, complete piece of work. It is the project where I stopped adding features on purpose — physics, sound and an empty screen, and nothing else asking for the player’s attention.',
    learned:
      'That restraint is a design tool. Every system I considered adding — scores, levels, progression — would have turned a calming object back into a demand. Knowing when a product is finished is a skill I am still practising.',
    stack: ['Unity', 'C#', '2D physics', 'Android'],
    links: [{ label: 'Play — adit-firdaus.itch.io/pops', href: 'https://adit-firdaus.itch.io/pops' }],
  },
]

export type Publication = {
  /** Stable key for saved edits. Never reuse or renumber it. */
  id: string
  kind: 'Package' | 'Game' | 'Talk' | 'Code'
  title: string
  venue: string
  year: string
  detail: string
  logo?: string
  href: string
}

/**
 * Released work rather than academic papers — packages, games and public
 * presentations. Add journal or conference entries here if any are published.
 */
export const publications: Publication[] = [
  {
    id: 'adit-firdaus',
    kind: 'Package',
    title: '@adit_firdaus/may-ui — v0.2.0',
    venue: 'npm · MIT licence',
    year: '2026',
    detail:
      '74 React components reproducing Apple’s design language, with spring curves sampled into CSS linear() and a --may-* token layer. Ships typed .d.ts per entry.',
    logo: 'mayui',
    href: 'https://www.npmjs.com/package/@adit_firdaus/may-ui',
  },
  {
    id: 'delis-digital-education-learning',
    kind: 'Game',
    title: 'DELIS — Digital Education, Learning and Information System',
    venue: 'itch.io · Android · MIT code, CC BY 4.0 assets',
    year: '28 Sep 2021',
    detail:
      'Rhythm game teaching Indonesian regional culture through traditional folk songs, released openly so other educators can build on it.',
    logo: 'delis',
    href: 'https://adit-firdaus.itch.io/delis',
  },
  {
    id: 'losary-local-sea-delivery',
    kind: 'Game',
    title: 'LOSARY — Local Sea Delivery',
    venue: 'itch.io · Windows and Android',
    year: '2021',
    detail: 'Rhythm game about a cargo ship crossing open water. Built by a team of two that I led.',
    logo: 'losary',
    href: 'https://adit-firdaus.itch.io/losary',
  },
  {
    id: 'source',
    kind: 'Game',
    title: 'SOURCE',
    venue: 'itch.io · Windows',
    year: '2022',
    detail:
      'First-person exploration built around Drone Assembly — a robotics simulation where components trade against a fixed space and power budget.',
    logo: 'source',
    href: 'https://adit-firdaus.itch.io/source',
  },
  {
    id: 'pops',
    kind: 'Game',
    title: 'POPs',
    venue: 'itch.io · Android',
    year: '2022',
    detail: 'A deliberately minimal bubble-popping game, made as a calm outlet for stress.',
    logo: 'pops',
    href: 'https://adit-firdaus.itch.io/pops',
  },
  {
    id: 'nexspace',
    kind: 'Game',
    title: 'NexSpace',
    venue: 'itch.io · HTML5 · Educational',
    year: '2022',
    detail: 'A browser-based educational project built in Unity and published for the open web.',
    href: 'https://adit-firdaus.itch.io/nexspace',
  },
  {
    id: 'smk-prestasi-prima-kksi',
    kind: 'Talk',
    title: 'SMK Prestasi Prima — KKSI 2021 Game Development: D.E.L.I.S',
    venue: 'National vocational programme · YouTube',
    year: '2021',
    detail: 'Public presentation of the DELIS project, where I am credited as Game Designer 2.',
    logo: 'prestasiprima',
    href: 'https://www.youtube.com/watch?v=8n4ZecDWeG8',
  },
  {
    id: '45-public-repositories',
    kind: 'Code',
    title: '45 public repositories',
    venue: 'GitHub · github.com/adit-firdaus',
    year: '2021 — Present',
    detail:
      'Design systems, games, agent tooling, and web infrastructure — including the source of this site.',
    logo: 'github',
    href: 'https://github.com/adit-firdaus',
  },
]
