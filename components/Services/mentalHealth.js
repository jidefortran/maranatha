import Image from "next/image";
import Link from "next/link";
import React from "react";

const mentalHealthContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Mental Health Support at Maranatha Wellbeing Support</h3>
              <p className="lead">
                At Maranatha Wellbeing Support, we understand the intricate challenges
                posed by mental health. Our dedicated mental health support team
                has honed its expertise in assisting clients with diverse needs,
                spanning sensory, psychosocial, intellectual, and physical
                impairments. Our approach to mental health support hinges on a
                client-focused, evidence-backed framework, specially tailored
                for instances when clients might be at risk to themselves or
                others. The keystone of our Positive Behaviour Support (PBS) is
                understanding the underlying reasons or motivations behind
                specific behaviors. By doing so, we&apos;re better equipped to offer
                targeted strategies, impart essential skills, and ensure
                holistic support not only for the individual with the disability
                but also for their wider network of family and friends.
              </p>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/service-details2.jpg"
                alt="image" width={500} height={500}/>
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <Image
                src="/images/services-details/service-details1.jpg"
                alt="image" width={500} height={500}
              />
            </div>

            <div className="services-details-desc">
              <h3>Working Process</h3>
              <p className="lead">
                Our seasoned team doesn&apos;t just specialize in support; they are
                adept at skills instruction, minimizing restrictive practices,
                and ensuring both our staff and our clients&apos; loved ones are
                equipped with the tools they need to foster a nurturing
                environment. But that&apos;s not all. Our practitioners also offer a
                number of services. From detailed consultations to crafting
                individualized mental health support plans, and even staff
                training, we are here to ensure that mental health isn&apos;t just
                addressed,it&apos;s nurtured, understood, and prioritized.
              </p>      <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Get Started
                </Link>
            </div>
          </div>
    
        </div>
      </div>
    </>
  );
};

export default mentalHealthContent;
