import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import ContactUs from "../components/contactUs";
import Seo from "../components/Common/Seo";


const Contact = () => {
  return (
    <>
      {/* This page and /contact/ serve the same purpose — every internal
          link on the site points to /contact/, so the canonical below
          consolidates SEO signals there instead of splitting them across
          two URLs. */}
      <Seo
        title="Contact Us"
        description="Get in touch with Maranatha Wellbeing Support WA. Call 0493 396 991 or send an enquiry — we'll help you understand your options and next steps."
        path="/contact/"
      />
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
