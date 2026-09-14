/**
 * Single source of truth for the CV and the Portfolio documents.
 * Edit here — both the live site and the printed PDF read from this file.
 */

export const profile = {
  legalName: 'Raditya Rakha Firdaus Muliyoto',
  knownAs: 'Adit Firdaus',
  title: 'Software Engineer · Game & XR Developer · Design Systems',
  location: 'Jepara, Central Java, Indonesia',
  email: 'aditfirdaus.dml@gmail.com',
  phone: '[PHONE]',
  links: [
    { label: 'linkedin.com/in/adit-firdaus', href: 'https://www.linkedin.com/in/adit-firdaus/' },
    { label: 'github.com/adit-firdaus', href: 'https://github.com/adit-firdaus' },
    { label: 'adit-firdaus.itch.io', href: 'https://adit-firdaus.itch.io/' },
  ],
  objective:
    'I build things people can feel — rhythm games that teach Indonesian folk songs, a React design system that reproduces Apple’s motion physics, and AI tooling for cybersecurity education. I want to spend the next nine months at the Apple Developer Academy turning that range into depth on Apple platforms, and learning to design with a team instead of alone.',
}

export type Job = {
  role: string
  org: string
  /** File in public/logo, without extension. Omit when no official mark exists. */
  logo?: string
  place?: string
  period: string
  points: string[]
}

export const experience: Job[] = [
  {
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
    role: 'Software Developer',
    org: 'PT Mastah Digital Indonesia',
    period: 'Oct — Dec 2025',
    points: ['Delivered client-facing product work on a short engagement.'],
  },
  {
    role: 'Founder & Chief Executive Officer',
    org: 'PT Altern Digital Technologies',
    logo: 'altern',
    period: 'Mar 2023 — Present',
    points: [
      'Founded a studio delivering custom software, web platforms and IT consulting.',
      'Responsible for technical direction and for shipping client work end to end.',
    ],
  },
  {
    role: 'Full Stack Developer',
    org: 'Hi Klik',
    period: 'Dec 2022 — Present',
    points: ['Full-stack web development, from database and API through to interface.'],
  },
  {
    role: 'Flutter Developer',
    org: 'Global Multimedia School',
    logo: 'gmcs',
    period: 'Jul 2023 — Jul 2024',
    points: ['Built cross-platform mobile applications in Flutter for the school’s own products.'],
  },
  {
    role: 'XR Developer',
    org: 'PT Halo Industri Digital (HiDigi)',
    logo: 'hidigi',
    period: 'Oct 2022 — Jul 2024',
    points: [
      'Developed extended-reality experiences — 3D interaction, spatial interfaces and real-time rendering.',
    ],
  },
  {
    role: 'Multimedia Intern',
    org: 'Floramis',
    logo: 'floramis',
    place: 'Singapore · Remote',
    period: 'Aug — Oct 2024',
    points: ['Produced multimedia assets for a Singapore-based team while working remotely from Indonesia.'],
  },
]

export const education = [
  {
    school: 'Nexford University',
    logo: 'nexford',
    place: 'United States · Online',
    detail: 'Current programme',
    period: 'Present',
  },
  {
    school: 'Global Multimedia Creative School',
    logo: 'gmcs',
    place: 'Indonesia',
    detail: 'Multimedia · Grades 10–12',
    period: '2022 — 2025',
  },
  {
    school: 'SMK Prestasi Prima',
    logo: 'prestasiprima',
    place: 'Jakarta, Indonesia',
    detail: 'Game Development — KKSI 2021 national programme',
    period: '2021',
  },
  {
    school: 'MTsN 2 Jepara',
    logo: 'mtsn2jepara',
    place: 'Jepara, Indonesia',
    detail: 'Lower secondary',
    period: 'to 2020',
  },
]

export const awards = [
  {
    title: '3rd Place — KKSI 2021 National Game Development',
    logo: 'prestasiprima',
    detail: 'For LOSARY, a two-person team I led as project leader.',
    year: 'Dec 2021',
  },
  {
    title: '2nd Winner — GACCI 2022',
    logo: 'binus',
    detail: 'Bina Nusantara University (BINUS) creative competition.',
    year: 'Nov 2022',
  },
  {
    title: '3rd Place — Lomba Cipta Game Edukasi Pelatihan Vokasi',
    logo: 'kemnaker',
    detail: 'Ministry of Manpower, Republic of Indonesia (Kemnaker), for SOURCE.',
    year: 'Jul 2022',
  },
  {
    title: 'Registrant — BINUS High School Programming Competition',
    logo: 'binus',
    detail: 'Representing Global Multimedia Creative School.',
    year: '2024 — 2025',
  },
]

export const extracurricular = [
  {
    role: 'Marketing Communications',
    org: 'Lions Clubs International, District 307-B1',
    logo: 'lions',
    period: 'Jul 2025 — Present',
    detail: 'Communications for a volunteer service organisation across the district.',
  },
  {
    role: 'Participant, Madrasah Vlog Competition 2020',
    org: 'MTsN 2 Jepara',
    logo: 'mtsn2jepara',
    period: '2020',
    detail: 'Entrant no. 444 — my first public piece of creative work.',
  },
  {
    role: 'Open-source maintainer',
    org: 'github.com/adit-firdaus',
    logo: 'github',
    period: '2021 — Present',
    detail: '45 public repositories spanning design systems, games, agent tooling and web infrastructure.',
  },
]

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'Dart', 'Python'] },
  { group: 'Interface', items: ['React 19', 'Flutter', 'Design systems', 'Apple HIG', 'Motion & spring physics'] },
  { group: 'Games & XR', items: ['Unity', 'Game design', '3D / real-time rendering', 'Extended reality'] },
  { group: 'Platform', items: ['Node.js', 'NestJS', 'Strapi', 'PostgreSQL', 'Docker', 'GitHub Actions'] },
  { group: 'Ways of working', items: ['Product engineering', 'Technical leadership', 'Open source', 'Agentic AI tooling'] },
]

export type Project = {
  n: string
  name: string
  /** Official mark in public/logo; falls back to an IconTile when absent. */
  logo?: string
  tagline: string
  year: string
  /** Short award ribbon shown on the project sheet. */
  award?: string
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
    n: '01',
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
    n: '02',
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
    n: '03',
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
    n: '04',
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
    n: '05',
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
