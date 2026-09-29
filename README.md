This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Changelog: Case Management + search + SEO (this update)

### New service: Case Management
- `components/Services/serviceData.js` — added a `case-management` entry (category "Coordination & Support") so it appears in listings, related-service widgets and search.
- `pages/case-management.js` — a full, bespoke page built from the client-supplied copy (approach, goal categories, 6-step process, person-centred values, support network, transitions, why-choose-us). Deliberately reuses existing CSS classes only (`.mar-content-card`, `.mar-feature-grid`, `.m26-points`, `.m26-step-grid`, etc.) — **no new CSS was added.**
- `pages/services.js` — registered the new "Coordination & Support" category in the listing groups.
- `components/Layouts/Navbar.js` — added to the Services dropdown.

### Site search — actually fixed, not just patched
`pages/search.js` previously queried **only** WordPress (via GraphQL) for `posts` and `pages`. Every hardcoded service (all 12, including the new Case Management page) and most static pages (About, FAQ, Contact, Privacy, Terms) are plain Next.js pages, not WordPress content — they were completely invisible to search.

- `components/search/localIndex.js` — new local index over `serviceData.js` and a small curated list of static pages.
- `pages/search.js` — now merges local service/page matches with the WordPress results. If the WordPress backend is down, local results (services, static pages) still work — only the blog-post section degrades.

### SEO
- `components/Common/Seo.js` — new shared component: canonical URL, Open Graph, Twitter Card, and a `robots` meta with `max-image-preview:large` (what Google Discover actually checks for before surfacing a large-image card). Applied to the homepage, About, FAQ, Services index, Contact, Contact Us, and every service page (via `ServicePage.js`) and the new Case Management page — several of these (home, contact) previously had **no** `<title>`/meta description of their own at all.
- Sitewide `Organization` JSON-LD added in `pages/_app.js`, using the real address/phone/email/socials already in the footer. The placeholder Twitter link (`https://twitter.com/`, not a real handle) was deliberately left out of `sameAs`.
- Per-service `Service` JSON-LD added on every service page.
- `pages/_document.js` — fixed `<html lang="zxx">` (meaning "no linguistic content") to `lang="en-AU"`.
- `public/robots.txt` — fixed invalid `//` comment syntax, added a `Sitemap:` directive.
- `next-sitemap.config.js` — excludes `/api/*` and `/accounts`, sets `generateRobotsTxt: false` so it doesn't fight with the hand-maintained robots.txt, and weights `/` and `/services/` with higher priority.
- Fixed a duplicate-content pair: `/contact/` and `/contact-us/` serve the same purpose, but every internal link on the site points to `/contact/`. `/contact-us/`'s canonical now points at `/contact/` to consolidate ranking signals instead of splitting them.
- Fixed `og:locale="en_IN"` → `en_AU` on the blog post template.

### Google Search Console
- `pages/_document.js` now reads `NEXT_PUBLIC_GSC_VERIFICATION` and, if set, renders the `google-site-verification` meta tag automatically. Once you have a verification code from Search Console, set that one environment variable and redeploy — no code changes needed.
- `package.json` was missing `graphql`, a **required** peer dependency of `@apollo/client` — this would fail `npm install` + build in any fresh environment, not just this one.

### Not done / needs a human
- The WordPress GraphQL backend (`test.maranathagroup.com.au/graphql`) wasn't reachable from the environment this was built in, so blog-related `getStaticProps`/`getStaticPaths` fell back to their built-in empty-result handling. Worth a real build against the live backend before shipping.
- Google Search Console verification (meta tag or DNS) isn't set up — add it once you have the property claimed.
- `og-image` for pages without a specific photo still falls back to the logo (`/images/black-logo.png`) — a proper 1200×630 social card would look better in link previews.
