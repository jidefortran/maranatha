import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import PageBanner from '../components/Common/PageBanner';
import { coreServices } from '../components/Services/serviceData';

export default function Services() {
  const groups = ['Living & Independence', 'Community & Connection', 'Wellbeing & Disability Support', 'Community & Wellbeing Services'];
  return <>
    <Head><title>Services | Maranatha Wellbeing Support WA</title><meta name="description" content="Explore Maranatha Wellbeing Support WA services across disability, mental health, community participation and wellbeing." /></Head>
    <Navbar />
    <PageBanner pageTitle="Our Services" homePageUrl="/" homePageText="Home" activePageText="Services" bgImgClass="item-bg2" />
    <main className="mar-services-index">
      <section className="mar-services-intro"><div className="container"><div className="row align-items-end"><div className="col-lg-8"><span className="mar-eyebrow">Support that starts with you</span><h1>Practical support for where you are — and where you want to go.</h1></div><div className="col-lg-4"><p>From independent living and community participation to psychosocial recovery and broader wellbeing support, our services are built around individual goals, preferences and circumstances.</p></div></div></div></section>
      <section className="mar-service-groups"><div className="container">{groups.map(group => <div className="mar-service-group" key={group}><div className="mar-group-heading"><span>{group}</span><div></div></div><div className="row g-4">{coreServices.filter(s => s.category === group).map((service, i) => <div className="col-md-6 col-xl-4" key={service.slug}><article className="mar-service-card"><div className="mar-service-card-image"><img src={service.image} alt={`${service.title} support`} loading="lazy" /></div><div className="mar-service-card-body"><span>{String(i + 1).padStart(2,'0')}</span><h2><Link href={`/${service.slug}/`}>{service.title}</Link></h2><p>{service.intro}</p><Link className="mar-card-link" href={`/${service.slug}/`}>Explore service <span>→</span></Link></div></article></div>)}</div></div>)}</div></section>
      <section className="mar-services-cta"><div className="container"><div className="mar-cta-inner"><div><span className="mar-eyebrow">Not sure where to start?</span><h2>We can help you work out the next step.</h2><p>You can contact us even if you are still exploring your options.</p></div><Link href="/contact" className="mar-btn mar-btn-light">Talk to Maranatha</Link></div></div></section>
    </main><Footer />
  </>;
}
