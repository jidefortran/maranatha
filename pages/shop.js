import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Products from "../components/Shop/Products";
import Footer from "../components/Layouts/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        bgImgClass="item-bg2"
      />

      <Products />

      <Footer />
    </>
  );
};

export default Shop;
