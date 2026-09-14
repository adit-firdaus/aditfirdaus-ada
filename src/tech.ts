import type { IconType } from 'react-icons'
import {
  SiAntdesign,
  SiBiome,
  SiCloudflare,
  SiDart,
  SiDocker,
  SiDrizzle,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiJavascript,
  SiMysql,
  SiNeon,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiStorybook,
  SiSupabase,
  SiTailwindcss,
  SiTanstack,
  SiTauri,
  SiThreedotjs,
  SiTrpc,
  SiTypescript,
  SiUnity,
  SiVercel,
  SiVitest,
  SiVite,
  SiWebgl,
  SiWireguard,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { FaGolang } from 'react-icons/fa6'
import { GiChargingBull } from 'react-icons/gi'
import { IoCloudOutline, IoGameControllerOutline, IoLayersOutline, IoShieldOutline } from 'react-icons/io5'

/**
 * The technology chips: a glyph and the brand's own colour.
 *
 * `color` is left off where the brand mark is black or white — Next.js,
 * Three.js, Unity — because either choice disappears against one of the two
 * themes; those inherit the label colour, which is legible in both. `img`
 * carries a brand that no react-icons set ships, rather than borrowing
 * somebody else's logo for it.
 */
export const TECH: Record<string, { icon?: IconType; img?: string; color?: string }> = {
  /* Languages */
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  Go: { icon: FaGolang, color: '#00ADD8' },
  'C#': { icon: TbBrandCSharp, color: '#A179DC' },
  Dart: { icon: SiDart, color: '#0175C2' },
  Python: { icon: SiPython, color: '#3776AB' },

  /* Web front end */
  React: { icon: SiReact, color: '#61DAFB' },
  'React 19': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs },
  'TanStack Start': { icon: SiTanstack, color: '#FF4154' },
  'TanStack Query': { icon: SiTanstack, color: '#FF4154' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'Ant Design': { icon: SiAntdesign, color: '#1677FF' },
  Vite: { icon: SiVite, color: '#A970FF' },
  Storybook: { icon: SiStorybook, color: '#FF4785' },

  /* Web backend */
  NestJS: { icon: SiNestjs, color: '#E0234E' },
  tRPC: { icon: SiTrpc, color: '#398CCB' },
  Hono: { icon: IoCloudOutline, color: '#E36002' },
  Express: { icon: SiExpress },
  'Better Auth': { icon: IoShieldOutline, color: '#7C3AED' },
  Inngest: { img: 'inngest' },
  BullMQ: { icon: GiChargingBull, color: '#E4572E' },

  /* Games and XR */
  Unity: { icon: SiUnity },
  'Three.js': { icon: SiThreedotjs },
  Phaser: { icon: IoGameControllerOutline, color: '#8CC63F' },
  WebGL: { icon: SiWebgl, color: '#990000' },
  'HLSL shaders': { icon: IoLayersOutline, color: '#F0A30A' },

  /* Desktop */
  Wails: { icon: FaGolang, color: '#00ADD8' },
  Tauri: { icon: SiTauri, color: '#FFC131' },
  Electron: { icon: SiElectron, color: '#47848F' },

  /* Mobile */
  Flutter: { icon: SiFlutter, color: '#42A5F5' },

  /* Infrastructure */
  Docker: { icon: SiDocker, color: '#2496ED' },
  Cloudflare: { icon: SiCloudflare, color: '#F38020' },
  Vercel: { icon: SiVercel },
  Nginx: { icon: SiNginx, color: '#009639' },
  WireGuard: { icon: SiWireguard, color: '#88171A' },

  /* Databases */
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  'Drizzle ORM': { icon: SiDrizzle, color: '#C5F74F' },
  Prisma: { icon: SiPrisma, color: '#5A67D8' },
  Redis: { icon: SiRedis, color: '#FF4438' },
  Neon: { icon: SiNeon, color: '#00E599' },
  Supabase: { icon: SiSupabase, color: '#3ECF8E' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },

  /* CI and quality */
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  Vitest: { icon: SiVitest, color: '#6DA53F' },
  Biome: { icon: SiBiome, color: '#60A5FA' },
}
