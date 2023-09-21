import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      <section className="team-area ptb-110">
        <div className="container">
          <div id="services" class="scrollto clearfix">
            <div class="row no-padding-bottom clearfix">
              <div class="col-3">
                <blockquote class="testimonial text-right bigtest">
                  <q>
                    The staff at Maranatha Wellbeing Support are
                    professionals such as care workers, nurses, and visiting
                    health professionals Care workers, they  help residents with daily
                    living activities
                  </q>
                  <footer>— Leon Addison</footer>
                </blockquote>
              </div>

              <div class="col-3">
                <div class="section-heading">
                  <h3>BELIEVING</h3>
                  <h2 class="section-title">Focusing On What Matters Most</h2>
                  <p class="section-subtitle">
                    From lending a hand in your daily tasks to creating a
                    comforting corner for you to rest and ponder, our services
                    are crafted to touch the heart. Though our offerings are
                    vast, our approach is personal, ensuring that everyone gets
                    the special attention they deserve. Taking a leaf out of
                    Australia's rich and varied tapestry, our values mirror its
                    spirit of togetherness, grit, and warmth. We aim to be a
                    lighthouse of hope, a comforting nook, and more than
                    anything, a home where everyone feels cherished. Choosing us
                    means you're not just opting for services; you're joining a
                    family that believes in the magic of compassion, empathy,
                    and shared dreams. Together, we believe we can craft
                    brighter days ahead. Your decision to consider us for your
                    journey is a gift, and we're eager to stand by you at every
                    twist and turn.
                  </p>
                  {/* <!-- Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) --> */}
                  <a
                    href="#"
                    data-videoid="UYJ5IjBRlW8"
                    data-videosite="youtube"
                    class="button video link-lightbox"
                  >
                    WATCH VIDEO <i class="fa fa-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div class="col-3">
                <Image
                  style={{ maxWidth: "none" }}
                  src="/images/services-details/service-details15.jpg"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
