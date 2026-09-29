import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import OurStory from "../components/About/OurStory";
import HomeServices from "../components/HomeOne/Services";
import Team from "../components/Common/Team";
import Seo from "../components/Common/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About Us"
        description="Maranatha Wellbeing Support WA provides practical, person-centred support for people living with disability and mental health coexisting challenges across Western Australia."
        path="/about/"
      />
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg10"
      />

      <AboutContact />

      <OurStory />

      <Team />

      <HomeServices />

      <Footer />
    </>
  );
};

export default About;
