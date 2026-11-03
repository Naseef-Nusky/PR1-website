import { siteConfig } from '../config/site'

const brand = siteConfig.name

export const fallbackHomepage = {
  heroTitle: siteConfig.headline,
  heroSubtitle:
    'Promote your services, advertise your products, publish business news and find new customers across the UK and internationally.',
  intro: `${brand} helps UK and international businesses grow visibility through editorial features, business listings, digital campaigns and sponsored news. Whether you need a company profile, a press release or a full promotional campaign, we give your business a professional platform with global reach.`,
  servicesIntro:
    'Public relations, press releases, sponsored articles, company interviews, digital PR and advertising campaigns, all managed from one place.',
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
    content: `
      <p>Northbridge Logistics has grown from a regional fleet into a nationwide delivery partner for high-street and e-commerce brands. The shift did not happen overnight. It came from consistent on-time performance and a willingness to handle awkward, high-care consignments that other carriers refused.</p>
      <p><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>What changed for customers</h2>
      <p>Their focus on reliability, real-time tracking and specialist handling opened new contracts across the Midlands and South East. Buyers now use Northbridge for peak retail periods as well as steady B2B routes.</p>
      <p>Operations leads credit a simple rule: every failed delivery gets a same-day review. That discipline built trust with retailers who cannot afford silent delays.</p>
      <h2>Looking ahead</h2>
      <p>Northbridge is adding capacity in the South West and refining its temperature-controlled lanes for grocery partners. The company feature on ${brand} keeps a permanent overview that sales and partner teams can share.</p>
      <p><img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
    `,
    background: `
      <p>Founded in 2012, Northbridge began with five vans and a warehouse in Salford. Early customers were local manufacturers who needed dependable same-day drops into Greater Manchester.</p>
      <p>As e-commerce volumes rose, the team invested in tracking software, trained drivers for specialist handling, and opened hub points that shortened transit times between regions.</p>
    `,
    productsServices: `
      <ul>
        <li>Same-day and next-day delivery across England and Wales</li>
        <li>Temperature-controlled freight for food and healthcare</li>
        <li>Warehouse fulfilment and returns handling</li>
        <li>Retail and manufacturing contract logistics</li>
      </ul>
    `,
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
    content: `
      <p>Harbour Kitchen has built a loyal following by pairing sustainable sourcing with warm, design-led dining rooms. The brand feels coastal without relying on clichés, and that restraint has helped it travel inland.</p>
      <p><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Brand with substance</h2>
      <p>Instead of vague green claims, Harbour Kitchen publishes supplier notes and seasonal changes. Guests can see when a fish leaves the board because the catch was limited that week.</p>
      <p>PR features and founder interviews helped new cities understand the story before opening night, so first visits arrived with context rather than curiosity alone.</p>
      <p><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>The company continues to open carefully, one site at a time, with the same sourcing standards that made the Brighton original matter.</p>
    `,
    background: `
      <p>Harbour Kitchen started as a single Brighton site with a short menu built around day-boat catch. Guests came back for the atmosphere as much as the food: warm rooms, open kitchens and a clear story about sourcing.</p>
      <p>The founders kept the same approach when they opened inland locations, adapting dishes to what suppliers could deliver that week rather than forcing a fixed national menu.</p>
    `,
    productsServices: `
      <ul>
        <li>Seasonal seafood restaurants</li>
        <li>Private dining and events</li>
        <li>Supplier partnerships with coastal fisheries</li>
        <li>Limited retail products for guests to take home</li>
      </ul>
    `,
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
    content: `
      <p>ClearPath Finance digitises SME credit decisions so founders can fund growth faster. The platform focuses on clarity: applicants see what is needed, what is missing, and when a decision is expected.</p>
      <p><img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Why the story resonates</h2>
      <p>Founders are tired of opaque processes. ClearPath's public feature and interview content explain the problem in plain English, then show how the product removes friction without overselling risk.</p>
      <p>Partners use the published company page as a quick brief before introductions, which shortens early conversations.</p>
      <p><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>As ClearPath grows, the permanent feature on ${brand} remains a living overview of products, leadership and customer outcomes.</p>
    `,
    background: `
      <p>ClearPath Finance was founded by operators who had watched good businesses stall while waiting on credit decisions. The product digitises the parts of lending that used to sit in email threads and spreadsheets.</p>
      <p>Based in London, the team works with UK SMEs that need working capital for stock, hiring or short-term growth without a long bank process.</p>
    `,
    productsServices: `
      <ul>
        <li>Digital credit decisioning for SMEs</li>
        <li>Working capital facilities</li>
        <li>Partner integrations for accountants and platforms</li>
        <li>Transparent application tracking for founders</li>
      </ul>
    `,
    seoTitle: `ClearPath Finance company profile | ${brand}`,
    seoDescription: 'Profile of ClearPath Finance and its SME lending platform.',
  },
]

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

