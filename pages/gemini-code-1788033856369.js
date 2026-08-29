import Head from 'next/head';
import Link from 'next/link';

export default function DrugAndAlcoholSupport() {
  return (
    <>
      <Head>
        <title>Drug & Alcohol Support Services | Specialized Care</title>
        <meta 
          name="description" 
          content="Compassionate, evidence-based drug and alcohol support services tailored to individual recovery goals." 
        />
      </Head>

      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Drug & Alcohol Support</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>Drug & Alcohol Support</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <h3>Compassionate & Non-Judgmental Recovery Support</h3>
                <p>
                  Our Drug & Alcohol Support services offer confidential, non-judgmental, and client-centered care for individuals navigating substance use challenges. We believe in empowering clients through personalized harm-minimization strategies, holistic health planning, and ongoing recovery coordination.
                </p>

                <h4 className="mt-4">How We Assist You</h4>
                <ul className="description-list">
                  <li><i className="bx bx-check"></i> Personalized recovery planning and goal setting</li>
                  <li><i className="bx bx-check"></i> Relapse prevention strategies and coping mechanism coaching</li>
                  <li><i className="bx bx-check"></i> Coordination with medical professionals and detoxification centers</li>
                  <li><i className="bx bx-check"></i> Ongoing one-on-one mentorship and accountability support</li>
                  <li><i className="bx bx-check"></i> Support navigating family dynamics and social reintegration</li>
                </ul>

                <div className="mt-5 p-4 rounded bg-light border">
                  <h5>Need Immediate Guidance?</h5>
                  <p className="mb-3">
                    Speak with our dedicated care coordinators to explore confidential support options tailored to your journey.
                  </p>
                  <Link href="/contact" className="default-btn">
                    Contact Our Support Team
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="service-sidebar">
                <div className="sidebar-widget service-list">
                  <h3 className="widget-title">Additional Services</h3>
                  <ul>
                    <li className="active"><Link href="/drug-and-alcohol-support">Drug & Alcohol</Link></li>
                    <li><Link href="/counselling">Counselling</Link></li>
                    <li><Link href="/homelessness-support">Homelessness</Link></li>
                    <li><Link href="/domestic-violence-support">Domestic Violence</Link></li>
                    <li><Link href="/youth-services">Youth Services</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}