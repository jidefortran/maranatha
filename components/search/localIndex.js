import { coreServices } from '../Services/serviceData';

/**
 * pages/search.js only ever queried WordPress (via GraphQL) for "posts"
 * and "pages" — but the 12 core services and most of the site's static
 * pages (About, FAQ, Contact) are plain Next.js pages hardcoded in this
 * repo, not WordPress content. They were invisible to search. This file
 * builds a small local index for those, merged in alongside the WP
 * results in pages/search.js.
 */
export const staticPages = [
  { title: 'About Us', slug: 'about', excerpt: 'Who we are and how Maranatha Wellbeing Support WA works with people across Western Australia.' },
  { title: 'Frequently Asked Questions', slug: 'faq', excerpt: "Answers to common questions about Maranatha's disability, mental health and community wellbeing services." },
  { title: 'Contact Us', slug: 'contact', excerpt: 'Get in touch with Maranatha Wellbeing Support WA — phone, email or an online enquiry.' },
  { title: 'Privacy Policy', slug: 'privacy-policy', excerpt: 'How Maranatha Wellbeing Support WA handles personal information.' },
  { title: 'Terms & Conditions', slug: 'terms-conditions', excerpt: 'Terms of use for the Maranatha Wellbeing Support WA website.' },
  { title: 'Feedback', slug: 'feedback', excerpt: 'Share feedback or raise a concern with Maranatha Wellbeing Support WA.' },
];

function normalise(str = '') {
  return str.toLowerCase();
}

function matches(haystack, terms) {
  const lower = normalise(haystack);
  return terms.every((term) => lower.includes(term));
}

export function searchLocalContent(rawQuery) {
  const query = normalise(rawQuery).trim();
  if (!query) return { services: [], pages: [] };

  const terms = query.split(/\s+/).filter(Boolean);

  const services = coreServices
    .filter((service) => matches(`${service.title} ${service.category} ${service.eyebrow} ${service.intro} ${service.bullets.join(' ')} ${service.note}`, terms))
    .map((service) => ({
      slug: service.slug,
      title: service.title,
      excerpt: service.intro,
    }));

  const pages = staticPages.filter((page) => matches(`${page.title} ${page.excerpt}`, terms));

  return { services, pages };
}
