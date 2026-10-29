import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import ArticleCard from '../components/ArticleCard'
import ServiceCard from '../components/ServiceCard'
import { siteConfig } from '../config/site'
import { images } from '../config/images'
import {
  fetchHomepage,
  fetchBusinessArticles,
  fetchBlogPosts,
  fetchServices,
  withFallback,
} from '../api/sanity'
import {
  fallbackHomepage,
  fallbackArticles,
  fallbackPosts,
  fallbackServices,
} from '../data/fallback'

export default function Home() {
  const [home, setHome] = useState(fallbackHomepage)
  const [articles, setArticles] = useState(fallbackArticles.filter((a) => a.featured))
  const [posts, setPosts] = useState(fallbackPosts.slice(0, 3))
  const [services, setServices] = useState(fallbackServices.slice(0, 4))

  useEffect(() => {
    ;(async () => {
      const [h, a, p, s] = await Promise.all([
        withFallback(fetchHomepage, fallbackHomepage),
        withFallback(() => fetchBusinessArticles({ featured: true }), fallbackArticles.filter((x) => x.featured)),
        withFallback(() => fetchBlogPosts({ featured: true }), fallbackPosts.slice(0, 3)),
        withFallback(fetchServices, fallbackServices.slice(0, 4)),
      ])
      setHome({ ...fallbackHomepage, ...h })
      setArticles(Array.isArray(a) && a.length ? a : fallbackArticles.filter((x) => x.featured))
      setPosts(Array.isArray(p) && p.length ? p.slice(0, 3) : fallbackPosts.slice(0, 3))
      setServices(Array.isArray(s) && s.length ? s.slice(0, 4) : fallbackServices.slice(0, 4))
    })()
  }, [])

  return (
    <>
      <Seo title="Home" description={home.heroSubtitle || siteConfig.description} />

      {/* Full-bleed hero — brand + headline + line + CTAs over image */}
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover kenburns"
          style={{ backgroundImage: `url(${images.hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/90 via-[var(--color-ink)]/65 to-[var(--color-ink)]/35" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-transparent to-[var(--color-ink)]/40" aria-hidden />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:pb-16 sm:pt-28 md:px-8 md:pb-24">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.24em] text-white/70 sm:text-xs sm:tracking-[0.28em]">
            {siteConfig.tagline}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            {home.heroSubtitle}
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link to="/contact" className="btn btn-primary btn-block-sm">
              Enquire about promotion
            </Link>
            <Link to="/businesses" className="btn btn-secondary btn-block-sm">
              Browse business features
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + pillars */}
      <section className="relative bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink)]/50">About the platform</p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                Promote your business to the world
              </h2>
              <div className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink)]/75">
                {home.intro?.includes?.('<') ? <RichText html={home.intro} /> : <p>{home.intro}</p>}
              </div>
            </div>
            <div
              className="relative min-h-[280px] overflow-hidden img-cover"
              style={{ backgroundImage: `url(${images.office})` }}
            >
              <div className="absolute inset-0 bg-[var(--color-ink)]/45" />
              <p className="relative z-10 flex h-full min-h-[280px] items-end p-8 font-display text-3xl leading-tight text-white md:text-4xl">
                Listings. Campaigns. Global reach. News that travels.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px bg-[var(--color-ink)]/10 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pillars.map((pillar) => (
              <div key={pillar.name} className="bg-[var(--color-mist)] p-6 md:p-8">
                <h3 className="font-display text-2xl leading-snug">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{pillar.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured businesses */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover"
          style={{ backgroundImage: `url(${images.meeting})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/88" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Featured businesses</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Promotion articles</h2>
            </div>
            <Link to="/businesses" className="text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline">
              View all features
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.slug} article={article} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <div className="mb-8 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink)]/50">PR News</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Blog & business news</h2>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id || post.slug}
                className="group relative min-h-[280px] overflow-hidden sm:min-h-[320px]"
              >
                <div
                  className="absolute inset-0 img-cover transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${post.coverUrl || images.press})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/50 to-transparent" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-5 text-white sm:min-h-[320px] sm:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    {post.category?.name || post.postType}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug sm:text-2xl">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-[var(--color-accent)] transition hover:brightness-110"
                  >
                    Continue reading →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link to="/blog" className="mt-10 inline-block text-sm font-semibold underline underline-offset-4">
            Browse all posts
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover"
          style={{ backgroundImage: `url(${images.city})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/90" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Services</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl">Business promotion services</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{home.servicesIntro}</p>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id || service.slug} service={service} variant="dark" />
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-block text-sm font-semibold text-[var(--color-accent)] transition hover:brightness-110 sm:mt-10"
          >
            All services →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 img-cover"
          style={{ backgroundImage: `url(${images.cta})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-8 md:py-32">
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-6xl">{home.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-sm text-white/75 sm:text-base">{home.ctaText}</p>
          <p className="mt-3 break-words text-sm text-white/55">
            {siteConfig.contactEmail} · {siteConfig.contactPhone}
          </p>
          <Link to="/contact" className="btn btn-primary btn-block-sm mt-8 sm:mt-10">
            {home.ctaButtonLabel}
          </Link>
        </div>
      </section>
    </>
  )
}
