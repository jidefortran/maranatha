import React from 'react';
import Link from 'next/link';

export default function MainBanner() {
  return (
    <section className="m26-hero">
      <div className="m26-hero-glow m26-glow-a" />
      <div className="m26-hero-glow m26-glow-b" />
      <div className="container m26-hero-grid">
        <div className="m26-hero-copy">
          <div className="m26-kicker"><span /> Wellbeing • Disability • Community</div>
          <h1>Support that helps you <em>live your life.</em></h1>
          <p>Practical, person-centred support for people living with disability, mental health and changing life circumstances across Western Australia.</p>
          <div className="m26-actions">
            <Link href="/contact" className="m26-btn m26-btn-dark">Start a conversation <span>↗</span></Link>
            <Link href="/services" className="m26-btn m26-btn-quiet">Explore services</Link>
          </div>
          <div className="m26-trust-row"><span>NDIS-focused support</span><i /> <span>Person-centred</span><i /> <span>Real-world goals</span></div>
        </div>
        <div className="m26-hero-visual">
          <div className="m26-image-frame"><img src="/images/services-details/service-details1.jpg" alt="A person taking a calm, mindful moment" /></div>
          <div className="m26-floating-card"><strong>Support, your way.</strong><span>Small steps. Practical help. More independence.</span></div>
          <div className="m26-hero-number"><b>01</b><span>Care<br/>with purpose</span></div>
        </div>
      </div>
      <div className="m26-scroll">Scroll to explore <span>↓</span></div>
    </section>
  );
}
