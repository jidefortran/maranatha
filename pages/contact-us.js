import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import ContactUs from "../components/contactUs";


const Contact = () => {
  return (
    <>
      <Navbar/>

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg9"
      />

      <ContactUs />

      <Footer />
    </>
  );
};

export default Contact;
