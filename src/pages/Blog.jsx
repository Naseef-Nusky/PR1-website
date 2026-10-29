import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import BlogCard from '../components/BlogCard'
import { fetchBlogPosts, withFallback } from '../api/sanity'
import { fallbackPosts } from '../data/fallback'

export default function Blog() {
  const [posts, setPosts] = useState(fallbackPosts)

  useEffect(() => {
    withFallback(fetchBlogPosts, fallbackPosts).then(setPosts)
  }, [])

  return (
    <>
      <Seo title="Blog & news" description="Business news, interviews, insights and sponsored content from PR." />
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">PR News</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Blog & news</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink)]/70">
            Temporary sample stories with images — replace these anytime from Sanity Studio.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
