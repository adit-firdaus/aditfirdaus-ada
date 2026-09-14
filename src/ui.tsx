import { Avatar, Tag } from '@adit_firdaus/may-ui'
import { Ed } from './content'
import { logoUrl } from './paths'
import { TECH } from './tech'

export function TechTag({
  label,
  /** Field path, when this chip's text should be editable. */
  p,
  tone = 'neutral',
  size = 'sm',
}: {
  label: string
  p?: string
  tone?: 'neutral' | 'tint'
  size?: 'sm' | 'md'
}) {
  /* The glyph still keys off the ORIGINAL label, so renaming a chip in the
     browser never silently drops its icon or its colour. */
  const tech = TECH[label]
  const Icon = tech?.icon
  /* A brand with no mark in any react-icons set ships its own SVG instead. */
  const glyph = tech?.img ? (
    <img className="tech-mark" src={`${import.meta.env.BASE_URL}logo/${tech.img}.svg`} alt="" />
  ) : Icon ? (
    <Icon style={tech.color ? { color: tech.color } : undefined} />
  ) : undefined
  return (
    <Tag size={size} tone={tone} leadingIcon={glyph}>
      {p ? <Ed p={p}>{label}</Ed> : label}
    </Tag>
  )
}

export type MarkSize = 'sm' | 'md' | 'lg' | 'xl'
/** The plate a logo sits on. Most marks are drawn for one and vanish on the other. */
export type MarkBackground = 'white' | 'black' | 'yellow'

/**
 * An organisation's own mark.
 *
 * Each logo is a transparent PNG drawn for the background its owner uses, so
 * the plate is part of the data rather than a guess: a navy wordmark needs
 * white behind it, a white one needs black. A record with no logo keeps its
 * space and shows nothing — the rows stay aligned without inventing initials
 * for a company whose mark we do not have.
 */
export function Mark({
  logo,
  name,
  size = 'sm',
  bg,
}: {
  logo?: string
  name: string
  size?: MarkSize
  bg?: MarkBackground
}) {
  if (!logo) return <span className="mark mark--blank" data-size={size} aria-hidden />

  return (
    <span className="mark" data-size={size} data-bg={bg}>
      <Avatar shape="square" size={size} src={logoUrl(logo)} alt={`${name} logo`} />
    </span>
  )
}
