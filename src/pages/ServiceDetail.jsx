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
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-[var(--color-ink)]/60">
        <p>Loading…</p>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
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
        <header className="relative min-h-[38vh] overflow-hidden md:min-h-[46vh]">
          {image ? (
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[var(--color-ink)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-ink)]/25" />
          <div className="relative mx-auto flex min-h-[38vh] max-w-6xl flex-col justify-end px-4 py-14 md:min-h-[46vh] md:px-8 md:py-20">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Service</p>
            <h1 className="mt-3 font-display text-4xl text-white md:text-5xl">{service.title}</h1>
            {service.shortDescription && (
              <p className="mt-5 max-w-2xl text-lg text-white/80">{service.shortDescription}</p>
            )}
          </div>
        </header>
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <RichText html={service.content} />
          <Link to="/contact" className="btn btn-ink btn-block-sm mt-10">
            Enquire about this service
          </Link>
        </section>
      </article>
    </>
  )
}
