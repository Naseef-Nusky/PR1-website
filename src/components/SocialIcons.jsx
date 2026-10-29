const iconClass = 'h-5 w-5 fill-current'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <path d="M18.24 2H21l-6.66 7.61L22 22h-6.17l-4.83-6.31L5.52 22H2.75l7.13-8.15L2 2h6.33l4.36 5.78L18.24 2zm-1.08 18h1.72L7.05 3.9H5.2l11.96 16.1z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.86c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.9h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.57 1.6 4.71 4.71.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.11-1.6 4.57-4.71 4.71-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.57-1.6-4.71-4.71-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.14-3.11 1.6-4.57 4.71-4.71 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  )
}

const ICONS = {
  linkedin: LinkedInIcon,
  x: XIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
}

const LABELS = {
  linkedin: 'LinkedIn',
  x: 'X (Twitter)',
  facebook: 'Facebook',
  instagram: 'Instagram',
}

export default function SocialIcons({ links, className = '' }) {
  const items = Object.entries(links || {}).filter(([, href]) => Boolean(href))

  if (!items.length) return null

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(([key, href]) => {
        const Icon = ICONS[key]
        if (!Icon) return null
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={LABELS[key] || key}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)] active:scale-95"
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}
