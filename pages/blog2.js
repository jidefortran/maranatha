import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogWithRightSidebar from "../components/Blog/BlogWithRightSidebar";
import Footer from "../components/Layouts/Footer";

const Blog2 = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog With Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog With Right Sidebar"
        bgImgClass="item-bg3"
      />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};

export default Blog2;
