import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import SupportTasks from "../components/Services/supportTasks";
import Footer from "../components/Layouts/Footer";


const SupportDailyTask = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Support with daily tasks"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Support with daily tasks"
        bgImgClass="item-bg4"
      />

      <SupportTasks />
      

      <Footer />
    </>
  );
};

export default SupportDailyTask;
