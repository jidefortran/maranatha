import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";

const ServicesThree = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Three"
        bgImgClass="item-bg1"
      />

      <ServicesStyleThree />

      <Footer />
    </>
  );
};

export default ServicesThree;
