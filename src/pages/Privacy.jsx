import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import RichText from '../components/RichText'
import { fetchPage, withFallback } from '../api/sanity'
import { fallbackPrivacy } from '../data/fallback'

export default function Privacy() {
  const [page, setPage] = useState(fallbackPrivacy)

  useEffect(() => {
    withFallback(() => fetchPage('privacy'), fallbackPrivacy).then(setPage)
  }, [])

  return (
    <>
      <Seo title="Privacy" description="Privacy and cookie information for PR." />
      <section className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
        <h1 className="font-display text-4xl text-teal-950 md:text-5xl">{page.title}</h1>
        <RichText html={page.content} className="mt-8" />
      </section>
    </>
  )
}
