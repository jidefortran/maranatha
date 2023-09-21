import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Psycho from "../components/Services/psycho";
import Footer from "../components/Layouts/Footer";


const PsychoSocialRecovery = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Psycho Social Recovery"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Psycho Social Recovery"
        bgImgClass="item-bg7"
      />

      <Psycho />
      

      <Footer />
    </>
  );
};

export default PsychoSocialRecovery;
