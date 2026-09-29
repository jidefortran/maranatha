import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import PageBanner from '../Common/PageBanner';
import Seo, { SITE_URL } from '../Common/Seo';
import { coreServices, serviceBySlug } from './serviceData';

export default function ServicePage({ slug }) {
  const service = serviceBySlug[slug] || coreServices[0];
  const related = coreServices.filter((item) => item.slug !== service.slug && item.category === service.category).slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.intro,
    url: `${SITE_URL}/${service.slug}/`,
    areaServed: 'Western Australia',
    provider: { '@type': 'Organization', name: 'Maranatha Wellbeing Support WA', url: SITE_URL },
  };

  return (
    <>
      <Seo
        title={service.title}
        description={`${service.title}: ${service.intro}`}
        path={`/${service.slug}/`}
        image={`${SITE_URL}${service.image}`}
        jsonLd={serviceSchema}
      />
      <Navbar />
      <PageBanner pageTitle={service.title} homePageUrl="/" homePageText="Home" activePageText={service.title} bgImgClass="item-bg2" />

      <main className="mar-service-page">
        <section className="mar-service-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="mar-eyebrow">{service.category}</span>
                <h1>{service.eyebrow}</h1>
                <p className="mar-lead">{service.intro}</p>
                <div className="mar-actions">
                  <Link href="/contact" className="mar-btn mar-btn-primary">Talk to our team</Link>
                  <a href="tel:+61493396991" className="mar-btn mar-btn-secondary">0493 396 991</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mar-service-image">
                  <Image src={service.image} alt={`${service.title} support`} width={900} height={650} priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mar-service-body">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="mar-content-card">
                  <span className="mar-eyebrow">How we can help</span>
                  <h2>Support shaped around your goals</h2>
                  <p>There is no single version of support that works for everyone. We start by understanding what is important to you, what is difficult right now, and what you would like to work towards.</p>
                  <div className="mar-feature-grid">
                    {service.bullets.map((bullet) => <div className="mar-feature" key={bullet}><span aria-hidden="true">✓</span><p>{bullet}</p></div>)}
                  </div>
                </div>
                <div className="mar-note"><strong>A clear and honest approach</strong><p>{service.note}</p></div>
              </div>
              <aside className="col-lg-4">
                <div className="mar-side-card">
                  <span className="mar-eyebrow">Your next step</span>
                  <h3>Not sure what support you need?</h3>
                  <p>You do not need to have everything figured out before contacting us. Tell us a little about your situation and we can discuss the next step.</p>
                  <Link href="/contact" className="mar-btn mar-btn-primary w-100">Start a conversation</Link>
                </div>
                {related.length > 0 && <div className="mar-side-card mar-related"><h3>You may also be interested in</h3>{related.map((item) => <Link key={item.slug} href={`/${item.slug}/`}>{item.title}<span>→</span></Link>)}</div>}
              </aside>
            </div>
          </div>
        </section>

        <section className="mar-service-cta">
          <div className="container">
            <div className="mar-cta-inner">
              <div><span className="mar-eyebrow">Let&apos;s talk</span><h2>Good support starts with a conversation.</h2><p>Tell us what you need, what matters to you and where you would like to go next.</p></div>
              <Link href="/contact" className="mar-btn mar-btn-light">Contact Maranatha</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
