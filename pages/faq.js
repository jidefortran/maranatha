import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";
import Seo from "../components/Common/Seo";

const Faq = () => {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about Maranatha Wellbeing Support WA's disability, mental health and community wellbeing services."
        path="/faq/"
      />
      <Navbar />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImgClass="item-bg1"
      />

      <FaqContent />

      <Footer />
    </>
  );
};

export default Faq;
