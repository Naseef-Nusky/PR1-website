# PR (PR1 Website)

React + Tailwind + Sanity.

**PR** — *Your Business. Our Platform. Global Reach.*

Sanity site value: `pr1` · Studio: https://pr-websites.sanity.studio/

```bash
npm install && npm run dev
```

## Deploy on Vercel

1. Import **Naseef-Nusky/PR1-website** in [Vercel](https://vercel.com/new) (Framework: Vite).
2. Set these Environment Variables (Production + Preview):

| Name | Value |
|------|--------|
| `VITE_SANITY_PROJECT_ID` | `kyqpdwqu` |
| `VITE_SANITY_DATASET` | `production` |
| `VITE_SANITY_API_VERSION` | `2025-01-01` |
| `VITE_SANITY_WRITE_TOKEN` | *(optional — needed for live enquiry submissions)* |

3. Deploy. `vercel.json` already rewrites routes for React Router.

Or from this folder after `vercel login`:

```bash
npx vercel --prod
```
