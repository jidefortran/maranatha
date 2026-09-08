import React from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQs | Maranatha Wellbeing Support WA</title>
        <meta
          name="description"
          content="Answers to common questions about Maranatha Wellbeing Support WA's disability, mental health and community wellbeing services."
        />
      </Head>
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
