import React from "react";
import Link from "next/link";
import Image from "next/image";
Image
const respite = () => {
  return (
    <>
      <div className="container">
      <div className="respiteContainer3">
        <div className="respiteContainer2">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Respite Short Stay Accommodation</span>
          </h2>
          <p className="lead">
            Sometimes, both individuals and caregivers need a breather. Our
            Respite or Short Stay Accommodation provides that essential respite.
            Whether it&apos;s to rejuvenate, manage emergencies, or simply take a
            short break, our facilities stand ready to offer a temporary haven.
            These accommodations are designed with comfort, safety, and
            rejuvenation in mind, ensuring that each stay, however brief, feels
            like a refreshing interlude. Our Respite & Short Stay
            Accommodation is more than just a place; it&apos;s a comforting embrace
            when needed. If you want to seek a break, attending to emergencies,
            or just desiring a change in surroundings, we offer a haven to
            rejuvenate. Here, every corner is designed to evoke the warmth of
            home, ensuring that each stay, however brief, reinvigorates the
            spirit.{" "}
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex">
            <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  Get Started
                </Link>
            </div>
          </div>
        </div>
        <div className="respiteContainer1">
        <Image style={{maxWidth:"none"}}
                src="/images/services-details/service-details8.jpg"
                alt="image" width={640} height={960}/>
          <div>
          {/* <Image
                src="/images/services-details/service-details7.jpg"
                alt="image" width={500} height={500}/>
           {/* <Image
                src="/images/services-details/service-details9.jpg"
                alt="image" width={500} height={500}/> */} 
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default respite;
