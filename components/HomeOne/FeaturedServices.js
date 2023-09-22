import React from "react";
import Link from "next/link";

const FeaturedServices = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="fa-regular fa-face-smile"/>
                </div>

                <h3>
                  <Link href="/service-details">
                    Solutions
                  </Link>
                </h3>
                <p>
                  Together, we are not just overcoming challenges; we are
                  crafting success stories, one day at a time.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-featured-services-box active">
                <div className="icon">
                  <i className="fa-solid fa-heart"></i>
                </div>

                <h3>
                  <Link href="/service-details">Value</Link>
                </h3>
                <p>
                  Our commitment isn&apos;t just to be a service; it is to be your
                  partner in navigating the tapestry of life. In Australia,
                  we have cultivated a haven where every person, every emotion,
                  and every ambition is valued.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i className="fa-regular fa-hand-point-up"/>
                 
                </div>

                <h3>
                  <Link href="/service-details">Connection</Link>
                </h3>
                <p>
                Journey with us to a sanctuary of support, empowerment, and genuine connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
