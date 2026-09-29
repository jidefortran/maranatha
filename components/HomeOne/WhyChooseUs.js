import React from 'react';
import Link from 'next/link';

const points = [
  ['01', 'Listen first', 'We begin with what matters to you, not a one-size-fits-all checklist.'],
  ['02', 'Build confidence', 'Support can focus on skills, routines, connection and greater independence.'],
  ['03', 'Work together', 'We coordinate around your goals and help make the next step clearer.'],
];

export default function WhyChooseUs() {
  return <section className="m26-approach">
    <div className="container">
      <div className="m26-section-head">
        <div><span className="m26-label">Our approach</span><h2>Good support should feel <em>human.</em></h2></div>
        <p>We believe quality support is about more than completing tasks. It is about helping people build a life that feels meaningful, connected and their own.</p>
      </div>
      <div className="m26-approach-grid">
        <div className="m26-approach-image"><img src="/images/team-smile.png" alt="Maranatha support team" /><div className="m26-image-tag">People first, always.</div></div>
        <div className="m26-points">{points.map(([n,t,d]) => <div className="m26-point" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}<Link href="/about" className="m26-inline-link">Meet Maranatha <span>→</span></Link></div>
      </div>
    </div>
  </section>;
}
