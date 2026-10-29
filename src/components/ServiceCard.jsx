import { Link } from 'react-router-dom'

export default function ServiceCard({ service, variant = 'light' }) {
  const image = service.imageUrl || service.iconUrl || null
  const dark = variant === 'dark'

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group block overflow-hidden transition duration-300 hover:-translate-y-1 ${
        dark
          ? 'border border-white/15 bg-white/5 hover:border-[var(--color-accent)]/50'
          : 'border border-[var(--color-ink)]/10 bg-white/70 hover:border-[var(--color-ink)]/25 hover:bg-white'
      }`}
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 md:p-6">
        <h3 className={`font-display text-2xl leading-snug ${dark ? 'text-white' : 'text-[var(--color-ink)]'}`}>
          {service.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-white/65' : 'text-[var(--color-ink)]/70'}`}>
          {service.shortDescription}
        </p>
      </div>
    </Link>
  )
}
