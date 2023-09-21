import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Services from "../components/HomeTwo/Services";
import Footer from "../components/Layouts/Footer";

const ServicesTwo = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
        bgImgClass="item-bg2"
      />

      <Services />

      <Footer />
    </>
  );
};

export default ServicesTwo;
