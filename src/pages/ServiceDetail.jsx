import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import { fetchService, withFallback } from '../api/sanity'
import { fallbackServices } from '../data/fallback'

function localService(slug) {
  return fallbackServices.find((s) => s.slug === slug) || null
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const [service, setService] = useState(() => localService(slug))
  const [loading, setLoading] = useState(() => !localService(slug))

  useEffect(() => {
    let cancelled = false
    const fallback = localService(slug)
    setService(fallback)
    setLoading(!fallback)

    withFallback(() => fetchService(slug), fallback).then((data) => {
      if (cancelled) return
      setService(data || fallback)
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

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p>Service not found.</p>
        <Link to="/services" className="mt-4 inline-block underline">All services</Link>
      </div>
    )
  }

  const image = service.imageUrl || service.iconUrl || null

  return (
    <>
      <Seo title={service.title} description={service.shortDescription} />
      <article className="bg-[var(--color-mist)]">
        {image && (
          <div className="relative h-[38vh] min-h-[220px] w-full overflow-hidden md:h-[46vh]">
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/65 to-transparent" />
          </div>
        )}
        <section className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">Service</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">{service.title}</h1>
          <p className="mt-5 text-lg text-[var(--color-ink)]/75">{service.shortDescription}</p>
          <RichText html={service.content} className="mt-10" />
          <Link to="/contact" className="btn btn-ink btn-block-sm mt-10">
            Enquire about this service
          </Link>
        </section>
      </article>
    </>
  )
}
