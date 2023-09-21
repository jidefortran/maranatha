import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/mentalHealth";
import Footer from "../components/Layouts/Footer";


const MentalHealth = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Security & Surveillance"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImgClass="item-bg1"
      />

      <ServiceDetailsContent />
      

      <Footer />
    </>
  );
};

export default MentalHealth;
