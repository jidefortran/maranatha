import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="mar-about-story">
      <div className="container">
        <div className="m26-section-head">
          <div>
            <span className="m26-label">Our story</span>
            <h2>Support built around the person, not a program.</h2>
          </div>
          <p>
            Every story, every journey and every individual is unique. We
            aim to be more than just a service &mdash; we work to be a
            steady, practical presence for the people and families we
            support, with an approach shaped by the person in front of us
            rather than a one-size-fits-all checklist.
          </p>
        </div>
        <div className="mar-story-grid">
          <div className="mar-story-image">
            <Image
              src="/images/services-details/service-details14.jpg"
              alt="Maranatha staff supporting a client in the community"
              width={640}
              height={520}
            />
          </div>
          <div className="mar-story-copy">
            <p>
              Life can be a bit of a whirlwind, throwing curveballs when we
              least expect it &mdash; and most of us, at some point, need a
              hand to steady things. That is why Maranatha exists: to give
              people practical, everyday support that respects their
              choices, routines and goals.
            </p>
            <p>
              We work across Western Australia supporting people with
              disability, mental health and psychosocial challenges,
              community participation, and broader wellbeing needs. Our
              approach is personal rather than clinical &mdash; we help
              connect people with the right specialist or medical services
              where that is what is needed, while focusing our own support
              on the practical, day-to-day side of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
