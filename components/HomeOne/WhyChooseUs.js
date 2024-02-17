/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-area ">
        <div className="container whyClose" style={{ marginTop: "8rem" , marginBottom:"7rem"}}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image text-center " style={{alignSelf:"center"}}>
                <Image src="/images/team-smile.png" alt="image" width={600} height={800} />
              </div>
              <div className="why-choose-us-image text-center " style={{alignSelf:"center" ,marginTop: "2rem"}}>
                <Image src="/images/services-details/ndis.webp" alt="image"  width={600} height={800} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12  ">
              <div className="why-choose-us-content mt-12">
                <h2>Why Choose a Supported Home?</h2>
                <p className="lead">
                  Empowerment, comfort, and a sense of belonging - that’s our
                  promise to you. With our team of adaptable and proficient
                  staff, we aim to help you unveil your full potential and
                  relish a gratifying home experience.
                </p>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3> With us, you get assistance to</h3>
                      <ul className="lead" style={{textAlign:"left"}}>
                     <li>Forge individual plans
                        spotlighting your aspirations for independent living.</li>  
                       <li>Cultivate and nurture friendships and embed yourself
                        within the community.</li> 
                        <li>Dive into social and recreational
                        events.</li>  
                        <li>Efficiently manage and attend to crucial
                        appointments.</li> 
                        <li>Through paperwork and seamless
                        communication channels.</li>
                        <li>Efficiently maintain a
                        household.</li>  
                        <li>Handle accommodation duties and tenancy
                        commitments.</li>
                      </ul>
                    </div>
                  </div>

            

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h2>Maranatha Wellbeing: Your Support and Inclusion</h2>
                      <p className="lead">
                        At Maranatha Wellbeing Australia, we pride ourselves on
                        being at the forefront of disability services for adults
                        and community assistance for our treasured seniors. Our
                        mission? Empowering our clients to live their lives on
                        their own terms.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h2>Your Trusted NDIS Provider & Supportive Companion</h2>
                      <p className="lead">
                        Our dedicated team of disability support workers,
                        combined with the heartfelt contributions of our
                        volunteers, ensure that our clients not only find a
                        place in society but truly connect and flourish within
                        the broader community.
                      </p>
                    </div>
                  </div>
                

                  <div className="col-lg-12 col-md-12 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h2>Maranatha Wellbeing & Your NDIS Journey</h2>
                      <p className="lead">
                        Here at Maranatha Wellbeing, we&apos;re more than just a
                        registered NDIS service provider. We&apos;re your partner in
                        crafting a future filled with independence. With our
                        carefully curated services, we aim to empower you today,
                        tomorrow, and always.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-6 ">
                    <div className="single-why-choose-us-box">
                      <h2>Join Us, and Let&apos;s Craft!</h2>
                      <p className="lead">
                        Because every step you take towards well-being, is a
                        step we&apos;re honored to take with you. Your well-being is
                        a mosaic, intricate and vibrant, and we&apos;re here to
                        celebrate each piece. Welcome home.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="btn btn-primary">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
