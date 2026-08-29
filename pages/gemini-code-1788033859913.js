import Head from 'next/head';
import Link from 'next/link';

export default function Counselling() {
  return (
    <>
      <Head>
        <title>Professional Counselling Services | Safe & Supportive Guidance</title>
        <meta 
          name="description" 
          content="Professional, confidential counselling services to help you process life challenges and build emotional resilience." 
        />
      </Head>

      <div className="page-title-area bg-2">
        <div className="container">
          <div className="page-title-content">
            <h2>Counselling Services</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li>Counselling</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-desc">
                <h3>Empathetic Guidance for Mental & Emotional Health</h3>
                <p>
                  Our counselling services provide a safe, confidential environment where individuals can explore personal challenges, process emotional difficulties, and build strategies for meaningful personal growth.
                </p>

                <h4 className="mt-4">Key Focus Areas</h4>
                <ul className="description-list">
                  <li><i className="bx bx-check"></i> Anxiety, stress management, and emotional regulation</li>
                  <li><i className="bx bx-check"></i> Depression support and self-worth enhancement</li>
                  <li><i className="bx bx-check"></i> Trauma-informed therapeutic sessions</li>
                  <li><i className="bx bx-check"></i> Grief, loss, and life transition counseling</li>
                  <li><i className="bx bx-check"></i> Relationship and communication skill building</li>
                </ul>

                <div className="mt-5 p-4 rounded bg-light border">
                  <h5>Book a Confidential Session</h5>
                  <p className="mb-3">Take the first step toward emotional clarity and sustainable mental wellbeing.</p>
                  <Link href="/contact" className="default-btn">Book Consultation</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="service-sidebar">
                <div className="sidebar-widget service-list">
                  <h3 className="widget-title">Additional Services</h3>
                  <ul>
                    <li><Link href="/drug-and-alcohol-support">Drug & Alcohol</Link></li>
                    <li className="active"><Link href="/counselling">Counselling</Link></li>
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