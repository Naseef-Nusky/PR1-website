import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { images } from '../config/images'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 img-cover"
        style={{ backgroundImage: `url(${images.city})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[var(--color-ink)]/88" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <p className="font-display text-3xl sm:text-4xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
          <SocialIcons links={siteConfig.social} className="mt-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/businesses" className="hover:text-white">Business features</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog & news</Link></li>
            <li><Link to="/services" className="hover:text-white">PR services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Promotion enquiry</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
            <li>{siteConfig.contactPhone}</li>
            <li className="max-w-xs leading-relaxed">{siteConfig.address}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-4 text-center text-xs text-white/45 md:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  )
}
