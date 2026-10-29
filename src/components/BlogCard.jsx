import { Link } from 'react-router-dom'

const labels = {
  news: 'News',
  interview: 'Interview',
  'success-story': 'Success story',
  'product-promotion': 'Product promotion',
  'industry-insight': 'Industry insight',
  'pr-marketing': 'PR & marketing',
  sponsored: 'Sponsored',
}

export default function BlogCard({ post }) {
  const image = post.coverUrl || post.coverImageUrl || null

  return (
    <article className="group overflow-hidden border border-[var(--color-ink)]/10 bg-white/60 transition hover:border-[var(--color-ink)]/25 hover:bg-white">
      {image && (
        <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink)]/45">
          {labels[post.postType] || post.category?.name || 'Article'}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-snug">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink)]/70">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-block text-sm font-semibold underline-offset-4 hover:underline"
        >
          Continue reading
        </Link>
      </div>
    </article>
  )
}
