import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { siteConfig } from '../config/site'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01'
const SITE = siteConfig.id

export const sanityConfigured = Boolean(
  projectId && projectId !== 'yourProjectId' && !String(projectId).startsWith('YOUR_'),
)

const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const writeClient =
  sanityConfigured && import.meta.env.VITE_SANITY_WRITE_TOKEN
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
        token: import.meta.env.VITE_SANITY_WRITE_TOKEN,
      })
    : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source) {
  if (!builder || !source) return null
  return builder.image(source).auto('format').url()
}

export function blocksToHtml(blocks) {
  if (!blocks) return ''
  if (typeof blocks === 'string') return blocks
  if (!Array.isArray(blocks)) return ''

  return blocks
    .map((block) => {
      if (block._type === 'image') {
        const src = urlFor(block)
        return src ? `<p><img src="${src}" alt="" /></p>` : ''
      }
      if (block._type !== 'block' || !block.children) return ''
      const text = block.children
        .map((child) => {
          let t = child.text || ''
          if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`
          if (child.marks?.includes('em')) t = `<em>${t}</em>`
          return t
        })
        .join('')
      if (block.style === 'h2') return `<h2>${text}</h2>`
      if (block.style === 'h3') return `<h3>${text}</h3>`
      if (block.style === 'blockquote') return `<blockquote>${text}</blockquote>`
      if (block.listItem === 'bullet') return `<li>${text}</li>`
      return `<p>${text}</p>`
    })
    .join('')
}

function normalizeArticle(doc) {
  if (!doc) return null
  const logoUrl = urlFor(doc.logo)
  const firstPhoto = Array.isArray(doc.photographs) ? urlFor(doc.photographs[0]) : null
  return {
    ...doc,
    slug: doc.slug?.current || doc.slug,
    content: blocksToHtml(doc.content),
    background: blocksToHtml(doc.background),
    productsServices: blocksToHtml(doc.productsServices),
    logoUrl,
    coverUrl: firstPhoto || logoUrl || doc.coverUrl || null,
    industry: doc.industry
      ? { name: doc.industry.name, slug: doc.industry.slug?.current || doc.industry.slug }
      : null,
  }
}

function normalizePost(doc) {
  if (!doc) return null
  return {
    ...doc,
    slug: doc.slug?.current || doc.slug,
    content: blocksToHtml(doc.content),
    coverUrl: urlFor(doc.coverImage),
    category: doc.category
      ? { name: doc.category.name, slug: doc.category.slug?.current || doc.category.slug }
      : null,
  }
}

function normalizeService(doc) {
  if (!doc) return null
  const iconUrl = urlFor(doc.icon)
  return {
    ...doc,
    slug: doc.slug?.current || doc.slug,
    content: blocksToHtml(doc.content),
    iconUrl,
    imageUrl: iconUrl || doc.imageUrl || null,
  }
}

function normalizeHomepage(doc) {
  if (!doc) return null
  return {
    ...doc,
    intro: blocksToHtml(doc.intro) || doc.intro,
    featuredArticles: (doc.featuredArticles || []).map(normalizeArticle).filter(Boolean),
    featuredPosts: (doc.featuredPosts || []).map(normalizePost).filter(Boolean),
  }
}

function normalizePage(doc) {
  if (!doc) return null
  return {
    ...doc,
    slug: doc.slug?.current || doc.slug,
    content: blocksToHtml(doc.content),
  }
}

async function fetchDocs(query, params = {}) {
  if (!client) throw new Error('Sanity is not configured')
  return client.fetch(query, { site: SITE, ...params })
}

export async function fetchHomepage() {
  const doc = await fetchDocs(
    `*[_type == "homepage" && site == $site][0]{
      ...,
      featuredArticles[]->{..., industry->{name, slug}, logo},
      featuredPosts[]->{..., category->{name, slug}, coverImage}
    }`,
  )
  return normalizeHomepage(doc)
}

export async function fetchSiteSettings() {
  return fetchDocs(`*[_type == "siteSettings" && site == $site][0]`)
}

export async function fetchBusinessArticles({ featured } = {}) {
  const featuredFilter = featured ? ' && featured == true' : ''
  const docs = await fetchDocs(
    `*[_type == "businessArticle" && site == $site${featuredFilter}] | order(_updatedAt desc){
      ...,
      industry->{name, slug},
      logo
    }`,
  )
  return (docs || []).map(normalizeArticle)
}

export async function fetchBusinessArticle(slug) {
  const doc = await fetchDocs(
    `*[_type == "businessArticle" && site == $site && slug.current == $slug][0]{
      ...,
      industry->{name, slug},
      logo,
      photographs
    }`,
    { slug },
  )
  return normalizeArticle(doc)
}

export async function fetchBlogPosts({ featured } = {}) {
  const featuredFilter = featured ? ' && featured == true' : ''
  const docs = await fetchDocs(
    `*[_type == "blogPost" && site == $site${featuredFilter}] | order(_updatedAt desc){
      ...,
      category->{name, slug},
      coverImage
    }`,
  )
  return (docs || []).map(normalizePost)
}

export async function fetchBlogPost(slug) {
  const doc = await fetchDocs(
    `*[_type == "blogPost" && site == $site && slug.current == $slug][0]{
      ...,
      category->{name, slug},
      coverImage
    }`,
    { slug },
  )
  return normalizePost(doc)
}

export async function fetchServices() {
  const docs = await fetchDocs(
    `*[_type == "service" && site == $site] | order(order asc){..., icon}`,
  )
  return (docs || []).map(normalizeService)
}

export async function fetchService(slug) {
  const doc = await fetchDocs(
    `*[_type == "service" && site == $site && slug.current == $slug][0]{..., icon}`,
    { slug },
  )
  return normalizeService(doc)
}

export async function fetchPage(slug) {
  const doc = await fetchDocs(
    `*[_type == "page" && site == $site && slug.current == $slug][0]`,
    { slug },
  )
  return normalizePage(doc)
}

export async function submitEnquiry(data) {
  if (!writeClient) {
    throw new Error('Missing VITE_SANITY_WRITE_TOKEN')
  }
  return writeClient.create({
    _type: 'enquiry',
    site: SITE,
    status: 'pending',
    ...data,
  })
}

export async function withFallback(loader, fallback) {
  try {
    if (!sanityConfigured) return fallback
    const data = await loader()
    if (data == null || (Array.isArray(data) && data.length === 0)) return fallback
    // Ignore empty CMS docs so temporary local content still shows
    if (typeof data === 'object' && !data.title && !data.slug) return fallback
    return data
  } catch {
    return fallback
  }
}
