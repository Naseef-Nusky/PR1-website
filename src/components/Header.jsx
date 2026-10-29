import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

const links = [
  { to: '/businesses', label: 'Businesses' },
  { to: '/blog', label: 'News' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Enquire' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHero = pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`inset-x-0 top-0 z-50 ${onHero ? 'absolute' : 'relative bg-[var(--color-ink)]'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:py-5 md:px-8">
        <Link to="/" className="text-white" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl tracking-tight md:text-4xl">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide text-white/80 transition hover:text-white ${
                  isActive ? 'text-white font-semibold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary !px-4 !py-2">
            Promote your business
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-white transition hover:bg-white/10 active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span key={open ? 'close' : 'open'} className="animate-icon-swap inline-flex">
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {open && (
        <div className="animate-menu-in border-t border-white/15 bg-[var(--color-ink)] px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-base text-white/85 transition hover:bg-white/10 hover:text-white ${
                    isActive ? 'bg-white/10 font-semibold text-white' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-block-sm mt-3"
            >
              Promote your business
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
