import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import SingleProductsContent from "../components/Shop/SingleProductsContent";
import Footer from "../components/Layouts/Footer";

const SingleProducts = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Single Products"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Single Products"
        bgImgClass="item-bg1"
      />

      <SingleProductsContent />

      <Footer />
    </>
  );
};

export default SingleProducts;
