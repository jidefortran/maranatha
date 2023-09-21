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
        pageTitle="Services Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Four"
        bgImgClass="item-bg8"
      />

    <SupportedIndependent/>
      <Footer />
    </>
  );
};

export default SupportedIndependentLiving;