export const fallbackPosts = [
  {
    id: 1,
    slug: 'why-earned-media-still-beats-ads',
    title: 'Why earned media still beats paid ads for trust',
    excerpt: 'Customers believe editorial coverage more than banners. Here is how PR converts that trust into pipeline.',
    postType: 'pr-marketing',
    featured: true,
    category: { name: 'Insights', slug: 'insights' },
    coverUrl: u('photo-1585829365295-ab7cd400c167'),
    content: `
      <p>Sponsored placements have a role in the mix, but independent editorial mentions remain one of the strongest trust signals for buyers researching a brand. When someone finds your company through a search or a referral, they often look for proof that other people take you seriously.</p>
      <p>A respected publication covering your work acts as third-party validation. That trust often shortens sales cycles and improves the quality of inbound enquiries, because readers arrive already warmed up to your story.</p>
      <p><img src="${u('photo-1557804506-669a67965ba0')}" alt="" /></p>
      <h2>What works in practice</h2>
      <p>Lead with customer outcomes, founder insight and timely industry angles. Pair each feature with clear proof such as revenue milestones, case studies or sector data so journalists and buyers can verify the story quickly.</p>
      <p>Avoid vague claims. Editors and readers both respond better to specific numbers, named customers (with permission) and a clear sense of why the story matters now.</p>
      <h2>How to turn coverage into pipeline</h2>
      <ul>
        <li>Publish a permanent company feature you can share with prospects</li>
        <li>Follow coverage with a short news update or interview</li>
        <li>Reuse quotes and photos in sales decks and partner packs</li>
        <li>Track branded search and enquiry quality after each placement</li>
      </ul>
      <p><img src="${u('photo-1460925895917-afdab827c52f')}" alt="" /></p>
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
    coverUrl: u('photo-1556761175-5973dc0f32e7'),
    content: `
      <p>Fieldwork Studio helps B2B companies translate complex offers into clear narratives for trade press. We sat down with the founder to talk about how technical products earn editorial attention without drowning readers in jargon.</p>
      <p>"Buyers do not buy features in isolation," the founder told us. "They buy confidence that you understand their problem and can prove results."</p>
      <p><img src="${u('photo-1522071820081-009f0129c71c')}" alt="" /></p>
      <h2>Story first, product second</h2>
      <p>Their process starts with customer interviews, then maps those insights into headlines editors can use. Product screenshots come later, once the human story is sharp.</p>
      <p>The team looks for friction points buyers already feel: slow onboarding, messy handovers, or costly downtime. Those moments become the spine of a feature or interview.</p>
      <h2>Advice for founders preparing a profile</h2>
      <ul>
        <li>Write down three customer outcomes in plain English</li>
        <li>Collect one strong photo of the team or workspace</li>
        <li>Prepare a short origin story that fits in two paragraphs</li>
        <li>Agree quote approvals before the interview goes live</li>
      </ul>
      <p><img src="${u('photo-1600880292203-757bb62b4baf')}" alt="" /></p>
      <p>Fieldwork's approach mirrors what we see across ${brand} News: the companies that get shared most are the ones that sound human first and commercial second.</p>
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
    coverUrl: u('photo-1441986300917-64674bd600d8'),
    content: `
      <p>Retail brands that pair product launches with founder interviews and local community angles are seeing stronger pickup this quarter. Editors want stories that feel grounded in a place, a person or a measurable change.</p>
      <p>Editors remain cautious of vague green claims. Specific actions like packaging changes, supplier standards and measurable waste reduction travel further than slogans.</p>
      <p><img src="${u('photo-1441984904996-e0b6ba687e04')}" alt="" /></p>
      <h2>What to publish now</h2>
      <ul>
        <li>Founder Q&amp;As tied to a real launch moment</li>
        <li>Store or region stories with local media hooks</li>
        <li>Customer outcome features with photos and proof</li>
        <li>Supplier or partnership announcements with clear benefit</li>
      </ul>
      <h2>Local press still matters</h2>
      <p>National coverage grabs attention, but regional titles often convert better for store openings, hiring drives and community programmes. A short feature with a strong image can travel from local pages into your own newsroom archive.</p>
      <p><img src="${u('photo-1556740738-b6a63e27c4df')}" alt="" /></p>
      <p>If you are planning a retail campaign this quarter, build the assets early: founder quotes, high-resolution store photos and one clear proof point editors can trust.</p>
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
    coverUrl: u('photo-1454165804606-c3d57bc86b40'),
    content: `
      <p>Strong company features start with organised assets. Before publication, gather a clear logo, high-resolution photographs, a short company description and authorised contact details. The smoother your pack, the faster your story can go live.</p>
      <p><img src="${u('photo-1432888498266-38ffec3eaf0a')}" alt="" /></p>
      <h2>Checklist</h2>
      <ul>
        <li>Company background in plain English</li>
        <li>Products and services summary</li>
        <li>Website and social links</li>
        <li>Industry category and location</li>
        <li>SEO title and description</li>
        <li>Approved logo and at least two photographs</li>
      </ul>
      <h2>Photos that work hard</h2>
      <p>Editors prefer real workplaces, people and products over stocky illustrations. Natural light, sharp focus and a simple composition usually beat heavily staged shots. Include captions if people appear in the frame.</p>
      <p><img src="${u('photo-1542744173-8e2bd585f281')}" alt="" /></p>
      <p>Submit materials through our enquiry form. Every submission is reviewed before publication, and we will flag anything that needs a clearer rewrite or a sharper image.</p>
    `,
    seoTitle: `Prepare a company feature | ${brand}`,
    seoDescription: 'Checklist for preparing business promotion articles.',
  },
  {
    id: 5,
    slug: 'sponsored-content-that-still-reads-well',
    title: 'Sponsored content that still reads like journalism',
    excerpt: 'How to promote a product without sounding like a brochure, with examples from recent campaigns.',
    postType: 'sponsored',
    featured: false,
    category: { name: 'Sponsored', slug: 'sponsored' },
    coverUrl: u('photo-1495020689067-958852a7765e'),
    content: `
      <p>Readers skim past hard sell. Sponsored articles perform better when they teach something useful first, then introduce the offer with clear labelling. The goal is to earn attention, not force a pitch into every sentence.</p>
      <p><img src="${u('photo-1504711434969-e33886168f5c')}" alt="" /></p>
      <h2>What good sponsored pieces do</h2>
      <ul>
        <li>Open with a problem the reader already recognises</li>
        <li>Share practical steps or a short case study</li>
        <li>Introduce the product as one proven option</li>
        <li>Keep claims checkable and lightly labelled</li>
      </ul>
      <p>Use case studies, expert quotes and practical steps. Keep the brand presence honest and the advice genuine. If a sentence only exists to sell, cut it.</p>
      <h2>A simple structure that holds up</h2>
      <p>Start with context, show proof, then invite the reader to learn more. A permanent URL on ${brand} News makes the piece easy to share with partners, investors and sales teams after the campaign window closes.</p>
      <p><img src="${u('photo-1551836022-d5d88e9218df')}" alt="" /></p>
      <p>When sponsored content reads like useful journalism, people finish it. That alone puts you ahead of most brochure-style placements.</p>
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
    coverUrl: u('photo-1553729459-efe14ef6055d'),
    content: `
      <p>ClearPath Finance combined a founder interview with a detailed company feature covering products, location and customer outcomes. The aim was simple: give partners and prospects one credible place to understand the business.</p>
      <p><img src="${u('photo-1554224155-6726b3ff858f')}" alt="" /></p>
      <h2>What they published</h2>
      <p>A long-form company profile explained how ClearPath digitises SME credit decisions. A separate interview captured the founder's view on trust, speed and what lenders get wrong about small businesses.</p>
      <p>Within weeks, the permanent article URL was shared with investors and partners as a trusted overview of the business. Sales teams used the same page instead of rebuilding slides from scratch.</p>
      <h2>Results they reported</h2>
      <ul>
        <li>Higher quality inbound enquiries</li>
        <li>Stronger branded search after publication</li>
        <li>A reusable press pack built from published assets</li>
        <li>Faster partner conversations with less back-and-forth</li>
      </ul>
      <p><img src="${u('photo-1573164713714-d95e436ab8d6')}" alt="" /></p>
      <p>ClearPath's experience is a useful template for other SMEs: one strong feature, one human interview, and consistent follow-up beats a scatter of short posts with no depth.</p>
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
    content: `
      <p>We pitch your story to relevant outlets and manage relationships that keep your brand in the conversation. Good publicity starts with a clear angle, not a generic press pack.</p>
      <p><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Founders, marketing leads and agencies who need credible introductions to journalists, partners and customers without guessing which outlets matter.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Story development and media angles</li>\n        <li>Targeted outreach to relevant outlets</li>\n        <li>Spokesperson preparation notes</li>\n        <li>Coverage follow-up and asset reuse</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Public relations works best when every placement feeds a permanent feature or news post you can keep sharing after the headline week ends.</p>
    `,
  },
  {
    id: 2,
    slug: 'business-promotion',
    title: 'Business promotion',
    shortDescription: 'Company features that showcase your background, products and services.',
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Long-form promotional articles with permanent URLs, imagery and SEO built for discovery. Your company gets a shareable page that explains who you are without a hard sell.</p>
      <p><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>UK and international businesses that need a credible public profile for partners, buyers and press.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Company background and product summary</li>\n        <li>Cover photography guidance</li>\n        <li>Permanent feature URL</li>\n        <li>SEO title and description</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1542744173-8e2bd585f281?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>A strong business feature becomes the default link in emails, decks and partner introductions.</p>
    `,
  },
  {
    id: 3,
    slug: 'press-releases',
    title: 'Press releases',
    shortDescription: 'Clear, newsworthy releases written for editors and distribution networks.',
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>From product launches to funding rounds, we draft and place releases that earn attention because they read like news, not brochures.</p>
      <p><img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Teams announcing milestones that deserve editor attention and a clean public record.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Newsworthy drafting and editing</li>\n        <li>Quote and boilerplate support</li>\n        <li>Distribution planning</li>\n        <li>Repurposing into website news posts</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We keep claims tight and dates clear so editors can move quickly.</p>
    `,
  },
  {
    id: 4,
    slug: 'sponsored-articles',
    title: 'Sponsored articles',
    shortDescription: 'Paid editorial placements that still read like valuable journalism.',
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Sponsored content crafted to educate audiences while promoting your offer responsibly. Readers stay when the piece teaches something useful first.</p>
      <p><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Brands that want paid reach without sounding like a brochure.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Brief development and angle selection</li>\n        <li>Editorial-style drafting</li>\n        <li>Clear labelling guidance</li>\n        <li>Visual recommendations</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>The best sponsored pieces leave readers smarter, then invite them to learn more about your offer.</p>
    `,
  },
  {
    id: 5,
    slug: 'company-profiles',
    title: 'Company profiles & interviews',
    shortDescription: 'Founder and leadership interviews that humanise your brand.',
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>We produce interview-led features that highlight expertise, culture and customer outcomes. People trust people, especially when buying complex services.</p>
      <p><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Founders and leadership teams who want a human story alongside the company feature.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Interview planning and questions</li>\n        <li>Editing for clarity and approval</li>\n        <li>Portrait or workplace image guidance</li>\n        <li>Publication on a permanent URL</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>A sharp interview often becomes the most shared asset in a promotion package.</p>
    `,
  },
  {
    id: 6,
    slug: 'digital-pr',
    title: 'Digital PR & brand awareness',
    shortDescription: 'Online campaigns that grow mentions, backlinks and branded search.',
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Combine content, outreach and digital distribution to build lasting brand awareness. Digital PR connects editorial storytelling with measurable online presence.</p>
      <p><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Teams that need more than a one-off article: ongoing visibility across search and social discovery.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Content planning for discovery</li>\n        <li>Outreach for mentions and links</li>\n        <li>Asset packaging for reuse</li>\n        <li>Basic performance review</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We focus on durable assets you can keep pointing people to, not vanity spikes that disappear.</p>
    `,
  },
  {
    id: 7,
    slug: 'product-promotion',
    title: 'Product & service promotion',
    shortDescription: 'Launch coverage for new products, packages and service lines.',
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Position launches with messaging, assets and media targeting tuned to your category. A launch should explain the problem you solve, not only the feature list.</p>
      <p><img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Product and marketing teams preparing a new offer, package or service line.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Launch narrative and key messages</li>\n        <li>Release or feature drafting</li>\n        <li>Image and proof-point checklist</li>\n        <li>Follow-up news updates</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>We help you ship a launch story that still makes sense weeks later on your permanent feature page.</p>
    `,
  },
  {
    id: 8,
    slug: 'campaigns',
    title: 'Advertising & promotional campaigns',
    shortDescription: 'Integrated campaigns that blend PR, content and paid amplification.',
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Multi-channel campaigns planned around clear commercial goals and measurable visibility. Editorial content sits at the centre so paid spend has something durable to amplify.</p>
      <p><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <h2>Who it is for</h2>
      <p>Businesses ready to coordinate PR, content and paid channels around one offer or market push.</p>
      <h2>What is included</h2>
      <ul>\n        <li>Campaign goal setting</li>\n        <li>Core story and creative direction</li>\n        <li>Channel mix recommendations</li>\n        <li>Reporting on visibility outcomes</li>
      </ul>
      <p><img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80" alt="" /></p>
      <p>Campaigns work harder when every channel points back to a strong company story.</p>
    `,
  }
]

export const fallbackPrivacy = {
  title: 'Privacy policy',
  slug: 'privacy',
  content: `<p>We collect enquiry details solely to respond to promotion requests. Submissions are reviewed by our team and are not published without approval. ${brand} does not operate public member accounts. Contact us to request deletion of personal data held in enquiries.</p><p>We use essential cookies to run the site and remember cookie preferences. For questions email ${siteConfig.contactEmail}.</p>`,
}
