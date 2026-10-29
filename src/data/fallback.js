import { siteConfig } from '../config/site'

const brand = siteConfig.name

export const fallbackHomepage = {
  heroTitle: siteConfig.headline,
  heroSubtitle:
    'Promote your services, advertise your products, publish business news and find new customers — across the UK and internationally.',
  intro: `${brand} helps UK and international businesses grow visibility through editorial features, business listings, digital campaigns and sponsored news. Whether you need a company profile, a press release or a full promotional campaign, we give your business a professional platform with global reach.`,
  servicesIntro:
    'Public relations, press releases, sponsored articles, company interviews, digital PR and advertising campaigns — all managed from one place.',
  ctaTitle: 'Ready to promote your business?',
  ctaText:
    'Tell us about your company, website and the services you need. Submissions are reviewed and approved before any publication.',
  ctaButtonLabel: 'Enquire about promotion',
}

export const fallbackArticles = [
  {
    id: 1,
    slug: 'northbridge-logistics-nationwide-expansion',
    title: 'Northbridge Logistics expands nationwide delivery network',
    excerpt:
      'How a regional freight firm used operational excellence and customer trust to scale across the UK.',
    companyName: 'Northbridge Logistics',
    companyDescription: 'UK freight and last-mile delivery specialists serving retail and manufacturing.',
    location: 'Manchester, UK',
    featured: true,
    industry: { name: 'Logistics', slug: 'logistics' },
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    content:
      '<p>Northbridge Logistics has grown from a regional fleet into a nationwide delivery partner for high-street and e-commerce brands.</p><p>Their focus on reliability, real-time tracking and specialist handling has opened new contracts across the Midlands and South East.</p>',
    background: '<p>Founded in 2012, Northbridge began with five vans and a warehouse in Salford.</p>',
    productsServices: '<p>Same-day delivery, temperature-controlled freight, and warehouse fulfilment.</p>',
    seoTitle: `Northbridge Logistics nationwide expansion | ${brand}`,
    seoDescription: 'Company feature on Northbridge Logistics and their UK expansion.',
  },
  {
    id: 2,
    slug: 'harbour-kitchen-coastal-dining',
    title: 'Harbour Kitchen brings coastal dining inland',
    excerpt: 'A seafood restaurant group turning seasonal catch into a recognisable national brand.',
    companyName: 'Harbour Kitchen',
    companyDescription: 'Coastal-inspired restaurants focused on sustainable seafood.',
    location: 'Brighton, UK',
    featured: true,
    industry: { name: 'Hospitality', slug: 'hospitality' },
    websiteUrl: 'https://example.com',
    coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    content:
      '<p>Harbour Kitchen has built a loyal following by pairing sustainable sourcing with warm, design-led dining rooms.</p>',
    seoTitle: `Harbour Kitchen brand feature | ${brand}`,
    seoDescription: 'Business promotion article for Harbour Kitchen.',
  },
  {
    id: 3,
    slug: 'clearpath-fintech-sme-lending',
    title: 'ClearPath Finance simplifies lending for SMEs',
    excerpt: 'A fintech platform helping small businesses access working capital without the paperwork maze.',
    companyName: 'ClearPath Finance',
    companyDescription: 'Digital lending tools for UK small and medium-sized enterprises.',
    location: 'London, UK',
    featured: true,
    industry: { name: 'Finance', slug: 'finance' },
    coverUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    content: '<p>ClearPath Finance digitises SME credit decisions so founders can fund growth faster.</p>',
    seoTitle: `ClearPath Finance company profile | ${brand}`,
    seoDescription: 'Profile of ClearPath Finance and its SME lending platform.',
  },
]

