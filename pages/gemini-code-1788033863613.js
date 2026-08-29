import Head from 'next/head';
import Link from 'next/link';

export default function HomelessnessSupport() {
  return (
    <>
      <Head>
        <title>Homelessness Support & Housing Pathways</title>
        <meta 
          name="description" 
          content="Safe housing assistance, crisis support, and sustainable tenancy pathways." 
        />
      </Head>

      <div className="page-title-area bg-3">
        <div className="container">
          <div className="page-title-content">
            <h2>Homelessness Support</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>Homelessness Support</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <h3>Stable Housing Solutions & Crisis Intervention</h3>
                <p>
                  We offer dedicated support for individuals and families experiencing housing instability. Our focus extends beyond crisis relief to help secure stable, long-term housing solutions and promote independent living.
                </p>

                <h4 className="mt-4">Our Services Include</h4>
                <ul className="description-list">
                  <li><i className="bx bx-check"></i> Crisis housing placement and emergency accommodation referral</li>
                  <li><i className="bx bx-check"></i> Tenancy application and rental search assistance</li>
                  <li><i className="bx bx-check"></i> Support with living essential needs and utility access</li>
                  <li><i className="bx bx-check"></i> Tenancy sustainment skills and budgeting guidance</li>
                  <li><i className="bx bx-check"></i> Connection to community welfare and health resources</li>
                </ul>

                <div className="mt-5 p-4 rounded bg-light border">
                  <h5>Facing Housing Instability?</h5>
                  <p className="mb-3">Reach out today to discuss emergency placement options and long-term accommodation planning.</p>
                  <Link href="/contact" className="default-btn">Get Urgent Support</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="service-sidebar">
                <div className="sidebar-widget service-list">
                  <h3 className="widget-title">Additional Services</h3>
                  <ul>
                    <li><Link href="/drug-and-alcohol-support">Drug & Alcohol</Link></li>
                    <li><Link href="/counselling">Counselling</Link></li>
                    <li className="active"><Link href="/homelessness-support">Homelessness</Link></li>
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