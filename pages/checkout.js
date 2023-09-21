import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CheckoutForm from "../components/Shop/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        bgImgClass="item-bg2"
      />

      <CheckoutForm />

      <Footer />
    </>
  );
};

export default Checkout;
