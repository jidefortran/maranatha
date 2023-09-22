import React, { Component } from "react";

import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeTwo/Services";
import Team from "../components/Common/Team";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg10"
      />

      <AboutContact />

      <Services />

      <Team />

      <Footer />
    </>
  );
};

export default About;
