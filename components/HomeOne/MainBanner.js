import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";

//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const MainBanner = () => {
  const images = [
    "./images/7.jpg",
    "/images/3.jpg",
    "./images/mainbanner2.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                {/* <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  style={{color:'white'}}
                >
                  NDIS Specialist Support Coordination
                </h1> */}

                {/* <p className="lead"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  style={{fontSize:'x-large'}}
                 
                >
             
                  NDIS Support Coordination is a service the NDIS provides to participants to build their ability  to link with the informal community funded support enabling them get the best out of their NDIS plan
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <Zoom {...zoomInProperties}>
                    {images.map((each, index) => (
                      <div
                        key={index}
                        className="flex justify-center w-full h-full flex-col"
                      >


                        <img
                          className="w-4/4 object-cover rounded-lg shadow-xl"
                          src={each}
                        />

                       

                        <FeaturedServices />
                      </div>
                    ))}
                  </Zoom>
                </div>
                );
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
