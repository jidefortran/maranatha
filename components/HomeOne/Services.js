import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>We Offer Professional Solutions</h2>
            <p>
          Maranatha Wellbeing Support WA
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-hand-holding-hand"></i>
                </div>

                <h3>
                  <Link href="/service-details">
                    Supported Independent Living
                  </Link>
                </h3>
                <p>
                  Finding Your Forever Home With our innovative housing designs
                  and community housing providers, we are all set to help you
                  find—or even create—your forever home.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-house"></i>
                  {/* <FontAwesomeIcon icon="fa-solid fa-hand-holding-hand" />  
                  <FontAwesomeIcon icon="fa-solid fa-house" />
                  */}
                </div>

                <h3>
                  <Link href="/service-details">
                    {" "}
                    Respite/Short Stay Accommodation
                  </Link>
                </h3>
                <p>
                  Sometimes, both individuals and caregivers need a breather.
                  Our Respite or Short Stay Accommodation provides that
                  essential respite. Whether it’s to rejuvenate, manage
                  emergencies, or simply take a short break, our facilities
                  stand ready to offer a temporary haven.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-group-arrows-rotate"></i>
                </div>

                <h3>
                  <Link href="/service-details">Community participation</Link>
                </h3>
                <p>
                  Human connection and an active community life are threads that
                  weave the fabric of our daily existence. We, at Able,
                  wholeheartedly believe in fostering these connections,
                  enabling you to seamlessly integrate and actively participate
                  in your community.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-head-side-virus"></i>
                </div>

                <h3>
                  <Link href="/service-details">
                    Psycho-Social Recovery/Support Coordination
                  </Link>
                </h3>
                <p>
                  Our Psycho-social Recovery and Support Coordination program
                  offers exactly that. With a structured approach, we assist
                  individuals in rediscovering their strengths, building
                  resilience, and integrating into society with renewed
                  confidence.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>

                <h3>
                  <Link href="/service-details">Support with Daily Tasks</Link>
                </h3>
                <p>
                  Life is a mosaic of moments, routines, and tasks. Yet, some
                  days, the seemingly mundane can feel like a mountain. With our
                  Support with Daily Tasks, we aim to be your steadfast
                  companion in navigating the day-to-day.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="fa-solid fa-brain"></i>
                </div>

                <h3>
                  <Link href="/service-details">Mental Health  Support</Link>
                </h3>
                <p >
                  At Maranatha Wellbeing, we understand the intricate challenges
                  posed by mental health. Our dedicated mental health support
                  team has honed its expertise in assisting clients with diverse
                  needs, spanning sensory, psychosocial, intellectual, and
                  physical impairments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
