import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";

import Services from "../components/HomeOne/Services";

import BlogPost from "../components/Common/BlogPost";

import Footer from "../components/Layouts/Footer";
import WhyChooseUs from "../components/HomeOne/WhyChooseUs";

const Index = () => {
  return (
    <>
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
