import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="mar-about-trust">
      <div className="container">
        <div className="mar-story-grid mar-story-grid-reverse">
          <div className="mar-story-copy">
            <span className="m26-label">Focusing on what matters most</span>
            <h2>Practical support, delivered with care.</h2>
            <p>
              From lending a hand with daily tasks to creating space for
              people to rest, reset and pursue what matters to them, our
              support is shaped to be personal rather than one-size-fits-all
              &mdash; every person gets the attention their circumstances
              deserve.
            </p>
            <p>
              Our support workers focus on the practical, everyday side of
              life &mdash; routines, confidence, connection and
              independence. Where a person needs clinical, medical or
              specialist care, we help identify and connect them with the
              appropriate service rather than presenting ourselves as a
              substitute for it.
            </p>
          </div>
          <div className="mar-story-image">
            <Image
              src="/images/services-details/service-details15.jpg"
              alt="Maranatha support worker with a client"
              width={640}
              height={520}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
