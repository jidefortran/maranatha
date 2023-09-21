
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Respite from "../components/Services/respite";
import Navbar from "../components/Layouts/Navbar";

const SupportedIndependentLiving = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Supported Independent Living"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Supported Independent Living"
        bgImgClass="item-bg6"
      />
<Respite/>
    
      <Footer />
    </>
  );
};

export default SupportedIndependentLiving;