export const fallbackPosts = [
  {
    id: 1,
    slug: 'why-earned-media-still-beats-ads',
    title: 'Why earned media still beats paid ads for trust',
    excerpt: 'Customers believe editorial coverage more than banners. Here is how PR converts that trust into pipeline.',
    postType: 'pr-marketing',
    featured: true,
    category: { name: 'Insights', slug: 'insights' },
    coverUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Sponsored placements have a role, but independent editorial mentions remain one of the strongest trust signals for buyers researching a brand.</p>
      <p>When a respected publication covers your company, readers treat it as third-party validation. That trust often shortens sales cycles and improves inbound enquiry quality.</p>
      <h2>What works in practice</h2>
      <p>Lead with customer outcomes, founder insight and timely industry angles. Pair each feature with clear proof — revenue milestones, case studies or sector data — so journalists and buyers can verify the story quickly.</p>
      <p>At ${brand}, we help businesses turn those angles into permanent, shareable features and news posts that keep working long after a paid campaign ends.</p>
    `,
    seoTitle: `Earned media vs paid ads | ${brand}`,
    seoDescription: 'Why PR-driven coverage still outperforms advertising for trust.',
  },
  {
    id: 2,
    slug: 'interview-founder-of-fieldwork-studio',
    title: 'Interview: the founder of Fieldwork Studio on brand storytelling',
    excerpt: 'A conversation about turning technical products into stories editors want to publish.',
    postType: 'interview',
    featured: true,
    category: { name: 'Interviews', slug: 'interviews' },
    coverUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Fieldwork Studio helps B2B companies translate complex offers into clear narratives for trade press.</p>
      <p>“Buyers do not buy features in isolation,” the founder told us. “They buy confidence that you understand their problem and can prove results.”</p>
      <h2>Story first, product second</h2>
      <p>Their process starts with customer interviews, then maps those insights into headlines editors can use. Product screenshots come later — once the human story is sharp.</p>
      <p>The interview is a temporary sample feature for ${brand} News while live CMS content is being prepared.</p>
    `,
    seoTitle: `Fieldwork Studio founder interview | ${brand}`,
    seoDescription: 'Interview on brand storytelling for technical products.',
  },
  {
    id: 3,
    slug: 'uk-retail-pr-trends-this-quarter',
    title: 'UK retail PR trends this quarter',
    excerpt: 'Sustainability claims, founder-led stories and local press partnerships are shaping retail publicity.',
    postType: 'industry-insight',
    featured: true,
    category: { name: 'News', slug: 'news' },
    coverUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Retail brands that pair product launches with founder interviews and local community angles are seeing stronger pickup.</p>
      <p>Editors remain cautious of vague green claims. Specific actions — packaging changes, supplier standards, measurable waste reduction — travel further than slogans.</p>
      <h2>What to publish now</h2>
      <ul>
        <li>Founder Q&amp;As tied to a real launch moment</li>
        <li>Store or region stories with local media hooks</li>
        <li>Customer outcome features with photos and proof</li>
      </ul>
    `,
    seoTitle: `UK retail PR trends | ${brand}`,
    seoDescription: 'Industry insight on current UK retail publicity trends.',
  },
  {
    id: 4,
    slug: 'how-to-prepare-a-company-feature',
    title: 'How to prepare a company feature for publication',
    excerpt: 'A practical checklist for logos, photos, boilerplate and approvals before your business story goes live.',
    postType: 'pr-marketing',
    featured: false,
    category: { name: 'Guides', slug: 'guides' },
    coverUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Strong company features start with organised assets. Before publication, gather a clear logo, high-resolution photographs, a short company description and authorised contact details.</p>
      <h2>Checklist</h2>
      <ul>
        <li>Company background in plain English</li>
        <li>Products and services summary</li>
        <li>Website and social links</li>
        <li>Industry category and location</li>
        <li>SEO title and description</li>
      </ul>
      <p>Submit materials through our enquiry form — every submission is reviewed before publication.</p>
    `,
    seoTitle: `Prepare a company feature | ${brand}`,
    seoDescription: 'Checklist for preparing business promotion articles.',
  },
  {
    id: 5,
    slug: 'sponsored-content-that-still-reads-well',
    title: 'Sponsored content that still reads like journalism',
    excerpt: 'How to promote a product without sounding like a brochure — examples from recent campaigns.',
    postType: 'sponsored',
    featured: false,
    category: { name: 'Sponsored', slug: 'sponsored' },
    coverUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>Readers skim past hard sell. Sponsored articles perform better when they teach something useful first, then introduce the offer with clear labelling.</p>
      <p>Use case studies, expert quotes and practical steps. Keep the brand presence honest and the advice genuine.</p>
      <p>This temporary article demonstrates how ${brand} presents sponsored business content with imagery and structure.</p>
    `,
    seoTitle: `Sponsored content tips | ${brand}`,
    seoDescription: 'How to write sponsored articles that still feel valuable.',
  },
  {
    id: 6,
    slug: 'success-story-clearpath-finance',
    title: 'Success story: ClearPath Finance earns national visibility',
    excerpt: 'How a fintech SME used interviews and a flagship company feature to reach new partners.',
    postType: 'success-story',
    featured: false,
    category: { name: 'Success stories', slug: 'success-stories' },
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80',
    content: `
      <p>ClearPath Finance combined a founder interview with a detailed company feature covering products, location and customer outcomes.</p>
      <p>Within weeks, the permanent article URL was shared with investors and partners as a trusted overview of the business.</p>
      <h2>Results they reported</h2>
      <p>Higher quality inbound enquiries, stronger brand search, and a reusable press pack built from published assets.</p>
    `,
    seoTitle: `ClearPath Finance success story | ${brand}`,
    seoDescription: 'How ClearPath Finance used PR features to grow visibility.',
  },
]

export const fallbackServices = [
  {
    id: 1,
    slug: 'public-relations',
    title: 'Public relations & publicity',
    shortDescription: 'Secure coverage that introduces your company to journalists, partners and customers.',
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    content: '<p>We pitch your story to relevant outlets and manage relationships that keep your brand in the conversation.</p>',
  },
  {
    id: 2,
    slug: 'business-promotion',
    title: 'Business promotion',
    shortDescription: 'Company features that showcase your background, products and services.',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Long-form promotional articles with permanent URLs, imagery and SEO built for discovery.</p>',
  },
  {
    id: 3,
    slug: 'press-releases',
    title: 'Press releases',
    shortDescription: 'Clear, newsworthy releases written for editors and distribution networks.',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    content: '<p>From product launches to funding rounds, we draft and place releases that earn attention.</p>',
  },
  {
    id: 4,
    slug: 'sponsored-articles',
    title: 'Sponsored articles',
    shortDescription: 'Paid editorial placements that still read like valuable journalism.',
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Sponsored content crafted to educate audiences while promoting your offer responsibly.</p>',
  },
  {
    id: 5,
    slug: 'company-profiles',
    title: 'Company profiles & interviews',
    shortDescription: 'Founder and leadership interviews that humanise your brand.',
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    content: '<p>We produce interview-led features that highlight expertise, culture and customer outcomes.</p>',
  },
  {
    id: 6,
    slug: 'digital-pr',
    title: 'Digital PR & brand awareness',
    shortDescription: 'Online campaigns that grow mentions, backlinks and branded search.',
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Combine content, outreach and digital distribution to build lasting brand awareness.</p>',
  },
  {
    id: 7,
    slug: 'product-promotion',
    title: 'Product & service promotion',
    shortDescription: 'Launch coverage for new products, packages and service lines.',
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Position launches with messaging, assets and media targeting tuned to your category.</p>',
  },
  {
    id: 8,
    slug: 'campaigns',
    title: 'Advertising & promotional campaigns',
    shortDescription: 'Integrated campaigns that blend PR, content and paid amplification.',
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: '<p>Multi-channel campaigns planned around clear commercial goals and measurable visibility.</p>',
  },
]

export const fallbackPrivacy = {
  title: 'Privacy policy',
  slug: 'privacy',
  content: `<p>We collect enquiry details solely to respond to promotion requests. Submissions are reviewed by our team and are not published without approval. ${brand} does not operate public member accounts. Contact us to request deletion of personal data held in enquiries.</p><p>We use essential cookies to run the site and remember cookie preferences. For questions email ${siteConfig.contactEmail}.</p>`,
}
