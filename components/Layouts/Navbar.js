import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const serviceLinks = [
  ['case-management', 'Case Management'],
  ['mental-health', 'Mental Health Support'],
  ['supported-independent-living', 'Supported Independent Living'],
  ['respite-accommodation', 'Respite & Short Stay'],
  ['community-participation', 'Community Participation'],
  ['psycho-social-recovery', 'Psychosocial Recovery'],
  ['support-daily-task', 'Daily Living Support'],
  ['drug-and-alcohol-support', 'Drug & Alcohol Support'],
  ['counselling', 'Counselling'],
  ['homelessness-support', 'Homelessness Support'],
  ['domestic-violence-support', 'Domestic Violence Support'],
  ['youth-services', 'Youth Services'],
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => { const onScroll=()=>setSticky(window.scrollY>30); window.addEventListener('scroll',onScroll); onScroll(); return()=>window.removeEventListener('scroll',onScroll); }, []);
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [router.asPath]);
  return <header id="navbar" className={`mar-navbar ${sticky ? 'is-sticky' : ''}`}>
    <div className="container mar-navbar-inner">
      <Link href="/" className="mar-brand"><img src="/images/black-logo.png" alt="Maranatha Wellbeing Support WA" /></Link>
      <button className={`mar-menu-toggle ${open?'open':''}`} onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/><span/></button>
      <nav className={`mar-main-nav ${open?'open':''}`} aria-label="Main navigation">
        <Link href="/" className={router.pathname==='/'?'active':''}>Home</Link>
        <div className={`mar-nav-dropdown ${servicesOpen?'open':''}`}>
          <button onClick={()=>setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Services <span>⌄</span></button>
          <div className="mar-dropdown-panel"><Link href="/services/" className="mar-all-services">All services →</Link><div className="mar-dropdown-grid">{serviceLinks.map(([slug,label])=><Link key={slug} href={`/${slug}/`} className={router.pathname===`/${slug}`?'active':''}>{label}</Link>)}</div></div>
        </div>
        <Link href="/about" className={router.pathname==='/about'?'active':''}>About</Link>
        <Link href="/faq" className={router.pathname==='/faq'?'active':''}>FAQs</Link>
        <Link href="/search" className="mar-nav-search" aria-label="Search"><i className="fas fa-search" aria-hidden="true"></i></Link>
        <Link href="/contact" className="mar-nav-cta">Talk to us</Link>
      </nav>
    </div>
  </header>;
}
