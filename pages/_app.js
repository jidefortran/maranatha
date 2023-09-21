/* import { ApolloProvider } from '@apollo/client'
import '../styles/index.scss'
import { client } from '../components/lib/apollo'



function MyApp({ Component, pageProps }) {
  return(
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  ) 
}

export default MyApp

*/




import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import { client } from '../components/lib/apollo'
import { ApolloProvider } from '@apollo/client'
import "../styles/css/style.css"

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Maranatha Wellbeing Support WA</title>
      </Head>
 <ApolloProvider client={client}>
      <Component {...pageProps} />
  </ApolloProvider>
      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
