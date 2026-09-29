import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutContact = () => {
  return (
    <section className="mar-about-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="mar-eyebrow">About Maranatha</span>
            <h1>
              Welcome to our haven of holistic wellbeing and support, in the
              heart of Western Australia.
            </h1>
            <p className="mar-lead">
              Maranatha Wellbeing Support is an organisation formed to
              provide practical assistance and support for individuals
              living with disability and mental health coexisting
              challenges. Our team has gone through thorough research and
              training to provide customised, tailored services for our
              clients, using a person-centred and strengths-based approach.
              We are a community-based support organisation with a vision
              of keeping clients in control &mdash; ensuring people have
              real choice over their own lives.
            </p>
            <div className="mar-actions">
              <Link href="/contact" className="mar-btn mar-btn-primary">
                Contact Us Today
              </Link>
              <Link href="/services/" className="mar-btn mar-btn-secondary">
                Explore our services
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mar-about-image">
              <Image
                src="/images/services-details/service-details13.jpg"
                alt="A Maranatha support worker with a client"
                width={900}
                height={650}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
