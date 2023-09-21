import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import ProjectsCard from "../components/Projects/ProjectsCard";

const Projects = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        bgImgClass="item-bg1"
      />

      <ProjectsCard />

      <Footer />
    </>
  );
};

export default Projects;
