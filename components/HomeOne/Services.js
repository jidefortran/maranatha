import React from 'react';
import Link from 'next/link';
import { coreServices } from '../Services/serviceData';

export default function Services() {
  const featured = coreServices.slice(0, 6);
  return <section className="mar-home-services">
    <div className="container">
      <div className="mar-home-services-head"><div><span className="mar-eyebrow">Our services</span><h2>Support designed around real life.</h2></div><Link href="/services/" className="mar-text-link">View all services <span>→</span></Link></div>
      <div className="row g-4">{featured.map(service => <div className="col-md-6 col-xl-4" key={service.slug}><article className="mar-service-card"><div className="mar-service-card-image"><img src={service.image} alt={`${service.title} support`} loading="lazy" /></div><div className="mar-service-card-body"><h3><Link href={`/${service.slug}/`}>{service.title}</Link></h3><p>{service.intro}</p><Link className="mar-card-link" href={`/${service.slug}/`}>Learn more <span>→</span></Link></div></article></div>)}</div>
      <div className="mar-additional-strip"><div><span className="mar-eyebrow">More support options</span><h3>Community & wellbeing services</h3><p>Drug & Alcohol Support, Counselling, Homelessness Support, Domestic Violence Support and Youth Services.</p></div><Link href="/services/" className="mar-btn mar-btn-secondary">Explore all services</Link></div>
    </div>
  </section>;
}
