import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import ArticleCard from '../components/ArticleCard'
import { fetchBusinessArticles, withFallback } from '../api/sanity'
import { fallbackArticles } from '../data/fallback'

export default function Articles() {
  const [articles, setArticles] = useState(fallbackArticles)

  useEffect(() => {
    withFallback(fetchBusinessArticles, fallbackArticles).then(setArticles)
  }, [])

  return (
    <>
      <Seo
        title="Company features"
        description="Promotional articles and company profiles published by PR."
      />
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">Business promotion</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Company features</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink)]/70">
            Editorial profiles promoting individual businesses — each with a permanent, shareable address.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
