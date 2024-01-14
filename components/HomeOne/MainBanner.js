import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  style={{color:'white'}}
                >
                  NDIS Specialist Support Coordination
                </h1>

                <p className="lead"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  style={{fontSize:'x-large'}}
                 
                >
                  {/* There is something inherently magical about a space that wraps
                  you in warmth and understanding from the moment you step in.
                  Here, you are not a mere client or a visitor; you are family. We
                  see the potential in every individual and the beauty in every
                  story */}
                  NDIS Support Coordination is a service the NDIS provides to participants to build their ability  to link with the informal community funded support enabling them get the best out of their NDIS plan
                </p>

                <div 
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="btn btn-primary">
                   Sign Up Now
                  </Link>
                  
                  <a href="tel:+61493396991" className="btn btn-secondary">
                   Call Now 049 3396 991
                  </a>

                  {/* <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
