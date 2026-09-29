import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Seo from "../components/Common/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Maranatha Wellbeing Support WA. Call 0493 396 991 or send an enquiry — we'll help you understand your options and next steps."
        path="/contact/"
      />
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg9"
      />

      <ContactFormContent />

      <Footer />
    </>
  );
};

export default Contact;
