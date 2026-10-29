import { Link } from 'react-router-dom'

export default function ArticleCard({ article, variant = 'light' }) {
  const image = article.coverUrl || article.logoUrl || null
  const dark = variant === 'dark'

  return (
    <article
      className={`group relative overflow-hidden ${
        dark ? 'border-t border-white/20 pt-6' : 'border-b border-[var(--color-ink)]/15'
      }`}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 img-cover transition duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden
          />
          <div
            className={`absolute inset-0 ${
              dark
                ? 'bg-[var(--color-ink)]/75 group-hover:bg-[var(--color-ink)]/70'
                : 'bg-[var(--color-mist)]/88 group-hover:bg-[var(--color-mist)]/82'
            }`}
            aria-hidden
          />
        </>
      )}
      <div className={`relative ${image ? 'p-5 sm:p-6 md:p-7' : dark ? '' : 'pb-8'}`}>
        <p
          className={`text-xs uppercase tracking-[0.18em] ${
            dark ? 'text-white/50' : 'text-[var(--color-ink)]/45'
          }`}
        >
          {article.industry?.name || 'Business feature'}
          {article.location ? ` · ${article.location}` : ''}
        </p>
        <h3
          className={`mt-3 font-display text-2xl leading-snug sm:text-3xl md:text-[1.85rem] ${
            dark ? 'text-white' : 'text-[var(--color-ink)]'
          }`}
        >
          <Link
            to={`/businesses/${article.slug}`}
            className={dark ? 'hover:text-[var(--color-accent)]' : 'hover:opacity-70'}
          >
            {article.title}
          </Link>
        </h3>
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed ${
            dark ? 'text-white/70' : 'text-[var(--color-ink)]/70'
          }`}
        >
          {article.excerpt}
        </p>
        <Link
          to={`/businesses/${article.slug}`}
          className={`mt-4 inline-block text-sm font-semibold ${
            dark
              ? 'text-[var(--color-accent)]'
              : 'underline-offset-4 hover:underline'
          }`}
        >
          Read feature{dark ? ' →' : ''}
        </Link>
      </div>
    </article>
  )
}
