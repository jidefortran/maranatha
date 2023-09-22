/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const AboutContact = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div id="" class="row clearfix">
        <div className="container">
            {/* <div class="section-heading">
              <h1>Maranatha Wellbeing Support</h1>
              <h2>
                Welcome to our haven of holistic well-being and support, in the
                heart of Australia.
              </h2>
              <p className="lead">
                Maranatha Wellbeing is an organisation formed out of
                consideration to kindly provide assistance and support for
                individuals living with disability and mental health coexisting
                challenges. The management of the Maranatha Wellbeing having
                gone through thorough research and fundermental training. They
                have acquired the know-how on how to provide customised tailored
                services for clients and service user with the engagement of
                person centred approach and strength based approach. Maranatha
                Wellbeing is one of the community based support organisations
                that has the vision of consistent inclusion of clients decision
                to have absolutely choice and control over their own lives.{" "}
              </p>
            </div> */}
            
            <div className="row align-items-center">
           

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
              <h2>
                Welcome to our haven of holistic well-being and support, in the
                heart of Australia.
              </h2>
                <p className="lead">
                Maranatha Wellbeing Support is an organisation formed out of
                consideration to kindly provide assistance and support for
                individuals living with disability and mental health coexisting
                challenges. The management of the Maranatha Wellbeing having
                gone through thorough research and fundermental training. They
                have acquired the know-how on how to provide customised tailored
                services for clients and service user with the engagement of
                person centred approach and strength based approach. Maranatha
                Wellbeing is one of the community based support organisations
                that has the vision of consistent inclusion of clients decision
                to have absolutely choice and control over their own lives.{" "}
              </p>
            
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="">
       <Image style={{maxWidth:"none"}}
                src="/images/services-details/service-details13.jpg"
                alt="image"
                width={500}
                height={500}
              /> *
                
              </div>
            </div>

          </div>
         
           
            <a href="#" className="btn btn-primary button">
              Contact Us Today
            </a>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
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
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AboutContact;
