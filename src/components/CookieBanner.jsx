import { useEffect, useState } from 'react'

const KEY = 'pr-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true)
  }, [])

  if (!visible) return null

  function accept() {
    localStorage.setItem(KEY, 'accepted')
    setVisible(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[var(--color-ink)]/95 px-4 py-4 text-white backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-white/80">
          We use essential cookies to run this site and remember your preferences. See our{' '}
          <a href="/privacy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
        <button type="button" onClick={accept} className="btn btn-primary btn-block-sm shrink-0 !py-2.5">
          Accept
        </button>
      </div>
    </div>
  )
}
