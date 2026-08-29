import React from 'react';
import Link from 'next/link';

export default function ServiceSidebar({ activeSlug }) {
  const services = [
    { name: 'Drug & Alcohol', slug: 'drug-and-alcohol-support' },
    { name: 'Counselling', slug: 'counselling' },
    { name: 'Homelessness', slug: 'homelessness-support' },
    { name: 'Domestic Violence', slug: 'domestic-violence-support' },
    { name: 'Youth Services', slug: 'youth-services' },
  ];

  return (
    <div className="service-sidebar">
      <div className="sidebar-widget service-list">
        <h3 className="widget-title">Additional Services</h3>
        <ul>
          {services.map((item) => (
            <li key={item.slug} className={activeSlug === item.slug ? 'active' : ''}>
              <Link href={`/${item.slug}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}