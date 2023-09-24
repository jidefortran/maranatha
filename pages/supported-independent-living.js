import React from "react";

import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import SupportedIndependent from "../components/Services/supportedIndependent";
import Navbar from "../components/Layouts/Navbar";

const SupportedIndependentLiving = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Supported Independent Living"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Supported Independent Living"
        bgImgClass="item-bg8"
      />

    <SupportedIndependent/>
      <Footer />
    </>
  );
};

export default SupportedIndependentLiving;
