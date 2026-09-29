import Head from 'next/head';

const SITE_NAME = 'Maranatha Wellbeing Support WA';
const SITE_URL = 'https://www.maranathagroup.com.au';
const DEFAULT_IMAGE = `${SITE_URL}/images/black-logo.png`;

/**
 * Drop this at the top of any page's returned JSX (inside the fragment,
 * alongside <Navbar />) to get a full, correct SEO head: title, meta
 * description, canonical URL, Open Graph, Twitter Card, and a robots
 * directive that opts into Google Discover's large-image surfacing
 * (max-image-preview:large). Pass `image` as an absolute URL where
 * possible — a large (1200px+ wide), real photo is what Discover actually
 * looks for; the site logo is only a fallback.
 *
 * Pass `jsonLd` (a single object or an array of objects) to inject
 * structured data specific to that page — e.g. a Service or FAQPage
 * schema — on top of the sitewide Organization schema already in _app.js.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_AU" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
