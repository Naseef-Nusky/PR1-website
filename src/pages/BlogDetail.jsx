import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import { siteConfig } from '../config/site'
import { fetchBlogPost, withFallback } from '../api/sanity'
import { fallbackPosts } from '../data/fallback'

function localPost(slug) {
  return fallbackPosts.find((p) => p.slug === slug) || null
}

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(() => localPost(slug))
  const [loading, setLoading] = useState(() => !localPost(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localPost(slug)
    setPost(fallback)
    setLoading(!fallback)

    withFallback(() => fetchBlogPost(slug), fallback).then((data) => {
      if (cancelled) return
      setPost(data || fallback)
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

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block underline">{siteConfig.blog.backLabel}</Link>
      </div>
    )
  }

  const image = post.coverUrl || post.coverImageUrl || null
  const label = post.category?.name || post.postType?.replace(/-/g, ' ') || siteConfig.blog.sectionLabel

  return (
    <>
      <Seo title={post.seoTitle || post.title} description={post.seoDescription || post.excerpt} />
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
            <h1 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">{post.title}</h1>
            {post.excerpt && <p className="mt-5 max-w-2xl text-lg text-white/80">{post.excerpt}</p>}
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <RichText html={post.content} />
          <Link to="/blog" className="mt-12 inline-block text-sm font-semibold underline underline-offset-4">
            {siteConfig.blog.browseLabel}
          </Link>
        </div>
      </article>
    </>
  )
}
