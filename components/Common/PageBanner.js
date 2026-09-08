import React from 'react';
import Link from 'next/link';

export default function PageBanner({ pageTitle, homePageUrl='/', homePageText='Home', activePageText, bgImgClass='' }) {
  return <div className={`mar-page-banner ${bgImgClass}`}><div className="container"><div className="mar-page-banner-content"><span>MARANATHA WELLBEING SUPPORT WA</span><h1>{pageTitle}</h1><nav aria-label="Breadcrumb"><Link href={homePageUrl}>{homePageText}</Link><span>/</span><span>{activePageText || pageTitle}</span></nav></div></div><div className="mar-banner-orb mar-banner-orb-one"/><div className="mar-banner-orb mar-banner-orb-two"/></div>;
}
