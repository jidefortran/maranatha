import React from 'react';
import Link from 'next/link';

export default function BlogPost() {
  return <section className="m26-insight">
    <div className="container">
      <div className="m26-insight-card">
        <div><span className="m26-label">Resources & insights</span><h2>Useful ideas for wellbeing, inclusion and everyday life.</h2><p>Explore articles and updates from Maranatha Wellbeing Support.</p></div>
        <Link href="/blog" className="m26-btn m26-btn-light">Visit the blog <span>↗</span></Link>
      </div>
    </div>
  </section>;
}
