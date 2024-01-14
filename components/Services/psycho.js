import Image from "next/image";
import Link from "next/link";
import React from "react";
const psycho = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Mental Health Support at Maranatha Wellbeing Support</h3>
              <p className="lead">
                Our Psycho-social Recovery and Support Coordination program
                offers exactly that. With a structured approach, we assist
                individuals in rediscovering their strengths, building
                resilience, and integrating into society with renewed
                confidence. Through personalized plans, consistent support, and
                goal-oriented strategies, we champion the journey towards
                holistic recovery
              </p>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/service-details6.jpg"
                alt="image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <Image
                src="/images/services-details/service-details5.jpg"
                alt="image"
                width={500}
                height={500}
              />
            </div>

            <div className="services-details-desc">
              <h3>Working Process</h3>
              <p className="lead">
                Through structured support and a personalized touch, we walk
                with you, helping to rediscover strengths, craft resilience, and
                carve a path to holistic well-being. Our team stands ready to
                design and coordinate support structures that resonate with your
                unique journey, aiming for empowerment and renewed confidence at
                every step.
              </p>
              <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Get Started
                </Link>
                <a href="tel:+61493396991" className="btn btn-secondary">
                   Call Now 049 3396 991
                  </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default psycho;
