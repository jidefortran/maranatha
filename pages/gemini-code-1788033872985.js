import Head from 'next/head';
import Link from 'next/link';

export default function YouthServices() {
  return (
    <>
      <Head>
        <title>Youth Services & Empowerment Programs</title>
        <meta 
          name="description" 
          content="Empowering young people through life skill development, education, mental health support, and positive community engagement." 
        />
      </Head>

      <div className="page-title-area bg-5">
        <div className="container">
          <div className="page-title-content">
            <h2>Youth Services</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>Youth Services</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <h3>Empowering the Next Generation</h3>
                <p>
                  Our Youth Services focus on supporting young people through critical stages of development, education, and independence. We offer tailored mentoring, skill-building programs, and safe spaces designed to build confidence and resilience.
                </p>

                <h4 className="mt-4">Program Offerings</h4>
                <ul className="description-list">
                  <li><i className="bx bx-check"></i> One-on-one youth mentorship and life skills training</li>
                  <li><i className="bx bx-check"></i> Educational pathway planning and job-readiness support</li>
                  <li><i className="bx bx-check"></i> Social connection and structured group activities</li>
                  <li><i className="bx bx-check"></i> Youth mental health and wellbeing guidance</li>
                  <li><i className="bx bx-check"></i> Assistance transitioning to independent living</li>
                </ul>

                <div className="mt-5 p-4 rounded bg-light border">
                  <h5>Get Connected</h5>
                  <p className="mb-3">Find out more about our upcoming youth workshops and individual mentoring opportunities.</p>
                  <Link href="/contact" className="default-btn">Connect With Us</Link>
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
                    <li><Link href="/domestic-violence-support">Domestic Violence</Link></li>
                    <li className="active"><Link href="/youth-services">Youth Services</Link></li>
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