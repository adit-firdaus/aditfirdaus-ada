import type { IconType } from 'react-icons'
import {
  SiDart,
  SiDocker,
  SiDrizzle,
  SiFlutter,
  SiGithubactions,
  SiHono,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTanstack,
  SiRedis,
  SiStorybook,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiUnity,
  SiVite,
} from 'react-icons/si'
import { IoLayersOutline } from 'react-icons/io5'
import { TbBrandCSharp } from 'react-icons/tb'
import { FaGolang } from 'react-icons/fa6'
import { GiChargingBull } from 'react-icons/gi'

/**
 * The technology chips: a glyph and the brand's own colour.
 *
 * `color` is omitted where the brand mark is black or white — Next.js, Three.js,
 * Unity — because either choice disappears against one of the two themes. Those
 * inherit the label colour instead, which is legible in both.
 */
export const TECH: Record<string, { icon?: IconType; img?: string; color?: string }> = {
  /* Languages */
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  Go: { icon: FaGolang, color: '#00ADD8' },
  'C#': { icon: TbBrandCSharp, color: '#A179DC' },
  Dart: { icon: SiDart, color: '#0175C2' },
  Python: { icon: SiPython, color: '#3776AB' },

  /* Interface */
  React: { icon: SiReact, color: '#61DAFB' },
  'React 19': { icon: SiReact, color: '#61DAFB' },
  Flutter: { icon: SiFlutter, color: '#42A5F5' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  Storybook: { icon: SiStorybook, color: '#FF4785' },
  Vite: { icon: SiVite, color: '#A970FF' },

  /* Games and XR */
  Unity: { icon: SiUnity },
  'Three.js': { icon: SiThreedotjs },
  'HLSL shaders': { icon: IoLayersOutline, color: '#F0A30A' },

  /* Platform */
  'Next.js': { icon: SiNextdotjs },
  'TanStack Start': { icon: SiTanstack, color: '#FF4154' },
  'TanStack Query': { icon: SiTanstack, color: '#FF4154' },
  Hono: { icon: SiHono, color: '#E36002' },
  'Drizzle ORM': { icon: SiDrizzle, color: '#C5F74F' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  Redis: { icon: SiRedis, color: '#FF4438' },
  /* BullMQ has no mark in any react-icons set; its own logo is a bull. */
  BullMQ: { icon: GiChargingBull, color: '#E4572E' },
  /* No react-icons set carries Inngest, so this is its own mark, taken from
     inngest.com and shipped alongside the organisation logos. */
  Inngest: { img: 'inngest' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
}
