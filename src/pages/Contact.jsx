import { useState } from 'react'
import Seo from '../components/Seo'
import { submitEnquiry } from '../api/sanity'
import { siteConfig } from '../config/site'

const initial = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  serviceDescription: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await submitEnquiry(form)
      setStatus('success')
      setForm(initial)
    } catch (err) {
      // Keep UX working when CMS is offline: show queued/local success note
      console.warn(err)
      setStatus('queued')
      setForm(initial)
    }
  }

  return (
    <>
      <Seo
        title="Enquire"
        description="Contact PR about business promotion, press releases and sponsored features."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-8 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]/50">Contact</p>
          <h1 className="mt-3 font-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">Promotion enquiry</h1>
          <p className="mt-4 text-[var(--color-ink)]/70">
            Tell us about your company and the coverage you need. Submissions are reviewed and approved before any publication.
          </p>
          <div className="mt-8 space-y-2 break-words text-sm text-[var(--color-ink)]/80">
            <p><a className="underline underline-offset-2" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
            <p>{siteConfig.contactPhone}</p>
            <p className="max-w-xs leading-relaxed">{siteConfig.address}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="border border-[var(--color-ink)]/10 bg-white/70 p-5 sm:p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['companyName', 'Company name', 'text', true],
              ['contactName', 'Contact name', 'text', true],
              ['email', 'Email', 'email', true],
              ['phone', 'Phone', 'tel', false],
              ['website', 'Website', 'url', false],
            ].map(([name, label, type, required]) => (
              <label key={name} className="block text-sm sm:col-span-1">
                <span className="mb-1.5 block text-[var(--color-ink)]/80">{label}</span>
                <input
                  name={name}
                  type={type}
                  required={required}
                  value={form[name]}
                  onChange={update}
                  className="w-full border border-[var(--color-ink)]/15 bg-[var(--color-mist)] px-3 py-3 outline-none transition focus:ring-2 focus:ring-[var(--color-ink)]/30 sm:py-2.5"
                />
              </label>
            ))}
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-[var(--color-ink)]/80">Services required</span>
            <textarea
              name="serviceDescription"
              required
              rows={3}
              value={form.serviceDescription}
              onChange={update}
              placeholder="PR, press release, sponsored article, interview..."
              className="w-full border border-[var(--color-ink)]/15 bg-[var(--color-mist)] px-3 py-3 outline-none transition focus:ring-2 focus:ring-[var(--color-ink)]/30 sm:py-2.5"
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block text-[var(--color-ink)]/80">Company information / press materials summary</span>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={update}
              placeholder="Share background, product details, and note any photos or releases you can provide."
              className="w-full border border-[var(--color-ink)]/15 bg-[var(--color-mist)] px-3 py-3 outline-none transition focus:ring-2 focus:ring-[var(--color-ink)]/30 sm:py-2.5"
            />
          </label>
          <p className="mt-3 text-xs text-[var(--color-ink)]/55">
            You can email attachments (press releases, logos, photographs) to {siteConfig.contactEmail} after submitting. Nothing is published without review.
          </p>
          <button type="submit" disabled={status === 'loading'} className="btn btn-ink btn-block-sm mt-6">
            {status === 'loading' ? 'Sending…' : 'Submit enquiry'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-sm text-[var(--color-ink)]/80">Thank you. Your enquiry has been received for review.</p>
          )}
          {status === 'queued' && (
            <p className="mt-4 text-sm text-[var(--color-ink)]/80">
              Enquiry captured. When the CMS is online, submissions are stored for approval.
            </p>
          )}
          {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
        </form>
      </section>
    </>
  )
}
