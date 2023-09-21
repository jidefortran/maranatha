import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CartTable from "../components/Shop/CartTable";

const Cart = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        bgImgClass="item-bg1"
      />

      <CartTable />

      <Footer />
    </>
  );
};

export default Cart;
