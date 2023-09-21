import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamContent from "../components/Team/TeamContent";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Our Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImgClass="item-bg1"
      />

      <TeamContent />

      <FreeTrialForm />

      <Footer />
    </>
  );
};

export default Team;
