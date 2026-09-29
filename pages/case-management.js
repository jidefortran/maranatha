import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import PageBanner from '../components/Common/PageBanner';
import Seo, { SITE_URL } from '../components/Common/Seo';
import { coreServices, serviceBySlug } from '../components/Services/serviceData';

const approach = [
  {
    label: '01',
    title: 'You are at the centre',
    body: 'Your goals, preferences, strengths and choices guide the support we provide. We take the time to understand what is important to you, how you want your supports delivered and what you want to achieve.',
  },
  {
    label: '02',
    title: 'We coordinate, not control',
    body: 'Our role is to help you navigate your support environment — not make decisions for you. We provide information, coordination and practical assistance so you can make informed decisions about the supports and services you receive.',
  },
  {
    label: '03',
    title: 'We focus on independence',
    body: 'Good case management should not create unnecessary dependence. Where appropriate, we help build your confidence, knowledge and skills so you can take greater control over your supports and make decisions about your life.',
  },
];

const goalAreas = [
  { title: 'Independence', body: 'Developing confidence and skills to manage everyday life.' },
  { title: 'Community', body: 'Building relationships and participating in your community.' },
  { title: 'Health and wellbeing', body: 'Connecting with appropriate services and supports.' },
  { title: 'Education and employment', body: 'Exploring pathways that support your aspirations.' },
  { title: 'Daily living', body: 'Finding practical supports that help you live the life you choose.' },
  { title: 'Relationships', body: 'Strengthening connections with family, friends and your wider support network.' },
];

const process = [
  { title: 'Understanding You', body: 'We begin by listening. We take time to understand your circumstances, strengths, preferences, support needs and goals — and consider the people and services already involved in your life.' },
  { title: 'Identifying Your Goals', body: 'Together, we identify what you want to work towards, across independence, community, health, education, daily living and relationships.' },
  { title: 'Building Your Support Network', body: 'We help identify the services and providers that may be appropriate for your circumstances. You remain in control of the decisions about who supports you.' },
  { title: 'Coordinating Your Supports', body: 'We help bring your supports together so everyone understands their role, and help identify gaps, duplication or barriers affecting your supports.' },
  { title: 'Monitoring Progress', body: 'Your circumstances can change. We regularly review how your supports are working and whether they continue to align with your goals.' },
  { title: 'Building Your Independence', body: 'Our ultimate goal is to help you become more confident and capable of directing your own supports wherever possible.' },
];

const personCentredValues = [
  { title: 'Your choices', body: 'You have a voice in the supports and services you receive.' },
  { title: 'Your rights', body: 'Your dignity, privacy, independence and legal and human rights matter.' },
  { title: 'Your strengths', body: 'We focus on what you can do and what you want to achieve.' },
  { title: 'Your relationships', body: 'Family, friends, carers and community connections can be an important part of your support network.' },
  { title: 'Your future', body: "Our work is focused on helping you move towards meaningful outcomes, not simply managing today's challenges." },
];

const supportNetwork = ['Family members', 'Carers', 'Support workers', 'Allied health professionals', 'Disability service providers', 'Community organisations', 'Education providers', 'Employment services', 'Other relevant professionals'];

const helpAreas = [
  'Understanding your NDIS plan and available supports',
  'Identifying your goals and priorities',
  'Coordinating different providers and services',
  'Connecting you with appropriate disability and community services',
  'Connecting with mainstream services where appropriate',
  'Supporting communication between members of your support network',
  'Reviewing whether your current supports are meeting your needs',
  'Identifying barriers affecting your progress',
  'Supporting changes to your support arrangements',
  'Helping you prepare for plan reviews',
  'Building confidence to navigate NDIS systems and processes',
  'Supporting community participation and social connections',
  'Developing practical strategies around changing circumstances',
  'Coordinating appropriate responses when challenges arise',
  'Supporting continuity of services during transitions',
];

const whyChoose = [
  { title: 'A person-first approach', body: 'We see the individual, not just the disability or NDIS plan.' },
  { title: 'Practical coordination', body: 'We help turn plans and goals into practical next steps.' },
  { title: 'Collaborative support', body: 'We work with participants and relevant support networks to improve coordination.' },
  { title: 'Focus on independence', body: 'We aim to build confidence and capacity wherever possible.' },
  { title: 'Respect for choice', body: 'Your preferences and decisions remain central to the support process.' },
  { title: 'Outcome focused', body: 'We focus on meaningful progress rather than simply completing administrative tasks.' },
];

