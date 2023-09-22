import React from "react";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutTwo/AboutUsContent";
import ProfessionalSolutions from "../components/HomeFive/ProfessionalSolutions";
import PartnerSlider from "../components/AboutTwo/PartnerSlider";
import CustomerFeedback from "../components/HomeFive/CustomerFeedback";
import Team from "../components/Common/Team";
import Navbar from "../components/lLyouts/Navbar";
import Footer from "../components/Layouts/Footer";
const AboutTwo = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg2"
      />

      <AboutUsContent />

      <ProfessionalSolutions />

      <Team />

      <PartnerSlider />

      <CustomerFeedback />
      
      <Footer />
    </>
  );
};

export default AboutTwo;
