import React from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions | Maranatha Wellbeing Support WA</title>
        <meta
          name="description"
          content="Terms and conditions for using the Maranatha Wellbeing Support WA website."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <div className="mar-legal-page">
        <div className="container">
          <p className="mar-legal-updated">Last updated: September 2026</p>

          <h4>About this website</h4>
          <p>
            This website is operated by Maranatha Wellbeing Support WA
            ("Maranatha", "we", "us"). By using this website, you agree to
            these terms and conditions.
          </p>

          <h4>Not a substitute for professional or emergency services</h4>
          <p>
            Information on this website is general in nature and does not
            replace medical, clinical, legal or professional advice. It does
            not replace emergency services. If you are in immediate danger,
            call 000.
          </p>

          <h4>Accuracy of information</h4>
          <p>
            We take reasonable care to keep information on this website
            accurate and up to date, but we do not guarantee that all
            content is complete, current or error-free. Details about our
            services may change; please contact us to confirm current
            information relevant to your circumstances.
          </p>

          <h4>External links</h4>
          <p>
            This website may link to third-party websites and services for
            your convenience. We are not responsible for the content or
            privacy practices of those external sites.
          </p>

          <h4>Intellectual property</h4>
          <p>
            The content on this website, including text, images and design,
            is owned by or licensed to Maranatha Wellbeing Support WA and
            may not be reproduced without permission.
          </p>

          <h4>Limitation of liability</h4>
          <p>
            To the extent permitted by law, Maranatha is not liable for any
            loss or damage arising from your use of this website.
          </p>

          <h4>Governing law</h4>
          <p>
            These terms are governed by the laws of Western Australia,
            Australia.
          </p>

          <h4>Contact us</h4>
          <p>
            Email: info@maranathagroup.com.au
            <br />
            Phone: 0493 396 991
            <br />
            Address: 126 Grand Boulevard, Joondalup WA 6021
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
