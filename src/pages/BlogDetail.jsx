import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
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
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-[var(--color-ink)]/60">
        <p>Loading…</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block underline">Back to blog</Link>
      </div>
    )
  }

  const image = post.coverUrl || post.coverImageUrl || null

  return (
    <>
      <Seo title={post.seoTitle || post.title} description={post.seoDescription || post.excerpt} />
      <article className="bg-[var(--color-mist)]">
        {image && (
          <div className="relative h-[42vh] min-h-[260px] w-full overflow-hidden md:h-[52vh]">
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 to-transparent" />
          </div>
        )}
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">
            {post.category?.name || post.postType?.replace(/-/g, ' ') || 'Article'}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-[var(--color-ink)]/75">{post.excerpt}</p>
          <RichText html={post.content} className="mt-10" />
          <Link to="/blog" className="mt-12 inline-block text-sm font-semibold underline underline-offset-4">
            All posts
          </Link>
        </div>
      </article>
    </>
  )
}
