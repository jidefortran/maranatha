/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/white-logo.png" alt="image" />
                  </Link>
                  <p>
                  Maranatha Wellbeing Support is an organisation formed out of consideration to kindly provide assistance and support for individuals living with disability and mental health coexisting challenges
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/maranathasupport/" target="_blank" rel="noopener noreferrer">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/maranatha_support/" target="_blank" rel="noopener noreferrer">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/maranatha-wellbeing-support/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  {[
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
                  ].map(([slug, label]) => (
                    <li key={slug}><Link href={`/${slug}/`}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/search">Search</Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    126 Grand Boulevard, JOONDALUP, <br />6021 WA
                  </li>
                  <li>
                    <span>Email:</span>
                  info@maranathagroup.com.au
                  </li>
                  <li>
                    <span>Phone:</span>
                    0493 396 991
                  </li>
                  <li>
                    <span>ABN:</span>
                    93 670 289 844
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Maranatha Group. All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
