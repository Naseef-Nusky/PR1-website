import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={`min-h-screen text-[var(--color-ink)] ${isHome ? 'bg-[var(--color-ink)]' : 'bg-[var(--color-mist)]'}`}>
      <Header />
      <Outlet />
      <Footer />
      <CookieBanner />
    </div>
  )
}
