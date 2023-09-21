import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PartnerContent from "../components/Common/PartnerContent";
import Footer from "../components/Layouts/Footer";
import PartnerSlider from "../components/Common/PartnerSlider";

const Partner = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Partner"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Partner"
        bgImgClass="item-bg2"
      />

      <PartnerContent />

      <PartnerSlider />

      <Footer />
    </>
  );
};

export default Partner;
