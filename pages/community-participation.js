
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import CommunityParticipation from "../components/Services/communityParticipation";
import Navbar from "../components/Layouts/Navbar";

const Participation = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Community Participation"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Community Participation"
        bgImgClass="item-bg2"
      />
<CommunityParticipation/>
    
      <Footer />
    </>
  );
};

export default Participation;
