import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ServiceCard from '../components/ServiceCard'
import { fetchServices, withFallback } from '../api/sanity'
import { fallbackServices } from '../data/fallback'
import { images } from '../config/images'

export default function Services() {
  const [services, setServices] = useState(fallbackServices)

  useEffect(() => {
    withFallback(fetchServices, fallbackServices).then(setServices)
  }, [])

  return (
    <>
      <Seo title="Services" description="Public relations, press releases, sponsored articles and digital PR campaigns." />
      <section className="bg-[var(--color-mist)]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">What we offer</p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Business promotion services</h1>
          <p className="mt-4 max-w-2xl text-[var(--color-ink)]/70">
            Publicity programmes designed for companies that want credible exposure across editorial and digital channels.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id || service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 img-cover" style={{ backgroundImage: `url(${images.cta})` }} aria-hidden />
        <div className="absolute inset-0 bg-[var(--color-ink)]/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl">Want coverage for your company?</h2>
          <p className="mt-3 max-w-xl text-sm text-white/75">
            Submit your company details, press materials and goals. Our team reviews every enquiry before publication.
          </p>
          <Link to="/contact" className="btn btn-primary btn-block-sm mt-6">
            Start an enquiry
          </Link>
        </div>
      </section>
    </>
  )
}
