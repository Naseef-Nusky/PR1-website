import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import { fetchBusinessArticle, withFallback } from '../api/sanity'
import { fallbackArticles } from '../data/fallback'

function localArticle(slug) {
  return fallbackArticles.find((a) => a.slug === slug) || null
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const [article, setArticle] = useState(() => localArticle(slug))
  const [loading, setLoading] = useState(() => !localArticle(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localArticle(slug)
    setArticle(fallback)
    setLoading(!fallback)

    withFallback(() => fetchBusinessArticle(slug), fallback).then((data) => {
      if (cancelled) return
      setArticle(data || fallback)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [slug])

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-[var(--color-ink)]/60">
        <p>Loading…</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p>Article not found.</p>
        <Link to="/businesses" className="mt-4 inline-block underline">Back to businesses</Link>
      </div>
    )
  }

  const image = article.coverUrl || article.logoUrl || null
  const label = `${article.industry?.name || 'Business feature'}${article.location ? ` · ${article.location}` : ''}`

  return (
    <>
      <Seo title={article.seoTitle || article.title} description={article.seoDescription || article.excerpt} />
      <article className="bg-[var(--color-mist)]">
        <header className="relative min-h-[42vh] overflow-hidden md:min-h-[52vh]">
          {image ? (
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[var(--color-ink)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-ink)]/25" />
          <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-4 py-14 md:min-h-[52vh] md:px-8 md:py-20">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">{label}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">{article.title}</h1>
            {article.excerpt && <p className="mt-5 max-w-2xl text-lg text-white/80">{article.excerpt}</p>}
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <div className="border border-[var(--color-ink)]/10 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/50">Company</p>
            <h2 className="mt-2 font-display text-2xl">{article.companyName}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]/70">{article.companyDescription}</p>
            {article.websiteUrl && (
              <a href={article.websiteUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
                Visit website
              </a>
            )}
            {(article.contactEmail || article.contactPhone) && (
              <p className="mt-3 text-sm text-[var(--color-ink)]/70">
                {article.contactEmail}{article.contactEmail && article.contactPhone ? ' · ' : ''}{article.contactPhone}
              </p>
            )}
          </div>

          {article.background && (
            <section className="mt-10">
              <h2 className="font-display text-2xl">Background</h2>
              <RichText html={article.background} className="mt-4" />
            </section>
          )}
          {article.productsServices && (
            <section className="mt-10">
              <h2 className="font-display text-2xl">Products & services</h2>
              <RichText html={article.productsServices} className="mt-4" />
            </section>
          )}
          <section className="mt-10">
            <RichText html={article.content} />
          </section>

          <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-ink)]/10 pt-8 sm:flex-row sm:flex-wrap">
            <Link to="/contact" className="btn btn-ink btn-block-sm">Promote your business</Link>
            <Link to="/businesses" className="btn btn-outline btn-block-sm">All features</Link>
          </div>
        </div>
      </article>
    </>
  )
}
