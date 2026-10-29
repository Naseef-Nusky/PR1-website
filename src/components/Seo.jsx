import { useEffect } from 'react'
import { siteConfig } from '../config/site'

export default function Seo({ title, description }) {
  useEffect(() => {
    const full = title ? `${title} | ${siteConfig.name}` : siteConfig.name
    document.title = full
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description || siteConfig.description)
  }, [title, description])
  return null
}
