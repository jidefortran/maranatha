import React from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Maranatha Wellbeing Support WA</title>
        <meta
          name="description"
          content="How Maranatha Wellbeing Support WA collects, uses and protects personal information."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <div className="mar-legal-page">
        <div className="container">
          <p className="mar-legal-updated">Last updated: September 2026</p>

          <h4>Our commitment to your privacy</h4>
          <p>
            Maranatha Wellbeing Support WA (&quot;Maranatha&quot;, &quot;we&quot;, &quot;us&quot;) respects
            your privacy. This policy explains what personal information we
            collect, how we use it, and the choices you have. We aim to
            handle personal information in accordance with the Australian
            Privacy Principles under the Privacy Act 1988 (Cth).
          </p>

          <h4>Information we collect</h4>
          <p>
            We may collect personal information such as your name, contact
            details, and information about your support needs, including
            health and disability-related information where it is relevant
            to the support you are seeking. We collect this information
            directly from you, or from a person authorised to act on your
            behalf, when you contact us, use our online forms, or engage
            with our services.
          </p>

          <h4>How we use your information</h4>
          <p>
            We use personal information to respond to your enquiries,
            provide and coordinate support services, and communicate with
            you about your support. Where appropriate and with your consent,
            we may share relevant information with specialist, medical or
            other support services we help connect you with. We do not sell
            personal information to third parties.
          </p>

          <h4>How we store and protect your information</h4>
          <p>
            We take reasonable steps to keep personal information secure and
            protect it from misuse, loss, and unauthorised access. Access to
            personal information is limited to staff who need it to provide
            support to you.
          </p>

          <h4>Access and correction</h4>
          <p>
            You can ask to access or correct the personal information we
            hold about you at any time by contacting us using the details
            below.
          </p>

          <h4>Complaints</h4>
          <p>
            If you have a concern about how we have handled your personal
            information, please contact us so we can work with you to
            resolve it.
          </p>

          <h4>Contact us</h4>
          <p>
            Email: info@maranathagroup.com.au
            <br />
            Phone: 0493 396 991
            <br />
            Address: 126 Grand Boulevard, Joondalup WA 6021
          </p>

          <p className="mar-legal-note">
            This policy may be updated from time to time; the current
            version will always be available on this page.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
