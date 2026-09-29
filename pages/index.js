import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";

import Services from "../components/HomeOne/Services";

import BlogPost from "../components/Common/BlogPost";

import Footer from "../components/Layouts/Footer";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
import Seo from "../components/Common/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="Maranatha Wellbeing Support WA"
        description="Practical, person-centred NDIS support in Perth and Western Australia — case management, supported independent living, mental health, community participation and more."
        path="/"
      />
      <Navbar />

      <MainBanner />


      <WhyChooseUs/>

      <Services />

   


   

      

      <BlogPost />

      
      
      <Footer />
    </>
  );
};

export default Index;
