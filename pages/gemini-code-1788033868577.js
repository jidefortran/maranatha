import Head from 'next/head';
import Link from 'next/link';

export default function DomesticViolenceSupport() {
  return (
    <>
      <Head>
        <title>Domestic Violence Support & Crisis Intervention</title>
        <meta 
          name="description" 
          content="Immediate, safe, and confidential support services for individuals escaping or impacted by domestic violence." 
        />
      </Head>

      <div className="page-title-area bg-4">
        <div className="container">
          <div className="page-title-content">
            <h2>Domestic Violence Support</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>Domestic Violence Support</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <h3>Safe, Confidential, and Compassionate Care</h3>
                <p>
                  We provide urgent assistance and comprehensive support for people affected by domestic and family violence. Your safety and privacy are our highest priorities. We offer dedicated caseworker assistance to help navigate safety planning, legal protections, and transitional housing.
                </p>

                <h4 className="mt-4">How We Can Help</h4>
                <ul className="description-list">
                  <li><i className="bx bx-check"></i> Immediate safety planning and risk assessment</li>
                  <li><i className="bx bx-check"></i> Emergency accommodation and refuge coordination</li>
                  <li><i className="bx bx-check"></i> Assistance with legal protection orders and police liaison</li>
                  <li><i className="bx bx-check"></i> Trauma-informed counseling and ongoing advocacy</li>
                  <li><i className="bx bx-check"></i> Relocation and long-term security support</li>
                </ul>

                <div className="mt-5 p-4 rounded bg-light border border-danger">
                  <h5>Confidential Support Available</h5>
                  <p className="mb-3">If you or someone you know is in immediate danger, please call emergency services right away.</p>
                  <Link href="/contact" className="default-btn bg-danger text-white border-0">Contact Our Safety Team</Link>
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
                    <li><Link href="/homelessness-support">Homelessness</Link></li>
                    <li className="active"><Link href="/domestic-violence-support">Domestic Violence</Link></li>
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