export default function CaseManagement() {
  const service = serviceBySlug['case-management'];
  const related = coreServices.filter((item) => item.slug !== 'case-management').slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Case Management',
    description: service.intro,
    url: `${SITE_URL}/case-management/`,
    areaServed: 'Western Australia',
    provider: { '@type': 'Organization', name: 'Maranatha Wellbeing Support WA', url: SITE_URL },
  };

  return (
    <>
      <Seo
        title="Case Management"
        description="Coordinated support. Greater independence. A plan built around you. Maranatha Wellbeing Support WA helps NDIS participants navigate services, coordinate supports and work towards the goals that matter to them."
        path="/case-management/"
        image={`${SITE_URL}${service.image}`}
        jsonLd={serviceSchema}
      />
      <Navbar />
      <PageBanner pageTitle="Case Management" homePageUrl="/" homePageText="Home" activePageText="Case Management" bgImgClass="item-bg2" />

      <main className="mar-service-page">
        {/* Hero */}
        <section className="mar-service-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="mar-eyebrow">Coordination &amp; Support</span>
                <h1>A plan built around you.</h1>
                <p className="mar-lead">
                  At Maranatha Group, we believe effective case management starts with understanding
                  the person — not simply the plan. We work alongside participants, families, carers and
                  support networks to bring the right supports together, with a focus on choice,
                  independence, dignity and meaningful outcomes.
                </p>
                <div className="mar-actions">
                  <Link href="/contact" className="mar-btn mar-btn-primary">Talk to our team</Link>
                  <a href="tel:+61493396991" className="mar-btn mar-btn-secondary">0493 396 991</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mar-service-image">
                  <Image src={service.image} alt="Case management support" width={900} height={650} priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Case Management */}
        <section className="mar-service-body">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="mar-content-card">
                  <span className="mar-eyebrow">What is Case Management?</span>
                  <h2>Bringing the pieces together</h2>
                  <p>
                    Living with disability can involve navigating multiple services, providers,
                    appointments, community resources and support systems. Case Management provides a
                    coordinated approach to help bring these pieces together.
                  </p>
                  <p>
                    At Maranatha Group, we work with you to understand your circumstances, identify your
                    priorities and coordinate appropriate supports around your goals. Depending on your
                    circumstances and funding, this may include helping you understand and use your NDIS
                    plan, connect with appropriate providers and community services, coordinate supports,
                    monitor progress and identify where changes may be needed.
                  </p>
                  <p>
                    Our approach is consistent with the NDIS emphasis on person-centred supports, informed
                    choice, control and respect for the rights of people with disability.
                  </p>
                </div>
              </div>
              <aside className="col-lg-4">
                <div className="mar-side-card">
                  <span className="mar-eyebrow">Your next step</span>
                  <h3>Not sure what support you need?</h3>
                  <p>
                    You do not need to have everything figured out before contacting us. Tell us a little
                    about your situation and we can discuss the next step.
                  </p>
                  <Link href="/contact" className="mar-btn mar-btn-primary w-100">Start a conversation</Link>
                </div>
                {related.length > 0 && (
                  <div className="mar-side-card mar-related">
                    <h3>You may also be interested in</h3>
                    {related.map((item) => (
                      <Link key={item.slug} href={`/${item.slug}/`}>
                        {item.title}<span>→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="m26-approach">
          <div className="container">
            <div className="m26-section-head">
              <div>
                <span className="m26-label">Our approach</span>
                <h2>Coordinated support, built on your terms.</h2>
              </div>
              <p>Three principles guide how we work with every participant, every time.</p>
            </div>
            <div className="m26-points">
              {approach.map((item) => (
                <div className="m26-point" key={item.title}>
                  <b>{item.label}</b>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="mar-service-body" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="mar-content-card">
              <span className="mar-eyebrow">How we can help</span>
              <h2>Practical assistance, shaped around your circumstances</h2>
              <p>
                The NDIS identifies connecting participants with providers, community and mainstream
                services, coordinating supports, evaluating whether supports are effective and tracking
                progress towards goals as important functions of support coordination. Maranatha Group can
                assist with:
              </p>
              <div className="mar-feature-grid">
                {helpAreas.map((item) => (
                  <div className="mar-feature" key={item}>
                    <span aria-hidden="true">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Identifying Your Goals */}
        <section className="m26-home-services">
          <div className="container">
            <div className="mar-home-services-head">
              <div>
                <span className="mar-eyebrow">Identifying your goals</span>
                <h2>What you want to work towards</h2>
              </div>
            </div>
            <div className="row g-4">
              {goalAreas.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <div className="mar-content-card" style={{ height: '100%' }}>
                    <h3 style={{ fontSize: 22 }}>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Case Management Process */}
        <section className="m26-steps">
          <div className="container">
            <div className="m26-section-head">
              <div>
                <span className="m26-label">Our process</span>
                <h2>Our Case Management Process</h2>
              </div>
              <p>Six steps, always circling back to what you want to achieve.</p>
            </div>
            <div className="m26-step-grid">
              {process.map((step, i) => (
                <div key={step.title}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Person-Centred Support */}
        <section className="mar-service-body">
          <div className="container">
            <div className="mar-content-card">
              <span className="mar-eyebrow">Person-centred support</span>
              <h2>Seeing the person before the paperwork</h2>
              <p>
                The NDIS Quality and Safeguards Commission identifies person-centred practice as
                supporting human rights, informed choice, self-determination and decision-making, while
                enabling people to engage with their chosen support networks and communities. At Maranatha
                Group, that means we respect:
              </p>
              <div className="row g-4" style={{ marginTop: 8 }}>
                {personCentredValues.map((item) => (
                  <div className="col-md-6 col-lg-4" key={item.title}>
                    <div className="mar-note" style={{ padding: '18px 0' }}>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Working With Your Support Network */}
        <section className="mar-service-body" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="mar-content-card">
                  <span className="mar-eyebrow">Working with your support network</span>
                  <h2>Coordinated, not fragmented</h2>
                  <p>
                    Disability support often involves several people and organisations. With your
                    permission and in accordance with applicable privacy and consent requirements, we can
                    work collaboratively with relevant members of your support network, including:
                  </p>
                  <div className="mar-feature-grid">
                    {supportNetwork.map((item) => (
                      <div className="mar-feature" key={item}>
                        <span aria-hidden="true">✓</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="col-lg-5">
                <div className="mar-side-card" style={{ marginBottom: 24 }}>
                  <h3>When things become complex</h3>
                  <p>
                    Some people experience circumstances where multiple challenges affect their ability to
                    access and coordinate supports. Where appropriate and within our scope of service, we
                    can help identify barriers, coordinate communication between relevant services and
                    support you to navigate complex situations. The NDIS recognises Specialist Support
                    Coordination as a higher level of support for participants experiencing more complex
                    situations and support environments — where specialist expertise is required, we work
                    with you to identify appropriate services or professionals.
                  </p>
                </div>
                <div className="mar-side-card">
                  <h3>Your choice matters</h3>
                  <p>
                    The NDIS states that participants choose their preferred support coordinator when they
                    have support coordination funding, and can change their support coordinator subject to
                    the applicable arrangements in their service agreement. We want your relationship with
                    us to be built on trust, communication and respect.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Supporting You Through Change */}
        <section className="mar-service-body" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="mar-content-card">
              <span className="mar-eyebrow">Supporting you through change</span>
              <h2>Clear, respectful and coordinated transitions</h2>
              <p>
                Changes in circumstances can make disability services particularly difficult to navigate.
                Maranatha Group can provide coordination during periods of transition, including changes
                in providers, living arrangements, community participation, employment, education or other
                significant life circumstances.
              </p>
              <p>
                Where a participant changes support coordinators, the NDIS expects appropriate handover
                information to support continuity — including progress towards goals, use of the plan,
                development of skills and independence, community connections, barriers and risks, and
                future support needs. We aim to make transitions as clear, respectful and coordinated as
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Maranatha */}
        <section className="m26-home-services">
          <div className="container">
            <div className="mar-home-services-head">
              <div>
                <span className="mar-eyebrow">Why choose Maranatha Group?</span>
                <h2>Six reasons participants stay with us</h2>
              </div>
            </div>
            <div className="row g-4">
              {whyChoose.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <div className="mar-content-card" style={{ height: '100%' }}>
                    <h3 style={{ fontSize: 22 }}>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mar-service-cta">
          <div className="container">
            <div className="mar-cta-inner">
              <div>
                <span className="mar-eyebrow">Let&apos;s talk about your goals</span>
                <h2>Your goals. Your choices. Your life.</h2>
                <p>
                  You don&apos;t have to navigate disability services alone. Whether you are beginning your
                  NDIS journey, reviewing your current supports or experiencing changes in your
                  circumstances, talk to Maranatha Group today about how we can support you.
                </p>
              </div>
              <Link href="/contact" className="mar-btn mar-btn-light">Contact Maranatha</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
