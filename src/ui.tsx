import { Avatar, Tag } from '@adit_firdaus/may-ui'
import type { IconType } from 'react-icons'
import {
  SiAndroid,
  SiDart,
  SiDocker,
  SiFlutter,
  SiGithubactions,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiStrapi,
  SiTypescript,
  SiUnity,
} from 'react-icons/si'
import { logoUrl } from './paths'

const TECH: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'C#': SiSharp,
  Dart: SiDart,
  Python: SiPython,
  'React 19': SiReact,
  Flutter: SiFlutter,
  Unity: SiUnity,
  Android: SiAndroid,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  Strapi: SiStrapi,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
}

export function TechTag({
  label,
  tone = 'neutral',
  size = 'sm',
}: {
  label: string
  tone?: 'neutral' | 'tint'
  size?: 'sm' | 'md'
}) {
  const Icon = TECH[label]
  return (
    <Tag size={size} tone={tone} leadingIcon={Icon ? <Icon /> : undefined}>
      {label}
    </Tag>
  )
}

/** A real mark when one exists; May UI's initials avatar when it does not. */
export function Mark({
  logo,
  name,
  size = 'sm',
}: {
  logo?: string
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  return (
    <Avatar
      shape="square"
      size={size}
      name={name}
      src={logo ? logoUrl(logo) : undefined}
      alt={logo ? `${name} logo` : undefined}
    />
  )
}
